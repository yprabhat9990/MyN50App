import { Badge } from '@/Components/Ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/Ui/Card';
import type { CommunityCardData } from '@/types/home';

export interface CommunityPreviewCardProps {
  community: CommunityCardData;
  /** 1-based position on the badge (not the same as `community.id`). */
  order: number;
}

export function CommunityPreviewCard({ community, order }: CommunityPreviewCardProps) {
  const { title, subtitle, description, imageUrl, accentClasses, cardBgClass, badgeBgClass } =
    community;

  return (
    <Card
      className={`w-full max-w-[12.25rem] min-w-[10.8rem] gap-1 overflow-hidden rounded-2xl border border-slate-300/80 py-0 shadow-sm ${cardBgClass} dark:border-slate-700`}
    >
      <div className="relative px-2 pt-2">
        <Badge
          variant="secondary"
          className={`absolute top-3 left-3 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-slate-300 p-0 text-base font-bold text-slate-900 ${badgeBgClass} dark:border-slate-600`}
        >
          {order}
        </Badge>
        <div className={`aspect-[3/2] w-full overflow-hidden rounded-xl ${accentClasses}`}>
          <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
        </div>
      </div>
      <CardHeader className="space-y-0 px-3 pt-2 pb-0.5">
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-0.5 px-3 pb-3">
        <p className="text-sm font-semibold text-slate-800">{subtitle}</p>
        <p className="text-sm leading-snug text-slate-700">{description}</p>
      </CardContent>
    </Card>
  );
}
