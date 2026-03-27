import { AboutContainer, AboutSection } from '../AboutLayout';
import { about } from '../about-classes';

import { memo } from 'react';

import { aboutBeliefs } from '@/data/about-page-data';
import { cn } from '@/lib/utils';

const ROMAN = ['I.', 'II.', 'III.', 'IV.', 'V.'] as const;

export const AboutBeliefsSection = memo(function AboutBeliefsSection() {
  const { items } = aboutBeliefs;
  return (
    <AboutSection purpose="manifesto">
      <AboutContainer>
        <h2 className={cn('mb-12 text-center', about.heading2)}>{aboutBeliefs.heading}</h2>
        <div className="mx-auto max-w-4xl space-y-8">
          {items.map((text, i) => (
            <div
              key={ROMAN[i]}
              className={cn(
                'flex items-start gap-6',
                i < items.length - 1 && 'border-b border-slate-200 pb-8 dark:border-slate-700'
              )}
            >
              <span className="text-2xl font-bold text-[var(--brand-accent)]">{ROMAN[i]}</span>
              <p className="text-xl leading-relaxed text-slate-800 dark:text-slate-200">{text}</p>
            </div>
          ))}
        </div>
      </AboutContainer>
    </AboutSection>
  );
});
