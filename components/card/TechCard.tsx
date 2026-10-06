import Image from "next/image";
import { getTechIcon, isWhiteOnlyLogo } from "@/lib/data/stacks";

export default function TechCard({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-foreground/10 bg-card px-3 py-2 hover:border-foreground/20 hover:bg-card-hover transition-all duration-200 select-none">
      <Image
        src={getTechIcon(name)}
        alt={name}
        width={16}
        height={16}
        className={`size-4 shrink-0 opacity-80 ${
          isWhiteOnlyLogo(name) ? "logo-invert-light" : ""
        }`}
      />
      <span className="text-xs text-foreground/70 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}
