import { AboutContainer, AboutSection } from '../AboutLayout';
import { about } from '../about-classes';

import { memo } from 'react';

import { aboutHeroImage } from '@/assets/about-page/images';
import { aboutHero } from '@/data/about-page-data';
import { cn } from '@/lib/utils';

export const AboutHeroSection = memo(function AboutHeroSection() {
  return (
    <AboutSection purpose="hero" className="overflow-hidden">
      <AboutContainer>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-4xl leading-tight font-bold text-slate-900 md:text-5xl lg:text-6xl dark:text-slate-100">
              {aboutHero.titleLine1} <br />
              <span className="text-[var(--brand-accent)]">{aboutHero.titleAccent}</span>
            </h1>
            <p className={cn('mb-8 max-w-lg', about.bodyLead)}>{aboutHero.lead}</p>
            <p
              className={cn(
                'border-l-4 border-[var(--brand-accent)] pl-4 text-lg font-semibold dark:text-slate-100',
                about.brandNavy
              )}
            >
              {aboutHero.tagline}
            </p>
          </div>
          <div className="relative">
            <img
              src={aboutHeroImage}
              alt={aboutHero.imageAlt}
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl"
              width={800}
              height={600}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </AboutContainer>
    </AboutSection>
  );
});
