import { CommunitiesPreviewSection } from '@/Components/Home/Communities_preview_section';
import { DualValueSection } from '@/Components/Home/Dual_value_section';
import { HeroSection } from '@/Components/Home/Hero_section';
import { HowItWorks } from '@/Components/Home/How_it_works';
import { homePageData } from '@/data/home-data';
import { PAGE_MAIN_SHELL } from '@/lib/page-shell';

export default function Home() {
  return (
    <main className={PAGE_MAIN_SHELL}>
      <HeroSection hero={homePageData.hero} />
      <section id="communities" className="scroll-mt-20">
        <CommunitiesPreviewSection
          intro={homePageData.exists}
          communities={homePageData.communities}
          teasers={homePageData.communityTeasers}
          exploreCtaLabel={homePageData.communitiesExploreCta}
        />
      </section>
      <section id="resources" className="scroll-mt-20">
        <HowItWorks steps={homePageData.processSteps} trustItems={homePageData.trustItems} />
      </section>
      <section id="lifecrafter-program" className="scroll-mt-20">
        <DualValueSection columns={homePageData.valueColumns} />
      </section>
    </main>
  );
}
