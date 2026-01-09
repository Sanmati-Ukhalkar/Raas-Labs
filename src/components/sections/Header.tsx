import { Link, useLocation } from 'react-router-dom';
import GradualBlur from '@/components/ui/GradualBlur';
import StaggeredMenu, { StaggeredMenuItem } from '@/components/ui/StaggeredMenu';

export const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const staggeredMenuItems: StaggeredMenuItem[] = navLinks.map(link => ({
    label: link.name,
    link: link.path,
    ariaLabel: link.name
  }));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[72px] pointer-events-none">
      <GradualBlur
        preset="header"
        className="pointer-events-none"
        zIndex={0}
      />
      <div className="h-full w-full pointer-events-none">
        <StaggeredMenu
          items={staggeredMenuItems}
          logoUrl="/logo.png"
          isFixed={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#ffffff"
          accentColor="#a855f7"
          socialItems={[
            { label: 'Instagram', link: '#' },
            { label: 'LinkedIn', link: '#' },
            { label: 'Twitter', link: '#' }
          ]}
        />
      </div>
    </header>
  );
};
