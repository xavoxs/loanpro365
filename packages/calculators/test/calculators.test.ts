import { describe, expect, it } from 'vitest';
import {
  affordability,
  closingCosts,
  creditGap,
  dscr,
  monthlyPayment,
  principalAndInterest,
  refinanceBreakEven,
  rentVsBuy,
} from '../src/index';

describe('principalAndInterest', () => {
  it('matches the standard amortization formula', () => {
    // $300,000 a 6.5% a 30 años ≈ $1,896.20
    expect(principalAndInterest(300_000, 6.5, 30)).toBeCloseTo(1896.2, 1);
  });
  it('handles 0% rate', () => {
    expect(principalAndInterest(120_000, 0, 10)).toBe(1000);
  });
});

describe('monthlyPayment', () => {
  it('adds PMI only above 80% LTV', () => {
    const base = { price: 400_000, annualRatePct: 6.5, years: 30, propertyTaxYearly: 7200, insuranceYearly: 4800, pmiRatePct: 0.6 };
    expect(monthlyPayment({ ...base, downPayment: 80_000 }).pmi).toBe(0);
    expect(monthlyPayment({ ...base, downPayment: 20_000 }).pmi).toBe(190);
  });
  it('total is the sum of parts', () => {
    const r = monthlyPayment({ price: 400_000, downPayment: 80_000, annualRatePct: 6.5, years: 30, propertyTaxYearly: 7200, insuranceYearly: 4800, hoaMonthly: 300 });
    expect(r.total).toBeCloseTo(r.principalInterest + 600 + 400 + 300, 2);
  });
});

describe('affordability', () => {
  it('produces a price whose payment fits the DTI budget', () => {
    const input = { grossMonthlyIncome: 8000, monthlyDebts: 500, downPayment: 40_000, annualRatePct: 6.5, years: 30, housingCostsPctOfPrice: 3 };
    const { maxPrice, maxHousingPayment } = affordability(input);
    expect(maxHousingPayment).toBe(2940);
    const pay = monthlyPayment({ price: maxPrice, downPayment: 40_000, annualRatePct: 6.5, years: 30, propertyTaxYearly: maxPrice * 0.03, insuranceYearly: 0 });
    expect(pay.total).toBeLessThanOrEqual(2940);
  });
  it('returns 0 when debts exceed the budget', () => {
    expect(affordability({ grossMonthlyIncome: 2000, monthlyDebts: 2000, downPayment: 0, annualRatePct: 6, years: 30, housingCostsPctOfPrice: 3 }).maxPrice).toBe(0);
  });
});

describe('closingCosts (Florida)', () => {
  it('computes note stamps and intangible tax', () => {
    const r = closingCosts({ price: 400_000, loanAmount: 320_000, county: 'broward', singleFamily: true, sellerPaysDeedStamps: true, lenderFees: 0, titleAndSettlement: 0, prepaidsAndEscrow: 0 });
    expect(r.items.noteStamps).toBe(1120); // 3200 × 0.35
    expect(r.items.intangibleTax).toBe(640); // 0.2%
    expect(r.items.deedStamps).toBe(0);
  });
  it('uses the Miami-Dade single-family deed rate', () => {
    const r = closingCosts({ price: 400_000, loanAmount: 0, county: 'miami-dade', singleFamily: true, sellerPaysDeedStamps: false, lenderFees: 0, titleAndSettlement: 0, prepaidsAndEscrow: 0 });
    expect(r.items.deedStamps).toBe(2400);
  });
  it('rounds up to the next $100', () => {
    const r = closingCosts({ price: 0, loanAmount: 100_050, county: 'other', singleFamily: true, sellerPaysDeedStamps: true, lenderFees: 0, titleAndSettlement: 0, prepaidsAndEscrow: 0 });
    expect(r.items.noteStamps).toBe(350.35);
  });
});

describe('rentVsBuy', () => {
  it('returns one row per year and a break-even when buying wins', () => {
    const r = rentVsBuy({ monthlyRent: 2800, rentGrowthPct: 4, price: 380_000, downPayment: 38_000, annualRatePct: 6.5, years: 30, ownershipCostsYearly: 11_000, appreciationPct: 4, closingCosts: 12_000, sellingCostPct: 7, horizonYears: 10 });
    expect(r.rows).toHaveLength(10);
    expect(r.breakEvenYear).not.toBeNull();
  });
});

describe('refinance, dscr, credit', () => {
  it('refinance break-even', () => {
    const r = refinanceBreakEven({ currentPayment: 2500, newBalance: 300_000, newRatePct: 6, newYears: 30, closingCosts: 6000 });
    expect(r.monthlySavings).toBeGreaterThan(0);
    expect(r.breakEvenMonths).toBe(Math.ceil(6000 / r.monthlySavings));
  });
  it('dscr ratio', () => {
    expect(dscr({ monthlyRent: 3000, monthlyPITIA: 2500 }).ratio).toBe(1.2);
  });
  it('credit gap', () => {
    const g = creditGap(600);
    expect(g.find((x) => x.program === 'conventional')!.pointsNeeded).toBe(20);
    expect(g.find((x) => x.program === 'fha-3.5')!.qualifies).toBe(true);
  });
});
