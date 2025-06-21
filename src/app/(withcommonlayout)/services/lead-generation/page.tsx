
'use client';

import { useEffect, useState } from 'react';
import PageHeader from '@/components/DetailsPage/Pageheader';
import ServiceDetail from '@/components/DetailsPage/ServiceDetails';
import { getServiceById } from '@/service/addservice';
import { IServiceInput } from '@/type/type';
import { notFound } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

const SERVICE_ID = 'lead-generation'; // Specific ID for this service page

export default function LeadGenerationPage() {
  const [service, setService] = useState<IServiceInput | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        const response = await getServiceById(SERVICE_ID);

        if (response && response.data) {
          setService(response.data);
        } else if (response && !response.data && response.id) {
          setService(response);
        } else {
          setError(`Service with ID ${SERVICE_ID} not found.`);
          setService(null);
        }
      } catch (err) {
        console.error(`Failed to fetch service ${SERVICE_ID}:`, err);
        setError(err instanceof Error ? err.message : `Failed to fetch service.`);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, []);

  if (loading) {
    return (
      <>
        <PageHeader title="Loading Service..." description="Please wait while we fetch the details." />
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6 mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
          </div>
        </section>
      </>
    );
  }

  if (error && !service) {
    notFound();
  }

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHeader title={service.title} description={service.shortDescription} />
      <ServiceDetail service={service} />
    </>
  );
}