import { AboutContainer, AboutSection } from '../AboutLayout';
import { about } from '../about-classes';
import { aboutTrustIcons } from '../about-icons';

import { memo } from 'react';

import { aboutTrust } from '@/data/about-page-data';
import { cn } from '@/lib/utils';

export const AboutTrustSection = memo(function AboutTrustSection() {
  return (
    <AboutSection purpose="trust" variant="cream">
      <AboutContainer maxWidth="4xl" className="text-center">
        <h2 className={cn('mb-6', about.heading2)}>{aboutTrust.heading}</h2>
        <p className={cn('mb-12', about.bodyLead)}>{aboutTrust.intro}</p>
        <div className="grid gap-8 text-left md:grid-cols-2">
          {aboutTrust.points.map((point) => {
            const Icon = aboutTrustIcons[point.icon];
            return (
              <div key={point.title} className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm dark:border-slate-600 dark:bg-slate-900">
                  <Icon
                    className="size-5 text-[#0A1D37] dark:text-[var(--brand-accent)]"
                    aria-hidden
                  />
                </div>
                <div>
                  <h5 className="mb-1 font-bold text-slate-900 dark:text-slate-100">
                    {point.title}
                  </h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{point.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </AboutContainer>
    </AboutSection>
  );
});
