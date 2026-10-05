---
name: Paraíso dos Colchões
description: Cinema do descanso — real photography, confident sans typography and progressive product scenes.
colors:
  ink: "#0a3742"
  paper: "#f1f0e6"
  orange: "#c24e1f"
  label-orange: "#ad431b"
  muted: "#526a6c"
  line: "#ccd3cb"
  dark-support: "#c9e0e5"
  white: "#fff"
  orange-hover: "#af4517"
  ink-hover: "#174f5b"
  dark-border: "#709096"
typography:
  display:
    fontFamily: "Parkinsans, DM Sans, sans-serif"
    fontSize: "clamp(66px,6.45vw,96px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Parkinsans, DM Sans, sans-serif"
    fontSize: "clamp(40px,4.6vw,68px)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-.035em"
  title:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-.02em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    lineHeight: 1.55
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "13px"
    fontWeight: 600
rounded:
  control: "6px"
  filter: "30px"
  floating: "40px"
  round: "50%"
spacing:
  control-gap: "8px"
  choice-gap: "10px"
  grid-column: "30px"
  grid-row: "45px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "18px 24px"
  button-primary-hover:
    backgroundColor: "{colors.orange-hover}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "18px 24px"
  button-castor:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "18px 24px"
  filter-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.filter}"
    padding: "11px 22px"
  field-select:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "15px"
---

# Design System: Paraíso dos Colchões

## Overview

**Creative North Star: "Cinema do descanso"**

Cinema do descanso gives local mattress retail the scale of an opening scene: strong sans headlines, dark teal light fields and real people. Warm paper product scenes provide room to compare without interrupting the route to personal consultation.

The user approved this visual world and composition B. The original couple photograph and official product photographs retain authority over the generated composition. Cinematic means framing, light and progressive motion; it does not introduce a literal cinema setting.

**Key Characteristics:**
- Confident sans typography and large photographic fields.
- Teal, warm paper and orange action contrast.
- Scroll scenes with manual product controls and accessible static fallbacks.

## Colors

Deep teal provides the cinematic frame; warm paper opens the product comparison scenes.

### Primary
- **Ink:** page text, header, hero and consultation fields; also the Castor action.
- **Orange:** main actions, emphasis, mark and keyboard focus.
- **Label orange:** small product brand labels on paper, with stronger contrast than the action accent.

### Neutral
- **Paper:** light page canvas and reversed text.
- **Muted:** supporting copy on paper.
- **Line:** thin dividers and light control borders.
- **Dark support:** supporting copy and bed illustration on teal.
- **White:** contained manufacturer image stages.
- **Dark border:** choice and select borders on teal.

Hover colors belong to their corresponding action variants. Manufacturer wordmark colors are brand-specific exceptions, not general interface accents.

**The Legible Light Rule.** Supporting text on dark scenes uses the dark-support tint rather than the light-scene muted color.

## Typography

**Display Font:** self-hosted Parkinsans, weight 700; DM Sans and sans-serif fallbacks.
**Body Font:** self-hosted DM Sans, weights 400, 500, 600 and 700.

Parkinsans brings broad, rounded presence to headlines; DM Sans supports comparison, captions and controls. Emphasis is orange and upright. The old DM Serif Display font-face remains in the asset stylesheet but is not part of the active display stack.

The frontmatter records the desktop hero and common hierarchy. The Castor title is a deliberate overscale exception (`clamp(84px,10.5vw,154px)`, line-height 1). At 760px and below, the hero uses `clamp(42px,11.3vw,76px)` and four block lines, the Castor title is 80px, and product titles are 18px. Paragraphs have a 70ch global cap, with shorter scene-specific widths.

## Layout

The main wrapper is `min(1320px,calc(100% - 112px))`, changing to 72px total gutters at 1100px and 40px at 760px. Desktop hero height is 650px; its text occupies 51% and the photograph begins at 36%, overlapping beneath the teal gradient. Mobile stacks the opening text above a 430px photograph.

The Castor scene spans 180svh on desktop with a sticky 100svh stage (720px minimum, 1100px maximum); mobile uses 150svh with a 1150px section minimum and a single-column stage. Reduced motion removes the extended sticky scene. The collection has three columns with 45px row and 30px column gaps; mobile has two columns with 30px/16px gaps. Split guide, story, FAQ and visit areas stack on mobile. Header navigation becomes a toggle menu. Footer space accommodates the fixed contact action.

## Elevation & Depth

Tonal fields and thin rules carry most hierarchy. Product photographs stay on flat white stages; the Castor image gains a restrained drop shadow. Buttons lift 3px on hover. Floating contact uses a soft shadow to distinguish its persistent overlay. The guide's stylized bed uses perspective and a dark shadow.

A bounded WebGL light field animates the hero at roughly 30fps with a 1.25 device-pixel-ratio cap, stops offscreen or in a hidden document, and hides on context failure. Scroll translates and scales the couple photograph and progresses the Castor models. Fine-pointer product tilt is limited to approximately four degrees in each direction. Reduced motion disables the light field, animations, transitions and major transforms.

## Shapes

Rectangular scenes and square photographic edges keep the composition expansive. Actions and guide choices use gently curved control corners. Filters are pills; stage arrows and the mobile menu control are circular. Product cards remain open compositions with bottom dividers. Lifestyle photography fills its crop; official product imagery uses contain without clipping the mattress.

## Components

### Buttons

Orange actions use white text, 18px/24px padding and a 58px minimum height. Small actions use 13px/18px padding and a 48px minimum height. Light actions use paper/ink; the Castor action deliberately uses ink/paper. Hover changes fill, lifts and adds shadow. Global keyboard focus is a 3px orange outline with a 5px offset.

### Filters and fields

Brand filters use transparent pills and become ink/paper on selection or hover. The count announces filtered results. Choice radios expose bordered labels, paper/ink selection and a visible label focus outline. The select uses teal with paper text. Native required controls validate the guide; submission opens WhatsApp with the actual size, comfort and brand selections. The illustrated bed changes width with size selection and explicitly asks users to confirm measurements in store.

### Product cards

Contained official images lead the open card; small darker-orange brand labels precede model title, description and an underlined consultation link. Hover enlarges the photograph, with pointer tilt when available. Filtering uses browser view transitions where supported and bypasses them for reduced motion.

### Navigation

Desktop links reveal orange underlines on hover. The mobile menu reflects expanded state, closes after selection and supports Escape with focus returned to the toggle. Persistent contact remains visible at the lower right.

### Castor stage and disclosures

Three Castor references progress with scroll while the stage is pinned. Previous/next controls update the image, title and detail with a masked sweep; manual choice overrides automatic progression until the section exits the viewport. The featured title announces changes politely. FAQ uses native details/summary with thin dividers and plus/minus markers.

## Do's and Don'ts

- **Do** preserve Castor priority alongside Ortobom and Probel.
- **Do** keep the original couple photograph and contained official product images.
- **Do** preserve orange keyboard focus and the static reduced-motion presentation.
- **Do** use warm paper and teal fields, dividing rules and restrained depth.
- **Don't** reintroduce the rejected serif editorial identity.
- **Don't** add the discarded cart, invented categories or showroom claims.
- **Don't** turn catalogue references into assertions of local stock, prices or commercial terms.
- **Don't** treat the provisional WhatsApp number as a permanent brand token.
