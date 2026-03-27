import { Card, CardContent, CardHeader, CardTitle } from '@/Components/Ui/Card';
import { cn } from '@/lib/utils';
import type { CommunityTeaser } from '@/types/home';

export interface CommunityTeaserCardProps {
  teaser: CommunityTeaser;
  className?: string;
}

export function CommunityTeaserCard({ teaser, className }: CommunityTeaserCardProps) {
  const { title, description, cardBgClass } = teaser;

  return (
    <Card
      className={cn(
        'w-full max-w-[8.75rem] min-w-[7rem] shrink-0 gap-0 overflow-hidden rounded-xl border border-slate-200/60 py-0 shadow-sm ring-0 sm:w-[7.75rem] sm:max-w-[7.75rem] sm:flex-none dark:border-slate-600/50',
        cardBgClass,
        className
      )}
    >
      <CardHeader className="space-y-0 px-2.5 pt-2.5 pb-0">
        <CardTitle className="text-center text-sm font-bold text-slate-900 dark:text-slate-100">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-0 px-2.5 pt-1 pb-2.5">
        <p className="text-center text-xs leading-snug text-slate-700 dark:text-slate-300">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
