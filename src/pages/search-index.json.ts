import { getCollection } from 'astro:content';
import { topics } from '@/data/site';
import { androidApps } from '@/data/apps';
import { isPublished } from '@/utils/content';

export async function GET() {
  const [projects, tutorials, posts] = await Promise.all([getCollection('projects'), getCollection('tutorials'), getCollection('blog')]);
  const clean = (value: string) => value.replace(/```[\s\S]*?```/g, ' ').replace(/[#>*_`\[\]()!-]/g, ' ').replace(/\s+/g, ' ').trim();
  const items = [
    { type: 'Page', title: 'Academy4Tech Community', description: 'Verified community channels, collaboration guidelines and the future Discord invite.', url: '/community', keywords: 'community Discord GitHub YouTube LinkedIn Instagram Facebook learners builders' },
    { type: 'Page', title: 'Course Interest Form', description: 'Share the engineering topics, experience level and learning format you want.', url: '/courses/interest', keywords: 'course interest enrollment learners students robotics IoT Python AI Arduino form' },
    { type: 'Page', title: 'Academy4Tech Android Apps', description: 'Education and productivity apps developed by Academy4Tech.', url: '/apps', keywords: 'Android apps Google Play Academy4Tech education tools' },
    ...androidApps.map(app => ({ type: 'Android app', title: app.name, description: app.description, url: '/apps', keywords: [app.category, app.audience, app.packageName].join(' ') })),
    ...topics.map(topic => ({ type: 'Learning topic', title: topic.name, description: topic.description, url: `/learn/${topic.slug}`, keywords: [topic.name, ...topic.tools, topic.description].join(' ') })),
    ...projects.filter(isPublished).map(entry => ({ type: 'Project', title: entry.data.title, description: entry.data.description, url: `/projects/${entry.id}`, keywords: [entry.data.category, ...entry.data.tags, ...entry.data.technologies, clean(String(entry.body ?? ''))].join(' ') })),
    ...tutorials.filter(isPublished).map(entry => ({ type: 'Tutorial', title: entry.data.title, description: entry.data.description, url: `/tutorials/${entry.id}`, keywords: [entry.data.category, ...entry.data.tags, ...entry.data.technologies, clean(String(entry.body ?? ''))].join(' ') })),
    ...posts.filter(isPublished).map(entry => ({ type: 'Article', title: entry.data.title, description: entry.data.description, url: `/blog/${entry.id}`, keywords: [entry.data.category, ...entry.data.tags, clean(String(entry.body ?? ''))].join(' ') }))
  ];
  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=0, must-revalidate' } });
}
