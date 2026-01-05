export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto px-6 lg:px-16 xl:px-20">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity">
            The Increations
          </a>
          
          <nav className="hidden md:flex items-center gap-10">
            <a href="#services" className="text-sm text-tertiary hover:text-foreground transition-colors duration-300">
              Services
            </a>
            <a href="#work" className="text-sm text-tertiary hover:text-foreground transition-colors duration-300">
              Work
            </a>
            <a href="#contact" className="text-sm text-tertiary hover:text-foreground transition-colors duration-300">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
