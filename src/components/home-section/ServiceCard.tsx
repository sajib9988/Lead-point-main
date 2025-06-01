import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { ArrowRight } from 'lucide-react';
import { Service } from '@/lib/constants';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { title, shortDescription, icon: Icon, slug, image, dataAiHint } = service;
  return (
    <Card className="flex flex-col overflow-hidden h-full  hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 border-4 border-white shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full p-1">
          <Image 
            src={image} 
            alt={title} 
            layout="fill" 
            objectFit="cover"
            data-ai-hint={dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow p-6">
        <div className="flex items-center mb-3">
          <Icon className="h-8 w-8 text-primary mr-3" />
          <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
        </div>
        <CardDescription className="text-base text-muted-foreground mb-4 flex-grow">{shortDescription}</CardDescription>
        <Button asChild variant="outline" className="mt-auto w-full group">
          <Link href={slug}>
            Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}