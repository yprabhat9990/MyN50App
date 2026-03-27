import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { lifeCrafterProgram } from './lifecrafter-program-classes';

export interface LifeCrafterProgramRootProps {
  className?: string;
  children: ReactNode;
}

export function LifeCrafterProgramRoot({ className, children }: LifeCrafterProgramRootProps) {
  return (
    <div
      className={cn(
        'w-full text-slate-900 transition-colors duration-300 dark:text-slate-100',
        lifeCrafterProgram.fontRoot,
        lifeCrafterProgram.surfacePage,
        className
      )}
    >
      {children}
    </div>
  );
}

export interface LifeCrafterProgramShellProps {
  className?: string;
  children: ReactNode;
}

export function LifeCrafterProgramShell({ className, children }: LifeCrafterProgramShellProps) {
  return <div className={cn(lifeCrafterProgram.shell, className)}>{children}</div>;
}
