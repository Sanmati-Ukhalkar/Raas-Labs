import { HeroSection } from '@/components/sections/HeroSection';
import { ProofSection } from '@/components/sections/ProofSection';
import { CollaborationsSection } from '@/components/sections/CollaborationsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { AuthoritySection } from '@/components/sections/AuthoritySection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';
import { SectionReveal } from '@/components/ui/SectionReveal';

const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <main>
                <HeroSection />

                <SectionReveal>
                    <ProofSection />
                </SectionReveal>

                <SectionReveal>
                    <CollaborationsSection />
                </SectionReveal>

                <SectionReveal>
                    <div id="services-preview">
                        <ServicesSection />
                    </div>
                </SectionReveal>

                <SectionReveal>
                    <AuthoritySection />
                </SectionReveal>

                <SectionReveal>
                    <div id="work-preview">
                        <CaseStudiesSection />
                    </div>
                </SectionReveal>

                <SectionReveal>
                    <CTASection />
                </SectionReveal>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
