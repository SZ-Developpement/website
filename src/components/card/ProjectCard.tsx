import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../icons/Github";
import { TagsText } from "../ui/tags";
import type { Project } from "../../../data/sz/projects";

export function ProjectCardHorizontal({ project }: { project: Project }) {
  return (
    <div key={project.id} className="grid grid-cols-[1fr_2fr] bg-bg-card border border-border-card rounded-xl overflow-hidden hover:bg-bg-dark transition-colors cursor-pointer"> 
      <div className={`${project.gradient} min-w-60 flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm"/>
        <span className="font-display text-[80px] font-extrabold text-[rgba(255,255,255,0.15)] relative z-10">{project.id}</span>
        <div className="dot-grid absolute inset-0 opacity-3" />
      </div>

      <div className="flex flex-col gap-4 p-8">
        <div className="flex flex-row justify-between items-start ">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase" style={{ color: project.accent }}>{project.category} · {project.year}</span>
            <h3 className="text-2xl font-display font-extrabold">{project.name}</h3>
          </div>
          <div className="flex flex-row items-center gap-2">
            {project.link.github && (
              <a href={project.link.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-hover-secondary border border-border-card rounded-lg flex items-center justify-center cursor-pointer text-text-secondary hover:text-text-primary transition-colors duration-300" ><GithubIcon size={15}/></a>
            )}
            {project.link.liveDemo && (
              <a href={project.link.liveDemo} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-hover-secondary border border-border-card rounded-lg flex items-center justify-center cursor-pointer text-text-secondary hover:text-text-primary transition-colors duration-300" ><ArrowUpRight size={15}/></a>
            )}
          </div>
        </div>

        <p className="text-text-secondary text-sm font-body">
          {project.shortdescription}
        </p>

        <div className="flex flex-row flex-wrap gap-1.5">
          {project.stack.map((stack) => (
            <TagsText key={stack} name={stack} />
          ))}
        </div>
      </div>
    </div>
  );
}