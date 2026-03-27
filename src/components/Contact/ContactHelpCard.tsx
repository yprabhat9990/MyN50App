import type { LucideIcon } from 'lucide-react';

import { Card } from '@/Components/Ui/Card';
import { cn } from '@/lib/utils';

const CONTACT_EMAIL = 'info@mynext50.in';

export interface ContactHelpCardProps {
  title: string;
  icon: LucideIcon;
  response: string;
  className?: string;
}

export function ContactHelpCard({ title, icon: Icon, response, className }: ContactHelpCardProps) {
  return (
    <Card
      className={cn(
        'gap-0 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm ring-0 transition-colors hover:border-[var(--brand-accent)]/30 dark:border-slate-800 dark:bg-slate-900',
        className
      )}
    >
      <Icon
        className="mb-4 size-10 text-[var(--brand-accent)] sm:size-11"
        strokeWidth={1.5}
        aria-hidden
      />
      <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="mb-4 block font-medium text-[var(--brand-accent)] hover:underline"
      >
        {CONTACT_EMAIL}
      </a>
      <div className="border-t border-slate-100 pt-4 dark:border-slate-800">
        <p className="text-xs font-semibold text-slate-500 uppercase">Response Time</p>
        <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{response}</p>
      </div>
    </Card>
  );
}
