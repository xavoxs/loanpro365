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
};
const app = new Hono<{ Bindings: Env }>();

app.use('/v1/*', (c, next) =>
  cors({ origin: c.env.ALLOWED_ORIGIN.split(',').map((o) => o.trim()), allowMethods: ['GET', 'POST'] })(c, next),
);

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
