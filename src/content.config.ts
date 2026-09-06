import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const shared = {
  title: z.string(),
  description: z.string(),
  category: z.string(),
  tags: z.array(z.string()).default([]),
  image: z.string().default('/images/og-default.svg'),
  imageAlt: z.string(),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  publishedDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  youtube: z.string().url().optional(),
  github: z.string().url().optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional()
};

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    ...shared,
    author: z.string().default('Academy4Tech'),
    readingTime: z.string().optional()
  })
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    ...shared,
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    buildTime: z.string().optional(),
    technologies: z.array(z.string()).default([]),
    hardware: z.array(z.string()).default([]),
    software: z.array(z.string()).default([]),
    legacyUrl: z.string().optional()
  })
});

const tutorials = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tutorials' }),
  schema: z.object({
    ...shared,
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    technologies: z.array(z.string()).default([]),
    requirements: z.array(z.string()).default([]),
    legacyUrl: z.string().optional()
  })
});

const privacyPolicies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/privacy' }),
  schema: z.object({
    appName: z.string(),
    title: z.string(),
    description: z.string(),
    effectiveDate: z.coerce.date(),
    identifier: z.string().optional(),
    icon: z.string().default('board'),
    order: z.number().default(100)
  })
});

export const collections = { blog, projects, tutorials, privacyPolicies };
