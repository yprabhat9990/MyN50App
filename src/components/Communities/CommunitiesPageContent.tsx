import { type CommunitiesPageData, defaultCommunitiesPageData } from '@/data/communities-page-data';

import { CommunitiesRoot } from './CommunitiesLayout';
import {
  CommunitiesClosingCtaSection,
  CommunitiesGridSection,
  CommunitiesHeroSection,
  CommunitiesIntentionalParticipationSection,
  CommunitiesPillarsSection,
  CommunitiesRequestSection,
} from './sections';

export type CommunitiesPageContentProps = {
  /** Full page model; defaults to `defaultCommunitiesPageData`. Override via spread: `{ ...defaultCommunitiesPageData, hero: { ... } }`. */
  data?: CommunitiesPageData;
  className?: string;
};

/**
 * Composes Communities marketing sections. Each block is exported from `./sections` for reuse
 * (e.g. embed `CommunitiesGridSection` elsewhere) and stays data-driven via `data`.
 */
export function CommunitiesPageContent({
  data = defaultCommunitiesPageData,
  className,
}: CommunitiesPageContentProps) {
  const d = data;

  return (
    <CommunitiesRoot className={className}>
      <CommunitiesHeroSection hero={d.hero} />
      <CommunitiesPillarsSection pillarsIntro={d.pillarsIntro} pillars={d.pillars} />
      <CommunitiesGridSection gridIntro={d.gridIntro} communities={d.communities} />
      <CommunitiesIntentionalParticipationSection content={d.intentionalParticipation} />
      <CommunitiesRequestSection request={d.requestCommunity} />
      <CommunitiesClosingCtaSection closing={d.closingCta} />
    </CommunitiesRoot>
  );
}
