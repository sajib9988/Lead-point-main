import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { ArrowRight } from 'lucide-react';

import { IServiceInput } from '@/type/type';

interface ServiceCardProps {
  service: IServiceInput;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { id, title, shortDescription, icon,  image } = service;
  return (
    <Card className="flex flex-col overflow-hidden h-full  hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 border-4 border-white shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full p-1">
          <Image 
            src={image || '/placeholder.png'} 
            alt={title} 
            layout="fill" 
            objectFit="cover"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow p-6">
        <div className="flex items-center mb-3">
          {icon && typeof icon === 'string' ? (
            <Image
              src={icon}
              alt="icon"
              width={32}
              height={32}
              className="h-8 w-8 text-primary mr-3"
            />
          ) : null}
          <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
        </div>
        <CardDescription className="text-base text-muted-foreground mb-4 flex-grow">{shortDescription}</CardDescription>
        <Button asChild variant="outline" className="mt-auto w-full group">
          <Link href={id ?? "/"}>
            Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}