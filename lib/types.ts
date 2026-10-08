import { LucideIcon } from "lucide-react";

export interface PlanRateCardProps {
  icon: LucideIcon;
  title: string;
  price: number;
  desc: string;
  features: string[];
  devis: boolean;
}
