# SEO Action Plan — cinematen.be

**Source:** Full 11-stream SEO audit, 2026-07-20. Health score at audit time: 55/100.
**Note:** Most items here are data/schema/backend concerns (content collections, layouts, image pipeline) and apply independently of the visual redesign in progress on `cinematen-redesign` (see `PRD.md`). A few (tap targets, H1 structure) should be double-checked against the new design system once it lands.

Each task lists: effort, impact, files touched, steps, and how to verify it's actually fixed.

---

## Phase 1 — This week (no dependencies, highest impact) — ✅ DONE (2026-07-20)

### 1.1 Fix the image pipeline (Critical — LCP) — ✅ Done (partial — see note)
**Effort:** Medium · **Impact:** Very high (mobile LCP is 33s homepage / 19.7s articles)

- [x] ~~Move article/review thumbnail and body images from raw `public/images/` string paths into Astro's processed image pipeline — use `astro:assets` (`<Image>` / `getImage()`) instead of plain `<img src="/images/...">`.~~ **Not done — blocked by Astro version.** The content-collection `image()` schema helper (needed to run dynamic frontmatter-referenced images through `astro:assets`/sharp) landed in Astro 4.14/5.0's Content Layer API; this project is pinned to 4.13.4 (see the comment block at the top of `src/content/config.ts`). Doing this properly requires an Astro upgrade first — flagged as a new backlog item, not silently done mid-fix.
- [x] Batch-compressed the existing `public/images/article-images/` (937 files) and `public/images/blog-images/` (30 files) libraries in place via a new re-runnable script, `scripts/optimize-images.mjs` (downscale to max 1920px width, mozjpeg q80 / max-effort PNG, same filename/path so zero frontmatter changes needed). Result: **242.9MB → 103.0MB** (-58%); worst offenders individually: `Obsession_thumbnail.jpg` 4567KB→126KB (-97%), `how-to-train-your-dragon_thumbnail.jpg` 3711KB→121KB (-97%), the Avengers: Doomsday hero screenshot 3612KB→417KB (-88%).
- [x] Added `fetchpriority="high"` + `decoding="sync"` to the homepage hero's active slide `<img>` in `src/components/design-system/HeroCarousel.tsx` (article pages already had this).
- [x] **Verified:** local Lighthouse mobile run (simulated throttling, static build output) on the Avengers article: LCP **19.7s → 7.3s** (-63%) even without production compression/CDN/HTTP2, which the original 19.7s measurement did have — so the real production improvement should be larger than this local test shows. Re-run a full PSI/CrUX check once deployed to confirm it's under the 2.5s "good" threshold.

### 1.2 Stop fabricating authorship (Critical — E-E-A-T + schema correctness) — ✅ Done (with a caveat)
**Effort:** Medium · **Impact:** High

- [x] Added `schrijver: z.string().optional()` to the `nieuws` collection schema in `src/content/config.ts` (mirrors `reviews`).
- [x] Removed the hardcoded `author="Yorrick"` in `src/layouts/NieuwsLayout.astro:76`; now passes `frontmatter.schrijver` (undefined when not set).
- [x] Threaded the real author through `src/components/BaseHeadNieuws.astro` — `NewsArticle.author` in JSON-LD now reflects the real per-article `schrijver` as `Person` when present, or falls back to `{"@type": "Organization", "name": "Cinematen"}` when absent (not a fake person).
- [x] Added a visible byline to the article hero ("Door {schrijver}", or "Door de redactie van Cinematen" as fallback) — same visual pattern as the existing review byline.
- [ ] **Not done — backfilling real authors on the ~790 existing nieuws articles.** There's no existing record of who actually wrote each historical article, so I did not invent names (that would repeat the exact problem being fixed). All existing articles now correctly attribute to the Organization until real authorship is known. **Action needed from you:** if you know who wrote specific articles, add `schrijver: "Name"` to that file's frontmatter — new articles going forward should set this field.
- [x] **Verified in build output:** the Avengers: Doomsday article's JSON-LD now shows `"author":{"@type":"Organization","name":"Cinematen","url":"https://www.cinematen.be/"}` instead of a fabricated `Person` named Yorrick.
- Note: found and left untouched one unrelated hardcoded `author="Yorrick"` in `src/layouts/WatermarkLayout.astro:46` — used by a single one-off tutorial page (`watermark_remover.md`) outside the nieuws content collection, not part of the systemic issue the audit flagged. Flag if you'd like that changed too.

### 1.3 Fix broken image URLs in schema/OG tags (Quick win) — ✅ Done
**Effort:** Low · **Impact:** Medium — independently flagged by 3 audit streams

