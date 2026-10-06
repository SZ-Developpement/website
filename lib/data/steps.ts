import { StepCardProps } from "@/types/type";
import {
  MessageCircleMore,
  FileChartColumn,
  PenTool,
  Code,
  PackageCheck,
  MessageCircleQuestionMark,
} from "lucide-react";

export const steps: StepCardProps[] = [
  {
    step: "01",
    icon: MessageCircleMore,
    color: "rgba(147,197,253,0.9)",
    bgcolor: "rgba(96,165,250,0.12)",
    title: "Brief",
    description:
      "On cadre le besoin réel, pas la liste de fonctionnalités rêvée.",
  },
  {
    step: "02",
    icon: FileChartColumn,
    color: "rgba(196,181,253,0.9)",
    bgcolor: "rgba(167,139,250,0.12)",
    title: "Devis",
    description: "Périmètre et prix clairs, sans surprise à la livraison.",
  },
  {
    step: "03",
    icon: PenTool,
    color: "rgba(240,171,252,0.9)",
    bgcolor: "rgba(217,70,239,0.12)",
    title: "Design",
    description: "Maquettes validées avant la première ligne de code.",
  },
  {
    step: "04",
    icon: Code,
    color: "rgba(253,164,175,0.9)",
    bgcolor: "rgba(244,63,94,0.12)",
    title: "Développement",
    description: "Points d'étape réguliers, accès à l'avancement du projet.",
  },
  {
    step: "05",
    icon: PackageCheck,
    color: "rgba(253,224,71,0.9)",
    bgcolor: "rgba(234,179,8,0.12)",
    title: "Livraison",
    description: "Mise en prod accompagnée, code et doc fournis.",
  },
  {
    step: "06",
    icon: MessageCircleQuestionMark,
    color: "rgba(110,231,183,0.9)",
    bgcolor: "rgba(52,211,153,0.12)",
    title: "Suivi",
    description: "Disponible après livraison, un produit qui vit s'entretient.",
  },
];
