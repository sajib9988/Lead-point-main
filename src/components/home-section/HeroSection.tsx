import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Flame } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      className="relative py-4 md:py-6 lg:py-8 mt-[42px] rounded-4xl overflow-hidden border-4
      bg-gradient-to-r from-sky-400 via-blue-600 to-blue-900
      dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      border-white dark:border-blue-100
      shadow-lg dark:shadow-blue-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white dark:text-gray-200 mb-6 animate-pulse">
            <Flame className="w-4 h-4 mr-2 text-white dark:text-gray-200" />
            <span>Ignite Your Growth</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white dark:text-gray-100 sm:text-5xl md:text-6xl lg:text-7xl">
            Supercharge Your Business with{' '}
            <span className="text-yellow-300 dark:text-yellow-400">LeadPoint</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/90 dark:text-gray-300 md:text-xl">
            We provide expert Email Marketing, Lead Generation, Content, and YouTube Marketing services to help you achieve your business goals.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <Link href="/contact">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white dark:border-gray-500 text-primary dark:text-gray-200 hover:bg-white/10 dark:hover:bg-gray-800 shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
