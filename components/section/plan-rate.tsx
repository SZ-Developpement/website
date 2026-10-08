import Section from "@/components/layout/Section";
import PlansCard from "../plan/plans-card";

export default function PlanRate() {
  return (
    <Section id="plan-rate" contentClassName="flex flex-col items-center gap-8">
      <h1 className="text-3xl font-medium leading-[0.96] tracking-[-0.035em]">
        Choisissez{" "}
        <span className="serif text-[1.2em] font-normal">le plan</span> adapté à
        vos besoins.
      </h1>

      <PlansCard />
    </Section>
  );
}
