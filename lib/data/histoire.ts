import { HistoireEtapeProps, HistoireLettreProps } from "@/types/type";

// TODO — texte provisoire, à remplacer par la vraie histoire de SZ
export const etapes: HistoireEtapeProps[] = [
  {
    when: "Le crew",
    title: "Deux lettres, une exigence",
    description:
      "SZ naît comme équipe gaming. On choisit ces deux lettres pour ce qu'elles imposent : le niveau, et le refus de s'arrêter à la première limite.",
  },
  {
    when: "Le virage",
    title: "On passe au code",
    description:
      "Mêmes réflexes appliqués à autre chose : progresser vite, se répartir les rôles, juger le résultat et pas l'intention.",
  },
  {
    when: "Aujourd'hui",
    title: "Un collectif qui livre",
    description:
      "Des applications web et mobile menées de bout en bout, pour de vrais clients, avec le nom qu'on n'a jamais changé.",
  },
];

export const lettres: HistoireLettreProps[] = [
  {
    lettre: "S",
    mot: "Skill",
    sens: "Le niveau se prouve sur le produit livré, il ne se raconte pas.",
  },
  {
    lettre: "Z",
    mot: "Zero Limits",
    sens: "Aucune techno qu'on refuse d'aller apprendre pour un projet.",
  },
];
