import { ProjectCardProps } from "@/types/type";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  icon,
  year,
  category,
  url,
  backgroundColor,
}: ProjectCardProps) {
  const Icon = icon;

  // function qui retire https:// et le www. du lien pour ne garder que le nom de domaine et le chemin et le / de fin
  const removeDomainFromUrl = (url: string) => {
    const urlWithoutProtocol = url.replace(/(^\w+:|^)\/\//, "");
    const urlWithoutWww = urlWithoutProtocol.replace(/^www\./, "");
    return urlWithoutWww;
  };

  return (
    <Link
      href={url}
      target="_blank"
      className="bg-[#0a0a0b] border border-transparent hover:border-[rgba(255,255,255,0.16)] rounded-2xl transition-all duration-150 hover:bg-[#0d0d0e] overflow-hidden flex flex-col group"
    >
      <div
        className="h-28 flex items-center justify-center relative overflow-hidden "
        style={{
          background: `radial-gradient(circle at 30% 20%, ${backgroundColor}, #0a0a0b 70%)`,
        }}
      >
        <Icon size="30" className="text-white/70 relative" />
      </div>

      {/* Card content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="text-xs text-white/35 mb-2">
          {year} · {category}
        </div>
        <div className="font-medium text-sm mb-1">{title}</div>
        <div className="text-xs text-white/40 leading-relaxed flex-1">
          {description}
        </div>
        <div className="text-xs text-white/30 mt-3 group-hover:text-white/60 transition">
          {removeDomainFromUrl(url)} →
        </div>
      </div>
    </Link>
  );
}
