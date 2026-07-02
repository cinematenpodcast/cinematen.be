import { defineMiddleware } from "astro:middleware";
import { getCollection } from "astro:content";

// Reserved first-segment paths under /nieuws/ that are real routes, not article slugs.
const NIEUWS_RESERVED = new Set(["film", "serie", "tags", "pages", "14days"]);

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  const nieuwsMatch = pathname.match(/^\/nieuws\/([^/]+)\/?$/);
  if (nieuwsMatch && !NIEUWS_RESERVED.has(nieuwsMatch[1])) {
    const slug = decodeURIComponent(nieuwsMatch[1]);
    const posts = await getCollection("nieuws");
    const exists = posts.some((post) => post.id.replace(/\.mdx$/, "") === slug);
    if (!exists) {
      return context.redirect("/nieuws/", 301);
    }
  }

  const reviewsMatch = pathname.match(/^\/reviews(?:&|%26|&amp;)blogs\/([^/]+)\/?$/);
  if (reviewsMatch && reviewsMatch[1] !== "tags" && reviewsMatch[1] !== "pages") {
    const slug = decodeURIComponent(reviewsMatch[1]);
    const reviews = await getCollection("reviews");
    const exists = reviews.some((post) => post.id.replace(/\.mdx$/, "") === slug);
    if (!exists) {
      return context.redirect("/reviews&blogs/", 301);
    }
  }

  return next();
});
