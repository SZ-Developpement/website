import { GithubIcon } from "../icons/Github";
import type { TeamMember } from "../../../data/sz/team";
import { LinkedinIcon } from "../icons/linkedin";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../../data/sz/projects";
import Image from "next/image";

export function UserCard({ member }: { member: TeamMember }) {
  const memberProjects = projects.filter((p) => p.members.includes(member.id));

  return (
    <Link href={`/team/${member.id}`} className="flex flex-col gap-4 justify-between bg-bg-card border border-border-card p-6 rounded-xl hover:bg-bg-dark relative hover:translate-y-0.5 transition-all duration-500 cursor-pointer">
      <ArrowUpRight size={16} color="#3a3a3a" className="absolute top-6 right-6" />

      <div className="flex flex-row gap-4 items-center">
        {member.avatar ? (
          <Image src={member.avatar} alt={member.name} width={72} height={72} unoptimized className="rounded-lg" />
        ) : (
          <div className={`w-16 h-16 rounded-lg ${member.gradient} flex items-center justify-center font-display text-xl font-extrabold shrink-0 `} style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
            {member.initials}
          </div>
        )}
        <div className="flex flex-col gap-1">
          <h3 className="font-display text-xl font-extrabold">{member.name}</h3>
          <span className="text-text-secondary font-body text-sm">{member.role}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 ">
        <p className="text-[#6a6a6a] font-body text-xs leading-[1.7] line-clamp-2">{member.shortBio}</p>
        <div className="flex flex-row gap-1 flex-wrap">
          {member.skills.slice(0, 4).map((skill) => (
            <span key={skill} className="bg-bg-tags text-text-secondary text-[10px] font-body px-2 py-1 rounded">
              {skill}
            </span>
          ))}
          {member.skills.length > 4 && (
            <span className="bg-bg-tags text-text-secondary text-xs font-body px-2 py-1 rounded">
              +{member.skills.length - 4}
            </span>
          )}
        </div>
      </div>
      <p className="text-xs text-[#4a4a4a] font-body">
        {memberProjects.length} projet{memberProjects.length > 1 ? "s" : ""} dans le collectif
      </p>
    </Link>
  );
}

export function UserCardView({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col gap-4 justify-between bg-bg-card border border-border-card p-6 rounded-xl hover:bg-bg-dark relative hover:translate-y-0.5 transition-all duration-500 cursor-pointer">
      <div className="flex flex-row gap-4 items-center">
        {member.avatar ? (
          <Image src={member.avatar} alt={member.name} width={72} height={72} unoptimized className="rounded-lg" />
        ) : (
        <div className={`w-18 h-18 rounded-lg ${member.gradient} flex items-center justify-center font-display text-xl font-extrabold shrink-0 `} style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
          {member.initials}
        </div>
        )}
        <div className="flex flex-col gap-1 min-w-0">
          <h3 className="font-display text-xl font-extrabold truncate">{member.name}</h3>
          <span className="text-text-secondary font-body text-sm">{member.role}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 ">
        <p className="text-[#6a6a6a] font-body text-xs leading-[1.7] line-clamp-2">{member.shortBio}</p>
        <div className="flex flex-row gap-1 flex-wrap">
          {member.skills.slice(0, 4).map((skill) => (
            <span key={skill} className="bg-bg-tags text-text-secondary text-[10px] font-body px-2 py-1 rounded">
              {skill}
            </span>
          ))}
          {member.skills.length > 4 && (
            <span className="bg-bg-tags text-text-secondary text-xs font-body px-2 py-1 rounded">
              +{member.skills.length - 4}
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2 mt-auto">
        <Link
          href={`/team/${member.id}`} 
          className="flex-1 flex justify-center items-center font-body font-semibold text-sm py-2 rounded-md bg-white text-black transition-opacity hover:opacity-90 active:scale-[0.98]"
        >
          Voir le profil
        </Link>

        {member.socialLinks?.github && (
          <Link 
            href={member.socialLinks.github} 
            target="_blank" 
            className="flex items-center justify-center h-9 w-9 rounded-md border border-border-card text-text-secondary hover:bg-bg-hover hover:text-text-primary transition-colors"
          >
            <GithubIcon size={16} />
          </Link>
        )}

        {member.socialLinks?.linkedin && (
          <Link 
            href={member.socialLinks.linkedin} 
            target="_blank" 
            className="flex items-center justify-center h-9 w-9 rounded-md border border-border-card text-text-secondary hover:bg-bg-hover hover:text-text-primary transition-colors"
          >
            <LinkedinIcon size={16} />
          </Link>
        )}
        </div>
    </div>
  );
}