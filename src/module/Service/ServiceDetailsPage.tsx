import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import PageHeader from "@/components/DetailsPage/Pageheader";
import ServiceDetail from "@/components/DetailsPage/ServiceDetails";

import { IServiceInput } from "@/type/type";
import { Skeleton } from "@/components/ui/skeleton";
import { getServiceById } from "@/service/addService";

export default function ServiceDetailsModulePage() {
  const params = useParams();
  const serviceId = params?.id as string;
  const [service, setService] = useState<IServiceInput | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!serviceId) return;
    const fetchService = async () => {
      try {
        setLoading(true);
        const response = await getServiceById(serviceId);
        if (response && response.data) {
          setService(response.data);
        } else if (response && !response.data && response.id) {
          setService(response);
        } else {
          setError(`Service with ID ${serviceId} not found.`);
          setService(null);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : `Failed to fetch service.`);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [serviceId]);

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
      <ServiceDetail service={{
        id: service.id ?? serviceId,
        title: service.title,
        shortDescription: service.shortDescription,
        longDescription: service.longDescription,
        icon: service.icon ?? '',
        slug: service.slug,
        image: service.image ?? '',
      }} />
    </>
  );
}
