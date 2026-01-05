export const Footer = () => {
  return (
    <footer className="py-16 border-t border-border relative">
      <div className="container mx-auto px-6 lg:px-16 xl:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="text-xl font-semibold tracking-tight mb-2">The Increations</div>
            <div className="text-sm text-tertiary">
              Influence & PR Agency
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 text-sm text-tertiary">
            <a 
              href="mailto:contact@theincreations.com" 
              className="hover:text-foreground transition-colors duration-300"
            >
              contact@theincreations.com
            </a>
            <a 
              href="tel:+919876543210" 
              className="hover:text-foreground transition-colors duration-300"
            >
              +91-9876543210
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 text-xs text-tertiary">
          © {new Date().getFullYear()} The Increations. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
