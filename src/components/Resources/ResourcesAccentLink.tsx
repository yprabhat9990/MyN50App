import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { ArrowRight } from 'lucide-react';

export function ResourcesAccentLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="group flex items-center gap-2 font-bold text-[var(--brand-accent)]">
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
    </Link>
  );
}
