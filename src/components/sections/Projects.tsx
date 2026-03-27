import { ArrowUpRight } from "lucide-react";
import SZSection from "../layout/SZSection";
import { Badge } from "../ui/badge";
import { ProjectCardHorizontal } from "../card/ProjectCard";
import { projects } from "../../../data/sz/projects";

export default function Projects() {
  return (
    <SZSection id="projects" className="flex flex-col justify-center items-center gap-20">
      <div className="flex flex-col items-center justify-center gap-5">
        <Badge status={false} text="Projets"/>
        <h2 className="font-display text-5xl font-extrabold leading-none text-center">
          Ce que nous avons{" "}
          <span className="gradient-text">construit.</span>
        </h2>
        <a href="#contact" className="inline-flex items-center gap-2 font-normal text-text-secondary font-body max-w-150 text-center">
          Démarrer votre projet <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="grid grid-row gap-6">
        {projects.slice(0, 3).map((p) => (
          <ProjectCardHorizontal key={p.id} project={p} />
        ))}
      </div>
    </SZSection>
  );
}