import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const missions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/missions' }),
  schema: z.object({
    title: z.string(),
    missionId: z.string(),
    shortDescription: z.string(),
    role: z.enum(['red', 'blue', 'red-blue']),
    difficulty: z.enum(['foundation', 'practitioner', 'advanced']),
    domains: z.array(z.string()),
    durationMinutes: z.number(),
    mode: z.enum(['individual', 'team', 'instructor-led']),
    environment: z.enum(['virtual', 'advanced-lab']),
    learningOutcomes: z.array(z.string()),
    prerequisites: z.array(z.string()).default([]),
    isFree: z.boolean().default(false),
    isFeatured: z.boolean().default(false),
    status: z.enum(['published', 'draft']).default('published'),
  }),
});

const threatTopics = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/threat-topics' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    summary: z.string(),
    affectedComponents: z.array(z.string()),
    defenderQuestions: z.array(z.string()),
    mitigationThemes: z.array(z.string()),
    relatedMissions: z.array(z.string()).default([]),
    references: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    publishedAt: z.coerce.date(),
    seoDescription: z.string(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    publishedAt: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()),
    category: z.enum(['blog', 'research']).default('blog'),
    relatedMissions: z.array(z.string()).default([]),
    seoDescription: z.string(),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    category: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { missions, threatTopics, blog, faq };
