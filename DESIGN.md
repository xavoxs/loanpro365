---
name: LoanPro365
description: Bilingual South Florida mortgage broker; one number, one action.
colors:
  navy-ink: "#0c1f3f"
  slate-ink: "#3c4b66"
  muted-slate: "#5d6b84"
  white-ground: "#ffffff"
  pale-field: "#eef3fb"
  mist-field: "#f6f8fc"
  hairline: "#dbe3ef"
  action-blue: "#1f4fd8"
  action-blue-deep: "#173fb4"
  action-blue-soft: "#e6edff"
  confirm-green: "#0f7a4a"
  error-red: "#b42318"
typography:
  display:
    fontFamily: "'Manrope Variable', 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 1.3rem + 3.6vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Manrope Variable', 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 1.2rem + 1.6vw, 2.4rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  figure:
    fontFamily: "'Manrope Variable', 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(1.55rem, 1.2rem + 1.5vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.03em"
    fontFeature: "tnum"
  title:
    fontFamily: "'Manrope Variable', 'Segoe UI', system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Manrope Variable', 'Segoe UI', system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "'Manrope Variable', 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1rem + 0.3vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Manrope Variable', 'Segoe UI', system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.6
rounded:
  nav: "8px"
  field: "10px"
  control: "12px"
  photo: "16px"
  panel: "20px"
  pill: "999px"
spacing:
  gutter: "16px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "24px"
  2xl: "32px"
  3xl: "40px"
  section: "72px"
components:
  button-primary:
    backgroundColor: "{colors.action-blue}"
    textColor: "{colors.white-ground}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.action-blue-deep}"
    textColor: "{colors.white-ground}"
  button-primary-small:
    backgroundColor: "{colors.action-blue}"
    textColor: "{colors.white-ground}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "42px"
  button-ghost:
    backgroundColor: "{colors.white-ground}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "52px"
  input:
    backgroundColor: "{colors.white-ground}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.field}"
    padding: "0 14px"
    height: "50px"
  estimator-card:
    backgroundColor: "{colors.white-ground}"
    rounded: "{rounded.panel}"
    padding: "20px"
  estimator-readout:
    backgroundColor: "{colors.pale-field}"
    textColor: "{colors.navy-ink}"
    typography: "{typography.figure}"
    rounded: "{rounded.control}"
    padding: "14px 16px"
  path-card:
    backgroundColor: "{colors.white-ground}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.control}"
    padding: "20px"
  language-pill:
    backgroundColor: "{colors.white-ground}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.pill}"
    padding: "0 12px"
    height: "40px"
  nav-link:
    textColor: "{colors.slate-ink}"
    rounded: "{rounded.nav}"
    padding: "8px 12px"
  nav-link-hover:
    backgroundColor: "{colors.mist-field}"
    textColor: "{colors.navy-ink}"
---

# Design System: LoanPro365

## Overview

**Creative North Star: "The Clear Number"**

The category standard for consumer mortgage sites, played straight: a white ground, deep navy ink, and one confident blue that marks every action. The visitor's own figure is the hero. Each screen resolves to one number (a price range, a payment, a closing cost) and one next step, with trust facts placed beside the action rather than below it.

Density is calm and generous: wide 72px bands alternate white and a barely-blue mist, separated by hairlines. Type is a single family, Manrope, set heavy and tight for headings and numbers, plain for reading. Depth is soft and navy-tinted; surfaces that hold the user's numbers (estimator, pre-qualification, tool results) lift, everything else sits flat on hairlines. Icons are Lucide line icons at a 2px stroke, inlined as SVG.

Motion is short and decelerating. The signature is the hero estimator: as income or down payment changes, the range counts from its old values to the new ones over 450ms and flashes action blue while it moves, dropping to an instant swap under reduced motion.

**Key Characteristics:**
- White ground, navy ink, one action blue; green only for affirmative ticks.
- Manrope Variable throughout, 800 weight with negative tracking for display and figures, tabular numerals for every amount.
- 12px controls, 20px panels, pill for the language switch.
- Soft, navy-tinted two-layer shadows on number-holding panels only.
- Lucide line icons in tinted tiles or bare, never filled glyphs.

## Colors

A restrained cool palette: navy for words, one blue for action, pale blue-gray for fields, and two signal colors that stay out of decoration.

