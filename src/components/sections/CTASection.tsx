import { FadeIn } from '@/components/FadeIn';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const CTASection = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    companyName: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - Replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset after showing success
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ email: '', firstName: '', companyName: '', message: '' });
    }, 3000);
  };

  return (
    <section className="section-padding relative bg-background overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container-standard">
        <FadeIn>
          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-white/[0.06] bg-[hsl(0_0%_4%)]">

            {/* Left Side - Hero Content with Background Image */}
            <div className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-center min-h-[400px] lg:min-h-[550px]">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src="/cta-background.png"
                  alt=""
                  className="w-full h-full object-cover opacity-60"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-0.5 h-6 bg-primary" />
                  <span className="text-xs font-semibold text-white/70 uppercase tracking-[0.2em]">
                    Work With Us Today
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                  Ready to<br />
                  <span className="gradient-text">Upgrade?</span>
                </h2>

                <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md">
                  Dive into the future with Raas Labs. Get in touch and build out a smarter, more automated org.
                </p>

                {/* Trust Indicators */}
                <div className="mt-10 flex items-center gap-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 border-2 border-background flex items-center justify-center"
                      >
                        <span className="text-xs text-white/80">✓</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-white/50">Trusted by 50+ brands</span>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="p-8 md:p-12 lg:p-16 bg-background/50 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email & First Name Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email"
                      className="w-full px-5 py-4 bg-[hsl(0_0%_8%)] border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="First Name"
                      className="w-full px-5 py-4 bg-[hsl(0_0%_8%)] border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full px-5 py-4 bg-[hsl(0_0%_8%)] border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                    rows={5}
                    className="w-full px-5 py-4 bg-[hsl(0_0%_8%)] border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300 resize-none"
                  />
                  {/* Yellow indicator dot */}
                  <div className="absolute top-4 right-4">
                    <span className="w-3 h-3 bg-amber-400 rounded-full block shadow-lg shadow-amber-400/50" />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className={`w-full py-4 px-8 rounded-xl font-semibold text-base flex items-center justify-center gap-3 transition-all duration-300 ${submitted
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white text-black hover:bg-white/90 hover:shadow-lg hover:shadow-white/10'
                    }`}
                  whileHover={{ scale: submitted ? 1 : 1.01 }}
                  whileTap={{ scale: submitted ? 1 : 0.99 }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Submitting...</span>
                    </>
                  ) : submitted ? (
                    <>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </motion.button>


              </form>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
};
