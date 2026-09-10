import { StepCardProps } from "@/types/type";

export default function StepCard({
  step,
  icon: Icon,
  color,
  bgcolor,
  title,
  description,
}: StepCardProps) {
  return (
    <div className="relative h-full bg-[#0a0a0b] border border-transparent hover:border-[rgba(255,255,255,0.16)] rounded-2xl transition-all duration-150 hover:bg-[#0d0d0e] p-5 overflow-hidden flex flex-col group">
      <span className="absolute -top-3 -right-1 text-7xl font-black text-white/4 select-none leading-none">
        {step}
      </span>

      <div className="relative flex flex-col gap-3">
        <div
          className={`size-9 rounded-lg flex items-center justify-center`}
          style={{ color: color, backgroundColor: bgcolor }}
        >
          <Icon size={18} />
        </div>

        <div className="flex flex-col gap-1">
          <div className="font-medium text-sm">{title}</div>
          <div className="text-xs text-white/45 leading-relaxed">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}