### Primary
- **Action Blue** (`action-blue`): every primary button, links, focus outline, selected radio borders, progress fill, step dots, the brand mark, the final CTA band, and the estimator's counting flash.
- **Deep Action Blue** (`action-blue-deep`): hover state for primary buttons and links.
- **Blue Wash** (`action-blue-soft`): icon tiles behind loan-path icons, photo placeholders, selected radio fill, the 4px input focus halo, text selection.

### Tertiary
- **Confirmation Green** (`confirm-green`): check and badge icons in the trust strip, Pablo's card meta, and checklist ticks. Icons only; never fills, buttons, or text blocks.
- **Error Red** (`error-red`): validation messages and the border of `aria-invalid` fields.

### Neutral
- **Navy Ink** (`navy-ink`): headings, body text, ghost-button text, and the footer ground.
- **Slate Ink** (`slate-ink`): secondary copy, lead paragraphs, labels, nav links, list items.
- **Muted Slate** (`muted-slate`): notes, captions, trailing arrows, the `$` prefix, ghost-button hover stroke.
- **White Ground** (`white-ground`): page and card surfaces.
- **Pale Field** (`pale-field`): estimator readout, tool result panels, progress track.
- **Mist Field** (`mist-field`): alternate bands, hero gradient start, row and nav hover.
- **Hairline** (`hairline`): every 1px divider, card border, and the 1.5px input and ghost strokes.

### Named Rules
**The One Blue Rule.** Every primary action on every screen is Action Blue. No second accent hue exists; inverted contexts (the blue final band) flip the button to white with blue text rather than introducing a new color.

**The Green Means Yes Rule.** Green appears only as an icon beside an affirmative fact (verified, private, included). It never carries a surface or a call to action.

## Typography

**Display Font:** Manrope Variable (with Segoe UI, system-ui)
**Body Font:** Manrope Variable (same family)

**Character:** One geometric-humanist sans used at two temperatures: 800 weight with tight tracking for headings and money, 400 to 600 for reading and labels. Self-hosted through Fontsource.

### Hierarchy
- **Display** (800, fluid 2.1rem to 3.6rem, 1.12, -0.035em): the H1 only, balanced wrap.
- **Headline** (800, fluid 1.6rem to 2.4rem, 1.12, -0.025em): section H2s. Interior pages step down to 1.35rem to 1.7rem.
- **Figure** (800, fluid 1.55rem to 2.25rem, 1.15, -0.03em, tabular): the estimator range and tool result totals (results reach 2.4rem).
- **Title** (700, 1.15rem, -0.01em): H3s, card titles (1.05rem), the estimator heading (1.1rem). Form legends sit between at 1.3rem / 800.
- **Body** (400, 17px, 1.6): running text; capped at 58ch for leads and 68ch for paragraphs.
- **Label** (600, 14px): form labels, small meta, progress text; 13px for notes and consent.

### Named Rules
**The Tabular Money Rule.** Every amount, input, and table uses tabular numerals so counting values never jitter.

**The Heavy Number Rule.** The user's figure gets the heaviest type on its panel; the panel's own heading stays at title size.

## Layout

A centered 1160px container with 16px gutters. Home bands run 72px top and bottom; interior pages use an 880px reading column. The hero splits 7fr / 5fr from 1040px (estimator left, broker card and trust list right) with a 56px gap; below that everything stacks with the estimator directly under the H1. Tool pages pair a form with a 340px sticky result column from 900px; on mobile the result moves above the form.

Rhythm runs on a 4px base, mostly 8, 12, 16, 20, 24, 32, 40, and 64/72 for bands. Breakpoints in use: 640, 760, 900, 1040, 1100 (desktop nav and header CTA appear, sticky bar leaves), 1320 (header phone appears).

Below 1100px a fixed bottom bar carries the pre-qualify button and a square WhatsApp ghost button, and it can slide off-screen; the body reserves 76px for it.

## Elevation & Depth

Hybrid: hairline borders define most surfaces; soft navy-tinted shadows lift only the panels where the user works with numbers, and appear on links as a hover response.

