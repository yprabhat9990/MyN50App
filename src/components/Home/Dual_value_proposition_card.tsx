import { Button } from '@/Components/Ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/Ui/Card';
import { cn } from '@/lib/utils';
import type { ValueColumn } from '@/types/home';

const variantStyles = {
  accent:
    'rounded-2xl border border-[color-mix(in_srgb,var(--brand-accent)_28%,#e8ddd6)] bg-[var(--brand-accent-surface)] py-0 shadow-sm dark:border-[color-mix(in_srgb,var(--brand-accent)_42%,#0f172a)] dark:bg-[var(--brand-accent-soft)]',
  sky: 'rounded-2xl border border-[#9ec4d8] bg-[#dfeaf2] py-0 shadow-sm dark:border-sky-950/55 dark:bg-sky-950/40',
} as const;

export type DualValuePropositionVariant = keyof typeof variantStyles;

export interface DualValuePropositionCardProps {
  column: ValueColumn;
  variant: DualValuePropositionVariant;
  className?: string;
}

export function DualValuePropositionCard({
  column,
  variant,
  className,
}: DualValuePropositionCardProps) {
  const { title, bullets, cta } = column;

  return (
    <Card className={cn(variantStyles[variant], className)}>
      <CardHeader className="gap-0 pb-0">
        <CardTitle className="text-center text-2xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pb-4">
        <ul className="space-y-1 px-4 text-sm text-slate-700 sm:px-4 dark:text-slate-300">
          {bullets.map((bullet) => (
            <li key={bullet} className="list-inside list-disc">
              {bullet}
            </li>
          ))}
        </ul>
        <Button
          variant="link"
          className="mx-auto block h-auto p-0 text-base font-semibold text-[var(--brand-primary)] underline-offset-4 hover:underline dark:text-[var(--brand-tertiary)]"
        >
          {cta}
        </Button>
      </CardContent>
    </Card>
  );
}
