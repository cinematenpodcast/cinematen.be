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
 * The `reviews` collection stores `rating` on a 0–5 scale in 0.5 steps (see
 * BaseReviewItem's 5-star generator). The design's rating badge displays out
 * of 10 (e.g. "8/10"), matching the reference exactly — doubling a 0.5-step
 * 0–5 value always lands on a whole number out of 10, so this isn't
 * inventing precision, just re-scaling it.
 */
export function ratingOutOfTen(rating: number | undefined | null): string | null {
  if (rating === undefined || rating === null || isNaN(rating) || rating <= 0) return null;
  return String(Math.round(rating * 2));
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
