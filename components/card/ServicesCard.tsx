import { ServicesCardProps } from "@/types/type";

export default function ServicesCard({
  icon: Icon,
  title,
  description,
}: ServicesCardProps) {
  return (
    <div className="bg-[#0a0a0b] border border-[rgba(255,255,255,0.08)] rounded-2xl transition-all duration-150 hover:border-[rgba(255,255,255,0.16)] hover:bg-[#0d0d0e] p-5 overflow-hidden flex flex-col group">
      {/* icon */}
      <div className="size-9 rounded-lg bg-white/[0.06] flex items-center justify-center mb-4">
        <Icon size={18} />
      </div>
      {/* content */}
      <div className="flex flex-col gap-1.5">
        <h2 className="font-medium text-sm">{title}</h2>
        <p className="text-xs text-white/45 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
