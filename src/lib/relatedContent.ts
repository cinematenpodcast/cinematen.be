// Shared relevance scoring for "related content" modules (RelatedNieuws.astro,
// RandomReviews.astro). Franchise match is the strongest signal (a real,
// curated taxonomy — see src/content/config.ts), soort (Film/TV) match is a
// medium signal, shared free-text tags are the weakest (noisier vocabulary).
// Candidates are always sorted by this score then by recency — even a
// zero-score candidate still surfaces same-soort recent content rather than
// leaving the module sparse/empty on articles with no franchise/tags set.
type Scorable = {
  soort?: string | null;
  tags?: string[] | null;
  franchise?: string[] | null;
};

const FRANCHISE_WEIGHT = 10;
const SOORT_WEIGHT = 3;
const TAG_WEIGHT = 2;

export function scoreRelated(current: Scorable, candidate: Scorable): number {
  let score = 0;

  const currentFranchise = current.franchise || [];
  const candidateFranchise = candidate.franchise || [];
  const sharedFranchise = currentFranchise.filter((f) => candidateFranchise.includes(f));
  score += sharedFranchise.length * FRANCHISE_WEIGHT;

  if (current.soort && candidate.soort && current.soort.toLowerCase() === candidate.soort.toLowerCase()) {
    score += SOORT_WEIGHT;
  }

  const currentTags = current.tags || [];
  const candidateTags = candidate.tags || [];
  const sharedTags = currentTags.filter((t) => candidateTags.includes(t));
  score += sharedTags.length * TAG_WEIGHT;

  return score;
}

export function rankRelated<T extends { data: Scorable; date?: Date | string | null }>(
  current: Scorable,
  candidates: T[],
  limit: number
): T[] {
  return candidates
    .map((c) => ({ c, score: scoreRelated(current, c.data) }))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      const dateA = new Date(a.c.date ?? 0).getTime();
      const dateB = new Date(b.c.date ?? 0).getTime();
      return dateB - dateA;
    })
    .slice(0, limit)
    .map(({ c }) => c);
}
