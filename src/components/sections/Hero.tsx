import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SZSection from "../layout/SZSection";
import { Badge } from "../ui/badge";
import { stats } from "../../../data/pages/hero";
import { FloatingBadge, HeroTerminalCard } from "../ui/terminal";
import { GithubIcon } from "../icons/Github";
import { SZSocial } from "../../../data/sz/social";

export default function Hero() {
  return (
    <SZSection id="hero" className="grid grid-cols-2 items-center gap-20">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Badge text="Étudiants en dev · Projets ouverts" />

          <h1 className="font-display text-7xl font-extrabold leading-none">
            Nous sommes la
            <br />
            <span className="gradient-text-blue">prochaine</span>
            <br />
            génération.
          </h1>
        </div>

        <p className="text-text-secondary text-body max-w-lg">
          SZ-Development est un collectif d&apos;étudiants en développement qui codent avec les standards de l&apos;industrie — des stacks modernes, une rigueur pro, et la faim de ceux qui ont tout à prouver.
        </p>

        <div className="flex flex-row flex-wrap gap-3">
          <Link href="/projects" className="flex flex-row items-center justify-center gap-2 bg-bg-button border border-transparent text-bg-card px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-white">
            Voir nos projets <ArrowRight size={15} />
          </Link>

          <Link href={SZSocial.github} className="flex flex-row items-center justify-center gap-2 bg-transparent border border-border-card text-bg-button px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:border-text-secondary hover:bg-bg-card">
            <GithubIcon size={15} /> Github
          </Link>
        </div>

        <div className="border-t border-bg-hover " />

        <div className="flex flex-row items-center gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 items-start">
              <span className="px-1 text-3xl font-bold text-text-primary font-display">{stat.val}</span>
              <span className="text-sm text-text-secondary">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <HeroTerminalCard />
        <FloatingBadge />
      </div>
    </SZSection>
  )
}