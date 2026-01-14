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
        match: {
          exclude: ["pages/**", "tags/**", "**/*.astro"],
        },
        fields: [
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
            options: ["../../layouts/NieuwsLayout.astro"],
            ui: {
              component: "hidden",
            },
          },
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
            ui: {
              dateFormat: "YYYY-MM-DD",
            },
          },
          {
            type: "string",
            name: "soort",
            label: "Soort",
            required: true,
            options: ["Film", "TV", "Comics", "Trailer", "Casting"],
          },
          {
            type: "image",
            name: "thumbnail",
            label: "Thumbnail Afbeelding",
            required: true,
          },
          {
            type: "string",
            name: "trailer",
            label: "YouTube Trailer ID",
            description: "Alleen het ID van de YouTube video (bijv. 'dQw4w9WgXcQ')",
            required: false,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            description: "URL-vriendelijke versie van de titel",
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            description: "Is dit artikel nog een concept?",
            required: false,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            required: true,
            options: ["film", "tv", "comics", "trailer", "casting"],
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
      // Temporarily disabled to test indexing - the & character might be causing issues
      // {
      //   name: "reviews",
      //   label: "Reviews & Blogs",
      //   path: "src/pages/reviews&blogs",
      //   format: "mdx",
      //   match: {
      //     exclude: "**/pages/**",
      //   },
      //   fields: [
      //     {
      //       type: "string",
      //       name: "layout",
      //       label: "Layout",
      //       required: true,
      //       options: ["../../layouts/ReviewLayout.astro"],
      //       ui: {
      //         component: "hidden",
      //       },
      //     },
      //     {
      //       type: "string",
      //       name: "title",
      //       label: "Titel",
      //       isTitle: true,
      //       required: true,
      //     },
      //     {
      //       type: "datetime",
      //       name: "date",
      //       label: "Datum",
      //       required: true,
      //       ui: {
      //         dateFormat: "YYYY-MM-DD",
      //       },
      //     },
      //     {
      //       type: "string",
      //       name: "schrijver",
      //       label: "Schrijver",
      //       required: true,
      //     },
      //     {
      //       type: "string",
      //       name: "soort",
      //       label: "Soort",
      //       required: true,
      //       options: ["Film review", "TV review", "Blog"],
      //     },
      //     {
      //       type: "image",
      //       name: "thumbnail",
      //       label: "Thumbnail Afbeelding",
      //       required: true,
      //     },
      //     {
      //       type: "image",
      //       name: "poster",
      //       label: "Poster Afbeelding",
      //       required: true,
      //     },
      //     {
      //       type: "string",
      //       name: "summary",
      //       label: "Samenvatting",
      //       description: "Korte beschrijving voor previews",
      //       required: true,
      //       ui: {
      //         component: "textarea",
      //       },
      //     },
      //     {
      //       type: "string",
      //       name: "slug",
      //       label: "Slug",
      //       description: "URL-vriendelijke versie van de titel",
      //       required: true,
      //     },
      //     {
      //       type: "number",
      //       name: "rating",
      //       label: "Rating",
      //       description: "Rating van 0 tot 5 (bijv. 3.5)",
      //       required: false,
      //       ui: {
      //         step: 0.5,
      //         min: 0,
      //         max: 5,
      //       },
      //     },
      //     {
      //       type: "string",
      //       name: "tags",
      //       label: "Tags",
      //       list: true,
      //       required: true,
      //       options: ["Film", "TV", "science-fiction", "horror", "comedy", "drama", "action"],
      //     },
      //     {
      //       type: "boolean",
      //       name: "featured",
      //       label: "Featured",
      //       description: "Is dit een featured review?",
      //       required: false,
      //     },
      //     {
      //       type: "string",
      //       name: "trailer",
      //       label: "YouTube Trailer ID",
      //       description: "Alleen het ID van de YouTube video (optioneel)",
      //       required: false,
      //     },
      //     {
      //       type: "rich-text",
      //       name: "body",
      //       label: "Inhoud",
      //       isBody: true,
      //       required: true,
      //     },
      //   ],
      // },
    ],
  },
});
