// Shared display-formatting helpers for the redesigned pages (Home, Nieuws,
// Reviews & Blogs, Search). Pure functions only — no framework coupling, so
// they can be imported from both .astro frontmatter and design-system
// component slots.

/**
 * Short Dutch date for cards/badges, e.g. "17-07-2026". Mirrors the
 * DD-MM-YYYY format already used by BaseNieuwsItem/BaseReviewItem/NieuwsLayout,
 * kept separate here so new pages don't reach back into old components.
 */
export function formatCardDate(dateInput: Date | string | undefined | null): string {
  if (!dateInput) return "";
  const date = new Date(dateInput);
  if (isNaN(date.getTime())) return "";
  return date.toLocaleDateString("nl-NL", {
    timeZone: "UTC",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

/**
 * Date + time for the Nieuws article hero meta row, e.g. "2026-07-17 - 14:30".
 */
export function formatDateTime(dateInput: Date | string | undefined | null): string {
  if (!dateInput) return "";
  const date = new Date(dateInput);
  if (isNaN(date.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  const y = date.getUTCFullYear();
  const m = pad(date.getUTCMonth() + 1);
  const d = pad(date.getUTCDate());
  const h = pad(date.getUTCHours());
  const min = pad(date.getUTCMinutes());
  return `${y}-${m}-${d} - ${h}:${min}`;
}

/**
 * Plain ISO date, no time — e.g. "2026-07-17". Used for the Pagefind
 * `date` meta field so search results show a date only, independent of
 * whatever format each page's own hero date display uses.
 */
export function formatDateISO(dateInput: Date | string | undefined | null): string {
  if (!dateInput) return "";
  const date = new Date(dateInput);
  if (isNaN(date.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`;
}

/**
 * Long Dutch date for article/review hero sections, e.g. "17 juli 2026".
 */
export function formatHeroDate(dateInput: Date | string | undefined | null): string {
  if (!dateInput) return "";
  const date = new Date(dateInput);
  if (isNaN(date.getTime())) return "";
  return date.toLocaleDateString("nl-NL", {
    timeZone: "UTC",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * The `reviews` collection stores `rating` already on a 0–10 scale (migrated
 * from the original 0–5-in-0.5-steps scale — every stored value was doubled
 * in place to match). The design's rating badge displays "X/10" directly.
 */
export function ratingOutOfTen(rating: number | undefined | null): string | null {
  if (rating === undefined || rating === null || isNaN(rating) || rating <= 0) return null;
  return String(Math.round(rating));
}

/**
 * The routable slug for a nieuws/reviews entry — its filename without the
 * extension, regardless of which subfolder (e.g. a year/month organization
 * folder) it lives in. Astro's content-collection `entry.id` is the file's
 * path *relative to the collection root*, which includes any subfolders —
 * every route and link in the site must derive its slug via this function,
 * not the raw `id`, so moving files into date-based subfolders never
 * changes a live URL.
 */
export function slugFromEntryId(id: string): string {
  const basename = id.split("/").pop() ?? id;
  return basename.replace(/\.mdx$/, "");
}

/**
 * Estimated reading time in whole minutes, computed from the actual rendered
 * article body (not a frontmatter field — none exists). ~200 words/minute,
 * rounded up, minimum 1. Matches the hero metadata pill in Artikel.dc.html /
 * Review.dc.html ("X min leestijd").
 */
export function readingTime(text: string | undefined | null): number {
  if (!text) return 1;
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  if (words === 0) return 1;
  return Math.max(1, Math.ceil(words / 200));
}

/**
 * "de Cinematen" is the site's collective/brand byline, not a real person —
 * schema.org markup for it should be Organization, never a fabricated Person.
 */
const COLLECTIVE_AUTHOR_NAMES = new Set(["de cinematen", "cinematen"]);

export function isCollectiveAuthor(name: string | undefined | null): boolean {
  return !!name && COLLECTIVE_AUTHOR_NAMES.has(name.trim().toLowerCase());
}

/** Matches the /auteur/[slug] route param derivation used across author pages/links. */
export function authorSlug(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, "-");
}

/**
 * Schema.org author entity for a byline name. Real named authors get a Person
 * tied to their own /auteur/[slug]/ page (so distinct authors don't all point
 * at the same url/sameAs); the collective byline and missing/unknown authors
 * get Organization — never a guessed Person identity.
 */
export function buildAuthorSchema(name: string | undefined | null) {
  if (!name || isCollectiveAuthor(name)) {
    return { "@type": "Organization", "name": "Cinematen", "url": "https://www.cinematen.be/" };
  }
  return {
    "@type": "Person",
    "name": name,
    "url": `https://www.cinematen.be/auteur/${authorSlug(name)}/`,
  };
}
