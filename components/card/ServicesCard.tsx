import { ServicesCardProps } from "@/types/type";

export default function ServicesCard({
  icon: Icon,
  title,
  description,
}: ServicesCardProps) {
  return (
    <div className="bg-card border border-transparent shadow-card hover:border-foreground/15 rounded-2xl transition-all duration-150 hover:bg-card-hover p-5 overflow-hidden flex flex-col group">
      {/* icon */}
      <div className="size-9 rounded-lg bg-foreground/[0.06] flex items-center justify-center mb-4">
        <Icon size={18} />
      </div>
      {/* content */}
      <div className="flex flex-col gap-1.5">
        <h2 className="font-medium text-sm">{title}</h2>
        <p className="text-xs text-foreground/45 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