- [x] Wrapped `finalThumbnail` with `encodeURI()` in `src/components/BaseHeadNieuws.astro` (copied the existing pattern from `BaseHead.astro:140`).
- [x] Renamed all 13 space-containing image files on disk (via `git mv`, so history is preserved) and updated the corresponding frontmatter in all 7 affected content files: the Avengers: Doomsday nieuws article, and reviews for Jurassic World Rebirth, Fantastic Four: First Steps, Until Dawn, 28 Years Later, How to Train Your Dragon, and Evil Dead Burn.
- [x] **Verified:** grepped the full `src/`/`public/` tree for the old filenames — zero remaining references. Build output confirms clean, space-free `image` URLs in JSON-LD.

### 1.4 Remove test data from production content — ✅ Done
**Effort:** Trivial · **Impact:** Low but embarrassing if seen

- [x] `src/content/reviews/2024/04/godzilla-x-kong-the-new-empire.mdx` — changed `schrijver: 'Yorrick QA2'` to `schrijver: Yorrick`.

---

**Verification run:** `npx astro check` (60 pre-existing errors, unchanged — confirmed via git stash comparison, none introduced by these changes) and `npm run build` both pass cleanly. Nothing has been deployed — all changes are local/uncommitted, ready for your review before pushing.

**New backlog item from this pass:** Upgrading Astro past 4.13.4 (to unlock the content-collection `image()` helper) is a prerequisite for a *full* astro:assets pipeline migration — that's a real dependency-upgrade decision with its own testing surface, not something to bundle into an SEO fix silently. Worth scoping separately if you want the durable long-term version of the image fix (not just the in-place compression done here).

---

## Phase 2 — Next 2 weeks (builds on Phase 1)

### 2.1 Fix Person schema per author (depends on 1.2)
**Effort:** Low · **Impact:** Medium

- [ ] In `BaseHead.astro:139`, `BaseHeadNieuws.astro:82`, and `ReviewLayout.astro:61-65`, stop hardcoding the same `Person.url`/`sameAs` for every author. Point `Person.url` to that author's real page: `https://www.cinematen.be/auteur/${slug}/`.
- [ ] Add `Person`/`ProfilePage` schema to `src/pages/auteur/[slug].astro` (currently emits zero author-specific schema — only the generic sitewide `WebSite` fallback).
- [ ] Change the "de Cinematen" collective byline's schema `@type` from `Person` to `Organization` (a brand name isn't a person).

**Verify:** Live-fetch JSON-LD on 3 articles by different authors — `Person.url` should differ per author and resolve to a real page with its own schema.

### 2.2 Make review pages rankable for "recensie" queries (depends on 1.2)
**Effort:** Low · **Impact:** High — reviews currently don't appear in search for their own exact-match queries despite beating ranking competitors on content depth

- [ ] Add "Review"/"Recensie" + rating to review `<title>` tags, e.g. `Supergirl (2026) recensie – 7/10 | Cinematen`.
- [ ] Replace the boilerplate `Review`/`Article` schema `description` ("Lees onze film van Supergirl...") with the real frontmatter summary.
- [ ] Introduce 2-3 named recurring critic bylines instead of the generic org byline "de Cinematen" for actual reviews.

**Verify:** Google "[filmtitel] recensie" for 2-3 recently reviewed titles — track whether cinematen.be starts appearing (this is a leading indicator to watch over 4-8 weeks, not immediate).

### 2.3 Enable Search Console visibility
**Effort:** Trivial (config only) · **Impact:** High (currently zero indexation visibility)

- [ ] Enable the Search Console API on GCP project `616018303481`: https://console.developers.google.com/apis/api/searchconsole.googleapis.com/overview?project=616018303481
- [ ] Confirm service account `claude-cli-user-yorrick@cronos-ai-lab.iam.gserviceaccount.com` is added under GSC → Settings → Users and permissions for the `cinematen.be` property.

**Verify:** Re-run a GSC Search Analytics query — should return data instead of 403.

### 2.4 Clean up URL structure
**Effort:** Low · **Impact:** Medium

- [ ] Add `trailingSlash: "always"` to `astro.config.mjs` (or add a Vercel redirect rule) so non-slash URL variants 301 instead of serving duplicate 200s.
- [ ] Plan migration of `/reviews&blogs/` → `/reviews-en-blogs/` or `/reviews/`, with 301 redirects from the old path. (Larger change — coordinate with the redesign branch since it touches routing.)

**Verify:** `curl -I` a known non-slash URL — should return 301, not 200.

### 2.5 Fix homepage heading structure
**Effort:** Low · **Impact:** Low-medium

- [ ] Homepage hero carousel currently renders 4× `<h1>` (one per slide). Change to a single `<h1>` with the other slide headings demoted to `<h2>` or `<p>` with appropriate ARIA labeling.

