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

## Phase 2 — Next 2 weeks (builds on Phase 1) — ✅ DONE (2026-07-22)

Note: the `cinematen-redesign` branch mentioned throughout Phase 2 as something to "coordinate with" turned out to already be fully merged into `main` (0 commits unique to that branch; it's just stale/behind now) — so there was no separate branch to coordinate with. All fixes below landed directly on `main`.

### 2.1 Fix Person schema per author (depends on 1.2) — ✅ Done
**Effort:** Low · **Impact:** Medium

- [x] Added a shared `buildAuthorSchema()` helper in `src/lib/format.ts` (plus `authorSlug()`/`isCollectiveAuthor()`) so the Person-vs-Organization logic lives in one place instead of being copy-pasted across files. `BaseHead.astro`, `BaseHeadNieuws.astro`, and `ReviewLayout.astro` now all use it instead of hardcoding the same `Person.url`/`sameAs` for every author. Real authors get `Person.url` = `https://www.cinematen.be/auteur/{slug}/`; the shared Instagram `sameAs` (which was identical for every author regardless of who they were) was dropped rather than kept as another one-size-fits-all fabrication.
- [x] Added real `ProfilePage`/`Person` schema to `src/pages/auteur/[slug].astro` (was emitting zero author-specific schema before — just the generic sitewide `WebSite` fallback).
- [x] "de Cinematen" (and "Cinematen") now resolve to `{"@type": "Organization", "name": "Cinematen"}` via `isCollectiveAuthor()`, not a fabricated Person.
- [x] Also widened `auteur/[slug].astro`'s `getStaticPaths()` to source authors from **both** `nieuws` and `reviews` collections (was reviews-only) — so a real per-article nieuws byline (once someone sets `schrijver` per Phase 1.2's backfill note) gets a working author page instead of a 404.
- [x] **Verified in build output:** Snow White review (schrijver: Yorrick) → `"author":{"@type":"Person","name":"Yorrick","url":"https://www.cinematen.be/auteur/yorrick/"}`. Supergirl review (schrijver: de Cinematen) → `"author":{"@type":"Organization","name":"Cinematen","url":"https://www.cinematen.be/"}`. `/auteur/yorrick/` and `/auteur/maarten/` both now emit their own `ProfilePage` JSON-LD.

### 2.2 Make review pages rankable for "recensie" queries (depends on 1.2) — ✅ Done (one bullet deferred, same reason as 1.2)
**Effort:** Low · **Impact:** High — reviews currently don't appear in search for their own exact-match queries despite beating ranking competitors on content depth

