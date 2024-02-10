import { Link } from 'react-router-dom';

import { MainNavItem } from '@/types';
import { cn } from '@/lib/utils';
import thelott from '../assets/thelott-logo-tagline.svg';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { globalConfig } from '@/config/config';

interface MobileNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
  showNav: Dispatch<SetStateAction<boolean>>;
}

export function MobileNav({
  items,
  showNav,
  children,
}: Readonly<MobileNavProps>) {
  useEffect(() => {
    const handleScrollOrBlur = () => {
      showNav(false);
    };
    document.addEventListener('scroll', handleScrollOrBlur);

    return () => {
      document.removeEventListener('scroll', handleScrollOrBlur);
    };
  }, [showNav]);

  return (
    <div
      className={cn(
        'fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden'
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <Link
          to="/"
          onClick={() => showNav(false)}
          className="flex items-center space-x-2"
        >
          <img src={thelott} alt="lotto logo" />
          <span className="hidden font-bold sm:inline-block">
            {globalConfig.siteName}
          </span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item) => (
            <Link
              key={item.title}
              to={item.disabled ? '#' : item.to}
              onClick={() => showNav(false)}
              className={cn(
                'flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline',
                item.disabled && 'cursor-not-allowed opacity-60'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
}
