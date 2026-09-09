import { z } from 'zod';

export const RecipeIdSchema = z.number().int().positive();

export const RecipeSchema = z.object({
  id: RecipeIdSchema,
  title: z.string(),
  original_title: z.string(),
  category: z.string(),
  duration: z.number().int(),
  servings: z.number().int(),
  image: z.string().nullable(),
  ingredients: z.string(),
  instructions: z.string(),
  notes: z.string().nullable(),
  tags: z.string().nullable(),
  created_at: z.coerce.date(),
});

export const RecipeFormSchema = z.object({
  title: z.string().trim().min(1, 'Titel fehlt'),
  original_title: z.string().trim().min(1, 'Originaltitel fehlt'),
  category: z.string().trim().min(1, 'Kategorie fehlt'),
  duration: z.coerce.number().int().positive(),
  servings: z.coerce.number().int().positive(),
  image: z.string().trim().optional(),
  ingredients: z.string().trim().min(1, 'Zutaten fehlen'),
  instructions: z.string().trim().min(1, 'Zubereitung fehlt'),
  notes: z.string().trim().optional(),
  tags: z.string().trim().optional(),
});

export type RecipeData = z.infer<typeof RecipeSchema>;
