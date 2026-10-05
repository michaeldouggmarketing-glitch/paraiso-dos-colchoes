---
name: Paraíso dos Colchões
description: Cinematic petrol/orange scenes, original people and coordinated motion.
colors:
  night: "#062c34"
  night-deep: "#05242b"
  paper: "#f4f5f1"
  surface: "#e8ebe5"
  orange: "#f17b3b"
  action: "#b84214"
  ink: "#153e44"
  muted: "#516768"
  on-dark: "#c6dadd"
  line: "#c5cfca"
  white: "#fff"
  action-hover: "#96340f"
  control-line: "#99ada3"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(100px,10.1vw,158px)"
    fontWeight: 600
    lineHeight: 0.88
    letterSpacing: "-.025em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(48px,6.3vw,96px)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-.02em"
  title:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "25px"
    fontWeight: 500
    lineHeight: 1.2
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  control:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.35
rounded:
  action: "32px"
  field: "6px"
  photograph: "8px"
  product-image: "10px"
  filter: "25px"
spacing:
  choice-gap: "10px"
  gutter-wide: "56px"
  gutter-medium: "36px"
  gutter-mobile: "22px"
  navigation-gap: "32px"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.white}"
    typography: "{typography.control}"
    rounded: "{rounded.action}"
    padding: "15px 28px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.control}"
    rounded: "{rounded.action}"
    padding: "15px 28px"
  filter-selected:
    backgroundColor: "{colors.night}"
    textColor: "{colors.paper}"
    rounded: "{rounded.filter}"
    padding: "10px 21px"
  choice-selected:
    backgroundColor: "{colors.night}"
    textColor: "{colors.paper}"
    rounded: "{rounded.field}"
    padding: "14px 10px"
  field-select:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "15px 20px"
---

# Design System: Paraíso dos Colchões

## Overview

**Creative North Star: "A living showroom of the next morning"**

Deep petrol scenes frame original people, official catalog imagery and tall compressed lettering. Pale comparison fields and open captions give functional controls room to breathe. Orange provides emphasis and a darker action tint.

Type, imagery, light and scroll move as coordinated layers. The user's pinned cinematic reference governs this code-led V3; former Cinema B approval claims are rejected history. No approved comp is asserted. The first viewport composition belongs to the surface brief.

**Key Characteristics:**

- Barlow Condensed display with DM Sans reading and controls.
- Petrol, pale product fields and separate orange emphasis/action tints.
- Original people and official imagery with honest context.
- Coordinated motion, manual controls and complete static fallbacks.

## Colors

The frontmatter preserves actual CSS colors; `styles.css` is authoritative.

### Primary

Night and deep night ground dark scenes. Petrol ink carries text and controls on pale surfaces.

### Secondary

Light orange marks emphasis, orbital lines, progress and focus. Burnt orange carries white-text actions and pale-scene labels; action hover deepens it.

### Neutral

Paper is canvas and reversed text; surface grounds product images. Muted supports pale-scene copy, on-dark supports petrol-scene copy. Line divides surfaces; control-line borders choices/selects. White is action text. Manufacturer wordmark colors are identification exceptions.

**The Two Oranges Rule.** Use light orange for emphasis and focus, and burnt orange for white-text actions.

**The Legible Support Rule.** Use on-dark on petrol and muted on pale fields.

## Typography

Self-hosted Barlow Condensed (600) supplies display height and compression; self-hosted DM Sans (400, 500, 600, 700) supports reading and controls. Manufacturer wordmark styling remains local to brand identification.

Frontmatter records the desktop hierarchy. At (760px), opening type becomes `clamp(88px,23.6vw,148px)` with line-height (.9); common headlines become `clamp(48px,13vw,76px)`. Product titles become (22px). Body paragraphs have a (70ch) global cap with shorter local widths.

## Layout

The wrapper is `min(1300px,calc(100% - 112px))`, with (72px) total gutters at (1200px) and (44px) at (760px). Intermediate adaptation also occurs at (900px); wide Castor insets change above (1600px).

The catalog alternates seven/five columns in a twelve-column grid, with (70px/65px) row/column gaps and lower even items. Mobile uses one column, (40px) gaps and alternating (25px) side insets. Split guide/people areas stack; FAQ stacks at (900px).

About and preview images explicitly use `height:auto`. Hero/Castor bottom rows reserve (205px) for floating contact; mobile Castor reserves (65px). Scene heights and opening placement remain surface-specific.

## Elevation & Depth

Tonal separation, photographic overlays, fine orbital outlines and independent layers establish depth. Shared soft shadow is `0 18px 45px rgb(0 17 23 / .18)`; the portrait and actions have their own soft shadows in the sidecar. Product stages stay flat.

GSAP/ScrollTrigger coordinate the composition. Lenis runs on fine pointers with motion allowed. Ambient loops pause offscreen/hidden; WebGL caps pixel ratio at (1.25) and redraw intervals above (40ms). These limits do not establish measured temporal smoothness.

**The Complete Static Rule.** Reduced motion must show complete content and usable controls.

## Shapes

Actions are pills; fields use small corners; image stages and photographs use restrained curves. The arched hero portrait is a signature frame, not a universal card shape. Product cards use contain; featured imagery uses its existing cover framing. Preserve recognizable people and products.

## Components

Primary actions have a (58px) minimum height, deepening hover fill, soft shadow and sweeping highlight. Outline actions reverse to paper/night on hover. Compact header actions have a (46px) minimum height. Global focus is a (3px) orange outline offset by (6px).

Filters expose selected state through night/paper and `aria-pressed`. Choice labels expose checked state and a focused native radio; selects remain native and transparent. The guide opens a prepared WhatsApp message without automatic sending.

Open product captions follow official images. Hover enlarges images; V3 has no product pointer-tilt handler. Mobile navigation supports expanded state, selection and Escape. Castor manual controls override scroll until section exit; FAQ uses native disclosures and rotating SVG plus marks.

## Do's and Don'ts

### Do:

- **Do** preserve Castor priority alongside Ortobom and Probel.
- **Do** preserve the original couple and recognizable official product imagery.
- **Do** keep visible focus, native controls and complete reduced-motion content.
- **Do** preserve media ratios and clearance around persistent contact.

### Don't:

- **Don't** restore the rejected basic layout or former Cinema B approval authority.
- **Don't** replace active Barlow Condensed with legacy Parkinsans.
- **Don't** present catalog imagery as the store interior or confirmed local stock.
- **Don't** invent prices, hours or commercial terms.
