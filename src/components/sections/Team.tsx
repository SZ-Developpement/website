import SZSection from "../layout/SZSection";
import { Badge } from "../ui/badge";
import { teamMembers } from "../../../data/sz/team";
import { UserCardView } from "../card/UserCard";

export default function Team() {
  return (
    <SZSection id="team" className="flex flex-col justify-center items-center gap-20">
      <div className="flex flex-col items-center justify-center gap-5">
        <Badge status={false} text="L'équipe"/>
        <h2 className="font-display text-5xl font-extrabold leading-none text-center">
          Derrière le code,{" "}
          <span className="gradient-text">la prochaine vague.</span>
        </h2>
        <p className="text-text-secondary text-body max-w-150 text-center">
          Quatre étudiants en développement, un seul moteur : livrer des produits qu&apos;on est fiers de montrer.
        </p>
      </div>

      <div className="col-span-2 grid grid-cols-3 gap-4">
        {teamMembers.slice(0, 3).map((member) => (
          <UserCardView key={member.id} member={member} />
        ))}
      </div>

    </SZSection>
  );
}