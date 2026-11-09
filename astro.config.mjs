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


// Review-tag pages are only indexable when they have >= MIN_POSTS_TO_INDEX
// posts (see src/pages/reviews&blogs/tags/[tag].astro). The sitemap filter is
// URL-pattern based, so without this count it would keep submitting tag pages
// that serve `noindex, follow` — a sitemap/indexability conflict. Keyed by the
// lowercased tag slug, matching the URL segment.
function buildTagCounts(collectionDir) {
  const counts = new Map();
  let entries = [];
  try {
    entries = readdirSync(join(process.cwd(), collectionDir), { recursive: true }).filter((f) =>
      f.endsWith(".mdx")
    );
  } catch {
    return counts;
  }
  for (const rel of entries) {
    try {
      const content = readFileSync(join(process.cwd(), collectionDir, rel), "utf-8");
      const frontmatter = (content.match(/^---\r?\n([\s\S]*?)\r?\n---/) || [])[1] || "";
      const line = frontmatter.match(/^tags:\s*(.*)$/m);
      if (!line) continue;
      let values = [];
      const inline = line[1].trim();
      if (inline.startsWith("[")) {
        values = (inline.match(/"[^"]+"|'[^']+'|[A-Za-z0-9_-]+/g) || []).map((v) =>
          v.replace(/^["']|["']$/g, "")
        );
      } else {
        const rest = frontmatter.slice(line.index + line[0].length);
        const block = rest.match(/^\n((?:[ \t]+-[^\n]*\n?)+)/);
        if (block) {
          values = block[1]
            .split("\n")
            .map((v) => v.replace(/^[ \t]*-\s*/, "").trim().replace(/^["']|["']$/g, ""))
            .filter(Boolean);
        }
      }
      for (const value of values) {
        const key = value.toLowerCase().trim();
        if (key) counts.set(key, (counts.get(key) || 0) + 1);
      }
    } catch {
      // Skip unreadable files; those tags fall back to excluded (below threshold).
    }
  }
  return counts;
}

const reviewTagCounts = buildTagCounts("src/content/reviews");

// Keep in sync with src/pages/reviews&blogs/tags/[tag].astro
const MIN_POSTS_TO_INDEX = 3;

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
      //
      // /nieuws/ and /reviews&blogs/ (bare index) are pure 301 redirects to
      // .../pages/1/ (see src/pages/nieuws/index.astro) — a redirect target
      // has no business in a sitemap regardless of whether it renders
      // correctly, so these are excluded explicitly rather than relying on
      // the prerender=false switch alone to keep them out.
      filter: (page) => {
        const reviewTag = page.match(/\/reviews&blogs\/tags\/([^/]+)\/?$/);
        if (reviewTag) {
          let slug = reviewTag[1];
          try {
            slug = decodeURIComponent(slug);
          } catch {
            // Not percent-encoded; use as-is.
          }
          if ((reviewTagCounts.get(slug.toLowerCase()) || 0) < MIN_POSTS_TO_INDEX) {
            return false;
          }
        }
        return (
          // Page 1 of each section is the indexable landing page (page 2+ is
          // noindex, follow), so only the numbered pages above 1 are excluded.
          (!page.includes('/nieuws/pages/') || /\/nieuws\/pages\/1\/?$/.test(page)) &&
          (!page.includes('/reviews&blogs/pages/') || /\/reviews&blogs\/pages\/1\/?$/.test(page)) &&
          !/\/search\/?$/.test(page) &&
          !/^https?:\/\/[^/]+\/nieuws\/?$/.test(page) &&
          !/^https?:\/\/[^/]+\/reviews&blogs\/?$/.test(page) &&
          !/\/nieuws\/tags\/[^/]+\/\d+\/?$/.test(page) &&
          !/\/reviews&blogs\/tags\/[^/]+\/\d+\/?$/.test(page) &&
          !page.includes('/nieuws/14days')
        );
      },
      serialize(item) {
        const match = item.url.match(/\/(nieuws|reviews&blogs)\/([^/]+)\/?$/);
        let lastmod = new Date().toISOString();
        if (match) {
          const [, section, slug] = match;
          const dateMap = section === "nieuws" ? nieuwsDates : reviewDates;
          // Sitemap URLs are percent-encoded ("timoth%C3%A9e-…") while the date
          // map is keyed by the raw frontmatter basename ("timothée-…"); without
          // decoding, those entries silently fall back to the build timestamp.
          let lookup = slug;
          try {
            lookup = decodeURIComponent(slug);
          } catch {
            // Not percent-encoded; use as-is.
          }
          lastmod = dateMap.get(lookup) || lastmod;
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