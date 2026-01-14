import { defineCollection, z } from "astro:content";
import client from "../tina/__generated__/client";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

// Function to extract text from MDX file for preview
function extractTextFromMDX(filePath: string): string {
  try {
    const content = readFileSync(filePath, "utf-8");
    if (!content || content.trim().length === 0) {
      console.warn(`[extractTextFromMDX] Empty file: ${filePath}`);
      return "";
    }
    
    // Remove frontmatter (more robust regex)
    const withoutFrontmatter = content.replace(/^---[\s\S]*?---\s*\n\n?/m, "");
    
    // Remove markdown syntax
    const text = withoutFrontmatter
      .replace(/#{1,6}\s+/g, "") // Remove headers
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Convert links
      .replace(/\*\*([^*]+)\*\*/g, "$1") // Remove bold
      .replace(/\*([^*]+)\*/g, "$1") // Remove italic
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, "") // Remove images
      .replace(/\s+/g, " ") // Normalize whitespace
      .trim();
    
    if (!text || text.length === 0) {
      console.warn(`[extractTextFromMDX] No text extracted from: ${filePath}`);
      return "";
    }
    
    const preview = text.substring(0, 200) + (text.length > 200 ? "..." : "");
    return preview;
  } catch (e) {
    console.error(`[extractTextFromMDX] Error reading ${filePath}:`, e);
    return "";
  }
}

const nieuws = defineCollection({
  loader: async () => {
    const postsResponse = await client.queries.nieuwsConnection();

    // Map Tina posts to the correct format for Astro
    return postsResponse.data.nieuwsConnection.edges
      ?.filter((post) => !!post)
      .map((post) => {
        const node = post?.node;
        const relativePath = node?._sys.relativePath;
        
        // Extract text preview directly from MDX file
        let bodyPreview = "";
        if (relativePath) {
          const filePath = join(process.cwd(), "src/content/nieuws", relativePath);
          
          // Debug: log first few posts
          const isFirstPost = postsResponse.data.nieuwsConnection.edges?.indexOf(post) === 0;
          if (isFirstPost) {
            console.log('\n=== DEBUG CONTENT CONFIG ===');
            console.log('relativePath:', relativePath);
            console.log('process.cwd():', process.cwd());
            console.log('filePath:', filePath);
            console.log('File exists check:', existsSync(filePath));
          }
          
          bodyPreview = extractTextFromMDX(filePath);
          
          if (isFirstPost) {
            console.log('bodyPreview length:', bodyPreview.length);
            console.log('bodyPreview preview:', bodyPreview.substring(0, 100));
            console.log('============================\n');
          }
        } else {
          // Debug: log if relativePath is missing
          if (postsResponse.data.nieuwsConnection.edges?.indexOf(post) === 0) {
            console.log('\n=== DEBUG CONTENT CONFIG - NO RELATIVEPATH ===');
            console.log('node?._sys:', node?._sys);
            console.log('============================\n');
          }
        }

        return {
          ...node,
          id: relativePath.replace(/\.mdx$/, ""), // Generate clean URLs without .mdx extension
          tinaInfo: node?._sys, // Include Tina system info if needed
          bodyPreview, // Add preview text extracted from file
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
    bodyPreview: z.string().optional(), // Preview text extracted from MDX file
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
