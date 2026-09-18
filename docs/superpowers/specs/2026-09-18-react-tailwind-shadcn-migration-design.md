# Affan Coconut React, Tailwind, and shadcn Migration Design

## Goal

Migrate the existing Affan Coconut static landing page to a maintainable Vite React application using Tailwind CSS v4 and local shadcn/ui components while preserving its approved street-food-pop visual identity and business content.

## Architecture

- Vite provides the development server and production build.
- React 19 renders the page from reusable components and data.
- Tailwind CSS v4 provides the design tokens, responsive layout, decorative treatments, and motion.
- shadcn/ui source components provide the reusable `Button` and `Card` primitives. Their styles remain locally owned and are customized to match the poster aesthetic.
- The app remains a client-only, single-page marketing site with no router, server, CMS, forms, or persistent state.

## Component boundaries

- `App` composes the complete landing page.
- `Header` owns the brand link and menu navigation.
- `Hero` owns the headline, primary CTA, and decorative coconut illustration.
- `MenuSection` maps a static menu data array into `MenuCard` instances.
- `VisitSection` owns the location, operating hours, and WhatsApp contact information.
- `WhatsappButton` owns the persistent external WhatsApp action.
- `components/ui/button` and `components/ui/card` are shadcn-style primitives used by the feature components.

## Content and data flow

Menu information is stored as a local array of objects containing name, description, price, icon, and color treatment. The page renders this data directly; there is no network request or runtime mutation. Business details remain:

- Es Kelapa Biasa — Rp5.000
- Kelapa 1-an — Rp12.000
- Kelapa Muda — Rp18.000
- Hours — 09.00–17.00
- Location — Kp. Pondok Jengkol
- WhatsApp — +62 838-6319-0378 / `6283863190378`

## Visual behavior

The existing high-contrast palette, oversized display type, halftone background, coconut artwork, marquee, thick borders, and offset shadows remain. React components must not make the page look like a default shadcn dashboard. Responsive behavior stays mobile-first, with a one-column menu on narrow screens and three columns on desktop.

## Accessibility and resilience

- Semantic landmarks and heading order are preserved.
- Buttons and links have visible focus states and adequate touch targets.
- The WhatsApp action remains a normal external anchor, so it does not depend on JavaScript event handlers.
- Decorative artwork is ignored by assistive technology.
- Motion respects `prefers-reduced-motion`.
- If Google Fonts cannot load, curated local fallback fonts keep the layout usable.

## Testing and verification

- Vitest and Testing Library verify all menu items, prices, business details, menu navigation, and the WhatsApp destination.
- The Vite production build must succeed.
- Browser screenshots at 390×844 and 1440×900 verify responsive layout and visual continuity.

## Scope

This migration does not add checkout, online ordering forms, payment processing, a CMS, routing, analytics, maps, authentication, or a backend.
