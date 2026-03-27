import { LucideIcon } from "lucide-react";

interface AboutCardProps {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
}

export function AboutCard({ about }: { about: AboutCardProps }) {
  return (
    <div className="flex flex-col gap-4 bg-bg-card border border-border-card p-6 rounded-xl hover:bg-bg-dark transition-colors duration-300">
      <div className="w-11 aspect-square flex items-center justify-center rounded-full border" style={{backgroundColor: `${about.color}15`, borderColor: `${about.color}30`}}>
        <about.icon size={20} color={about.color} />
      </div>
      <h3 className="text-lg font-display font-bold">{about.title}</h3>
      <p className="text-text-secondary text-sm font-body">{about.desc}</p>
    </div>
  );
}