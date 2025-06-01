
import PageHeader from '@/components/DetailsPage/Pageheader';
import ServiceDetail from '@/components/DetailsPage/ServiceDetails';
import { services } from '@/lib/constants';
import { notFound } from 'next/navigation';

export default function EmailMarketingPage() {
  const service = services.find(s => s.id === 'email-marketing');

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
