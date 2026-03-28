"use client";

import { useState } from "react";
import { projects } from "../../../data/sz/projects";
import { Header } from "@/components/layout/Header";
import { SZSectionPage } from "@/components/layout/SZSection";
import { Badge } from "@/components/ui/badge";
import { Filter, filters } from "../../../data/pages/projects";
import { ProjectCardImage } from "@/components/card/ProjectCard";

export default function Projects() {
  const [active, setActive] = useState<Filter>("all");
  
    const filtered =
      active === "all" ? projects : projects.filter((p) => p.type === active);
  
  return (
    <>
    <Header />
      <SZSectionPage id="projects" className="flex flex-col items-center gap-12 md:gap-15">
        <div className="flex flex-col gap-5 w-full">
          <Badge text="Réalisations" status={false} />
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none">
            Ce qu&apos;on a{" "}
            <span className="gradient-text-blue">construit.</span>
          </h2>
          <p className="font-normal text-text-secondary font-body max-w-120">
            Projets d&apos;équipe, side-projects perso, outils internes —
            tout ce qu&apos;on a livré depuis la création du collectif.
          </p>
        </div>

        <div className="flex flex-col gap-8 pt-8 border-t border-border-card w-full">
          <div className="flex flex-row gap-3 flex-wrap">
            {filters.map((filter) => {
              const count = 
                filter.key === "all"
                  ? projects.length
                  : projects.filter((p) => p.type === filter.key).length;
              const isActive = active === filter.key;
              return (
                <button key={filter.key} onClick={() => setActive(filter.key)} className={`flex flex-row items-center justify-center gap-2 py-1.5 px-4 rounded-lg text-sm font-medium font-body cursor-pointer border ${isActive ? "border-sz bg-[rgba(0,112,243,0.08)] text-sz" : "border-border-card text-text-secondary bg-transparent hover:text-text-primary hover:border-[#3a3a3a]"} transition-colors duration-500`}>
                  {filter.label}
                  <span className={` px-1.5 py-0.5 rounded-full text-xs font-mono ${isActive ? "bg-[rgba(0,112,243,0.2)] text-sz" : "bg-bg-tags text-text-secondary"} transition-colors duration-500`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((project) => (
              <ProjectCardImage
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>
      </SZSectionPage>
    </>
  );
}