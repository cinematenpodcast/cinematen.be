// Import necessary packages
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// astro.config.mjs runs outside Astro's own pipeline, so `astro:content` isn't
// available here for sitemap.serialize() to pull real per-article dates from.
// Read each collection's MDX frontmatter directly instead, once at config-eval
// time, so the sitemap can carry real lastmod dates instead of the build timestamp.
//
// Content lives in YYYY/MM subfolders (organized by scripts/organize-content.mjs),
// so this walks recursively — `{ recursive: true }` (Node 20.1+) returns every
// nested file/dir as a path relative to `collectionDir`, e.g. "2026/07/x.mdx".
// The map is keyed by basename only (matching slugFromEntryId in src/lib/format.ts),
// since that's what the URL slug — and thus serialize()'s regex match below — is.
function buildDateMap(collectionDir) {
  const map = new Map();
  let entries = [];
  try {
    entries = readdirSync(join(process.cwd(), collectionDir), { recursive: true }).filter((f) =>
      f.endsWith(".mdx")
    );
  } catch {
    return map;
  }
  for (const relPath of entries) {
    try {
      const content = readFileSync(join(process.cwd(), collectionDir, relPath), "utf-8");
      const match = content.match(/^date:\s*['"]?([^'"\n]+)['"]?\s*$/m);
      if (match) {
        const date = new Date(match[1]);
        if (!isNaN(date.getTime())) {
          const basename = relPath.split("/").pop().replace(/\.mdx$/, "");
          map.set(basename, date.toISOString());
        }
      }
    } catch {
      // Skip unreadable files; those URLs fall back to the build timestamp.
    }
  }
  return map;
}

const nieuwsDates = buildDateMap("src/content/nieuws");
const reviewDates = buildDateMap("src/content/reviews");

export default defineConfig({
  site: "https://www.cinematen.be",
  output: "hybrid",
  adapter: vercel(),

  routes: [
    {
      pattern: '/nieuws/page/:page',
    },
    {
      pattern: '/reviews&blogs/page/:page',
    }
  ],

  integrations: [
    mdx(),
    sitemap({
      // Numbered tag-pagination sub-pages (/nieuws/tags/:tag/2, etc.) stay
      // noindexed (ListingShell's default BaseHeadExclude) and excluded here
      // — but the bare /nieuws/tags/:tag and /reviews&blogs/tags/:tag pages
      // are now real, sometimes-indexable landing pages (see
      // src/pages/nieuws/tags/[tag].astro), so only exclude the numbered
      // variant, not the tag root itself.
      filter: (page) =>
        !page.includes('/nieuws/pages/') &&
        !page.includes('/reviews&blogs/pages/') &&
        !/\/nieuws\/tags\/[^/]+\/\d+\/?$/.test(page) &&
        !/\/reviews&blogs\/tags\/[^/]+\/\d+\/?$/.test(page) &&
        !page.includes('/nieuws/14days'),
      serialize(item) {
        const match = item.url.match(/\/(nieuws|reviews&blogs)\/([^/]+)\/?$/);
        let lastmod = new Date().toISOString();
        if (match) {
          const [, section, slug] = match;
          const dateMap = section === "nieuws" ? nieuwsDates : reviewDates;
          lastmod = dateMap.get(slug) || lastmod;
        }
        return {
          ...item,
          lastmod,
        };
      },
    }),
    pagefind(),
    react(),
  ],
});