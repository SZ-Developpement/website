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
  }
]

export { projects, type Project };