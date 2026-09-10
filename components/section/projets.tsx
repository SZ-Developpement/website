import ProjectCard from "../card/ProjectCard";
import { projects } from "@/lib/data/projects";
import SzSection from "../layout/szSection";

export default function Projets() {
  return (
    <SzSection
      id="projects"
      title="Projets"
      description="Les projets sur lesquels nous avons travaillé et que nous avons livrés"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </SzSection>
  );
}
