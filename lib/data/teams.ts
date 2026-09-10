import { TeamMemberProps } from "@/types/type";

// fonction qui calcule lage par rapport a la date de naissance
export function calculateAge(birthDate: string): number {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
}

export const teams: TeamMemberProps[] = [
  {
    slug: "alexis-djs",
    name: "Alexis DE JESUS",
    pseudo: "Flytzi",
    role: "Fondateur & Développeur Full-Stack",
    tags: ["Full Stack", "Architecture"],
    formation: "BTS SIO SLAM – 2ème année",
    location: "France",
    age: calculateAge("2006-11-10"),
    description:
      "Un développeur passionné qui aime créer des applications incroyables.",
    bio: "Alexis DE JESUS, alias Flytzi, est un jeune prodige de la programmation. À seulement 19 ans, il a déjà une maîtrise impressionnante de Next.js et Node.js, ce qui lui permet de concevoir des architectures robustes et évolutives pour nos projets. En tant que fondateur de notre équipe, Alexis apporte une vision claire et une énergie débordante à chaque étape du développement. Son approche méthodique et sa capacité à résoudre les problèmes complexes font de lui un leader naturel et un développeur Full-Stack exceptionnel.",
    githubUrl: "https://github.com/FlytziTv",
    linkedinUrl: "https://www.linkedin.com/in/alexis-dejesus/",
    portfolioUrl: "https://www.aalexis.fr",
    languages: ["TypeScript", "SQL", "Lua", "HTML", "CSS"],
    stack: ["Next.js", "React", "Node.js", "NeonDB", "Tailwind CSS"],
    projects: ["Absolute Stream", "Nono's Cook", "Devis et Facture"],
    accent: "#6E9BFF",
    color1: "#FF4D4D",
    color2: "#8C0F2E",
  },
  {
    slug: "thomas-mtt",
    name: "Thomas MONTOUT",
    pseudo: "Tae_Vie",
    role: "Développeur Backend",
    tags: ["Back-end", "Game Design"],
    formation: "BTS SIO SLAM – 2ème année",
    location: "France",
    age: calculateAge("1999-09-21"),
    description:
      "Un développeur backend passionné par les jeux vidéo et les serveurs performants.",
    bio: "Thomas MONTOUT, connu sous le pseudonyme Tae_Vie, est un développeur backend talentueux avec une passion pour les jeux vidéo. Il se spécialise dans la création de serveurs de jeux performants et ludiques en utilisant Node.js et Phaser. Son expertise en développement backend lui permet de concevoir des architectures solides qui supportent des expériences de jeu immersives. En plus de ses compétences techniques, Thomas apporte une touche créative à chaque projet, faisant de lui un membre essentiel de notre équipe.",
    githubUrl: "https://github.com/thomas-montout",
    linkedinUrl: "https://www.linkedin.com/in/thomas-montout",
    portfolioUrl: "https://thomas-montout.github.io/Portfolio/",
    languages: ["JavaScript", "PHP", "SQL", "HTML", "CSS"],
    stack: ["Node.js", "Phaser", "Next.js", "React"],
    projects: ["Absolute Stream"],
    accent: "#50E3C2",
    color1: "#50E3C2",
    color2: "#0070F3",
  },
  {
    slug: "emma-lejalle",
    name: "Emma LE JALLÉ",
    pseudo: "Emma",
    role: "Développeuse & Cybersécurité",
    tags: ["Sécurité", "Back-end"],
    formation: "BUT Informatique – 3ème année",
    location: "France",
    age: calculateAge("2005-01-04"),
    description:
      "Une développeuse passionnée par la cybersécurité et la création d'applications sécurisées.",
    bio: "Emma LE JALLÉ est la garante de la sécurité de nos projets. Développeuse et passionnée de cybersécurité, elle aborde chaque application par la question qui compte : comment pourrait-on la casser ? Audits, durcissement des API, gestion des accès et des données sensibles, elle intervient dès la conception plutôt qu'en fin de course. Sa rigueur et sa curiosité font de chacune de nos livraisons une application solide, autant côté code que côté infrastructure.",
    githubUrl: "https://github.com/Emmalejalle",
    linkedinUrl: "https://www.linkedin.com/in/emma-le-jall%C3%A9-228283349/",
    languages: ["Java", "PHP", "Bash", "SQL", "HTML"],
    stack: ["Kali Linux", "Docker", "Node.js", "React", "PostgreSQL"],
    projects: [],
    accent: "#C084FC",
    color1: "#A105EA",
    color2: "#FF60D7",
  },
];

export function getTeamMember(slug: string) {
  return teams.find((member) => member.slug === slug);
}
