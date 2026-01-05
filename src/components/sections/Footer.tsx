export const Footer = () => {
  return (
    <footer className="py-20 lg:py-24 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-32 mb-20">
          {/* About */}
          <div>
            <div className="text-[17px] font-semibold tracking-tight mb-5">The Increations</div>
            <p className="text-muted-foreground leading-[1.85] text-[15px] max-w-sm">
              A digital-first PR and political consultancy agency helping leaders, public figures, and brands shape influence and authority.
            </p>
          </div>
          
          {/* Contact */}
          <div className="md:text-right">
            <p className="label-uppercase mb-6">
              Contact
            </p>
            <div className="space-y-3">
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
        
        <div className="pt-10 border-t border-border/40 text-[13px] text-tertiary">
          © 2025 The Increations. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
