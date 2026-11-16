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
