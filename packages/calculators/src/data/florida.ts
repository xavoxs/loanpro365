/**
 * Datos de referencia. Cada valor lleva fuente y fecha de verificación.
 * Si cambia la ley o la norma, se actualiza aquí y las pruebas lo detectan.
 */
export interface Sourced<T> {
  value: T;
  source: string;
  asOf: string; // AAAA-MM-DD en que se verificó
}

/** Impuesto documental sobre la escritura (deed): por cada $100 del precio. Fla. Stat. §201.02 */
export const DEED_DOC_STAMP_PER_100: Sourced<number> = {
  value: 0.7,
  source: 'Florida Statutes §201.02(1)',
  asOf: '2026-11-15',
};

/** Miami-Dade, vivienda unifamiliar: $0.60 por $100. Fla. Stat. §201.02(1)(b) */
export const DEED_DOC_STAMP_PER_100_MIAMI_DADE_SFR: Sourced<number> = {
  value: 0.6,
  source: 'Florida Statutes §201.02(1)(b)',
  asOf: '2026-11-15',
};

/** Impuesto documental sobre el pagaré (note): por cada $100 del préstamo. Fla. Stat. §201.08 */
export const NOTE_DOC_STAMP_PER_100: Sourced<number> = {
  value: 0.35,
  source: 'Florida Statutes §201.08(1)(a)',
  asOf: '2026-11-15',
};

/** Impuesto intangible no recurrente sobre la hipoteca: 2 mills (0.2%). Fla. Stat. §199.133 */
export const INTANGIBLE_TAX_RATE: Sourced<number> = {
  value: 0.002,
  source: 'Florida Statutes §199.133',
  asOf: '2026-11-15',
};

/** FHA: prima inicial (UFMIP) 1.75% y anual 0.55% para la mayoría de préstamos a 30 años. HUD ML 2023-05 */
export const FHA_UFMIP_RATE: Sourced<number> = {
  value: 0.0175,
  source: 'HUD Mortgagee Letter 2023-05',
  asOf: '2026-11-15',
};
export const FHA_ANNUAL_MIP_RATE: Sourced<number> = {
  value: 0.0055,
  source: 'HUD Mortgagee Letter 2023-05',
  asOf: '2026-11-15',
};

export type County = 'broward' | 'miami-dade' | 'palm-beach' | 'other';
