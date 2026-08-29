export const slugify = (value: string) => value.toLowerCase().trim().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
export const formatDate = (date: Date) => new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric' }).format(date);
export const isPublished = (entry: { data: { draft: boolean; publishedDate: Date } }) => !entry.data.draft && entry.data.publishedDate <= new Date();
