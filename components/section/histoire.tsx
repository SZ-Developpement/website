import SzSection from "../layout/szSection";
import { etapes, lettres } from "@/lib/data/histoire";
import { ArrowRight } from "lucide-react";

export default function Histoire() {
  return (
    <SzSection
      id="histoire"
      title="Notre histoire"
      description="Du crew gaming au collectif de développeurs"
    >
      <div className="flex flex-col gap-8">
        {/* la frise : l'ordre porte une vraie information, d'où la flèche */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 [&>*:nth-child(3n)_.hist-arrow]:hidden [&>*:last-child_.hist-arrow]:hidden">
          {etapes.map(({ when, title, description }) => (
            <div key={when} className="relative">
              <article className="h-full bg-[#0a0a0b] border border-transparent hover:border-[rgba(255,255,255,0.16)] rounded-2xl transition-all duration-150 hover:bg-[#0d0d0e] p-5 flex flex-col gap-3">
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                  {when}
                </div>
                <div className="font-medium text-sm">{title}</div>
                <div className="text-xs text-white/45 leading-relaxed">
                  {description}
                </div>
              </article>
              <span
                aria-hidden="true"
                className="hist-arrow hidden lg:block absolute top-1/2 -right-3.5 -translate-y-1/2 text-white/15"
              >
                <ArrowRight size={14} />
              </span>
            </div>
          ))}
        </div>

        {/* les deux lettres */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-16 border-t border-white/6 pt-8">
          {lettres.map(({ lettre, mot, sens }) => (
            <div key={lettre} className="flex items-center gap-5">
              <span className="text-[40px] font-black text-white/30 leading-none tracking-tight select-none shrink-0 w-8">
                {lettre}
              </span>
              <div className="flex flex-col gap-1">
                <div className="font-medium text-sm">{mot}</div>
                <div className="text-xs text-white/45 leading-relaxed">
                  {sens}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SzSection>
  );
}
