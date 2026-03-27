import {
  CommunitiesExploreButton,
  CommunitiesJoinMemberButton,
  CommunitiesLifeCrafterButton,
} from '../CommunitiesCtaButtons';
import { CommunitiesShell } from '../CommunitiesLayout';

import type { CommunitiesPageData } from '@/data/communities-page-data';

export interface CommunitiesClosingCtaSectionProps {
  closing: CommunitiesPageData['closingCta'];
  exploreHref?: string;
  joinMemberTo?: string;
  lifecrafterTo?: string;
  exploreLabel?: string;
  joinMemberLabel?: string;
  lifecrafterLabel?: string;
}

export function CommunitiesClosingCtaSection({
  closing,
  exploreHref = '#explore',
  joinMemberTo = '/contact',
  lifecrafterTo = '/lifecrafter-program',
  exploreLabel = 'Explore Communities',
  joinMemberLabel = 'Join as Member',
  lifecrafterLabel = 'Apply as LifeCrafter',
}: CommunitiesClosingCtaSectionProps) {
  return (
    <section className="border-t border-slate-200 py-12 dark:border-slate-800">
      <CommunitiesShell>
        <div className="rounded-[3rem] border border-slate-200 bg-slate-100 p-12 text-center dark:border-slate-700 dark:bg-slate-800/50">
          <h2 className="mb-12 text-3xl leading-tight font-black tracking-tight md:text-5xl lg:text-6xl">
            {closing.lineBefore}{' '}
            <span className="text-[var(--brand-accent)] italic">{closing.lineAccent}</span>
            {closing.lineAfter}
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            <CommunitiesExploreButton href={exploreHref} size="lg">
              {exploreLabel}
            </CommunitiesExploreButton>
            <CommunitiesJoinMemberButton to={joinMemberTo} variant="solid" size="lg">
              {joinMemberLabel}
            </CommunitiesJoinMemberButton>
            <CommunitiesLifeCrafterButton to={lifecrafterTo} size="lg">
              {lifecrafterLabel}
            </CommunitiesLifeCrafterButton>
          </div>
        </div>
      </CommunitiesShell>
    </section>
  );
}
