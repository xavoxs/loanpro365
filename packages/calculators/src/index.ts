import {
  DEED_DOC_STAMP_PER_100,
  DEED_DOC_STAMP_PER_100_MIAMI_DADE_SFR,
  DEED_DOC_STAMP_PER_100_MIAMI_DADE_OTHER,
  CONVENTIONAL_COMMON_LENDER_MIN,
  INTANGIBLE_TAX_RATE,
  NOTE_DOC_STAMP_PER_100,
  type County,
} from './data/florida';

export * from './data/florida';

const round2 = (n: number) => Math.round(n * 100) / 100;

/** Cuota mensual de capital + interés. */
export function principalAndInterest(principal: number, annualRatePct: number, years: number): number {
  if (principal <= 0) return 0;
  const n = years * 12;
  const r = annualRatePct / 100 / 12;
  if (r === 0) return round2(principal / n);
  return round2((principal * r) / (1 - Math.pow(1 + r, -n)));
}

export interface PaymentInput {
  price: number;
  downPayment: number;
  annualRatePct: number;
  years: number;
  propertyTaxYearly: number;
  insuranceYearly: number; // seguro de hogar + viento/huracán
  floodInsuranceYearly?: number;
  hoaMonthly?: number;
  pmiRatePct?: number; // anual, sobre el préstamo; se aplica si el enganche < 20%
}

export interface PaymentResult {
  loanAmount: number;
  principalInterest: number;
  tax: number;
  insurance: number;
  flood: number;
  hoa: number;
  pmi: number;
  total: number;
}

/** Herramienta 1: pago total PITI + HOA + seguros de Florida. */
export function monthlyPayment(i: PaymentInput): PaymentResult {
  const loanAmount = Math.max(0, i.price - i.downPayment);
  const pi = principalAndInterest(loanAmount, i.annualRatePct, i.years);
  const ltv = i.price > 0 ? loanAmount / i.price : 0;
  const pmi = ltv > 0.8 ? round2((loanAmount * (i.pmiRatePct ?? 0)) / 100 / 12) : 0;
  const tax = round2(i.propertyTaxYearly / 12);
  const insurance = round2(i.insuranceYearly / 12);
  const flood = round2((i.floodInsuranceYearly ?? 0) / 12);
  const hoa = round2(i.hoaMonthly ?? 0);
  return {
    loanAmount,
    principalInterest: pi,
    tax,
    insurance,
    flood,
    hoa,
    pmi,
    total: round2(pi + tax + insurance + flood + hoa + pmi),
  };
}

export interface AffordabilityInput {
  grossMonthlyIncome: number;
  monthlyDebts: number;
  downPayment: number;
  annualRatePct: number;
  years: number;
  /** Gastos de vivienda no financiados por mes (impuesto+seguro+HOA) estimados como % anual del precio. */
  housingCostsPctOfPrice: number;
  hoaMonthly?: number;
  maxDtiPct?: number; // por defecto 43
}

/** Herramienta 2: precio máximo de compra según DTI. */
export function affordability(i: AffordabilityInput): { maxPrice: number; maxHousingPayment: number } {
  const maxDti = (i.maxDtiPct ?? 43) / 100;
  const maxHousingPayment = Math.max(0, i.grossMonthlyIncome * maxDti - i.monthlyDebts);
  const n = i.years * 12;
  const r = i.annualRatePct / 100 / 12;
  const piFactor = r === 0 ? 1 / n : r / (1 - Math.pow(1 + r, -n)); // cuota por $1 de préstamo
  const costPerDollarOfPrice = i.housingCostsPctOfPrice / 100 / 12;
  // pago = (P - D)*piFactor + P*cost + hoa  →  P = (pago - hoa + D*piFactor) / (piFactor + cost)
  const budget = maxHousingPayment - (i.hoaMonthly ?? 0);
  if (budget <= 0) return { maxPrice: 0, maxHousingPayment: round2(maxHousingPayment) };
  const maxPrice = (budget + i.downPayment * piFactor) / (piFactor + costPerDollarOfPrice);
  return {
    maxPrice: Math.max(i.downPayment, Math.floor(maxPrice / 1000) * 1000),
    maxHousingPayment: round2(maxHousingPayment),
  };
}

export interface RentVsBuyInput {
  monthlyRent: number;
  rentGrowthPct: number;
  price: number;
  downPayment: number;
  annualRatePct: number;
  years: number;
  ownershipCostsYearly: number; // impuestos + seguro + mantenimiento + HOA
  appreciationPct: number;
  closingCosts: number;
  sellingCostPct: number;
  horizonYears: number;
}

/** Herramienta 3: rentar vs comprar. Devuelve el costo neto acumulado por año y el año de equilibrio. */
export function rentVsBuy(i: RentVsBuyInput) {
  const loan = i.price - i.downPayment;
  const pi = principalAndInterest(loan, i.annualRatePct, i.years);
  const r = i.annualRatePct / 100 / 12;
  let balance = loan;
  let rentCum = 0;
  let buyCashCum = i.downPayment + i.closingCosts;
  let rent = i.monthlyRent;
  const rows: { year: number; rentCost: number; buyNetCost: number }[] = [];
  let breakEvenYear: number | null = null;
  for (let y = 1; y <= i.horizonYears; y++) {
    for (let m = 0; m < 12; m++) {
      rentCum += rent;
      if (balance > 0) {
        const interest = balance * r;
        balance = Math.max(0, balance - (pi - interest));
        buyCashCum += pi;
      }
    }
    buyCashCum += i.ownershipCostsYearly;
    rent *= 1 + i.rentGrowthPct / 100;
    const value = i.price * Math.pow(1 + i.appreciationPct / 100, y);
    const equityIfSold = value * (1 - i.sellingCostPct / 100) - balance;
    const buyNetCost = round2(buyCashCum - equityIfSold);
    rows.push({ year: y, rentCost: round2(rentCum), buyNetCost });
    if (breakEvenYear === null && buyNetCost <= rentCum) breakEvenYear = y;
  }
  return { rows, breakEvenYear };
}

