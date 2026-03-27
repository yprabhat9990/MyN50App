import { Link } from 'react-router-dom';

import { ArrowRight } from 'lucide-react';

import { Button } from '@/Components/Ui/Button';
import { Card } from '@/Components/Ui/Card';
import { cn } from '@/lib/utils';

export interface EventsComingSoonCardProps {
  title: string;
  description: string;
  ctaLabel: string;
  ctaTo: string;
  className?: string;
}

export function EventsComingSoonCard({
  title,
  description,
  ctaLabel,
  ctaTo,
  className,
}: EventsComingSoonCardProps) {
  return (
    <Card
      className={cn(
        'gap-0 rounded-2xl border border-slate-200 bg-white p-6 ring-0 sm:p-8 dark:border-slate-800 dark:bg-slate-800/50',
        className
      )}
    >
      <h3 className="mb-3 text-lg font-bold text-slate-900 sm:text-xl dark:text-white">{title}</h3>
      <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
      <Button
        variant="ghost"
        asChild
        className="h-auto w-fit gap-2 px-0 font-bold text-[var(--brand-accent)] hover:bg-transparent hover:text-[var(--brand-accent-hover)] dark:hover:bg-transparent"
      >
        <Link to={ctaTo}>
          {ctaLabel}
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </Button>
    </Card>
  );
}
