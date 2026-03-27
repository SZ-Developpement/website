import { alltools, toolsCategories } from "../../../data/sz/tools";
import SZSection from "../layout/SZSection";
import { Badge } from "../ui/badge";
import { TagsImage } from "../ui/tags";

export default function Stack() {
  return (
    <SZSection id="stack" className="flex flex-col justify-center items-center gap-20">
      <div className="flex flex-col items-center justify-center gap-5">
        <Badge status={false} text="Stack technique"/>
        <h2 className="font-display text-5xl font-extrabold leading-none text-center">
          Les outils qui font{" "}
          <span className="gradient-text-blue">la différence.</span>
        </h2>
        <p className="font-normal text-text-secondary font-body max-w-180 text-center">
          Nous choisissons nos technologies avec soin, en privilégiant les
          solutions éprouvées et les outils modernes adaptés à chaque projet.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 w-full">
        {toolsCategories.map((cat) => (
          <div key={cat.label} className="flex flex-col gap-4 bg-bg-card border border-border-card p-6 rounded-xl hover:bg-bg-dark relative hover:translate-y-0.5 transition-all duration-500 cursor-pointer" >
            <div className="flex flex-row gap-4 items-center">
              <div className="w-11 aspect-square flex items-center justify-center rounded-lg border" style={{backgroundColor: `${cat.color}15`, borderColor: `${cat.color}30`}}>
                <cat.icon size={20} color={cat.color} />
              </div>
              <h3 className="text-lg font-display font-bold">{cat.label}</h3>
            </div>

            <div className="grid grid-cols-2 gap-1.5 flex-wrap">
              {alltools.filter((tech) => tech.category === cat.label).slice(0, 6).map((tech) => (
                <TagsImage key={tech.name} icon={tech.icon} name={tech.name} />
              ))}
            </div>
          </div>
        ))}

      </div>
    </SZSection>
  );
}