### 2.6 Enlarge touch targets
**Effort:** Low · **Impact:** Low-medium (mobile UX)

- [ ] Hero carousel nav dots: 10×10px → at least 44×44px hit area (visual dot can stay small, expand the clickable/tappable area).
- [ ] Mobile prev/next chevrons: 36×36px → 44×44px.
- [ ] Mobile hamburger menu button: 40×40px → 44×44px.
- [ ] *Coordinate with the in-progress redesign (`cinematen-redesign` branch) — check whether the new design system already fixes this before implementing here.*

---

## Phase 3 — This month (structural, compounding value)

### 3.1 Build hub-and-spoke content architecture (highest long-term ROI)
**Effort:** High · **Impact:** Very high — currently zero internal-linking strategy despite major franchise volume (97 Avengers/Marvel articles, 59 Star Wars, 37 Bond, 24 Harry Potter)

Sequence matters — each step depends on the last:
- [ ] **3.1a** Normalize tag data quality first: fix casing, typos ("fimm" → "film", "comcis" → "comics", "castin" → "casting"), dedupe tags that just restate `soort` (Film/TV). Automated clustering can't run on noisy data.
- [ ] **3.1b** Add a structured `franchise`/`entity` taxonomy field to `nieuws`/`reviews` frontmatter schema — free-text tags can't reliably drive hub logic.
- [ ] **3.1c** Add a real related-content module to news article pages (currently has none) — match on `soort` + shared tags/franchise, replacing "nothing."
- [ ] **3.1d** Replace `RandomReviews.astro`'s random shuffle with genre/soort-matched related reviews.
- [ ] **3.1e** Build franchise/title hub pages for top recurring entities (Marvel/Avengers, Star Wars, Bond, Harry Potter, DC) that aggregate news + reviews for that title and become mandatory internal-link targets (spoke→hub and hub→spoke).
- [ ] **3.1f** Once the taxonomy exists, convert `/nieuws/tags/[tag]` and `/reviews&blogs/tags/[tag]` from redirect-to-chronological-list into real curated topic landing pages.

**Verify:** Internal-links-per-article count should go from ~0 to several; track organic sessions to hub pages once live as a leading indicator.

### 3.2 Build off-site entity presence (GEO/AI-citation authority)
**Effort:** High (ongoing) · **Impact:** Medium-high for AI Overviews/ChatGPT/Perplexity citation — currently the weakest GEO dimension

- [ ] Expand `sameAs` in Person/Organization schema with every real existing profile (not just Instagram) — check for YouTube, podcast platforms, LinkedIn.
- [ ] Grow an active YouTube presence (not just embedding trailers) — YouTube has the strongest brand-mention correlation per current data.
- [ ] Establish presence in relevant Reddit communities (r/belgium, r/film) — Reddit is a dominant citation source for both ChatGPT and Perplexity.
- [ ] Evaluate Wikipedia notability for Cinematen/founders — long-term, not urgent.

### 3.3 Smaller technical/hygiene items
- [ ] Implement IndexNow protocol for faster Bing/Yandex indexing of new articles (cheap given publishing frequency).
- [ ] Add `includeSubDomains; preload` to the HSTS header in `vercel.json`.
- [ ] Fix sitemap filter inconsistency: exclude `/nieuws/film` and `/nieuws/serie` in `astro.config.mjs` sitemap filter, same as tag pages — or confirm they have unique enough content to justify keeping them indexed.
- [ ] Collapse the redundant `Article` + `Review` sibling JSON-LD nodes in `ReviewLayout.astro` into one primary `Review` type (Google's supported type for review pages).

---

## Backlog (lower priority / needs external setup)

- [ ] Evaluate upgrading Astro past 4.13.4 to unlock the content-collection `image()` helper — prerequisite for a full `astro:assets` pipeline migration (see Phase 1.1 note). Separate scoping needed; has its own testing surface.
- [ ] Sign up for a free Moz API key (moz.com/products/api) or Bing Webmaster Tools key to unlock real backlink data — currently 0 of 7 backlink scoring factors have real data (Common Crawl only).
- [ ] Consider RSL 1.0 licensing (`/rsl.xml`) — standard is nascent, optional.
- [ ] Migrate the 4 legacy static `.md` pages under `src/pages/nieuws/*.md` into the content-collections pipeline for architectural consistency.
- [ ] Confirm whether the missing cookie-consent banner (despite a `/cookiebeleid` policy page existing) is intentional or an oversight.

---

## Baseline for future comparison

No SEO drift baseline existed for cinematen.be before this audit. Recommend capturing one now so future audits show what changed rather than starting from zero:

```
/seo drift baseline https://cinematen.be
```

## After Phase 1-2 ship

Re-run `/seo audit https://cinematen.be` to get an updated health score and confirm the fixes landed as expected.
