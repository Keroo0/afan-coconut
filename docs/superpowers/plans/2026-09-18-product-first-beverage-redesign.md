# Product-First Beverage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign Affan Coconut around realistic product imagery, persuasive copy, Google Maps, and an SVG WhatsApp action.

**Architecture:** Typed local configuration owns contact and map coordinates; typed menu data owns replaceable image paths and copy. Focused React components render the hero, image-led menu, location/map section, and local SVG icon. Tailwind v4 and a small set of custom utilities provide the responsive visual system.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS v4, shadcn/ui, Lucide, Vitest, Testing Library, generated raster assets.

---

### Task 1: Define the new page contract

**Files:** Modify `src/App.test.tsx`.

- [ ] Assert the approved hero headline/body/CTA, new menu descriptions, footer copy, three product images, hero image, WhatsApp SVG test IDs, Google Maps iframe, and directions link.
- [ ] Run `npm test -- --run`; expected result: failures for the new content and map.

### Task 2: Generate replaceable product photography

**Files:** Create `public/images/affan-coconut-hero.png`, `public/images/es-kelapa-biasa.png`, `public/images/kelapa-satuan.png`, and `public/images/kelapa-muda.png`.

- [ ] Generate each image separately with realistic daylight food photography, consistent styling, no text/logo/watermark, and composition appropriate to its page placement.
- [ ] Inspect each output and copy final selected files into `public/images/`.

### Task 3: Add configuration, icon, and map behavior

**Files:** Create `src/config/site.ts`, `src/components/icons/whatsapp-icon.tsx`, and `src/components/location-section.tsx`; modify `src/components/whatsapp-button.tsx`.

- [ ] Store temporary Pondok Jengkol coordinates and derive Google Maps embed/directions URLs from them.
- [ ] Add a scalable local WhatsApp SVG and use it in both contact actions.
- [ ] Render a lazy-loaded map iframe with a descriptive title and external directions fallback.

### Task 4: Implement copy and image-led redesign

**Files:** Modify `src/App.tsx`, `src/components/hero.tsx`, `src/components/menu-section.tsx`, `src/index.css`, and `src/components/header.tsx`.

- [ ] Update approved copy and typed menu image data.
- [ ] Rebuild the hero as a responsive product-first composition with a generated photograph and restrained splash/leaf graphics.
- [ ] Rebuild the menu as image-led products with equal-height content and bottom-aligned prices.
- [ ] Replace repeated tiny section eyebrows, cap heading sizes at 6rem, set letter spacing no tighter than `-0.04em`, and preserve reduced-motion behavior.
- [ ] Run `npm test -- --run`; expected result: all tests pass.

### Task 5: Verify production quality

**Files:** Modify only defects found during verification.

- [ ] Run `npm run build`; expected result: TypeScript and Vite production build pass.
- [ ] Capture 1440×900 and mobile-layout screenshots; verify image crops, copy hierarchy, menu balance, map, and WhatsApp placement.
- [ ] Run `npm test -- --run && npm run build` as the final gate.
