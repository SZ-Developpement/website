import bcrypt from "bcrypt";

async function main() {
  const password = "ton_mot_de_passe_ici";
  const hash = await bcrypt.hash(password, 10);
  console.log(hash);
}

main();
