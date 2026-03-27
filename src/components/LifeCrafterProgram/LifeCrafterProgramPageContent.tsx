import {
  type LifeCrafterProgramPageData,
  defaultLifeCrafterProgramPageData,
} from '@/data/lifecrafter-program-page-data';

import { LifeCrafterProgramRoot } from './LifeCrafterProgramLayout';
import {
  LifeCrafterCapabilitiesSection,
  LifeCrafterFinalCtaSection,
  LifeCrafterHeroSection,
  LifeCrafterInfoBlocksSection,
  LifeCrafterJourneySection,
  LifeCrafterMembershipSection,
  LifeCrafterNotForYouSection,
  LifeCrafterTrustSection,
  LifeCrafterWhoSection,
} from './sections';

/** Optional overrides for in-page / router targets without editing `data`. */
export type LifeCrafterProgramPageLinks = {
  hero?: {
    becomeHref?: string;
    manifestoHref?: string;
  };
  finalCta?: {
    joinHref?: string;
    exploreHref?: string;
  };
};

export type LifeCrafterProgramPageContentProps = {
  /** Full page model; defaults to `defaultLifeCrafterProgramPageData`. */
  data?: LifeCrafterProgramPageData;
  className?: string;
  /** CTA targets; sections keep their own defaults when omitted. */
  links?: LifeCrafterProgramPageLinks;
};

export function LifeCrafterProgramPageContent({
  data = defaultLifeCrafterProgramPageData,
  className,
  links,
}: LifeCrafterProgramPageContentProps) {
  const d = data;

  return (
    <LifeCrafterProgramRoot className={className}>
      <LifeCrafterHeroSection
        hero={d.hero}
        becomeHref={links?.hero?.becomeHref}
        manifestoHref={links?.hero?.manifestoHref}
      />
      <LifeCrafterWhoSection who={d.who} />
      <LifeCrafterNotForYouSection notForYou={d.notForYou} />
      <LifeCrafterCapabilitiesSection capabilities={d.capabilities} />
      <LifeCrafterMembershipSection membership={d.membership} />
      <LifeCrafterTrustSection trust={d.trust} />
      <LifeCrafterJourneySection journey={d.journey} />
      <LifeCrafterInfoBlocksSection infoBlocks={d.infoBlocks} />
      <LifeCrafterFinalCtaSection
        finalCta={d.finalCta}
        joinHref={links?.finalCta?.joinHref}
        exploreHref={links?.finalCta?.exploreHref}
      />
    </LifeCrafterProgramRoot>
  );
}
