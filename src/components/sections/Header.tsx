export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-2xl">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="flex items-center justify-between h-[72px]">
          <a href="/" className="text-[17px] font-semibold tracking-tight">
            The Increations
          </a>
          
          <nav className="hidden md:flex items-center gap-14">
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
      <div className="section-divider" />
    </header>
  );
};
