import { Card } from '@/Components/Ui/Card';
import { cn } from '@/lib/utils';

export interface PrivacyPolicyPurposeCardProps {
  title: string;
  description: string;
  className?: string;
}

export function PrivacyPolicyPurposeCard({
  title,
  description,
  className,
}: PrivacyPolicyPurposeCardProps) {
  return (
    <Card
      className={cn(
        'gap-0 rounded-lg border border-slate-200 bg-slate-50 p-4 py-4 ring-0 dark:border-slate-700 dark:bg-slate-800/50',
        className
      )}
    >
      <h3 className="mb-2 font-bold text-[var(--brand-accent)]">{title}</h3>
      <p className="text-sm text-slate-700 dark:text-slate-300">{description}</p>
    </Card>
  );
}
