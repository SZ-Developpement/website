import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const result = await db.query(`
      SELECT p.*, 
        ARRAY_AGG(pm.member_id) FILTER (WHERE pm.member_id IS NOT NULL) as members
      FROM projects p
      LEFT JOIN project_members pm ON p.id = pm.project_id
      GROUP BY p.id
      ORDER BY p.created_at DESC
    `);

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
