---
name: project-cinematen-redesign
description: Cinematen.be visual redesign (Home/Nieuws/Reviews/Search) onto shared design-system components — architecture decisions and data-mapping calls
metadata:
  type: project
---

Redesigned Home, Nieuws family, Reviews & Blogs family, and Search onto the
`src/components/design-system/` foundation (Header/Footer/ArticleCard/Chip/
Pagination/HeroCarousel), branch `cinematen-redesign`. A second agent did
Contact/OverOns/legal in parallel on the same branch.

**Why:** visual-layer-only redesign per Claude Design export (`Cinematen
webpage redesign/*.dc.html`) — content/routes/data architecture (Astro content
collections `nieuws`/`reviews`) stayed untouched.

**How to apply / reuse next time:**
- New shared helpers added (reuse instead of re-deriving): `src/lib/format.ts`
  (`formatCardDate`, `formatHeroDate`, `ratingOutOfFive`), `src/lib/siteNav.ts`
  (`getNavLinks`, `FOOTER_COLUMNS`, etc.), `src/layouts/ListingShell.astro`
  (shared Header+Footer chrome for the 7 listing route files), two new small
  design-system-adjacent primitives: `CategoryBadge.astro` and
  `SocialIcons.astro` in `src/components/design-system/`.
- `BaseHeadExclude.astro` and `BaseHeadNieuws.astro` were missing the
  `styles/design-system/index.css` import that `BaseHead.astro` already had —
  fixed; check for this again if a new head partial ever gets added.
- Data-mapping decisions made (flag if requirements change):
  - `reviews.rating` is 0–5 scale (not 0–10 like the static mock's fake "8/10"
    badge) — shown honestly as "x/5" via `ratingOutOfFive()`.
  - Reviews & Blogs chip row uses the real existing tag taxonomy
    (Film/TV/Blog/Vlaams/Reality/Actie/Horror/Comedy via `/reviews&blogs/tags/:tag`)
    instead of the mock's fabricated "Alles/Reviews/Blogs" 3-way split, which
    has no matching schema field.
  - Nieuws chip row (Alles/Film nieuws/TV nieuws) maps cleanly to real
    soort-based routes `/nieuws`, `/nieuws/film`, `/nieuws/serie`.
  - Removed `BaseAbout`/`BaseContact` from the homepage (moved to
    `/over-ons`/`/contact`, owned by the other agent) — Home.dc.html has
    neither section.
- `RelatedNieuws.astro` and `RandomReviews.astro` were rewritten to render
  `ArticleCard` (dark theme) instead of their old light-theme bespoke markup,
  since they're embedded directly in the redesigned article/review pages.
- Kept `BaseAdBanner.astro`, `BasePodcastBanner.astro`, `BasePodcastBlock.astro`
  as-is (untouched files) — only their wrapping containers changed.
- `astro build` passed clean; `git diff --stat -- src/content/ src/components/BaseAdBanner.astro`
  was empty at handoff.

**Follow-up QA-bug-fix pass (2026-07-18):** a prior QA pass had wrongly signed
off as "pixel-perfect" based only on `npm run build` succeeding — it never
actually rendered the built site. Actually screenshotting localhost:4321 vs
the real rendered `_ds` bundle (via `python3 -m http.server 8899` in the
`Cinematen webpage redesign/` folder — opening `.dc.html` directly does NOT
render `<x-import>` components, you need the local server) turned up 6 real
fidelity bugs, all now fixed:
- Ground truth for nav/footer/logo data lives in `Cinematen webpage
  redesign/cinematen-data.js` (NAV_LINKS/NAV_HREFS/FOOTER_COLS/logoEl/
  footerLogoEl) — read that file directly instead of guessing from the mock
  screenshots; it's the actual source of truth the `.dc.html` pages render
  from.
- **Chromium gotcha, worth remembering:** `-webkit-line-clamp` silently stops
  clamping to N lines when the clamped element is ALSO a flex item with
  `flex-grow` inside a taller fixed-height flex ancestor — the flex algorithm
  stretches it past N lines' worth of height and the clamp only limits lines
  *within whatever height it's given*, not a hard N-line cap. Symptom: text
  overflows/gets hard-clipped mid-word instead of showing "…". Fix: remove
  `flex-grow` (or cap with explicit max-height) on any element that also has
  `-webkit-line-clamp`. Bit ArticleCard's overlay-variant excerpt this way;
  check for the same pattern if any other clamped-text-in-a-fixed-height-flex-
  card shows up again.
