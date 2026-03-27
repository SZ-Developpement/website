interface StatsCardProps {
  id: number;
  label: string;
  value: string;
}

export function StatsCard({ stats }: { stats: StatsCardProps[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border-card divide-y divide-border-card">
      {stats.map((stat) => (
        <div 
          key={stat.id} 
          className="flex flex-row items-center justify-between gap-2 bg-bg-card hover:bg-hover-secondary p-6 transition-colors"
        >
          <span className="text-text-secondary text-sm font-body">{stat.label}</span>
          <span className="text-xl font-extrabold font-display">{stat.value}</span>
        </div>
      ))}
    </div>
  )
}