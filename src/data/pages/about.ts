import { Lightbulb, Users, Zap } from "lucide-react";
import { projects } from "../sz/projects";
import { alltools } from "../sz/tools";
import { teamMembers } from "../sz/team";

const numberStuds = teamMembers.reduce((acc, member) => acc + member.stud, 0);
const numberProjects = projects.length > 15 ? "15+" : projects.length.toString();
const numberStacks = alltools.length > 20 ? "20+" : alltools.length.toString();

const stats = [
  { id: 1, label: "Années d'études cumulées", value: numberStuds.toString() },
  { id: 2, label: "Technologies maîtrisées", value: numberStacks },
  { id: 3, label: "Projets livrés", value: numberProjects },
  { id: 4, label: "Taux de satisfaction client", value: "100%" },
]

const values = [
  {
    icon: Zap,
    title: "Performance",
    desc: "On ne fait pas de compromis sur la vitesse. Nos apps visent des scores Lighthouse > 95 — pas parce qu'on nous le demande, mais parce qu'on sait que c'est possible.",
    color: "#f5a623",
  },
  {
    icon: Lightbulb,
    title: "Soif d'apprendre",
    desc: "On est en formation permanente — et c'est notre force. On adopte les dernières technos avant qu'elles deviennent mainstream, et on les maîtrise vraiment.",
    color: "#0070f3",
  },
  {
    icon: Users,
    title: "Énergie collective",
    desc: "Un collectif d'étudiants soudés, pas une agence froide. On s'implique à fond dans chaque projet comme si c'était notre startup.",
    color: "#50e3c2",
  },
];

export { stats, values };