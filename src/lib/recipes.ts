import { sql } from '@/lib/db';
import { RecipeSchema } from '@/schemas/recipeSchema';
import { z } from 'zod';

export async function getRecipes() {
  const recipes: unknown = await sql`
    SELECT *
    FROM recipes
    ORDER BY created_at DESC
  `;

  return z.array(RecipeSchema).parse(recipes);
}
