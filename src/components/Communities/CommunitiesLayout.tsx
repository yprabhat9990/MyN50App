import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { communities } from './communities-classes';

export interface CommunitiesRootProps {
  className?: string;
  children: ReactNode;
}

/** Typography + color context for any Communities block tree. */
export function CommunitiesRoot({ className, children }: CommunitiesRootProps) {
  return (
    <div
      className={cn(
        'w-full text-slate-900 transition-colors duration-300 dark:text-slate-100',
        communities.fontRoot,
        className
      )}
    >
      {children}
    </div>
  );
}

export interface CommunitiesShellProps {
  className?: string;
  children: ReactNode;
}

/** Centered max-width column (`max-w-7xl`) used by most sections. */
export function CommunitiesShell({ className, children }: CommunitiesShellProps) {
  return <div className={cn(communities.shell, className)}>{children}</div>;
}
