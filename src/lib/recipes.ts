import { sql } from "@/lib/db";
import { RecipeIdSchema, RecipeSchema } from "@/schemas/recipeSchema";
import { z } from "zod";

export async function getRecipes() {
  const recipes: unknown = await sql`
    SELECT *
    FROM recipes
    ORDER BY created_at DESC
  `;

  return z.array(RecipeSchema).parse(recipes);
}

export async function getRecipeById(id: number) {
  const recipeId = RecipeIdSchema.parse(id);
  const rows: unknown[] = await sql`
    SELECT *
    FROM recipes
    WHERE id = ${recipeId}
    LIMIT 1
  `;

  return rows[0] ? RecipeSchema.parse(rows[0]) : null;
}
