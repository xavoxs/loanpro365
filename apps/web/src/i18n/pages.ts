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

type ContentKey = Exclude<RouteKey, 'home' | 'tools' | 'blog'>;

const en: Record<ContentKey, PageContent> = {
  buy: {
    title: 'Buy a home in South Florida',
    lead: 'First home or next home: we compare loan programs and lenders so you see your real options before you make an offer.',
    sections: [
      { h: 'Loan programs we work with', list: [
        'FHA — down payment from 3.5% with a credit score of 580 or higher (HUD Handbook 4000.1).',
        'VA — for eligible veterans and service members, often with no down payment (U.S. Department of Veterans Affairs).',
        'Conventional — including HomeReady, with down payment from 3% for eligible buyers (Fannie Mae).',
        'Self-employed and ITIN options — ask us which lenders accept your documentation.',
      ] },
      { h: 'How it works', list: [
        '1. Check what you can afford with the free calculator.',
        '2. Pre-qualify with us — it takes a few minutes.',
        '3. We compare lenders and send you the options side by side.',
        '4. You make your offer with a pre-approval letter.',
        '5. We guide you through appraisal, insurance and closing.',
      ] },
      { h: 'Florida costs to plan for', p: 'Homeowners and wind insurance, flood insurance in some zones, HOA or condo fees, and Florida documentary stamp and intangible taxes at closing. The tools below include them.' },
    ],
    tools: ['affordability', 'payment', 'rentVsBuy', 'closing'],
    cta: 'prequal',
  },
  refinance: {
    title: 'Refinance your mortgage',
    lead: 'Lower your payment, shorten your term or take cash out — only if the numbers make sense for you.',
    sections: [
      { h: 'Common reasons to refinance', list: ['Lower interest rate or monthly payment.', 'Switch from an adjustable to a fixed rate.', 'Cash-out to consolidate higher-interest debt or renovate.', 'Remove mortgage insurance when you have enough equity.'] },
      { h: 'Is it worth it?', p: 'Compare your monthly savings with the closing costs. The break-even point is the number of months it takes for the savings to cover those costs.' },
    ],
    cta: 'talk',
    tools: ['refinance', 'closing'],
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
    tools: ['credit', 'compare'],
  },
  investors: {
    title: 'Loans for real estate investors',
    lead: 'Rental property, short-term rental or commercial: financing based on the property’s income, not only yours.',
    sections: [
      { h: 'Options', list: ['DSCR loans — qualify with the property’s rent compared to its payment.', 'Conventional investment property loans.', 'Commercial loans for mixed-use and small commercial properties.'] },
      { h: 'What lenders look at', p: 'Rent vs. payment (DSCR), down payment, reserves, credit and property type. Requirements vary by lender; we compare them for you.' },
    ],
    cta: 'talk',
    tools: ['dscr'],
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
      { h: 'Important', p: 'Income limits, purchase price limits and funding change during the year. We check what is open today for your county before you count on it.' },
    ],
    cta: 'talk',
    tools: ['assistance', 'affordability'],
  },
  learn: {
    title: 'Learn',
    lead: 'Clear guides to buying, refinancing and understanding your mortgage — coming soon.',
    sections: [
      { h: 'Trusted official resources', list: ['Consumer Financial Protection Bureau — Buying a House (consumerfinance.gov).', 'HUD — Buying a home (hud.gov).', 'NMLS Consumer Access — verify any loan officer (nmlsconsumeraccess.org).'] },
    ],
    tools: ['glossary', 'documents'],
  },
  about: {
    title: 'About LoanPro365 Mortgages',
    lead: 'A Florida mortgage broker built for quick closings and problem resolution, serving first-time buyers through seasoned investors for over 15 years.',
    sections: [
      { h: 'What we do', p: 'We close loans with the best terms possible, as fast as possible. As an independent broker we compare wholesale lenders for home loans, refinancing, loans for buyers with credit challenges, investment and commercial properties.' },
      { h: 'Why us', list: ['Wholesale rates across several lenders.', 'Built for speed: quick, secure closings.', 'Problem resolution when a file gets complicated.', '24/7 assistance and free consultations.', 'The full loan process explained from beginning to end, in English or Spanish.', 'According to the company, over 98% of the loans it pre-approves close.'] },
      { h: 'Leadership', p: 'Pablo Samsing, Broker/Owner. NMLS #328337 (Florida loan originator license LO23103). Company NMLS #1486485.' },
      { h: 'For realtors', p: 'Fast, reliable pre-approvals and proactive updates so your buyers close on schedule.' },
    ],
    tools: ['affordability', 'compare'],
    cta: 'talk',
  },
  commercial: {
    title: 'Commercial loans',
    lead: 'Financing for income-producing properties and for the operations of your business.',
    sections: [
      { h: 'Commercial real estate', list: ['Apartment buildings', 'Office buildings', 'Retail: shopping centers and strip centers', 'Industrial buildings', 'Hotels and motels', 'Self-storage and other specialized properties'] },
      { h: 'Business financing', list: ['Accounts receivable loans', 'Equipment loans', 'Inventory financing', 'Flooring lines', 'Unsecured lines of credit'] },
      { h: 'Good to know', p: 'One-to-four unit properties (homes, condos, duplexes, four-plexes), even when rented, are financed as residential loans. Terms depend on the property and the lender; contact us to see what fits.' },
    ],
    tools: ['dscr'],
    cta: 'talk',
  },
  prequal: {
    title: 'Pre-qualify',
    lead: 'Answer a few questions and we’ll tell you which programs fit you. Our 4-step online pre-qualification is coming soon; meanwhile, start here.',
    sections: [
      { h: 'What you’ll need', list: ['Approximate income and monthly debts.', 'How much you have saved for the down payment.', 'Your estimated credit score.'] },
      { h: 'Your privacy', p: 'This website never asks for your Social Security number, date of birth or bank account numbers.' },
    ],
    cta: 'talk',
    tools: ['documents', 'compare'],
  },
  contact: {
    title: 'Contact',
    lead: 'Call, message on WhatsApp or email — in English or Spanish.',
    sections: [],
    cta: 'talk',
  },
  legal: {
    title: 'Legal & disclosures',
    lead: 'Licensing, advertising disclosures, privacy and how to file a complaint.',
    sections: [
      { h: 'Licensing', p: 'LoanPro365 Mortgages, NMLS #1486485. Pablo Samsing, Broker/Owner, NMLS #328337, Florida loan originator license LO23103. Verify any license on NMLS Consumer Access (nmlsconsumeraccess.org).' },
      { h: 'Broker disclosure', p: 'LoanPro365 Mortgages is a mortgage broker, not a lender. We arrange loans that are funded by third-party lenders. Compensation, fees and loan terms are disclosed in writing in your Loan Estimate before you commit.' },
      { h: 'Not a commitment to lend', p: 'Not all applicants will qualify. All loans are subject to credit approval, verification of income and assets, underwriting guidelines, appraisal and property eligibility. Rates, terms, programs and fees are subject to change without notice. Pre-qualification on this site is not a loan approval or a pre-approval.' },
      { h: 'Government programs', p: 'We are not affiliated with or endorsed by HUD, FHA, VA, USDA, Fannie Mae, Freddie Mac, the Florida Housing Finance Corporation or any government agency. Program rules, limits and funding are set by those agencies and change over time.' },
      { h: 'Calculators and content', p: 'Calculators, estimates and blog articles are general information for educational purposes. They are not an offer of credit, legal, tax or financial advice. Figures marked * are statements of the company.' },
      { h: 'Equal Housing Opportunity', p: 'We do business in accordance with the Fair Housing Act and the Equal Credit Opportunity Act. We do not discriminate on the basis of race, color, religion, national origin, sex, marital status, age, familial status, disability or receipt of public assistance.' },
      { h: 'Privacy', p: 'This site never asks for your Social Security number, date of birth or account numbers. Information you send through pre-qualification (name, phone, optional email and your answers) is used only to contact you about your inquiry, is not sold, and is kept up to 24 months. Ask us to delete it at any time. Contact by phone, text or WhatsApp happens only with your consent, and you can reply STOP to opt out.' },
      { h: 'Complaints', p: 'Contact us first and we will work to resolve it. You may also contact the Florida Office of Financial Regulation (flofr.gov) or the Consumer Financial Protection Bureau (consumerfinance.gov/complaint).' },
      { h: 'Accessibility', p: 'We aim to meet WCAG 2.2 AA. If any part of this site is hard to use, call or message us and we will help you directly.' },
    ],
  },
};

