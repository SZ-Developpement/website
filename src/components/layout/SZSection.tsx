export default function SZSection({id, className, children}: {id: string, className?: string, children: React.ReactNode}) {
  return (
    <section id={id} className={`min-h-screen max-w-360 w-full mx-auto relative overflow-hidden ${className || 'flex'}`}>
      {children}
    </section>
  );
}

export function SZSection2({id, className, children}: {id: string, className?: string, children: React.ReactNode}) {
  return (
    <div className="bg-bg-secondary border-y border-bg-tags">
      <section id={id} className={`min-h-screen max-w-360 w-full mx-auto relative overflow-hidden ${className || 'flex'}`}>
        {children}
      </section>
    </div>
  );
}

export function SZSectionPage({id, className, children}: {id: string, className?: string, children: React.ReactNode}) {
  return (
    <section id={id} className={`min-h-screen max-w-360 pt-30 w-full mx-auto relative overflow-hidden ${className || 'flex'}`}>
      {children}
    </section>
  );
}