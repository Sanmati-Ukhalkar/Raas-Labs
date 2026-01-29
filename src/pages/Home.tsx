import { HeroSection } from '@/components/sections/HeroSection';
import { ClientLogosSection } from '@/components/sections/ClientLogosSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';
import { SectionReveal } from '@/components/ui/SectionReveal';

const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <main>
                <section id="home">
                    <HeroSection />
                </section>

                <ClientLogosSection />

                <SectionReveal>
                    <section id="services">
                        <ServicesSection />
                    </section>
                </SectionReveal>

                <section id="work">
                    <CaseStudiesSection />
                </section>

                <SectionReveal>
                    <section id="contact">
                        <CTASection />
                    </section>
                </SectionReveal>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
