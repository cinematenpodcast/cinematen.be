import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const nieuws = await getCollection('nieuws');
  const sorted = nieuws
    .filter(p => !p.data.draft)
    .sort((a, b) => new Date(b.data.date ?? 0).getTime() - new Date(a.data.date ?? 0).getTime())
    .slice(0, 50);

  return rss({
    title: 'Cinematen.be — Film & TV Nieuws',
    description: 'Het laatste film- en serienieuws van Cinematen.be',
    site: context.site ?? 'https://www.cinematen.be',
    items: sorted.map(post => ({
      title: post.data.title,
      pubDate: post.data.date ?? new Date(),
      description: post.data.bodyPreview ?? '',
      link: `/nieuws/${post.id.replace(/\.mdx$/, '')}`,
    })),
    customData: '<language>nl-be</language>',
  });
}
