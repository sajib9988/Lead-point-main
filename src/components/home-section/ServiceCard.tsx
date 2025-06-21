import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react'; // added middle icon

import { IServiceInput } from '@/type/type';

interface ServiceCardProps {
  service: IServiceInput;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { title, shortDescription, icon, image } = service;

  return (
    <Card className="flex flex-col overflow-hidden h-full border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white rounded-xl">
      <CardHeader className="p-0 relative h-48 w-full">
        <Image
          src={image || '/placeholder.png'}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </CardHeader>

      {/* Middle Icon */}
      <div className="flex justify-center items-center py-4">
            {icon && typeof icon === 'string' && (
            <Image
              src={icon}
              alt="icon"
              width={56}
              height={56}
     
            />
          )}
        {/* <Sparkles className="h-10 w-10 text-blue-500" /> */}
      </div>

      <CardContent className="flex flex-col flex-grow px-6 pb-6 pt-0">
        <div className="flex items-center gap-3 mb-3">
      
          <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
        </div>

        <CardDescription className="text-base text-muted-foreground mb-6">
          {shortDescription}
        </CardDescription>

        <Button asChild variant="outline" className="mt-auto w-full group">
          <Link href={`/services/${service.id}`}>
            Learn More{' '}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
