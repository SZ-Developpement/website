import { TeamsCardProps } from "@/types/type";
import { GitHubIcon } from "../icon/github";
import { LinkedinIcon } from "../icon/linkedin";
import Link from "next/link";

export default function TeamsCard({
  slug,
  name,
  role,
  description,
  githubUrl,
  linkedinUrl,
  color1,
  color2,
}: TeamsCardProps) {
  return (
    <div className="relative bg-[#0a0a0b] p-5 border border-transparent hover:border-[rgba(255,255,255,0.16)] rounded-2xl transition-all duration-200 hover:bg-[#0d0d0e] overflow-hidden flex flex-col gap-4 group">
      <Link
        href={`/team/${slug}`}
        aria-label={`Voir le profil de ${name}`}
        className="absolute inset-0 z-0"
      />
      {/* Image Infos */}
      <div className="flex flex-row gap-4 items-center justify-start">
        <div
          className="size-12 rounded-full flex items-center justify-center text-sm font-semibold"
          style={{
            background: `linear-gradient(135deg, ${color1}, ${color2})`,
          }}
        >
          {name.charAt(0).toUpperCase()}
        </div>

        <div className="flex flex-col gap-1">
          <div className="font-medium text-sm">{name}</div>
          <div className="text-xs text-white/40">{role}</div>
        </div>
      </div>

      <p className="text-xs text-white/40 leading-relaxed">{description}</p>

      {/* Social Links */}
      <div className="relative z-10 flex items-center gap-2 mt-auto">
        <Link
          href={githubUrl}
          target="_blank"
          className="text-white/40 p-1 hover:text-white transition"
        >
          <GitHubIcon size={14} />
        </Link>

        <Link
          href={linkedinUrl}
          target="_blank"
          className="text-white/40 p-1 hover:text-white transition"
        >
          <LinkedinIcon size={14} />
        </Link>

        <span className="ml-auto text-xs text-white/30 group-hover:text-white/60 transition">
          Voir le profil →
        </span>
      </div>
    </div>
  );
}
