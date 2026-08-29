import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog')).filter(post => !post.data.draft && post.data.publishedDate <= new Date()).sort((a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf());
  return rss({
    title: 'Academy4Tech', description: 'Engineering articles from Academy4Tech.', site: context.site,
    items: posts.map(post => ({ title: post.data.title, description: post.data.description, pubDate: post.data.publishedDate, link: `/blog/${post.id}/`, categories: [post.data.category, ...post.data.tags] })),
    customData: '<language>en</language>'
  });
}
