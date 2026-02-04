import type { Collection } from "tinacms";
import createSlug from "../../src/lib/createSlug";

// Function to convert title to slug
function generateSlugFromTitle(title: string): string {
  if (!title) return '';
  return createSlug(title);
}

export const NieuwsCollection: Collection = {
  name: "nieuws",
  label: "Nieuws Artikelen",
  path: "src/content/nieuws",
  format: "mdx",
  ui: {
    // FIX: Expliciet create en delete toestaan
    allowedActions: {
      create: true,
      delete: true,
    },
    router({ document }) {
      // Use slug from frontmatter if available, otherwise use filename
      const slug = (document as any).slug || document._sys.filename.replace(/\.mdx$/, '');
      return `/nieuws/${slug}`;
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
      description: "URL-vriendelijke versie van de titel (automatisch gegenereerd)",
      required: false,
      ui: {
        component: "hidden",
      },
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