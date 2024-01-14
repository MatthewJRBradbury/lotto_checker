import { MainNavItem } from '@/types';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import thelott from '../assets/thelott-logo-tagline.svg';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { MobileNav } from './MobileNav';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export const MainNav = ({ items, children }: MainNavProps) => {
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <div className="flex gap-6 md:gap-10">
      <Link to="/" className="hidden items-center space-x-2 md:flex">
        <img src={thelott} alt="lotto logo" />
        <span className="hidden font-bold sm:inline-block">Lotto Checker</span>
      </Link>
      {items?.length && (
        <nav className="hidden gap-6 md:flex">
          {items.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className={cn(
                'flex items-center text-lg font-bold transition-colors hover:text-foreground/80 sm:text-sm',
                item.to === location.pathname
                  ? 'text-foreground underline underline-offset-4'
                  : 'text-foreground/60',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      )}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <X /> : <Menu />}
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items} showNav={setShowMobileMenu}>
          {children}
        </MobileNav>
      )}
    </div>
  );
};
