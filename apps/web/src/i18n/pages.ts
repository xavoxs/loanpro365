import type { Locale, RouteKey, ToolKey } from './index';

/**
 * Contenido de las páginas informativas. Misma estructura en ambos idiomas.
 * Regla: ninguna cifra sin fuente pública; las citadas aquí son requisitos generales de programas federales
 * (HUD 4000.1, VA, Fannie Mae) y el asesor confirma cada caso.
 */
export interface Section { h: string; p?: string; list?: string[] }
export interface PageContent {
  title: string;
  lead: string;
  sections: Section[];
  tools?: ToolKey[];
  cta?: 'prequal' | 'talk';
}

type ContentKey = Exclude<RouteKey, 'home' | 'tools'>;

const en: Record<ContentKey, PageContent> = {
  buy: {
    title: 'Buy a home in South Florida',
    lead: 'First home or next home: I compare loan programs and lenders so you see your real options before you make an offer.',
    sections: [
      { h: 'Loan programs I work with', list: [
        'FHA — down payment from 3.5% with a credit score of 580 or higher (HUD Handbook 4000.1).',
        'VA — for eligible veterans and service members, often with no down payment (U.S. Department of Veterans Affairs).',
        'Conventional — including HomeReady, with down payment from 3% for eligible buyers (Fannie Mae).',
        'Self-employed and ITIN options — ask me which lenders accept your documentation.',
      ] },
      { h: 'How it works', list: [
        '1. Check what you can afford with the free calculator.',
        '2. Pre-qualify with me — it takes a few minutes.',
        '3. I compare lenders and send you the options side by side.',
        '4. You make your offer with a pre-approval letter.',
        '5. I guide you through appraisal, insurance and closing.',
      ] },
      { h: 'Florida costs to plan for', p: 'Homeowners and wind insurance, flood insurance in some zones, HOA or condo fees, and Florida documentary stamp and intangible taxes at closing. The tools below include them.' },
    ],
    tools: ['affordability', 'payment', 'closing'],
    cta: 'prequal',
  },
  refinance: {
    title: 'Refinance your mortgage',
    lead: 'Lower your payment, shorten your term or take cash out — only if the numbers make sense for you.',
    sections: [
      { h: 'Common reasons to refinance', list: ['Lower interest rate or monthly payment.', 'Switch from an adjustable to a fixed rate.', 'Cash-out to consolidate higher-interest debt or renovate.', 'Remove mortgage insurance when you have enough equity.'] },
      { h: 'Is it worth it?', p: 'Compare your monthly savings with the closing costs. The break-even point is the number of months it takes for the savings to cover those costs.' },
    ],
    tools: ['closing'],
    cta: 'talk',
  },
  credit: {
    title: 'Mortgage options if your credit isn’t perfect',
    lead: 'A low score or a past problem doesn’t always mean no. Let’s look at what you can do today and what to improve.',
    sections: [
      { h: 'Programs that may fit', list: [
        'FHA with 3.5% down from a 580 score, or 10% down from 500 (HUD Handbook 4000.1).',
        'Lenders with manual underwriting for limited credit history.',
        'A plan to improve your score before applying, if that gets you better terms.',
      ] },
      { h: 'What usually helps', list: ['Pay every account on time from now on.', 'Lower credit card balances below 30% of the limit.', 'Check your reports for errors at AnnualCreditReport.com (free).', 'Avoid opening new credit while you prepare.'] },
    ],
    cta: 'talk',
  },
  investors: {
    title: 'Loans for real estate investors',
    lead: 'Rental property, short-term rental or commercial: financing based on the property’s income, not only yours.',
    sections: [
      { h: 'Options', list: ['DSCR loans — qualify with the property’s rent compared to its payment.', 'Conventional investment property loans.', 'Commercial loans for mixed-use and small commercial properties.'] },
      { h: 'What lenders look at', p: 'Rent vs. payment (DSCR), down payment, reserves, credit and property type. Requirements vary by lender; I compare them for you.' },
    ],
    cta: 'talk',
  },
  assistance: {
    title: 'Down payment assistance in Florida',
    lead: 'Florida and many counties offer help with down payment and closing costs for eligible buyers.',
    sections: [
      { h: 'Where to start', list: [
        'Florida Housing Finance Corporation — statewide first-time buyer programs (floridahousing.org).',
        'County and city programs in Broward, Miami-Dade and Palm Beach.',
        'Lender programs such as HomeReady with reduced down payment.',
      ] },
      { h: 'Important', p: 'Income limits, purchase price limits and funding change during the year. I check what is open today for your county before we count on it.' },
    ],
    cta: 'talk',
  },
  learn: {
    title: 'Learn',
    lead: 'Clear guides to buying, refinancing and understanding your mortgage — coming soon.',
    sections: [
      { h: 'Trusted official resources', list: ['Consumer Financial Protection Bureau — Buying a House (consumerfinance.gov).', 'HUD — Buying a home (hud.gov).', 'NMLS Consumer Access — verify any loan officer (nmlsconsumeraccess.org).'] },
    ],
  },
  about: {
    title: 'About Pablo Samsing',
    lead: 'Independent mortgage broker in South Florida. I work for you, not for one bank.',
    sections: [
      { h: 'How I work', list: ['I explain every step in English or Spanish.', 'I compare several lenders and show you the differences.', 'You can verify my license at any time on NMLS Consumer Access.'] },
    ],
    cta: 'talk',
  },
  prequal: {
    title: 'Pre-qualify',
    lead: 'Answer a few questions and I’ll tell you what programs fit you. Our 4-step online pre-qualification is coming soon; meanwhile, start here.',
    sections: [
      { h: 'What you’ll need', list: ['Approximate income and monthly debts.', 'How much you have saved for the down payment.', 'Your estimated credit score.'] },
      { h: 'Your privacy', p: 'This website never asks for your Social Security number, date of birth or bank account numbers.' },
    ],
    cta: 'talk',
  },
  contact: {
    title: 'Contact',
    lead: 'Call, message on WhatsApp or email — in English or Spanish.',
    sections: [],
    cta: 'talk',
  },
  legal: {
    title: 'Legal & disclosures',
    lead: 'Licensing, privacy and consumer information.',
    sections: [
      { h: 'Licensing', p: 'LoanPro365 Mortgages, NMLS #1486485. Pablo Samsing, NMLS #328337. Verify on NMLS Consumer Access.' },
      { h: 'Equal Housing Opportunity', p: 'We do business in accordance with the Fair Housing Act and the Equal Credit Opportunity Act.' },
      { h: 'Calculators', p: 'All calculators provide estimates for educational purposes only. They are not an offer of credit or a commitment to lend.' },
      { h: 'Privacy, complaints and accessibility', p: 'Full policies are being reviewed and will be published here.' },
    ],
  },
};

