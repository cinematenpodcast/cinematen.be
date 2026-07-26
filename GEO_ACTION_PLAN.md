# GEO Action Plan — cinematen.be

**Source:** Focused GEO (Generative Engine Optimization) deep-dive, 2026-07-26. Four parallel streams: technical/crawler audit, content citability, entity/knowledge-graph schema, and live real-world AI-visibility testing.

**GEO Score: 37/100** — this is a separate, deeper number from the 65/100 "AI Search Readiness" score in `SEO_ACTION_PLAN.md`. That number came from three lighter passes checking robots.txt/llms.txt/sameAs presence — readiness checks. This pass added real-world outcome testing (does the site actually get surfaced by AI systems?) and structural content analysis, and found the gap between "technically ready" and "actually visible" is large. Both numbers are correct for what they measured; this one is the harder, more honest question.

| Dimension | Weight | Score | Why |
|---|---|---|---|
| Crawler/Technical Access | 15% | 85 | Genuinely solid — verified live with real bot user-agents, not just reading robots.txt |
| Content Citability & Structure | 25% | 42 | Reviews are good; nieuws (the large majority of content) has regressed |
| Entity & Knowledge-Graph Signals | 20% | 50 | Core schema is correct; disambiguation depth is the gap |
| Off-site Authority & Corroboration | 25% | 12 | The real bottleneck — confirmed empirically, not inferred |
| Real-World AI Visibility (outcome) | 15% | 8 | Zero visibility on any unbranded query, confirmed via live testing |

**The honest summary:** technically, cinematen.be is a clean, crawlable, well-schema'd site that AI systems have no trouble reading. But it currently has **no measurable AI-search visibility beyond people typing its own name** — zero unbranded citations found, even for topics it has directly relevant content on (e.g. a live Superman review that never surfaces for "Superman review Nederlands recensie"). The reasons are mostly off cinematen.be's own pages: zero external backlinks/citations found anywhere, no Wikipedia/Wikidata/Reddit presence, no named-critic bylines (the exact pattern its actual competitors use), plus a documented structural bias in Dutch AI training data toward `.nl` over `.be` sources (18 of the top 20 Dutch-language training sources are `.nl`).

---

## Status — 2026-07-26: Phases G1 and G3 done, G2.4 done, G2.1-G2.3 and G4 not code

Everything in this plan that's actually a code fix has been implemented and verified (build + live output checks). What's left is explicitly non-code: G2.1-G2.3 are editorial/content-writing process changes (you can't retrofit "add subheadings" onto 790 existing articles via a script without either fabricating structure that wasn't there or requiring a human editorial pass), and all of G4 is off-site business/community work. Both categories were already flagged as such in this plan — nothing was silently skipped.

---

## Phase G1 — Cheap fixes, do first (this week) — ✅ Done

### G1.1 Fix franchise tag cross-contamination — ✅ Done
**Effort:** Low · **Impact:** Medium — pollutes hub citability

