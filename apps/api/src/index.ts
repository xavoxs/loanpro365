import { Hono } from 'hono';
import { cors } from 'hono/cors';

type Env = { DB?: D1Database; ALLOWED_ORIGIN: string };
const app = new Hono<{ Bindings: Env }>();

app.use('/v1/*', (c, next) => cors({ origin: c.env.ALLOWED_ORIGIN, allowMethods: ['GET', 'POST'] })(c, next));

app.get('/v1/health', (c) => c.json({ ok: true }));

/** Datos que NUNCA se aceptan en el sitio: quedan para el 1003 del prestamista. */
const FORBIDDEN = ['ssn', 'dob', 'accountNumber', 'routingNumber'];

app.post('/v1/leads', async (c) => {
  const body = await c.req.json<Record<string, unknown>>().catch(() => null);
  if (!body) return c.json({ error: 'invalid_json' }, 400);
  if (FORBIDDEN.some((k) => k in body)) return c.json({ error: 'forbidden_field' }, 400);
  const { name, phone, email, locale, sourceTool, consentTcpa, consentTextVersion, payload } = body as any;
  if (typeof name !== 'string' || !name.trim()) return c.json({ error: 'name_required' }, 400);
  if (!phone && !email) return c.json({ error: 'contact_required' }, 400);
  if (locale !== 'en' && locale !== 'es') return c.json({ error: 'locale' }, 400);
  if (consentTcpa !== true || typeof consentTextVersion !== 'string') return c.json({ error: 'consent_required' }, 400);

  const id = crypto.randomUUID();
  if (c.env.DB) {
    await c.env.DB.prepare(
      'INSERT INTO leads (id, created_at, locale, source_tool, name, phone, email, consent_tcpa, consent_text_version, payload_json) VALUES (?,?,?,?,?,?,?,?,?,?)',
    ).bind(id, new Date().toISOString(), locale, sourceTool ?? null, name.trim(), phone ?? null, email ?? null, 1, consentTextVersion, JSON.stringify(payload ?? null)).run();
  }
  // TODO fase 2: Turnstile, rate limit, aviso por correo al broker.
  return c.json({ id }, 201);
});

export default app;