export interface ClosingCostInput {
  price: number;
  loanAmount: number;
  county: County;
  singleFamily: boolean;
  sellerPaysDeedStamps: boolean; // costumbre habitual en gran parte de FL; confirmar en el contrato
  lenderFees: number;
  titleAndSettlement: number;
  prepaidsAndEscrow: number;
}

/** Herramienta 6: costos de cierre con impuestos de Florida. */
export function closingCosts(i: ClosingCostInput) {
  const deedRate =
    i.county === 'miami-dade'
      ? i.singleFamily
        ? DEED_DOC_STAMP_PER_100_MIAMI_DADE_SFR.value
        : DEED_DOC_STAMP_PER_100_MIAMI_DADE_OTHER.value
      : DEED_DOC_STAMP_PER_100.value;
  // Fla. Stat. se calcula por cada $100 o fracción
  const per100 = (amount: number, rate: number) => round2(Math.ceil(amount / 100) * rate);
  const deedStamps = i.sellerPaysDeedStamps ? 0 : per100(i.price, deedRate);
  const noteStamps = per100(i.loanAmount, NOTE_DOC_STAMP_PER_100.value);
  const intangibleTax = round2(i.loanAmount * INTANGIBLE_TAX_RATE.value);
  const items = {
    deedStamps,
    noteStamps,
    intangibleTax,
    lenderFees: i.lenderFees,
    titleAndSettlement: i.titleAndSettlement,
    prepaidsAndEscrow: i.prepaidsAndEscrow,
  };
  const total = round2(Object.values(items).reduce((a, b) => a + b, 0));
  return { items, total };
}

/** Herramienta 7: refinanciación. */
export function refinanceBreakEven(i: {
  currentPayment: number;
  newBalance: number;
  newRatePct: number;
  newYears: number;
  closingCosts: number;
}) {
  const newPayment = principalAndInterest(i.newBalance, i.newRatePct, i.newYears);
  const monthlySavings = round2(i.currentPayment - newPayment);
  const breakEvenMonths = monthlySavings > 0 ? Math.ceil(i.closingCosts / monthlySavings) : null;
  return { newPayment, monthlySavings, breakEvenMonths };
}

/** Herramienta 9: DSCR = renta / (PITIA). */
export function dscr(i: { monthlyRent: number; monthlyPITIA: number }) {
  if (i.monthlyPITIA <= 0) return { ratio: 0 };
  return { ratio: Math.round((i.monthlyRent / i.monthlyPITIA) * 100) / 100 };
}

/** Herramienta 8: plan de crédito — qué falta para el umbral de cada tipo de préstamo. */
export const CREDIT_THRESHOLDS = [
  { program: 'fha-3.5', minScore: 580 },
  { program: 'fha-10', minScore: 500 },
  { program: 'conventional', minScore: CONVENTIONAL_COMMON_LENDER_MIN.value },
] as const;

export function creditGap(score: number) {
  return CREDIT_THRESHOLDS.map((t) => ({
    program: t.program,
    minScore: t.minScore,
    qualifies: score >= t.minScore,
    pointsNeeded: Math.max(0, t.minScore - score),
  }));
}

/**
 * Herramienta 5: comparador de programas por perfil.
 * Fuentes: HUD Handbook 4000.1 (FHA 580/3.5%, 500/10%); convencional: sin mínimo de la agencia en DU desde
 * nov-2025 (Fannie Mae SEL-2025-09), 620 como mínimo habitual de los prestamistas
 * y B5-6 / 97% LTV (3% de pago inicial con HomeReady o primer comprador); VA no fija puntaje mínimo (cada prestamista sí).
 */
export type ProgramKey = 'fha' | 'conventional' | 'va';
export interface ProgramFit { program: ProgramKey; fits: boolean; minDownPct: number | null; reason: 'ok' | 'score' | 'down' | 'not-veteran' | 'lender-overlay' }

export function loanPrograms(i: { score: number; downPct: number; veteran: boolean; firstTimeBuyer: boolean }): ProgramFit[] {
  const fhaDown = i.score >= 580 ? 3.5 : i.score >= 500 ? 10 : null;
  const fha: ProgramFit = fhaDown === null
    ? { program: 'fha', fits: false, minDownPct: null, reason: 'score' }
    : { program: 'fha', fits: i.downPct >= fhaDown, minDownPct: fhaDown, reason: i.downPct >= fhaDown ? 'ok' : 'down' };
  const convDown = i.firstTimeBuyer ? 3 : 5;
  // Bajo 620 no se descarta: depende del análisis automático (DU/LPA) y del prestamista.
  const conventional: ProgramFit = i.score < CONVENTIONAL_COMMON_LENDER_MIN.value
    ? { program: 'conventional', fits: false, minDownPct: convDown, reason: 'lender-overlay' }
    : { program: 'conventional', fits: i.downPct >= convDown, minDownPct: convDown, reason: i.downPct >= convDown ? 'ok' : 'down' };
  const va: ProgramFit = !i.veteran
    ? { program: 'va', fits: false, minDownPct: 0, reason: 'not-veteran' }
    : { program: 'va', fits: true, minDownPct: 0, reason: i.score < 580 ? 'lender-overlay' : 'ok' };
  return [fha, conventional, va];
}
