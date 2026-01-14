import { defineConfig } from "tinacms";
import { NieuwsCollection } from "./collections/nieuws";
import { ReviewsCollection } from "./collections/reviews";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

import createSlug from "../src/lib/createSlug";

// Function to generate slug from title
function generateSlugFromTitle(title: string): string {
  if (!title) return '';
  return createSlug(title);
}

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.PUBLIC_TINA_CLIENT_ID || "68f4665d-7d78-4cfc-90e0-236381fd6e9c",
  // Get this from tina.io
  token: process.env.TINA_TOKEN || "3f2958f6e4e7461c17694871029a66d6abfbcc34",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      NieuwsCollection,
      ReviewsCollection,
    ],
  },
});
