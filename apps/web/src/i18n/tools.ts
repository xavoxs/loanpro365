import type { Locale, ToolKey } from './index';

/** Campos de cada herramienta. Las etiquetas viven en FIELD_LABELS para ambos idiomas. */
export type FieldDef =
  | { name: string; kind: 'number'; value: number; step?: string }
  | { name: string; kind: 'check'; value: boolean }
  | { name: string; kind: 'select'; options: string[] };

export const FIELDS: Record<ToolKey, FieldDef[]> = {
  payment: [
    { name: 'price', kind: 'number', value: 400000 },
    { name: 'downPayment', kind: 'number', value: 40000 },
    { name: 'annualRatePct', kind: 'number', value: 6.5, step: '0.01' },
    { name: 'years', kind: 'number', value: 30 },
    { name: 'propertyTaxYearly', kind: 'number', value: 7200 },
    { name: 'insuranceYearly', kind: 'number', value: 4800 },
    { name: 'floodInsuranceYearly', kind: 'number', value: 0 },
    { name: 'hoaMonthly', kind: 'number', value: 0 },
    { name: 'pmiRatePct', kind: 'number', value: 0.6, step: '0.01' },
  ],
  affordability: [
    { name: 'grossMonthlyIncome', kind: 'number', value: 8000 },
    { name: 'monthlyDebts', kind: 'number', value: 500 },
    { name: 'downPayment', kind: 'number', value: 40000 },
    { name: 'annualRatePct', kind: 'number', value: 6.5, step: '0.01' },
    { name: 'years', kind: 'number', value: 30 },
    { name: 'housingCostsPctOfPrice', kind: 'number', value: 3, step: '0.1' },
    { name: 'hoaMonthly', kind: 'number', value: 0 },
  ],
  closing: [
    { name: 'price', kind: 'number', value: 400000 },
    { name: 'loanAmount', kind: 'number', value: 360000 },
    { name: 'county', kind: 'select', options: ['broward', 'miami-dade', 'palm-beach', 'other'] },
    { name: 'singleFamily', kind: 'check', value: true },
    { name: 'sellerPaysDeedStamps', kind: 'check', value: true },
    { name: 'lenderFees', kind: 'number', value: 2500 },
    { name: 'titleAndSettlement', kind: 'number', value: 3000 },
    { name: 'prepaidsAndEscrow', kind: 'number', value: 4000 },
  ],
  rentVsBuy: [
    { name: 'monthlyRent', kind: 'number', value: 2600 },
    { name: 'rentGrowthPct', kind: 'number', value: 3, step: '0.1' },
    { name: 'price', kind: 'number', value: 380000 },
    { name: 'downPayment', kind: 'number', value: 38000 },
    { name: 'annualRatePct', kind: 'number', value: 6.5, step: '0.01' },
    { name: 'ownershipCostsYearly', kind: 'number', value: 12000 },
    { name: 'appreciationPct', kind: 'number', value: 3, step: '0.1' },
    { name: 'closingCosts', kind: 'number', value: 12000 },
    { name: 'sellingCostPct', kind: 'number', value: 7, step: '0.1' },
    { name: 'horizonYears', kind: 'number', value: 10 },
  ],
  refinance: [
    { name: 'currentPayment', kind: 'number', value: 2400 },
    { name: 'newBalance', kind: 'number', value: 300000 },
    { name: 'newRatePct', kind: 'number', value: 6, step: '0.01' },
    { name: 'newYears', kind: 'number', value: 30 },
    { name: 'closingCosts', kind: 'number', value: 6000 },
  ],
  dscr: [
    { name: 'monthlyRent', kind: 'number', value: 3000 },
    { name: 'monthlyPITIA', kind: 'number', value: 2500 },
  ],
  credit: [{ name: 'score', kind: 'number', value: 600 }],
  compare: [
    { name: 'score', kind: 'number', value: 640 },
    { name: 'downPct', kind: 'number', value: 5, step: '0.5' },
    { name: 'veteran', kind: 'check', value: false },
    { name: 'firstTimeBuyer', kind: 'check', value: true },
  ],
  assistance: [
    { name: 'firstTimeBuyer', kind: 'check', value: true },
    { name: 'primaryResidence', kind: 'check', value: true },
    { name: 'county', kind: 'select', options: ['broward', 'miami-dade', 'palm-beach', 'other'] },
  ],
  documents: [{ name: 'profile', kind: 'select', options: ['salaried', 'selfEmployed', 'itin'] }],
  glossary: [],
};

