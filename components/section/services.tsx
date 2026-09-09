import SzSection from "../layout/szSection";
import { services } from "@/lib/data/services";
import ServicesCard from "../card/ServicesCard";

export default function Services() {
  return (
    <SzSection
      id="services"
      title="Services"
      description="Les services que nous offrons"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServicesCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </SzSection>
  );
}
