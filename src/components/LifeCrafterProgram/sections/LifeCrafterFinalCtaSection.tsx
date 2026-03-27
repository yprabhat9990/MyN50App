import { LifeCrafterProgramShell } from '../LifeCrafterProgramLayout';

import { Link } from 'react-router-dom';

import { Button } from '@/Components/Ui/Button';
import type { LifeCrafterProgramPageData } from '@/data/lifecrafter-program-page-data';

export interface LifeCrafterFinalCtaSectionProps {
  finalCta: LifeCrafterProgramPageData['finalCta'];
  joinHref?: string;
  exploreHref?: string;
}

export function LifeCrafterFinalCtaSection({
  finalCta,
  joinHref = '/contact',
  exploreHref = '/communities',
}: LifeCrafterFinalCtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-accent)] py-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, white 0%, transparent 40%), radial-gradient(circle at 80% 50%, white 0%, transparent 40%)',
        }}
        aria-hidden
      />
      <LifeCrafterProgramShell className="relative z-10 max-w-4xl text-center text-white">
        <h2 className="mb-8 text-3xl leading-tight font-black md:text-5xl">{finalCta.title}</h2>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            variant="onAccentSolid"
            className="h-auto w-full rounded-2xl px-10 py-5 text-lg font-bold shadow-xl sm:w-auto"
          >
            <Link to={joinHref}>{finalCta.joinLabel}</Link>
          </Button>
          <Button
            asChild
            variant="outlineOnAccent"
            className="h-auto w-full rounded-2xl px-10 py-5 text-lg font-bold sm:w-auto"
          >
            <Link to={exploreHref}>{finalCta.exploreLabel}</Link>
          </Button>
        </div>
        <p className="mt-8 text-sm text-white/70 italic">{finalCta.footnote}</p>
      </LifeCrafterProgramShell>
    </section>
  );
}
