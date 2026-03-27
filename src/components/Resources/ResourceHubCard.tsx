import { Link } from 'react-router-dom';

import { ArrowUpRight } from 'lucide-react';

import type { ResourcesHubCard as ResourcesHubCardData } from '@/data/resources-hub-data';
import { cn } from '@/lib/utils';

export function ResourceHubCard({
  to,
  title,
  description,
  icon: Icon,
  gradientClass,
}: ResourcesHubCardData) {
  return (
    <Link
      to={to}
      className={cn(
        'group relative flex min-h-[220px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--brand-accent)]/35 hover:shadow-lg dark:border-slate-700/80',
        gradientClass
      )}
    >
      <span className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-white/80 text-[var(--brand-accent)] shadow-sm dark:bg-slate-800/90">
        <Icon className="size-6" strokeWidth={1.5} aria-hidden />
      </span>
      <span className="text-lg font-semibold text-slate-900 dark:text-white">{title}</span>
      <span className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {description}
      </span>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-accent)]">
        Open
        <ArrowUpRight
          className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      </span>
    </Link>
  );
}
