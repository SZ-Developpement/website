import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import NavBar from "@/components/layout/navbar";
import ProjectCard from "@/components/card/ProjectCard";
import Contact from "@/components/section/contact";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projets — SZ Dev",
  description:
    "L'ensemble des projets web et mobile conçus et livrés par le collectif SZ Dev.",
};

export default function ProjetsPage() {
  return (
    <>
      <NavBar />

      <main className="flex flex-col gap-16">
        <section className="max-w-7xl w-full mx-auto flex flex-col gap-6 px-6 pt-14 relative">
          <div className="absolute inset-0 grid-fade pointer-events-none" />

          <div className="relative flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition w-fit group"
            >
              <ArrowLeft
                size={13}
                className="group-hover:-translate-x-0.5 transition-transform duration-200"
              />
              Retour à l&apos;accueil
            </Link>

            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold tracking-tight">Projets</h1>
              <p className="text-xs text-white/40">
                {projects.length} projets conçus et livrés de bout en bout.
              </p>
            </div>
          </div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

        <Contact />
      </main>
    </>
  );
}
