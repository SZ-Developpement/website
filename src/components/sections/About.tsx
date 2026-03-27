import { stats, values } from "../../../data/pages/about";
import { AboutCard } from "../card/AboutCard";
import { StatsCard } from "../card/StatsCard";
import SZSection from "../layout/SZSection";
import { Badge } from "../ui/badge";

export default function About() {
  return (
    <SZSection id="about" className="flex flex-col justify-center items-center gap-20">
      
      <div className="grid grid-cols-2 items-center gap-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <Badge text="À propos" status={false} />
            <h2 className="font-display text-5xl font-extrabold leading-none">
              Des étudiants qui codent{" "}
              <span className="gradient-text-blue">comme des pros.</span>
            </h2>
            <p className="text-text-secondary font-normal">
              On n&apos;attend pas d&apos;avoir 10 ans d&apos;expérience pour livrer de la qualité.
              SZ-Developpement est né de cette conviction : les meilleures idées
              viennent de ceux qui apprennent encore et refusent les mauvaises habitudes.
            </p>

            <p className="text-text-secondary font-normal">
              On maîtrise les stacks modernes, on suit les standards de l&apos;industrie
              et on apporte un regard neuf sur chaque projet. Du MVP rapide à
              l&apos;architecture scalable, on s&apos;investit comme si c&apos;était le nôtre.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col px-10">
          <StatsCard stats={stats} />
        </div>
      </div>

      <div className="col-span-2 grid grid-cols-3 gap-4">
        {values.map((value) => (
          <AboutCard key={value.title} about={value} />
        ))}
      </div>

    </SZSection>
  );
}