import { LifeCrafterProgramShell } from '../LifeCrafterProgramLayout';
import { lifeCrafterProgram } from '../lifecrafter-program-classes';

import { Gavel, Handshake, Shield, SlidersHorizontal } from 'lucide-react';

import type { LifeCrafterProgramPageData } from '@/data/lifecrafter-program-page-data';

const pillarIcons = {
  identity: Shield,
  ethics: Gavel,
  audit: SlidersHorizontal,
  peer: Handshake,
} as const;

export interface LifeCrafterTrustSectionProps {
  trust: LifeCrafterProgramPageData['trust'];
}

export function LifeCrafterTrustSection({ trust }: LifeCrafterTrustSectionProps) {
  const [a, b, c, d] = trust.collageImages;
  const [altA, altB, altC, altD] = trust.collageAlts;

  return (
    <section
      className={`${lifeCrafterProgram.sectionY} border-y border-slate-100 dark:border-slate-800`}
    >
      <LifeCrafterProgramShell>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="lg:w-1/2">
            <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
              <Shield className="size-8" strokeWidth={1.5} aria-hidden />
            </div>
            <h2 className="mb-6 text-3xl font-bold">{trust.title}</h2>
            <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">{trust.body}</p>
            <div className="grid grid-cols-2 gap-4">
              {trust.pillars.map((p) => {
                const Icon = pillarIcons[p.key as keyof typeof pillarIcons];
                return (
                  <div key={p.key} className="flex items-center gap-2">
                    <Icon className="size-5 shrink-0 text-[var(--brand-accent)]" aria-hidden />
                    <span className="text-xs font-bold tracking-tight uppercase">{p.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-4 lg:w-1/2">
            <div className="space-y-4">
              <div className="h-48 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                <img src={a} alt={altA} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="h-64 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                <img src={b} alt={altB} className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-64 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                <img src={c} alt={altC} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="h-48 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                <img src={d} alt={altD} className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </LifeCrafterProgramShell>
    </section>
  );
}
