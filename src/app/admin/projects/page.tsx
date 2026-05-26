"use client";

import { HeaderAdmin } from "@/components/layout/HeaderAdmin";
import { SZSectionPage } from "@/components/layout/SZSection";
import React from "react";

type Project = {
  id: number;
  name: string;
  category: string;
  status: string;
  published: boolean;
  year: string;
  stack: string[];
};

export default function AdminPage() {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("/api/admin/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <HeaderAdmin />
      <SZSectionPage id="user" className="flex flex-col gap-12 md:gap-15">
        <div className="flex flex-col gap-3 px-4">
          {loading ? (
            <p className="text-sm text-white/50">Chargement...</p>
          ) : projects.length === 0 ? (
            <div className="flex flex-col items-center gap-2 py-8">
              <p className="text-sm text-white/50">
                Aucun projet pour le moment.
              </p>
            </div>
          ) : (
            projects.map((project) => <p key={project.id}>{project.name}</p>)
          )}
        </div>
      </SZSectionPage>
    </>
  );
}
