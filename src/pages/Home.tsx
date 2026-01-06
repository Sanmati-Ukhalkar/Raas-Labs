import { HeroSection } from '@/components/sections/HeroSection';
import { ProofSection } from '@/components/sections/ProofSection';
import { CollaborationsSection } from '@/components/sections/CollaborationsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { AuthoritySection } from '@/components/sections/AuthoritySection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <main>
                <HeroSection />
                <ProofSection />
                {/* Collaborations can serve as the "Outcomes-first proof" or "Authority" part */}
                <CollaborationsSection />

                {/* High-level services overview */}
                <div id="services-preview">
                    <ServicesSection />
                </div>

                <AuthoritySection />

                {/* Select case study preview */}
                <div id="work-preview">
                    <CaseStudiesSection />
                </div>

                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
