import { ProjectCardNoImage } from "@/components/card/ProjectCard";
import { Header } from "@/components/layout/Header";
import { SZSectionPage } from "@/components/layout/SZSection";
import { Badge } from "@/components/ui/badge";
import { TagsImage } from "@/components/ui/tags";
import { ArrowLeft, ExternalLink, Globe, GraduationCap, MapPin } from "lucide-react";
import Link from "next/link";
import { getMemberLanguages, getMemberTools } from "../../../../utils/tools";
import { teamMembers } from "../../../../data/sz/team";
import { notFound } from "next/navigation";
import { projects } from "../../../../data/sz/projects";
import { GithubIcon } from "@/components/icons/Github";
import { LinkedinIcon } from "@/components/icons/linkedin";
import Image from "next/image";

const socialIcons: Record<string, React.ElementType> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  portfolio: Globe,
};


export default async function UserPage({params} : {params: Promise<{id: string}>}) {
  const { id } = await params;

  const member = teamMembers.find((m) => m.id === id);
  if (!member) notFound();

  const memberProjects = projects.filter((p) => p.members.includes(member.id));
  const languages = getMemberLanguages(member.languages);
  const tools = getMemberTools(member.skills);

  return (
    <>
      <Header />
      <SZSectionPage id="user" className="flex flex-col gap-15">
        <Link href="/team" className="flex flex-row items-center gap-1.5 text-text-secondary hover:text-text-primary text-sm font-body transition-color duration-300"><ArrowLeft size={14} /> Retour à l&apos;équipe</Link>
        <div className="grid grid-cols-[1fr_auto] gap-5 w-full">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center gap-3 text-text-secondary font-body text-xs">
                <span className="font-mono text-sz">
                  @{member.pseudonym}
                </span>
                <span>·</span>
                <span className="flex flex-row items-center gap-1">
                  <GraduationCap size={12} />
                  {member.school}
                </span>
                <span>·</span>
                <span className="flex flex-row items-center gap-1">
                  <MapPin size={12} />
                  France · {member.age} ans
                </span>
              </div>
              <h1 className="font-display text-6xl font-extrabold">
                {member.name}
              </h1>
              <div className="flex flex-row items-center gap-3 text-[#3a3a3a] font-body">
                <p className="text-lg text-text-secondary font-body font-normal">
                  {member.role}{" "}
                </p>
                <span>·</span>
                <span>
                  {member.spec}
                </span>
              </div>
            </div>
            
            <p className="text-text-secondary font-body font-normal max-w-150">
              {member.longBio}
            </p>

            <div className="flex flex-row gap-2 flex-wrap">
              {(Object.entries(member.socialLinks) as [string, string][]).map(
                ([key, value]) => {
                  const Icon = socialIcons[key] ?? ExternalLink;
                  const label = key.charAt(0).toUpperCase() + key.slice(1);
                  return (
                    <Link key={key} href={value} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-1.5 bg-bg-card hover:bg-bg-dark text-text-secondary hover:text-text-primary border border-border-card rounded-lg py-1.5 px-3.5 text-sm transition-colors duration-300">
                      <Icon size={14} />
                      {label}
                    </Link>
                  );
                }
              )}
            </div>
          </div>

          <div className="shrink-0">
            {member.avatar ? (
              <Image src={member.avatar} alt={member.name} width={200} height={200} unoptimized className="rounded-3xl" />
            ) : (
              <div className={`aspect-square h-50 rounded-3xl ${member.gradient} flex items-center justify-center font-display text-[56px] font-extrabold text-white relative`} style={{ boxShadow: "0 12px 48px rgba(0,0,0,0.4)" }}>
                {member.initials}
              </div>
            )}
          </div>
        </div>

        <div className="pt-8 border-t border-border-card w-full grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <Badge text="Langages" status={false} />
            <div className="flex flex-row gap-2 flex-wrap">
              {languages.map((language) => (
                <TagsImage key={language.name} name={language.name} icon={language?.icon || "/icons/stack/no-img.svg"} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Badge text="Stack & Outils" status={false} />
            <div className="flex flex-row gap-2 flex-wrap">
              {tools.map((tool) => (
                <TagsImage key={tool.name} name={tool.name} icon={tool?.icon || "/icons/stack/no-img.svg"} />
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border-card w-full flex flex-col gap-6">
          <div className="flex flex-row items-center justify-between">
            <Badge text={`Stack & Outils (${memberProjects.length})`} status={false} />
            <Link href="/projects" className="flex flex-row items-center gap-1.5 text-text-secondary hover:text-text-primary text-sm font-body transition-color duration-300">
              Voir tous les projets →
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {memberProjects.map((project) => {
              return (
                <ProjectCardNoImage key={project.id} project={project} />
              )
            })}
          </div>
        </div>

      </SZSectionPage>
    </>
  );
}