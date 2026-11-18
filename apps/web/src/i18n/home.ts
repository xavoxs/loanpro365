import type { Locale } from './index';

/**
 * Textos de la portada, con la empresa en primer plano.
 * Los datos propios de la empresa (15+ años, 98% de préstamos preaprobados cerrados, tasas mayoristas,
 * asistencia 24/7) vienen de su sitio actual (loanpro365.com/about-us, consultado 2026-11-17) y se presentan
 * como afirmaciones de la empresa. El cliente debe confirmarlos antes de publicar en producción.
 */
const en = {
  h1: 'A different kind of mortgage company in Florida.',
  sub: 'LoanPro365 Mortgages shops wholesale rates across lenders, closes fast and explains every step, in English or Spanish. Home, refinance and commercial loans.',
  est: {
    title: 'See what you could afford',
    income: 'Monthly household income',
    down: 'Savings for down payment',
    result: 'Estimated price range',
    note: 'Assumes 6.5% for 30 years, taxes and insurance at 3% of price per year, and up to 43% of income for debts. Estimate only.',
    cta: 'Pre-qualify in 2 minutes',
    or: 'or talk to an advisor on WhatsApp',
  },
  proof: [
    { n: '15+', t: 'years financing homes and businesses*' },
    { n: '98%', t: 'of pre-approved loans closed*' },
    { n: '24/7', t: 'assistance during your process' },
    { n: 'EN · ES', t: 'service in your language' },
  ],
  proofNote: '*Company figures published on loanpro365.com.',
  why: {
    h: 'Why borrowers and realtors choose LoanPro365',
    d: 'We exist for two things: quick closings and problem resolution. That is how we get your loan the best terms possible, as fast as possible.',
    items: [
      { icon: 'trending-up', t: 'Wholesale rates', d: 'As a broker we access wholesale pricing and compare several lenders for you.' },
      { icon: 'clock', t: 'Built for speed', d: 'Quick closings with a process designed to keep your contract on schedule.' },
      { icon: 'wrench', t: 'Problem resolution', d: 'Complex income, credit or property? Solving it is part of the job.' },
      { icon: 'shield-check', t: 'Secure closing', d: 'Your documents and data are handled with care from application to keys.' },
      { icon: 'message-circle', t: '24/7 assistance', d: 'Questions don’t wait for business hours. Neither do we.' },
      { icon: 'book-open', t: 'Process explained', d: 'Free consultations and the full loan process explained from beginning to end.' },
    ],
  },
  how: {
    h: 'From first question to keys, in three steps',
    steps: [
      { t: 'Pre-qualify online', d: 'Four quick questions. You see your price range and the programs that fit before you share your phone.' },
      { t: 'We compare lenders', d: 'We shop your loan across wholesale lenders and send you the options side by side.' },
      { t: 'Close with confidence', d: 'Pre-approval letter, appraisal, insurance and closing — we walk you through each one.' },
    ],
  },
  paths: {
    h: 'Loans for every stage',
    items: [
      { key: 'buy', icon: 'house', t: 'Home loans', d: 'FHA from 3.5% down, VA, USDA, conventional and HomeReady.' },
      { key: 'refinance', icon: 'refresh-cw', t: 'Refinancing', d: 'Lower your payment, switch to a fixed rate or take cash out.' },
      { key: 'credit', icon: 'trending-up', t: 'Bad credit home loans', d: 'Options from a 500 score and a clear plan to qualify.' },
      { key: 'commercial', icon: 'building-2', t: 'Commercial loans', d: 'Apartments, offices, retail, industrial, hotels, equipment and lines of credit.' },
      { key: 'investors', icon: 'key-round', t: 'Investment property', d: 'DSCR loans that qualify on the property’s rent.' },
      { key: 'assistance', icon: 'piggy-bank', t: 'Florida assistance', d: 'Down payment help, Hometown Heroes and Homestead Exemption.' },
    ],
  },
  tools: { h: 'Free calculators, no sign-up', d: 'Run the numbers yourself. Florida taxes and insurance are already included.', all: 'See all 11 tools' },
  florida: {
    h: 'Real Florida costs, before closing day',
    d: 'Other calculators stop at principal and interest. In Florida the payment also carries wind and flood insurance, HOA fees and state taxes at closing. Ours include them.',
    items: [
      { t: 'Doc stamps on the note', d: '$0.35 per $100 of the loan (Fla. Stat. §201.08).' },
      { t: 'Intangible tax', d: '0.2% of the mortgage amount (Fla. Stat. §199.133).' },
      { t: 'Doc stamps on the deed', d: '$0.70 per $100. In Miami-Dade: $0.60 for single-family homes and $1.05 for other property (Fla. Stat. §201.02, §201.031). Usually paid by the seller.' },
    ],
    cta: 'Estimate my closing costs',
  },
  realtors: {
    h: 'Realtors: a lender partner that closes',
    d: 'Fast pre-approvals your buyers can trust, proactive updates and problem resolution when a file gets complicated — so your closings stay on schedule.',
    cta: 'Talk to our team',
  },
  leader: {
    h: 'Led by Pablo Samsing, Broker/Owner',
    d: 'Pablo founded LoanPro365 to make the mortgage process faster and clearer. He leads every file personally with the team, in English or Spanish.',
    points: ['Company NMLS #1486485 · Pablo NMLS #328337', 'Independent broker with access to multiple lenders', 'Licenses verifiable on NMLS Consumer Access'],
    cta: 'About us',
  },
  blog: { h: 'Learn step by step', all: 'See all learning paths' },
  faq: {
    h: 'Questions people ask first',
    items: [
      { q: 'Does pre-qualifying affect my credit?', a: 'No. This website never runs a credit check and never asks for your Social Security number. If you decide to apply, your lender explains its credit review before anything happens.' },
      { q: 'How much do I need for a down payment?', a: 'It depends on the program: FHA starts at 3.5% with a 580 score, some conventional programs at 3% for first-time buyers, and VA or USDA may require none for eligible borrowers. The pre-qualification shows which fit you.' },
      { q: 'Do you finance commercial properties?', a: 'Yes: income-producing real estate such as apartments, offices, retail, industrial, hotels and self-storage, plus equipment, inventory and accounts-receivable financing. One-to-four unit properties are financed as residential loans.' },
      { q: 'Can I buy if I’m self-employed or use an ITIN?', a: 'Often yes. Some lenders accept tax returns, bank statements or ITIN documentation. Tell us your situation and we’ll check which lenders fit.' },
    ],
  },
  final: { h: 'Know your number today.', d: 'Two minutes, no Social Security number, no credit check on this site.', cta: 'Start pre-qualification' },
};

