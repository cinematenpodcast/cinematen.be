import { defineCollection, z } from "astro:content";

// Astro 4.13.4 predates the Content Layer API (`loader`, `astro/loaders` glob(),
// and the top-level `src/content.config.ts` file location) — all of that landed
// in 4.14/5.0. Two things matter for this version specifically:
//   1. defineCollection() only supports `type: "content" | "data"` + `schema`
//      (see node_modules/astro/types/content.d.ts) — no `loader` key exists.
//   2. The config file itself must live at `src/content/config.ts`, not
//      `src/content.config.ts` — confirmed directly in this version's compiled
//      source (node_modules/astro/dist/content/utils.js, `search()`: it only
//      globs `content/config.{mjs,js,mts,ts}` under srcDir). The previous
//      `src/content.config.ts` sat at the *wrong path for this Astro version*,
//      so `contentPaths.config.exists` was always false and the config —
//      including its schema, independent of the dead `loader:` key discussed
//      in PRD 1.9d — was **never loaded at all**. That's the full explanation
//      for why `getCollection()` data has always been typed/validated as `any`
//      here, not just the missing loader API.
//
// This file (at the correct path) uses Astro's built-in per-folder file
// scanner (already doing all the real work, per PRD 1.9d) with a real Zod
// schema attached, so `getCollection()` data is finally typed and validated.
//
// Note on `slug`: PRD 1.9c says the frontmatter `slug` field is "confirmed
// required, not droppable" — but for `type: "content"` collections, Astro
// hard-forbids `slug` as a *schema* key (ContentSchemaContainsSlugError):
// it always strips `slug` out of the raw frontmatter itself and uses it to
// compute the entry's own top-level `.slug` property before the schema ever
// sees the rest of the data (node_modules/astro/dist/content/utils.js).
// So the frontmatter field itself is untouched on disk and still drives
// `entry.slug` exactly as before — it just can't also be declared in `data`.
// Consumers that read `post.data.slug` were updated to read `post.slug`
// instead (RelatedNieuws.astro, RandomReviews.astro, and the two article
// detail pages that merge it back onto the `frontmatter` object they hand
// down to NieuwsLayout/ReviewLayout).
const nieuws = defineCollection({
  type: "content",
  schema: z.object({
    layout: z.string().optional(),
    title: z.string(),
    date: z.coerce.date().optional(),
    schrijver: z.string().optional(),
    bron: z.string().optional(),
    soort: z.string().optional(),
    thumbnail: z.string().nullish(),
    trailer: z.string().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).nullish(),
    // Structured franchise/entity taxonomy — distinct from the free-text
    // `tags` field, which can't reliably drive hub-page/related-content
    // logic (inconsistent casing, typos, no fixed vocabulary). Values are
    // slugs from a fixed known-franchise list (see scripts/tag-franchises.mjs),
    // not arbitrary strings.
    franchise: z.array(z.string()).nullish(),
    summary: z.string().optional(),
    // GEO audit (2026-07-26): dateModified was hardcoded equal to
    // datePublished sitewide — always literally true for articles that are
    // never revised, but with zero mechanism to express a genuine correction
    // when one happens. Only set this when an article is actually edited
    // after publishing; leave unset otherwise (see NieuwsLayout.astro/
    // ReviewLayout.astro — modifiedDate falls back to `date` when absent).
    // Do NOT blanket-populate this on every deploy — Google's own AI-search
    // guidance explicitly flags faking freshness as a self-audit warning sign.
    updated: z.coerce.date().nullish(),
  }),
});

const reviews = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    schrijver: z.string().optional(),
    soort: z.string().optional(),
    thumbnail: z.string().nullish(),
    poster: z.string().nullish(),
    summary: z.string().nullish(),
    rating: z.number().optional(),
    tags: z.array(z.string()).nullish(),
    franchise: z.array(z.string()).nullish(),
    // See the matching comment in the nieuws schema above — same rule: only
    // set on a genuine post-publish edit, never blanket-populated.
    updated: z.coerce.date().nullish(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    trailer: z.string().optional(),
    // GEO audit (2026-07-26): itemReviewed only had name+image, so a bare
    // title like "Snow White" is ambiguous (multiple films share exact
    // titles) — an AI engine can't safely resolve which film a review is
    // about without an external identifier. Both nullish/optional: no
    // backfill across existing reviews, populate going forward. Never
    // fabricate an imdbId — get it from the film's real IMDb URL.
    imdbId: z.string().nullish(),
    releaseYear: z.number().nullish(),
  }),
});

export const collections = { nieuws, reviews };
