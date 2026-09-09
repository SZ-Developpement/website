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
