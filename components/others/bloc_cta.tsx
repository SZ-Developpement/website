import Link from "next/link";
import { social } from "@/lib/sz-dev";

export default function BlocCTA() {
  return (
    // Bloc CTA : la derniere occasion de convertir avant la sortie
    <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl bg-foreground px-7 py-14 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.045) 1px, transparent 1px), radial-gradient(ellipse 60% 70% at 50% 0%, rgba(255,255,255,.08) 0%, transparent 70%)",
          backgroundSize: "76px 100%, 100% 100%",
        }}
      />

      {/* Text de CTA */}
      <div className="relative flex flex-col items-center gap-2 max-w-sm">
        <h2 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold leading-tight tracking-[-0.03em] text-background">
          <span className="serif text-[1.15em] font-normal">Un projet</span> en
          tête ?
        </h2>
        <p className="text-sm text-background/55">
          Dites-nous ce que vous voulez construire. Réponse sous 48h, sans
          engagement.
        </p>
      </div>

      <Link
        href={`mailto:${social.email}`}
        className="relative whitespace-nowrap rounded-full bg-surface px-4.5 py-2 text-sm font-semibold text-foreground transition-opacity hover:opacity-80"
      >
        Démarrer un projet
      </Link>
    </div>
  );
}
