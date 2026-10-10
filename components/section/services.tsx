import Section from "@/components/layout/Section";
import { services } from "@/lib/sz-dev";
import { ServiceProps } from "@/lib/types";

export default function Services() {
  const principal = services.find((service) => service.highlight);
  const autres = services.filter((service) => !service.highlight);

  return (
    <Section id="services" contentClassName="flex flex-col gap-12">
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
          Ce que je{" "}
          <span className="serif text-[1.2em] font-normal">construis</span>.
        </h2>
        <p className="max-w-lg text-sm leading-relaxed text-muted">
          Quatre façons de travailler ensemble, du site vitrine à la reprise
          d&apos;un projet laissé en plan.
        </p>
      </div>

      <div className="grid gap-2 rounded-3xl border border-line bg-foreground/4 p-2 lg:grid-cols-[1.15fr_1fr]">
        {principal && <CarteMiseEnAvant {...principal} />}

        <div className="flex flex-col gap-2">
          {autres.map((service) => (
            <CarteCompacte key={service.titre} {...service} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function CarteMiseEnAvant({ icon: Icon, titre, desc, tags }: ServiceProps) {
  const [premierMot, ...reste] = titre.split(" ");

  return (
    <article className="relative flex flex-col gap-6 overflow-hidden rounded-2xl bg-foreground p-8 sm:p-10">
      {/* meme grille et meme halo que la bande d'engagements et le bloc CTA */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.045) 1px, transparent 1px), radial-gradient(ellipse 60% 70% at 50% 0%, rgba(255,255,255,.08) 0%, transparent 70%)",
          backgroundSize: "76px 100%, 100% 100%",
        }}
      />

      <span className="relative flex size-11 shrink-0 items-center justify-center rounded-2xl border border-background/15 bg-background/8 text-background">
        <Icon size={18} />
      </span>

      <div className="relative flex flex-col gap-3">
        <h3 className="text-[clamp(1.5rem,3vw,1.9rem)] font-extrabold leading-tight tracking-[-0.03em] text-background">
          {premierMot}{" "}
          <span className="serif text-[1.15em] font-normal">
            {reste.join(" ")}
          </span>
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-background/60">
          {desc}
        </p>
      </div>

      <div className="relative mt-auto flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-background/20 px-2.5 py-1 text-[11px] font-medium text-background/60"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function CarteCompacte({ icon: Icon, titre, desc }: ServiceProps) {
  return (
    <article className="flex flex-1 flex-row items-start gap-4 rounded-2xl border border-line bg-surface p-6">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-line bg-foreground/4">
        <Icon size={16} />
      </span>
      <div className="flex flex-col gap-1">
        <h3 className="text-[15px] font-semibold tracking-[-0.02em]">
          {titre}
        </h3>
        <p className="text-[13px] leading-relaxed text-muted">{desc}</p>
      </div>
    </article>
  );
}
