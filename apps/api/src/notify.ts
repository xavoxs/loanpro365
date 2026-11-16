/** Aviso al broker de un lead nuevo. Solo datos mínimos de contacto y del perfil; nada sensible. */
export interface LeadForEmail {
  id: string;
  createdAt: string;
  name: string;
  phone?: string;
  email?: string;
  locale: 'en' | 'es';
  sourceTool?: string;
  payload?: Record<string, unknown> | null;
}

const esc = (s: unknown) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
const usd = (n: unknown) => (typeof n === 'number' ? n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }) : '—');

export function buildLeadEmail(l: LeadForEmail) {
  const p = (l.payload ?? {}) as Record<string, any>;
  const rows: [string, string][] = [
    ['Nombre', esc(l.name)],
    ['Teléfono', esc(l.phone ?? '—')],
    ['Correo', esc(l.email ?? '—')],
    ['Idioma', l.locale === 'es' ? 'Español' : 'English'],
    ['Origen', esc(l.sourceTool ?? 'web')],
    ['Objetivo', esc(p.goal ?? '—')],
    ['Condado', esc(p.county ?? '—')],
    ['Precio', usd(p.price)],
    ['Pago inicial', usd(p.down)],
    ['Ingreso mensual', usd(p.income)],
    ['Deudas mensuales', usd(p.debts)],
    ['Puntaje (rango)', esc(p.score ?? '—')],
    ['Veterano', p.veteran ? 'Sí' : 'No'],
    ['Primer comprador', p.firstTimeBuyer ? 'Sí' : 'No'],
    ['Precio máximo estimado', usd(p.estimate?.maxPrice)],
    ['Programas posibles', esc((p.estimate?.programs ?? []).join(', ') || '—')],
  ];
  const subject = `Nuevo lead: ${l.name} (${l.locale.toUpperCase()}${p.county ? ` · ${p.county}` : ''})`;
  const html =
    `<p>Lead recibido ${esc(l.createdAt)} · id ${esc(l.id)}</p><table>` +
    rows.map(([k, v]) => `<tr><td style="padding:2px 12px 2px 0;color:#555">${k}</td><td><strong>${v}</strong></td></tr>`).join('') +
    `</table><p style="color:#777;font-size:12px">La persona dio su consentimiento para ser contactada. Estimación generada por el sitio; no es una oferta de crédito.</p>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');
  return { subject, html, text };
}

export async function sendLeadEmail(apiKey: string, from: string, to: string, mail: { subject: string; html: string; text: string }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${apiKey}`, 'content-type': 'application/json' },
    body: JSON.stringify({ from, to: to.split(',').map((s) => s.trim()), subject: mail.subject, html: mail.html, text: mail.text }),
  });
  if (!res.ok) throw new Error(`resend ${res.status}`);
}
