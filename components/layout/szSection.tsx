export default function SzSection({
  id,
  title,
  description,
  action,
  children,
  ClassName,
}: {
  id: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  ClassName?: string;
}) {
  return (
    <section
      id={id}
      className={`max-w-7xl w-full mx-auto flex flex-col gap-6 px-6 relative overflow-hidden ${ClassName}`}
    >
      <div className="relative flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
          {description && (
            <p className="text-xs text-white/40">{description}</p>
          )}
        </div>

        {action && <div className="shrink-0">{action}</div>}
      </div>

      {children}
    </section>
  );
}
