# Affan Coconut Landing Page — Design Specification

## Goal

Create a mobile-first, one-page introduction site for Affan Coconut. The page helps local customers understand the menu, operating hours, and location, with a direct WhatsApp contact path.

## Audience and tone

The audience is local customers looking for an affordable, refreshing drink. The visual direction is **street-food pop**: bright, playful, high-energy, and inspired by a contemporary Indonesian snack poster.

## Page structure

1. **Hero** — an oversized, energetic headline such as “ES KELAPA, BIKIN SEGER SEKETIKA!”, supporting copy, tropical decorative graphics, and a call-to-action that scrolls to the menu.
2. **Menu** — three bold poster-style product cards:
   - Es Kelapa Biasa — Rp5.000
   - Kelapa 1-an — Rp12.000
   - Kelapa Muda — Rp18.000
3. **Visit / contact** — a compact, easy-to-scan section showing opening hours (09.00–17.00), location (Kp. Pondok Jengkol), and WhatsApp (+62 838-6319-0378).
4. **Sticky WhatsApp action** — a persistent floating button that opens a WhatsApp conversation using a prefilled ordering enquiry.

## Visual system

- High-contrast tropical palette: coconut green, sunshine yellow, coral/orange, sky blue, and warm cream.
- Strong display typography paired with a readable, characterful body face; no generic sans-serif default styling.
- Decorative coconut, ice, splash, sticker, and halftone-like shapes made with CSS/SVG so the page remains fast without external image dependencies.
- Subtle entrance and hover animations, respecting reduced-motion preferences.

## Technical design

- A static responsive landing page using the project’s existing stack where present; if the workspace is blank, scaffold the smallest practical web setup.
- Semantic regions, correctly structured headings, descriptive labels, visible keyboard focus states, sufficient contrast, and mobile-friendly tap targets.
- Navigation links scroll to their target sections. The WhatsApp link uses the international phone number with a short Indonesian prefilled message.

## Error handling and testing

- External WhatsApp navigation uses a normal anchor link so it continues to work when JavaScript is unavailable.
- Verify menu details, operating hours, location, telephone link, responsive layout, keyboard navigation, and reduced-motion behavior.

## Explicit scope

This phase does not include online payments, stock management, a shopping cart, an order form, map integration, a CMS, or customer accounts.
