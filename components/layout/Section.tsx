export default function Section({
  id,
  className = "",
  contentClassName = "",
  children,
}: {
  id: string;
  /** s'applique a la <section> : fond, marges, overflow */
  className?: string;
  /** s'applique au conteneur interieur : mise en page du contenu */
  contentClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={className}>
      <div
        className={`mx-auto w-full max-w-7xl px-6 py-24 ${contentClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
