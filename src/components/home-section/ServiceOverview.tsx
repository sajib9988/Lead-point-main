'use client';

import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { IServiceInput } from '@/type/type';
import { getAllServices } from '@/service/addservice';

 // your interface

export default function ServicesOverview() {
  const [services, setServices] = useState<IServiceInput[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getAllServices();
        // Map the API data to your IServiceInput shape:
        const mapped = data.map((item: IServiceInput) => ({
          id: item.id,
          title: item.title,
          shortDescription: item.shortDescription,
          longDescription: item.longDescription,
          slug: item.slug,
          icon: item.icon,
          image: item.image,
        }));
        setServices(mapped);
        console.log("✅ Services fetched mapped successfully:", mapped); // Debugging log
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <section className="py-10 mt-1 rounded-4xl md:py-9 bg-blue-200 dark:bg-gray-900 border-4 border-white shadow-lg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl dark:text-white">
            Our Core Services
          </h2>
          <p className="mt-4 text-lg text-primary dark:text-gray-300">
            Discover how we can help your business thrive with our specialized marketing solutions.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-muted-foreground">Loading services…</p>
        ) : services.length === 0 ? (
          <p className="text-center text-muted-foreground">No services found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.filter(service => service.id).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
