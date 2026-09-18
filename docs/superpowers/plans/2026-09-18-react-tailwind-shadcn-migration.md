# React, Tailwind, and shadcn Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the static Affan Coconut site with a tested Vite React application using Tailwind CSS v4 and local shadcn/ui primitives while preserving the approved design.

**Architecture:** React feature components compose a client-only landing page from static menu data. Tailwind v4 owns the theme and responsive styling, while local shadcn `Button` and `Card` primitives provide reusable UI foundations.

**Tech Stack:** Vite, React 19, TypeScript, Tailwind CSS v4, shadcn/ui conventions, Radix Slot, class-variance-authority, Vitest, Testing Library.

---

## File structure

- `package.json`, `vite.config.ts`, `tsconfig*.json`, `components.json` — tooling and shadcn configuration.
- `index.html`, `src/main.tsx`, `src/index.css` — application entry point and Tailwind theme.
- `src/App.tsx` — page composition and static menu data.
- `src/components/{header,hero,menu-section,visit-section,whatsapp-button}.tsx` — focused page sections.
- `src/components/ui/{button,card}.tsx`, `src/lib/utils.ts` — local shadcn primitives.
- `src/test/setup.ts`, `src/App.test.tsx` — browser-like test setup and content/link tests.

### Task 1: Scaffold and prove the missing React app

**Files:** Create `package.json`, Vite/TypeScript configuration, and `src/App.test.tsx`.

- [ ] Create package scripts for `dev`, `build`, and `test`; configure Vite with React and Tailwind plugins and the `@` alias.
- [ ] Add a Testing Library test that renders `App` and expects the three menu names, three prices, hours, location, menu anchor, and WhatsApp href.
- [ ] Run `npm test -- --run`; expected result: failure because `src/App.tsx` is missing.

### Task 2: Add shadcn primitives and page components

**Files:** Create `src/lib/utils.ts`, `src/components/ui/button.tsx`, `src/components/ui/card.tsx`, all feature components, `src/App.tsx`, and `src/main.tsx`.

- [ ] Implement shadcn-style `Button` and `Card` source components with `cn`, `cva`, and Radix Slot.
- [ ] Implement semantic feature components and render the exact approved business content from a typed menu array.
- [ ] Run `npm test -- --run`; expected result: all application tests pass.

### Task 3: Recreate the visual system with Tailwind v4

**Files:** Create `src/index.css`; modify component class names as needed.

- [ ] Add `@import "tailwindcss"`, theme variables, Google font import, halftone treatment, marquee animation, coconut illustration styles, focus states, and reduced-motion handling.
- [ ] Use Tailwind utilities throughout feature components for the responsive one-column/three-column layouts, poster borders, offset shadows, and floating WhatsApp action.
- [ ] Run `npm test -- --run`; expected result: all tests pass.
- [ ] Run `npm run build`; expected result: Vite emits a production bundle to `dist` without errors.

### Task 4: Browser verification and cleanup

**Files:** Delete obsolete `styles.css` and `tests/page-contract.sh` after React tests replace them.

- [ ] Run the Vite preview server and capture screenshots at 390×844 and 1440×900.
- [ ] Verify the hero, menu cards, contact section, and floating WhatsApp action at both sizes.
- [ ] Re-run `npm test -- --run && npm run build`; expected result: tests and build both pass.
