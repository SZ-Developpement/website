"use client";

import { Plus } from "lucide-react";
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
    <div className="max-w-7xl mx-auto flex flex-col gap-6 my-6">
      <div className="flex flex-row items-center justify-between p-4">
        <h1 className="text-2xl font-bold">Dashboard Admin</h1>
        <button className="flex flex-row items-center gap-2 bg-white hover:bg-white/60 text-black font-medium py-1.5 px-4 rounded-md transition-colors duration-300">
          <Plus size={16} />
          Ajouter un projet
        </button>
      </div>

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
    </div>
  );
}
