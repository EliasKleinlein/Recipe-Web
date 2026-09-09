import dotenv from 'dotenv';
import { neon } from '@neondatabase/serverless';
import { seedRecipes } from '../src/data/seed-recipes';

dotenv.config({ path: '.env.local' });

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL fehlt');
}

const sql = neon(process.env.DATABASE_URL);

async function seed() {
  console.log('Seed startet ...');

  for (const recipe of seedRecipes) {
    await sql`
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
    `;

    console.log(`✓ ${recipe.title}`);
  }

  console.log(`Fertig: ${seedRecipes.length} Rezepte eingefügt.`);
}

seed().catch((error) => {
  console.error('Seed fehlgeschlagen:', error);
  process.exit(1);
});
