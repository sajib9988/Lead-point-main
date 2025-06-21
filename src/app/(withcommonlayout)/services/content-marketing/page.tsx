
'use client';

import { useEffect, useState } from 'react';
import PageHeader from '@/components/DetailsPage/Pageheader';
import ServiceDetail from '@/components/DetailsPage/ServiceDetails';
import { getServiceById } from '@/service/addservice';
import { IServiceInput } from '@/type/type';
import { notFound } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton'; // For loading state

const SERVICE_ID = 'content-marketing'; // Or derive from params if dynamic route

export default function ContentMarketingPage() {
  const [service, setService] = useState<IServiceInput | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        const response = await getServiceById(SERVICE_ID);

        // Assuming getServiceById returns the service object directly or nested under `data`
        // The log in addservice/index.ts is `console.log(`✅ Service (${id}) Response:`, data);` where data is `await res.json()`.
        // This usually means `data` is an object like { success: ..., data: serviceObject }
        if (response && response.data) {
          setService(response.data);
        } else if (response && !response.data && response.id) {
          // If response is the service object directly (less common for POST/PUT style APIs but possible for GET by ID)
          setService(response);
        }
        else {
          // If service is not found by API, or unexpected structure
          // console.warn(`Service with ID ${SERVICE_ID} not found or unexpected response structure:`, response);
          setError(`Service with ID ${SERVICE_ID} not found.`); // Set error to trigger notFound later if service remains null
          setService(null); // Explicitly set to null
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
    // If there was an error and service is not set, this could mean not found or another fetch error
    // notFound() should be called for 404 type errors.
    // For other errors, you might want to show an error message.
    // For simplicity, if service is null after trying, assume notFound.
    // A more robust error handling might distinguish API errors from "not found" errors.
    notFound();
  }

  if (!service) {
    // This will be caught if service is null after loading & no major error caused early exit.
    // This includes the case where API returns null/empty for data.
    notFound();
  }

  return (
    <>
      <PageHeader title={service.title} description={service.shortDescription} />
      <ServiceDetail service={service} />
    </>
  );
}