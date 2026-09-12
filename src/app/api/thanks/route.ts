import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { z } from "zod";

const SaveSchema = z.object({
  personId: z.string().min(1).max(50),
  message: z.string().trim().min(1).max(5000),
  token: z.string().min(20).max(200),
});

export async function GET() {
  try {
    const rows = await sql`
      SELECT person_id, name, message, updated_at
      FROM thank_you_messages
      ORDER BY id
    `;

    const messages = Object.fromEntries(
      rows.map((row) => [String(row.person_id), String(row.message ?? "")])
    );

    return NextResponse.json({ messages });
  } catch (error) {
    console.error("GET /api/thanks", error);
    return NextResponse.json(
      { error: "Einträge konnten nicht geladen werden." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = SaveSchema.parse(await request.json());

    const rows = await sql`
      UPDATE thank_you_messages
      SET
        message = ${body.message},
        updated_at = NOW()
      WHERE
        person_id = ${body.personId}
        AND edit_token = ${body.token}
      RETURNING person_id, name, message, updated_at
    `;

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Dieser persönliche Schreib-Link ist ungültig." },
        { status: 403 }
      );
    }

    return NextResponse.json({
      ok: true,
      entry: rows[0],
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Bitte einen gültigen Text eingeben." },
        { status: 400 }
      );
    }

    console.error("POST /api/thanks", error);

    return NextResponse.json(
      { error: "Der Eintrag konnte nicht gespeichert werden." },
      { status: 500 }
    );
  }
}