type Home = typeof en;
const es: Home = {
  h1: 'Una compañía hipotecaria diferente en Florida.',
  sub: 'LoanPro365 Mortgages busca tasas mayoristas entre varios prestamistas, cierra rápido y te explica cada paso, en español o en inglés. Préstamos para vivienda, refinanciación y comerciales.',
  est: {
    title: 'Mira cuánto podrías comprar',
    income: 'Ingreso mensual del hogar',
    down: 'Ahorros para el pago inicial',
    result: 'Rango de precio estimado',
    note: 'Supone 6.5% a 30 años, impuestos y seguro del 3% del precio al año y hasta 43% del ingreso para deudas. Solo es una estimación.',
    cta: 'Precalifícate en 2 minutos',
    or: 'o habla con un asesor por WhatsApp',
  },
  proof: [
    { n: '15+', t: 'años financiando viviendas y negocios*' },
    { n: '98%', t: 'de los préstamos preaprobados cerrados*' },
    { n: '24/7', t: 'asistencia durante tu proceso' },
    { n: 'ES · EN', t: 'atención en tu idioma' },
  ],
  proofNote: '*Cifras de la empresa publicadas en loanpro365.com.',
  why: {
    h: 'Por qué compradores y realtors eligen LoanPro365',
    d: 'Existimos para dos cosas: cierres rápidos y resolver problemas. Así conseguimos para tu préstamo las mejores condiciones posibles, lo más rápido posible.',
    items: [
      { icon: 'trending-up', t: 'Tasas mayoristas', d: 'Como corredores accedemos a precios mayoristas y comparamos varios prestamistas por ti.' },
      { icon: 'clock', t: 'Hechos para la rapidez', d: 'Cierres rápidos con un proceso pensado para que tu contrato no se retrase.' },
      { icon: 'wrench', t: 'Resolvemos problemas', d: '¿Ingresos, crédito o propiedad complicados? Resolverlo es parte del trabajo.' },
      { icon: 'shield-check', t: 'Cierre seguro', d: 'Tus documentos y datos se manejan con cuidado desde la solicitud hasta las llaves.' },
      { icon: 'message-circle', t: 'Asistencia 24/7', d: 'Las dudas no esperan al horario de oficina. Nosotros tampoco.' },
      { icon: 'book-open', t: 'Proceso explicado', d: 'Consultas gratis y todo el proceso del préstamo explicado de principio a fin.' },
    ],
  },
  how: {
    h: 'De la primera pregunta a las llaves, en tres pasos',
    steps: [
      { t: 'Precalifícate en línea', d: 'Cuatro preguntas rápidas. Ves tu rango de precio y los programas que te sirven antes de dar tu teléfono.' },
      { t: 'Comparamos prestamistas', d: 'Buscamos tu préstamo entre prestamistas mayoristas y te enviamos las opciones lado a lado.' },
      { t: 'Cierra con confianza', d: 'Carta de preaprobación, tasación, seguro y cierre: te acompañamos en cada paso.' },
    ],
  },
  paths: {
    h: 'Préstamos para cada etapa',
    items: [
      { key: 'buy', icon: 'house', t: 'Préstamos para vivienda', d: 'FHA desde 3.5% de pago inicial, VA, USDA, convencional y HomeReady.' },
      { key: 'refinance', icon: 'refresh-cw', t: 'Refinanciación', d: 'Baja tu pago, pasa a tasa fija o saca efectivo.' },
      { key: 'credit', icon: 'trending-up', t: 'Préstamos con mal crédito', d: 'Opciones desde 500 de puntaje y un plan claro para calificar.' },
      { key: 'commercial', icon: 'building-2', t: 'Préstamos comerciales', d: 'Apartamentos, oficinas, locales, industrial, hoteles, equipos y líneas de crédito.' },
      { key: 'investors', icon: 'key-round', t: 'Propiedades de inversión', d: 'Préstamos DSCR que califican con la renta de la propiedad.' },
      { key: 'assistance', icon: 'piggy-bank', t: 'Ayudas en Florida', d: 'Ayuda para el pago inicial, Hometown Heroes y exención Homestead.' },
    ],
  },
  tools: { h: 'Calculadoras gratis, sin registrarte', d: 'Haz tus números tú mismo. Ya incluyen los impuestos y seguros de Florida.', all: 'Ver las 11 herramientas' },
  florida: {
    h: 'Los costos reales de Florida, antes del cierre',
    d: 'Otras calculadoras se quedan en capital e interés. En Florida el pago también lleva seguro de viento e inundación, cuotas de HOA e impuestos estatales al cierre. Las nuestras los incluyen.',
    items: [
      { t: 'Doc stamps del pagaré', d: '$0.35 por cada $100 del préstamo (Fla. Stat. §201.08).' },
      { t: 'Impuesto intangible', d: '0.2% del monto de la hipoteca (Fla. Stat. §199.133).' },
      { t: 'Doc stamps de la escritura', d: '$0.70 por cada $100. En Miami-Dade: $0.60 en viviendas unifamiliares y $1.05 en otras propiedades (Fla. Stat. §201.02, §201.031). Suele pagarlo el vendedor.' },
    ],
    cta: 'Calcular mis costos de cierre',
  },
  realtors: {
    h: 'Realtors: un aliado hipotecario que sí cierra',
    d: 'Preaprobaciones rápidas en las que tus compradores pueden confiar, avisos a tiempo y solución cuando un expediente se complica, para que tus cierres no se retrasen.',
    cta: 'Habla con nuestro equipo',
  },
  leader: {
    h: 'Dirigida por Pablo Samsing, corredor y propietario',
    d: 'Pablo fundó LoanPro365 para que el proceso hipotecario sea más rápido y más claro. Lidera cada expediente personalmente con el equipo, en español o en inglés.',
    points: ['NMLS de la empresa #1486485 · NMLS de Pablo #328337', 'Corredor independiente con acceso a varios prestamistas', 'Licencias verificables en NMLS Consumer Access'],
    cta: 'Sobre nosotros',
  },
  blog: { h: 'Aprende paso a paso', all: 'Ver todas las rutas' },
  faq: {
    h: 'Lo que la gente pregunta primero',
    items: [
      { q: '¿Precalificarme afecta mi crédito?', a: 'No. Este sitio nunca consulta tu crédito ni te pide número de Seguro Social. Si decides solicitar, tu prestamista te explica su revisión de crédito antes de hacer nada.' },
      { q: '¿Cuánto necesito de pago inicial?', a: 'Depende del programa: FHA desde 3.5% con 580 de puntaje, algunos convencionales desde 3% para primeros compradores, y VA o USDA pueden no requerirlo para quienes califican. La precalificación te muestra cuáles te sirven.' },
      { q: '¿Financian propiedades comerciales?', a: 'Sí: inmuebles que generan ingresos como apartamentos, oficinas, locales, industrial, hoteles y almacenamiento, además de financiamiento de equipos, inventario y cuentas por cobrar. Las propiedades de 1 a 4 unidades se financian como préstamos residenciales.' },
      { q: '¿Puedo comprar si soy independiente o uso ITIN?', a: 'Muchas veces sí. Algunos prestamistas aceptan declaraciones de impuestos, estados de cuenta o documentación con ITIN. Cuéntanos tu caso y revisamos qué prestamistas encajan.' },
    ],
  },
  final: { h: 'Conoce tu número hoy.', d: 'Dos minutos, sin número de Seguro Social y sin consulta de crédito en este sitio.', cta: 'Empezar precalificación' },
};

export const HOME: Record<Locale, Home> = { en, es };
