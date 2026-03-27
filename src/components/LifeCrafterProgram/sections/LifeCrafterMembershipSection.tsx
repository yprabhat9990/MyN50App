import { LifeCrafterSectionHeading } from '../LifeCrafterSectionHeading';
import { lifeCrafterProgram } from '../lifecrafter-program-classes';

import { CheckCircle2, CircleSlash } from 'lucide-react';

import { Button } from '@/Components/Ui/Button';
import type { LifeCrafterProgramPageData } from '@/data/lifecrafter-program-page-data';
import { cn } from '@/lib/utils';

export interface LifeCrafterMembershipSectionProps {
  membership: LifeCrafterProgramPageData['membership'];
}

export function LifeCrafterMembershipSection({ membership }: LifeCrafterMembershipSectionProps) {
  const { blue, silver } = membership;

  return (
    <section className={`${lifeCrafterProgram.sectionY} bg-slate-50 dark:bg-[#221610]`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <LifeCrafterSectionHeading title={membership.title} subtitle={membership.subtitle} />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <div className="border-b border-slate-100 p-8 dark:border-slate-800">
              <div className="mb-2 text-xs font-bold tracking-widest text-blue-600 uppercase">
                {blue.tier}
              </div>
              <h3 className="mb-1 text-2xl font-black">{blue.price}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{blue.blurb}</p>
            </div>
            <div className="flex-grow p-8">
              <ul className="space-y-4">
                {blue.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-3 text-sm">
                    {f.included ? (
                      <CheckCircle2 className="size-5 shrink-0 text-green-500" aria-hidden />
                    ) : (
                      <CircleSlash className="size-5 shrink-0 text-slate-300" aria-hidden />
                    )}
                    <span className={cn(!f.included && 'text-slate-400')}>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 pt-0">
              <Button
                asChild
                variant="outline"
                className="h-auto w-full rounded-xl border-[var(--brand-accent)] py-3 font-bold text-[var(--brand-accent)] hover:bg-[var(--brand-accent)]/5"
              >
                <a href="/register">{blue.cta}</a>
              </Button>
            </div>
          </div>

          <div className="relative flex flex-col overflow-hidden rounded-2xl border-2 border-[var(--brand-accent)] bg-white ring-4 ring-[var(--brand-accent)]/5 dark:bg-slate-900">
            <div className="absolute top-4 right-4 rounded bg-[var(--brand-accent)] px-2 py-1 text-[10px] font-bold text-white">
              {silver.badge}
            </div>
            <div className="border-b border-slate-100 bg-[var(--brand-accent)]/5 p-8 dark:border-slate-800">
              <div className="mb-2 text-xs font-bold tracking-widest text-[var(--brand-accent)] uppercase">
                {silver.tier}
              </div>
              <h3 className="mb-1 text-2xl font-black">
                {silver.price}
                <span className="text-sm font-normal text-slate-500">{silver.priceSuffix}</span>
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{silver.blurb}</p>
            </div>
            <div className="flex-grow p-8">
              <ul className="space-y-4">
                {silver.features.map((f) => (
                  <li
                    key={f.text}
                    className={cn(
                      'flex items-center gap-3 text-sm',
                      'highlight' in f && f.highlight && 'font-semibold'
                    )}
                  >
                    <CheckCircle2
                      className="size-5 shrink-0 text-[var(--brand-accent)]"
                      aria-hidden
                    />
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 pt-0">
              <Button
                asChild
                variant="brandAccent"
                className="h-auto w-full rounded-xl py-3 font-bold shadow-lg"
              >
                <a href="/contact">{silver.cta}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
