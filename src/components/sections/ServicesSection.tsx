import { FadeIn } from '@/components/FadeIn';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'AI Voice Agents',
    description: 'Inbound & outbound voice agents capable of handling customer support and complex inquiries.',
    outcomes: 'Lead qualification & call automation.',
    howItWorks: 'Multi-language support with near-human latency.'
  },
  {
    title: 'AI Chat Agents',
    description: 'Website & internal support chatbots for admissions, helpdesk, and business inquiries.',
    outcomes: 'Structured, reliable conversation flows.',
    howItWorks: 'Knowledge-based and intent-driven responses.'
  },
  {
    title: 'Custom Software Projects',
    description: 'Custom web & app development including AI-powered internal tools and automation systems.',
    outcomes: 'Automation-driven business systems.',
    howItWorks: 'Built for scale and industrial production use.'
  }
];

interface ServicesSectionProps {
  detailed?: boolean;
}

export const ServicesSection = ({ detailed = false }: ServicesSectionProps) => {
  return (
    <section className="section-padding relative bg-background">
      {!detailed && <div className="section-divider absolute top-0 left-0 right-0" />}

      <div className="container-standard">
        <FadeIn>
          <div className="mb-20 md:mb-28 max-w-2xl">
            <p className="label-uppercase mb-6">
              'What We Do'
            </p>
            <h2 className="mb-8">
              {detailed ? 'Comprehensive ' : 'Our '}<span className="gradient-text">Services</span>
            </h2>
            <p className="max-w-lg">
              We help shape narratives, manage perception, and build influence across digital platforms.
            </p>
          </div>
        </FadeIn>

        <div className={`grid ${detailed ? 'gap-8 lg:grid-cols-1' : 'md:grid-cols-2 gap-6 lg:gap-8'}`}>
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 80} direction="up" blur scale>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`group card-premium h-full ${detailed ? 'p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start' : 'p-6 md:p-8 lg:p-10'}`}
              >
                <div className={`${detailed ? 'lg:w-1/3' : ''}`}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                    <h3 className="group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="group-hover:text-foreground/80 transition-colors">
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
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
