import Image from "next/image";
import { getTechIcon } from "@/lib/data/stacks";

export default function TechCard({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0a0a0b] px-3 py-2 hover:border-white/20 hover:bg-[#0d0d0e] transition-all duration-200 select-none">
      <Image
        src={getTechIcon(name)}
        alt={name}
        width={16}
        height={16}
        className="size-4 shrink-0 opacity-80"
      />
      <span className="text-xs text-white/70 whitespace-nowrap">{name}</span>
    </div>
  );
}
