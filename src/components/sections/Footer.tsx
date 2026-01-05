export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold mb-2">The Increations</div>
            <div className="text-sm text-muted-foreground">
              Influence & PR Agency
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-muted-foreground">
            <a 
              href="mailto:contact@theincreations.com" 
              className="hover:text-foreground transition-colors"
            >
              contact@theincreations.com
            </a>
            <a 
              href="tel:+919876543210" 
              className="hover:text-foreground transition-colors"
            >
              +91-9876543210
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} The Increations. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
