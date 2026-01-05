import { FadeIn } from '@/components/FadeIn';

const services = [
  {
    title: 'Political Consultancy',
    description: 'Strategic narrative design and campaign amplification for electoral success.',
  },
  {
    title: 'Celebrity & Influencer PR',
    description: 'Reputation management and media relations for high-profile personalities.',
  },
  {
    title: 'Content & Media Production',
    description: 'Full-scale content creation engineered for viral reach and engagement.',
  },
  {
    title: 'Digital Reputation Management',
    description: 'Perception control and crisis management across all digital touchpoints.',
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <FadeIn>
          <h2 className="text-3xl md:text-heading font-bold mb-16">
            What We <span className="gradient-text">Engineer</span>
          </h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 100}>
              <div className="group p-8 lg:p-10 rounded-2xl bg-card border border-border hover:border-muted-foreground/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
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
