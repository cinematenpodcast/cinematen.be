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
 * The `reviews` collection stores `rating` on a 0–5 scale (see
 * BaseReviewItem's 5-star generator) — NOT the 0–10 scale the static design
 * export mocked up (its "8/10" hero badge was fabricated demo data, see
 * cinematen-data.js). Real ratings are shown honestly as "x/5" rather than
 * multiplying by 2, to avoid inventing precision the source data doesn't have.
 */
export function ratingOutOfFive(rating: number | undefined | null): string | null {
  if (rating === undefined || rating === null || isNaN(rating) || rating <= 0) return null;
  const trimmed = Number.isInteger(rating) ? String(rating) : String(rating).replace(/\.0$/, "");
  return `${trimmed}/5`;
}

/** Reading-time-free word count estimate isn't used (no field for it in the
 * schema) — kept out intentionally rather than fabricating a "min leestijd"
 * badge like the static design mock did.
 */
