#!/usr/bin/env node
// Backfills the `franchise` taxonomy field (src/content/config.ts) on
// existing nieuws/reviews entries that don't already declare one, by
// keyword-matching each entry's title + body against a fixed franchise list.
// Re-runnable: only touches files with NO `franchise:` key at all, so it
// never overwrites a manually-set value (including an intentional empty one).
//
// Matching rule: title match (any occurrence) OR >=2 mentions in the body.
// A single incidental body mention (e.g. an actor's other film namedropped
// in a bio aside) isn't "this article is about that franchise" — tested
// against this corpus, threshold=1 on body text produced clearly wrong
// tags (e.g. an article about a year like "2007" false-matching "007", or
// a passing "...like in Mission Impossible..." aside tagging an unrelated
// article). Title match OR >=2 body mentions was the threshold that held up
// under spot-checking.
//
// GEO audit follow-up (2026-07-26): manually reviewed all 28 entries this
// produced with 2+ franchise tags. Found real false positives at exactly the
// >=2 body-mention margin (awards-roundup articles namedropping "Spider-Man"/
// "Mission: Impossible" among many unrelated nominees; a Tintin article
// listing several other upcoming films for context) — but ALSO found genuine
// crossover cases sitting at that same count (e.g. "Mahershala Ali sluit zich
// aan bij Jurassic World" only hits "marvel"+"avengers" twice, but is a real
// Marvel-actor-joins-Jurassic-World story). Raising the threshold to 3 would
// have dropped that genuine case while fixing the false positives — the two
// error classes overlap at this sample size, so blind threshold tuning trades
// one error type for another rather than fixing precision. The 14 real
// mistags found were corrected by hand, not by retuning this script. If this
// keeps recurring at scale, the fix is a stronger signal than raw mention
// count (e.g. weighting specific-property keywords like "batman" or "iron
// man" higher than the bare franchise name "marvel"/"dc"), not a higher
// threshold — but that wasn't validated against enough data to ship blind.
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

export const FRANCHISES = {
  marvel: ["marvel", "avengers", "x-men", "spider-man", "spiderman", "iron man",
    "captain america", "black panther", "guardians of the galaxy", "doctor strange",
    "ant-man", "fantastic four", "deadpool", "wolverine", "loki", "wakanda",
    "shang-chi", "eternals", "ms. marvel", "she-hulk", "moon knight", "daredevil",
    "thunderbolts", "doomsday", "secret wars"],
  "star-wars": ["star wars", "skywalker", "jedi", "sith", "mandalorian", "ahsoka",
    "andor", "rogue one", "obi-wan"],
  "james-bond": ["james bond"], // deliberately NOT "007" — matches inside years like "2007"
  "harry-potter": ["harry potter", "hogwarts", "fantastic beasts", "wizarding world"],
  dc: ["dc studios", "dc universe", "batman", "superman", "supergirl", "wonder woman",
    "justice league", "aquaman", "the flash", "green lantern", "joker", "peacemaker",
    "clayface", "dceu"],
  "lord-of-the-rings": ["lord of the rings", "the hobbit", "rings of power", "middle-earth"],
  "star-trek": ["star trek", "starfleet"],
  "jurassic-park": ["jurassic park", "jurassic world"],
  "fast-furious": ["fast & furious", "fast and furious"],
  "mission-impossible": ["mission: impossible", "mission impossible"],
  "john-wick": ["john wick"],
  "stranger-things": ["stranger things"],
  "game-of-thrones": ["game of thrones", "house of the dragon"],
  yellowstone: ["yellowstone", "dutton ranch", "the madison"],
};

function countHits(text, keywords) {
  const lower = text.toLowerCase();
  return keywords.reduce((sum, kw) => sum + lower.split(kw).length - 1, 0);
}

export function matchFranchises(title, body) {
  const hits = [];
  for (const [franchise, keywords] of Object.entries(FRANCHISES)) {
    const titleHit = countHits(title, keywords) >= 1;
    const bodyHit = countHits(body, keywords) >= 2;
    if (titleHit || bodyHit) hits.push(franchise);
  }
  return hits;
}

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (name.endsWith(".mdx")) out.push(full);
  }
  return out;
}

function processFile(path, apply) {
  const text = readFileSync(path, "utf-8");
  const fmMatch = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!fmMatch) return null;
  const [, frontmatter, body] = fmMatch;

  if (/^franchise:/m.test(frontmatter)) return null; // don't clobber an existing value

  const titleMatch = frontmatter.match(/^title:\s*(.+)$/m);
  const title = titleMatch ? titleMatch[1].replace(/^['"]|['"]$/g, "") : "";

  const hits = matchFranchises(title, body);
  if (hits.length === 0) return null;

  const insertion = `franchise: [${hits.map((h) => `"${h}"`).join(", ")}]\n`;
  const newFrontmatter = frontmatter + "\n" + insertion.trimEnd();
  const newText = text.replace(
    /^---\n([\s\S]*?)\n---\n/,
    `---\n${newFrontmatter}\n---\n`
  );

  if (apply) writeFileSync(path, newText, "utf-8");
  return hits;
}

function main() {
  const apply = process.argv.includes("--apply");
  let changed = 0;
  const counts = {};
  for (const dir of ["src/content/nieuws", "src/content/reviews"]) {
    for (const path of walk(dir)) {
      const hits = processFile(path, apply);
      if (hits) {
        changed++;
        for (const h of hits) counts[h] = (counts[h] || 0) + 1;
      }
    }
  }
  console.log(`${apply ? "APPLIED" : "DRY RUN"}: ${changed} files tagged`);
  console.log(counts);
}

if (import.meta.url === `file://${process.argv[1]}`) main();
