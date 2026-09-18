# Affan Coconut Product-First Beverage Redesign

## Goal

Redesign the landing page into a product-first beverage storefront that makes the drinks immediately desirable, communicates the menu clearly, and turns interest into a visit or WhatsApp enquiry.

## Visual direction

The page moves away from the dense poster composition toward a fresh beverage-commerce layout. The approved green, yellow, coral, blue, and off-white palette remains, but saturated color is used in deliberate blocks with more breathing room. Thick dark outlines and compact offset shadows preserve personality without making every element compete.

The hero uses a two-column layout on desktop and a stacked layout on mobile. Persuasive copy occupies the first column. A realistic coconut drink photograph occupies the second, supported by restrained code-native coconut-leaf and water-splash graphics. The product photograph is the focal point.

Typography remains Baloo 2 for expressive headings and DM Mono for labels/body copy. Display headings use balanced wrapping, a maximum size of 6rem, and letter spacing no tighter than `-0.04em` per the Impeccable quality rules.

## Imagery

Generate four replaceable raster assets:

1. A transparent-background hero product photograph showing a cold coconut drink with fresh coconut pieces and condensation.
2. Es Kelapa Biasa product photograph.
3. Kelapa 1-an product photograph showing a whole prepared coconut.
4. Kelapa Muda product photograph emphasizing fresh young coconut flesh and water.

All images use consistent natural daylight, believable food styling, and no text, logos, watermarks, people, or artificial-looking luxury props. The assets live in `public/images/` and are referenced through data objects so the owner can replace files without restructuring components.

## Copy

- Hero headline: **Segarnya Bikin Senyum!**
- Hero body: **Kelapa segar, dingin pas, dan nikmat sampai tegukan terakhir. Teman paling asyik buat lawan haus!**
- Hero CTA: **Pilih Kesegaranmu**
- Menu intro: **Tinggal pilih, semua bikin seger.**
- Menu heading: **Mau Seger yang Mana?**
- Es Kelapa Biasa: **Segar, manis, dan ramah di kantong. Pilihan pas buat nemenin harimu.**
- Kelapa 1-an: **Satu kelapa utuh buat kamu yang hausnya nggak setengah-setengah.**
- Kelapa Muda: **Daging lembut, air melimpah, dan rasa alami yang bikin pengin lagi.**
- Location heading: **Haus? Mampir Aja!**
- WhatsApp CTA: **Tanya & Pesan**
- Footer: **Segarnya dekat, senyumnya dapat.**

## Components

- `Hero` renders the new copy, hero photo, decorative splash layer, and CTA.
- `MenuSection` renders image-led menu items from data while preserving prices at the bottom of each item.
- `WhatsAppIcon` is a local inline SVG used in both WhatsApp actions.
- `LocationSection` presents address, hours, an embedded Google Map, and a link that opens directions.
- `site-config` contains the WhatsApp number plus temporary latitude/longitude values. Replacing the two coordinates updates the embed and directions link.

## Google Maps behavior

Use a no-key Google Maps embed URL generated from configured latitude/longitude coordinates. Until the final coordinates are supplied, use a clearly documented temporary point near Kp. Pondok Jengkol. The embedded map has a descriptive title and lazy loading. A normal external directions link remains available if the iframe is blocked.

## Accessibility and performance

- Preserve semantic landmarks, ordered headings, focus visibility, and WCAG AA contrast.
- Use meaningful Indonesian alt text for product images; decorative graphics remain hidden.
- Reserve image space to avoid layout shifts and load menu/map media lazily below the fold.
- Respect reduced-motion preferences.
- Generated image dimensions are optimized for the intended display size.

## Verification

- Tests assert the approved copy, menu data, WhatsApp SVG presence, Google Maps iframe, and configurable map links.
- TypeScript and the Vite production build must pass.
- Desktop and mobile screenshots verify image cropping, headline wrapping, product hierarchy, map readability, and floating CTA placement.

## Scope

No checkout, payment, admin map picker, CMS, analytics, authentication, or backend is added. Final real photography and exact coordinates remain owner-replaceable content.
