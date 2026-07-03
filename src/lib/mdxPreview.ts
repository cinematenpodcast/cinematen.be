import { readFileSync } from "fs";
import { join } from "path";

// Astro 4.13 does not support the Content Layer "loader" API (added in 4.14+/5.0),
// so content.config.ts's custom TinaCMS loader never runs and post.data.body is never
// the TinaCMS rich-text AST that older code on this site assumed. Extract a plain-text
// preview directly from the MDX file instead, mirroring the working approach already
// used in NieuwsLayout.astro / BaseLayout.astro.
export function extractPreviewFromMDX(collection: "nieuws" | "reviews", slug: string | undefined | null, maxLength = 200): string {
  if (!slug) return "";
  try {
    const filePath = join(process.cwd(), `src/content/${collection}`, `${slug}.mdx`);
    const content = readFileSync(filePath, "utf-8");
    const withoutFrontmatter = content.replace(/^---[\s\S]*?---\s*\n\n?/m, "");
    const text = withoutFrontmatter
      .replace(/#{1,6}\s+/g, "")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\*([^*]+)\*/g, "$1")
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, "")
      .replace(/\s+/g, " ")
      .trim();
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  } catch {
    return "";
  }
}
