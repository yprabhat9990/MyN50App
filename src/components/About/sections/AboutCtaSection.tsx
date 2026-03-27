import { AboutContainer, AboutSection } from '../AboutLayout';
import { about } from '../about-classes';

import { memo } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/Components/Ui/Button';
import { aboutCta } from '@/data/about-page-data';
import { cn } from '@/lib/utils';

export const AboutCtaSection = memo(function AboutCtaSection() {
  return (
    <AboutSection purpose="cta" variant="surface">
      <AboutContainer maxWidth="4xl">
        <div className="rounded-[3rem] border-2 border-[var(--brand-accent-border-light)] p-12 text-center dark:border-slate-600">
          <h2
            className={cn(
              'mb-8 text-3xl font-bold md:text-4xl dark:text-slate-100',
              about.brandNavy
            )}
          >
            {aboutCta.heading}
          </h2>
          <div className={about.ctaButtonRow}>
            <Button
              asChild
              variant="default"
              size="lg"
              className={cn(
                about.ctaButton,
                'border-0 bg-[#0A1D37] text-white hover:bg-[#0A1D37]/90 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200'
              )}
            >
              <Link to={aboutCta.memberTo}>{aboutCta.memberLabel}</Link>
            </Button>
            <Button asChild variant="brandAccent" size="lg" className={about.ctaButton}>
              <Link to={aboutCta.lifeCrafterTo}>{aboutCta.lifeCrafterLabel}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className={cn(
                about.ctaButton,
                'border-2 border-[#0A1D37] text-[#0A1D37] hover:bg-slate-50 dark:border-slate-300 dark:text-slate-100 dark:hover:bg-slate-800'
              )}
            >
              <Link to={aboutCta.communitiesTo}>{aboutCta.communitiesLabel}</Link>
            </Button>
          </div>
        </div>
      </AboutContainer>
    </AboutSection>
  );
});
