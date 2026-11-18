import type { Locale, RouteKey } from './index';

/**
 * Portada minimalista. Copy aprobado con /copywriter, enfoque A «Tu presupuesto» (2026-11-17):
 * la promesa del hero (saber hasta qué precio puedes comprar) se cumple en la misma pantalla con el estimador.
 * Secuencia: 1 Hero + estimador → 2 Objetivos → 3 Lo que ganas → 4 Aprende → 5 Preguntas → 6 Cierre.
 * Datos marcados con * son declaraciones de la empresa publicadas en loanpro365.com.
 */
type Goal = { key: RouteKey; icon: string; t: string; d: string; cta: string };

const en = {
  hero: {
    h1: 'See how much home you can afford.',
    sub: 'Two numbers and you’ll know in seconds, Florida taxes and insurance included. No name required.',
    est: {
      title: 'Your budget',
      income: 'Monthly household income',
      down: 'Savings for down payment',
      calc: 'Calculate my budget',
      result: 'You could buy a home between',
      next: 'Continue my pre-qualification',
      note: 'Estimate assuming 6.5% for 30 years, taxes and insurance at 3% of price per year and up to 43% of income for debts. Not an offer of credit.',
      empty: 'Enter your monthly income to calculate.',
    },
    chipsLabel: 'Or choose what you want to do',
    chips: [
      { key: 'buy', icon: 'house', t: 'Buy a home' },
      { key: 'refinance', icon: 'refresh-cw', t: 'Refinance' },
      { key: 'commercial', icon: 'building-2', t: 'Commercial loan' },
    ] as { key: RouteKey; icon: string; t: string }[],
  },
  goals: {
    h: 'What do you want to do?',
    d: 'Pick your path and we’ll show the options that fit you.',
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
  why: {
    h: 'What you get working with us',
    items: [
      { n: '15+', t: 'Florida experience*', d: '15+ years financing homes, investments and businesses.' },
      { n: '98%', t: 'Loans that close*', d: '98% of our pre-approvals close.' },
      { n: 'icon:scale', t: 'Several lenders, one call', d: 'We compare several lenders, so you don’t have to.' },
    ],
    note: '*Company figures published on loanpro365.com.',
    cta: 'Meet the company',
  },
  learn: { h: 'Understand the process before you start', d: 'Short step-by-step guides to buying, refinancing or investing.', read: 'Start guide' },
  faqTitle: 'Common questions',
  calcAll: 'See all calculators',
  final: { h: 'Know your number today.', d: 'It takes 2 minutes. We don’t ask for your Social Security number or check your credit on this site.', cta: 'Start my pre-qualification', talk: 'Talk to an advisor' },
};

type Landing = typeof en;
const es: Landing = {
  hero: {
    h1: 'Descubre hasta qué precio de casa puedes comprar.',
    sub: 'Dos datos y lo sabes en segundos, con impuestos y seguro de Florida incluidos. Sin dar tu nombre.',
    est: {
      title: 'Tu presupuesto',
      income: 'Ingreso mensual del hogar',
      down: 'Ahorros para el pago inicial',
      calc: 'Calcular mi presupuesto',
      result: 'Podrías comprar una casa de entre',
      next: 'Continuar con mi precalificación',
      note: 'Estimación con 6.5% a 30 años, impuestos y seguro del 3% del precio al año y hasta 43% del ingreso para deudas. No es una oferta de crédito.',
      empty: 'Escribe tu ingreso mensual para calcular.',
    },
    chipsLabel: 'O elige qué quieres hacer',
    chips: [
      { key: 'buy', icon: 'house', t: 'Comprar casa' },
      { key: 'refinance', icon: 'refresh-cw', t: 'Refinanciar' },
      { key: 'commercial', icon: 'building-2', t: 'Préstamo comercial' },
    ],
  },
  goals: {
    h: '¿Qué quieres lograr?',
    d: 'Elige tu camino y te mostramos las opciones que encajan contigo.',
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
  why: {
    h: 'Lo que ganas trabajando con nosotros',
    items: [
      { n: '15+', t: 'Experiencia en Florida*', d: 'Más de 15 años financiando casas, inversiones y negocios.' },
      { n: '98%', t: 'Préstamos que llegan al cierre*', d: 'El 98% de nuestros preaprobados cierran.' },
      { n: 'icon:scale', t: 'Varios prestamistas, una llamada', d: 'Comparamos varios prestamistas por ti, así no tienes que hacerlo tú.' },
    ],
    note: '*Cifras de la empresa publicadas en loanpro365.com.',
    cta: 'Conócenos',
  },
  learn: { h: 'Entiende el proceso antes de empezar', d: 'Guías cortas, paso a paso, para comprar, refinanciar o invertir.', read: 'Empezar guía' },
  faqTitle: 'Preguntas frecuentes',
  calcAll: 'Ver todas las calculadoras',
  final: { h: 'Conoce tu número hoy.', d: 'Te toma 2 minutos. No pedimos número de Seguro Social ni consultamos tu crédito en este sitio.', cta: 'Empezar mi precalificación', talk: 'Hablar con un asesor' },
};

export const LANDING: Record<Locale, Landing> = { en, es };
