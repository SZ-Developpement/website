import { GithubIcon } from "@/components/icons/Github";
import { SZSocial } from "../sz/social";
import { Mail, MessageSquare } from "lucide-react";

const removeHttps = (url: string) => url.replace(/^https?:\/\//, '');

const contact = [
  {
    icon: Mail,
    label: "Email",
    value: SZSocial.email,
    url: `mailto:${SZSocial.email}`,
    color: "#0070f3",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: removeHttps(SZSocial.github),
    url: SZSocial.github,
    color: "#FFFFFF",
  },
  {
    icon: MessageSquare,
    label: "Discord",
    value: removeHttps(SZSocial.discord),
    url: SZSocial.discord,
    color: "#5865f2",
  },
]


const status = [
  {
    id : "disponible",
    title : "Disponible dès maintenant",
    text : "Nous acceptons de nouveaux projets pour 2026. Réponse sous 48h garantie.",
    color : "#50e3c2",
  },
  {
    id: "indisponible",
    title: "Indisponible pour le moment",
    text: "Nous sommes actuellement à pleine capacité et ne pouvons pas accepter de nouveaux projets pour le moment.",
    color: "#ff0000",
  }
]

export { contact, status };

