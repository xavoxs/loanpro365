import type { Locale, RouteKey } from './index';

/**
 * Portada minimalista (secuencia inspirada en la de Rocket Mortgage: una idea y una acción por sección).
 * 1 Hero → 2 Objetivos → 3 Calculadora → 4 Por qué nosotros → 5 Aprende → 6 Preguntas → 7 Cierre.
 * Datos marcados con * son declaraciones de la empresa publicadas en loanpro365.com.
 */
type Goal = { key: RouteKey; icon: string; t: string; d: string; cta: string };

const en = {
  hero: {
    h1: 'The mortgage company that closes, in your language.',
    sub: 'Wholesale rates from several lenders, quick closings and every step explained in English or Spanish.',
    cta: 'Pre-qualify in 2 minutes',
    chipsLabel: 'What do you want to do?',
    chips: [
      { key: 'buy', icon: 'house', t: 'Buy a home' },
      { key: 'refinance', icon: 'refresh-cw', t: 'Refinance' },
      { key: 'commercial', icon: 'building-2', t: 'Commercial loan' },
    ] as { key: RouteKey; icon: string; t: string }[],
  },
  goals: {
    h: 'A loan for every goal',
    items: [
      { key: 'buy', icon: 'house', t: 'Buy your home', d: 'FHA from 3.5% down, VA, USDA, conventional and HomeReady, including options for credit challenges.', cta: 'Explore home loans' },
      { key: 'refinance', icon: 'refresh-cw', t: 'Refinance', d: 'Lower your payment, switch to a fixed rate or turn your equity into cash.', cta: 'Explore refinancing' },
      { key: 'commercial', icon: 'building-2', t: 'Invest and grow', d: 'DSCR loans for rentals and commercial financing for properties and businesses.', cta: 'Explore commercial' },
    ] as Goal[],
    also: 'Also:',
    alsoLinks: [
      { key: 'credit', t: 'Credit challenges' },
      { key: 'investors', t: 'Investment property' },
      { key: 'assistance', t: 'Florida assistance' },
    ] as { key: RouteKey; t: string }[],
  },
  calc: {
    h: 'Calculate the possibilities',
    d: 'Two numbers and you see your price range. Our calculators already include Florida taxes and insurance.',
    all: 'See all calculators',
  },
  why: {
    h: 'Why LoanPro365',
    items: [
      { n: '15+', t: 'Years of experience*', d: 'Financing first-time buyers, families, investors and businesses in Florida.' },
      { n: '98%', t: 'Pre-approved loans closed*', d: 'Quick closings and problem resolution when a file gets complicated.' },
      { n: '24/7', t: 'Bilingual assistance', d: 'Wholesale rates and the full process explained, in English or Spanish.' },
    ],
    note: '*Company figures published on loanpro365.com.',
    cta: 'Meet the company',
  },
  learn: { h: 'Learn step by step', d: 'Three guided paths from your first question to closing.', read: 'Start path' },
  final: { h: 'Know your number today.', d: 'Two minutes, no Social Security number and no credit check on this site.', cta: 'Start pre-qualification', talk: 'Talk to an advisor' },
};

type Landing = typeof en;
const es: Landing = {
  hero: {
    h1: 'La compañía hipotecaria que cierra, en tu idioma.',
    sub: 'Tasas mayoristas de varios prestamistas, cierres rápidos y cada paso explicado en español o en inglés.',
    cta: 'Precalifícate en 2 minutos',
    chipsLabel: '¿Qué quieres hacer?',
    chips: [
      { key: 'buy', icon: 'house', t: 'Comprar casa' },
      { key: 'refinance', icon: 'refresh-cw', t: 'Refinanciar' },
      { key: 'commercial', icon: 'building-2', t: 'Préstamo comercial' },
    ],
  },
  goals: {
    h: 'Un préstamo para cada meta',
    items: [
      { key: 'buy', icon: 'house', t: 'Compra tu casa', d: 'FHA desde 3.5% de pago inicial, VA, USDA, convencional y HomeReady, también con crédito difícil.', cta: 'Ver préstamos para vivienda' },
      { key: 'refinance', icon: 'refresh-cw', t: 'Refinancia', d: 'Baja tu pago, pasa a tasa fija o convierte tu capital en efectivo.', cta: 'Ver refinanciación' },
      { key: 'commercial', icon: 'building-2', t: 'Invierte y crece', d: 'Préstamos DSCR para propiedades de renta y financiamiento comercial para inmuebles y negocios.', cta: 'Ver préstamos comerciales' },
    ],
    also: 'También:',
    alsoLinks: [
      { key: 'credit', t: 'Crédito difícil' },
      { key: 'investors', t: 'Propiedades de inversión' },
      { key: 'assistance', t: 'Ayudas en Florida' },
    ],
  },
  calc: {
    h: 'Calcula tus posibilidades',
    d: 'Dos números y ves tu rango de precio. Nuestras calculadoras ya incluyen los impuestos y seguros de Florida.',
    all: 'Ver todas las calculadoras',
  },
  why: {
    h: 'Por qué LoanPro365',
    items: [
      { n: '15+', t: 'Años de experiencia*', d: 'Financiando a primeros compradores, familias, inversionistas y negocios en Florida.' },
      { n: '98%', t: 'Preaprobados que cierran*', d: 'Cierres rápidos y solución cuando un expediente se complica.' },
      { n: '24/7', t: 'Atención bilingüe', d: 'Tasas mayoristas y todo el proceso explicado, en español o en inglés.' },
    ],
    note: '*Cifras de la empresa publicadas en loanpro365.com.',
    cta: 'Conócenos',
  },
  learn: { h: 'Aprende paso a paso', d: 'Tres rutas guiadas desde tu primera pregunta hasta el cierre.', read: 'Empezar ruta' },
  final: { h: 'Conoce tu número hoy.', d: 'Dos minutos, sin número de Seguro Social y sin consulta de crédito en este sitio.', cta: 'Empezar precalificación', talk: 'Hablar con un asesor' },
};

export const LANDING: Record<Locale, Landing> = { en, es };
