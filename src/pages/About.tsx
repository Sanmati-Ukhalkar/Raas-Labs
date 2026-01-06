import { AuthoritySection } from '@/components/sections/AuthoritySection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/FadeIn';

const About = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="pt-24 lg:pt-32">
                {/* Intro */}
                <section className="container mx-auto px-6 lg:px-24 mb-20">
                    <FadeIn>
                        <h1 className="text-display font-bold tracking-tight mb-8">
                            We Are <span className="gradient-text">The Increations</span>
                        </h1>
                        <div className="grid lg:grid-cols-2 gap-12 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                We believe influence isn't accidental; it's engineered. In a digital landscape saturated with noise, we build the signals that matter. We function not just as an agency, but as strategic architects of public perception.
                            </p>
                            <p>
                                Our philosophy is simple: Data-backed strategy meets creative excellence. Whether for political campaigns or high-profile personal branding, we operate with vital precision and absolute discretion.
                            </p>
                        </div>
                    </FadeIn>
                </section>

                {/* Authority / Trust */}
                <AuthoritySection />

                {/* Team Philosophy placeholder */}
                <section className="py-20 bg-white/5">
                    <div className="container mx-auto px-6 lg:px-24">
                        <FadeIn>
                            <h2 className="text-3xl font-bold mb-8">How We Operate</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="p-6 border border-white/10 rounded-2xl bg-card">
                                    <h3 className="text-xl font-semibold mb-3 text-white">Precision</h3>
                                    <p className="text-white/60">Every move is calculated. We don't guess; we execute based on deep data analysis and behavioral psychology.</p>
                                </div>
                                <div className="p-6 border border-white/10 rounded-2xl bg-card">
                                    <h3 className="text-xl font-semibold mb-3 text-white">Discretion</h3>
                                    <p className="text-white/60">High-stakes influence requires high-level confidentiality. We protect our partners' reputation as fiercely as we build it.</p>
                                </div>
                                <div className="p-6 border border-white/10 rounded-2xl bg-card">
                                    <h3 className="text-xl font-semibold mb-3 text-white">Scale</h3>
                                    <p className="text-white/60">From hyper-local campaigns to national movements, our infrastructure is built to scale impact instantly.</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

export default About;
