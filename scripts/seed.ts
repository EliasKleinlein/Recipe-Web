import dotenv from "dotenv";
import { neon } from "@neondatabase/serverless";
import { seedRecipes } from "../src/data/seed-recipes";
import { specialRecipes } from "../src/data/special-recipes";

dotenv.config({ path: ".env.local" });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL fehlt");
}

const sql = neon(process.env.DATABASE_URL);

async function seed() {
  const recipes = [...seedRecipes, ...specialRecipes];

  console.log("Seed startet ...");

  for (const recipe of recipes) {
    const result = await sql`
      INSERT INTO recipes (
        title,
        original_title,
        category,
        duration,
        servings,
        image,
        ingredients,
        instructions,
        notes,
        tags
      )
      VALUES (
        ${recipe.title},
        ${recipe.original_title},
        ${recipe.category},
        ${recipe.duration},
        ${recipe.servings},
        ${recipe.image},
        ${recipe.ingredients},
        ${recipe.instructions},
        ${recipe.notes},
        ${recipe.tags}
      )
      ON CONFLICT (original_title)
      DO NOTHING
      RETURNING id
    `;

    if (result.length > 0) {
      console.log(`✓ eingefügt: ${recipe.title}`);
    } else {
      console.log(`↷ vorhanden: ${recipe.title}`);
    }
  }

  console.log(`Fertig: ${recipes.length} Rezepte geprüft.`);
}

seed().catch((error) => {
  console.error("Seed fehlgeschlagen:", error);
  process.exit(1);
});
