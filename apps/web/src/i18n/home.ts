import type { Locale } from './index';

/** Textos de la portada. Ninguna cifra comercial inventada: solo requisitos públicos con fuente y hechos del negocio. */
const en = {
  h1: 'A South Florida mortgage, explained in your language.',
  sub: 'I’m Pablo, an independent broker. I compare lenders for you and show you real numbers before you commit to anything.',
  est: {
    title: 'See what you could afford',
    income: 'Monthly household income',
    down: 'Savings for down payment',
    result: 'Estimated price range',
    note: 'Assumes 6.5% for 30 years, taxes and insurance at 3% of price per year, and up to 43% of income for debts. Estimate only.',
    cta: 'Pre-qualify in 2 minutes',
    or: 'or message Pablo on WhatsApp',
  },
  pablo: { role: 'Broker / Owner', lang: 'Hablo español · I speak English', verify: 'Verify license' },
  trust: ['No Social Security number on this site', 'No credit check to pre-qualify here', 'Licensed NMLS #1486485', 'Equal Housing Opportunity'],
  how: {
    h: 'From first question to keys, in three steps',
    steps: [
      { t: 'Pre-qualify online', d: 'Four quick questions. You see your price range and the programs that fit before you share your phone.' },
      { t: 'I compare lenders', d: 'As an independent broker I shop your loan across lenders and send you the options side by side.' },
      { t: 'Close with confidence', d: 'Pre-approval letter, appraisal, insurance and closing — I walk you through each one in English or Spanish.' },
    ],
  },
  paths: {
    h: 'What do you want to do?',
    items: [
      { key: 'buy', icon: 'house', t: 'Buy a home', d: 'FHA from 3.5% down, VA, conventional and HomeReady from 3%.' },
      { key: 'refinance', icon: 'refresh-cw', t: 'Refinance', d: 'Lower your payment, switch to a fixed rate or take cash out.' },
      { key: 'credit', icon: 'trending-up', t: 'Credit challenges', d: 'Options from a 500 score and a clear plan to qualify.' },
      { key: 'investors', icon: 'building-2', t: 'Invest in property', d: 'DSCR loans that qualify on the property’s rent.' },
    ],
  },
  tools: { h: 'Free calculators, no sign-up', d: 'Run the numbers yourself. Florida taxes and insurance are already included.', all: 'See all 11 tools' },
  florida: {
    h: 'Real Florida costs, before closing day',
    d: 'Other calculators stop at principal and interest. In Florida the payment also carries wind and flood insurance, HOA fees and state taxes at closing. Ours include them.',
    items: [
      { t: 'Doc stamps on the note', d: '$0.35 per $100 of the loan (Fla. Stat. §201.08).' },
      { t: 'Intangible tax', d: '0.2% of the mortgage amount (Fla. Stat. §199.133).' },
      { t: 'Doc stamps on the deed', d: '$0.70 per $100; $0.60 for single-family homes in Miami-Dade (Fla. Stat. §201.02).' },
    ],
    cta: 'Estimate my closing costs',
  },
  about: {
    h: 'Work directly with Pablo',
    d: 'No call center and no hand-offs. You talk to the broker who works your file, in the language you prefer, from the first question to the closing table.',
    points: ['Independent: not tied to one bank', 'Bilingual service, English and Spanish', 'License verifiable on NMLS Consumer Access'],
    cta: 'About Pablo',
  },
  faq: {
    h: 'Questions people ask first',
    items: [
      { q: 'Does pre-qualifying affect my credit?', a: 'No. This website never runs a credit check and never asks for your Social Security number. If you decide to apply, your lender explains its credit review before anything happens.' },
      { q: 'How much do I need for a down payment?', a: 'It depends on the program: FHA starts at 3.5% with a 580 score, some conventional programs at 3% for first-time buyers, and VA may require none for eligible veterans. The pre-qualification shows which fit you.' },
      { q: 'Can I buy if I’m self-employed or use an ITIN?', a: 'Often yes. Some lenders accept tax returns, bank statements or ITIN documentation. Tell me your situation and I’ll check which lenders fit.' },
      { q: 'What does a broker cost me?', a: 'Every fee is disclosed in writing in your Loan Estimate before you commit. Ask me and I’ll walk you through it line by line.' },
    ],
  },
  final: { h: 'Know your number today.', d: 'Two minutes, no Social Security number, no credit check on this site.', cta: 'Start pre-qualification' },
};

