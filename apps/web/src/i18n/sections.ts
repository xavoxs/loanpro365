import type { Locale } from './index';

/**
 * Secciones de la portada adaptadas del modelo de sitio de servicio (barra superior, franja de confianza,
 * historia, servicios, 4 pasos, «te llamamos», FAQ en dos columnas, banda final y tarjetas del blog).
 * Solo hechos de la empresa; sin reseñas ni testimonios porque no existen todavía.
 */
const en = {
  topbar: 'Assistance 24/7 for quotes, pre-approvals and closings.',
  strip: [
    { icon: 'badge-check', t: 'Licensed · NMLS #1486485' },
    { icon: 'trending-up', t: 'Wholesale rates' },
    { icon: 'clock', t: 'Quick closings' },
    { icon: 'message-circle', t: '24/7 assistance' },
    { icon: 'shield-check', t: 'Secure closing' },
    { icon: 'globe', t: 'English & Spanish' },
  ],
  story: {
    h: 'A Florida mortgage company, through and through',
    p: [
      'LoanPro365 Mortgages was built to do mortgages differently: wholesale rates, real communication and no shortcuts. For more than 15 years* we have financed first-time buyers, families refinancing, seasoned investors and businesses.',
      'That is still how we work. You talk to the people who handle your file, in English or Spanish, and when a loan gets complicated we solve it instead of passing it along. Realtors count on us for pre-approvals their buyers can trust and closings that stay on schedule.',
    ],
    facts: [
      { n: '15+', t: 'years in business*' },
      { n: '98%', t: 'of pre-approved loans closed*' },
      { n: '6', t: 'loan types: home, refinance, credit, investment, commercial, assistance' },
      { n: 'NMLS', t: '#1486485, verifiable on NMLS Consumer Access' },
    ],
    cta: 'Meet the company',
  },
  services: { h: 'What we do', d: 'Financing for every stage, from your first home to your next commercial property.', more: 'Learn more' },
  steps: {
    h: 'How it works',
    items: [
      { t: 'Pre-qualify', d: 'Answer 4 quick questions online, or call us. No Social Security number needed.' },
      { t: 'We compare lenders', d: 'We shop your loan across wholesale lenders and show you the options side by side.' },
      { t: 'Get pre-approved', d: 'Make your offer with a pre-approval letter sellers take seriously.' },
      { t: 'Close and get your keys', d: 'We coordinate appraisal, insurance and title so you close on time.' },
    ],
  },
  callback: {
    h: 'No guesswork. A straight answer.',
    d: 'Tell us what you need and an advisor will call you back with a real plan, not a sales pitch.',
    points: [
      { t: 'Wholesale rates', d: 'We compare several lenders so you don’t have to.' },
      { t: 'Clear numbers up front', d: 'Every fee is disclosed in writing in your Loan Estimate before you commit.' },
      { t: 'Problem resolution', d: 'Self-employed, ITIN, credit challenges or commercial: we look for the lender that fits.' },
      { t: 'In your language', d: 'From the first call to the closing table, in English or Spanish.' },
    ],
    formTitle: 'Want us to call you?',
    formSub: 'We’ll call you back at the time you choose.',
    name: 'Name', phone: 'Phone', county: 'County', time: 'Best time to call',
    times: { any: 'Anytime', morning: 'Morning', afternoon: 'Afternoon', evening: 'Evening' },
    topic: 'What do you need?',
    topics: { buy: 'Buy a home', refinance: 'Refinance', commercial: 'Commercial loan', other: 'Other' },
    message: 'Tell us more (optional)',
    consent: 'I agree that LoanPro365 Mortgages may contact me by phone, text or WhatsApp at the number provided, including by automated means, about my inquiry. Consent is not a condition of any purchase or loan. Message and data rates may apply. Reply STOP to opt out.',
    send: 'Request a call',
    ok: 'Thank you! An advisor will call you back soon.',
    fail: 'We couldn’t send your request. Please message us on WhatsApp:',
    required: 'Please complete the required fields.',
  },
  faqIntro: 'Answers to the questions we hear most. Don’t see yours? Call or message us.',
  finalBand: { h: 'Ready to know your number? Pre-qualify or call us today.', primary: 'Pre-qualify', call: 'Call' },
  blog: { h: 'Learn step by step', d: 'Three guided paths that take you from first question to closing.', read: 'Start path' },
};

