# Affan Coconut Mobile Conversion Adaptation

**Date:** 2026-09-18  
**Status:** Proposed  
**Scope:** Responsive presentation for phone widths, primarily 360–430 px

## Objective

Make the landing page faster to scan and easier to order from on a phone while preserving the current playful beverage-brand identity. The mobile experience should reveal the value proposition, primary menu, price, and WhatsApp action with less scrolling and without floating controls covering important content.

## Chosen Direction

Use a **compact, conversion-first mobile layout**. Desktop structure and visual direction remain intact; phone breakpoints receive deliberate layout changes instead of a uniformly scaled-down desktop page.

## Mobile Experience

### Header

- Reduce vertical height while keeping the Affan Coconut wordmark readable.
- Keep Menu and Lokasi visible as direct anchors.
- Ensure all interactive targets are at least 44 px tall.
- Keep the header visually simple and non-sticky so it does not consume scarce viewport height.

### Hero

- Target a first-screen experience that communicates the brand, headline, price entry point, and primary CTA before or near the fold.
- Reduce mobile heading size and vertical gaps while retaining the bold, cheerful hierarchy.
- Recompose the hero artwork into a shorter stage with a controlled image height, smaller decorative shapes, and a repositioned “Dibuat Setiap Hari” badge.
- Make the primary CTA full-width on narrow phones for a clear thumb target.
- Keep the generated coconut image and splash treatment; crop and contain it intentionally so the section does not become excessively tall.

### Menu

- Preserve a vertical list because it is the clearest interaction for three products.
- Convert cards on phones into compact image-and-copy rows rather than tall poster cards.
- Keep product name and price visually dominant; descriptions are supporting text.
- Remove hover-dependent movement on touch-sized layouts while preserving desktop hover polish.
- Keep generous enough spacing for readability without forcing multiple screens per item.

### WhatsApp Conversion Action

- Replace the wide floating pill on phones with a compact circular WhatsApp button.
- Add bottom safe-area spacing for modern phones.
- Retain the full “Tanya & Pesan” floating treatment on larger screens.
- Keep the full-width WhatsApp action inside the location section so the action remains explicit in document flow.

### Location and Map

- Reduce heading scale, vertical section padding, and gaps on phones.
- Stack the directions and WhatsApp buttons full-width on narrow screens.
- Reduce map height to roughly 300–320 px while preserving the same interactive Google Maps embed.
- Tone down the offset map shadow on small screens to prevent horizontal overflow.

### Footer and Safe Areas

- Stack footer content cleanly on narrow phones.
- Add safe-area-aware bottom spacing so fixed controls do not collide with content or the device home indicator.
- Add `viewport-fit=cover` to the viewport metadata.

## Accessibility and Interaction Requirements

- Minimum 44×44 px touch targets.
- Body text remains at least 16 px for important descriptive content.
- Visible keyboard focus states remain intact.
- No essential content relies on hover.
- Decorative animation continues to respect `prefers-reduced-motion`.
- Layout must not horizontally scroll at 360 px.

## Verification

- Run the existing Vitest suite.
- Run the production Vite build.
- Inspect phone-width screenshots at the smallest practical browser viewport and at 500 px, confirming:
  - no horizontal overflow;
  - hero hierarchy and CTA are visible quickly;
  - menu cards are compact and readable;
  - WhatsApp control does not cover key content;
  - map and location buttons fit without clipping.

