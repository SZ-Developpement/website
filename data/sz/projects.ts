export type ProjectType = "solo" | "team";
export type ProjectStatus = "En cours" | "Terminé" | "À venir" | "archived";

type ProjectLinks = {
  github?: string;
  documentation?: string;
  liveDemo?: string;
}

type Project = {
  id: string;
  name: string;
  category: string;
  type : ProjectType;
  status: ProjectStatus;
  year: string;
  shortdescription: string;
  longdescription: string;
  stack: string[];
  accent: string;
  gradient: string;
  members: string[]; // Array of team member IDs
  link: ProjectLinks;
}

const projects: Project[] = [
  {
    id: "01",
    name: "Absolute Stream",
    category: "Streaming · Letterbox · Web App",
    type: "team",
    status: "En cours",
    year: "2025",
    shortdescription: "Plateforme communautaire de notation et d'avis pour films et séries, avec une interface intuitive et conviviale.",
    longdescription: "Absolute Stream est une plateforme de streaming collaborative permettant aux cinéphiles de noter, critiquer et découvrir films et séries. Les utilisateurs peuvent créer des listes personnalisées, enrichir la communauté avec leurs avis, et recevoir des recommandations intelligentes basées sur les évaluations de pairs. Grâce à des algorithmes avancés et des fonctionnalités sociales intégrées, Absolute Stream se positionne comme la destination privilégiée des amateurs de cinéma et séries en quête de partage et de découverte.",
    stack: ["Next.js", "React", "Node.js", "NeonDB", "Tailwind CSS", "TMDB API"],
    accent: "#0070f3",
    gradient: "bg-linear-135 from-[#0070f3] to-[#00b4d8]",
    members: ["alexis-djs", "thomas-mtt"],
    link: {
      github: "https://github.com/FlytziTv/Absolute_Stream",
    },
  },
  {
    id: "02",
    name: "Devis et Facture",
    category: "Business · Invoicing · Web App",
    type: "solo",
    status: "Terminé",
    year: "2026",
    shortdescription: "Application web de gestion de devis et factures, offrant une interface intuitive pour créer, suivre et gérer les documents commerciaux.",
    longdescription: "Devis et Facture est une application web de gestion de devis et factures, offrant une interface intuitive pour créer, suivre et gérer les documents commerciaux. L'application permet de générer des devis détaillés, de les valider et de les convertir en factures, assurant ainsi une gestion efficace des relations clients.",
    stack: ["Next.js", "React", "Node.js", "Tailwind CSS", "Prisma", "Stripe"],
    accent: "#2563EB",
    gradient: "bg-linear-135 from-[#2563EB] to-[#153885]",
    members: ["vadym-pti"],
    link: {
      liveDemo: "https://www.devisetfacture.fr/",
    }
  },
  {
    id: "03",
    name: "Nono's Cook",
    category: "Food · Recipe Sharing · Web App",
    type: "solo",
    status: "En cours",
    year: "2026",
    shortdescription: "Application web permettant aux utilisateurs de commander des gateaux personnalisés pour des occasions spéciales, avec une interface conviviale et des options de personnalisation avancées.",
    longdescription: "Nono's Cook est une application web innovante qui permet aux utilisateurs de commander des gâteaux personnalisés pour toutes les occasions. Avec une interface conviviale, les utilisateurs peuvent choisir parmi une variété de saveurs, de designs et d'options de personnalisation pour créer le gâteau parfait. L'application offre également une partie administrative ultra complete pour gérer les commandes, les clients et les livraisons, assurant ainsi une expérience fluide du début à la fin. Grâce à des fonctionnalités avancées et une attention particulière aux détails.",
    stack: ["Next.js", "React", "Node.js", "NeonDB", "Tailwind CSS", "Prisma", "Docker"],
    accent: "#92c3e4",
    gradient: "bg-linear-135 from-[#92c3e4] to-[#5EBEFF]",
    members: ["alexis-djs"],
    link: {
      liveDemo: "https://cookbynolan.vercel.app/",
    }
  }
]

export { projects, type Project };