type Labels = {
  fields: Record<string, string>;
  options: Record<string, string>;
  results: Record<string, string>;
  programs: Record<'fha' | 'conventional' | 'va' | 'fha-3.5' | 'fha-10', string>;
  reasons: Record<'ok' | 'score' | 'down' | 'not-veteran' | 'lender-overlay', string>;
  assistance: { yes: string; no: string; links: { name: string; url: string; note: string }[] };
  documents: Record<'common' | 'salaried' | 'selfEmployed' | 'itin', string[]>;
  glossary: { term: string; def: string }[];
};

const en: Labels = {
  fields: {
    price: 'Home price', downPayment: 'Down payment', annualRatePct: 'Interest rate (%)', years: 'Term (years)',
    propertyTaxYearly: 'Property tax per year', insuranceYearly: 'Home & wind insurance per year', floodInsuranceYearly: 'Flood insurance per year',
    hoaMonthly: 'HOA per month', pmiRatePct: 'PMI rate (% per year)', grossMonthlyIncome: 'Gross monthly income', monthlyDebts: 'Monthly debt payments',
    housingCostsPctOfPrice: 'Taxes + insurance (% of price per year)', loanAmount: 'Loan amount', county: 'County', singleFamily: 'Single-family home',
    sellerPaysDeedStamps: 'Seller pays deed stamps', lenderFees: 'Lender fees', titleAndSettlement: 'Title & settlement', prepaidsAndEscrow: 'Prepaids & escrow',
    monthlyRent: 'Monthly rent', rentGrowthPct: 'Rent increase per year (%)', ownershipCostsYearly: 'Taxes, insurance, HOA & maintenance per year',
    appreciationPct: 'Home value growth per year (%)', closingCosts: 'Closing costs', sellingCostPct: 'Cost to sell (%)', horizonYears: 'Years to compare',
    currentPayment: 'Current principal & interest payment', newBalance: 'New loan amount', newRatePct: 'New interest rate (%)', newYears: 'New term (years)',
    monthlyPITIA: 'Monthly payment (principal, interest, taxes, insurance, HOA)', score: 'Credit score (estimate)', downPct: 'Down payment (%)',
    veteran: 'Veteran or active military', firstTimeBuyer: 'First-time buyer', primaryResidence: 'It will be my primary residence', profile: 'Your income type',
  },
  options: { broward: 'Broward', 'miami-dade': 'Miami-Dade', 'palm-beach': 'Palm Beach', other: 'Other county', salaried: 'Salaried (W-2)', selfEmployed: 'Self-employed', itin: 'ITIN' },
  results: {
    total: 'Estimated monthly payment', pi: 'Principal & interest', tax: 'Property tax', insurance: 'Insurance', hoa: 'HOA', pmi: 'Mortgage insurance',
    maxPrice: 'Estimated maximum price', maxPayment: 'Maximum housing payment', closingTotal: 'Estimated closing costs', deed: 'Deed doc stamps',
    note: 'Note doc stamps', intangible: 'Intangible tax', breakEven: 'Buying costs less than renting from year', noBreakEven: 'In this period, renting costs less',
    rentCost: 'Total rent', byYear: 'See year by year', buyCost: 'Net cost of buying', year: 'Year', newPayment: 'New payment', savings: 'Monthly savings', months: 'Months to recover costs',
    noSavings: 'This refinance does not lower your payment', ratio: 'DSCR', dscrGood: 'Many lenders look for 1.0 or higher; some ask for 1.2+.',
    dscrLow: 'Below 1.0 the rent does not cover the payment.', qualifies: 'Meets the minimum', pointsNeeded: 'points needed', minDown: 'Minimum down',
  },
  programs: { fha: 'FHA', conventional: 'Conventional', va: 'VA', 'fha-3.5': 'FHA with 3.5% down', 'fha-10': 'FHA with 10% down' },
  reasons: {
    ok: 'Fits your profile', score: 'Score below the program minimum', down: 'Down payment below the minimum',
    'not-veteran': 'Only for eligible veterans and service members', 'lender-overlay': 'VA sets no minimum score, but most lenders do',
  },
  assistance: {
    yes: 'You may be a good candidate. Funding and limits change, so confirm what is open today:',
    no: 'Most down payment programs require a first-time buyer purchasing a primary residence. Some exceptions exist — ask me.',
    links: [
      { name: 'Florida Housing Finance Corporation', url: 'https://www.floridahousing.org/', note: 'Statewide first-time buyer programs' },
    ],
  },
  documents: {
    common: ['Government photo ID', 'Last 2 months of bank statements (all pages)', 'Proof of down payment funds', 'Current address and 2-year housing history'],
    salaried: ['Last 30 days of pay stubs', 'W-2s for the last 2 years', 'Contact information for your employer'],
    selfEmployed: ['Personal tax returns for the last 2 years (all schedules)', 'Business tax returns if applicable', 'Year-to-date profit & loss statement', 'Business license or CPA letter'],
    itin: ['ITIN letter from the IRS', 'Tax returns filed with your ITIN (usually 2 years)', 'Passport or consular ID', 'Proof of income (pay stubs or bank statements)'],
  },
  glossary: [
    { term: 'Escrow', def: 'Account where your lender holds money for property taxes and insurance. / Cuenta de depósito en garantía para impuestos y seguro.' },
    { term: 'PMI', def: 'Private mortgage insurance, usually required on conventional loans with less than 20% down. / Seguro hipotecario privado.' },
    { term: 'MIP', def: 'Mortgage insurance premium on FHA loans. / Prima de seguro hipotecario de FHA.' },
    { term: 'Closing costs', def: 'Fees and taxes paid to complete the purchase. / Costos de cierre.' },
    { term: 'Down payment', def: 'The part of the price you pay upfront. / Pago inicial o enganche.' },
    { term: 'Pre-approval', def: 'Letter from a lender stating how much you may borrow after reviewing your documents. / Preaprobación.' },
    { term: 'DTI', def: 'Debt-to-income ratio: monthly debts divided by gross monthly income. / Relación deuda-ingreso.' },
    { term: 'LTV', def: 'Loan-to-value: loan amount divided by the home value. / Relación préstamo-valor.' },
    { term: 'Doc stamps', def: 'Florida documentary stamp tax on deeds and notes. / Impuesto documental de Florida.' },
    { term: 'Appraisal', def: 'Independent estimate of the home value. / Tasación o avalúo.' },
    { term: 'Rate lock', def: 'Guarantee of your interest rate for a set period. / Bloqueo de tasa.' },
    { term: 'HOA', def: 'Homeowners association and its monthly fee. / Asociación de propietarios.' },
  ],
};

