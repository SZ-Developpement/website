import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET() {
  try {
    // Vérifie que l'utilisateur est connecté et a un profil membre lié
    const session = await getAdminSession();
    if (!session?.member_id) return NextResponse.json(null);

    // Récupère les informations du membre, y compris son stack technique
    const result = await db.query(
      `
      SELECT 
        m.*,
        ARRAY_AGG(DISTINCT jsonb_build_object('name', si.name, 'category', si.category, 'icon', si.icon))
          FILTER (WHERE si.id IS NOT NULL) as stack
      FROM members m
      LEFT JOIN member_stack ms ON m.id = ms.member_id
      LEFT JOIN stack_items si ON ms.stack_item_id = si.id
      WHERE m.id = $1
      GROUP BY m.id
    `,
      [session.member_id],
    );

    // Retourne les données du membre, ou null si aucune donnée n'est trouvée
    return NextResponse.json(result.rows[0] ?? null);
  } catch (error) {
    console.error(error);
    // En cas d'erreur, retourne une réponse d'erreur
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
