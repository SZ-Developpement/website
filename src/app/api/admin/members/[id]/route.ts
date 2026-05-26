import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// Liste des champs autorisés à être mis à jour
const ALLOWED_FIELDS = [
  "name",
  "alias",
  "role",
  "spec",
  "formation",
  "localisation",
  "age",
  "bio",
  "github",
  "linkedin",
  "portfolio",
  "avatar",
];

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    // Récupère l'ID du membre à partir des paramètres de l'URL
    const { id } = await params;
    const body = await req.json();

    // Vérifie que le champ à mettre à jour est autorisé
    const field = Object.keys(body)[0];

    // Si le champ n'est pas dans la liste des champs autorisés, retourne une erreur
    if (!ALLOWED_FIELDS.includes(field)) {
      return NextResponse.json(
        { error: "Champ non autorisé" },
        { status: 400 },
      );
    }

    // Met à jour le champ dans la base de données
    await db.query(`UPDATE members SET ${field} = $1 WHERE id = $2`, [
      body[field],
      id,
    ]);

    // Retourne une réponse de succès
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    // En cas d'erreur, retourne une réponse d'erreur
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
