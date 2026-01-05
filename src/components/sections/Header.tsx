export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-2xl border-b border-border/40">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <a href="/" className="text-[17px] font-semibold tracking-tight hover:opacity-70 transition-opacity duration-200">
            The Increations
          </a>
          
          <nav className="hidden md:flex items-center gap-12">
            <a href="#services" className="text-[13px] text-tertiary hover:text-foreground transition-colors duration-200">
              Services
            </a>
            <a href="#work" className="text-[13px] text-tertiary hover:text-foreground transition-colors duration-200">
              Work
            </a>
            <a href="#contact" className="text-[13px] text-tertiary hover:text-foreground transition-colors duration-200">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
