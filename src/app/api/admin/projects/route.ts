import { NextRequest, NextResponse } from "next/server";
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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const result = await db.query(
      `INSERT INTO projects 
        (name, slug, category, type, status, year, short_desc, long_desc, stack, accent, gradient, github_url, demo_url, doc_url)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)
       RETURNING *`,
      [
        body.name,
        body.slug,
        body.category,
        body.type,
        body.status,
        body.year,
        body.short_desc,
        body.long_desc,
        body.stack,
        body.accent,
        body.gradient,
        body.github_url,
        body.demo_url,
        body.doc_url,
      ],
    );

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
