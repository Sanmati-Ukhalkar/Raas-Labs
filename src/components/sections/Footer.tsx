export const Footer = () => {
  return (
    <footer className="py-12 md:py-16 relative bg-background" role="contentinfo">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container-standard">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-16 items-baseline">
          {/* About */}
          <div>
            <h2 className="mb-5 !text-lg !font-bold tracking-tight">RAAS Labs</h2>
            <p className="max-w-sm !text-sm leading-relaxed">
              The experimental production arm of RAAS. We engineer high-impact digital experiences and systems for global entities.
            </p>
          </div>

          {/* Contact */}
          <div className="md:text-right">
            <h3 className="label-uppercase mb-6">
              Connect With Us
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+917077149767"
                className="block text-secondary hover:text-foreground transition-all duration-200"
                aria-label="Call our office"
              >
                +91-7077149767
              </a>
              <a
                href="mailto:contact@raaslabs.com"
                className="block text-secondary hover:text-foreground transition-all duration-200"
                aria-label="Email us for inquiries"
              >
                contact@raaslabs.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 text-xs text-tertiary flex flex-col md:flex-row justify-between gap-4">
          <p>© 2025 RAAS Labs. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
