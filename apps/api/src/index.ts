import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { buildLeadEmail, sendLeadEmail } from './notify';

type Env = {
  DB?: D1Database;
  ALLOWED_ORIGIN: string;
  /** Límite de envíos por IP (binding de rate limiting de Workers). */
  LEADS_LIMITER?: { limit(o: { key: string }): Promise<{ success: boolean }> };
  /** Aviso al broker vía Resend. Si falta la clave, el lead se guarda igual y no se envía aviso. */
  RESEND_API_KEY?: string;
  NOTIFY_TO?: string;
  NOTIFY_FROM?: string;
  /** Clave del panel (secreto del Worker). Sin ella, /v1/admin responde 503. */
  ADMIN_TOKEN?: string;
};
const app = new Hono<{ Bindings: Env }>();

app.use('/v1/*', (c, next) =>
  cors({
    origin: c.env.ALLOWED_ORIGIN.split(',').map((o) => o.trim()),
    allowMethods: ['GET', 'POST', 'PATCH'],
    allowHeaders: ['Content-Type', 'Authorization'],
  })(c, next),
);

/** Comparación en tiempo constante para no filtrar la clave por tiempos de respuesta. */
async function sameSecret(a: string, b: string) {
  const enc = new TextEncoder();
  const [ha, hb] = await Promise.all([crypto.subtle.digest('SHA-256', enc.encode(a)), crypto.subtle.digest('SHA-256', enc.encode(b))]);
  const x = new Uint8Array(ha), y = new Uint8Array(hb);
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
  return diff === 0;
}

app.use('/v1/admin/*', async (c, next) => {
  if (c.req.method === 'OPTIONS') return next();
  if (!c.env.ADMIN_TOKEN || !c.env.DB) return c.json({ error: 'admin_not_configured' }, 503);
  const auth = c.req.header('authorization') ?? '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  if (!token || !(await sameSecret(token, c.env.ADMIN_TOKEN))) return c.json({ error: 'unauthorized' }, 401);
  await next();
});

export const STAGES = ['nuevo', 'contactado', 'documentos', 'enviado', 'aprobado', 'cerrado', 'perdido'] as const;

app.get('/v1/admin/leads', async (c) => {
  const q = (c.req.query('q') ?? '').trim().slice(0, 80);
  const stage = c.req.query('stage');
  const where: string[] = [];
  const args: unknown[] = [];
  if (q) { where.push('(name LIKE ? OR phone LIKE ? OR email LIKE ?)'); args.push(`%${q}%`, `%${q}%`, `%${q}%`); }
  if (stage && (STAGES as readonly string[]).includes(stage)) { where.push('stage = ?'); args.push(stage); }
  const sql = `SELECT id, created_at, updated_at, locale, source_tool, name, phone, email, stage, payload_json FROM leads ${where.length ? 'WHERE ' + where.join(' AND ') : ''} ORDER BY created_at DESC LIMIT 200`;
  const { results } = await c.env.DB!.prepare(sql).bind(...args).all();
  return c.json({ leads: results, stages: STAGES });
});

app.patch('/v1/admin/leads/:id', async (c) => {
  const id = c.req.param('id');
  const body = await c.req.json<{ stage?: string }>().catch(() => null);
  const to = body?.stage;
  if (!to || !(STAGES as readonly string[]).includes(to)) return c.json({ error: 'stage' }, 400);
  const row = await c.env.DB!.prepare('SELECT stage FROM leads WHERE id = ?').bind(id).first<{ stage: string }>();
  if (!row) return c.json({ error: 'not_found' }, 404);
  const now = new Date().toISOString();
  await c.env.DB!.batch([
    c.env.DB!.prepare('UPDATE leads SET stage = ?, updated_at = ? WHERE id = ?').bind(to, now, id),
    c.env.DB!.prepare('INSERT INTO lead_events (id, lead_id, type, from_stage, to_stage, actor, payload, created_at) VALUES (?,?,?,?,?,?,?,?)')
      .bind(crypto.randomUUID(), id, 'stage_change', row.stage, to, 'admin', null, now),
  ]);
  return c.json({ id, stage: to });
});

