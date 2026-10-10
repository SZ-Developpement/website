import {
  Globe,
  Layers,
  LayoutDashboard,
  Rocket,
  Smartphone,
  Wrench,
} from "lucide-react";
import { MembreProps, PlanRateCardProps, ServiceProps } from "./types";

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

// Plans tarifaires.
export const planRate: PlanRateCardProps[] = [
  {
    icon: Globe,
    title: "Plan Basic",
    price: 9.99,
    desc: "Un plan de base pour commencer",
    features: ["Fonctionnalité 1", "Fonctionnalité 2", "Fonctionnalité 3"],
    highlight: false,
    cta: "commande",
  },
  {
    icon: Layers,
    title: "Plan Pro",
    price: 19.99,
    desc: "Un plan professionnel pour les besoins avancés",
    features: [
      "Fonctionnalité 1",
      "Fonctionnalité 2",
      "Fonctionnalité 3",
      "Fonctionnalité 4",
    ],
    highlight: true,
    cta: "devis",
  },
  {
    icon: Rocket,
    title: "Plan Enterprise",
    price: 29.99,
    desc: "Un plan d'entreprise pour les grandes entreprises",
    features: [
      "Fonctionnalité 1",
      "Fonctionnalité 2",
      "Fonctionnalité 3",
      "Fonctionnalité 4",
      "Fonctionnalité 5",
    ],
    highlight: true,
    cta: "devis",
  },
];

// membre de l'entreprise
export const membres: MembreProps = {
  name: "Alexis DE JESUS",
  pseudo: "Flytzi",
  role: "Fondateur & développeur full-stack",
  avatar: "https://avatars.githubusercontent.com/u/150966588?v=4",
  bio: "Je conçois, développe et déploie vos applications de bout en bout. Vous avez un seul interlocuteur du premier échange à la mise en ligne — celui qui écrit le code.",
  github: "https://github.com/FlytziTv",
  linkedin: "https://www.linkedin.com/in/alexis-dejesus/",
  portfolio: "https://www.aalexis.fr",
};

// intervenant ponctuel sur certains projets, selon les besoins
export const intervenants: MembreProps[] = [
  {
    name: "Thomas MONTOUT",
    pseudo: "Tae_Vie",
    role: "Développeur back-end",
    avatar: "https://avatars.githubusercontent.com/u/201229455?v=4",
    bio: "Serveurs de jeux et APIs performantes. Intervient sur les projets où le back-end demande une architecture solide.",
    github: "https://github.com/thomas-montout",
    linkedin: "https://www.linkedin.com/in/thomas-montout",
    portfolio: "https://thomas-montout.github.io/Portfolio/",
  },
  {
    name: "Emma LE JALLÉ",
    role: "Développeuse & cybersécurité",
    avatar: "https://avatars.githubusercontent.com/u/159728921?v=4",
    bio: "Audit de code et durcissement des accès. Intervient quand un projet manipule des données sensibles ou des paiements.",
    github: "https://github.com/Emmalejalle",
    linkedin: "https://www.linkedin.com/in/emma-le-jall%C3%A9-228283349/",
  },
];

// Services proposés par SZ Dev : ce que nous faisons pour nos clients, et comment nous le faisons.
export const services: ServiceProps[] = [
  {
    icon: Globe,
    titre: "Site vitrine",
    desc: "Votre activité en ligne, rapide et trouvable. Des pages sur mesure, un contenu que vous modifiez vous-même, et le référencement travaillé dès la conception.",
    tags: ["Next.js", "React", "SEO"],
    highlight: true,
  },
  {
    icon: LayoutDashboard,
    titre: "Application web",
    desc: "L'outil qui remplace vos tableurs. Comptes utilisateurs, base de données, espace d'administration — construit autour de votre façon de travailler, pas l'inverse.",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
  },
  {
    icon: Smartphone,
    titre: "Application mobile",
    desc: "Disponible sur iOS et Android à partir d'une seule base de code. Un seul développement à payer, une seule application à faire évoluer ensuite.",
    tags: ["React Native", "Expo"],
  },
  {
    icon: Wrench,
    titre: "Reprise de projet",
    desc: "Un site qui rame, un prestataire parti sans transmettre, du code que personne ne comprend plus. Audit, reprise en main, remise en état.",
    tags: ["Audit", "Refonte", "Maintenance"],
  },
];
