export default function SzSection({
  id,
  title,
  description,
  children,
  ClassName,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  ClassName?: string;
}) {
  return (
    <section
      id={id}
      className={`max-w-7xl w-full mx-auto flex flex-col gap-6 px-6 relative overflow-hidden ${ClassName}`}
    >
      <div className="relative flex flex-col gap-1">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        {description && <p className="text-xs text-white/40">{description}</p>}
      </div>

      {children}
    </section>
  );
}
