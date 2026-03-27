import { LifeCrafterProgramShell } from '../LifeCrafterProgramLayout';
import { LifeCrafterSectionHeading } from '../LifeCrafterSectionHeading';
import { lifeCrafterProgram } from '../lifecrafter-program-classes';

import type { LifeCrafterProgramPageData } from '@/data/lifecrafter-program-page-data';

export interface LifeCrafterJourneySectionProps {
  journey: LifeCrafterProgramPageData['journey'];
}

export function LifeCrafterJourneySection({ journey }: LifeCrafterJourneySectionProps) {
  return (
    <section className={`${lifeCrafterProgram.sectionY} ${lifeCrafterProgram.surfacePage}`}>
      <LifeCrafterProgramShell>
        <LifeCrafterSectionHeading title={journey.title} subtitle={journey.subtitle} />
        <div className="relative">
          <div
            className="pointer-events-none absolute top-1/2 right-0 left-0 z-0 hidden h-0.5 -translate-y-1/2 bg-slate-200 md:block dark:bg-slate-800"
            aria-hidden
          />
          <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-12">
            {journey.steps.map((step) => (
              <div key={step.n} className={`${lifeCrafterProgram.surfacePage} px-4 text-center`}>
                <div
                  className={`mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-[var(--brand-accent)] text-2xl font-black text-white ${lifeCrafterProgram.journeyStepRing}`}
                >
                  {step.n}
                </div>
                <h4 className="mb-2 font-bold">{step.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </LifeCrafterProgramShell>
    </section>
  );
}
