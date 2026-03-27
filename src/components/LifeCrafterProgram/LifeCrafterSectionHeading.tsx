import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface LifeCrafterSectionHeadingProps {
  title: string;
  subtitle?: string;
  /** Orange rule under the title (e.g. “Who Is a LifeCrafter?”). Mutually exclusive with `subtitle` in layout. */
  showAccentRule?: boolean;
  className?: string;
  /** Extra content below title/subtitle/rule (rare). */
  children?: ReactNode;
}

/** Centered section title pattern reused across LifeCrafter marketing sections. */
export function LifeCrafterSectionHeading({
  title,
  subtitle,
  showAccentRule,
  className,
  children,
}: LifeCrafterSectionHeadingProps) {
  return (
    <div className={cn('mb-12 text-center', className)}>
      <h2 className="mb-4 text-3xl font-bold">{title}</h2>
      {showAccentRule ? (
        <div className="mx-auto h-1 w-20 rounded-full bg-[var(--brand-accent)]" />
      ) : subtitle ? (
        <p className="text-slate-600 dark:text-slate-400">{subtitle}</p>
      ) : null}
      {children}
    </div>
  );
}
