import { AboutContainer, AboutSection } from '../AboutLayout';
import { about } from '../about-classes';

import { memo } from 'react';

import { Check, X } from 'lucide-react';

import { aboutClarity } from '@/data/about-page-data';
import { cn } from '@/lib/utils';

export const AboutClaritySection = memo(function AboutClaritySection() {
  return (
    <AboutSection purpose="clarity-tool" variant="navy">
      <AboutContainer>
        <div className="grid gap-0 overflow-hidden rounded-3xl border border-slate-600/80 md:grid-cols-2">
          <div className={cn(about.brandNavyBg, 'p-12 md:border-r md:border-slate-600/80')}>
            <h3 className="mb-8 text-sm font-bold tracking-widest text-[var(--brand-accent)] uppercase">
              {aboutClarity.isTitle}
            </h3>
            <ul className="space-y-6">
              {aboutClarity.isItems.map((line) => (
                <li key={line} className="flex items-center gap-4">
                  <Check className="size-6 shrink-0 text-green-500" strokeWidth={3} aria-hidden />
                  <span className="text-lg">{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-12 text-[#0A1D37] dark:bg-slate-800 dark:text-slate-100">
            <h3 className="mb-8 text-sm font-bold tracking-widest text-slate-400 uppercase dark:text-slate-500">
              {aboutClarity.isNotTitle}
            </h3>
            <ul className="space-y-6">
              {aboutClarity.isNotItems.map((line) => (
                <li key={line} className="flex items-center gap-4">
                  <X className="size-6 shrink-0 text-red-400" strokeWidth={3} aria-hidden />
                  <span className="text-lg">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AboutContainer>
    </AboutSection>
  );
});