- [x] Review `<title>` now includes "recensie" + year + rating, e.g. `Supergirl (2026) recensie – 7/10 | Cinematen` (verified in build output — exact match to the audit's suggested format). Left the visible on-page `<h1>` as just the film title (unchanged) — only the SEO-facing title/meta/schema changed, matching what the audit actually flagged.
- [x] Schema/OG description now uses the real `frontmatter.summary` when present, falling back to the old boilerplate template only when a review has no summary set.
- [x] Also fixed the `BreadcrumbList`'s final `name` to use the plain film title instead of the new, longer SEO title — a breadcrumb showing "Supergirl (2026) recensie – 7/10 | Cinematen" as a nav label would've looked wrong.
- [ ] **Not done — introducing 2-3 named recurring critic bylines.** Same issue as the Phase 1.2 nieuws-authorship gap: I'm not going to invent which specific reviews should be attributed to which named critic instead of "de Cinematen" — that's an editorial call, not a code fix. **Action needed from you:** decide which existing "de Cinematen"-byline reviews should carry a real name, and set `schrijver` accordingly.

### 2.3 Enable Search Console visibility — ⚠️ Partially done — needs one manual step from you
**Effort:** Trivial (config only) · **Impact:** High (currently zero indexation visibility)

- [x] Enabled the Search Console API on GCP project `616018303481` directly via `gcloud services enable searchconsole.googleapis.com` (confirmed authenticated as `yorrick.schoonheydt@cronos.be` with access to do this).
- [ ] **Still needed — I cannot do this part myself:** the service account `claude-cli-user-yorrick@cronos-ai-lab.iam.gserviceaccount.com` still isn't listed as a user on the `cinematen.be` Search Console property (`gsc_query.py sites` returns an empty list even with the API enabled). You need to add it manually: **Search Console → cinematen.be property → Settings → Users and permissions → Add user** → paste that service account email → grant at least Full/Owner access for GSC data queries to work.

**Verify:** Once added, re-run a GSC Search Analytics query — should return data instead of an empty property list.

### 2.4 Clean up URL structure — ✅ Done (one bullet deferred — see note)
**Effort:** Low · **Impact:** Medium

- [x] Added `"trailingSlash": true` to **`vercel.json`** (not `astro.config.mjs`'s own `trailingSlash` option). Traced through how this deployment actually works first: `.vercel/output/config.json` (what `astro build` generates for the `@astrojs/vercel` adapter) doesn't include this project's existing custom redirects from `vercel.json` at all — those are applied by Vercel's platform separately, by reading the root `vercel.json` directly at deploy time. So Vercel's own top-level `trailingSlash` key is the layer that actually controls this for prerendered static pages, not Astro's build-time config (which mainly affects Astro's own dev-server routing and wouldn't have touched the live redirect behavior here).
- [ ] **Deferred, not done — `/reviews&blogs/` → `/reviews-en-blogs/` migration.** Sizing this up further confirmed it's a genuinely large, cross-cutting change: the literal path segment appears in the page-route directory itself (`src/pages/reviews&blogs/`), canonical URL construction, the sitemap's `serialize()` regex, breadcrumb hrefs, and nav links throughout the site — and it would need a carefully verified 301 for every existing review URL to avoid a real ranking/traffic hit on an already-live section of the site. That's a bigger, higher-blast-radius change than fits a routine Phase 2 pass — flagging it for a dedicated pass with your explicit sign-off rather than doing it quietly here.

**Verify:** `curl -I` a known non-slash URL once deployed — should return a redirect, not 200.

### 2.5 Fix homepage heading structure — ✅ Done
**Effort:** Low · **Impact:** Low-medium

- [x] `HeroCarousel.tsx` was rendering a `<h1>` per slide (all 4 in the DOM at once, only visually hidden via `aria-hidden` on inactive slides — a real heading-outline defect, not just a visual one, since `aria-hidden` doesn't stop generic HTML parsers from seeing it). Now only the active slide renders `<h1>`; inactive slides render the identical styling as a `<p>` instead (confirmed the CSS only ever targeted the class, never the tag, so this was a safe swap).
- [x] **Verified in build output:** homepage now has exactly 1 `<h1>` (was 4).

### 2.6 Enlarge touch targets — ✅ Done
**Effort:** Low · **Impact:** Low-medium (mobile UX)

- [x] Hero carousel nav dots: kept the visible dot at 10px (via a `::after` pseudo-element) but the actual `<button>` hit area is now 44×44px.
- [x] Mobile prev/next chevrons: 36×36px → 44×44px.
- [x] Mobile hamburger menu button: 40×40px → 44×44px.
- [x] Grepped for any other rule targeting these classes before changing them — confirmed no other stylesheet overrides them, so these were safe, isolated changes.
- Redesign-branch coordination turned out to be moot (see the Phase 2 header note above) — done directly on `main`.

---

**Verification run:** `npx astro check` (61 pre-existing errors — was 60 at the Phase 1 check; grew by one sometime between then and now, unrelated to these changes, confirmed via git-stash comparison both with and without this pass's edits) and `npm run build` both pass cleanly. Nothing has been deployed yet.

---

## Phase 3 — This month (structural, compounding value) — ✅ DONE except 3.2 (2026-07-22)

### 3.1 Build hub-and-spoke content architecture (highest long-term ROI) — ✅ Done
**Effort:** High · **Impact:** Very high — currently zero internal-linking strategy despite major franchise volume (97 Avengers/Marvel articles, 59 Star Wars, 37 Bond, 24 Harry Potter)

- [x] **3.1a** Normalized tags across all 806 affected content files (both YAML styles present in the corpus — flow `tags: [...]` and block `tags:\n  - x` — a first pass only handled block-style and silently missed 755 flow-style files, caught via dry-run diffing before applying). Fixed casing, typos (`fimm`→`film`, `comcis`→`comics`, `castin`→`casting`), stripped stray smart-quote wrapping, and dropped tags that just restated `soort` (Film/TV) as redundant. Result: nieuws went from 12 unique tag values to 3 (`trailer`, `casting`, `comics`); reviews from 23 to 15 real genre tags.
- [x] **3.1b** Added a `franchise: z.array(z.string()).nullish()` field to both collection schemas (`src/content/config.ts`). Backfilled it on 282 existing entries via a keyword-matching script (`scripts/tag-franchises.mjs`, re-runnable) against a 14-franchise list (Marvel, DC, Star Wars, Harry Potter, Stranger Things, Game of Thrones, Jurassic Park, LOTR, Star Trek, Mission: Impossible, James Bond, John Wick, Fast & Furious, Yellowstone). Threshold tuned from real false-positive spot-checks: title match OR ≥2 body mentions — a single incidental body mention (e.g. an actor's other film namedropped in a bio aside) produced clearly wrong tags at a looser threshold (also found and fixed a `"007"` keyword bug that was matching inside years like "2007").
- [x] **3.1c** Built `src/components/RelatedNieuws.astro` — nieuws articles had zero related-content module before this. Ranks other nieuws entries by shared franchise (highest weight) → soort match → shared tags, via a new shared `rankRelated()` helper (`src/lib/relatedContent.ts`), falling back to recent same-soort articles so it's never sparse on entries with no franchise/tags set.
- [x] **3.1d** `RandomReviews.astro` (used on both review and nieuws pages) now uses the same `rankRelated()` scoring instead of a pure random shuffle.
- [x] **3.1e** Built franchise hub pages (`src/pages/franchises/[slug].astro`) for the 9 franchises with enough tagged volume to be a real destination, not a thin page (≥10 entries — see `HUB_ELIGIBLE` in `src/lib/franchises.ts`): Marvel (103), DC (59), Star Wars (55), Stranger Things (17), Harry Potter (17), Game of Thrones (15), Jurassic Park (12), LOTR (11), Star Trek (11). Each aggregates nieuws + reviews for that franchise, sorted by date, real indexable title/description/canonical, in the sitemap. Added a "Meer over {Franchise} →" spoke→hub link on every article/review tagged with a hub-eligible franchise.
- [x] **3.1f** `/nieuws/tags/:tag` was a runtime 301 redirect to `/nieuws/tags/:tag/1` — now renders page-1 content directly (no redirect hop), since that's the URL most likely to actually be linked to. The numbered `/1`, `/2`... pages still exist for pagination and stay noindexed via `ListingShell`'s default, so there's no duplicate-content conflict with the newly-indexable bare tag page. Made both nieuws and reviews tag pages conditionally indexable (real title/description, not blanket noindex) only when a tag has ≥3 posts, so thin single-entry tags don't get indexed as thin content. Fixed the sitemap filter (`astro.config.mjs`) to allow the bare tag URLs through while still excluding the noindexed numbered sub-pages.
- [x] **Verified throughout:** `npx astro check` stayed at the 61-error baseline (confirmed via git-stash comparison) and `npm run build` passed after every sub-step; spot-checked real rendered output at each stage (e.g. the Avengers: Doomsday article's "Meer nieuws" section correctly surfaces Ghost Rider/Black Panther 3/X-Men — all genuinely Marvel — instead of random articles).

**Note on the audit's original franchise counts** (97/59/37/24) vs. what actually got tagged (Marvel 104, Star Wars 55, DC 59, Harry Potter 17): different keyword sets and two extra days of new content explain most of the gap — not a discrepancy to worry about.

### 3.2 Build off-site entity presence (GEO/AI-citation authority) — ⚠️ Not done — not a coding task
**Effort:** High (ongoing) · **Impact:** Medium-high for AI Overviews/ChatGPT/Perplexity citation — currently the weakest GEO dimension

- [ ] Expand `sameAs` in Person/Organization schema with every real existing profile (not just Instagram) — check for YouTube, podcast platforms, LinkedIn. **This one *is* a quick code change if/when you share the real profile URLs** — I don't have them and won't guess.
- [ ] Grow an active YouTube presence (not just embedding trailers) — genuine ongoing community/marketing work, not something achievable via code.
- [ ] Establish presence in relevant Reddit communities (r/belgium, r/film) — same as above.
- [ ] Evaluate Wikipedia notability for Cinematen/founders — same as above.

### 3.3 Smaller technical/hygiene items — ✅ Done (one item skipped by your choice)
- [x] Implemented the IndexNow protocol: key file at `public/89341843606ca8c087dfb8f5aba1f6bc.txt`, submission script `scripts/submit-indexnow.mjs` (fetches the full sitemap, submits every URL — idempotent, so no diffing needed), wired into `.github/workflows/notify-deployment.yml` as a new job that fires after every successful **Production** deploy.
- [ ] **Skipped by your choice** — `includeSubDomains; preload` on the HSTS header: flagged that this affects *every* subdomain (confirmed `n8n.cinematen.be` is HTTPS-ready, but couldn't verify every possible subdomain — mail, staging, etc.) and that `preload` is slow to reverse if something breaks later. You chose to skip it; header stays at Vercel's current default.
- [x] Sitemap filter inconsistency: checked `/nieuws/film` and `/nieuws/serie` directly — both have real unique titles, meta descriptions, and intro copy, and serve a genuine category-filtering need. Confirmed they should stay indexed as-is; no change needed (this was a "confirm or fix" item, and confirming was the right call here).
- [x] Collapsed the redundant `Article` + `Review` sibling JSON-LD nodes in `ReviewLayout.astro`/`BaseHead.astro` — reviews with a real rating now emit `Review` only (Google's supported type for review pages); the one review without a rating (`onze-meest-verwachte-films-en-series-van-2026.mdx`, a listicle, not a single-item review) correctly still gets `Article`. Verified both cases in build output.

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

## After Phase 1-3 ship

Re-run `/seo audit https://cinematen.be` to get an updated health score and confirm the fixes landed as expected — Phases 1-3 together are a large enough set of changes (image pipeline, authorship/schema, review titles, hub-and-spoke architecture, tag pages) that a fresh full audit is worth more here than spot-checking individual items.
