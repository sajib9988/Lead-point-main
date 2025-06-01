import { services } from "@/lib/constants";
import ServiceCard from "./ServiceCard";

export default function ServicesOverview() {
  return (
    <section className="py-10 mt-1 rounded-4xl md:py-9 bg-blue-200 dark:bg-gray-900 border-4 border-white shadow-lg">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title + Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl dark:text-white">
            Our Core Services
          </h2>
          <p className="mt-4 text-lg text-primary dark:text-gray-300">
            Discover how we can help your business thrive with our specialized marketing solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
