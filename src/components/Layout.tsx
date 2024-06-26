import { navConfig } from '@/config/config';
import { SiteFooter } from './Footer';
import { MainNav } from './MainNav';
import { ModeToggle } from './ui/mode-toggle';
import { Outlet } from 'react-router-dom';

export default function ScreenLayout() {
  return (
    <div className="flex min-h-screen min-w-80 flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={navConfig.mainNav} />
          <ModeToggle />
        </div>
      </header>
      <div className="container grid flex-1 gap-12">
        <main className="flex flex-1 flex-col overflow-hidden">
          <Outlet />
        </main>
      </div>
      <SiteFooter className="border-t" />
    </div>
  );
}
