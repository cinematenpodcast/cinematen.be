import type { Collection } from "tinacms";

export const NieuwsCollection: Collection = {
  name: "nieuws",
  label: "Nieuws Artikelen",
  path: "src/content/nieuws",
  format: "mdx",
  ui: {
    router({ document }) {
      // Remove .mdx extension for clean URLs
      const filename = document._sys.filename;
      // Remove .mdx extension if present
      const slug = filename.replace(/\.mdx$/, '');
      return `/nieuws/${slug}`;
    },
  },
  fields: [
    {
      type: "string",
      name: "layout",
      label: "Layout",
      required: false,
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
      required: false,
      ui: {
        dateFormat: "YYYY-MM-DD",
      },
    },
    {
      type: "string",
      name: "soort",
      label: "Soort",
      required: false,
    },
    {
      type: "image",
      name: "thumbnail",
      label: "Thumbnail Afbeelding",
      required: false,
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
      required: false,
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
      required: false,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Inhoud",
      isBody: true,
      required: false,
    },
  ],
};
