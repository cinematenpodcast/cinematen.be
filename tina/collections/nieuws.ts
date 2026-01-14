import type { Collection } from "tinacms";

export const NieuwsCollection: Collection = {
  name: "nieuws",
  label: "Nieuws Artikelen",
  path: "src/pages/nieuws",
  format: "md",
  match: {
    include: "*.md",
  },
  ui: {
    router({ document }) {
      return `/nieuws/${document._sys.filename.replace(/\.md$/, "")}`;
    },
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
};
