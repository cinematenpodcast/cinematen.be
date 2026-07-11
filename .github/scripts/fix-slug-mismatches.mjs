// Rename safety net for src/content/nieuws and src/content/reviews.
//
// The public URL for these MDX files is driven by the FILENAME, not the
// frontmatter `slug` field (confirmed via src/pages/reviews&blogs/[...slug].astro).
// This script takes a list of .mdx files that changed in the triggering push
// (computed by the workflow via `git diff` against the previous commit),
// recomputes each file's expected filename from its current `title`
// frontmatter using the exact same algorithm as src/lib/createSlug.ts, and
// `git mv`s any file whose filename has drifted from its title.
//
// Deliberately scoped to only the files that changed in this push, not a
// full-repo scan — a full scan would also "fix" any pre-existing filename
// drift elsewhere in the ~800-file collections that nobody asked this push
// to touch, which is a surprising, oversized blast radius for a safety net
// that's supposed to react to a single edit. Keep this in sync with
// src/lib/createSlug.ts if that algorithm ever changes.

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import matter from 'gray-matter';

// Mirrors src/lib/createSlug.ts step for step. Do not diverge.
function createSlug(title) {
  return title
    .trim()
    .replace(/[^A-Za-z0-9 ]/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

const changedFilesListPath = process.argv[2];
if (!changedFilesListPath) {
  console.error('Usage: node fix-slug-mismatches.mjs <path-to-changed-files-list>');
  process.exit(1);
}

const changedFiles = fs
  .readFileSync(changedFilesListPath, 'utf8')
  .split('\n')
  .map((line) => line.trim())
  .filter(Boolean);

let renamedCount = 0;

for (const filePath of changedFiles) {
  if (!filePath.endsWith('.mdx')) continue;

  if (!fs.existsSync(filePath)) {
    // File was deleted later in the same push, or moved by an earlier step
    // in this same run — nothing to check.
    continue;
  }

  const dir = path.dirname(filePath);
  const filename = path.basename(filePath);
  const raw = fs.readFileSync(filePath, 'utf8');

  let parsed;
  try {
    parsed = matter(raw);
  } catch (err) {
    console.warn(`Skipping ${filePath}: could not parse frontmatter (${err.message})`);
    continue;
  }

  const title = parsed.data && parsed.data.title;
  if (!title || typeof title !== 'string') {
    console.warn(`Skipping ${filePath}: no string "title" frontmatter found`);
    continue;
  }

  const expectedSlug = createSlug(title);
  const actualSlug = filename.slice(0, -'.mdx'.length);

  if (!expectedSlug) {
    console.warn(`Skipping ${filePath}: computed slug is empty`);
    continue;
  }

  if (expectedSlug === actualSlug) continue;

  const newFilePath = path.join(dir, `${expectedSlug}.mdx`);

  if (fs.existsSync(newFilePath)) {
    console.warn(`Skipping rename of ${filePath}: target ${newFilePath} already exists`);
    continue;
  }

  console.log(`Renaming ${filePath} -> ${newFilePath} (title: "${title}")`);
  execFileSync('git', ['mv', filePath, newFilePath]);
  renamedCount++;
}

console.log(`Done. ${renamedCount} file(s) renamed.`);
