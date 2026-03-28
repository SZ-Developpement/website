import { UserCard } from "@/components/card/UserCard";
import { Header } from "@/components/layout/Header";
import { SZSectionPage } from "@/components/layout/SZSection";
import { Badge } from "@/components/ui/badge";
import { teamMembers } from "../../../data/sz/team";


export default function Team() {

  return (
    <>
      <Header />
      <SZSectionPage id="team" className="flex flex-col items-center gap-12 md:gap-15">
        <div className="flex flex-col gap-5 w-full">
          <Badge text="L'équipe" status={false} />
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none">
            La prochaine{" "}
            <span className="gradient-text-blue">génération.</span>
          </h2>
          <p className="font-normal text-text-secondary font-body max-w-150">
              Quatre étudiants en développement, une ambition commune : livrer
              des produits dont on est fiers, avec les standards de l&apos;industrie.
          </p>
        </div>

        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {teamMembers.map((member) => (
            <UserCard key={member.id} member={member} />
          ))}
        </div>
      </SZSectionPage>
    </>
  );
}
