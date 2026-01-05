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
    <section className="py-40 lg:py-52 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="container mx-auto px-6 lg:px-24">
        <FadeIn>
          <div className="mb-24 max-w-md">
            <p className="label-uppercase mb-8">
              What We Do
            </p>
            <h2 className="text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold tracking-[-0.04em] leading-[0.95] mb-8">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-[17px] text-secondary leading-[1.8] max-w-sm">
              We help shape narratives, manage perception, and build influence across digital platforms.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 50}>
              <div className="group p-10 lg:p-12 card-premium">
                <div className="flex items-start gap-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-3.5 flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                  <div>
                    <h3 className="text-[20px] lg:text-[22px] font-semibold mb-5 tracking-tight group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-[1.85] text-[15px] max-w-xs">
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
