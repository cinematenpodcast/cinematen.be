#!/usr/bin/env node
// Reorganizes src/content/{nieuws,reviews} from a flat folder into YYYY/MM
// subfolders (based on each entry's `date:` frontmatter), so Pages CMS
// doesn't time out loading hundreds of files from a single directory.
//
// IDEMPOTENT BY DESIGN: only processes .mdx files sitting FLAT in a
// collection's root (src/content/nieuws/*.mdx, not anything already under a
// YYYY/MM folder). Anything already organized is skipped untouched, so this
// is safe to re-run any time — including after pulling in new articles that
// Pages CMS committed straight to main while this branch was in progress.
//
// The routing/link-generation code (see slugFromEntryId in src/lib/format.ts)
// only ever uses a file's own basename, never its containing folder, so this
// move never changes any public URL.
//
// NOTE ON RATINGS: this script used to also rescale reviews' `rating:` field
// x2 (0-5 -> 0-10), as a ONE-TIME migration for the pre-existing 37 reviews
// that all predated the 0-10 scale. That rescale is NOT repeated here for
// files organized on later runs — .pages.yml now hints a 0-10 range, so any
// new review arriving after that migration is already on the correct scale.
// Blindly re-doubling would corrupt it (this actually happened once: a new
// review merged in with rating: 8.5 — impossible on the old 0-5 scale, so
// clearly already 0-10 — got wrongly doubled to 17 before this note was
// added; fixed by hand, and the auto-rescale removed from this script).
//
// Usage: node scripts/organize-content.mjs

import { readdirSync, readFileSync, mkdirSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { execFileSync } from "node:child_process";

const REPO_ROOT = process.cwd();

function getFlatMdxFiles(collectionDir) {
  return readdirSync(join(REPO_ROOT, collectionDir), { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
    .map((entry) => entry.name)
    .sort();
}

/**
 * Extracts { year, month } directly from the frontmatter date string via
 * regex, NOT via `new Date(...)`. Frontmatter dates are either "YYYY-MM-DD"
 * or "YYYY-MM-DD HH:mm" (confirmed across all 791 files) — the latter, with
 * no timezone suffix, parses as LOCAL time per the ECMAScript Date spec
 * (unlike a bare "YYYY-MM-DD", which parses as UTC midnight), so building a
 * Date and reading its UTC parts can silently shift a near-midnight article
 * into the wrong month. Reading the digits straight out of the string
 * sidesteps that entirely.
 */
function extractYearMonth(content) {
  const match = content.match(/^date:\s*['"]?(\d{4})-(\d{2})-(\d{2})/m);
  if (!match) return null;
  const [, year, month] = match;
  return { year, month };
}

function organizeCollection(name) {
  const collectionDir = `src/content/${name}`;
  const files = getFlatMdxFiles(collectionDir);

  const monthCounts = new Map(); // "YYYY/MM" -> count
  const skippedNoDate = [];
  const skippedCollision = [];

  for (const file of files) {
    const oldAbsPath = join(REPO_ROOT, collectionDir, file);
    const content = readFileSync(oldAbsPath, "utf-8");

    const yearMonth = extractYearMonth(content);
    if (!yearMonth) {
      skippedNoDate.push(file);
      continue;
    }
    const { year, month } = yearMonth;

    const destDir = join(REPO_ROOT, collectionDir, year, month);
    const newAbsPath = join(destDir, file);

    if (existsSync(newAbsPath)) {
      skippedCollision.push(file);
      continue;
    }

    mkdirSync(destDir, { recursive: true });
    const relOld = relative(REPO_ROOT, oldAbsPath);
    const relNew = relative(REPO_ROOT, newAbsPath);
    execFileSync("git", ["mv", relOld, relNew], { cwd: REPO_ROOT, stdio: "inherit" });

    const key = `${year}/${month}`;
    monthCounts.set(key, (monthCounts.get(key) ?? 0) + 1);
  }

  return { monthCounts, skippedNoDate, skippedCollision, totalMoved: files.length - skippedNoDate.length - skippedCollision.length };
}

function printSummary(name, result) {
  console.log(`\n=== ${name} ===`);
  if (result.totalMoved === 0) {
    console.log("Nothing to organize — no flat files found (already up to date).");
  } else {
    console.log(`Moved ${result.totalMoved} file(s):`);
    for (const [key, count] of [...result.monthCounts.entries()].sort()) {
      console.log(`  ${key}: ${count}`);
    }
  }
  if (result.skippedNoDate.length > 0) {
    console.log(`Skipped (no valid date frontmatter — left in place, needs manual attention):`);
    for (const f of result.skippedNoDate) console.log(`  ${f}`);
  }
  if (result.skippedCollision.length > 0) {
    console.log(`Skipped (destination already exists — needs manual attention):`);
    for (const f of result.skippedCollision) console.log(`  ${f}`);
  }
}

const nieuwsResult = organizeCollection("nieuws");
const reviewsResult = organizeCollection("reviews");

printSummary("nieuws", nieuwsResult);
printSummary("reviews", reviewsResult);

const hadIssues = nieuwsResult.skippedNoDate.length + nieuwsResult.skippedCollision.length +
  reviewsResult.skippedNoDate.length + reviewsResult.skippedCollision.length > 0;
if (hadIssues) {
  console.log("\nSome files were skipped — review the notes above before building.");
  process.exitCode = 1;
}