const es: Record<ContentKey, PageContent> = {
  buy: {
    title: 'Compra tu casa en el sur de Florida',
    lead: 'Primera casa o la siguiente: comparamos programas y prestamistas para que veas tus opciones reales antes de hacer una oferta.',
    sections: [
      { h: 'Programas con los que trabajamos', list: [
        'FHA: pago inicial desde 3.5% con puntaje de crédito de 580 o más (Manual HUD 4000.1).',
        'VA: para veteranos y militares elegibles, muchas veces sin pago inicial (Departamento de Asuntos de Veteranos).',
        'Convencional: incluye HomeReady, con pago inicial desde 3% para compradores elegibles (Fannie Mae).',
        'Opciones para trabajadores independientes y con ITIN: pregúntanos qué prestamistas aceptan tus documentos.',
      ] },
      { h: 'Cómo funciona', list: [
        '1. Mira cuánto puedes comprar con la calculadora gratis.',
        '2. Precalifícate con nosotros; toma unos minutos.',
        '3. Comparamos prestamistas y te enviamos las opciones lado a lado.',
        '4. Haces tu oferta con carta de preaprobación.',
        '5. Te acompañamos en la tasación, el seguro y el cierre.',
      ] },
      { h: 'Costos de Florida que debes prever', p: 'Seguro de hogar y de viento, seguro contra inundación en algunas zonas, cuotas de HOA o condominio, y los impuestos documentales e intangible de Florida al cierre. Las herramientas de abajo los incluyen.' },
    ],
    tools: ['affordability', 'payment', 'rentVsBuy', 'closing'],
    cta: 'prequal',
  },
  refinance: {
    title: 'Refinancia tu hipoteca',
    lead: 'Baja tu pago, acorta el plazo o saca efectivo, solo si los números tienen sentido para ti.',
    sections: [
      { h: 'Razones comunes para refinanciar', list: ['Tasa o pago mensual más bajo.', 'Pasar de tasa ajustable a fija.', 'Sacar efectivo para consolidar deudas caras o remodelar.', 'Quitar el seguro hipotecario cuando ya tienes suficiente capital.'] },
      { h: '¿Vale la pena?', p: 'Compara tu ahorro mensual con los costos de cierre. El punto de equilibrio es la cantidad de meses que tarda el ahorro en cubrir esos costos.' },
    ],
    cta: 'talk',
    tools: ['refinance', 'closing'],
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
    tools: ['credit', 'compare'],
  },
  investors: {
    title: 'Préstamos para inversionistas',
    lead: 'Propiedad de renta, alquiler de corto plazo o comercial: financiamiento según el ingreso de la propiedad, no solo el tuyo.',
    sections: [
      { h: 'Opciones', list: ['Préstamos DSCR: calificas con la renta de la propiedad frente a su pago.', 'Préstamos convencionales para propiedad de inversión.', 'Préstamos comerciales para uso mixto y propiedades comerciales pequeñas.'] },
      { h: 'Qué miran los prestamistas', p: 'Renta frente a pago (DSCR), pago inicial, reservas, crédito y tipo de propiedad. Los requisitos cambian según el prestamista; nosotros los comparamos por ti.' },
    ],
    cta: 'talk',
    tools: ['dscr'],
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
      { h: 'Importante', p: 'Los límites de ingreso, de precio y los fondos cambian durante el año. Revisamos qué está abierto hoy en tu condado antes de que cuentes con ello.' },
    ],
    cta: 'talk',
    tools: ['assistance', 'affordability'],
  },
  learn: {
    title: 'Aprende',
    lead: 'Guías claras para comprar, refinanciar y entender tu hipoteca. Muy pronto.',
    sections: [
      { h: 'Recursos oficiales confiables', list: ['Oficina de Protección Financiera del Consumidor (CFPB): comprar una casa, en español (consumerfinance.gov/es).', 'HUD: comprar una vivienda (hud.gov).', 'NMLS Consumer Access: verifica a cualquier asesor (nmlsconsumeraccess.org).'] },
    ],
    tools: ['glossary', 'documents'],
  },
  about: {
    title: 'Sobre LoanPro365 Mortgages',
    lead: 'Corredor hipotecario en Florida enfocado en cierres rápidos y en resolver problemas, con más de 15 años atendiendo desde primeros compradores hasta inversionistas con experiencia.',
    sections: [
      { h: 'Qué hacemos', p: 'Cerramos préstamos con las mejores condiciones posibles, lo más rápido posible. Como corredor independiente comparamos prestamistas mayoristas para vivienda, refinanciación, préstamos con crédito difícil, propiedades de inversión y comerciales.' },
      { h: 'Por qué nosotros', list: ['Tasas mayoristas entre varios prestamistas.', 'Hechos para la rapidez: cierres rápidos y seguros.', 'Resolvemos problemas cuando un expediente se complica.', 'Asistencia 24/7 y consultas gratis.', 'Todo el proceso del préstamo explicado de principio a fin, en español o en inglés.', 'Según la empresa, cierra más del 98% de los préstamos que preaprueba.'] },
      { h: 'Dirección', p: 'Pablo Samsing, corredor y propietario. NMLS #328337 (licencia de originador de préstamos de Florida LO23103). NMLS de la empresa #1486485.' },
      { h: 'Para realtors', p: 'Preaprobaciones rápidas y confiables, y avisos a tiempo para que tus compradores cierren según lo previsto.' },
    ],
    tools: ['affordability', 'compare'],
    cta: 'talk',
  },
  commercial: {
    title: 'Préstamos comerciales',
    lead: 'Financiamiento para propiedades que generan ingresos y para la operación de tu negocio.',
    sections: [
      { h: 'Bienes raíces comerciales', list: ['Edificios de apartamentos', 'Edificios de oficinas', 'Locales comerciales: centros y plazas comerciales', 'Edificios industriales', 'Hoteles y moteles', 'Almacenamiento y otras propiedades especializadas'] },
      { h: 'Financiamiento para negocios', list: ['Préstamos sobre cuentas por cobrar', 'Préstamos para equipos', 'Financiamiento de inventario', 'Líneas de inventario (flooring)', 'Líneas de crédito sin garantía'] },
      { h: 'Bueno saber', p: 'Las propiedades de 1 a 4 unidades (casas, condominios, dúplex, cuádruplex), aunque se renten, se financian como préstamos residenciales. Las condiciones dependen de la propiedad y del prestamista; contáctanos para ver qué te conviene.' },
    ],
    tools: ['dscr'],
    cta: 'talk',
  },
  prequal: {
    title: 'Precalificación',
    lead: 'Responde unas preguntas y te decimos qué programas te sirven. La precalificación en línea de 4 pasos llega pronto; mientras tanto, empieza aquí.',
    sections: [
      { h: 'Qué vas a necesitar', list: ['Ingreso aproximado y deudas mensuales.', 'Cuánto tienes ahorrado para el pago inicial.', 'Tu puntaje de crédito estimado.'] },
      { h: 'Tu privacidad', p: 'Este sitio nunca te pide número de Seguro Social, fecha de nacimiento ni números de cuenta bancaria.' },
    ],
    cta: 'talk',
    tools: ['documents', 'compare'],
  },
  contact: {
    title: 'Contacto',
    lead: 'Llama, escribe por WhatsApp o por correo, en español o en inglés.',
    sections: [],
    cta: 'talk',
  },
  legal: {
    title: 'Avisos legales',
    lead: 'Licencias, avisos de publicidad, privacidad y cómo presentar una queja.',
    sections: [
      { h: 'Licencias', p: 'LoanPro365 Mortgages, NMLS #1486485. Pablo Samsing, corredor y propietario, NMLS #328337, licencia de originador de préstamos de Florida LO23103. Verifica cualquier licencia en NMLS Consumer Access (nmlsconsumeraccess.org).' },
      { h: 'Aviso de corredor', p: 'LoanPro365 Mortgages es un corredor hipotecario, no un prestamista. Gestionamos préstamos que otorgan prestamistas terceros. La compensación, los cargos y las condiciones se informan por escrito en tu Loan Estimate antes de que te comprometas.' },
      { h: 'No es un compromiso de préstamo', p: 'No todos los solicitantes califican. Todo préstamo está sujeto a aprobación de crédito, verificación de ingresos y activos, normas de suscripción, tasación y elegibilidad de la propiedad. Tasas, condiciones, programas y cargos pueden cambiar sin aviso. La precalificación de este sitio no es una aprobación ni una preaprobación.' },
      { h: 'Programas del gobierno', p: 'No estamos afiliados ni respaldados por HUD, FHA, VA, USDA, Fannie Mae, Freddie Mac, Florida Housing Finance Corporation ni ninguna agencia del gobierno. Las reglas, límites y fondos de cada programa los fijan esas entidades y cambian con el tiempo.' },
      { h: 'Calculadoras y contenido', p: 'Las calculadoras, estimaciones y artículos del blog son información general con fines educativos. No son una oferta de crédito ni asesoría legal, fiscal o financiera. Las cifras marcadas con * son declaraciones de la empresa.' },
      { h: 'Igualdad de oportunidades de vivienda', p: 'Operamos conforme a la Ley de Vivienda Justa y la Ley de Igualdad de Oportunidades de Crédito. No discriminamos por raza, color, religión, origen nacional, sexo, estado civil, edad, situación familiar, discapacidad ni por recibir asistencia pública.' },
      { h: 'Privacidad', p: 'Este sitio nunca te pide número de Seguro Social, fecha de nacimiento ni números de cuenta. Los datos que envías en la precalificación (nombre, teléfono, correo opcional y tus respuestas) solo se usan para contactarte por tu consulta, no se venden y se guardan hasta 24 meses. Puedes pedirnos que los borremos en cualquier momento. Solo te contactamos por teléfono, mensaje o WhatsApp con tu consentimiento, y puedes responder STOP para darte de baja.' },
      { h: 'Quejas', p: 'Contáctanos primero y trabajaremos para resolverlo. También puedes acudir a la Oficina de Regulación Financiera de Florida (flofr.gov) o a la Oficina de Protección Financiera del Consumidor (consumerfinance.gov/es/enviar-una-queja).' },
      { h: 'Accesibilidad', p: 'Buscamos cumplir WCAG 2.2 AA. Si alguna parte del sitio es difícil de usar, llámanos o escríbenos y te ayudamos directamente.' },
    ],
  },
};

export const PAGES: Record<Locale, Record<ContentKey, PageContent>> = { en, es };
export const CONTENT_KEYS = Object.keys(en) as ContentKey[];
export type { ContentKey };
