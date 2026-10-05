---
name: Paraíso dos Colchões
description: Personal local retail with editorial typography and physical product photography.
colors:
  ink: "#123f43"
  paper: "#f7f4ec"
  warm: "#e8e1d3"
  orange: "#b94d25"
  muted: "#466466"
  line: "#cacdc3"
  button-hover: "#245b5e"
  white: "#fff"
  dark-support: "#d1e5e2"
  dark-accent: "#e4a16b"
typography:
  display:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(48px,5.5vw,84px)"
    fontWeight: 400
    lineHeight: 1.03
    letterSpacing: "-.035em"
  headline:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(40px,4.5vw,66px)"
    fontWeight: 400
    lineHeight: 1.03
    letterSpacing: "-.035em"
  title:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "21px"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-.02em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    lineHeight: 1.6
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  control: "4px"
  floating: "12px"
spacing:
  control-gap: "8px"
  grid-gap: "24px"
  button-x: "23px"
  button-y: "18px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "18px 23px"
  button-primary-hover:
    backgroundColor: "{colors.button-hover}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "18px 23px"
  filter-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "11px 19px"
  field-select:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "14px"
---

# Design System: Paraíso dos Colchões

## Overview

The implemented system combines the incumbent teal and orange identity with warm paper, generous editorial headings and direct photographs. Its character is personal, calm and confident: large serif statements invite reading, while compact sans-serif controls make consultation easy.

This is documentation extracted from the implemented code, rather than an approved generated concept. The surface brief supplies the visual direction; no separately named creative metaphor has been approved.

**Key Characteristics:**
- Warm backgrounds and deep teal reading fields.
- Serif headlines paired with practical sans-serif body text.
- Photography, dividing rules and open spacing instead of boxed panels.

## Colors

Deep teal is both text and the principal action color. Burnt orange provides emphasis and keyboard focus.

### Primary
- **Ink:** headings, text, primary buttons and dark sections.
- **Orange:** italic emphasis, product brand labels, brand mark and focus outlines.

### Neutral
- **Paper:** page canvas and reversed text.
- **Warm:** the consultation guide and subtle hover fills.
- **Muted:** supporting copy on light backgrounds.
- **Line:** separators and control borders.
- **White:** manufacturer image stages.

Dark sections use dark-support for supporting copy and dark-accent for italic emphasis. Manufacturer wordmark colors remain brand-specific rather than becoming general interface accents.

## Typography

**Display Font:** self-hosted DM Serif Display, Georgia fallback.
**Body Font:** self-hosted DM Sans, sans-serif fallback.

Serif headings use weight 400, tight negative tracking and balanced wrapping. Italic orange words provide emphasis. Product titles and controls retain DM Sans. Body paragraphs are capped at 68ch, with shorter widths in split layouts. Supporting copy uses observed 12–16px sizes.

The frontmatter records desktop hierarchy. At 760px and below the hero uses `clamp(46px,11vw,68px)` with line-height 1.05; individual section headings use 42–49px and product titles use 17px. These section-specific overrides are intentional rather than a new universal scale.

## Layout

The main wrapper is `min(1280px,calc(100% - 112px))`. It narrows to 72px total gutters at 1100px, then 50px at 760px. The desktop hero uses a 1.13fr/1fr split; other sections use purposeful two-column ratios. The product grid uses three columns with 36px row and 24px column gaps, two columns at 760px and one at 350px.

Large section intervals are roughly 90–108px on desktop and 50–65px on mobile. The mobile header replaces inline navigation with an expandable menu; split sections stack. Hero photography remains a substantial 480px field on mobile. Floating contact stays in the lower right, and the footer provides extra mobile bottom space.

## Elevation & Depth

The page is predominantly flat. Dark and warm tonal fields, white product stages and thin rules establish hierarchy. Only floating contact uses `0 8px 28px rgba(0,0,0,.18)` to distinguish its persistent overlay. Buttons lift by 2px on hover; photographs use restrained zoom or translation.

## Shapes

Controls have 4px corners. Floating contact has 12px corners. Major imagery and section fields retain square corners. Product cards are open compositions with a bottom rule rather than raised containers. Product stages contain images without cropping; the couple photograph fills its frame with `object-fit:cover`.

## Components

### Buttons

Primary actions use ink on paper, 18px/23px padding, a minimum 54px height, and an arrow separated by a 28px gap. Hover changes the fill and lifts the button. Light actions reverse the palette on dark sections. Small header actions use 13px/18px padding and a 48px minimum height. Keyboard focus uses a 3px orange outline with 5px offset.

### Filters and fields

Brand filters use plain compact buttons; the active state adopts the primary action palette. Choice labels are bordered 4px rectangles, with selected choices filled teal. Their hidden radio inputs preserve keyboard interaction and place the focus outline on the visible label. The select uses paper with a muted green border. No bespoke error or disabled visual language is implemented.

### Product cards

White 1.3-aspect image stages become square on mobile. Orange brand labels precede sans-serif model titles, muted descriptors and underlined consultation links. Hover gently enlarges the contained product photograph.

### Navigation

Desktop links have animated underline rules. Mobile links sit in a teal panel with thin separators. The toggle reflects expanded state, closes after selection, and supports Escape with focus restored to the toggle.

### Castor stage and disclosure rows

The Castor feature pairs an ink editorial field with a white image stage, compact model caption and 44px arrow controls. Model changes use a masked sweep. FAQ rows use native details/summary with divider rules and plus/minus markers.

## Do's and Don'ts

- **Do** preserve the existing teal/orange identity and self-hosted font pairing.
- **Do** retain visible orange keyboard focus and reduced-motion support.
- **Do** distinguish photographic lifestyle crops from contained manufacturer product images.
- **Do** use rules and tonal fields for hierarchy before introducing shadows.
- **Don't** turn manufacturer photographs into evidence of local stock or unconfirmed commercial terms.
- **Don't** treat a provisional contact number or this page's Castor emphasis as an unrelated reusable design token.
