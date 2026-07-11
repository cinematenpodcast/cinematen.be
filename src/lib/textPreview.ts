// Plain-text preview extraction from a raw Markdown/MDX body string.
//
// Astro's content collections always expose the raw source of a markdown/mdx
// entry as `entry.body` (a sibling of `entry.data`, not part of frontmatter) —
// true independent of which loader/schema is configured. mdxPreview.ts existed
// only because older code reached for `post.data.body` (always undefined; body
// isn't a frontmatter field) and worked around that by re-reading the file from
// disk. Reading `post.body` directly is simpler and avoids the extra disk I/O.
export function extractPreview(markdown: string | undefined | null, maxLength = 200): string {
  if (!markdown) return "";
  const text = markdown
    .replace(/#{1,6}\s+/g, "") // remove headers
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // links -> text
    .replace(/\*\*([^*]+)\*\*/g, "$1") // bold
    .replace(/\*([^*]+)\*/g, "$1") // italic
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "") // images
    .replace(/\s+/g, " ")
    .trim();
  if (!text) return "";
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
}