const es: Labels = {
  fields: {
    price: 'Precio de la casa', downPayment: 'Pago inicial', annualRatePct: 'Tasa de interés (%)', years: 'Plazo (años)',
    propertyTaxYearly: 'Impuesto a la propiedad por año', insuranceYearly: 'Seguro de hogar y viento por año', floodInsuranceYearly: 'Seguro contra inundación por año',
    hoaMonthly: 'HOA por mes', pmiRatePct: 'Tasa de PMI (% anual)', grossMonthlyIncome: 'Ingreso mensual bruto', monthlyDebts: 'Pagos mensuales de deudas',
    housingCostsPctOfPrice: 'Impuestos + seguro (% del precio al año)', loanAmount: 'Monto del préstamo', county: 'Condado', singleFamily: 'Vivienda unifamiliar',
    sellerPaysDeedStamps: 'El vendedor paga los doc stamps de la escritura', lenderFees: 'Cargos del prestamista', titleAndSettlement: 'Título y cierre', prepaidsAndEscrow: 'Prepagos y escrow',
    monthlyRent: 'Renta mensual', rentGrowthPct: 'Aumento de la renta por año (%)', ownershipCostsYearly: 'Impuestos, seguro, HOA y mantenimiento por año',
    appreciationPct: 'Valorización de la casa por año (%)', closingCosts: 'Costos de cierre', sellingCostPct: 'Costo de vender (%)', horizonYears: 'Años a comparar',
    currentPayment: 'Pago actual de capital e interés', newBalance: 'Monto del nuevo préstamo', newRatePct: 'Nueva tasa de interés (%)', newYears: 'Nuevo plazo (años)',
    monthlyPITIA: 'Pago mensual (capital, interés, impuestos, seguro, HOA)', score: 'Puntaje de crédito (estimado)', downPct: 'Pago inicial (%)',
    veteran: 'Veterano o militar activo', firstTimeBuyer: 'Primer comprador', primaryResidence: 'Será mi residencia principal', profile: 'Tu tipo de ingreso',
  },
  options: { broward: 'Broward', 'miami-dade': 'Miami-Dade', 'palm-beach': 'Palm Beach', other: 'Otro condado', salaried: 'Asalariado (W-2)', selfEmployed: 'Independiente', itin: 'ITIN' },
  results: {
    total: 'Pago mensual estimado', pi: 'Capital e interés', tax: 'Impuesto a la propiedad', insurance: 'Seguros', hoa: 'HOA', pmi: 'Seguro hipotecario',
    maxPrice: 'Precio máximo estimado', maxPayment: 'Pago máximo de vivienda', closingTotal: 'Costos de cierre estimados', deed: 'Doc stamps de la escritura',
    note: 'Doc stamps del pagaré', intangible: 'Impuesto intangible', breakEven: 'Comprar cuesta menos que rentar desde el año', noBreakEven: 'En este periodo, rentar cuesta menos',
    rentCost: 'Renta total', byYear: 'Ver año por año', buyCost: 'Costo neto de comprar', year: 'Año', newPayment: 'Nuevo pago', savings: 'Ahorro mensual', months: 'Meses para recuperar los costos',
    noSavings: 'Esta refinanciación no baja tu pago', ratio: 'DSCR', dscrGood: 'Muchos prestamistas buscan 1.0 o más; algunos piden 1.2 o más.',
    dscrLow: 'Por debajo de 1.0 la renta no cubre el pago.', qualifies: 'Cumple el mínimo', pointsNeeded: 'puntos que faltan', minDown: 'Pago inicial mínimo',
  },
  programs: { fha: 'FHA', conventional: 'Convencional', va: 'VA', 'fha-3.5': 'FHA con 3.5% de pago inicial', 'fha-10': 'FHA con 10% de pago inicial' },
  reasons: {
    ok: 'Encaja con tu perfil', score: 'Puntaje por debajo del mínimo del programa', down: 'Pago inicial por debajo del mínimo',
    'not-veteran': 'Solo para veteranos y militares elegibles', 'lender-overlay': 'VA no fija puntaje mínimo, pero la mayoría de prestamistas sí',
  },
  assistance: {
    yes: 'Podrías ser buen candidato. Los fondos y límites cambian; confirma qué está abierto hoy:',
    no: 'La mayoría de programas exige ser primer comprador y que sea tu residencia principal. Hay excepciones: pregúntame.',
    links: [
      { name: 'Florida Housing Finance Corporation', url: 'https://www.floridahousing.org/', note: 'Programas estatales para primeros compradores' },
    ],
  },
  documents: {
    common: ['Identificación oficial con foto', 'Estados de cuenta bancarios de los últimos 2 meses (todas las páginas)', 'Prueba de los fondos del pago inicial', 'Dirección actual e historial de vivienda de 2 años'],
    salaried: ['Talones de pago de los últimos 30 días', 'Formularios W-2 de los últimos 2 años', 'Datos de contacto de tu empleador'],
    selfEmployed: ['Declaraciones de impuestos personales de 2 años (con todos los anexos)', 'Declaraciones de la empresa, si aplica', 'Estado de pérdidas y ganancias del año en curso', 'Licencia del negocio o carta de tu contador (CPA)'],
    itin: ['Carta del IRS con tu ITIN', 'Declaraciones de impuestos presentadas con tu ITIN (normalmente 2 años)', 'Pasaporte o matrícula consular', 'Prueba de ingresos (talones de pago o estados de cuenta)'],
  },
  glossary: [
    { term: 'Escrow', def: 'Cuenta donde el prestamista guarda dinero para impuestos y seguro. / Account for property taxes and insurance.' },
    { term: 'PMI', def: 'Seguro hipotecario privado; suele exigirse en préstamos convencionales con menos de 20% de pago inicial. / Private mortgage insurance.' },
    { term: 'MIP', def: 'Prima de seguro hipotecario de los préstamos FHA. / FHA mortgage insurance premium.' },
    { term: 'Closing costs', def: 'Costos de cierre: cargos e impuestos para completar la compra.' },
    { term: 'Down payment', def: 'Pago inicial o enganche: la parte del precio que pagas al inicio.' },
    { term: 'Pre-approval', def: 'Preaprobación: carta del prestamista que indica cuánto podrías pedir tras revisar tus documentos.' },
    { term: 'DTI', def: 'Relación deuda-ingreso: deudas mensuales divididas entre el ingreso mensual bruto.' },
    { term: 'LTV', def: 'Relación préstamo-valor: monto del préstamo dividido entre el valor de la casa.' },
    { term: 'Doc stamps', def: 'Impuesto documental de Florida sobre escrituras y pagarés.' },
    { term: 'Appraisal', def: 'Tasación o avalúo: estimación independiente del valor de la casa.' },
    { term: 'Rate lock', def: 'Bloqueo de tasa: garantía de tu tasa de interés por un periodo.' },
    { term: 'HOA', def: 'Asociación de propietarios y su cuota mensual.' },
  ],
};

export const TOOL_TEXT: Record<Locale, Labels> = { en, es };
