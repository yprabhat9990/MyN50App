import { CommunitiesExploreJoinPair } from '../CommunitiesCtaButtons';
import { CommunitiesShell } from '../CommunitiesLayout';

import type { CommunitiesPageData } from '@/data/communities-page-data';

export interface CommunitiesHeroSectionProps {
  hero: CommunitiesPageData['hero'];
  exploreHref?: string;
  joinMemberTo?: string;
  exploreLabel?: string;
  joinMemberLabel?: string;
}

export function CommunitiesHeroSection({
  hero,
  exploreHref = '#explore',
  joinMemberTo = '/contact',
  exploreLabel = 'Explore Communities',
  joinMemberLabel = 'Join as Member',
}: CommunitiesHeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-12">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[var(--brand-accent)]/5 to-transparent"
        aria-hidden
      />
      <CommunitiesShell className="flex flex-col items-center text-center">
        <span className="mb-6 rounded-full bg-[var(--brand-accent)]/10 px-4 py-1.5 text-xs font-bold tracking-widest text-[var(--brand-accent)] uppercase">
          {hero.badge}
        </span>
        <h1 className="mb-8 max-w-4xl text-4xl leading-tight font-black tracking-tight md:text-6xl lg:text-7xl">
          {hero.titleBefore}{' '}
          <span className="text-[var(--brand-accent)] italic">{hero.titleAccent}</span>
        </h1>
        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-2xl dark:text-slate-400">
          {hero.description}
        </p>
        <CommunitiesExploreJoinPair
          exploreHref={exploreHref}
          joinMemberTo={joinMemberTo}
          exploreLabel={exploreLabel}
          joinMemberLabel={joinMemberLabel}
        />
      </CommunitiesShell>
    </section>
  );
}