type Home = typeof en;
const es: Home = {
  h1: 'Tu hipoteca en el sur de Florida, explicada en tu idioma.',
  sub: 'Soy Pablo, corredor independiente. Comparo prestamistas por ti y te muestro números reales antes de que te comprometas a nada.',
  est: {
    title: 'Mira cuánto podrías comprar',
    income: 'Ingreso mensual del hogar',
    down: 'Ahorros para el pago inicial',
    result: 'Rango de precio estimado',
    note: 'Supone 6.5% a 30 años, impuestos y seguro del 3% del precio al año y hasta 43% del ingreso para deudas. Solo es una estimación.',
    cta: 'Precalifícate en 2 minutos',
    or: 'o escríbele a Pablo por WhatsApp',
  },
  pablo: { role: 'Corredor / Propietario', lang: 'Hablo español · I speak English', verify: 'Verificar licencia' },
  trust: ['Sin número de Seguro Social en este sitio', 'Sin consulta de crédito para precalificarte aquí', 'Licencia NMLS #1486485', 'Igualdad de oportunidades de vivienda'],
  how: {
    h: 'De la primera pregunta a las llaves, en tres pasos',
    steps: [
      { t: 'Precalifícate en línea', d: 'Cuatro preguntas rápidas. Ves tu rango de precio y los programas que te sirven antes de dar tu teléfono.' },
      { t: 'Comparo prestamistas', d: 'Como corredor independiente busco tu préstamo entre varios prestamistas y te envío las opciones lado a lado.' },
      { t: 'Cierra con confianza', d: 'Carta de preaprobación, tasación, seguro y cierre: te acompaño en cada paso, en español o en inglés.' },
    ],
  },
  paths: {
    h: '¿Qué quieres hacer?',
    items: [
      { key: 'buy', icon: 'house', t: 'Comprar casa', d: 'FHA desde 3.5% de pago inicial, VA, convencional y HomeReady desde 3%.' },
      { key: 'refinance', icon: 'refresh-cw', t: 'Refinanciar', d: 'Baja tu pago, pasa a tasa fija o saca efectivo.' },
      { key: 'credit', icon: 'trending-up', t: 'Crédito difícil', d: 'Opciones desde 500 de puntaje y un plan claro para calificar.' },
      { key: 'investors', icon: 'building-2', t: 'Invertir en propiedades', d: 'Préstamos DSCR que califican con la renta de la propiedad.' },
    ],
  },
  tools: { h: 'Calculadoras gratis, sin registrarte', d: 'Haz tus números tú mismo. Ya incluyen los impuestos y seguros de Florida.', all: 'Ver las 11 herramientas' },
  florida: {
    h: 'Los costos reales de Florida, antes del cierre',
    d: 'Otras calculadoras se quedan en capital e interés. En Florida el pago también lleva seguro de viento e inundación, cuotas de HOA e impuestos estatales al cierre. Las nuestras los incluyen.',
    items: [
      { t: 'Doc stamps del pagaré', d: '$0.35 por cada $100 del préstamo (Fla. Stat. §201.08).' },
      { t: 'Impuesto intangible', d: '0.2% del monto de la hipoteca (Fla. Stat. §199.133).' },
      { t: 'Doc stamps de la escritura', d: '$0.70 por cada $100; $0.60 en viviendas unifamiliares de Miami-Dade (Fla. Stat. §201.02).' },
    ],
    cta: 'Calcular mis costos de cierre',
  },
  about: {
    h: 'Trabaja directamente con Pablo',
    d: 'Sin centro de llamadas ni traspasos. Hablas con el corredor que lleva tu caso, en el idioma que prefieras, desde la primera pregunta hasta la mesa de cierre.',
    points: ['Independiente: no depende de un solo banco', 'Atención bilingüe, en español e inglés', 'Licencia verificable en NMLS Consumer Access'],
    cta: 'Sobre Pablo',
  },
  faq: {
    h: 'Lo que la gente pregunta primero',
    items: [
      { q: '¿Precalificarme afecta mi crédito?', a: 'No. Este sitio nunca consulta tu crédito ni te pide número de Seguro Social. Si decides solicitar, tu prestamista te explica su revisión de crédito antes de hacer nada.' },
      { q: '¿Cuánto necesito de pago inicial?', a: 'Depende del programa: FHA desde 3.5% con 580 de puntaje, algunos convencionales desde 3% para primeros compradores, y VA puede no requerirlo para veteranos elegibles. La precalificación te muestra cuáles te sirven.' },
      { q: '¿Puedo comprar si soy independiente o uso ITIN?', a: 'Muchas veces sí. Algunos prestamistas aceptan declaraciones de impuestos, estados de cuenta o documentación con ITIN. Cuéntame tu caso y reviso qué prestamistas encajan.' },
      { q: '¿Cuánto me cuesta un corredor?', a: 'Cada cargo aparece por escrito en tu Loan Estimate antes de que te comprometas. Pregúntame y te lo explico línea por línea.' },
    ],
  },
  final: { h: 'Conoce tu número hoy.', d: 'Dos minutos, sin número de Seguro Social y sin consulta de crédito en este sitio.', cta: 'Empezar precalificación' },
};

export const HOME: Record<Locale, Home> = { en, es };
