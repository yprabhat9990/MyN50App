import { LifeCrafterProgramShell } from '../LifeCrafterProgramLayout';
import { lifeCrafterProgram } from '../lifecrafter-program-classes';

import { Link } from 'react-router-dom';

import { ArrowRight, UsersRound, Wallet } from 'lucide-react';

import type { LifeCrafterProgramPageData } from '@/data/lifecrafter-program-page-data';

export interface LifeCrafterInfoBlocksSectionProps {
  infoBlocks: LifeCrafterProgramPageData['infoBlocks'];
}

export function LifeCrafterInfoBlocksSection({ infoBlocks }: LifeCrafterInfoBlocksSectionProps) {
  return (
    <section className={lifeCrafterProgram.sectionY}>
      <LifeCrafterProgramShell>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-[var(--brand-accent)]/10 bg-[var(--brand-accent)]/5 p-10">
            <div className="mb-6 flex items-center gap-4">
              <Wallet className="size-10 shrink-0 text-[var(--brand-accent)]" aria-hidden />
              <h3 className="text-2xl font-bold">{infoBlocks.earnings.title}</h3>
            </div>
            <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">
              {infoBlocks.earnings.body}
            </p>
            <Link
              to={infoBlocks.earnings.href}
              className="inline-flex items-center gap-2 font-bold text-[var(--brand-accent)] transition-all hover:gap-3"
            >
              {infoBlocks.earnings.cta} <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="rounded-3xl bg-slate-900 p-10 text-white">
            <div className="mb-6 flex items-center gap-4">
              <UsersRound className="size-10 shrink-0 text-[var(--brand-accent)]" aria-hidden />
              <h3 className="text-2xl font-bold">{infoBlocks.support.title}</h3>
            </div>
            <p className="mb-6 leading-relaxed text-slate-400">{infoBlocks.support.body}</p>
            <Link
              to={infoBlocks.support.href}
              className="inline-flex items-center gap-2 font-bold text-[var(--brand-accent)] transition-all hover:gap-3"
            >
              {infoBlocks.support.cta} <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </LifeCrafterProgramShell>
    </section>
  );
}
