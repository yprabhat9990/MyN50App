import { Card } from '@/Components/Ui/Card';
import { cn } from '@/lib/utils';

export interface InstructorPolicyHighlightCardProps {
  title: string;
  description: string;
  className?: string;
}

export function InstructorPolicyHighlightCard({
  title,
  description,
  className,
}: InstructorPolicyHighlightCardProps) {
  return (
    <Card
      className={cn(
        'gap-0 rounded-xl border border-slate-200 bg-white p-5 py-5 shadow-sm ring-0 dark:border-slate-800 dark:bg-slate-800/50',
        className
      )}
    >
      <h3 className="mb-2 font-bold text-[var(--brand-accent)]">{title}</h3>
      <p className="text-sm leading-snug text-slate-600 dark:text-slate-400">{description}</p>
    </Card>
  );
}
