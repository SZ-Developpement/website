import ProjectCard from "../card/ProjectCard";
import { projects } from "@/lib/data/projects";

export default function Projets() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto flex flex-col gap-4 px-6 pb-8"
    >
      <div className="flex items-baseline justify-between">
        <h2 className="eyebrow">Projets</h2>
        <span className="text-xs text-white/30">
          {projects.length} livrés, en production
        </span>
      </div>

      <div className="grid sm:grid-cols-4 gap-4">
        {projects.map((project) => (
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
    </section>
  );
}
