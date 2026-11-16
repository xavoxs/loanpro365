export type Locale = 'en' | 'es';
export const LOCALES: Locale[] = ['en', 'es'];

/** Datos de la empresa. Pendiente de verificar con el cliente (ver docs/ARQUITECTURA.md §7). */
export const COMPANY = {
  name: 'LoanPro365 Mortgages',
  broker: 'Pablo Samsing',
  nmlsCompany: '1486485',
  nmlsBroker: '328337',
  phone: '(954) 288-9242',
  phoneHref: 'tel:+19542889242',
  whatsappHref: 'https://wa.me/19542889242',
  email: 'info@loanpro365.com',
  nmlsUrl: 'https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/1486485',
  applyUrl: 'https://plus.preapp1003.com/',
};

/** Rutas gemelas: la misma página en cada idioma. */
export const ROUTES = {
  home: { en: '/en/', es: '/es/' },
  buy: { en: '/en/buy/', es: '/es/comprar/' },
  refinance: { en: '/en/refinance/', es: '/es/refinanciar/' },
  credit: { en: '/en/credit-challenges/', es: '/es/credito-dificil/' },
  investors: { en: '/en/investors/', es: '/es/inversionistas/' },
  assistance: { en: '/en/florida-assistance/', es: '/es/ayudas-florida/' },
  tools: { en: '/en/tools/', es: '/es/herramientas/' },
  learn: { en: '/en/learn/', es: '/es/aprende/' },
  about: { en: '/en/about/', es: '/es/sobre-pablo/' },
  prequal: { en: '/en/prequalify/', es: '/es/precalificacion/' },
  contact: { en: '/en/contact/', es: '/es/contacto/' },
  legal: { en: '/en/legal/', es: '/es/legal/' },
} as const satisfies Record<string, Record<Locale, string>>;
export type RouteKey = keyof typeof ROUTES;

export const TOOL_SLUGS = {
  payment: { en: 'payment-calculator', es: 'calculadora-de-pago' },
  affordability: { en: 'how-much-can-i-afford', es: 'cuanto-puedo-comprar' },
  closing: { en: 'florida-closing-costs', es: 'costos-de-cierre-florida' },
} as const;
export type ToolKey = keyof typeof TOOL_SLUGS;
export const toolPath = (t: ToolKey, l: Locale) => `${ROUTES.tools[l]}${TOOL_SLUGS[t][l]}/`;

const en = {
  skip: 'Skip to content',
  nav: { buy: 'Buy a home', refinance: 'Refinance', credit: 'Credit challenges', investors: 'Investors', tools: 'Tools', about: 'About Pablo', contact: 'Contact' },
  cta: { primary: 'See how much I can buy', call: 'Call', whatsapp: 'WhatsApp', prequal: 'Start pre-qualification', talk: 'Talk to Pablo' },
  hero: {
    title: 'South Florida mortgages, explained in your language',
    sub: 'I compare several lenders for you — FHA, VA, conventional, refinance and options even if your credit isn’t perfect.',
  },
  messages: [
    { t: 'I compare lenders for you', d: 'As an independent broker, I shop your loan instead of offering one bank’s products.' },
    { t: 'I speak your language', d: 'English or Spanish, from pre-qualification to closing.' },
    { t: 'Options if your credit isn’t perfect', d: 'A clear plan to qualify, step by step.' },
    { t: 'Real Florida costs', d: 'Insurance, HOA, hurricanes and doc stamps — no surprises at closing.' },
  ],
  toolsTitle: 'Free tools — no sign-up',
  tools: {
    payment: { name: 'Payment calculator', desc: 'Your real monthly payment with taxes, insurance and HOA.' },
    affordability: { name: 'How much can I afford?', desc: 'A price range based on your income and debts.' },
    closing: { name: 'Florida closing costs', desc: 'Doc stamps, intangible tax and fees, in one total.' },
  },
  form: {
    price: 'Home price', down: 'Down payment', rate: 'Interest rate (%)', years: 'Term (years)', tax: 'Property tax per year',
    insurance: 'Home & wind insurance per year', flood: 'Flood insurance per year', hoa: 'HOA per month', pmi: 'PMI rate (% per year)',
    income: 'Gross monthly income', debts: 'Monthly debt payments', costsPct: 'Taxes + insurance (% of price per year)',
    loan: 'Loan amount', county: 'County', sfr: 'Single-family home', sellerDeed: 'Seller pays deed stamps',
    lenderFees: 'Lender fees', title: 'Title & settlement', prepaids: 'Prepaids & escrow',
  },
  result: {
    total: 'Estimated monthly payment', pi: 'Principal & interest', maxPrice: 'Estimated maximum price', maxPayment: 'Maximum housing payment',
    closingTotal: 'Estimated closing costs', deed: 'Deed doc stamps', note: 'Note doc stamps', intangible: 'Intangible tax',
  },
  disclaimer: 'Estimate for education only. Not an offer of credit or a commitment to lend. Rates, programs and costs change; your loan officer will confirm the figures.',
  trust: { nmls: 'NMLS', ehl: 'Equal Housing Opportunity', licensed: 'Licensed mortgage broker in Florida' },
  langSwitch: 'Español',
  footer: { legal: 'Legal & disclosures', privacy: 'Privacy', complaints: 'Complaints', accessibility: 'Accessibility' },
};

