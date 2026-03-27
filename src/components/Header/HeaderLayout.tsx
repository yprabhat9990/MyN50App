import { Navbar } from '@/Layout/NavbarLayout/Navbar';
import type { Theme } from '@/hooks/use-theme';
import type { NavItem } from '@/types/layout';

import { BrandLockup } from '@/Components/Header/BrandLockup';
import { Header } from '@/Components/Header/Header';

export interface HeaderLayoutProps {
  brand: string;
  nav: NavItem[];
  theme: Theme;
  onToggleTheme: () => void;
  pathname: string;
  onNavClick: (href: string) => void;
}

export function HeaderLayout({
  brand,
  nav,
  theme,
  onToggleTheme,
  pathname,
  onNavClick,
}: HeaderLayoutProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 dark:border-slate-700 dark:bg-slate-900/95 dark:supports-[backdrop-filter]:bg-slate-900/80">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="flex w-full items-center justify-between gap-3 px-3 sm:px-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:px-5 lg:px-6">
          <div className="flex min-w-0 md:justify-self-start">
            <BrandLockup brandLabel={brand} />
          </div>
          <Navbar
            variant="desktop"
            items={nav}
            pathname={pathname}
            onNavClick={onNavClick}
            desktopClassName="md:justify-self-center"
          />
          <Header theme={theme} onToggleTheme={onToggleTheme} className="md:justify-self-end" />
        </div>
        <Navbar variant="mobile" items={nav} pathname={pathname} onNavClick={onNavClick} />
      </div>
    </header>
  );
}
