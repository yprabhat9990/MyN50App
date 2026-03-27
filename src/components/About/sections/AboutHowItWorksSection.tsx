import { AboutContainer, AboutSection } from '../AboutLayout';
import { about } from '../about-classes';
import { aboutHowItWorksIcons } from '../about-icons';

import { memo } from 'react';

import { aboutHowItWorks } from '@/data/about-page-data';
import { cn } from '@/lib/utils';

export const AboutHowItWorksSection = memo(function AboutHowItWorksSection() {
  return (
    <AboutSection purpose="how-it-works" variant="surface">
      <AboutContainer>
        <h2 className={cn('mb-12 text-center', about.heading2)}>{aboutHowItWorks.heading}</h2>
        <div className="grid gap-8 md:grid-cols-4">
          {aboutHowItWorks.pillars.map((pillar) => {
            const Icon = aboutHowItWorksIcons[pillar.icon];
            return (
              <div key={pillar.title} className="text-center">
                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-[var(--brand-accent-soft)] dark:bg-[var(--brand-accent-soft)]">
                  <Icon className="size-8 text-[var(--brand-accent)]" strokeWidth={2} aria-hidden />
                </div>
                <h4 className="mb-3 font-bold text-slate-900 dark:text-slate-100">
                  {pillar.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{pillar.body}</p>
              </div>
            );
          })}
        </div>
      </AboutContainer>
    </AboutSection>
  );
});
