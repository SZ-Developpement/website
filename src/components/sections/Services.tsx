import { services } from "../../../data/pages/services";
import ServiceCard from "../card/ServiceCard";
import { SZSection2 } from "../layout/SZSection";
import { Badge } from "../ui/badge";


export default function Services() {
  return (
    <SZSection2 id="services" className="flex flex-col justify-center items-center gap-16 md:gap-20 py-24 md:py-0">
      <div className="flex flex-col items-center justify-center gap-5">
        <Badge status={false} text="Services"/>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-none text-center">
          Tout ce dont vous avez besoin,{" "}
          <br className="hidden sm:block"/>
          <span className="gradient-text">sous un même toit.</span>
        </h2>
        <p className="font-normal text-text-secondary font-body max-w-150 text-center">
          De la conception à la mise en production, nous couvrons l&apos;intégralité de la chaîne de valeur produit.
        </p>
      </div>

      <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((s) => (
          <ServiceCard key={s.title} services={s} />
        ))}
      </div>
    </SZSection2>
  );
}