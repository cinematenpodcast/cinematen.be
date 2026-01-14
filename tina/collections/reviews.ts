import type { Collection } from "tinacms";

export const ReviewsCollection: Collection = {
  name: "reviews",
  label: "Reviews & Blogs",
  path: "src/pages/reviews&blogs",
  format: "mdx",
  match: {
    include: "*.mdx",
  },
  ui: {
    router({ document }) {
      return `/reviews&blogs/${document._sys.filename.replace(/\.mdx$/, "")}`;
    },
  },
  fields: [
    {
      type: "string",
      name: "layout",
      label: "Layout",
      required: true,
      options: ["../../layouts/ReviewLayout.astro"],
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
      name: "schrijver",
      label: "Schrijver",
      required: true,
    },
    {
      type: "string",
      name: "soort",
      label: "Soort",
      required: true,
      options: ["Film review", "TV review", "Blog"],
    },
    {
      type: "image",
      name: "thumbnail",
      label: "Thumbnail Afbeelding",
      required: true,
    },
    {
      type: "image",
      name: "poster",
      label: "Poster Afbeelding",
      required: true,
    },
    {
      type: "string",
      name: "summary",
      label: "Samenvatting",
      description: "Korte beschrijving voor previews",
      required: true,
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "slug",
      label: "Slug",
      description: "URL-vriendelijke versie van de titel",
      required: true,
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
      required: true,
      options: ["Film", "TV", "science-fiction", "horror", "comedy", "drama", "action"],
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
      required: true,
    },
  ],
};
