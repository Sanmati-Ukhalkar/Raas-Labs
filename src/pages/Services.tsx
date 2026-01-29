import { ServicesSection } from '@/components/sections/ServicesSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/FadeIn';
import { PageTransition } from '@/components/ui/PageTransition';

const Services = () => {
    return (
        <PageTransition className="min-h-screen bg-background text-foreground">
            <main className="pt-24 lg:pt-32">
                <section className="container mx-auto px-6 lg:px-24 mb-20">
                    <FadeIn>
                        <h1 className="text-display font-bold tracking-tight mb-6">
                            System <span className="gradient-text">Architecture</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            We provide high-velocity production and system architecture, moving beyond vanity metrics to deliver tangible capital outputs.
                        </p>
                    </FadeIn>
                </section>

                {/* This section will need to be enhanced to show 'outcomes' and 'how it works' later */}
                <ServicesSection detailed />

                <CTASection />
            </main>
            <Footer />
        </PageTransition>
    );
};

export default Services;