- HeroCarousel title/desc had no line-clamp at all — a long real article
  title (not the mock's short demo copy) overflowed the fixed 600px hero box
  and visually collided with the section below (the `-80px` overlap margin
  that's *supposed* to only touch the hero's empty bottom margin). Added
  3-line/2-line clamp to title/desc.
- Podcast section: reference renders the Spotify iframe (152px, not 352px)
  in the *main* text column, and the 3 channel buttons as a plain vertical
  pill stack + "Mogelijk gemaakt door" + Kinepolis logo in the *side* column
  — inverted from what was there before. Stopped using the legacy
  `BasePodcastBanner`/`BasePodcastBlock` components for the homepage section
  (left both files themselves untouched — `search.astro` still uses
  `BasePodcastBanner` as-is) and inlined the correct markup directly in
  `BaseLayout.astro`.
- Homepage news grid cards must NOT show a CategoryBadge — confirmed via
  `cinematen-data.js`: `homeNews: NEWS.map(n => ({ ...newsCard(n, 'overlay'),
  badge: null }))` explicitly nulls it for this section only. Nieuws listing
  pages keep their badge (different code path, untouched).
- Real logo asset is `cinematen-white-horizontal.png` for BOTH header (28px)
  and footer (26px) — confirmed via `logoEl`/`footerLogoEl` in
  cinematen-data.js. The stacked `cinematen-white.png` variant exists in
  `public/images/` too (copied for completeness) but isn't actually used
  anywhere per the real data.
- Footer "Blogs" link maps to `/reviews&blogs/tags/blog` (a real tag that
  exists in `src/content/reviews/*.mdx` frontmatter) rather than repeating
  the plain `/reviews&blogs` link used for "Reviews" — a deliberate choice
  since the source only had label strings, no hrefs, to map onto real routes.
- Header search input has no dedicated component — it's plain Astro markup
  in `Header.astro` between `<nav>` and the partner slot, GET-submitting to
  `/search?q=...`. This works with zero extra wiring because
  `SearchField.astro`'s pagefind bootstrap already reads `?q=` from the URL
  and prefills/triggers the search — confirmed by reading that file before
  assuming I'd need to add param-handling myself.

**Round-2 QA-bug-fix pass (2026-07-18):** coordinator's guessed root causes
were close but not exact in two of three cases — verified each against actual
computed styles/DOM via Playwright before trusting the guess:
- **Listing excerpt overflow, 2nd cause:** `extractPreview()`/`lib/textPreview.ts`
  already existed and was already wired into every listing route (round 1) —
  the *data* side of Bug 1 was already fixed. The CSS side wasn't: default-variant
  `.cn-article__excerpt` still had `flex-grow: 1`, same class of bug as the
  overlay variant's flex-grow/line-clamp interaction fixed last round (grid
  rows use default `align-items: stretch`, so `.cn-article` stretches to the
  tallest card in its row, and flex-grow lets the excerpt box stretch past its
  3-line clamp). Fix: drop `flex-grow` from the default variant too, exactly
  like overlay — `.cn-article__meta`'s `margin-top: auto` still pins it to
  bottom without it. **Check both variants any time this pattern reappears.**
  Also: nieuws listing routes were computing `extractPreview(post.body)`
  unconditionally, never checking `frontmatter.summary` first even though the
  schema has it — added `post.data.summary || extractPreview(...)` fallback
  ordering everywhere (nieuws + reviews listing routes).
- **Article prose color, real root cause:** NOT a specificity fight between
  two color rules — `public/style.css` has a bare `p { color: var(--grey); ... }`
  (line ~2296, tag-only selector, correctly low specificity). The layout's
  `.cn-article-prose { color: var(--on-surface) }` never actually competes
  with it because that rule sets color on the *ancestor div*, which is pure
  inheritance — and a directly-matching rule on the element itself (any
  specificity) always beats an inherited value, full stop, regardless of the
  ancestor rule's specificity. Only `:first-of-type` looked right because that
  override *does* target `p` directly. Fix: add `.cn-article-prose :global(p)
  { color: var(--on-surface) }` in both NieuwsLayout.astro and
  ReviewLayout.astro — a direct rule, not reliance on inheritance. **General
  lesson: "my ancestor sets a color, why isn't it applying to only some
  children" always means something is directly targeting the element,
  inheritance lost automatically** — check for a bare-tag rule in the legacy
  monolith before assuming it's a specificity/cascade-order problem.
- **Contact white card, real root cause:** coordinator suspected
  `.section-contact-form`/`.background-color-gradient-blue1` (both only ever
  set `background-image`/`text-align`, never a `background-color` in
  `public/style.css`) — the actual culprit one level deeper: `.form-wrapper-2`
  (`background-color: #fff; border-top-left/bottom-right-radius: 3rem;
  box-shadow: ...; padding: 3rem`). Fixed by overriding `.form-wrapper-2`
  itself in contact.astro's existing scoped `<style is:global>` block, not the
  originally-suspected classes. **Lesson: when a scoped override "doesn't
  work," re-derive which exact class carries the visual property from the
  monolith rather than re-trying `!important` on the class you assumed was
  responsible.**
- Medium polish confirmed against the real reference (`cinematen-data.js`):
  hero CTA is literal `#fff`/`#0a1128`, not `--primary`/`--on-primary` tokens
  (`#adc6ff`/`#002e6a` reads as pale-blue-on-navy, not white-on-navy). Footer
  social icons in the reference are plain glyphs with `color:
  var(--on-surface-variant)` and no background pill — X icon (not Facebook)
  + Instagram, both viewBox `0 0 24 24`. Reference's X icon literally links to
  `href="#"` (no real handle in the mock) and no Twitter/X account exists
  anywhere else in this codebase (legacy `BaseFooter.astro` only ever had
  Facebook+Instagram) — kept `href="#"` rather than inventing an account URL;
  flag to the user if a real X handle exists to wire in.
- Search placeholder ("Zoeken…") and nav label were already correct in the
  working tree at the start of this round — the QA screenshot that flagged
  them predates some earlier uncommitted fix. Always re-check current source
  before touching something a bug report describes, in case it's stale.
