
'use client';

import { useEffect, useState } from 'react';
import PageHeader from '@/components/DetailsPage/Pageheader';
import ServiceCard from '@/components/home-section/ServiceCard';
import { getAllServices } from '@/service/addService';
import { IServiceInput } from '@/type/type'; // Assuming IServiceInput is the correct type for service items
import { Skeleton } from '@/components/ui/skeleton'; // For loading state

export default function ServicesPage() {
  const [services, setServices] = useState<IServiceInput[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await getAllServices();   
        if (Array.isArray(response)) {
          setServices(response);
        } else if (response && Array.isArray(response.data)) { // Common API pattern
          setServices(response.data);
        } else {
        
          setServices([]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch services');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <>
      <PageHeader
        title="Our Services"
        description="Explore our comprehensive range of marketing services designed to elevate your brand and drive business growth. We tailor our expertise to meet your unique needs."
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-2">
          {loading ? (
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex flex-col space-y-3">
                  <Skeleton className="h-[200px] w-full rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : services.length === 0 ? (
             <p className="text-center text-muted-foreground">No services currently available.</p>
          ) :(
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
              {services.map((service) => (
                // Ensure service has a unique id for the key
                <ServiceCard key={service.id || service.title} service={service} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}