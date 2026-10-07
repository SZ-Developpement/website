import Section from "@/components/layout/Section";
import { engagements } from "@/lib/sz-dev";

export default function Engagements() {
  return (
    <Section id="engagements" padding="py-12">
      <div className="relative grid gap-10 overflow-hidden rounded-3xl bg-foreground p-12 sm:grid-cols-3 sm:gap-14">
        {/* Effet de filet */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.045) 1px, transparent 1px), radial-gradient(ellipse 60% 80% at 50% 0%, rgba(255,255,255,.07) 0%, transparent 70%)",
            backgroundSize: "76px 100%, 100% 100%",
          }}
        />

        {engagements.map((item) => (
          <div
            key={item.valeur}
            className="relative flex flex-col gap-1.5 items-center"
          >
            <span className="text-[clamp(2rem,3.5vw,2.5rem)] font-extrabold leading-none tracking-[-0.045em] text-background">
              {item.valeur}
            </span>
            <span className="text-sm text-background/50">
              {item.libelle}{" "}
              <span className="serif text-[1.2em] text-background">
                {item.accent}
              </span>
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
