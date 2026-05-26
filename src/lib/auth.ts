import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { db } from "./db";

export async function getAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get("sz_admin_token")?.value;

  if (!token) return null;

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET!),
    );

    const session = payload as { id: number; email: string };

    // Récupère le profil membre lié si il existe
    const result = await db.query(
      `SELECT a.id, a.email, a.member_id, m.*
      FROM admins a
      LEFT JOIN members m ON a.member_id = m.id
      WHERE a.id = $1`,
      [session.id],
    );

    return result.rows[0] ?? null;
  } catch {
    return null;
  }
}
