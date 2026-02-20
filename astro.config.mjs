// Import necessary packages
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import tinaDirective from "./astro-tina-directive/register";

export default defineConfig({
  site: "https://cinematen.be",
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
    }),
    pagefind(),
    react(),
    tinaDirective(),
  ],
});