const es: Record<ContentKey, PageContent> = {
  buy: {
    title: 'Compra tu casa en el sur de Florida',
    lead: 'Primera casa o la siguiente: comparo programas y prestamistas para que veas tus opciones reales antes de hacer una oferta.',
    sections: [
      { h: 'Programas con los que trabajo', list: [
        'FHA: pago inicial desde 3.5% con puntaje de crédito de 580 o más (Manual HUD 4000.1).',
        'VA: para veteranos y militares elegibles, muchas veces sin pago inicial (Departamento de Asuntos de Veteranos).',
        'Convencional: incluye HomeReady, con pago inicial desde 3% para compradores elegibles (Fannie Mae).',
        'Opciones para trabajadores independientes y con ITIN: pregúntame qué prestamistas aceptan tus documentos.',
      ] },
      { h: 'Cómo funciona', list: [
        '1. Mira cuánto puedes comprar con la calculadora gratis.',
        '2. Precalifícate conmigo; toma unos minutos.',
        '3. Comparo prestamistas y te envío las opciones lado a lado.',
        '4. Haces tu oferta con carta de preaprobación.',
        '5. Te acompaño en la tasación, el seguro y el cierre.',
      ] },
      { h: 'Costos de Florida que debes prever', p: 'Seguro de hogar y de viento, seguro contra inundación en algunas zonas, cuotas de HOA o condominio, y los impuestos documentales e intangible de Florida al cierre. Las herramientas de abajo los incluyen.' },
    ],
    tools: ['affordability', 'payment', 'closing'],
    cta: 'prequal',
  },
  refinance: {
    title: 'Refinancia tu hipoteca',
    lead: 'Baja tu pago, acorta el plazo o saca efectivo, solo si los números tienen sentido para ti.',
    sections: [
      { h: 'Razones comunes para refinanciar', list: ['Tasa o pago mensual más bajo.', 'Pasar de tasa ajustable a fija.', 'Sacar efectivo para consolidar deudas caras o remodelar.', 'Quitar el seguro hipotecario cuando ya tienes suficiente capital.'] },
      { h: '¿Vale la pena?', p: 'Compara tu ahorro mensual con los costos de cierre. El punto de equilibrio es la cantidad de meses que tarda el ahorro en cubrir esos costos.' },
    ],
    tools: ['closing'],
    cta: 'talk',
  },
  credit: {
    title: 'Opciones de hipoteca aunque tu crédito no sea perfecto',
    lead: 'Un puntaje bajo o un problema pasado no siempre significa que no. Veamos qué puedes hacer hoy y qué mejorar.',
    sections: [
      { h: 'Programas que pueden servirte', list: [
        'FHA con 3.5% de pago inicial desde 580 de puntaje, o 10% desde 500 (Manual HUD 4000.1).',
        'Prestamistas con evaluación manual para historial de crédito corto.',
        'Un plan para subir tu puntaje antes de solicitar, si así consigues mejores condiciones.',
      ] },
      { h: 'Lo que suele ayudar', list: ['Paga todas tus cuentas a tiempo desde hoy.', 'Baja el saldo de tus tarjetas a menos del 30% del límite.', 'Revisa tus reportes gratis en AnnualCreditReport.com y corrige errores.', 'No abras crédito nuevo mientras te preparas.'] },
    ],
    cta: 'talk',
  },
  investors: {
    title: 'Préstamos para inversionistas',
    lead: 'Propiedad de renta, alquiler de corto plazo o comercial: financiamiento según el ingreso de la propiedad, no solo el tuyo.',
    sections: [
      { h: 'Opciones', list: ['Préstamos DSCR: calificas con la renta de la propiedad frente a su pago.', 'Préstamos convencionales para propiedad de inversión.', 'Préstamos comerciales para uso mixto y propiedades comerciales pequeñas.'] },
      { h: 'Qué miran los prestamistas', p: 'Renta frente a pago (DSCR), pago inicial, reservas, crédito y tipo de propiedad. Los requisitos cambian según el prestamista; yo los comparo por ti.' },
    ],
    cta: 'talk',
  },
  assistance: {
    title: 'Ayudas para el pago inicial en Florida',
    lead: 'Florida y muchos condados ofrecen ayuda con el pago inicial y los costos de cierre para compradores elegibles.',
    sections: [
      { h: 'Por dónde empezar', list: [
        'Florida Housing Finance Corporation: programas estatales para primeros compradores (floridahousing.org).',
        'Programas de condados y ciudades en Broward, Miami-Dade y Palm Beach.',
        'Programas de prestamistas como HomeReady, con pago inicial reducido.',
      ] },
      { h: 'Importante', p: 'Los límites de ingreso, de precio y los fondos cambian durante el año. Reviso qué está abierto hoy en tu condado antes de contar con ello.' },
    ],
    cta: 'talk',
  },
  learn: {
    title: 'Aprende',
    lead: 'Guías claras para comprar, refinanciar y entender tu hipoteca. Muy pronto.',
    sections: [
      { h: 'Recursos oficiales confiables', list: ['Oficina de Protección Financiera del Consumidor (CFPB): comprar una casa, en español (consumerfinance.gov/es).', 'HUD: comprar una vivienda (hud.gov).', 'NMLS Consumer Access: verifica a cualquier asesor (nmlsconsumeraccess.org).'] },
    ],
  },
  about: {
    title: 'Sobre Pablo Samsing',
    lead: 'Corredor hipotecario independiente en el sur de Florida. Trabajo para ti, no para un solo banco.',
    sections: [
      { h: 'Cómo trabajo', list: ['Te explico cada paso en español o en inglés.', 'Comparo varios prestamistas y te muestro las diferencias.', 'Puedes verificar mi licencia cuando quieras en NMLS Consumer Access.'] },
    ],
    cta: 'talk',
  },
  prequal: {
    title: 'Precalificación',
    lead: 'Responde unas preguntas y te digo qué programas te sirven. La precalificación en línea de 4 pasos llega pronto; mientras tanto, empieza aquí.',
    sections: [
      { h: 'Qué vas a necesitar', list: ['Ingreso aproximado y deudas mensuales.', 'Cuánto tienes ahorrado para el pago inicial.', 'Tu puntaje de crédito estimado.'] },
      { h: 'Tu privacidad', p: 'Este sitio nunca te pide número de Seguro Social, fecha de nacimiento ni números de cuenta bancaria.' },
    ],
    cta: 'talk',
  },
  contact: {
    title: 'Contacto',
    lead: 'Llama, escribe por WhatsApp o por correo, en español o en inglés.',
    sections: [],
    cta: 'talk',
  },
  legal: {
    title: 'Avisos legales',
    lead: 'Licencias, privacidad e información al consumidor.',
    sections: [
      { h: 'Licencias', p: 'LoanPro365 Mortgages, NMLS #1486485. Pablo Samsing, NMLS #328337. Verifícalo en NMLS Consumer Access.' },
      { h: 'Igualdad de oportunidades de vivienda', p: 'Operamos conforme a la Ley de Vivienda Justa y la Ley de Igualdad de Oportunidades de Crédito.' },
      { h: 'Calculadoras', p: 'Todas las calculadoras dan estimaciones con fines educativos. No son una oferta de crédito ni un compromiso de préstamo.' },
      { h: 'Privacidad, quejas y accesibilidad', p: 'Las políticas completas están en revisión y se publicarán aquí.' },
    ],
  },
};

export const PAGES: Record<Locale, Record<ContentKey, PageContent>> = { en, es };
export const CONTENT_KEYS = Object.keys(en) as ContentKey[];
export type { ContentKey };
