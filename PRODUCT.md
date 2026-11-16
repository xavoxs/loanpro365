# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hispanic and English-speaking households in South Florida (Broward, Miami-Dade, Palm Beach) who want to buy a first or next home, refinance, or buy an investment property. Many are first-time buyers, self-employed or ITIN filers, or have imperfect credit; many arrive from a phone, often in Spanish, unsure how much they can afford and wary of being judged or pushed.

## Product Purpose

LoanPro365 Mortgages is an independent mortgage broker (Pablo Samsing, broker/owner). The site turns an anonymous visitor into a pre-qualified conversation with Pablo. Success: the visitor completes the 4-step pre-qualification (primary action); WhatsApp and phone are secondary paths.

## Positioning

An independent broker who compares several lenders for the client, speaks their language (English or Spanish), and gives honest numbers up front with free tools: real Florida costs (insurance, HOA, doc stamps) before any commitment.

## Operating Context

Visitors use the free calculators (payment, affordability, rent vs. buy, Florida closing costs, refinance, DSCR, credit plan, program comparison, assistance checker, document checklist, glossary) and then pre-qualify. Leads go to a Cloudflare Worker API and D1; the final application happens on the lender's external 1003 form.

## Capabilities and Constraints

- Bilingual parity: every page exists in `/en/` and `/es/`.
- Never ask for SSN, date of birth or account numbers on the site.
- Every estimate shows "estimate, not an offer of credit".
- Static Astro site; JS only for tools and the pre-qualification.
- Undecided: official email, physical address, Florida OFR license, credit-pull type.

## Brand Commitments

Name "LoanPro365 Mortgages" only. The visual identity is free to replace entirely (confirmed by the owner, 2026-11-15). Standing preference: the category standard executed at full craft, at the level of Better.com and Rocket Mortgage (chosen 2026-11-15).

## Evidence on Hand

- Real photo of Pablo Samsing on the current site (`pablo-samsing-mortgage.png` at loanpro365.com), to be obtained with permission.
- NMLS #1486485 (company) and #328337 (Pablo), verifiable on NMLS Consumer Access.
- No testimonials, review counts, years in business, or loans-closed figures are available: never invent them.

## Product Principles

1. Give value before asking: a real number first, contact second.
2. One clear path: pre-qualify; everything else supports it.
3. Spanish is first-class, not a translation.
4. Proof over promises: only verifiable facts.
5. Mobile first: designed and tested at 375 px.

## Accessibility & Inclusion

WCAG 2.2 AA; many users read on phones in bright light and some have limited English or financial literacy: plain language, large targets.
