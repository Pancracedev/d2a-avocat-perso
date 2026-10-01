import { defineCollection, z } from 'astro:content'

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    slug: z.string(),
    lang: z.enum(['fr', 'en']),
    draft: z.boolean().default(false),
  }),
})

export const collections = {
  news,
}
