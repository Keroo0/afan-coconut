# Affan Coconut Copywriting and Icon Refresh Design

## Goal

Make the landing page more persuasive and memorable through cheerful, friendly Indonesian copy while strengthening visual cues with consistent icons and a dedicated WhatsApp SVG.

## Voice

The brand voice is cheerful, welcoming, concise, and conversational. It should sound like a friendly local seller rather than formal advertising. Copy avoids exaggerated quality claims and focuses on refreshment, affordability, and the pleasure of enjoying coconut.

## Approved copy

- Hero headline: **Segarnya Bikin Senyum!**
- Hero body: **Kelapa segar, dingin pas, dan nikmat sampai tegukan terakhir. Teman paling asyik buat lawan haus!**
- Hero CTA: **Pilih Kesegaranmu**
- Menu eyebrow: **Tinggal Pilih, Semua Bikin Seger**
- Menu heading: **Mau Seger yang Mana?**
- Es Kelapa Biasa: **Segar, manis, dan ramah di kantong. Pilihan pas buat nemenin harimu.**
- Kelapa 1-an: **Satu kelapa utuh buat kamu yang hausnya nggak setengah-setengah.**
- Kelapa Muda: **Daging lembut, air melimpah, dan rasa alami yang bikin pengin lagi.**
- Visit eyebrow: **Dekat, Segar, Siap Dinikmati**
- Visit heading: **Haus? Mampir Aja!**
- Floating WhatsApp CTA: **Tanya & Pesan**
- Footer line: **Segarnya dekat, senyumnya dapat.**

## Icons

- Add a local `WhatsAppIcon` React component containing an accessible, scalable inline SVG derived from the recognizable WhatsApp chat/phone silhouette.
- Use the SVG in the floating WhatsApp CTA and beside the contact label.
- Continue using Lucide icons for generic concepts such as location, operating hours, menu navigation, and directional arrows.
- Decorative icons remain hidden from assistive technology; meaningful icon-only elements receive accessible names.

## Layout impact

The longer headline keeps the existing two-line poster treatment and scales down at narrow widths to prevent overflow. Menu descriptions may occupy more lines, so all cards retain equal-height flexible layouts with prices aligned at the bottom.

## Testing

- Update Testing Library assertions to require the new headline, menu descriptions, CTA labels, and footer line.
- Assert the WhatsApp SVG exists inside each WhatsApp contact action.
- Run the full test suite and production build.
- Inspect mobile and desktop screenshots for headline wrapping, card alignment, and CTA readability.

## Scope

This change updates copy and icons only. Prices, opening hours, location, telephone number, overall visual direction, and application architecture remain unchanged.
