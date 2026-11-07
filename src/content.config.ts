import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const actividades = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/actividades' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    tipo: z.enum(['concurso', 'entrenamiento', 'taller', 'divulgacion']),
    ambito: z.string(),
    estado: z.string(),
    formato: z.string(),
    lugar: z.string(),
    fecha: z.string().optional(),
    destacado: z.boolean().default(false),
  }),
});

export const collections = { actividades };
