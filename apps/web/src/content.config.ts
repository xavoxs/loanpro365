import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Blog bilingüe: cada artículo existe en `en` y `es` y comparte `translationKey`. */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['en', 'es']),
    slug: z.string(),
    translationKey: z.string(),
    publishedAt: z.coerce.date(),
    source: z.string().optional(),
    /** Ruta de aprendizaje: posición del artículo en la serie (1 = primero). */
    series: z.enum(['buyer']).optional(),
    order: z.number().int().positive().optional(),
    /** Herramienta que el artículo pone en práctica. */
    tool: z.string().optional(),
  }),
});

export const collections = { blog };
