import TeamsCard from "../card/TeamsCard";
import { teams } from "@/lib/data/teams";

export default function Teams() {
  return (
    <section
      id="team"
      className="max-w-7xl mx-auto flex flex-col gap-4 px-6 pb-8"
    >
      <h2 className="eyebrow">Équipe</h2>
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
    </section>
  );
}
