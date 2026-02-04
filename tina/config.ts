import { defineConfig } from "tinacms";
import { NieuwsCollection } from "./collections/nieuws";
import { ReviewsCollection } from "./collections/reviews";

const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";

export default defineConfig({
  branch,
  clientId: process.env.PUBLIC_TINA_CLIENT_ID || "68f4665d-7d78-4cfc-90e0-236381fd6e9c",
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
  schema: {
    collections: [
      NieuwsCollection,
      ReviewsCollection,
    ],
  },
});