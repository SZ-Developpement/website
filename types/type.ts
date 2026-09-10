import { LucideIcon } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  description: string;
  year: number;
  category: string;
  url: string;
  icon: LucideIcon;
  backgroundColor: string;

  developer?: {
    name: string;
    url: string;
  }[];
}

export interface ServicesCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TeamsCardProps {
  name: string;
  role: string;
  description: string;
  githubUrl: string;
  linkedinUrl: string;
  color1: string;
  color2: string;
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
