import type { Collection } from "tinacms";

export const ReviewsCollection: Collection = {
  name: "reviews",
  label: "Reviews & Blogs",
  path: "src/content/reviews",
  format: "mdx",
  ui: {
    router({ document }) {
      // Remove .mdx extension for clean URLs
      const filename = document._sys.filename;
      // Remove .mdx extension if present
      const slug = filename.replace(/\.mdx$/, '');
      return `/reviews&blogs/${slug}`;
    },
  },
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
      required: false,
      ui: {
        dateFormat: "YYYY-MM-DD",
      },
    },
    {
      type: "string",
      name: "schrijver",
      label: "Schrijver",
      required: false,
    },
    {
      type: "string",
      name: "soort",
      label: "Soort",
      required: false,
      options: ["Film review", "TV review", "Blog"],
    },
    {
      type: "image",
      name: "thumbnail",
      label: "Thumbnail Afbeelding",
      required: false,
    },
    {
      type: "image",
      name: "poster",
      label: "Poster Afbeelding",
      required: false,
    },
    {
      type: "string",
      name: "summary",
      label: "Samenvatting",
      description: "Korte beschrijving voor previews",
      required: false,
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "slug",
      label: "Slug",
      description: "URL-vriendelijke versie van de titel",
      required: false,
    },
    {
      type: "number",
      name: "rating",
      label: "Rating",
      description: "Rating van 0 tot 5 (bijv. 3.5)",
      required: false,
      ui: {
        step: 0.5,
        min: 0,
        max: 5,
      },
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      required: false,
    },
    {
      type: "boolean",
      name: "featured",
      label: "Featured",
      description: "Is dit een featured review?",
      required: false,
    },
    {
      type: "string",
      name: "trailer",
      label: "YouTube Trailer ID",
      description: "Alleen het ID van de YouTube video (optioneel)",
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
