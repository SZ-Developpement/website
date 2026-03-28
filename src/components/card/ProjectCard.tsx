import { ArrowUpRight, ExternalLink, User, Users } from "lucide-react";
import { GithubIcon } from "../icons/Github";
import { TagsText } from "../ui/tags";
import type { Project } from "../../../data/sz/projects";
import Link from "next/link";
import { teamMembers } from "../../../data/sz/team";

export function ProjectCardHorizontal({ project }: { project: Project }) {
  return (
    <div key={project.id} className="grid grid-rows-[1fr_2fr] md:grid-rows-none md:grid-cols-[1fr_2fr] bg-bg-card border border-border-card rounded-xl overflow-hidden hover:bg-bg-dark transition-colors cursor-pointer"> 
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

export const ProjectCardNoImage = ({ project }: {project: Project}) => {
  const projectMembers = teamMembers.filter((m) => project.members.includes(m.id));


  return (
    <div 
      style={{ '--hover-color': `${project.accent}60` } as React.CSSProperties} 
      className="bg-bg-card border border-border-card rounded-lg overflow-hidden flex flex-col hover:translate-y-0.5 transition-all duration-500 hover:border-(--hover-color) cursor-pointer"
    >

      <div className="p-5 flex-1 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <p className="text-xs text-text-secondary font-mono">{project.category} · {project.year}</p>
          <h3 className="font-display text-xl font-extrabold">{project.name}</h3>
        </div>
        
        <p className="text-[13px] text-text-secondary font-body flex-1">
          {project.shortdescription}
        </p>

        <div className="flex flex-row gap-1 flex-wrap">
          {project.stack.slice(0, 4).map((stack) => (
            <TagsText key={stack} name={stack} />
          ))}
          {project.stack.length > 4 && (
            <span className="bg-bg-tags text-text-secondary text-xs font-body px-2 py-1 rounded">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        <div className="flex justify-between items-center pt-3 border-t border-bg-tags">
          <div className="flex flex-row -gap-4 items-center">
            {projectMembers.map((member, index) => (
              <Link key={member.id} href={`/team/${member.id}`}>
                <div
                  title={member.name}
                    style={{
                    backgroundImage: member.gradient.includes('bg-') ? undefined : member.gradient,
                    marginLeft: index > 0 ? "-8px" : "0",
                    zIndex: projectMembers.length - index,
                  }}
                  className={`${member.gradient} relative flex items-center justify-center w-6.5 h-6.5 rounded-full border-2 border-bg-card text-[9px] font-bold text-white font-body transition-transform duration-200 hover:scale-115 hover:z-50 cursor-pointer`}
                >
                  {member.initials}
                </div>
              </Link>
            ))}
          </div>

          <div className="flex gap-1.5">
            {project.link.github && (
              <a href={project.link.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-7.5 h-7.5 bg-hover-secondary border border-bg-hover rounded-[7px] text-text-secondary transition-colors duration-200 hover:text-white">
                <GithubIcon size={13} />
              </a>
            )}
            {project.link.liveDemo && (
              <a href={project.link.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-7.5 h-7.5 bg-hover-secondary border border-bg-hover rounded-[7px] text-text-secondary transition-colors duration-200 hover:text-white">
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectCardImage = ({ project,}: {project: Project}) => {
  const projectMembers = teamMembers.filter((m) => project.members.includes(m.id));


  return (
    <div 
      style={{ '--hover-color': `${project.accent}60` } as React.CSSProperties} 
      className="bg-bg-card border border-border-card rounded-lg overflow-hidden flex flex-col hover:translate-y-0.5 transition-all duration-500 hover:border-(--hover-color) cursor-pointer"
    >
      <div className={`h-30 ${project.gradient} relative flex items-center justify-center overflow-hidden`}>
        <div className="dot-grid absolute inset-0 opacity-[0.3]" />
        <span className="font-display text-5xl font-extrabold text-[rgba(255,255,255,0.30)] relative z-10">
          {project.name.slice(0, 2).toUpperCase()}
        </span>

        <div className="absolute top-3 left-3 bg-[rgba(0,0,0,0.4)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-full py-0.75 px-2.5 flex items-center gap-1.5">
          {project.type === "team" ? <Users size={10} color="#fff" /> : <User size={10} color="#fff" />}
          <span className="text-[10px] text-text-primary font-mono">
            {project.type === "team" ? "Équipe" : "Solo"}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <p className="text-xs text-text-secondary font-mono">{project.category} · {project.year}</p>
          <h3 className="font-display text-xl font-extrabold">{project.name}</h3>
        </div>
        
        <p className="text-[13px] text-text-secondary font-body flex-1">
          {project.shortdescription}
        </p>

        <div className="flex flex-row gap-1 flex-wrap">
          {project.stack.slice(0, 4).map((stack) => (
            <TagsText key={stack} name={stack} />
          ))}
          {project.stack.length > 4 && (
            <TagsText name={`+${project.stack.length - 4}`} />
          )}
        </div>

        <div className="flex justify-between items-center pt-3 border-t border-bg-tags">
          <div className="flex flex-row -gap-4 items-center">
            {projectMembers.map((member, index) => (
              <Link key={member.id} href={`/team/${member.id}`}>
                <div
                  title={member.name}
                    style={{
                    backgroundImage: member.gradient.includes('bg-') ? undefined : member.gradient,
                    marginLeft: index > 0 ? "-8px" : "0",
                    zIndex: projectMembers.length - index,
                  }}
                  className={`${member.gradient} relative flex items-center justify-center w-6.5 h-6.5 rounded-full border-2 border-bg-card text-[9px] font-bold text-white font-body transition-transform duration-200 hover:scale-115 hover:z-50 cursor-pointer`}
                >
                  {member.initials}
                </div>
              </Link>
            ))}
          </div>

          <div className="flex gap-1.5">
            {project.link.github && (
              <a href={project.link.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-7.5 h-7.5 bg-hover-secondary border border-bg-hover rounded-[7px] text-text-secondary transition-colors duration-200 hover:text-white">
                <GithubIcon size={13} />
              </a>
            )}
            {project.link.liveDemo && (
              <a href={project.link.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-7.5 h-7.5 bg-hover-secondary border border-bg-hover rounded-[7px] text-text-secondary transition-colors duration-200 hover:text-white">
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};