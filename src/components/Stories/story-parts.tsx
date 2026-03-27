import { Fragment, memo } from 'react';

import { Search } from 'lucide-react';

import { storiesWhatWeBuild } from '@/data/stories-page-data';
import { cn } from '@/lib/utils';

import { STORY_WHAT_BUILD_ICONS } from './story-icons';

type WhatWeBuildCardData = (typeof storiesWhatWeBuild.cards)[number];

export const StoryWhatWeBuildCard = memo(function StoryWhatWeBuildCard({
  card,
}: {
  card: WhatWeBuildCardData;
}) {
  const Icon = STORY_WHAT_BUILD_ICONS[card.icon];
  const isAccent = card.tone === 'accent';
  return (
    <div
      className={cn(
        'rounded-2xl p-8 transition-shadow hover:shadow-xl',
        isAccent
          ? 'border border-[var(--brand-accent)]/20 bg-[var(--brand-accent)]/5'
          : 'border border-slate-200 dark:border-slate-800'
      )}
    >
      <Icon
        className={cn('mb-4 size-9', isAccent ? 'text-[var(--brand-accent)]' : 'text-slate-400')}
        strokeWidth={isAccent ? 1.5 : 1.25}
        aria-hidden
      />
      <h3 className="mb-3 text-xl font-bold">{card.title}</h3>
      <p className="text-slate-600 dark:text-slate-400">{card.body}</p>
    </div>
  );
});

type Stat = { value: string; label: string };

export function StoryStatsRow({ stats }: { stats: readonly Stat[] }) {
  return (
    <div className="flex gap-4">
      {stats.map((stat, i) => (
        <Fragment key={stat.label}>
          {i > 0 ? <div className="h-10 w-px bg-slate-200 dark:bg-slate-700" /> : null}
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-[var(--brand-accent)]">{stat.value}</span>
            <span className="text-xs tracking-widest text-slate-500 uppercase">{stat.label}</span>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export function StoryPatternQuoteCard({ quote }: { quote: string }) {
  return (
    <div className="rounded-2xl border border-[var(--brand-accent)]/10 bg-[var(--brand-accent)]/5 p-8">
      <Search className="mb-4 size-10 text-[var(--brand-accent)]" strokeWidth={1.5} aria-hidden />
      <p className="text-lg text-slate-600 italic dark:text-slate-400">{quote}</p>
    </div>
  );
}

/** Decorative blur orbs behind the evolution CTA. */
export function StoryEvolutionBackdrop() {
  return (
    <>
      <div
        className="absolute -right-12 -bottom-12 size-64 rounded-full bg-white/10 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -top-12 -left-12 size-64 rounded-full bg-black/5 blur-3xl"
        aria-hidden
      />
    </>
  );
}
