import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '@/data/site.config';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const recipes = await getCollection('recipes', ({ data }) => !data.draft);
  const reviews = await getCollection('reviews', ({ data }) => !data.draft);
  const essays = await getCollection('essays', ({ data }) => !data.draft);
  const features = await getCollection('features', ({ data }) => !data.draft);

  // Combine and sort all content by date
  const allContent = [
    ...recipes.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.publishedDate,
      link: `/recipes/${item.slug}/`,
      categories: ['Recipes', item.data.category],
    })),
    ...reviews.map((item) => ({
      title: `${item.data.restaurantName} - ${item.data.city}`,
      description: item.data.description,
      pubDate: item.data.publishedDate,
      link: `/reviews/${item.slug}/`,
      categories: ['Reviews', item.data.city],
    })),
    ...essays.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.publishedDate,
      link: `/essays/${item.slug}/`,
      categories: ['Essays'],
    })),
    ...features.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.publishedDate,
      link: `/features/${item.slug}/`,
      categories: ['Chef vs. Home Cook'],
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: siteConfig.name,
    description: siteConfig.description,
    site: context.site || siteConfig.url,
    items: allContent.map((item) => ({
      title: item.title,
      description: item.description,
      pubDate: item.pubDate,
      link: item.link,
      categories: item.categories,
    })),
    customData: `<language>en-us</language>`,
  });
}
