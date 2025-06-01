
import PageHeader from '@/components/DetailsPage/Pageheader';
import ServiceDetail from '@/components/DetailsPage/ServiceDetails';
import { services } from '@/lib/constants';
import { notFound } from 'next/navigation';

export default function ContentMarketingPage() {
  const service = services.find(s => s.id === 'content-marketing');

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