'use client';

import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { IServiceInput } from '@/type/type';
import { getAllServices } from '@/service/addService';
import { Skeleton } from '@/components/ui/skeleton';
import { Sparkles, Zap, TrendingUp } from 'lucide-react';

export default function ServicesOverview() {
  const [services, setServices] = useState<IServiceInput[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getAllServices();
        console.log("✅ Services fetched successfully:", data);
        const serviceArray = Array.isArray(data)
          ? data
          : Array.isArray(data.data)
            ? data.data
            : [];
        const mapped = serviceArray.map((item: IServiceInput) => ({
          id: item.id,
          title: item.title,
          shortDescription: item.shortDescription,
          longDescription: item.longDescription,
          slug: item.slug,
          icon: item.icon,
          image: item.image,
        }));
        setServices(mapped);
        console.log("✅ Services fetched mapped successfully:", mapped);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="space-y-4">
            <Skeleton className="h-48 w-full rounded-xl bg-gray-200 dark:bg-gray-700" />
            <div className="flex justify-center">
              <Skeleton className="h-16 w-16 rounded-full bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700" />
              <Skeleton className="h-4 w-full bg-gray-200 dark:bg-gray-700" />
              <Skeleton className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700" />
            </div>
            <Skeleton className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded-xl" />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative py-16 mt-8 rounded-3xl md:py-20 overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50/50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <Sparkles className="h-8 w-8 text-blue-500 animate-pulse" />
      </div>
      <div className="absolute top-20 right-20 opacity-20">
        <Zap className="h-6 w-6 text-purple-500 animate-bounce" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20">
        <TrendingUp className="h-7 w-7 text-cyan-500 animate-pulse" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative container mx-auto px-4 md:px-6">
        
        {/* Enhanced Header Section */}
        <div className="text-center mb-16 relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50">
            <Sparkles className="h-4 w-4" />
            <span>Our Premium Services</span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              Our Core
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we can help your business thrive with our specialized marketing solutions 
            designed to drive growth and maximize your ROI.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>500+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span>98% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        {loading ? (
          <LoadingSkeleton />
        ) : services.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-200/50 dark:border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Services Coming Soon
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We&#39;re preparing amazing services for you. Stay tuned!
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.filter(service => service.id).map((service, index) => (
              <div
                key={service.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Border Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />
    </section>
  );
}