### Shadow Vocabulary
- **Rest lift** (`0 1px 2px rgba(12,31,63,.06), 0 2px 8px rgba(12,31,63,.06)`): broker card, Florida cost table, hover state of path cards and linked cards.
- **Panel lift** (`0 2px 4px rgba(12,31,63,.06), 0 12px 32px rgba(12,31,63,.10)`): the estimator, the pre-qualification form, the mobile nav panel.
- **Button glow** (`0 1px 2px rgba(12,31,63,.12), 0 6px 16px rgba(31,79,216,.22)`): primary buttons, a blue-tinted halo under the action.

### Named Rules
**The Lift Means Input Rule.** Panel lift is reserved for surfaces that hold the user's own numbers. Informational cards stay on hairlines and earn rest lift at most.

## Shapes

Gentle, consistent rounding: 12px on buttons, path cards, radio options and readouts; 10px on inputs; 8px on nav links; 12px on icon tiles; 16px on the small broker photo; 20px on large panels (estimator, pre-qualification, result, table, about photo). Pills (999px) for the language switch and progress track; circles for step dots. Borders are 1px hairlines for containers and 1.5px for interactive strokes, drawn as inset shadows on ghost buttons.

## Components

### Buttons
Confident and tactile.
- **Shape:** gently rounded (12px), 52px tall, 700 weight, icon gap 8px.
- **Primary:** Action Blue with white text and the button glow.
- **Hover / Focus:** deepens to Deep Action Blue and rises 1px; settles on press. Global focus is a 3px Action Blue outline offset 3px.
- **Ghost:** white with navy text and a 1.5px hairline inset stroke that darkens to Muted Slate on hover.
- **Small:** 42px tall, 16px padding, used in the desktop header.
- **Inverted:** on the blue final band the button turns white with blue text.

### Cards / Containers
- **Corner Style:** 12px for link cards, 20px for panels.
- **Background:** white on white or mist bands; Pale Field for result and readout panels.
- **Shadow Strategy:** see Elevation; link cards gain rest lift, a blue border, and a 2px rise on hover.
- **Border:** 1px hairline.
- **Internal Padding:** 18 to 24px.

### Inputs / Fields
- **Style:** white, 1.5px hairline stroke, 10px radius, 50px tall, 600 weight tabular text. Money fields carry a muted `$` prefix.
- **Focus:** border turns Action Blue with a 4px Blue Wash halo.
- **Error:** Error Red border on invalid fields, 600-weight red message.
- **Choice options:** radio rows become 12px bordered tiles that fill Blue Wash with a blue border when selected.

### Navigation
- **Header:** sticky, near-opaque white with a hairline bottom, 68px tall. Brand mark is a 34px blue tile with a white house icon.
- **Desktop links:** Slate Ink, 600, 8px radius; hover goes navy on Mist Field.
- **Language switch:** a pill with globe icon and the other locale's code.
- **Mobile:** a 44px menu toggle opens a full-width panel of 700-weight rows on hairlines, ending in a full-width primary button.

### Hero Estimator (signature)
A 20px white panel with panel lift: two money inputs side by side, a Pale Field readout showing the price range in Figure type, a full-width primary button, and a WhatsApp text link. On input the range counts from old to new values (450ms, quartic ease-out) and turns Action Blue while counting.

### Link Rows and Path Cards
Tool rows are hairline-divided rows with a blue leading icon and a muted trailing arrow, Mist Field on hover. Path cards pair a 48px Blue Wash icon tile with title, description, and arrow. Arrow links nudge their arrow 3px right on hover.

## Do's and Don'ts

### Do:
- **Do** use Action Blue for every primary action and nothing decorative.
- **Do** set every amount in tabular numerals at 800 weight with negative tracking.
- **Do** inline Lucide line icons at 2px stroke, 16 to 24px, tinted blue in tiles or muted as trailing arrows.
- **Do** reserve panel lift for surfaces holding the user's numbers; use hairlines elsewhere.
- **Do** use the `cubic-bezier(0.16, 1, 0.3, 1)` ease at 0.15 to 0.45s, and drop all motion under reduced motion.
- **Do** tint shadows navy, not black.

### Don't:
- **Don't** introduce a second accent hue; the blue final band is the only large color field.
- **Don't** use green for buttons, fills, or text; it marks affirmative icons only.
- **Don't** use filled glyph icons, emoji, or icon fonts.
- **Don't** add a second typeface or a system display face; Manrope carries every role.
