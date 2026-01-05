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
    <section className="py-36 lg:py-44 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="container mx-auto px-6 lg:px-20">
        <FadeIn>
          <div className="mb-20 max-w-lg">
            <p className="label-uppercase mb-6">
              What We Do
            </p>
            <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold tracking-[-0.03em] leading-[1.05] mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-[17px] text-secondary leading-[1.7] font-light max-w-md">
              We help shape narratives, manage perception, and build influence across digital platforms.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 60}>
              <div className="group p-9 lg:p-10 card-premium cursor-default">
                <div className="flex items-start gap-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-3 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  <div>
                    <h3 className="text-xl lg:text-[22px] font-semibold mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-[1.75] font-light text-[15px] max-w-sm">
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
