import { AboutContainer, AboutSection } from '../AboutLayout';
import { about } from '../about-classes';

import { memo } from 'react';

import { aboutAudience } from '@/data/about-page-data';
import { cn } from '@/lib/utils';

export const AboutAudienceSection = memo(function AboutAudienceSection() {
  return (
    <AboutSection purpose="audience">
      <AboutContainer>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className={cn('text-2xl font-bold dark:text-slate-100', about.brandNavy)}>
              {aboutAudience.forTitle}
            </h3>
            <ul className="space-y-4">
              {aboutAudience.forItems.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-1 text-[var(--brand-accent)]" aria-hidden>
                    •
                  </span>
                  <p className="text-slate-700 dark:text-slate-300">{line}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-400 dark:text-slate-500">
              {aboutAudience.notTitle}
            </h3>
            <ul className="space-y-4">
              {aboutAudience.notItems.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-1 text-slate-300 dark:text-slate-600" aria-hidden>
                    •
                  </span>
                  <p className="text-slate-500 dark:text-slate-500">{line}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AboutContainer>
    </AboutSection>
  );
});
