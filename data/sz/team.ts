type SocialLinks = {
  github?: string;
  linkedin?: string;
  portfolio?: string;
}

type TeamMember = {
  id: string;
  initials: string;
  name: string;
  pseudonym: string;
  age: number;
  stud: number;
  role: string;
  spec: string;
  school: string;
  shortBio: string;
  longBio: string;
  avatar?: string;
  gradient: string;
  skills: string[];
  languages: string[];
  socialLinks: SocialLinks;
}

const teamMembers: TeamMember[] = [
  {
    id: "alexis-djs",
    initials: "AD",
    name: "Alexis DE JESUS",
    pseudonym: "Flytzi",
    age: 19,
    stud: 3,
    role: "Fondateur & Developpeur Full-Stack",
    spec: "Full Stack · Architecture",
    school: "BTS SIO SLAM - 1ère année",
    shortBio: "Étudiant en 1ère année de BTS SIO SLAM. Obsédé par Next.js et Node.js, Alexis est le cerveau derrière l'architecture de nos projets. Il code comme il respire : naturellement et avec une passion contagieuse.",
    longBio: "Alexis DE JESUS, alias Flytzi, est un jeune prodige de la programmation. À seulement 19 ans, il a déjà une maîtrise impressionnante de Next.js et Node.js, ce qui lui permet de concevoir des architectures robustes et évolutives pour nos projets. En tant que fondateur de notre équipe, Alexis apporte une vision claire et une énergie débordante à chaque étape du développement. Son approche méthodique et sa capacité à résoudre les problèmes complexes font de lui un leader naturel et un développeur Full-Stack exceptionnel.",
    gradient: "bg-linear-135 from-[#0070f3] to-[#00b4d8]",
    skills: ["Next.js", "React", "Node.js", "NeonDB", "Tailwind CSS"],
    languages: ["TypeScript", "SQL", "Lua", "HTML", "CSS"],
    socialLinks: {
      github: "https://github.com/FlytziTv",
      linkedin: "https://www.linkedin.com/in/alexis-dejesus",
      portfolio: "https://aalexis.fr"
    }
  },
  {
    id: "thomas-mtt",
    initials: "TM",
    name: "Thomas MONTOUT",
    pseudonym: "Tae_Vie",
    age: 26,
    stud: 2,
    role: "Developpeur Backend",
    spec: "Développeur backend · Game Designer",
    school: "BTS SIO SLAM - 1ère année",
    shortBio: "Étudiant en 1ère année de BTS SIO SLAM, Thomas est passionné par le backend de jeux vidéo. Avec une maîtrise de Node.js et Phaser, il crée des expériences ludiques et performantes.",
    longBio: "Thomas MONTOUT, connu sous le pseudonyme Tae_Vie, est un développeur backend talentueux avec une passion pour les jeux vidéo. Actuellement étudiant en 1ère année de BTS SIO SLAM, Thomas se spécialise dans la création de serveurs de jeux performants et ludiques en utilisant Node.js et Phaser. Son expertise en développement backend lui permet de concevoir des architectures solides qui supportent des expériences de jeu immersives. En plus de ses compétences techniques, Thomas apporte une touche créative à chaque projet, faisant de lui un membre essentiel de notre équipe.",
    gradient: "bg-linear-135 from-[#50e3c2] to-[#0070f3]",
    skills: ["Node.js", "Phaser", "Next.js", "React"],
    languages: ["JavaScript", "PHP", "SQL", "HTML", "CSS"],
    socialLinks: {
      github: "https://github.com/thomas-montout",
      linkedin: "https://www.linkedin.com/in/thomas-montout",
      portfolio: "https://thomas-montout.github.io/Portfolio/"
    }
  },
  {
    id: "vadym-pti",
    initials: "VP",
    name: "Vadym POTOTSKYI",
    pseudonym: "PROVADNIKE",
    age: 18,
    stud: 2,
    role: "Analyste Cybersecurité",
    spec: "Cloud · IA Developpeur",
    school: "BTS SIO SISR - 1ère année",
    shortBio: "Étudiant en 1ère année de BTS SIO SISR, Vadym est passionné par la cybersécurité et l'intelligence artificielle. Il veille à ce que nos projets soient non seulement innovants, mais aussi sécurisés.",
    longBio: "Vadym POTOTSKYI, alias PROVADNIKE, est un analyste en cybersécurité et développeur d'intelligence artificielle prometteur. Actuellement étudiant en 1ère année de BTS SIO SISR, Vadym se spécialise dans la sécurisation des applications et l'intégration de solutions d'IA pour améliorer les performances et la sécurité de nos projets. Sa passion pour la cybersécurité le pousse à rester constamment informé des dernières menaces et techniques de défense, assurant ainsi que nos applications sont protégées contre les vulnérabilités. En plus de ses compétences techniques, Vadym apporte une perspective innovante à notre équipe, combinant sécurité et intelligence artificielle pour créer des solutions robustes et avant-gardistes.",
    gradient: "bg-linear-135 from-[#f5a623] to-[#f43f5e]",
    skills: ["Kali Linux", "Cisco", "Pentesting", "IA", "React"],
    languages: ["Python", "TypeScript", "SQL", "Bash", "HTML/CSS"],
    socialLinks: {
      github: "https://github.com/PROVADNIKE",
      linkedin: "https://www.linkedin.com/in/vadym-pototskyi",
    }
  }
]

export { teamMembers, type TeamMember };