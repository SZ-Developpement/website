import SZSection from "../layout/SZSection";
import { Badge } from "../ui/badge";
import { teamMembers } from "../../../data/sz/team";
import { UserCardView } from "../card/UserCard";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Team() {
  return (
    <SZSection id="team" className="flex flex-col justify-center items-center gap-20">
      <div className="flex flex-col items-center justify-center gap-5">
        <Badge status={false} text="L'équipe"/>
        <h2 className="font-display text-5xl font-extrabold leading-none text-center">
          Derrière le code,{" "}
          <span className="gradient-text">la prochaine vague.</span>
        </h2>


        <Link href="/team" className="inline-flex items-center gap-2 font-normal text-text-secondary font-body max-w-150 text-center hover:text-text-primary transition-colors duration-300">
          Voir l&apos;équipe <ArrowUpRight size={16} />
        </Link>

      </div>

      <div className="col-span-2 grid grid-cols-3 gap-4">
        {teamMembers.slice(0, 6).map((member) => (
          <UserCardView key={member.id} member={member} />
        ))}
      </div>

    </SZSection>
  );
}