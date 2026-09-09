import { ProjectCardProps } from "@/types/type";
import { FileText, Play, Utensils } from "lucide-react";

export const projects: ProjectCardProps[] = [
  {
    title: "Absolute Stream",
    description: "Plateforme communautaire de notation pour films et séries.",
    year: 2025,
    category: "Streaming",
    url: "absolute-stream.vercel.app",
    icon: Play,
    backgroundColor: "#1e3a5f",
  },

  {
    title: "Devis et Facture",
    description: "Gestion de devis et factures, paiement Stripe intégré.",
    year: 2026,
    category: "Business",
    url: "https://www.devisetfacture.fr",
    icon: FileText,
    backgroundColor: "#1f4d38",
  },

  {
    title: "Nono's Cook",
    description: "Commande de gâteaux personnalisés en ligne.",
    year: 2026,
    category: "Food",
    url: "https://cookbynolan.vercel.app",
    icon: Utensils,
    backgroundColor: "#5f2d3a",
  },
];
