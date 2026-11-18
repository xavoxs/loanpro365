/**
 * DATOS FICTICIOS para el panel de demostración (/admin). No son clientes reales ni métricas reales.
 * Todo el panel muestra el aviso «Modo demo · datos ficticios».
 */
export type Stage = 'nuevo' | 'contactado' | 'precalificado' | 'en-proceso' | 'cerrado' | 'perdido';
export type Source = 'Precalificación' | 'Llamada solicitada' | 'WhatsApp' | 'Calculadora' | 'Referido';

export interface DemoLead {
  id: string;
  name: string;
  phone: string;
  lang: 'es' | 'en';
  county: string;
  goal: 'Compra' | 'Refinanciación' | 'Comercial' | 'Inversión';
  amount: number;
  score: string;
  source: Source;
  stage: Stage;
  owner: string;
  created: string; // AAAA-MM-DD
  next: string;
}

export const STAGES: { key: Stage; label: string }[] = [
  { key: 'nuevo', label: 'Nuevo' },
  { key: 'contactado', label: 'Contactado' },
  { key: 'precalificado', label: 'Precalificado' },
  { key: 'en-proceso', label: 'En proceso' },
  { key: 'cerrado', label: 'Cerrado' },
  { key: 'perdido', label: 'Perdido' },
];

export const LEADS: DemoLead[] = [
  { id: 'L-1042', name: 'Daniela Ríos (demo)', phone: '(954) 555-0118', lang: 'es', county: 'Broward', goal: 'Compra', amount: 345000, score: '640–679', source: 'Precalificación', stage: 'nuevo', owner: 'Equipo', created: '2026-11-17', next: 'Llamar hoy 4 p. m.' },
  { id: 'L-1041', name: 'Marcus Lee (demo)', phone: '(305) 555-0142', lang: 'en', county: 'Miami-Dade', goal: 'Refinanciación', amount: 410000, score: '700–739', source: 'Calculadora', stage: 'contactado', owner: 'Pablo S.', created: '2026-11-16', next: 'Enviar Loan Estimate' },
  { id: 'L-1040', name: 'Ana y Luis Pérez (demo)', phone: '(561) 555-0175', lang: 'es', county: 'Palm Beach', goal: 'Compra', amount: 389000, score: '620–679', source: 'WhatsApp', stage: 'precalificado', owner: 'Pablo S.', created: '2026-11-15', next: 'Carta de preaprobación' },
  { id: 'L-1039', name: 'Grupo Sol Retail LLC (demo)', phone: '(954) 555-0190', lang: 'en', county: 'Broward', goal: 'Comercial', amount: 1850000, score: 'N/A', source: 'Referido', stage: 'en-proceso', owner: 'Pablo S.', created: '2026-11-12', next: 'Rent roll pendiente' },
  { id: 'L-1038', name: 'Carlos Mendoza (demo)', phone: '(786) 555-0133', lang: 'es', county: 'Miami-Dade', goal: 'Inversión', amount: 520000, score: '740+', source: 'Llamada solicitada', stage: 'precalificado', owner: 'Equipo', created: '2026-11-11', next: 'Calcular DSCR' },
  { id: 'L-1037', name: 'Jessica Brown (demo)', phone: '(954) 555-0161', lang: 'en', county: 'Broward', goal: 'Compra', amount: 298000, score: '580–619', source: 'Precalificación', stage: 'contactado', owner: 'Equipo', created: '2026-11-10', next: 'Plan de crédito' },
  { id: 'L-1036', name: 'Valeria Castro (demo)', phone: '(305) 555-0127', lang: 'es', county: 'Miami-Dade', goal: 'Refinanciación', amount: 275000, score: '680–739', source: 'WhatsApp', stage: 'cerrado', owner: 'Pablo S.', created: '2026-11-02', next: '—' },
  { id: 'L-1035', name: 'Robert Kim (demo)', phone: '(561) 555-0109', lang: 'en', county: 'Palm Beach', goal: 'Compra', amount: 455000, score: '740+', source: 'Calculadora', stage: 'en-proceso', owner: 'Pablo S.', created: '2026-10-29', next: 'Tasación programada' },
  { id: 'L-1034', name: 'José Ramírez (demo)', phone: '(954) 555-0184', lang: 'es', county: 'Broward', goal: 'Compra', amount: 320000, score: '500–579', source: 'Precalificación', stage: 'perdido', owner: 'Equipo', created: '2026-10-25', next: 'Retomar en 90 días' },
  { id: 'L-1033', name: 'Laura Gómez (demo)', phone: '(786) 555-0150', lang: 'es', county: 'Miami-Dade', goal: 'Compra', amount: 365000, score: '640–679', source: 'Referido', stage: 'cerrado', owner: 'Pablo S.', created: '2026-10-20', next: '—' },
  { id: 'L-1032', name: 'Michael Torres (demo)', phone: '(954) 555-0102', lang: 'en', county: 'Broward', goal: 'Inversión', amount: 610000, score: '700–739', source: 'Llamada solicitada', stage: 'nuevo', owner: 'Equipo', created: '2026-11-17', next: 'Llamar mañana 10 a. m.' },
];

