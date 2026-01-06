import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/FadeIn';

const Work = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="pt-24 lg:pt-32">
                <section className="container mx-auto px-6 lg:px-24 mb-12">
                    <FadeIn>
                        <h1 className="text-display font-bold tracking-tight mb-6">
                            Campaigns That <span className="gradient-text">Shaped Influence</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            Real-world results demonstrating our execution capability in high-stakes environments.
                        </p>
                    </FadeIn>
                </section>

                <CaseStudiesSection hideHeader />

                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

export default Work;
