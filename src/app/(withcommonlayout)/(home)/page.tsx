import HeroSection from "@/components/home-section/HeroSection";
import ServicesOverview from "@/components/home-section/ServiceOverview";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";




export default function Home() {
  return (
        <div className="mt-2 rounded-b-2xl">

 <HeroSection></HeroSection>
 <ServicesOverview></ServicesOverview>
  <section className="py-16 md:py-24 bg-blue/40 mt-3 border-4 rounded-4xl border-white shadow-lg">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let LeadFlow be your partner in growth. Contact us today for a free consultation and discover how our tailored marketing strategies can drive results for your business.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link href="/contact">
              Request a Free Consultation <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
        </div>
  );
}

