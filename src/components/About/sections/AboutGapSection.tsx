import { AboutContainer, AboutSection } from '../AboutLayout';
import { about } from '../about-classes';

import { memo } from 'react';

import { aboutGap } from '@/data/about-page-data';
import { cn } from '@/lib/utils';

export const AboutGapSection = memo(function AboutGapSection() {
  return (
    <AboutSection purpose="the-gap" variant="cream">
      <AboutContainer>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className={cn('mb-6', about.heading2)}>{aboutGap.heading}</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">{aboutGap.intro}</p>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {aboutGap.cards.map((card) => (
            <div key={card.index} className={cn('p-8', about.cardBorder)}>
              <div className="mb-4 text-4xl font-bold text-[var(--brand-accent)]">{card.index}</div>
              <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-100">
                {card.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">{card.body}</p>
            </div>
          ))}
        </div>
      </AboutContainer>
    </AboutSection>
  );
});
