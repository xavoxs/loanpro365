import type { Locale } from './index';

/** Rutas de aprendizaje del blog. Cada una termina en la acción que convierte para ese público. */
export const SERIES_KEYS = ['buyer', 'refinance', 'commercial'] as const;
export type SeriesKey = (typeof SERIES_KEYS)[number];

interface SeriesText {
  name: string;
  intro: string;
  start: string;
  doneTitle: string;
  doneText: string;
  /** prequal = precalificación; advisor = conversación con un asesor (WhatsApp). */
  action: 'prequal' | 'advisor';
  actionLabel: string;
}

export const SERIES: Record<Locale, Record<SeriesKey, SeriesText>> = {
  en: {
    buyer: {
      name: 'Homebuyer path',
      intro: 'From deciding whether to buy to getting your keys.',
      start: 'Start the homebuyer path',
      doneTitle: 'You finished the homebuyer path.',
      doneText: 'You know what you need. The next step is getting your real number with our team.',
      action: 'prequal',
      actionLabel: 'Start pre-qualification',
    },
    refinance: {
      name: 'Refinance path',
      intro: 'When refinancing pays off, which option fits and what it costs in Florida.',
      start: 'Start the refinance path',
      doneTitle: 'You finished the refinance path.',
      doneText: 'Now compare real offers: we shop your refinance across lenders and show you the break-even with your numbers.',
      action: 'prequal',
      actionLabel: 'Check my refinance options',
    },
    commercial: {
      name: 'Commercial financing path',
      intro: 'Which loan your property or business needs and how lenders evaluate it.',
      start: 'Start the commercial path',
      doneTitle: 'You finished the commercial financing path.',
      doneText: 'Every commercial deal is different. Tell us about your property or business and we’ll tell you which lenders fit.',
      action: 'advisor',
      actionLabel: 'Talk to a commercial advisor',
    },
  },
  es: {
    buyer: {
      name: 'Ruta del comprador',
      intro: 'Desde decidir si te conviene comprar hasta recibir las llaves.',
      start: 'Empezar la ruta del comprador',
      doneTitle: 'Completaste la ruta del comprador.',
      doneText: 'Ya sabes lo que necesitas. El siguiente paso es conocer tu número real con nuestro equipo.',
      action: 'prequal',
      actionLabel: 'Empezar precalificación',
    },
    refinance: {
      name: 'Ruta de refinanciación',
      intro: 'Cuándo conviene refinanciar, qué opción te sirve y cuánto cuesta en Florida.',
      start: 'Empezar la ruta de refinanciación',
      doneTitle: 'Completaste la ruta de refinanciación.',
      doneText: 'Ahora compara ofertas reales: buscamos tu refinanciación entre varios prestamistas y te mostramos el punto de equilibrio con tus números.',
      action: 'prequal',
      actionLabel: 'Ver mis opciones de refinanciación',
    },
    commercial: {
      name: 'Ruta de financiamiento comercial',
      intro: 'Qué préstamo necesita tu propiedad o tu negocio y cómo lo evalúan los prestamistas.',
      start: 'Empezar la ruta comercial',
      doneTitle: 'Completaste la ruta de financiamiento comercial.',
      doneText: 'Cada operación comercial es distinta. Cuéntanos sobre tu propiedad o tu negocio y te decimos qué prestamistas encajan.',
      action: 'advisor',
      actionLabel: 'Hablar con un asesor comercial',
    },
  },
};
