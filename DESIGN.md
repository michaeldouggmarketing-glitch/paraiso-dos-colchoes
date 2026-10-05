---
name: Paraíso dos Colchões
description: Product-led rooms, petrol identity and useful mattress consultation.
colors:
  night: "#062c34"
  night-deep: "#05242b"
  paper: "#f6f2eb"
  surface: "#eae4d9"
  orange: "#f17b3b"
  action: "#b84214"
  ink: "#153e44"
  muted: "#52656a"
  on-dark: "#c9dcde"
  line: "#cecfc6"
  white: "#fff"
  action-hover: "#963511"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(3.8rem,6.5vw,6rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-.025em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(2.7rem,4.8vw,4.5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-.025em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "29px"
    fontWeight: 600
    lineHeight: 1.1
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  control:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.35
rounded:
  action: "4px"
  field: "4px"
  room: "14px"
  mobile-room: "12px"
  hotspot: "50%"
  feature-note: "8px"
spacing:
  section: "88px"
  section-mobile: "49px"
  gutter: "48px"
  gutter-mobile: "20px"
  choice-gap: "8px"
  product-gap: "36px 25px"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.white}"
    typography: "{typography.control}"
    rounded: "{rounded.action}"
    padding: "15px 23px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
  hotspot:
    backgroundColor: "{colors.night}"
    textColor: "{colors.white}"
    rounded: "{rounded.hotspot}"
    width: "38px"
    height: "38px"
  hotspot-active:
    backgroundColor: "{colors.action}"
  choice-selected:
    backgroundColor: "{colors.night}"
    textColor: "{colors.paper}"
    rounded: "{rounded.field}"
    padding: "11px 14px"
  field-select:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "11px 14px"
---

# Design System: Paraíso dos Colchões

## Overview

**Creative North Star: "A living showroom of the next morning"**

V4 pairs furnished bedroom scenes with compressed headlines, useful product facts and human consultation. Petrol and orange preserve the store identity; warm paper and stone surfaces organize comparison. The latest explicit Loja Castor reference and implemented code supersede rejected V3 composition. No approved V4 comp or new QUALITY BAR is asserted.

**Key Characteristics:** complete beds in rooms; Castor priority; real people; native controls; distinct bounded motion; complete static content.

## Colors

Frontmatter records current `styles.css` values. Night/deep night ground hero, construction, About and footer; ink/muted serve paper reading; on-dark serves petrol support copy. Paper is the main canvas, surface is the warm Castor/visit field. Line is the divider and field border. Orange highlights dark headlines and progress; action carries white-text buttons and the universal 3px focus outline (5px offset, 3px for radio labels). White is action text. Selection uses orange/night. Browser scrollbar uses paper with muted thumb; native inputs retain usable browser behavior and use action caret.

## Typography

Self-hosted Barlow Condensed 600 supplies headings; self-hosted DM Sans 400/500/600/700 supplies reading, labels and controls. Body is 16px/1.6 with paragraphs capped at 70ch. Hero and section heading scales are in frontmatter; mobile hero is 3.6rem and common section headings 2.8rem. Product names are 29px/1.1 (30px mobile); explorer names 41px/1.08 (36px mobile). Most catalog labels are 12–13px; descriptive product facts are 13px and longer section support copy 14px. Avoid restoring the rejected V3 oversized display scale.

## Layout

`.wrap` is `min(1320px, calc(100% - 96px))`; mobile uses `calc(100% - 40px)`. Sections have 88px vertical padding, 49px at ≤600px. Header is sticky in document flow, with utility/search/navigation. WhatsApp occupies this header: desktop text button, ≤850px 40px icon; it is not a viewport overlay. Hero is 34% copy/66% room, ≥620px tall. At ≥1600px its left inset is capped at `clamp(48px,4vw,96px)`. At ≤600px copy precedes a 355px room. Catalog is three columns, two at ≤850px, one at ≤600px. Explorer uses flexible room plus 300px facts; small screens stack. Other paired sections collapse on mobile. Actual breakpoints: 1600, 1150, 850 and 600px.

## Elevation & Depth

Photographic depth and alternating grounds carry most hierarchy. Header scroll shadow is `0 5px 20px #05242b18`; button hover `0 10px 25px #062c3424`; hotspot `0 4px 12px #05242b50`; feature note `0 8px 22px #062c3430`. Avoid adding generic card shadows. Images scale within clipped rooms, never cover controls. Motion is bounded by section boundaries and lower mobile travel; loops pause offscreen and when the tab is hidden. Reduced motion removes animation, transitions, parallax, progress bar and light sweep.

## Shapes

Buttons, filters, radio labels and select fields use 4px corners. Room frames use 14px, explorer 12px on mobile; feature notes use 8px. Hotspots and the room exploration arrow are circles. Products have rounded image frames with open caption/fact areas, not enclosed floating cards. Dividers are 1px line; dark section dividers use #315059.

## Components

Action buttons use burnt orange/white, 15px 23px padding, 20px gap; hover darkens, lifts 3px and gains soft shadow. Small header actions use 13px text and 12px 17px padding. Text links use a bottom rule that changes to action on hover.

Hotspots are mattress-anchored native buttons (38px desktop, 32px mobile), with a breathing outline, plus rotation, active action fill and model-specific accessible names. Activation updates over-room note, adjacent live description and the feature line; all three facts remain listed beneath the explorer. This behavior requires `app.js`; the sidecar demonstrates its actual default/active structure without app dependencies.

Ambient product details use native `details/summary`: 1px top divider, 12px type, rotating inline plus and source-backed construction facts. Manufacturer source and consultation links stay distinct. Filters expose `aria-pressed`; search matches model, brand and features, has count/empty/reset states and optional native view transitions.

Choice labels wrap native radios; checked labels turn petrol/paper and lift 2px. Visible keyboard focus appears on the label. Search fields are bordered flex rows; select is native paper/ink with a 1px line and 4px radius. The comfort guide creates a WhatsApp message; it does not submit an order or send automatically.

## Do's and Don'ts

- Do show every mattress in a complete furnished room and preserve model identity.
- Do keep the recognizable original couple as the principal people photo and prominent About image, with event context.
- Do preserve Castor priority, Ortobom, Probel, Josy's WhatsApp and confirmed address/telephone.
- Do keep complete HTML catalog/facts and native disclosures available without JavaScript.
- Don't restore cutout product plates, portrait-led V3 opening or rejected approval claims.
- Don't imply catalog rooms are the store, manufacturer availability is local stock, or accessories are included.
- Don't invent prices, hours, commercial terms, medical benefits or smoothness claims from still captures.
