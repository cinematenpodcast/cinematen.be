# Cinematen Design System — foundation usage

Phase 1 output only: tokens, self-hosted fonts, and 6 shared presentation
components. No pages assembled yet — that's the next phase (frontend-developer).

## Tokens

Imported once globally in `src/components/BaseHead.astro`:

```astro
import "../styles/design-system/index.css";
```

`index.css` `@import`s `fonts.css` + `tokens/{colors,typography,spacing}.css`.
All values are ported verbatim from the `_ds` redesign export — do not
re-round or rename any `--custom-property`. Use the tokens directly in new
component CSS, e.g. `background: var(--surface-container-low)`.

`public/style.css` (the current 87KB monolith) is untouched and still
linked — both stylesheets load side by side until pages are migrated one by
one onto the new components.

## Fonts

Self-hosted in `public/fonts/` (Rubik variable + Rubik Mono One), declared
in `tokens/fonts.css`. `BaseHead.astro` still also loads Rubik from Google
Fonts (pre-existing) — once a page is fully migrated and confirmed working
on the self-hosted `@font-face`, remove that Google Fonts `<link>`/preconnect
from `BaseHead.astro` to stop double-loading the same family.

**Rubik Mono One is for the CINEMATEN wordmark/logo only** — never use it
for headlines or body text (`--font-sans` / Rubik at `--font-headline-weight`
(800) is the headline voice, per the `_ds` readme).

## Components

All in `src/components/design-system/`. Astro components unless noted.

| Component | Replaces | Notes |
|---|---|---|
| `Header.astro` | `BaseHeader.astro` + `NewNavmenu.astro` | Sticky bar + mobile drawer in one unit. Drawer toggle is vanilla JS (bundled `<script>`, not `is:inline` — CSP-safe under vercel.json without a hash change). Collapses to burger via a **container query** (720px) on its own inner box, not the viewport. |
| `Footer.astro` | `BaseFooter.astro` | Brand/tagline/social column + N link columns + legal row. Added a mobile stacking breakpoint the source lacked. |
| `ArticleCard.astro` | `BaseNieuwsItem.astro`, `BaseFeaturedItem.astro`, `BaseReviewItem.astro` | `variant`: `default` \| `overlay` \| `row`. Image/badge/meta are slots (pass an Astro `<Image>` or `<img>`); title/excerpt/href are string props. |
| `Chip.astro` | — (new primitive) | Filter pill. Renders `<a>` if `href` given, else `<button>`. Wire selection logic at the page level. |
| `Pagination.astro` | `BasePagination.astro` | Real first/last/current±1 windowing (the source bundle's array was a fixed demo, not logic). Pass `hrefBase="/nieuws/page/:page"` for real links, or omit for `data-page` buttons + your own click handler. |
| `HeroCarousel.tsx` | — (new; homepage hero) | **React island** — the only component with real client state (active slide). Use `<HeroCarousel client:load slides={...} />`. `client:load` chosen over `client:visible`/`client:idle` because the hero is always above the fold. |

### Prop shapes (quick reference)

```ts
// ArticleCard
{ title: string; href: string; excerpt?: string; variant?: "default" | "overlay" | "row" }
// slots: image (required), badge (optional), meta (optional)

// Header
{ links: { label: string; href: string; active?: boolean; icon?: string }[];
  partnerLabel?: string; mobileCopyright?: string }
// slots: logo (required), partner-logo (optional)

// Footer
{ columns: { heading: string; links: { label: string; href: string }[] }[];
  bottomLeft?: string; bottomRight?: string }
// slots: logo (required), tagline (optional), social-icons (optional)

// Chip
{ active?: boolean; href?: string; as?: "button" | "a" }
// slot: default (label text)

// Pagination
{ page: number; totalPages: number; hrefBase?: string }

// HeroCarousel (React)
{ slides: { image: { src: string; alt: string }; eyebrow?: string;
  eyebrowColor?: string; title: string; description?: string;
  ctaLabel?: string; ctaHref?: string }[]; autoplayMs?: number }
```

## Deviations from the `_ds` bundle (flagged, not silent)

1. **Footer fixed pixel widths dropped.** Source hardcoded a 629px brand
   column and a 599×149px tagline box — reads as a design-tool canvas
   artifact (no matching spacing token, breaks under ~950px). Replaced with
   the existing 1.6fr/1fr grid split + `max-width: 60ch` on the tagline.
2. **Pagination page-list generalized.** Source's `[1,2,3,'…',totalPages]`
   was a fixed demo array; replaced with real first/last/current±1 windowing
   that produces the same visual pattern from any `page`/`totalPages`.
3. **`onClick` prop dropped from ArticleCard.** Astro renders at build/request
   time; there's no client JS to attach a handler to by default. If a page
   needs a click side-effect (analytics, etc.), wrap the rendered card or add
   a scoped `<script>` at the page level.
4. Added, on top of the ported visuals (no visual/token changes): `:focus-visible`
   rings, `aria-current`/`aria-expanded`/`aria-live` attributes, and a
   `prefers-reduced-motion` override on the hero crossfade — required for
   WCAG 2.1 AA and not present in the source bundle.
