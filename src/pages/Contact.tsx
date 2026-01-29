import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/FadeIn';
import { PageTransition } from '@/components/ui/PageTransition';

const Contact = () => {
    return (
        <PageTransition className="min-h-screen bg-background text-foreground flex flex-col">
            <main className="flex-grow pt-32 pb-20 justify-center flex flex-col">
                <section className="container mx-auto px-6 lg:px-24">
                    <FadeIn>
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-display font-bold tracking-tight mb-8">
                                Start a <span className="gradient-text">Conversation</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                                We architect systems for specific entities. If you are ready to deploy, initiate contact.
                            </p>

                            <div className="mb-12 text-left bg-white/5 p-8 rounded-3xl border border-white/10">
                                <h3 className="text-lg font-semibold text-white mb-6 text-center">Engagement Model</h3>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="flex-none w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm border border-primary/20">1</div>
                                        <p className="text-sm text-muted-foreground pt-1.5">Short discovery call to understand the use case</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-none w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm border border-primary/20">2</div>
                                        <p className="text-sm text-muted-foreground pt-1.5">Clear scope and solution definition</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-none w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm border border-primary/20">3</div>
                                        <p className="text-sm text-muted-foreground pt-1.5">Build and deploy the AI agent or system</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-none w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm border border-primary/20">4</div>
                                        <p className="text-sm text-muted-foreground pt-1.5">Ongoing support or structured handover</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Button
                                    variant="hero"
                                    size="lg"
                                    className="min-w-[200px] h-14 text-lg"
                                    onClick={() => window.open('https://wa.me/yournumber', '_blank')}
                                >
                                    WhatsApp Us
                                </Button>
                                <Button
                                    variant="heroOutline"
                                    size="lg"
                                    className="min-w-[200px] h-14 text-lg"
                                    onClick={() => window.location.href = 'tel:+1234567890'}
                                >
                                    Call Now
                                </Button>
                            </div>

                            <div className="mt-16 p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm max-w-xl mx-auto text-left">
                                <h3 className="text-lg font-semibold mb-4 text-white">Direct Inquiry</h3>
                                {/* Placeholder for simple form */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-white/70">Name</label>
                                        <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-white/70">Email</label>
                                        <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="john@example.com" />
                                    </div>
                                    <Button className="w-full mt-4 bg-white/10 hover:bg-white/20 text-white">
                                        Send Message
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </FadeIn>
                </section>
            </main>
            <Footer />
        </PageTransition>
    );
};

export default Contact;
