import { ProjectType } from "../sz/projects";

type Filter = "all" | ProjectType;

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "Tous les projets" },
  { key: "team", label: "Projets d'équipe" },
  { key: "solo", label: "Projets solo" },
]

export { filters, type Filter };