`supergirl-crasht-genadeloos-aan-de-kassa.mdx` is tagged `franchise: ["marvel", "dc"]` (Supergirl is DC-only) and `wordt-adam-driver-de-nieuwe-magneto-in-de-xmen-reboot.mdx` is tagged `["marvel", "star-wars", "dc"]` (it's an X-Men/Marvel story). This is the same class of over-matching bug already known in `scripts/tag-franchises.mjs` (title match OR ≥2 body mentions is too loose) — these two are confirmed live examples of it actively cross-polluting hub pages.

- [x] Manually reviewed all 28 entries with 2+ franchise tags (keyword-hit breakdown per entry, not a mechanical re-run). 14 were genuine crossovers (e.g. James Gunn "van Guardians tot Superman," Milly Alcock GoT→DC Supergirl casting) and correctly kept as-is; 14 were real false positives (awards-roundup articles namedropping unrelated franchises, a Tintin article listing other upcoming films for context, generic "unlike Marvel..." comparison asides) and were corrected.
- [x] Did **not** blindly retune the matching threshold — found genuine 2-hit crossovers (e.g. Mahershala Ali/Jurassic World) sitting at the exact same mention-count as false positives, so raising the threshold would have traded one error class for another. Documented this finding directly in `scripts/tag-franchises.mjs`'s comments for whoever revisits this.

**Verified:** Rebuilt and confirmed live — Supergirl no longer appears on `/franchises/marvel/` (only `/franchises/dc/`), Adam Driver/Magneto no longer appears on `/franchises/star-wars/` or `/franchises/dc/` (only `/franchises/marvel/`).

### G1.2 Fix the stale llms.txt — ✅ Done
**Effort:** Low · **Impact:** Low (hygiene, not a lever — see note)

`public/llms.txt` says reviews use a "0-5 scale" — the actual scale has been 0-10 since the migration documented in `ReviewLayout.astro:27`'s own comment (`bestRating: 10` in the schema). It also doesn't list any of the 9 franchise hub pages or the 2 author pages, and doesn't mention the RSS feed.

- [x] Fixed the rating-scale line (0-5 → 0-10).
- [x] Added all 9 `/franchises/[slug]/` URLs and both `/auteur/[slug]/` URLs to Key Pages.
- [x] Added a line pointing to `/rss.xml`.

**Reminder, not just for this item:** per the skill's own primary-source evidence, llms.txt has zero measured citation weight on any current major AI search system — this was worth doing because it's free, not because it moves the needle.

### G1.3 Add a shared `buildPublisherSchema()` helper — ✅ Done
**Effort:** Low · **Impact:** High — single highest-leverage schema change in this whole pass

- [x] Added `buildPublisherSchema()` to `src/lib/format.ts` with `@id`, `sameAs` (Facebook/Instagram/Spotify/Apple Podcasts — verified against `SocialIcons.astro`/`BaseFooter.astro` before use, not guessed), and `founder` (Yorrick, Maarten, linked to their real `/auteur/` pages).
- [x] Replaced all 4 inline `"publisher": {...}` blocks (`BaseHead.astro` ×2, `BaseHeadNieuws.astro`, `ReviewLayout.astro`) with `buildPublisherSchema()`.
- [x] Added `"@id": "https://www.cinematen.be/#website"` to the `WebSite` block in `BaseHead.astro`.
- [x] Also updated `buildAuthorSchema()`'s Organization fallback (the "de Cinematen" collective byline case) to return the same full `buildPublisherSchema()` object instead of a second, slightly-different Organization — one entity, not two. Used the full object rather than a bare `{"@id": ...}` reference deliberately: not every JSON-LD consumer merges entities across separate `<script>` blocks on a page, so repeating the full object under the shared `@id` is the safer, more compatible choice.

**Verified:** Fetched live JSON-LD on a nieuws article, a review, and the homepage — `publisher` is byte-identical across all three, including `sameAs`/`founder`.

### G1.4 Widen the RSS feed — ✅ Done
**Effort:** Low · **Impact:** Low-medium

- [x] Merged reviews into the previously nieuws-only feed (one combined feed, sorted by date across both collections, capped at 75 items) rather than adding a second route.
- [ ] **Not done** — full-content items instead of summaries. Would require rendering MDX/JSX body content to HTML for the feed, which risks unrendered markdown/JSX syntax leaking into feed readers if done carelessly — flagged as a real follow-up, not attempted blind in this pass.

**Verified:** Build output confirms 75 items, both nieuws and review URLs present, correctly XML-escaped (`&amp;` for the literal `&` in `/reviews&blogs/` URLs), valid XML.

---

## Phase G2 — Content structure (near-term, editorial + light code) — G2.1-G2.3 not code, G2.4 ✅ Done

### G2.1 Restore subheadings in nieuws articles — ⚠️ Not done — editorial process, not code
**Effort:** Medium (editorial/template) · **Impact:** High — this is a real regression, not a static gap

Measured directly (word/heading-counted, not eyeballed): **0 of 63 sampled nieuws articles from 2026/07 have any heading at all.** An older cohort (22 articles from 2023/12) had headings in 12 of 22 files. Something in the nieuws writing/publishing process changed between 2023 and now and removed subheadings entirely. Reviews, by contrast, consistently have 2-5 H2/H3s per article and are in much better shape.

- [ ] Investigate what changed in the nieuws content template/prompt/process between 2023 and 2026 that dropped subheadings.
- [ ] Reintroduce even 2-3 H2s per nieuws article going forward — e.g. "Wat is er aangekondigd?" / "Wat betekent dit voor fans?" style, which both restores structure and matches real query intent shapes.
- [ ] This is a content/editorial process fix, not something to bulk-retrofit onto 790 existing articles — focus on new content going forward. **This is genuinely not something I can fix via code** — there's no template enforcing (or removing) heading structure in the codebase; nieuws articles are written directly as MDX prose. Fixing this means changing how future articles get written, not a code change.

### G2.2 Add named-source attribution to nieuws — ⚠️ Not done — editorial process, not code
**Effort:** Medium (editorial) · **Impact:** High — the single biggest citability-as-secondary-source lever

Only 16 of 219 sampled 2026 nieuws articles (7.3%) name any real source, and most of those are incidental. Casting/rumor articles routinely source themselves as "volgens verschillende bronnen op sociale media" ("according to various sources on social media") or "mensen die het vaak bij het rechte eind hebben" ("people who are often right about these things") — no linkable primary source. This reads as unattributed aggregation, not a credible secondary source, which is exactly what AI answer engines weight when deciding whether to cite a page.

- [ ] Where the info originated from a real outlet (Deadline, Variety, THR, Box Office Mojo, etc.), name and ideally link it.
- [ ] This is a genuine editorial-process change, not a one-off fix — same category as the fabricated-rumor-sourcing pattern being worth breaking going forward, not retrofitting historically. Same reason as G2.1: this is about how articles get written, not something a script can retrofit without fabricating sources that weren't actually named.

### G2.3 Pull fact-dense paragraphs into short lists — ⚠️ Not done — editorial process, not code
**Effort:** Low-medium · **Impact:** Medium

Box-office/casting stats are already present as real facts (e.g. "$4,5 miljoen... Prognoses wijzen op... $35 miljoen tot $40 miljoen") but stitched into narrative paragraphs rather than isolated as liftable units. Zero markdown tables exist anywhere in the content tree; only a handful of files use any list at all.

- [ ] For articles with 3+ comparable stats (opening weekend, % drop, budget, worldwide total), pull them into a short bulleted block instead of prose.
- [ ] The one listicle in the corpus (`onze-meest-verwachte-films-en-series-van-2026.mdx` — 71 entries, strict "Title - DD/MM" heading pattern) is the single most AI-citable format on the whole site. Worth using as the template for any future roundup content.

### G2.4 Add synthesis text to franchise hub pages — ✅ Done
**Effort:** Low · **Impact:** Low-medium

The 9 hub pages were previously just a card grid + one templated sentence — no original synthesis. A query like "wat is er allemaal aangekondigd in het DC-universe" couldn't get a good extractable answer from the hub page itself.

- [x] Added real derived stats to both the visible intro and the meta description — nieuws count, review count, and average review rating when reviews exist, all computed from the same data already in the grid (not authored per-franchise prose). Also added a "Meest recent: {title} ({date})" line linking to the newest item.

**Verified:** Marvel hub now reads "89 nieuwsartikelen en 2 reviews over Marvel op Cinematen.be — gemiddelde reviewscore 8.0/10," DC hub "54 nieuwsartikelen en 3 reviews... — gemiddelde reviewscore 7.5/10" — both real numbers, confirmed in build output.

---

## Phase G3 — Entity/schema depth (near-term, code) — ✅ Done

### G3.1 Deepen `itemReviewed` with a real external identifier — ✅ Done
**Effort:** Low-medium · **Impact:** High for review citability specifically

Reviews currently mark up `itemReviewed` with just `name` + optional `image`. A bare title like "Snow White" is genuinely ambiguous (multiple films share exact titles) — without an external identifier, an AI engine can't safely resolve which film a review is actually about, which undercuts citability for exactly the pages meant to be cited.

- [x] Added to the `reviews` schema in `src/content/config.ts` (nullish — no backfill, populate going forward):
```ts
imdbId: z.string().nullish(),       // e.g. "tt6208148" from the IMDb URL
releaseYear: z.number().nullish(),  // the film/show's own release year, not the review's publish date
```
- [x] In `ReviewLayout.astro`, added to `itemReviewed`:
```js
...(frontmatter.releaseYear && { "datePublished": String(frontmatter.releaseYear) }),
...(frontmatter.imdbId && { "sameAs": `https://www.imdb.com/title/${frontmatter.imdbId}/` }),
```
  `sameAs` to IMDb is what actually does the disambiguation work — an unambiguous ID an AI engine can cross-reference.

### G3.2 Give franchise hub pages real structural schema — ✅ Done
**Effort:** Low-medium · **Impact:** Medium

Current `CollectionPage` schema was inert (`name`/`description`/`url` only) — no relationship to the actual articles on the page.

- [x] Added `isPartOf` (pointing at the `#website` `@id` from G1.3), `about` (a `Thing` naming the franchise), and `mainEntity: ItemList` enumerating every listed article with its real URL and title.
- [x] Added `BreadcrumbList` (Home → {name}) to all 9 hub pages, matching the pattern used elsewhere on the site.
- [x] Skipped Wikidata `sameAs` for the franchise `about` entity as instructed — didn't verify QIDs, so didn't guess them.

**Verified:** Build output confirms `CollectionPage` (with `isPartOf`/`about`/`mainEntity`) and a separate `BreadcrumbList` block both render correctly, e.g. Star Trek hub shows `numberOfItems: 11` matching the actual grid.

### G3.3 Enrich author Person entities — ✅ Done
**Effort:** Low · **Impact:** Medium

`/auteur/[slug]/` previously had just `name` + `url` — the thinnest possible entity.

- [x] Added `jobTitle`, `description`, and `worksFor` (the full `buildPublisherSchema()` object, not a bare `@id` reference — this page only has one JSON-LD block, so a bare reference to an entity never defined on the same page wouldn't resolve for any parser).
- [x] `knowsAbout` — **went further than the plan's static list.** Instead of a hardcoded `["Film", "Televisieseries", "Filmrecensies"]`, derived it from each author's own actual tag/franchise frequency across their real reviews — a genuine signal, not filler. Yorrick's page now shows `["science-fiction", "horror", "comedy", "Star Wars", "fantasy", "actie"]`, computed live from his own review data.
- [ ] `sameAs` to personal LinkedIn/Letterboxd/X — not added, per the plan's own instruction not to guess URLs.

### G3.4 Add a genuine (not faked) freshness signal — ✅ Done
**Effort:** Low · **Impact:** Low-medium, mostly for Perplexity specifically

`dateModified` was hardcoded equal to `datePublished` sitewide.

- [x] Added an optional `updated` frontmatter field to both collections.
- [x] `modifiedDate`/`dateModified` now only reflect `updated` when it's actually set — both `NieuwsLayout.astro` and `ReviewLayout.astro` (including the Review JSON-LD's own `dateModified`, which didn't exist as a field at all before) fall back to `date` otherwise. No blanket bump — this is honest signaling, exactly as specified, not gaming it.

**Verified:** Build output confirms nieuws still correctly shows `datePublished == dateModified` when no `updated` is set (unchanged, honest), and reviews correctly emit no `dateModified` at all when unset rather than a fake one.

---

## Phase G4 — Off-site authority (ongoing — editorial/business decisions, not code)

This is the dimension scoring worst (12/100) and driving the near-zero real-world visibility (8/100). None of this is code — flagging clearly so it doesn't get treated as a backlog item that "should" get automated.

### G4.1 Named critic bylines
**Effort:** Editorial decision + backfill · **Impact:** High

Confirmed via live competitor comparison: DeFilmrecensent.nl — which regularly outranks cinematen.be on unbranded Dutch review queries — structures its entire site around individually named reviewers with dedicated author pages. This connects directly to the open item in `SEO_ACTION_PLAN.md` (anonymous "de Cinematen" byline). This is the cheapest, most direct lever in the whole GEO pass.

### G4.2 Pursue real external citations/backlinks
**Effort:** Ongoing, external · **Impact:** High

Confirmed empirically: searching `"cinematen.be" -site:cinematen.be` surfaces only the site's own owned channels (Spotify, Apple Podcasts, YouTube, Instagram, Linktree, Podimo) — **zero independent third-party citations found anywhere.** AI engines lean heavily on cross-source corroboration; right now there's nothing to corroborate with. Even a handful of real links from Belgian film/culture press would change this from "empty" to "non-empty," which matters more than the raw count at this stage.

### G4.3 Evaluate Wikipedia/Wikidata notability
**Effort:** Ongoing, external · **Impact:** Medium-high for entity resolution

No Wikipedia or Wikidata entry exists for Cinematen currently. A podcast + site with a real audience may or may not clear Wikipedia's notability bar — worth a real evaluation rather than assuming either way. Would materially help entity resolution across every AI platform if achievable.

### G4.4 Benchmark against realistic peers, not aggregators
**Effort:** Ongoing · **Impact:** Strategic framing, not a task itself

Live testing found two directly comparable small Belgian film sites — **MoviePulp.be** and **DeFilmBlog.be** — consistently outranking cinematen.be on "Belgian film site" and branded-adjacent queries. These are the realistic, closeable peer benchmark. FilmVandaag.nl and FilmTotaal.nl (Ahrefs DR 53, ~4.4K referring domains for FilmVandaag alone) are large structured aggregators/databases, not a fair comparison for a two-person podcast site — don't chase parity with them; do study what MoviePulp/DeFilmBlog are doing differently.

---

## Known structural headwind — not fixable, worth knowing about

Documented (not inferred) via [the-low-countries.com](https://www.the-low-countries.com/article/its-all-double-dutch-to-chatgpt/): of the top 20 sites used in Dutch-language LLM training data, **18 use `.nl`, only 2 use `.be`**, and Surinamese Dutch (`.sr`) is entirely absent. This is a real, citable structural bias against Belgian Dutch sources baked into training corpora — independent of anything on cinematen.be's own pages. It's real, but it's the least actionable of everything in this report; the live-search/citation path (rather than parametric model knowledge) is more winnable for a small site than this training-data gap is fixable.

---

## What's already working — don't break these

- **IndexNow** is correctly implemented and automated (`scripts/submit-indexnow.mjs`, fires on every production deploy via GitHub Actions) — this is named directly in AI-search platform guidance as the specific lever for Bing Copilot visibility. Genuine strength, not just an absence of gaps.
- **Crawler access** is clean and verified live (not just robots.txt) — GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot all get byte-identical, fully-rendered SSR content with zero blocking or cloaking.
- **hreflang absence is correct**, not a gap — single-language, single-region site, nothing to declare.
- **Review verdicts** are already citable in prose, not just as a schema number — headings like "Supergirl: Woman of Tomorrow – Een vermakelijke achtervolging die dieper had kunnen gaan" double as quotable answers to "is Supergirl goed."

## After this phase

Re-running the live AI-visibility test (the same query set from this audit) after Phase G1+G4 items land is the real verification step here — schema/structure fixes are necessary but the visibility gap won't close without the off-site authority work in G4, which takes longer than a code sprint.
