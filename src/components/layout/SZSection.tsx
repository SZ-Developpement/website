export default function SZSection({id, className, children}: {id: string, className?: string, children: React.ReactNode}) {
  return (
    
    <section id={id} className={`min-h-[800px] md:min-h-screen max-w-[1400px] w-full mx-auto px-6 md:px-8 lg:px-12 relative ${className || 'flex'}`}>
      {children}
    </section>
  );
}
export function SZSection2({id, className, children}: {id: string, className?: string, children: React.ReactNode}) {
  return (
    <div className="bg-bg-secondary border-y border-bg-tags">
      <section id={id} className={`min-h-[800px] md:min-h-screen max-w-[1400px] w-full mx-auto px-6 md:px-8 lg:px-12 relative ${className || 'flex'}`}>
        {children}
      </section>
    </div>
  );
}

export function SZSectionPage({id, className, children}: {id: string, className?: string, children: React.ReactNode}) {
  return (
    <section id={id} className={`min-h-screen max-w-[1400px] pt-30 w-full mx-auto px-6 md:px-8 lg:px-12 relative ${className || 'flex'}`}>
      {children}
    </section>
  );
}