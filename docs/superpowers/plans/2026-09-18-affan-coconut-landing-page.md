# Affan Coconut Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive street-food-pop landing page introducing Affan Coconut’s menu, hours, location, and WhatsApp contact.

**Architecture:** One dependency-free HTML entry point owns semantic content and navigation. One stylesheet owns the responsive poster-style layout, decorative graphics, and motion. A shell contract test protects the published business details.

**Tech Stack:** HTML5, CSS3, inline SVG, Chrome headless.

---

## File structure

- `index.html` — semantic single-page content and contact links.
- `styles.css` — visual system and responsive rules.
- `tests/page-contract.sh` — content and link contract checks.

### Task 1: Establish the content contract

**Files:** Create `tests/page-contract.sh`.

- [ ] Create this failing test:

```sh
#!/usr/bin/env sh
set -eu
for text in 'Es Kelapa Biasa' 'Rp5.000' 'Kelapa 1-an' 'Rp12.000' 'Kelapa Muda' 'Rp18.000' '09.00–17.00' 'Kp. Pondok Jengkol'; do grep -Fq "$text" index.html; done
grep -Fq '6283863190378' index.html
grep -Fq 'href="#menu"' index.html
```

- [ ] Run `sh tests/page-contract.sh`; it must fail because `index.html` does not exist.

### Task 2: Add semantic landing-page content

**Files:** Create `index.html`; modify `tests/page-contract.sh`.

- [ ] Add a valid HTML document with header, hero, menu, visit/contact sections, footer, exact business content, navigation to `#menu`, and a WhatsApp link using `https://wa.me/6283863190378`.
- [ ] Run `sh tests/page-contract.sh`; expected result: exit code 0 with no output.

### Task 3: Add responsive poster-style presentation

**Files:** Create `styles.css`; modify `index.html`.

- [ ] Link the stylesheet and implement mobile-first CSS variables, high-contrast tropical colors, a characterful font pairing, decorative coconut/ice SVG, responsive grids, focus/hover states, floating WhatsApp action, and `prefers-reduced-motion` fallback.
- [ ] Run `sh tests/page-contract.sh`; expected result: exit code 0 with no output.
- [ ] Serve with `python3 -m http.server 4173 --directory .` and use headless Chrome at 1440×900 and 390×844. Confirm no clipped content, readable menu cards, working section link, and visible contact action.