export const METRICS = {
  period: 'Últimos 30 días (demo)',
  kpis: [
    { label: 'Leads nuevos', value: '128', delta: '+18%' },
    { label: 'Precalificaciones', value: '46', delta: '+9%' },
    { label: 'Tasa de conversión', value: '35.9%', delta: '+2.4 pts' },
    { label: 'Préstamos cerrados', value: '12', delta: '+3' },
  ],
  weekly: [
    { w: 'Sem 1', leads: 24, prequal: 8 },
    { w: 'Sem 2', leads: 31, prequal: 11 },
    { w: 'Sem 3', leads: 35, prequal: 13 },
    { w: 'Sem 4', leads: 38, prequal: 14 },
  ],
  sources: [
    { label: 'Precalificación web', pct: 38 },
    { label: 'Calculadora', pct: 24 },
    { label: 'WhatsApp', pct: 21 },
    { label: 'Llamada solicitada', pct: 11 },
    { label: 'Referidos', pct: 6 },
  ],
  langs: [ { label: 'Español', pct: 64 }, { label: 'Inglés', pct: 36 } ],
};

export interface DemoChat {
  id: string;
  name: string;
  phone: string;
  lang: 'es' | 'en';
  unread: number;
  last: string;
  time: string;
  messages: { from: 'cliente' | 'asesor'; text: string; time: string }[];
}

export const CHATS: DemoChat[] = [
  { id: 'c1', name: 'Daniela Ríos (demo)', phone: '(954) 555-0118', lang: 'es', unread: 2, last: '¿Cuánto necesito de pago inicial?', time: '10:42',
    messages: [
      { from: 'cliente', text: 'Hola, usé la calculadora y me salió entre $290,000 y $345,000.', time: '10:39' },
      { from: 'cliente', text: '¿Cuánto necesito de pago inicial?', time: '10:42' },
    ] },
  { id: 'c2', name: 'Marcus Lee (demo)', phone: '(305) 555-0142', lang: 'en', unread: 0, last: 'Thanks, I will send the documents today.', time: 'Ayer',
    messages: [
      { from: 'asesor', text: 'Hi Marcus, your refinance break-even is about 26 months with the current offer.', time: 'Ayer 3:10' },
      { from: 'cliente', text: 'Thanks, I will send the documents today.', time: 'Ayer 3:25' },
    ] },
  { id: 'c3', name: 'Ana y Luis Pérez (demo)', phone: '(561) 555-0175', lang: 'es', unread: 1, last: '¿Ya tienen la carta de preaprobación?', time: 'Ayer',
    messages: [
      { from: 'asesor', text: 'Recibimos sus talones de pago y estados de cuenta. Estamos revisando con dos prestamistas.', time: 'Ayer 11:02' },
      { from: 'cliente', text: '¿Ya tienen la carta de preaprobación?', time: 'Ayer 6:15' },
    ] },
  { id: 'c4', name: 'Carlos Mendoza (demo)', phone: '(786) 555-0133', lang: 'es', unread: 0, last: 'La renta es de $3,400 al mes.', time: 'Lun',
    messages: [
      { from: 'asesor', text: 'Para el préstamo DSCR necesitamos la renta mensual de la propiedad.', time: 'Lun 9:30' },
      { from: 'cliente', text: 'La renta es de $3,400 al mes.', time: 'Lun 9:48' },
    ] },
];

export const QUICK_REPLIES = [
  'Gracias por escribirnos. Un asesor te responde en minutos.',
  'Puedes precalificarte en 2 minutos aquí: loanpro365.com/es/precalificacion/',
  '¿Me compartes tu ingreso mensual aproximado y tus ahorros?',
];
