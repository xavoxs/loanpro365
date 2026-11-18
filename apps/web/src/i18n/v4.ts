import type { Locale, RouteKey } from './index';

/**
 * Portada v4 (2026-11-17): dirección «hero cinematográfico + un solo campo + bento», tomada de referentes
 * modernos (Mercury, Better). Pocas palabras por bloque. Cifras con * = declaraciones de la empresa.
 */
type Tile = { key: RouteKey; t: string; d: string };

const en = {
  h1: 'Know what you can pay for your home.',
  sub: 'Your price range in Florida in seconds, with taxes and insurance included.',
  bar: { income: 'Monthly income', down: 'Savings', calc: 'Calculate' },
  trust: ['No sign-up', 'No credit check', 'NMLS #1486485'],
  result: 'Your estimated price range',
  pay: { h: 'Monthly payment at the top of your range', pi: 'Principal & interest', ti: 'Taxes & insurance' },
  next: 'Continue my pre-qualification',
  empty: 'Enter your monthly income to calculate.',
  note: 'Estimate: 6.5% for 30 years, taxes and insurance at 3% of price per year, up to 43% of income for debts. Not an offer of credit.',
  bento: {
    h: 'One company for every kind of loan',
    buy: { key: 'buy', t: 'Buy your home', d: 'FHA from 3.5% down, VA, USDA and conventional. Options for credit challenges too.' } as Tile,
    refi: { key: 'refinance', t: 'Refinance', d: 'Lower your payment or use your home’s equity.' } as Tile,
    biz: { key: 'commercial', t: 'Invest and grow', d: 'DSCR and commercial loans for properties and businesses.' } as Tile,
    stat1: { n: '98%*', d: 'of our pre-approvals close' },
    stat2: { n: '15+*', d: 'years financing in Florida' },
    lenders: { t: 'We compare several lenders for you', d: 'One conversation, in English or Spanish, instead of calling bank after bank.' },
    note: '*Company figures published on loanpro365.com.',
  },
  steps: {
    h: 'Three steps to your keys',
    items: [
      { t: 'Calculate', d: 'See your price range with two numbers.' },
      { t: 'Pre-qualify', d: 'Four quick questions. No Social Security number.' },
      { t: 'Close', d: 'We compare lenders and guide you to closing.' },
    ],
    cta: 'Start my pre-qualification',
  },
  learn: { h: 'Learn before you decide', all: 'All guides' },
  faq: 'Common questions',
  final: { h: 'Know your number today.', d: 'It takes 2 minutes and doesn’t affect your credit.', cta: 'Start my pre-qualification', talk: 'Talk to an advisor' },
};

type V4 = typeof en;
const es: V4 = {
  h1: 'Calcula cuánto puedes pagar por tu casa.',
  sub: 'Tu rango de precio en Florida en segundos, con impuestos y seguro incluidos.',
  bar: { income: 'Ingreso mensual', down: 'Ahorros', calc: 'Calcular' },
  trust: ['Sin registrarte', 'Sin consulta de crédito', 'NMLS #1486485'],
  result: 'Tu rango de precio estimado',
  pay: { h: 'Pago mensual en el tope de tu rango', pi: 'Capital e interés', ti: 'Impuestos y seguro' },
  next: 'Continuar con mi precalificación',
  empty: 'Escribe tu ingreso mensual para calcular.',
  note: 'Estimación: 6.5% a 30 años, impuestos y seguro del 3% del precio al año, hasta 43% del ingreso para deudas. No es una oferta de crédito.',
  bento: {
    h: 'Una sola empresa para cada tipo de préstamo',
    buy: { key: 'buy', t: 'Compra tu casa', d: 'FHA desde 3.5% de pago inicial, VA, USDA y convencional. También con crédito difícil.' },
    refi: { key: 'refinance', t: 'Refinancia', d: 'Baja tu pago o usa el capital de tu casa.' },
    biz: { key: 'commercial', t: 'Invierte y crece', d: 'Préstamos DSCR y comerciales para propiedades y negocios.' },
    stat1: { n: '98%*', d: 'de nuestros preaprobados cierran' },
    stat2: { n: '15+*', d: 'años financiando en Florida' },
    lenders: { t: 'Comparamos varios prestamistas por ti', d: 'Una sola conversación, en español o en inglés, en lugar de llamar banco por banco.' },
    note: '*Cifras de la empresa publicadas en loanpro365.com.',
  },
  steps: {
    h: 'Tres pasos hasta tus llaves',
    items: [
      { t: 'Calcula', d: 'Ve tu rango de precio con dos datos.' },
      { t: 'Precalifícate', d: 'Cuatro preguntas rápidas. Sin número de Seguro Social.' },
      { t: 'Cierra', d: 'Comparamos prestamistas y te acompañamos hasta el cierre.' },
    ],
    cta: 'Empezar mi precalificación',
  },
  learn: { h: 'Aprende antes de decidir', all: 'Todas las guías' },
  faq: 'Preguntas frecuentes',
  final: { h: 'Conoce tu número hoy.', d: 'Te toma 2 minutos y no afecta tu crédito.', cta: 'Empezar mi precalificación', talk: 'Hablar con un asesor' },
};

export const V4COPY: Record<Locale, V4> = { en, es };
