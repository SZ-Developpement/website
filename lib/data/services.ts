import { ServicesCardProps } from "@/types/type";
import {
  Code,
  Smartphone,
  ServerCog,
  Database,
  Cloud,
  MessageCircleQuestionMark,
} from "lucide-react";

export const services: ServicesCardProps[] = [
  {
    icon: Code,
    title: "Développement web",
    description:
      "Applications Next.js et React sur-mesure — de la vitrine à l'outil métier complexe.",
  },
  {
    icon: Smartphone,
    title: "Applications mobile",
    description:
      "iOS et Android depuis une seule base de code, avec React Native.",
  },
  {
    icon: ServerCog,
    title: "API & backend",
    description:
      "APIs REST, GraphQL ou tRPC, avec authentification et logique métier.",
  },
  {
    icon: Database,
    title: "Bases de données",
    description:
      "Conception de schémas et optimisation de requêtes, SQL et NoSQL.",
  },
  {
    icon: Cloud,
    title: "DevOps & cloud",
    description:
      "CI/CD automatisé, hébergement et déploiement sans interruption.",
  },
  {
    icon: MessageCircleQuestionMark,
    title: "Conseil technique",
    description:
      "Audit de code et d'architecture, accompagnement d'équipes internes.",
  },
];
