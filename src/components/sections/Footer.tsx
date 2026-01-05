export const Footer = () => {
  return (
    <footer className="py-20 border-t border-border relative">
      <div className="container mx-auto px-6 lg:px-16 xl:px-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* About */}
          <div>
            <div className="text-xl font-semibold tracking-tight mb-4">The Increations</div>
            <p className="text-muted-foreground leading-relaxed font-light max-w-md">
              The Increations is a digital-first PR and political consultancy agency helping leaders, public figures, and brands shape influence and authority.
            </p>
          </div>
          
          {/* Contact */}
          <div className="md:text-right">
            <div className="text-sm uppercase tracking-[0.15em] text-tertiary mb-4 font-medium">
              Contact
            </div>
            <div className="space-y-2">
              <a 
                href="tel:+917077149767" 
                className="block text-secondary hover:text-foreground transition-colors duration-300"
              >
                +91-7077149767
              </a>
              <a 
                href="mailto:contact@theincreations.com" 
                className="block text-secondary hover:text-foreground transition-colors duration-300"
              >
                contact@theincreations.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-sm text-tertiary">
          © 2025 The Increations. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
