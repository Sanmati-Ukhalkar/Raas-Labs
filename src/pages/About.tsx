import { AuthoritySection } from '@/components/sections/AuthoritySection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/FadeIn';
import { PageTransition } from '@/components/ui/PageTransition';

const About = () => {
    return (
        <PageTransition className="min-h-screen bg-background text-foreground">
            <main className="pt-24 lg:pt-32">
                {/* Intro */}
                <section className="container mx-auto px-6 lg:px-24 mb-20">
                    <FadeIn>
                        <h1 className="text-display font-bold tracking-tight mb-8">
                            About <span className="gradient-text">RAAS Labs</span>
                        </h1>
                        <div className="grid lg:grid-cols-2 gap-12 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                RAAS Labs is the applied AI and software division of RAAS. We design and deploy production-ready AI voice agents, AI chat agents, and custom software systems for real business operations.
                            </p>
                            <div>
                                <h2 className="text-xl text-foreground font-semibold mb-4">Founded by Vijay and Sanmati</h2>
                                <p>
                                    Vijay and Sanmati work hands-on across solution design, client communication, and delivery. Every system is built with production reliability and long-term use in mind.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* Authority / Trust */}
                <AuthoritySection />

                {/* Team Philosophy placeholder */}
                <section className="py-20 bg-white/5">
                    <div className="container mx-auto px-6 lg:px-24">
                        <FadeIn>
                            <h2 className="text-3xl font-bold mb-8">Operating Principles</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="p-6 border border-white/10 rounded-2xl bg-card">
                                    <h3 className="text-xl font-semibold mb-3 text-white">Precision</h3>
                                    <p className="text-white/60">Every unit of output is calculated. We execute based on deep data analysis and behavioral psychology.</p>
                                </div>
                                <div className="p-6 border border-white/10 rounded-2xl bg-card">
                                    <h3 className="text-xl font-semibold mb-3 text-white">Discretion</h3>
                                    <p className="text-white/60">High-stakes environments require silence. We protect our partners' data and operations with military-grade protocols.</p>
                                </div>
                                <div className="p-6 border border-white/10 rounded-2xl bg-card">
                                    <h3 className="text-xl font-semibold mb-3 text-white">Scale</h3>
                                    <p className="text-white/60">From campaigns to national movements, our systems are built to handle massive throughput instantly.</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                <CTASection />
            </main>
            <Footer />
        </PageTransition>
    );
};

export default About;
