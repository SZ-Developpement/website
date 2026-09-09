import { services } from "@/lib/data/services";
import ServicesCard from "../card/ServicesCard";

export default function Services() {
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto flex flex-col gap-4 px-6 pb-8"
    >
      <h2 className="eyebrow mb-4">Services</h2>
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
    </section>
  );
}
