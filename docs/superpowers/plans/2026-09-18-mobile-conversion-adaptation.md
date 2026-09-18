# Mobile Conversion Adaptation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver a compact, conversion-first Affan Coconut phone experience for 360–430 px screens without weakening the current desktop design.

**Architecture:** Keep the existing React component boundaries and implement the adaptation with mobile-first Tailwind classes inside each component. Add focused DOM contract tests for the responsive layout decisions, then validate actual layout with browser screenshots and overflow measurements.

**Tech Stack:** React 19, TypeScript, Tailwind CSS 4, shadcn-style local components, Vitest, Testing Library, Vite

---

### Task 1: Lock the mobile layout contract with failing tests

**Files:**
- Modify: `src/App.test.tsx`

- [x] **Step 1: Add tests for the compact mobile hero, menu, floating CTA, and safe viewport**

```tsx
import { readFileSync } from "node:fs"

it("uses compact conversion-first responsive contracts", () => {
  render(<App />)

  expect(screen.getByRole("region", { name: /segarnya bikin senyum/i })).toHaveAttribute("data-mobile-layout", "compact")
  expect(screen.getByRole("link", { name: /pilih kesegaranmu/i })).toHaveClass("w-full", "sm:w-auto")

  const cards = screen.getAllByTestId("menu-card")
  expect(cards).toHaveLength(3)
  for (const card of cards) {
    expect(card).toHaveClass("grid", "grid-cols-[8.5rem_1fr]", "md:block")
  }

  const floatingWhatsapp = screen.getByRole("link", { name: /hubungi affan coconut melalui whatsapp/i })
  expect(floatingWhatsapp).toHaveClass("size-14", "md:w-auto")
  expect(screen.getByTestId("floating-whatsapp-label")).toHaveClass("hidden", "md:inline")
})

it("enables safe-area viewport coverage", () => {
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8")
  expect(html).toContain('width=device-width, initial-scale=1.0, viewport-fit=cover')
})
```

- [x] **Step 2: Run the tests and verify they fail for the missing mobile contracts**

Run: `npm test -- --run src/App.test.tsx`  
Expected: FAIL because the new region/data attributes, responsive card classes, compact WhatsApp treatment, and viewport-fit setting do not exist yet.

### Task 2: Implement compact header and hero composition

**Files:**
- Modify: `src/components/header.tsx`
- Modify: `src/components/hero.tsx`
- Modify: `src/components/ui/button.tsx`

- [x] **Step 1: Increase small button targets and compact the header**

Set the small button variant to `h-11`, reduce phone header height to `h-[4.5rem]`, use smaller phone-side spacing, and retain desktop spacing from `sm` upward.

- [x] **Step 2: Recompose the hero for phone screens**

Add `role="region"`, `aria-label="Segarnya Bikin Senyum!"`, and `data-mobile-layout="compact"`. Use phone padding near `py-10`, a roughly `min-h-[350px]` artwork stage, `h-[390px]` hero art, compact gaps, a `text-[3.45rem]` heading, and a full-width primary CTA with `sm:w-auto`. Restore the existing generous sizing at `md` and `lg` breakpoints.

- [x] **Step 3: Keep decorative elements proportional**

Use smaller phone sun and badge sizes, keep them behind or beside the product, and prevent them from colliding with the heading or CTA.

### Task 3: Convert menu cards into compact mobile rows

**Files:**
- Modify: `src/components/menu-section.tsx`

- [x] **Step 1: Reduce phone section spacing and title scale**

Use `py-14`, a tighter heading block, and a `text-5xl` phone title while retaining the current `md` sizes.

- [x] **Step 2: Make each phone card a compact image-and-copy row**

Add `data-testid="menu-card"` and use `grid grid-cols-[8.5rem_1fr] md:block`. Make the image header span both content rows on phones, set a phone card minimum height around 220 px, and reduce title, description, and footer spacing. Re-enable the original tall poster format on `md` screens.

- [x] **Step 3: Avoid hover-only movement on touch layouts**

Move translation and image zoom hover utilities behind the `md:` breakpoint.

### Task 4: Adapt WhatsApp, location, map, and footer controls

**Files:**
- Modify: `src/components/whatsapp-button.tsx`
- Modify: `src/components/location-section.tsx`
- Modify: `src/App.tsx`
- Modify: `src/index.css`
- Modify: `index.html`

- [x] **Step 1: Make the floating WhatsApp action compact and safe-area aware**

Use a phone `size-14` circular button with an icon and a `hidden md:inline` text label marked `data-testid="floating-whatsapp-label"`. Restore the desktop pill from `md`, and position it with CSS safe-area calculations.

- [x] **Step 2: Tighten the location section and map**

Reduce phone section padding and title scale, stack both action buttons full-width below 400 px, use a 310 px phone map, and apply smaller phone border/shadow offsets.

- [x] **Step 3: Make footer and global styles safe on phones**

Remove the unconditional `pr-44` phone footer reservation, add safe-area-aware bottom padding, and keep desktop reservation only from `md`. Add a reusable `.safe-floating-bottom` utility and ensure text wrapping does not create overflow.

- [x] **Step 4: Enable edge-to-edge safe viewport handling**

Change the viewport meta content to `width=device-width, initial-scale=1.0, viewport-fit=cover`.

- [x] **Step 5: Run the focused tests and verify they pass**

Run: `npm test -- --run src/App.test.tsx`  
Expected: 4 tests pass.

### Task 5: Verify behavior, build, and rendered mobile layout

**Files:**
- Verify: `src/App.test.tsx`
- Verify: production bundle
- Inspect: rendered page at phone and desktop widths

- [x] **Step 1: Run the full automated test suite**

Run: `npm test -- --run`  
Expected: all tests pass with zero failures.

- [x] **Step 2: Run the production build**

Run: `npm run build`  
Expected: TypeScript and Vite finish successfully with exit code 0.

- [x] **Step 3: Capture and inspect responsive screenshots**

Run the local Vite server, then capture the smallest practical phone viewport and a 1440×900 desktop viewport. Confirm the phone hero is substantially shorter, all three products scan quickly, the floating WhatsApp button does not cover text/actions, the map does not overflow, and the desktop layout remains intact.

- [x] **Step 4: Measure horizontal overflow**

In the browser, verify `document.documentElement.scrollWidth === document.documentElement.clientWidth` at the phone viewport.
