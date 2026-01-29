import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/FadeIn';
import { PageTransition } from '@/components/ui/PageTransition';

const Work = () => {
    return (
        <PageTransition className="min-h-screen bg-background text-foreground">
            <main className="pt-24 lg:pt-32">
                <section className="container mx-auto px-6 lg:px-24 mb-12">
                    <FadeIn>
                        <h1 className="text-display font-bold tracking-tight mb-6">
                            Selected <span className="gradient-text">Client Work</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            Below are selected examples of real client engagements. Some clients are named, others are anonymized based on confidentiality.
                        </p>
                    </FadeIn>
                </section>

                <CaseStudiesSection hideHeader />

                <CTASection />
            </main>
            <Footer />
        </PageTransition>
    );
};

export default Work;
