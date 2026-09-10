import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  GraduationCap,
  MapPin,
} from "lucide-react";

import NavBar from "@/components/layout/navbar";
import SzSection from "@/components/layout/szSection";
import ProjectCard from "@/components/card/ProjectCard";
import TechCard from "@/components/card/TechCard";
import { GitHubIcon } from "@/components/icon/github";
import { LinkedinIcon } from "@/components/icon/linkedin";
import { getTeamMember, teams } from "@/lib/data/teams";
import { projects } from "@/lib/data/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return teams.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) return { title: "Membre introuvable — SZ Dev" };

  return {
    title: `${member.name} — SZ Dev`,
    description: `${member.role} chez SZ Dev. ${member.description}`,
    openGraph: {
      title: `${member.name} — SZ Dev`,
      description: member.role,
      type: "profile",
    },
  };
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) notFound();

  const memberProjects = projects.filter((project) =>
    member.projects.includes(project.title),
  );

  const firstName = member.name.split(" ")[0];

  return (
    <>
      <NavBar />

      <main className="flex flex-col gap-16 pb-14">
        {/* En-tête du profil */}
        <section className="max-w-7xl w-full mx-auto flex flex-col gap-10 px-6 pt-14 relative">
          {/* Flèche de retour */}
          <Link
            href="/#team"
            className="relative flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition w-fit group"
          >
            <ArrowLeft
              size={13}
              className="group-hover:-translate-x-0.5 transition-transform duration-200"
            />
            Retour à l&apos;équipe
          </Link>

          {/* Image et informations */}
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
            <div className="flex flex-col gap-5">
              {/* Pseudo + badges */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
                <span
                  className="font-mono font-medium"
                  style={{ color: member.accent }}
                >
                  @{member.pseudo}
                </span>

                <span className="flex items-center gap-1.5 text-white/40">
                  <GraduationCap size={13} />
                  {member.formation}
                </span>

                <span className="flex items-center gap-1.5 text-white/40">
                  <MapPin size={13} />
                  {member.location} · {member.age} ans
                </span>
              </div>

              {/* Nom */}
              <h1 className="font-sans text-4xl sm:text-6xl font-bold tracking-tighter leading-[0.95]">
                {member.name}
              </h1>

              {/* Rôle + spécialités */}
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="text-lg sm:text-xl font-medium">
                  {member.role}
                </h2>
                <span className="text-sm text-white/30">
                  {member.tags.join(" · ")}
                </span>
              </div>

              <p className="max-w-2xl text-sm text-white/50 leading-relaxed">
                {member.bio}
              </p>

              {/* Liens */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {member.githubUrl && (
                  <ProfileLink
                    href={member.githubUrl}
                    label="Github"
                    icon={GitHubIcon}
                  />
                )}

                {member.linkedinUrl && (
                  <ProfileLink
                    href={member.linkedinUrl}
                    label="Linkedin"
                    icon={LinkedinIcon}
                  />
                )}

                {member.portfolioUrl && (
                  <ProfileLink
                    href={member.portfolioUrl}
                    label="Portfolio"
                    icon={Globe}
                  />
                )}
              </div>
            </div>

            {/* Avatar */}
            <div
              className="size-40 sm:size-50 rounded-2xl overflow-hidden border border-white/10 shrink-0 order-first lg:order-0"
              style={{
                background: `linear-gradient(135deg, ${member.color1}, ${member.color2})`,
              }}
            >
              {member.avatar ? (
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="size-full object-cover"
                />
              ) : (
                <div className="size-full flex items-center justify-center text-5xl font-semibold">
                  {member.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Compétences */}
        <section className="max-w-7xl w-full mx-auto px-6">
          <div className="border-t border-white/10 pt-10 grid lg:grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="text-sm text-white/50">Langages</h2>
              <div className="flex flex-wrap gap-2">
                {member.languages.map((name) => (
                  <TechCard key={name} name={name} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-sm text-white/50">Stack &amp; Outils</h2>
              <div className="flex flex-wrap gap-2">
                {member.stack.map((name) => (
                  <TechCard key={name} name={name} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projets du membre */}
        {memberProjects.length > 0 && (
          <SzSection
            id="member-projects"
            title="Projets"
            description={`${memberProjects.length} projet${
              memberProjects.length > 1 ? "s" : ""
            } auxquels ${firstName} a participé.`}
            action={
              <Link
                href="/projets"
                className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition group"
              >
                Voir tous les projets
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </Link>
            }
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {memberProjects.map((project) => (
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
        )}
      </main>
    </>
  );
}

function ProfileLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ size: number }>;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0a0a0b] px-3.5 py-2 text-xs text-white/60 hover:text-white hover:border-white/20 hover:bg-[#0d0d0e] transition-all duration-200"
    >
      <Icon size={14} />
      {label}
    </Link>
  );
}
