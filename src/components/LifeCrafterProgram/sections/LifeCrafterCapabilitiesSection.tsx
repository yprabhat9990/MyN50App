import { LifeCrafterProgramShell } from '../LifeCrafterProgramLayout';
import { LifeCrafterSectionHeading } from '../LifeCrafterSectionHeading';
import { lifeCrafterProgram } from '../lifecrafter-program-classes';

import { CalendarCheck, Megaphone, MessageSquare, Wallet } from 'lucide-react';

import type { LifeCrafterProgramPageData } from '@/data/lifecrafter-program-page-data';

const icons = {
  host: CalendarCheck,
  presence: Megaphone,
  earn: Wallet,
  lead: MessageSquare,
} as const;

export interface LifeCrafterCapabilitiesSectionProps {
  capabilities: LifeCrafterProgramPageData['capabilities'];
}

export function LifeCrafterCapabilitiesSection({
  capabilities,
}: LifeCrafterCapabilitiesSectionProps) {
  return (
    <section className={lifeCrafterProgram.sectionY}>
      <LifeCrafterProgramShell>
        <LifeCrafterSectionHeading title={capabilities.title} subtitle={capabilities.subtitle} />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.items.map((item) => {
            const Icon = icons[item.key as keyof typeof icons];
            return (
              <div
                key={item.key}
                className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <Icon
                  className="mb-4 block size-8 text-[var(--brand-accent)]"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h4 className="mb-2 font-bold">{item.title}</h4>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </LifeCrafterProgramShell>
    </section>
  );
}
