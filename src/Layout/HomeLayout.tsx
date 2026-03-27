import { Suspense } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import ErrorBoundary from '@/Components/ErrorBoundary';
import { FooterLayout } from '@/Components/Footer/FooterLayout';
import { HeaderLayout } from '@/Components/Header/HeaderLayout';
import { PageLoadingFallback } from '@/Components/PageLoadingFallback';
import { siteBrand, siteFooterColumns, siteNav } from '@/data/site-layout';
import { useTheme } from '@/hooks/use-theme';
import { HOME_LAYOUT_FULL_BLEED_CLASS } from '@/lib/page-shell';
import { AppTooltipProvider } from '@/lib/tooltip';
import { cn } from '@/lib/utils';

/** Routes that use the wide marketing strip (see `MARKETING_SURFACE_CLASS` in `page-shell`). */
const FULL_BLEED_MARKETING_PATHS = new Set(['/communities', '/lifecrafter-program']);

function HomeLayout() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isFullBleedMarketing = FULL_BLEED_MARKETING_PATHS.has(location.pathname);

  const handleNavClick = (href: string) => {
    if (!href.startsWith('/')) return;
    if (href === '/') {
      navigate({ pathname: '/', hash: '' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    navigate(href);
  };

  return (
    <AppTooltipProvider>
      <div className="theme min-h-screen bg-[var(--brand-app-bg)]">
        <HeaderLayout
          brand={siteBrand}
          nav={siteNav}
          theme={theme}
          onToggleTheme={toggleTheme}
          pathname={location.pathname}
          onNavClick={handleNavClick}
        />
        <div
          className={cn(
            'mx-auto w-full overflow-x-hidden pt-[4rem]',
            isFullBleedMarketing
              ? HOME_LAYOUT_FULL_BLEED_CLASS
              : 'max-w-[1180px] bg-white dark:bg-slate-900'
          )}
        >
          <Suspense fallback={<PageLoadingFallback />}>
            <ErrorBoundary key={location.pathname}>
              <Outlet />
            </ErrorBoundary>
          </Suspense>
        </div>
        <FooterLayout columns={siteFooterColumns} />
      </div>
    </AppTooltipProvider>
  );
}

export default HomeLayout;
