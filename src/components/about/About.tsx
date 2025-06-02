

import Image from 'next/image';
import PageHeader from '../DetailsPage/Pageheader';
import TeamSection from '@/module/Team/TeamSection';

export default function About() {
  return (
    <>
      <PageHeader
        title="About LeadFlow"
        description="We are a dedicated team of marketing professionals passionate about driving growth and success for businesses like yours."
      />
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-foreground/80 mb-4">
                At LeadFlow, our mission is to empower businesses with cutting-edge marketing strategies that deliver tangible results. We believe in building strong partnerships with our clients, understanding their unique needs, and crafting tailored solutions that foster growth and maximize return on investment.
              </p>
              <p className="text-lg text-foreground/80">
                We are committed to transparency, innovation, and excellence in everything we do. Our team stays ahead of industry trends to ensure your business benefits from the latest tools and techniques in the ever-evolving digital landscape.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Our team collaborating"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint="team collaboration"
              />
            </div>
          </div>
        </div>
      </section>
      <TeamSection />
    </>
  );
}
