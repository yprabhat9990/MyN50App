import type { LucideIcon } from 'lucide-react';

import { Card } from '@/Components/Ui/Card';
import { cn } from '@/lib/utils';

export interface TermsUserResponsibilityCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function TermsUserResponsibilityCard({
  title,
  description,
  icon: Icon,
  className,
}: TermsUserResponsibilityCardProps) {
  return (
    <Card
      className={cn(
        'gap-0 rounded-xl border border-slate-200 bg-transparent p-6 py-6 ring-0 dark:border-slate-800',
        className
      )}
    >
      <div className="mb-3 flex flex-col items-center text-center">
        <Icon className="mb-2 size-8 text-[var(--brand-accent)]" strokeWidth={1.75} aria-hidden />
        <h3 className="text-base font-bold text-slate-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-center text-sm text-slate-600 dark:text-slate-400">{description}</p>
    </Card>
  );
}
