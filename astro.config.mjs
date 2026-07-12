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
function buildDateMap(collectionDir) {
  const map = new Map();
  let files = [];
  try {
    files = readdirSync(join(process.cwd(), collectionDir)).filter((f) => f.endsWith(".mdx"));
  } catch {
    return map;
  }
  for (const file of files) {
    try {
      const content = readFileSync(join(process.cwd(), collectionDir, file), "utf-8");
      const match = content.match(/^date:\s*['"]?([^'"\n]+)['"]?\s*$/m);
      if (match) {
        const date = new Date(match[1]);
        if (!isNaN(date.getTime())) {
          map.set(file.replace(/\.mdx$/, ""), date.toISOString());
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
      filter: (page) =>
        !page.includes('/nieuws/pages/') &&
        !page.includes('/reviews&blogs/pages/') &&
        !page.includes('/nieuws/tags/') &&
        !page.includes('/reviews&blogs/tags/') &&
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