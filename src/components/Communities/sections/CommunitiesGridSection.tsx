import { CommunitiesShell } from '../CommunitiesLayout';
import { communities } from '../communities-classes';

import type { CommunitiesPageData } from '@/data/communities-page-data';

import { CommunityCard } from './CommunityCard';

export interface CommunitiesGridSectionProps {
  gridIntro: CommunitiesPageData['gridIntro'];
  communities: CommunitiesPageData['communities'];
  /** Anchor id for in-page links (e.g. hero & closing CTA). */
  sectionId?: string;
}

export function CommunitiesGridSection({
  gridIntro,
  communities: items,
  sectionId = 'explore',
}: CommunitiesGridSectionProps) {
  return (
    <section className={communities.sectionY} id={sectionId}>
      <CommunitiesShell>
        <div className="mb-12 text-center md:mb-12">
          <h2 className="mb-4 text-4xl font-black italic md:text-5xl">{gridIntro.title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">{gridIntro.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <CommunityCard key={c.name} community={c} />
          ))}
        </div>
      </CommunitiesShell>
    </section>
  );
}
