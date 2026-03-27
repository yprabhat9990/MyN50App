import type { ReactNode } from 'react';

import type { LucideIcon } from 'lucide-react';

import { Card } from '@/Components/Ui/Card';
import { cn } from '@/lib/utils';

export interface GuidelinesSectionPanelProps {
  icon: LucideIcon;
  iconClassName?: string;
  title: string;
  children: ReactNode;
  tone?: 'default' | 'accent';
  className?: string;
}

export function GuidelinesSectionPanel({
  icon: Icon,
  iconClassName,
  title,
  children,
  tone = 'default',
  className,
}: GuidelinesSectionPanelProps) {
  return (
    <Card
      className={cn(
        'mb-10 gap-0 rounded-xl border p-6 shadow-sm ring-0 sm:mb-12 sm:p-8',
        tone === 'default' &&
          'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-800/50',
        tone === 'accent' &&
          'border-[var(--brand-accent-border-light)] bg-[var(--brand-accent-soft)] dark:bg-[var(--brand-accent-soft-strong)]',
        className
      )}
    >
      <div className={cn('flex items-center gap-3', tone === 'accent' ? 'mb-4' : 'mb-6')}>
        <Icon
          className={cn('size-8 shrink-0 sm:size-9', iconClassName)}
          strokeWidth={1.75}
          aria-hidden
        />
        <h3 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">{title}</h3>
      </div>
      {children}
    </Card>
  );
}
