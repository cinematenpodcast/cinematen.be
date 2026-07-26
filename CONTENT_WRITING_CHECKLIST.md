# Content Writing Checklist — cinematen.be

This is the "what do I actually change about how I write" version of the SEO/GEO audits — no code, just writing habits. Everything below came out of `SEO_ACTION_PLAN.md` and `GEO_ACTION_PLAN.md`'s open items: things that can't be fixed by editing code because they're about what actually goes into an article when it's written. These are ongoing habits, not a one-time todo list — there's nothing to "finish," just apply them from the next article onward.

---

## Every nieuws article

- [ ] **Set a real author.** Add `schrijver: Yorrick` or `schrijver: Maarten` to the frontmatter. Right now 0 of ~790 nieuws articles have this set, so every one falls back to a generic "Cinematen" org byline — accurate, but it means there's no individual authorship signal anywhere in the site's biggest content type.
- [ ] **Add 2-3 subheadings** (`##` in the MDX body). Measured directly: 0 of 63 sampled articles from this year have a single heading, versus roughly half of a 2023 sample. Something changed in how these get written — bring it back. Good subheading style: a question that matches what someone would actually search, e.g. `## Wanneer komt de film uit?` or `## Wat betekent dit voor de cast?` — not just a label.
- [ ] **Name your source when there is one.** If something comes from Deadline, Variety, The Hollywood Reporter, Box Office Mojo, etc., say so and link it. Only 7.3% of sampled nieuws articles currently name a real outlet — most casting/rumor pieces just say "volgens verschillende bronnen op sociale media," which reads as unverified aggregation rather than real reporting.
- [ ] **Turn 3+ comparable numbers into a short list**, not a paragraph. Box office openings, drop percentages, budgets, cast lists — if you're stating three or more of these back to back, a few bullet points read better and are easier to scan than one dense sentence.
- [ ] **Only touch `updated:` when you genuinely edit a published article later** (a correction, an update once a release date changes, etc.) — never as a routine thing, and never on the same day you first publish. Bumping it without a real edit is exactly the kind of fake-freshness signal search engines are trained to notice and penalize.

## Every review

- [ ] **Use a real name, not "de Cinematen," whenever there is one.** If Yorrick or Maarten actually wrote the review, attribute it to them by name. The collective byline should be the exception (for genuinely joint/staff pieces), not the default — competing Dutch review sites that outrank cinematen.be structure their whole site around named critics, and this is the single cheapest lever to close that gap.
- [ ] **Add the film/show's IMDb ID and release year when you know them** — `imdbId: "tt1234567"` (the ID from the IMDb URL) and `releaseYear: 2026` in frontmatter. Plenty of films share exact titles ("Snow White" alone has several); this is what actually lets a search or AI engine confirm which specific film your review is about.
- [ ] Same `updated:` rule as nieuws — only when there's a real edit.

## Every once in a while, not per-article

- [ ] **Personal social links for author pages.** If Yorrick or Maarten want a personal LinkedIn, Letterboxd, X, or similar profile linked from their `/auteur/` page, just say so — it's a small code change once you confirm the actual URLs. Nothing was guessed or added without confirmation.
- [ ] **Flag obviously wrong franchise hub placements.** The Marvel/DC/Star Wars/etc. hub pages are tagged automatically by a script that isn't perfect — it occasionally mistags an article that only mentions another franchise in passing. If you ever spot something that clearly doesn't belong on a hub page, mention it; it's a quick manual correction, not something that needs to wait for a full re-audit.

---

Full technical detail behind every item above lives in `SEO_ACTION_PLAN.md` and `GEO_ACTION_PLAN.md`, if useful — this file is deliberately just the practical, no-jargon version.
