import type { LucideIcon } from 'lucide-react';

import { Card } from '@/Components/Ui/Card';
import { cn } from '@/lib/utils';

export interface EventsHostTypeCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function EventsHostTypeCard({
  title,
  description,
  icon: Icon,
  className,
}: EventsHostTypeCardProps) {
  return (
    <Card
      className={cn(
        'gap-0 rounded-xl border border-slate-200 bg-white p-6 shadow-sm ring-0 sm:p-8 dark:border-slate-800 dark:bg-slate-800/50',
        className
      )}
    >
      <div className="mb-4 flex items-center gap-3">
        <Icon className="size-7 text-[var(--brand-accent)]" strokeWidth={1.75} aria-hidden />
        <h4 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h4>
      </div>
      <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
        {description}
      </p>
    </Card>
  );
}
