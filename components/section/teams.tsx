import SzSection from "../layout/szSection";
import TeamsCard from "../card/TeamsCard";
import { teams } from "@/lib/data/teams";

export default function Teams() {
  return (
    <SzSection
      id="team"
      title="Équipe"
      description="Les membres de notre équipe"
    >
      <div className="grid sm:grid-cols-3 gap-4">
        {teams.map((team) => (
          <TeamsCard
            key={team.name}
            name={team.name}
            role={team.role}
            description={team.description}
            githubUrl={team.githubUrl}
            linkedinUrl={team.linkedinUrl}
            color1={team.color1}
            color2={team.color2}
          />
        ))}
      </div>
    </SzSection>
  );
}
