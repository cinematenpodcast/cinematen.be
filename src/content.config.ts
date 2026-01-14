import { defineCollection, z } from "astro:content";
import client from "../tina/__generated__/client";

const nieuws = defineCollection({
  loader: async () => {
    const postsResponse = await client.queries.nieuwsConnection();

    // Map Tina posts to the correct format for Astro
    return postsResponse.data.nieuwsConnection.edges
      ?.filter((post) => !!post)
      .map((post) => {
        const node = post?.node;

        return {
          ...node,
          id: node?._sys.relativePath.replace(/\.mdx$/, ""), // Generate clean URLs without .mdx extension
          tinaInfo: node?._sys, // Include Tina system info if needed
        };
      });
  },
  schema: z.object({
    tinaInfo: z.object({
      filename: z.string(),
      basename: z.string(),
      path: z.string(),
      relativePath: z.string(),
    }).optional(),
    title: z.string(),
    date: z.coerce.date(),
    soort: z.string(),
    thumbnail: z.string(),
    trailer: z.string().optional(),
    slug: z.string(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()),
    body: z.any(),
  }),
});

const reviews = defineCollection({
  loader: async () => {
    const postsResponse = await client.queries.reviewsConnection();

    // Map Tina posts to the correct format for Astro
    return postsResponse.data.reviewsConnection.edges
      ?.filter((post) => !!post)
      .map((post) => {
        const node = post?.node;

        return {
          ...node,
          id: node?._sys.relativePath.replace(/\.mdx$/, ""), // Generate clean URLs without .mdx extension
          tinaInfo: node?._sys, // Include Tina system info if needed
        };
      });
  },
  schema: z.object({
    tinaInfo: z.object({
      filename: z.string(),
      basename: z.string(),
      path: z.string(),
      relativePath: z.string(),
    }).optional(),
    title: z.string(),
    date: z.coerce.date(),
    schrijver: z.string(),
    soort: z.string(),
    thumbnail: z.string(),
    poster: z.string(),
    summary: z.string(),
    slug: z.string(),
    rating: z.number().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().optional(),
    trailer: z.string().optional(),
    body: z.any(),
  }),
});

export const collections = { nieuws, reviews };
