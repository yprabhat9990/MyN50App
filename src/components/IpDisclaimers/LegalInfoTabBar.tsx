import { Link, useLocation } from 'react-router-dom';

import { ipDisclaimersTabs } from '@/data/ip-disclaimers-data';
import { cn } from '@/lib/utils';

const BASE = '/ip-disclaimers';

export function LegalInfoTabBar() {
  const { hash } = useLocation();
  const activeHash = hash && ipDisclaimersTabs.some((t) => t.hash === hash) ? hash : '#ip';

  const tabClass = (h: string) =>
    cn(
      'flex flex-col items-center border-b-2 pb-3 text-sm font-bold tracking-wide transition-colors',
      activeHash === h
        ? 'border-[var(--brand-accent)] text-[var(--brand-accent)]'
        : 'border-transparent text-slate-500 hover:text-[var(--brand-accent)] dark:text-slate-400'
    );

  return (
    <div className="mb-10 overflow-x-auto">
      <div
        className="flex min-w-max gap-8 border-b border-slate-200 dark:border-slate-800"
        role="tablist"
        aria-label="Legal information sections"
      >
        {ipDisclaimersTabs.map(({ hash: h, label }) => (
          <Link
            key={h}
            to={`${BASE}${h}`}
            role="tab"
            aria-selected={activeHash === h}
            className={tabClass(h)}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
