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
import { ArrowRight, Star, Sparkles } from 'lucide-react';

import { IServiceInput } from '@/type/type';

interface ServiceCardProps {
  service: IServiceInput;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { title, shortDescription, icon, image } = service;

  return (
    <Card className="group relative flex flex-col overflow-hidden h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white via-white/95 to-gray-50/80 dark:from-gray-800 dark:via-gray-800/95 dark:to-gray-900/80 rounded-2xl backdrop-blur-sm">
      
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Floating Decoration */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
        <Sparkles className="h-5 w-5 text-blue-500/60" />
      </div>

      {/* Premium Badge */}
      <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
        ✨ Popular
      </div>

      {/* Image Header with Overlay */}
      <CardHeader className="p-0 relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Image
          src={image || '/placeholder.png'}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Floating Action Button */}
        <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <ArrowRight className="h-4 w-4 text-blue-600" />
          </div>
        </div>
      </CardHeader>

      {/* Glowing Icon Section */}
      <div className="flex justify-center items-center py-6 relative">
        <div className="relative group-hover:scale-110 transition-transform duration-300">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-150" />
          
          {/* Icon Container */}
          <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-full border-2 border-blue-100 dark:border-blue-800 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            {icon && typeof icon === 'string' ? (
              <Image
                src={icon}
                alt="icon"
                width={48}
                height={48}
                className="relative z-10"
              />
            ) : (
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 text-white" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <CardContent className="flex flex-col flex-grow px-6 pb-6 pt-0 relative">
        
        {/* Title with Gradient Text */}
        <CardTitle className="text-xl font-bold mb-3 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-blue-600 transition-all duration-300">
          {title}
        </CardTitle>

        {/* Description */}
        <CardDescription className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">
          {shortDescription}
        </CardDescription>

        {/* Stats/Features */}
        <div className="flex items-center gap-2 mb-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Available</span>
          </div>
          <div className="w-1 h-1 bg-gray-300 rounded-full" />
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 text-yellow-500 fill-current" />
            <span>4.9/5</span>
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <Button 
          asChild 
          className="mt-auto w-full group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] rounded-xl h-12"
        >
          <Link href={`/services/${service.id}`}>
            <span className="flex items-center justify-center gap-2 font-semibold">
              Explore Service
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </Button>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
      </CardContent>

      {/* Corner Decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
        <div className="w-full h-full bg-gradient-to-bl from-blue-500 to-purple-600 transform rotate-45 translate-x-10 -translate-y-10" />
      </div>
    </Card>
  );
}