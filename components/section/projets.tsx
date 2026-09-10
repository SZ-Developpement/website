import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "../card/ProjectCard";
import { projects } from "@/lib/data/projects";
import SzSection from "../layout/szSection";

const VISIBLE = 3;

export default function Projets() {
  const derniers = projects.slice(-VISIBLE);
  const hasMore = projects.length > VISIBLE;

  return (
    <SzSection
      id="projects"
      title="Projets"
      description="Les projets sur lesquels nous avons travaillé et que nous avons livrés"
      action={
        hasMore ? (
          <Link
            href="/projets"
            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/3 px-3 py-1.5 text-xs text-white/60 hover:bg-white/6 hover:text-white transition-all duration-150 outline-0 focus-visible:border-white/30 group"
          >
            Voir plus
            <ArrowRight
              size={13}
              className="group-hover:translate-x-0.5 transition-transform duration-200"
            />
          </Link>
        ) : null
      }
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {derniers.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            year={project.year}
            category={project.category}
            url={project.url}
            icon={project.icon}
            backgroundColor={project.backgroundColor}
          />
        ))}
      </div>
    </SzSection>
  );
}