app.get('/v1/admin/metrics', async (c) => {
  const db = c.env.DB!;
  const since = new Date(Date.now() - 30 * 864e5).toISOString();
  const [total, last30, byStage, bySource] = await Promise.all([
    db.prepare('SELECT COUNT(*) n FROM leads').first<{ n: number }>(),
    db.prepare('SELECT COUNT(*) n FROM leads WHERE created_at >= ?').bind(since).first<{ n: number }>(),
    db.prepare('SELECT stage, COUNT(*) n FROM leads GROUP BY stage').all(),
    db.prepare("SELECT COALESCE(source_tool, 'otro') source, COUNT(*) n FROM leads GROUP BY source ORDER BY n DESC").all(),
  ]);
  return c.json({ total: total?.n ?? 0, last30: last30?.n ?? 0, byStage: byStage.results, bySource: bySource.results });
});

app.get('/v1/health', (c) => c.json({ ok: true }));

/** Datos que NUNCA se aceptan en el sitio: quedan para el 1003 del prestamista. */
const FORBIDDEN = ['ssn', 'dob', 'accountNumber', 'routingNumber'];

app.post('/v1/leads', async (c) => {
  if (c.env.LEADS_LIMITER) {
    const ip = c.req.header('cf-connecting-ip') ?? 'unknown';
    const { success } = await c.env.LEADS_LIMITER.limit({ key: ip });
    if (!success) return c.json({ error: 'rate_limited' }, 429);
  }

  const body = await c.req.json<Record<string, unknown>>().catch(() => null);
  if (!body) return c.json({ error: 'invalid_json' }, 400);
  // Campo trampa: invisible para personas; si viene lleno es un bot. Respondemos 201 sin guardar.
  if (typeof body.website === 'string' && body.website.trim()) return c.json({ id: 'ignored' }, 201);
  if (FORBIDDEN.some((k) => k in body)) return c.json({ error: 'forbidden_field' }, 400);
  const { name, phone, email, locale, sourceTool, consentTcpa, consentTextVersion, payload } = body as any;
  if (typeof name !== 'string' || !name.trim()) return c.json({ error: 'name_required' }, 400);
  if (!phone && !email) return c.json({ error: 'contact_required' }, 400);
  if (name.length > 120) return c.json({ error: 'name_length' }, 400);
  if (!/\p{L}{2,}/u.test(name)) return c.json({ error: 'name_letters' }, 400);
  if (phone && !/^[+()\d\s.-]{7,20}$/.test(String(phone))) return c.json({ error: 'phone' }, 400);
  if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(email))) return c.json({ error: 'email' }, 400);
  if (payload && JSON.stringify(payload).length > 4000) return c.json({ error: 'payload_size' }, 400);
  if (locale !== 'en' && locale !== 'es') return c.json({ error: 'locale' }, 400);
  if (consentTcpa !== true || typeof consentTextVersion !== 'string') return c.json({ error: 'consent_required' }, 400);

  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  if (c.env.DB) {
    await c.env.DB.prepare(
      'INSERT INTO leads (id, created_at, locale, source_tool, name, phone, email, consent_tcpa, consent_text_version, payload_json) VALUES (?,?,?,?,?,?,?,?,?,?)',
    ).bind(id, createdAt, locale, sourceTool ?? null, name.trim(), phone ?? null, email ?? null, 1, consentTextVersion, JSON.stringify(payload ?? null)).run();
  }

  const { RESEND_API_KEY, NOTIFY_TO, NOTIFY_FROM } = c.env;
  if (RESEND_API_KEY && NOTIFY_TO && NOTIFY_FROM) {
    const mail = buildLeadEmail({ id, createdAt, name: name.trim(), phone, email, locale, sourceTool, payload });
    const task = sendLeadEmail(RESEND_API_KEY, NOTIFY_FROM, NOTIFY_TO, mail).catch((e) => console.error('notify_failed', String(e)));
    try { c.executionCtx.waitUntil(task); } catch { await task; }
  }
  return c.json({ id }, 201);
});

export default app;
