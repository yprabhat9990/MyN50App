import { CommunityPreviewCard } from '@/Components/Home/Community_preview_card';
import { CommunityTeaserCard } from '@/Components/Home/Community_teaser_card';
import { SectionHeading } from '@/Components/Home/Section_heading';
import { Button } from '@/Components/Ui/Button';
import type { CommunitiesIntro, CommunityCardData, CommunityTeaser } from '@/types/home';

interface CommunitiesPreviewSectionProps {
  intro: CommunitiesIntro;
  communities: CommunityCardData[];
  teasers: CommunityTeaser[];
  exploreCtaLabel: string;
}

export function CommunitiesPreviewSection({
  intro,
  communities,
  teasers,
  exploreCtaLabel,
}: CommunitiesPreviewSectionProps) {
  return (
    <>
      <section className="bg-[var(--brand-accent)]">
        <div className="flex w-full flex-col gap-2 px-4 py-3 text-white sm:px-5 md:flex-row md:items-center md:gap-4 md:px-8 md:py-3.5">
          <p className="shrink-0 text-left text-2xl leading-[1.2] font-semibold md:text-[2rem]">
            {intro.title}
          </p>
          <p className="max-w-[56ch] text-left text-[1rem] leading-[1.35] font-semibold opacity-95 md:text-[1.03rem]">
            {intro.description}
          </p>
        </div>
      </section>

      <section className="bg-[var(--brand-surface)] px-4 py-4 sm:px-5">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
          <SectionHeading title="Communities Preview" className="!space-y-0" />
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap justify-center gap-4 md:gap-4">
              {communities.map((community, index) => (
                <CommunityPreviewCard key={community.id} community={community} order={index + 1} />
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {teasers.map((teaser) => (
                <CommunityTeaserCard key={teaser.title} teaser={teaser} />
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <Button className="h-9 rounded-lg bg-[var(--brand-primary)] px-6 text-sm font-semibold text-white shadow-sm hover:bg-[var(--brand-primary-hover)] dark:text-[var(--brand-accent)] dark:hover:text-[var(--brand-accent-hover)]">
              {exploreCtaLabel}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
