import fs from "node:fs";
import dotenv from "dotenv";
import { neon } from "@neondatabase/serverless";

dotenv.config({ path: ".env.local" });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL fehlt");
}

const sql = neon(process.env.DATABASE_URL);
const source = fs.readFileSync("src/data/seed-recipes.ts", "utf8");

const blocks = source.split(/\n\s*},\s*\n/g);

const entries: Array<{
  title: string;
  originalTitle: string;
  image: string;
}> = [];

for (const block of blocks) {
  const title =
    block.match(/title:\s*["']([^"']+)["']/)?.[1];

  const originalTitle =
    block.match(/original_title:\s*["']([^"']+)["']/)?.[1];

  const image =
    block.match(/image:\s*["']([^"']+)["']/)?.[1];

  if (title && originalTitle && image) {
    entries.push({
      title,
      originalTitle,
      image,
    });
  }
}

async function main() {
  let updated = 0;

  for (const recipe of entries) {
    const result = await sql`
      UPDATE recipes
      SET image = ${recipe.image}
      WHERE title = ${recipe.title}
         OR original_title = ${recipe.originalTitle}
      RETURNING id
    `;

    if (result.length > 0) {
      updated += result.length;
      console.log(`✓ ${recipe.title}`);
    }
  }

  console.log("");
  console.log(`✅ Fertig: ${updated} Rezeptbilder synchronisiert.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
