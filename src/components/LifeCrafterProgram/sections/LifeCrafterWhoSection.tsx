import { LifeCrafterProgramShell } from '../LifeCrafterProgramLayout';
import { LifeCrafterSectionHeading } from '../LifeCrafterSectionHeading';
import { lifeCrafterProgram } from '../lifecrafter-program-classes';

import { Award, Compass, UsersRound } from 'lucide-react';

import type { LifeCrafterProgramPageData } from '@/data/lifecrafter-program-page-data';

const icons = {
  practitioners: Award,
  guides: Compass,
  facilitators: UsersRound,
} as const;

export interface LifeCrafterWhoSectionProps {
  who: LifeCrafterProgramPageData['who'];
}

export function LifeCrafterWhoSection({ who }: LifeCrafterWhoSectionProps) {
  return (
    <section
      id="manifesto"
      className={`${lifeCrafterProgram.sectionY} bg-white dark:bg-[#221610]/50`}
    >
      <LifeCrafterProgramShell>
        <LifeCrafterSectionHeading title={who.title} showAccentRule />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {who.cards.map((card) => {
            const Icon = icons[card.key as keyof typeof icons];
            return (
              <div
                key={card.key}
                className="group rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-all hover:border-[var(--brand-accent)]/30 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] transition-transform group-hover:scale-110">
                  <Icon className="size-7" strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="mb-3 text-xl font-bold">{card.title}</h3>
                <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </LifeCrafterProgramShell>
    </section>
  );
}
