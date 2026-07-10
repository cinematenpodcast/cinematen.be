// Rename safety net for src/content/nieuws and src/content/reviews.
//
// The public URL for these MDX files is driven by the FILENAME, not the
// frontmatter `slug` field (confirmed via src/pages/reviews&blogs/[...slug].astro).
// This script scans every .mdx file in both collections, recomputes the
// expected filename from the current `title` frontmatter using the exact
// same algorithm as src/lib/createSlug.ts, and `git mv`s any file whose
// filename has drifted from its title.
//
// Scans the full folder on every run (not a git-diff of changed files) on
// purpose — this avoids all the edge cases of diffing across force-pushes,
// squashed commits, or multi-commit pushes, at the cost of a few extra
// milliseconds reading ~800 small YAML files. Keep this in sync with
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

const CONTENT_DIRS = ['src/content/nieuws', 'src/content/reviews'];

let renamedCount = 0;

for (const dir of CONTENT_DIRS) {
  if (!fs.existsSync(dir)) {
    console.warn(`Skipping ${dir}: directory does not exist`);
    continue;
  }

  const filenames = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.mdx'))
    .map((entry) => entry.name);

  for (const filename of filenames) {
    const filePath = path.join(dir, filename);
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
}

console.log(`Done. ${renamedCount} file(s) renamed.`);
