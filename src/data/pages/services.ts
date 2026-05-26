
import {
  Globe,
  Smartphone,
  Server,
  Container,
  MessageSquare,
  Database,
} from "lucide-react";
import { alltools } from "../sz/tools";

const tagsfrontend = alltools.filter((tool) => tool.category === "Frontend").slice(0, 5).map((tool) => tool.name);
const tagsmobile = alltools.filter((tool) => tool.category === "Mobile").slice(0, 5).map((tool) => tool.name);
const tagsbackend = alltools.filter((tool) => tool.category === "Backend").slice(0, 5).map((tool) => tool.name);
const tagsdevops = alltools.filter((tool) => tool.category === "DevOps & Cloud").slice(0, 5).map((tool) => tool.name);
const tagsdatabase = alltools.filter((tool) => tool.category === "Base de données").slice(0, 5).map((tool) => tool.name);

const services = [
  {
    icon: Globe,
    title: "Développement Web",
    desc: "Applications web modernes avec Next.js, React et TypeScript. SSR, SSG, ISR selon vos besoins.",
    tags: tagsfrontend,
    color: "#06b6d4",
  },
  {
    icon: Smartphone,
    title: "Applications Mobile",
    desc: "Apps cross-platform performantes avec React Native et Expo. iOS & Android depuis une seule base de code.",
    tags: tagsmobile,
    color: "#d946ef",
  },
  {
    icon: Server,
    title: "API & Backend",
    desc: "APIs RESTful et GraphQL robustes. Architecture microservices, authentification, bases de données.",
    tags: tagsbackend,
    color: "#10b981",
  },
  {
    icon: Database,
    title: "Base de données",
    desc: "Conception de schémas, optimisation de requêtes, migrations. On maîtrise SQL et NoSQL pour garantir la performance.",
    tags: tagsdatabase,
    color: "#6366f1",
  },
  {
    icon: Container,
    title: "DevOps & Cloud",
    desc: "Infrastructure cloud-native, CI/CD automatisé, monitoring et déploiements zéro-downtime.",
    tags: tagsdevops,
    color: "#f43f5e",
  },
  {
    icon: MessageSquare,
    title: "Conseil Technique",
    desc: "Audit de code, revue d'architecture, choix technologiques. Accompagnement de vos équipes internes.",
    tags: ["Audit", "Architecture", "Formation"],
    color: "#8f8f8f",
  },
];

export { services };