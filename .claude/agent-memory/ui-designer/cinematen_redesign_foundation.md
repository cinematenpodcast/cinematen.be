---
name: cinematen-redesign-foundation
description: Location and prop contracts of the cinematen.be redesign design-system foundation (tokens, fonts, 6 shared components) built for the visual-layer-only redesign
metadata:
  type: project
---

Redesign is presentation-layer only, on git branch `cinematen-redesign`, driven
by a Claude Design export at
`/Users/yorrickschoonheydt/Documents/_Cinematen/WEBSITE/Cinematen webpage redesign/_ds/cinematen-design-system-d9e7a825-2475-4ea9-9e06-e46bef94c7b9/`
(tokens/colors.css, typography.css, spacing.css + `_ds_bundle.js` compiled
reference markup for Header/Footer/ArticleCard/HeroCarousel/Chip/Pagination).

Foundation phase (tokens + fonts + 6 shared components) is done, in
`cinematen.be`:
- `src/styles/design-system/` — `index.css` (@imports fonts.css +
  tokens/{colors,typography,spacing}.css, values ported verbatim from `_ds`).
  Imported once in `src/components/BaseHead.astro`.
- `public/fonts/` — self-hosted Rubik variable + Rubik Mono One.
- `src/components/design-system/` — `Header.astro`, `Footer.astro`,
  `ArticleCard.astro`, `Chip.astro`, `Pagination.astro` (all pure Astro,
  no client JS except Header's vanilla drawer-toggle script), and
  `HeroCarousel.tsx` (the one React island — needs `client:load`).
- Full prop shapes + which legacy component each one replaces:
  `src/styles/design-system/USAGE.md`.

**Why:** two frontend-developer agents build the site's 9 pages on top of
this foundation next — they should consume these components/tokens rather
than re-deriving styles from `_ds` or touching `public/style.css` (the old
87KB monolith, left in place deliberately so the site keeps working during
incremental page-by-page migration).

**How to apply:** when asked to build/redesign a cinematen.be page, check
`src/components/design-system/` and `USAGE.md` first before writing new
markup/CSS — reuse `Header`/`Footer`/`ArticleCard`/`Chip`/`Pagination`/
`HeroCarousel` and their exact token names (`var(--primary)`,
`var(--surface-container-low)`, etc.) rather than inventing new ones.
`src/content/**`, `src/content/config.ts`, and
`src/components/BaseAdBanner.astro` are hard off-limits (excluded scope /
read-only per project convention) — do not touch them without the user
explicitly widening scope. See also [[cinematen-vercel-csp]].
