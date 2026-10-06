import { LucideIcon } from "lucide-react";

/** slugs des membres : la source de verite est lib/data/teams.ts */
export type TeamSlug = "alexis-djs" | "thomas-mtt" | "emma-lejalle";

export interface ProjectCardProps {
  title: string;
  description: string;
  year: number;
  category: string;
  url: string;
  icon: LucideIcon;
  backgroundColor: string;
  /** membres ayant travaille sur le projet */
  members: TeamSlug[];
}

export interface ServicesCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TeamsCardProps {
  slug: TeamSlug;
  name: string;
  role: string;
  description: string;
  githubUrl: string;
  linkedinUrl: string;
  color1: string;
  color2: string;
}

export interface TeamMemberProps extends TeamsCardProps {
  /** pseudo affiche au-dessus du nom, sans le @ */
  pseudo: string;
  /** couleur d'accent de la page membre (pseudo, liens, halo de l'avatar) */
  accent: string;
  formation: string;
  location: string;
  age: number;
  /** specialites affichees a cote du role */
  tags: string[];
  /** image dans /public, sinon on retombe sur l'initiale en degrade */
  avatar?: string;
  portfolioUrl?: string;
  /** bio longue affichee sur la page membre */
  bio: string;
  /** noms tels qu'ecrits dans lib/data/stacks.ts */
  languages: string[];
  stack: string[];
}

export interface StepCardProps {
  step: string;
  color: string;
  bgcolor: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface HistoireEtapeProps {
  when: string;
  title: string;
  description: string;
}

export interface HistoireLettreProps {
  lettre: string;
  mot: string;
  sens: string;
}
