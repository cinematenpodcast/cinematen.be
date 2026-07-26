// Metadata for the franchise taxonomy (see src/content/config.ts, scripts/
// tag-franchises.mjs). Separate from the FRANCHISES keyword dictionary in
// the tagging script — this is display metadata for already-tagged content,
// not the matching rules used to assign the tag in the first place.
//
// HUB_ELIGIBLE: franchises with enough tagged entries (>=10, checked against
// the corpus on 2026-07-22) to justify a dedicated hub page — see
// src/pages/franchises/[slug].astro. Smaller franchises still get the
// `franchise` taxonomy value (useful for related-content matching) but no
// standalone page; a themed page with 1-7 entries reads as thin, not as a
// real destination.
export const FRANCHISE_NAMES: Record<string, string> = {
  marvel: "Marvel",
  dc: "DC",
  "star-wars": "Star Wars",
  "stranger-things": "Stranger Things",
  "harry-potter": "Harry Potter",
  "game-of-thrones": "Game of Thrones",
  "jurassic-park": "Jurassic Park",
  "lord-of-the-rings": "The Lord of the Rings",
  "star-trek": "Star Trek",
  "mission-impossible": "Mission: Impossible",
  "james-bond": "James Bond",
  "john-wick": "John Wick",
  "fast-furious": "Fast & Furious",
  yellowstone: "Yellowstone",
};

export const HUB_ELIGIBLE = new Set([
  "marvel",
  "dc",
  "star-wars",
  "stranger-things",
  "harry-potter",
  "game-of-thrones",
  "jurassic-park",
  "lord-of-the-rings",
  "star-trek",
]);

export function franchiseName(slug: string): string {
  return FRANCHISE_NAMES[slug] || slug;
}

export function hasHub(slug: string | undefined | null): boolean {
  return !!slug && HUB_ELIGIBLE.has(slug);
}
