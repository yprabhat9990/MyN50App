import { communities } from '../communities-classes';

import { Link } from 'react-router-dom';

import { Lightbulb } from 'lucide-react';

import { Button } from '@/Components/Ui/Button';
import type { CommunitiesPageData } from '@/data/communities-page-data';
import { cn } from '@/lib/utils';

export interface CommunitiesRequestSectionProps {
  request: CommunitiesPageData['requestCommunity'];
  ctaTo?: string;
}

export function CommunitiesRequestSection({
  request,
  ctaTo = '/contact',
}: CommunitiesRequestSectionProps) {
  return (
    <section className={`${communities.sectionY} ${communities.surfaceWarm}`}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Lightbulb
          className="mx-auto mb-6 size-16 text-[var(--brand-accent)]"
          strokeWidth={1.25}
          aria-hidden
        />
        <h2 className="mb-6 text-3xl font-black">{request.title}</h2>
        <p className="mb-12 text-lg text-slate-600 dark:text-slate-400">{request.body}</p>
        <Button
          asChild
          variant="brandAccent"
          className={cn(
            communities.ctaPill,
            communities.ctaPillMd,
            'hover:scale-105 active:translate-y-0'
          )}
        >
          <Link to={ctaTo}>{request.cta}</Link>
        </Button>
      </div>
    </section>
  );
}
