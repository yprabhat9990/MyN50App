import { useLocation } from 'react-router-dom';

import type { FooterColumn as FooterColumnData } from '@/types/layout';

import { Footer } from '@/Components/Footer/Footer';
import { SiteFooter } from '@/Components/Footer/SiteFooter';

export interface FooterLayoutProps {
  columns: FooterColumnData[];
}

export function FooterLayout({ columns }: FooterLayoutProps) {
  const { pathname } = useLocation();

  return (
    <footer className="bg-[var(--brand-footer)] px-4 py-8 text-white sm:px-5">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <Footer key={column.title} column={column} pathname={pathname} />
          ))}
        </div>
        <SiteFooter />
      </div>
    </footer>
  );
}
