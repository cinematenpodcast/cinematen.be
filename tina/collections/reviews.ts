import type { Collection } from "tinacms";
import createSlug from "../../src/lib/createSlug";

// Function to convert title to slug
function generateSlugFromTitle(title: string): string {
  if (!title) return '';
  return createSlug(title);
}

export const ReviewsCollection: Collection = {
  name: "reviews",
  label: "Reviews & Blogs",
  path: "src/content/reviews",
  format: "mdx",
  ui: {
    router({ document }) {
      // Use slug from frontmatter if available, otherwise use filename
      const slug = (document as any).slug || document._sys.filename.replace(/\.mdx$/, '');
      return `/reviews&blogs/${slug}`;
    },
    filename: {
      slugify: (values: any) => {
        // Generate filename from title
        if (values?.title) {
          return generateSlugFromTitle(values.title);
        }
        return values?.slug || 'untitled';
      },
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
      description: "URL-vriendelijke versie van de titel (automatisch gegenereerd)",
      required: false,
      ui: {
        component: "hidden",
      },
    },
    {
      type: "number",
      name: "rating",
      label: "Rating",
      description: "Rating van 0 tot 5 (bijv. 3.5)",
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
