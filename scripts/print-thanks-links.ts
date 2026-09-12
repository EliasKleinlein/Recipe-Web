import { config } from "dotenv";
import { neon } from "@neondatabase/serverless";

config({ path: ".env.local" });

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL fehlt");
  }

  const sql = neon(process.env.DATABASE_URL);

  const rows = await sql`
    SELECT person_id, name, edit_token
    FROM thank_you_messages
    ORDER BY id
  `;

  const baseUrl = "https://renkes-kochbuch.vercel.app";

  console.log("\nPersönliche Online-Links:\n");

  for (const row of rows) {
    console.log(
      `${row.name}: ${baseUrl}/danke-renke/eintrag/${row.person_id}?token=${row.edit_token}`
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
