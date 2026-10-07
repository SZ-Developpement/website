/** Reseaux et contact. */
export const social = {
  github: "https://github.com/SZ-Developpement",
  linkedin: "https://www.linkedin.com/company/sz-developpement",
  email: "contact.szdev@gmail.com",
};

/** Liens de la navigation principale. */
export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Méthode", href: "/#methode" },
  { label: "Équipe", href: "/#equipe" },
] as const;

export type StatusKey = "ok" | "busy" | "unknown";

// Statut actuel du projet : "ok" = dispo, "busy" = complet, "unknown" = inconnu
export const projectStatus: StatusKey = "ok";

export const statusList: Record<
  StatusKey,
  { color: string; textProject: string }
> = {
  ok: {
    color: "#2F9E63",
    textProject: "Disponible pour de nouveaux projets",
  },
  busy: {
    color: "#C2410C",
    textProject: "Complet — prochains créneaux en janvier",
  },
  unknown: {
    color: "#A16207",
    textProject: "Statut inconnu",
  },
};

// Export de l'état actuel du projet pour l'afficher
export const currentStatus = statusList[projectStatus];

// Engagements de SZ Dev : ce que nous garantissons à nos clients, et ce que nous ne sous-traitons jamais.
export const engagements = [
  { valeur: "48h", libelle: "Réponse", accent: "garantie" },
  { valeur: "0", libelle: "Maillon", accent: "sous-traité" },
  // TODO: a confirmer — les deux premiers viennent de tes textes existants
  { valeur: "100%", libelle: "Du code", accent: "vous revient" },
];
