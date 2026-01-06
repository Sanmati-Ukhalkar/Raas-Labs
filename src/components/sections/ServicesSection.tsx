import { FadeIn } from '@/components/FadeIn';

const services = [
  {
    title: 'Political Consultancy',
    description: 'End-to-end political communication including digital presence, campaign messaging, public sentiment management, and reputation building.',
    outcomes: 'Election victories, shifted public sentiment, crisis immunity.',
    howItWorks: 'We deploy data-driven narratives and hyper-targeted content to sway undecided voters and fortify base support.'
  },
  {
    title: 'Celebrity & Influencer PR',
    description: 'Personal brand positioning, media amplification, viral reel strategy, and image control for celebrities and high-reach influencers.',
    outcomes: 'Viral growth, premium brand deals, crisis mitigation.',
    howItWorks: 'We engineer vitality through trend-jacking and algorithmic dominance while protecting the personal brand from volatility.'
  },
  {
    title: 'Content & Media Production',
    description: 'High-quality reels, promotional videos, political content shoots, video editing, and production.',
    outcomes: 'High engagement rates, professional perception, narrative retention.',
    howItWorks: 'Studio-grade production meets social-first editing. We create content that stops the scroll and plants the message.'
  },
  {
    title: 'Digital Reputation Management',
    description: 'Consistent organic growth, narrative control, crisis handling, and long-term authority building.',
    outcomes: 'Search sovereignty, negative suppression, trust authority.',
    howItWorks: 'We flood the zone with positive, authoritative signals to bury negatives and own the first page of search results.'
  }
];

interface ServicesSectionProps {
  detailed?: boolean;
}

export const ServicesSection = ({ detailed = false }: ServicesSectionProps) => {
  return (
    <section className="py-20 lg:py-32 relative">
      {!detailed && <div className="section-divider absolute top-0 left-0 right-0" />}

      <div className="container mx-auto px-6 lg:px-24">
        <FadeIn>
          <div className="mb-16 lg:mb-24 max-w-2xl">
            <p className="label-uppercase mb-8">
              {detailed ? 'Our Expertise' : 'What We Do'}
            </p>
            <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold tracking-[-0.04em] leading-[0.95] mb-8">
              {detailed ? ' comprehensive ' : 'Our '}<span className="gradient-text">Services</span>
            </h2>
            <p className="text-[17px] text-secondary leading-[1.8] max-w-lg">
              We help shape narratives, manage perception, and build influence across digital platforms.
            </p>
          </div>
        </FadeIn>

        <div className={`grid ${detailed ? 'gap-8 lg:grid-cols-1' : 'md:grid-cols-2 gap-6'}`}>
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 50}>
              <div className={`group card-premium ${detailed ? 'p-10 lg:p-14 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start' : 'p-10 lg:p-12'}`}>
                <div className={`${detailed ? 'lg:w-1/3' : ''}`}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                    <h3 className="text-[20px] lg:text-[24px] font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-[1.85] text-[15px]">
                    {service.description}
                  </p>
                </div>

                {detailed && (
                  <div className="lg:w-2/3 grid md:grid-cols-2 gap-8 pt-8 lg:pt-0 lg:border-l border-white/5 lg:pl-16">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider opacity-80">Outcomes</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.outcomes}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider opacity-80">At Scale</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.howItWorks}</p>
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
