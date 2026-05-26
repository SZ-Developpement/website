import { projects } from "../sz/projects";
import { teamMembers } from "../sz/team";

const numberProjects = projects.length > 15 ? "15+" : projects.length.toString();
const numberMembers = teamMembers.length > 10 ? "10+" : teamMembers.length.toString();

const stats = [
  { val: numberProjects.toString(), label: "Projets livrés" },
  { val: numberMembers.toString(), label: "Étudiants" },
  { val: "94%", label: "Passion & implication" }
];

export { stats };