type Dict = typeof en;
const es: Dict = {
  skip: 'Ir al contenido',
  nav: { buy: 'Comprar casa', refinance: 'Refinanciar', credit: 'Crédito difícil', investors: 'Inversionistas', tools: 'Herramientas', about: 'Sobre Pablo', contact: 'Contacto' },
  cta: { primary: 'Ver cuánto puedo comprar', call: 'Llamar', whatsapp: 'WhatsApp', prequal: 'Empezar precalificación', talk: 'Hablar con Pablo' },
  hero: {
    title: 'Hipotecas en el sur de Florida, explicadas en tu idioma',
    sub: 'Comparo varios prestamistas por ti: FHA, VA, convencional, refinanciación y opciones aunque tu crédito no sea perfecto.',
  },
  messages: [
    { t: 'Comparo prestamistas por ti', d: 'Como corredor independiente busco tu préstamo en el mercado, no te ofrezco un solo banco.' },
    { t: 'Hablo tu idioma', d: 'En español o en inglés, desde la precalificación hasta el cierre.' },
    { t: 'Opciones aunque tu crédito no sea perfecto', d: 'Un plan claro para calificar, paso a paso.' },
    { t: 'Costos reales de Florida', d: 'Seguro, HOA, huracanes e impuestos documentales: sin sorpresas al cierre.' },
  ],
  toolsTitle: 'Herramientas gratis, sin registrarte',
  tools: {
    payment: { name: 'Calculadora de pago', desc: 'Tu pago mensual real con impuestos, seguro y HOA.' },
    affordability: { name: '¿Cuánto puedo comprar?', desc: 'Un rango de precio según tus ingresos y deudas.' },
    closing: { name: 'Costos de cierre en Florida', desc: 'Doc stamps, impuesto intangible y cargos, en un solo total.' },
  },
  form: {
    price: 'Precio de la casa', down: 'Pago inicial', rate: 'Tasa de interés (%)', years: 'Plazo (años)', tax: 'Impuesto a la propiedad por año',
    insurance: 'Seguro de hogar y viento por año', flood: 'Seguro contra inundación por año', hoa: 'HOA por mes', pmi: 'Tasa de PMI (% anual)',
    income: 'Ingreso mensual bruto', debts: 'Pagos mensuales de deudas', costsPct: 'Impuestos + seguro (% del precio al año)',
    loan: 'Monto del préstamo', county: 'Condado', sfr: 'Vivienda unifamiliar', sellerDeed: 'El vendedor paga los doc stamps de la escritura',
    lenderFees: 'Cargos del prestamista', title: 'Título y cierre', prepaids: 'Prepagos y escrow',
  },
  result: {
    total: 'Pago mensual estimado', pi: 'Capital e interés', maxPrice: 'Precio máximo estimado', maxPayment: 'Pago máximo de vivienda',
    closingTotal: 'Costos de cierre estimados', deed: 'Doc stamps de la escritura', note: 'Doc stamps del pagaré', intangible: 'Impuesto intangible',
  },
  disclaimer: 'Estimación solo con fines educativos. No es una oferta de crédito ni un compromiso de préstamo. Tasas, programas y costos cambian; tu asesor confirmará las cifras.',
  trust: { nmls: 'NMLS', ehl: 'Igualdad de oportunidades de vivienda', licensed: 'Corredor hipotecario con licencia en Florida' },
  langSwitch: 'English',
  footer: { legal: 'Avisos legales', privacy: 'Privacidad', complaints: 'Quejas', accessibility: 'Accesibilidad' },
};

export const t = (l: Locale): Dict => (l === 'es' ? es : en);
export const other = (l: Locale): Locale => (l === 'es' ? 'en' : 'es');
