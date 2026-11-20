import { describe, expect, it } from 'vitest';
import app from '../src/index';

const env = { ALLOWED_ORIGIN: 'https://loanpro365.com' };
const post = (body: unknown) =>
  app.request('/v1/leads', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }, env);
const valid = { name: 'Ana Pérez', phone: '(954) 555-0100', locale: 'es', consentTcpa: true, consentTextVersion: 'tcpa-2026-11-v1', payload: { goal: 'buy' } };

describe('POST /v1/leads', () => {
  it('accepts a valid lead', async () => {
    const r = await post(valid);
    expect(r.status).toBe(201);
    expect((await r.json()).id).toBeTypeOf('string');
  });
  it('requires TCPA consent', async () => {
    expect((await post({ ...valid, consentTcpa: false })).status).toBe(400);
  });
  it('rejects sensitive fields', async () => {
    expect((await post({ ...valid, ssn: '123-45-6789' })).status).toBe(400);
  });
  it('validates phone and locale', async () => {
    expect((await post({ ...valid, phone: 'abc' })).status).toBe(400);
    expect((await post({ ...valid, locale: 'fr' })).status).toBe(400);
  });
});

import { vi } from 'vitest';
import { buildLeadEmail } from '../src/notify';

describe('protecciones y aviso', () => {
  it('ignores honeypot submissions without storing', async () => {
    const r = await post({ ...valid, website: 'spam.example' });
    expect(r.status).toBe(201);
    expect((await r.json()).id).toBe('ignored');
  });
  it('returns 429 when the limiter refuses', async () => {
    const r = await app.request('/v1/leads', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(valid) },
      { ...env, LEADS_LIMITER: { limit: async () => ({ success: false }) } });
    expect(r.status).toBe(429);
  });
  it('sends the broker email when Resend is configured', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response('{}', { status: 200 }));
    const r = await app.request('/v1/leads', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(valid) },
      { ...env, RESEND_API_KEY: 'test', NOTIFY_TO: 'broker@example.com', NOTIFY_FROM: 'Leads <leads@example.com>' });
    expect(r.status).toBe(201);
    expect(fetchMock).toHaveBeenCalledOnce();
    expect(String(fetchMock.mock.calls[0][0])).toBe('https://api.resend.com/emails');
    fetchMock.mockRestore();
  });
  it('escapes HTML in the email', () => {
    const m = buildLeadEmail({ id: '1', createdAt: 'now', name: '<b>x</b>', locale: 'es', payload: { county: 'broward' } });
    expect(m.html).not.toContain('<b>x</b>');
    expect(m.subject).toContain('broward');
  });
});

describe('admin API', () => {
  const fakeDb = {
    prepare: () => ({ bind() { return this; }, all: async () => ({ results: [] }), first: async () => ({ n: 0, stage: 'nuevo' }), run: async () => ({}) }),
    batch: async () => [],
  } as any;
  const aenv = { ...env, ADMIN_TOKEN: 'clave-de-prueba-larga', DB: fakeDb };
  const get = (path: string, token?: string, e: any = aenv) =>
    app.request(path, { headers: token ? { authorization: `Bearer ${token}` } : {} }, e);

  it('rejects names without letters', async () => {
    expect((await post({ ...valid, name: '2000000' })).status).toBe(400);
  });
  it('returns 503 when no admin token is configured', async () => {
    expect((await get('/v1/admin/leads', 'x', env)).status).toBe(503);
  });
  it('requires the right bearer token', async () => {
    expect((await get('/v1/admin/leads')).status).toBe(401);
    expect((await get('/v1/admin/leads', 'mala')).status).toBe(401);
    expect((await get('/v1/admin/leads', 'clave-de-prueba-larga')).status).toBe(200);
  });
  it('returns metrics', async () => {
    const r = await get('/v1/admin/metrics', 'clave-de-prueba-larga');
    expect(r.status).toBe(200);
    expect((await r.json()).total).toBe(0);
  });
  it('validates stage on PATCH', async () => {
    const patch = (stage: string) => app.request('/v1/admin/leads/abc', { method: 'PATCH', headers: { authorization: 'Bearer clave-de-prueba-larga', 'content-type': 'application/json' }, body: JSON.stringify({ stage }) }, aenv);
    expect((await patch('inventado')).status).toBe(400);
    expect((await patch('contactado')).status).toBe(200);
  });
});
