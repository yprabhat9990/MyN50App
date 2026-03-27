import {
  AboutAudienceSection,
  AboutBeliefsSection,
  AboutClaritySection,
  AboutCtaSection,
  AboutGapSection,
  AboutHeroSection,
  AboutHowItWorksSection,
  AboutTrustSection,
  AboutVisionSection,
} from './sections';

/** Composes About page sections; each section is memoized and data-driven from `@/data/about-page-data`. */
export function AboutPageContent() {
  return (
    <>
      <AboutHeroSection />
      <AboutGapSection />
      <AboutBeliefsSection />
      <AboutClaritySection />
      <AboutHowItWorksSection />
      <AboutTrustSection />
      <AboutAudienceSection />
      <AboutVisionSection />
      <AboutCtaSection />
    </>
  );
}
