export const Footer = () => {
  return (
    <footer className="py-20 lg:py-24 border-t border-border/50 relative">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-16">
          {/* About */}
          <div>
            <div className="text-lg font-semibold tracking-tight mb-4">The Increations</div>
            <p className="text-muted-foreground leading-[1.75] font-light text-[15px] max-w-sm">
              A digital-first PR and political consultancy agency helping leaders, public figures, and brands shape influence and authority.
            </p>
          </div>
          
          {/* Contact */}
          <div className="md:text-right">
            <p className="label-uppercase mb-5">
              Contact
            </p>
            <div className="space-y-2">
              <a 
                href="tel:+917077149767" 
                className="block text-secondary hover:text-foreground transition-colors duration-200 text-[15px]"
              >
                +91-7077149767
              </a>
              <a 
                href="mailto:contact@theincreations.com" 
                className="block text-secondary hover:text-foreground transition-colors duration-200 text-[15px]"
              >
                contact@theincreations.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/40 text-[13px] text-tertiary">
          © 2025 The Increations. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
