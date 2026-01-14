import { defineConfig } from "tinacms";

// This file is used to configure the TinaCMS admin interface
export default defineConfig({
  branch: "test-tinacms-indexing",
  clientId: "68f4665d-7d78-4cfc-90e0-236381fd6e9c", // Get this from tina.io
  token: "3f2958f6e4e7461c17694871029a66d6abfbcc34", // Get this from tina.io

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
      {
        name: "nieuws",
        label: "Nieuws Artikelen",
        path: "src/pages/nieuws",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titel",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Datum",
            required: true,
          },
          {
            type: "string",
            name: "soort",
            label: "Soort",
            required: false,
          },
          {
            type: "string",
            name: "thumbnail",
            label: "Thumbnail",
            required: false,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: false,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            required: false,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Inhoud",
            isBody: true,
            required: true,
          },
        ],
      },
    ],
  },
});
