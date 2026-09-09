export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center">
      {/* bg */}
      <div className="absolute inset-0 grid-fade pointer-events-none" />

      {/* content */}
      <div className="w-full relative max-w-3xl px-6 pt-20 pb-16 text-center flex flex-col items-center justify-center gap-4">
        <h1 className="text-[40px] sm:text-[48px] leading-[1.1] font-semibold tracking-tight">
          Deux lettres. Une exigence.
        </h1>
        <p className="text-white/45 text-base max-w-xl">
          Formés au développement, on construit vos apps web et mobile de
          l&apos;architecture au déploiement, sans sous-traiter un maillon.
        </p>
      </div>
    </section>
  );
}
