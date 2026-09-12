import { config } from "dotenv";
import { neon } from "@neondatabase/serverless";
import crypto from "node:crypto";

config({ path: ".env.local" });

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL fehlt");
  }

  const sql = neon(process.env.DATABASE_URL);

  const people = [
    ["muju", "Muju"],
    ["elias", "Elias"],
    ["eric", "Eric"],
    ["marco", "Marco"],
    ["christoph", "Christopher"],
    ["kevin", "Kevin"],
    ["niko", "Niko"],
    ["marlin", "Marlin"],
    ["daniel", "Daniel"],
    ["pavel", "Pavel"],
  ] as const;

  await sql`
    CREATE TABLE IF NOT EXISTS thank_you_messages (
      id SERIAL PRIMARY KEY,
      person_id TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      message TEXT NOT NULL DEFAULT '',
      edit_token TEXT UNIQUE NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  for (const [personId, name] of people) {
    const token = crypto.randomBytes(24).toString("hex");

    await sql`
      INSERT INTO thank_you_messages
        (person_id, name, message, edit_token)
      VALUES
        (${personId}, ${name}, '', ${token})
      ON CONFLICT (person_id) DO NOTHING
    `;
  }

  const rows = await sql`
    SELECT person_id, name, edit_token
    FROM thank_you_messages
    ORDER BY id
  `;

  console.log("\n✅ Dankes-Tabelle ist bereit.\n");
  console.log("Persönliche Links:\n");

  for (const row of rows) {
    console.log(
      `${row.name}: http://localhost:3002/danke-renke/eintrag/${row.person_id}?token=${row.edit_token}`
    );
  }
}

main().catch((error) => {
  console.error("\n❌ Einrichtung fehlgeschlagen:");
  console.error(error);
  process.exit(1);
});
