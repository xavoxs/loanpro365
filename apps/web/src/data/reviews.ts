/**
 * Reseñas REALES de clientes. La sección «Lo que dicen nuestros clientes» de la portada solo aparece
 * cuando esta lista tiene al menos una reseña.
 *
 * Reglas (no negociables):
 * - Solo reseñas verificables (Google, Zillow, Yelp…) o testimonios con permiso escrito del cliente.
 * - Copia el texto tal cual (puedes acortarlo con «…», sin cambiar el sentido).
 * - `source` y `url` deben apuntar a la reseña pública; para testimonios con permiso, usa source: 'Testimonio con permiso'.
 * - Nombre como lo autorizó el cliente (por ejemplo «María G.»). Nunca inventes reseñas, nombres ni estrellas.
 * - `lang`: idioma original de la reseña; se muestra en ambas versiones del sitio sin traducir.
 */
export interface Review {
  name: string;          // «María G.»
  city?: string;         // «Miramar, FL»
  rating?: 1 | 2 | 3 | 4 | 5;
  text: string;          // texto original
  lang: 'en' | 'es';
  source: string;        // «Google», «Zillow», «Testimonio con permiso»
  url?: string;          // enlace a la reseña pública
  date?: string;         // AAAA-MM
  loanType?: 'buy' | 'refinance' | 'commercial' | 'investment';
}

export const REVIEWS: Review[] = [];

/** Resumen público (por ejemplo, de Google). Déjalo en null hasta tener el dato verificado. */
export const REVIEW_SUMMARY: { rating: number; count: number; source: string; url: string } | null = null;
