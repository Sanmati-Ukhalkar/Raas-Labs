import { ServicesSection } from '@/components/sections/ServicesSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/FadeIn';

const Services = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="pt-24 lg:pt-32">
                <section className="container mx-auto px-6 lg:px-24 mb-20">
                    <FadeIn>
                        <h1 className="text-display font-bold tracking-tight mb-6">
                            What We <span className="gradient-text">Engineer</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            We provide comprehensive influence engineering, moving beyond engagement metrics to deliver tangible political and social impact.
                        </p>
                    </FadeIn>
                </section>

                {/* This section will need to be enhanced to show 'outcomes' and 'how it works' later */}
                <ServicesSection detailed />

                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

export default Services;
