import SzSection from "../layout/szSection";
import { steps } from "@/lib/data/steps";
import StepCard from "../card/StepCard";

export default function Steps() {
  return (
    <SzSection
      id="process"
      title="Notre processus"
      description="les étapes de notre collaboration pour un projet réussi"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((step) => (
          <StepCard
            key={step.step}
            step={step.step}
            icon={step.icon}
            color={step.color}
            bgcolor={step.bgcolor}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </SzSection>
  );
}
