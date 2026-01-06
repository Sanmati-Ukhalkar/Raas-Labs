import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/FadeIn';

const Contact = () => {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <main className="flex-grow pt-32 pb-20 justify-center flex flex-col">
                <section className="container mx-auto px-6 lg:px-24">
                    <FadeIn>
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-display font-bold tracking-tight mb-8">
                                Ready to <span className="gradient-text">Dominate?</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                                We work with a select group of clients who are ready to scale their influence seriously. If that's you, let's talk.
                            </p>

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
        </div>
    );
};

export default Contact;
