import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

export interface EventParticipationTermCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function EventParticipationTermCard({
  icon: Icon,
  title,
  description,
  className,
}: EventParticipationTermCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50',
        className
      )}
    >
      <h4 className="mb-2 flex items-center gap-2 font-bold text-slate-900 dark:text-white">
        <Icon className="size-5 shrink-0 text-[var(--brand-accent)]" aria-hidden />
        {title}
      </h4>
      <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  );
}
