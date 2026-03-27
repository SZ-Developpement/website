import { ArrowUpRight, LucideIcon } from "lucide-react";

interface ServiceProps {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  tags: string[];
}

export default function ServiceCard({ services }: { services: ServiceProps }) {
  return (
    <div style={{ '--hover-color': `${services.color}60` } as React.CSSProperties} className="flex flex-col gap-4 bg-bg-card border border-border-card p-6 rounded-xl hover:bg-bg-dark relative hover:translate-y-0.5 transition-all duration-500 hover:border-(--hover-color) cursor-pointer">
      <div className="w-11 aspect-square flex items-center justify-center rounded-lg border" style={{backgroundColor: `${services.color}15`, borderColor: `${services.color}30`}}>
        <services.icon size={20} color={services.color} />
      </div>
      <ArrowUpRight size={18} className="absolute top-8 right-8 text-border-card" />
      <h3 className="text-lg font-display font-bold">{services.title}</h3>
      <p className="text-text-secondary text-sm font-body">{services.desc}</p>
      <div className="flex flex-row gap-1.5 flex-wrap items-center justify-start">
        {services.tags.map((tag) => (
          <div key={tag} className="bg-bg-tags text-text-secondary text-xs font-body px-2 py-1 rounded">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}