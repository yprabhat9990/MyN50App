import { LifeCrafterProgramShell } from '../LifeCrafterProgramLayout';

import { Link } from 'react-router-dom';

import { Button } from '@/Components/Ui/Button';
import type { LifeCrafterProgramPageData } from '@/data/lifecrafter-program-page-data';

export interface LifeCrafterHeroSectionProps {
  hero: LifeCrafterProgramPageData['hero'];
  becomeHref?: string;
  manifestoHref?: string;
}

export function LifeCrafterHeroSection({
  hero,
  becomeHref = '/contact',
  manifestoHref = '#manifesto',
}: LifeCrafterHeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-12 lg:pt-12 lg:pb-12">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-10 dark:opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #ec5b13 0%, transparent 70%)',
        }}
        aria-hidden
      />
      <LifeCrafterProgramShell className="text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--brand-accent)]/10 px-3 py-1 text-xs font-bold tracking-wider text-[var(--brand-accent)] uppercase">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-accent)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand-accent)]" />
          </span>
          {hero.badge}
        </div>
        <h1 className="mb-6 text-4xl leading-[1.1] font-black tracking-tight text-slate-900 md:text-6xl dark:text-slate-100">
          {hero.titleLine1}
          <br />
          <span className="text-[var(--brand-accent)]">{hero.titleAccent}</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 md:text-xl dark:text-slate-400">
          {hero.description}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            variant="brandAccent"
            className="h-auto w-full rounded-xl px-8 py-4 text-base font-bold sm:w-auto"
          >
            <Link to={becomeHref}>Become a LifeCrafter</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-auto w-full rounded-xl border-slate-200 bg-white px-8 py-4 text-base font-bold sm:w-auto dark:border-slate-700 dark:bg-slate-800"
          >
            <a href={manifestoHref}>Watch the Manifesto</a>
          </Button>
        </div>
      </LifeCrafterProgramShell>
    </section>
  );
}
