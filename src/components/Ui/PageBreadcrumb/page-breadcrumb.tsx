import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { cn } from '@/lib/utils';

export type PageBreadcrumbItem = {
  label: string;
  /** Segments except the last usually include `to`. The last segment is always rendered as the current page (not a link). */
  to?: string;
};

export type PageBreadcrumbProps = {
  items: PageBreadcrumbItem[];
  className?: string;
  /** accent: brand-colored links (default). muted: grey nav text with accent hover */
  tone?: 'accent' | 'muted';
};

const toneStyles = {
  accent: {
    nav: 'flex flex-wrap items-center gap-2 text-sm',
    link: 'font-medium text-[var(--brand-accent)] transition-colors hover:underline',
    sep: 'text-slate-400',
    current: 'text-slate-600 dark:text-slate-400',
  },
  muted: {
    nav: 'flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400',
    link: 'transition-colors hover:text-[var(--brand-accent)]',
    sep: '',
    current: 'font-medium text-slate-900 dark:text-white',
  },
} as const;

export function PageBreadcrumb({ items, className, tone = 'accent' }: PageBreadcrumbProps) {
  const t = toneStyles[tone];

  return (
    <nav aria-label="Breadcrumb" className={cn(t.nav, className)}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        const isLink = Boolean(item.to) && !isLast;

        return (
          <Fragment key={`${item.label}-${i}`}>
            {i > 0 ? (
              <span className={cn(t.sep)} aria-hidden>
                /
              </span>
            ) : null}
            {isLink ? (
              <Link to={item.to!} className={t.link}>
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? t.current : t.link}>{item.label}</span>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