type Sections = typeof en;
const es: Sections = {
  topbar: 'Asistencia 24/7 para cotizaciones, preaprobaciones y cierres.',
  strip: [
    { icon: 'badge-check', t: 'Con licencia · NMLS #1486485' },
    { icon: 'trending-up', t: 'Tasas mayoristas' },
    { icon: 'clock', t: 'Cierres rápidos' },
    { icon: 'message-circle', t: 'Asistencia 24/7' },
    { icon: 'shield-check', t: 'Cierre seguro' },
    { icon: 'globe', t: 'Español e inglés' },
  ],
  story: {
    h: 'Una empresa hipotecaria de Florida, de principio a fin',
    p: [
      'LoanPro365 Mortgages nació para hacer las hipotecas de otra manera: tasas mayoristas, comunicación real y sin atajos. Durante más de 15 años* hemos financiado a primeros compradores, familias que refinancian, inversionistas con experiencia y negocios.',
      'Así seguimos trabajando. Hablas con las personas que llevan tu expediente, en español o en inglés, y cuando un préstamo se complica lo resolvemos en lugar de pasarlo a otro. Los realtors confían en nosotros por preaprobaciones sólidas y cierres que llegan a tiempo.',
    ],
    facts: [
      { n: '15+', t: 'años de experiencia*' },
      { n: '98%', t: 'de los préstamos preaprobados cerrados*' },
      { n: '6', t: 'tipos de préstamo: vivienda, refinanciación, crédito, inversión, comercial y ayudas' },
      { n: 'NMLS', t: '#1486485, verificable en NMLS Consumer Access' },
    ],
    cta: 'Conócenos',
  },
  services: { h: 'Qué hacemos', d: 'Financiamiento para cada etapa, desde tu primera casa hasta tu próxima propiedad comercial.', more: 'Ver más' },
  steps: {
    h: 'Cómo funciona',
    items: [
      { t: 'Precalifícate', d: 'Responde 4 preguntas rápidas en línea o llámanos. Sin número de Seguro Social.' },
      { t: 'Comparamos prestamistas', d: 'Buscamos tu préstamo entre prestamistas mayoristas y te mostramos las opciones lado a lado.' },
      { t: 'Obtén tu preaprobación', d: 'Haz tu oferta con una carta de preaprobación que los vendedores toman en serio.' },
      { t: 'Cierra y recibe tus llaves', d: 'Coordinamos tasación, seguro y título para que cierres a tiempo.' },
    ],
  },
  callback: {
    h: 'Sin adivinanzas. Una respuesta clara.',
    d: 'Cuéntanos qué necesitas y un asesor te llama con un plan real, no con un discurso de ventas.',
    points: [
      { t: 'Tasas mayoristas', d: 'Comparamos varios prestamistas para que tú no tengas que hacerlo.' },
      { t: 'Números claros desde el inicio', d: 'Cada cargo aparece por escrito en tu Loan Estimate antes de que te comprometas.' },
      { t: 'Resolvemos problemas', d: 'Independiente, ITIN, crédito difícil o comercial: buscamos el prestamista que encaja.' },
      { t: 'En tu idioma', d: 'Desde la primera llamada hasta la mesa de cierre, en español o en inglés.' },
    ],
    formTitle: '¿Quieres que te llamemos?',
    formSub: 'Te llamamos a la hora que prefieras.',
    name: 'Nombre', phone: 'Teléfono', county: 'Condado', time: 'Mejor hora para llamarte',
    times: { any: 'Cualquier hora', morning: 'Mañana', afternoon: 'Tarde', evening: 'Noche' },
    topic: '¿Qué necesitas?',
    topics: { buy: 'Comprar casa', refinance: 'Refinanciar', commercial: 'Préstamo comercial', other: 'Otro' },
    message: 'Cuéntanos más (opcional)',
    consent: 'Acepto que LoanPro365 Mortgages me contacte por teléfono, mensaje de texto o WhatsApp al número indicado, incluso por medios automatizados, sobre mi consulta. El consentimiento no es condición para ninguna compra ni préstamo. Pueden aplicar tarifas de mensajes y datos. Responde STOP para darte de baja.',
    send: 'Pedir que me llamen',
    ok: '¡Gracias! Un asesor te llamará pronto.',
    fail: 'No pudimos enviar tu solicitud. Escríbenos por WhatsApp:',
    required: 'Completa los campos obligatorios.',
  },
  faqIntro: 'Respuestas a lo que más nos preguntan. ¿No ves la tuya? Llámanos o escríbenos.',
  finalBand: { h: '¿Listo para conocer tu número? Precalifícate o llámanos hoy.', primary: 'Precalifícate', call: 'Llamar' },
  blog: { h: 'Aprende paso a paso', d: 'Tres rutas guiadas que te llevan de la primera pregunta al cierre.', read: 'Empezar ruta' },
};

export const SECTIONS: Record<Locale, Sections> = { en, es };
