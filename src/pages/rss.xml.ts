import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { extractPreview } from '../lib/textPreview';
import { slugFromEntryId } from '../lib/format';

// Was nieuws-only — GEO audit (2026-07-26) flagged this as an underused
// AI-ingestion path since reviews (the site's other main content type)
// weren't in it at all. Merged into one combined feed rather than adding a
// second route, sorted by date across both collections.
export async function GET(context: APIContext) {
  const [nieuws, reviews] = await Promise.all([getCollection('nieuws'), getCollection('reviews')]);

  const nieuwsItems = nieuws
    .filter(p => !p.data.draft)
    .map(post => ({
      title: post.data.title,
      pubDate: post.data.date ?? new Date(),
      description: post.data.summary || extractPreview(post.body),
      link: `/nieuws/${slugFromEntryId(post.id)}`,
    }));

  const reviewItems = reviews
    .filter(p => !p.data.draft)
    .map(post => ({
      title: post.data.title,
      pubDate: post.data.date ?? new Date(),
      description: post.data.summary || extractPreview(post.body),
      link: `/reviews&blogs/${slugFromEntryId(post.id)}`,
    }));

  const combined = [...nieuwsItems, ...reviewItems]
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
    .slice(0, 75);

  return rss({
    title: 'Cinematen.be — Film & TV Nieuws en Reviews',
    description: 'Het laatste film- en serienieuws en de nieuwste reviews van Cinematen.be',
    site: context.site ?? 'https://www.cinematen.be',
    items: combined,
    customData: '<language>nl-be</language>',
  });
}
