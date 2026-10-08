import { planRate } from "@/lib/sz-dev";
import { PlanRateCardProps } from "@/lib/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PlansCard() {
  return (
    <div className="w-full grid grid-cols-3 bg-[#e5e6eb] border border-black/5 rounded-3xl p-6">
      {planRate
        .filter((plan) => plan.devis === false)
        .map((plan, index) => (
          <PlanRateCard
            key={index}
            icon={plan.icon}
            title={plan.title}
            price={plan.price}
            desc={plan.desc}
            features={plan.features}
            devis={plan.devis}
          />
        ))}

      <div className="col-span-2 w-full flex flex-row rounded-2xl bg-[#FFFFFF] border border-black/10">
        {planRate
          .filter((plan) => plan.devis === true)
          .map((plan, index) => (
            <PlanRateCard
              key={index}
              icon={plan.icon}
              title={plan.title}
              price={plan.price}
              desc={plan.desc}
              features={plan.features}
              devis={plan.devis}
            />
          ))}
      </div>
    </div>
  );
}

function PlanRateCard({
  icon: Icon,
  title,
  price,
  desc,
  features,
  devis,
}: PlanRateCardProps) {
  return (
    <div className={`flex flex-col gap-4 justify-between w-full p-6`}>
      {/* Contenu du plan */}
      <div className="flex flex-col gap-5">
        {/* Titre du plan */}
        <div className="flex flex-row items-center gap-4">
          {/* Icon du plan */}
          <div className="w-12 h-12 bg-white border border-black/10 rounded-2xl flex items-center justify-center">
            <Icon size={18} />
          </div>

          <h2 className="text-lg">{title}</h2>
        </div>

        {/* Informations du plan */}
        <div className="flex flex-col gap-1">
          {/* Prix du plan */}
          <div className="flex flex-row items-center gap-1">
            <span className="text-xl font-medium">{price}€ </span>
          </div>

          {/* Description du plan */}
          <p className="text-sm text-gray-500">{desc}</p>
        </div>

        {/* Fonctionnalités du plan */}
        <ul className="flex flex-col gap-1">
          {features.map((feature, index) => (
            <li key={index} className="flex flex-row items-center gap-1.5">
              <div className="w-3 h-3 bg-gray-300 rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-[#FFFFFF] rounded-full" />
              </div>
              <p className="text-sm">{feature}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex">
        {devis ? (
          <Link
            href="#"
            className="flex flex-row items-center gap-2 text-sm py-2 px-4 cursor-pointer hover:opacity-70 transition-all duration-300"
          >
            Demander un devis
            <ChevronRight size={16} />
          </Link>
        ) : (
          <Link
            href="#"
            className="flex flex-row items-center justify-center gap-2 bg-black/90 text-sm text-white py-2 w-full rounded-xl hover:opacity-70 cursor-pointer transition-all duration-300"
          >
            Passer commande
          </Link>
        )}
      </div>
    </div>
  );
}
