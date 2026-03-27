import { LifeCrafterProgramShell } from '../LifeCrafterProgramLayout';
import { lifeCrafterProgram } from '../lifecrafter-program-classes';

import { BadgeCheck, XCircle } from 'lucide-react';

import type { LifeCrafterProgramPageData } from '@/data/lifecrafter-program-page-data';

export interface LifeCrafterNotForYouSectionProps {
  notForYou: LifeCrafterProgramPageData['notForYou'];
}

export function LifeCrafterNotForYouSection({ notForYou }: LifeCrafterNotForYouSectionProps) {
  return (
    <section
      className={`${lifeCrafterProgram.sectionY} relative overflow-hidden bg-slate-900 text-white`}
    >
      <LifeCrafterProgramShell className="relative z-10">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="mb-6 text-3xl font-bold">{notForYou.title}</h2>
            <p className="mb-8 text-lg text-slate-400">{notForYou.intro}</p>
            <ul className="space-y-4">
              {notForYou.bullets.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <XCircle className="mt-0.5 size-5 shrink-0 text-red-500" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative w-full lg:w-1/2">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-700 bg-slate-800">
              <img
                src={notForYou.imageSrc}
                alt={notForYou.imageAlt}
                className="h-full w-full object-cover opacity-60"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"
                aria-hidden
              />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <BadgeCheck className="size-5 text-[var(--brand-accent)]" aria-hidden />
                <span className="text-sm font-medium">{notForYou.imageCaption}</span>
              </div>
            </div>
          </div>
        </div>
      </LifeCrafterProgramShell>
    </section>
  );
}
