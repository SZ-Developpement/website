"use client";

import React from "react";
import { EditableField } from "@/components/admin/EditableField";
import { GraduationCap, MapPin, Globe } from "lucide-react";
import { GithubIcon } from "@/components/icons/Github";
import { LinkedinIcon } from "@/components/icons/linkedin";
import Image from "next/image";
import { HeaderAdmin } from "@/components/layout/HeaderAdmin";
import { SZSectionPage } from "@/components/layout/SZSection";

type Member = {
  id: string;
  name: string;
  alias: string;
  role: string;
  spec: string;
  formation: string;
  localisation: string;
  age: number;
  bio: string;
  github: string;
  linkedin: string;
  portfolio: string;
  avatar: string;
  gradient: string;
  initials: string;
  stack: { name: string; category: string; icon: string }[];
};

export default function ProfilePage() {
  const [member, setMember] = React.useState<Member | null>(null);

  React.useEffect(() => {
    fetch("/api/admin/profile")
      .then((res) => res.json())
      .then(setMember);
  }, []);

  const handleUpdate = (field: string, value: string) => {
    setMember((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  if (!member)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-white/40 text-sm">Chargement...</p>
      </div>
    );

  return (
    <>
      <HeaderAdmin />
      <SZSectionPage id="user" className="flex flex-col gap-12 md:gap-15">
        <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-8 w-full">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center gap-3 text-text-secondary font-body text-xs">
                {/* Modifier le pseudonyme */}
                <EditableField
                  label="Pseudonyme"
                  field="alias"
                  value={member.alias}
                  memberId={member.id}
                  placeholder="@pseudo"
                  onSuccess={handleUpdate}
                >
                  <span className="font-mono text-sz">
                    @{member.alias || "Pseudonyme"}
                  </span>
                </EditableField>

                <span className="hidden xs:inline">·</span>

                {/* Modifier la formation */}
                <EditableField
                  label="Formation"
                  field="formation"
                  value={member.formation}
                  memberId={member.id}
                  placeholder="Ecole, CDI, Université..."
                  onSuccess={handleUpdate}
                >
                  <span className="flex flex-row items-center gap-1">
                    <GraduationCap size={12} />
                    {member.formation || "Formation"}
                  </span>
                </EditableField>

                <span className="hidden xs:inline">·</span>

                <span className="flex flex-row items-center gap-1">
                  {/* Modifier la localisation */}
                  <EditableField
                    label="Localisation"
                    field="localisation"
                    type="text"
                    value={member.localisation || ""}
                    memberId={member.id}
                    placeholder="France, Remote..."
                    onSuccess={handleUpdate}
                  >
                    <MapPin size={12} />
                    France
                  </EditableField>{" "}
                  · {/* Modifier l'âge */}
                  <EditableField
                    label="Âge"
                    field="age"
                    type="number"
                    value={member.age ? String(member.age) : ""}
                    memberId={member.id}
                    placeholder="23"
                    onSuccess={handleUpdate}
                  >
                    {member.age || "00"} ans
                  </EditableField>
                </span>
              </div>

              {/* Modifier le nom */}
              <EditableField
                label="Nom"
                field="name"
                value={member.name}
                memberId={member.id}
                placeholder="Prénom Nom"
                onSuccess={handleUpdate}
              >
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none">
                  {member.name || "Prénom Nom"}
                </h1>
              </EditableField>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3 text-[#3a3a3a] font-body">
                {/* Modifier le role */}
                <EditableField
                  label="Rôle"
                  field="role"
                  value={member.role}
                  memberId={member.id}
                  placeholder="Développeur ..."
                  onSuccess={handleUpdate}
                >
                  <p className="text-base md:text-lg text-text-secondary font-body font-normal">
                    {member.role || "Rôle"}{" "}
                  </p>
                </EditableField>

                <span className="hidden xs:inline">·</span>

                {/* Modifier la spécialité */}
                <EditableField
                  label="Spécialité"
                  field="spec"
                  value={member.spec}
                  memberId={member.id}
                  placeholder="Full Stack · Architecture"
                  onSuccess={handleUpdate}
                >
                  <span>{member.spec || "Spécialité"}</span>
                </EditableField>
              </div>
            </div>

            {/* Modifier la biographie */}
            <EditableField
              label="Biographie"
              field="bio"
              type="textarea"
              value={member.bio}
              memberId={member.id}
              placeholder="Parle de toi..."
              onSuccess={handleUpdate}
            >
              <p className="text-text-secondary font-body font-normal max-w-150">
                {member.bio || "Ajouter une biographie..."}
              </p>
            </EditableField>

            <div className="flex flex-row gap-2 flex-wrap">
              {/* Modifier le lien Github */}
              <EditableField
                label="Lien Github"
                field="github"
                type="text"
                value={member.github}
                memberId={member.id}
                placeholder="https://github.com/"
                onSuccess={handleUpdate}
              >
                <ButtonSocial label="Github" Icon={GithubIcon} />
              </EditableField>

              {/* Modifier le lien LinkedIn */}
              <EditableField
                label="Lien LinkedIn"
                field="linkedin"
                type="text"
                value={member.linkedin}
                memberId={member.id}
                placeholder="https://linkedin.com/"
                onSuccess={handleUpdate}
              >
                <ButtonSocial label="LinkedIn" Icon={LinkedinIcon} />
              </EditableField>

              {/* Modifier le lien Portfolio */}
              <EditableField
                label="Lien Portfolio"
                field="portfolio"
                type="text"
                value={member.portfolio}
                memberId={member.id}
                placeholder="https://sitepersonnel.com/"
                onSuccess={handleUpdate}
              >
                <ButtonSocial label="Portfolio" Icon={Globe} />
              </EditableField>
            </div>
          </div>

          <div className="shrink-0 self-start sm:self-auto">
            <EditableField
              label="Avatar (URL)"
              field="avatar"
              value={member.avatar}
              memberId={member.id}
              placeholder="https://..."
              onSuccess={handleUpdate}
            >
              {member.avatar ? (
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={200}
                  height={200}
                  unoptimized
                  className="rounded-3xl w-32 h-32 sm:w-44 sm:h-44 md:w-50 md:h-50"
                />
              ) : (
                <div
                  className={`aspect-square w-32 h-32 sm:w-44 sm:h-44 md:w-50 md:h-50 rounded-3xl ${member.gradient || "bg-linear-135 from-sz to-[#00b4d8]"} flex items-center justify-center font-display text-4xl md:text-[56px] font-extrabold text-white relative`}
                  style={{ boxShadow: "0 12px 48px rgba(0,0,0,0.4)" }}
                >
                  {member.name?.charAt(0) || "?"}
                </div>
              )}
            </EditableField>
          </div>
        </div>
      </SZSectionPage>
    </>
  );
}

export function ButtonSocial({
  label,
  Icon,
}: {
  label: string;
  Icon: React.ComponentType<{ size: number }>;
}) {
  return (
    <div className="flex flex-row items-center gap-1.5 bg-bg-card hover:bg-bg-dark text-text-secondary hover:text-text-primary border border-border-card rounded-lg py-1.5 px-3.5 text-sm transition-colors duration-300">
      <Icon size={14} />
      {label}
    </div>
  );
}
