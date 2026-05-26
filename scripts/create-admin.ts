// scripts/create-admin.ts
import "dotenv/config";
import bcrypt from "bcrypt";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

async function main() {
  const email = "ton@email.com";
  const password = "ton_mot_de_passe";
  const memberId = "alexis-djs";

  const hash = await bcrypt.hash(password, 10);

  await pool.query(
    `INSERT INTO members (id, name, role) 
     VALUES ($1, $2, $3) 
     ON CONFLICT (id) DO NOTHING`,
    [memberId, "Nom Prénom", "Rôle"],
  );

  await pool.query(
    `INSERT INTO admins (email, password, member_id) 
     VALUES ($1, $2, $3) 
     ON CONFLICT (email) DO NOTHING`,
    [email, hash, memberId],
  );

  console.log(`Admin créé : ${email} → membre : ${memberId}`);
  await pool.end();
}

main();
