import { Header } from '@/components/sections/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProofSection } from '@/components/sections/ProofSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { AuthoritySection } from '@/components/sections/AuthoritySection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16 lg:pt-20">
        <HeroSection />
        <ProofSection />
        <section id="services">
          <ServicesSection />
        </section>
        <AuthoritySection />
        <section id="work">
          <CaseStudiesSection />
        </section>
        <section id="contact">
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
