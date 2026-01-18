// Import necessary packages
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import tinaDirective from "./astro-tina-directive/register";

// Export the combined configuration
export default defineConfig({
  output: "hybrid",
  adapter: vercel(),

  // Define routes for dynamic pagination
  routes: [
    {
      // Define dynamic route for news pagination
      pattern: '/nieuws/page/:page',
      // Add any specific setup if needed
    },
    {
      // Define dynamic route for reviews & blogs pagination
      pattern: '/reviews&blogs/page/:page',
      // Add any specific setup if needed
    }
  ],

  // Integrations section
  integrations: [
    mdx(),
    pagefind(),
    react(),
    tinaDirective(),
  ],
});