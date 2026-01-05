import { FadeIn } from '@/components/FadeIn';

const services = [
  {
    title: 'Political Consultancy',
    description: 'End-to-end political communication including digital presence, campaign messaging, public sentiment management, and reputation building.',
  },
  {
    title: 'Celebrity & Influencer PR',
    description: 'Personal brand positioning, media amplification, viral reel strategy, and image control for celebrities and high-reach influencers.',
  },
  {
    title: 'Content & Media Production',
    description: 'High-quality reels, promotional videos, political content shoots, video editing, and production.',
  },
  {
    title: 'Digital Reputation Management',
    description: 'Consistent organic growth, narrative control, crisis handling, and long-term authority building.',
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-32 lg:py-40 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="container mx-auto px-6 lg:px-16 xl:px-20">
        <FadeIn>
          <div className="mb-20 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-tertiary mb-5 font-medium">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] mb-6">
              Services
            </h2>
            <p className="text-lg text-secondary leading-relaxed font-light">
              We help shape narratives, manage perception, and build influence across digital platforms.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 80}>
              <div className="group p-8 lg:p-10 card-premium hover-glow cursor-default">
                <div className="flex items-start gap-5">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold mb-3 tracking-tight group-hover:text-primary transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
