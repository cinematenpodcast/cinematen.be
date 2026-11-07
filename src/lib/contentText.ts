import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Plain-text access to nieuws MDX bodies, keyed by URL slug.
 *
 * Content lives in year/month subfolders (`src/content/nieuws/2025/09/<slug>.mdx`),
 * so a flat `${slug}.mdx` lookup silently fails for almost every article — that
 * was the root cause of ~730 news pages falling back to the generic meta
 * description before the 2026-11 backfill. This module indexes the tree once
 * per build and caches the extracted text.
 */

const CONTENT_ROOT = join(process.cwd(), "src/content/nieuws");

let fileIndex: Map<string, string> | null = null;
const textCache = new Map<string, string>();

function buildIndex(): Map<string, string> {
  const map = new Map<string, string>();
  try {
    const entries = readdirSync(CONTENT_ROOT, { recursive: true }) as string[];
    for (const rel of entries) {
      if (!rel.endsWith(".mdx")) continue;
      const base = rel.split("/").pop()!.replace(/\.mdx$/, "");
      map.set(base, join(CONTENT_ROOT, rel));
    }
  } catch {
    // Content directory unavailable (e.g. isolated component preview): return empty.
  }
  return map;
}

export function getPlainTextFromMDX(slug?: string | null): string {
  if (!slug) return "";
  const cached = textCache.get(slug);
  if (cached !== undefined) return cached;

  if (!fileIndex) fileIndex = buildIndex();
  const filePath = fileIndex.get(slug);
  if (!filePath) {
    textCache.set(slug, "");
    return "";
  }

  try {
    const content = readFileSync(filePath, "utf-8");
    const withoutFrontmatter = content.replace(/^---[\s\S]*?---\s*\n\n?/m, "");
    const text = withoutFrontmatter
      .replace(/^import\s+.*$/gm, "")
      .replace(/^export\s+.*$/gm, "")
      .replace(/#{1,6}\s+/g, "")
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, "")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\*([^*]+)\*/g, "$1")
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim();
    textCache.set(slug, text);
    return text;
  } catch {
    textCache.set(slug, "");
    return "";
  }
}

/**
 * Meta-description length policy: Google truncates by pixel width around
 * 155–160 characters. Cut on a sentence boundary when one falls late enough,
 * otherwise on a word boundary, and never leave trailing punctuation dangling.
 */
export function clipDescription(text: string, limit = 155): string {
  const clean = (text || "").replace(/\s+/g, " ").trim();
  if (!clean) return "";
  if (clean.length <= limit) return clean;

  const window = clean.slice(0, limit);
  const sentenceCut = Math.max(
    window.lastIndexOf(". "),
    window.lastIndexOf("! "),
    window.lastIndexOf("? ")
  );
  if (sentenceCut >= limit * 0.6) return window.slice(0, sentenceCut + 1);

  const spaceCut = window.lastIndexOf(" ");
  const cut = spaceCut > 0 ? window.slice(0, spaceCut) : window;
  return cut.replace(/[,;:—–-]+$/, "").trimEnd() + "…";
}
