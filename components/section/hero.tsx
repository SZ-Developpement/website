import Link from "next/link";
import { currentStatus } from "@/lib/sz-dev";
import Section from "@/components/layout/Section";

export default function Hero() {
  return (
    <Section
      id="hero"
      className="relative overflow-hidden"
      padding="pt-28 pb-24"
      contentClassName="flex flex-col items-center gap-6 text-center"
    >
      {/* Grille + halo : le fond du hero, et de lui seul */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-fade-in bg-background/80"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,.028) 1px, transparent 1px), radial-gradient(ellipse 70% 60% at 50% 0%, #fafafa 0%, transparent 72%)",
          backgroundSize: "76px 100%, 100% 100%",
        }}
      />

      {/* Badge du statut */}
      <span className="relative flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-[11.5px] font-semibold text-muted">
        <span
          className="size-1.5 rounded-full animate-pulse"
          style={{ backgroundColor: currentStatus.color }}
        />
        {currentStatus.textProject}
      </span>

      <div className="relative flex max-w-3xl flex-col items-center gap-4">
        {/* Titre */}
        <h1 className="text-[clamp(2.4rem,6vw,3.4rem)] font-extrabold leading-[0.96] tracking-[-0.035em]">
          <span className="serif text-[1.1em] font-normal">
            De l&apos;architecture
          </span>{" "}
          au déploiement.
        </h1>

        {/* Description du service */}
        <p className="max-w-xl text-[15px] font-medium leading-relaxed text-muted">
          Studio de développement web et mobile. Conçu, développé et déployé par{" "}
          <b className="font-bold text-foreground">la même équipe</b>, sans
          sous-traiter un maillon.
        </p>
      </div>

      <Link
        href="/#contact"
        className="relative rounded-full bg-foreground px-5.5 py-2.5 text-sm font-semibold text-background shadow-[0_6px_20px_rgba(0,0,0,0.2)] transition-opacity hover:opacity-80"
      >
        Démarrer un projet
      </Link>
    </Section>
  );
}
