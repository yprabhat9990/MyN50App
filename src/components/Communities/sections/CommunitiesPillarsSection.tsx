import { CommunitiesShell } from '../CommunitiesLayout';

import type { CommunitiesPageData } from '@/data/communities-page-data';

export interface CommunitiesPillarsSectionProps {
  pillarsIntro: CommunitiesPageData['pillarsIntro'];
  pillars: CommunitiesPageData['pillars'];
}

export function CommunitiesPillarsSection({
  pillarsIntro,
  pillars,
}: CommunitiesPillarsSectionProps) {
  return (
    <section className="bg-white py-12 dark:bg-slate-900/50">
      <CommunitiesShell>
        <div className="mb-12 text-center lg:mb-12 lg:flex lg:items-end lg:justify-between lg:text-left">
          <div className="lg:max-w-2xl">
            <h2 className="mb-4 text-3xl font-black md:text-4xl">{pillarsIntro.title}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">{pillarsIntro.description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-all hover:border-[var(--brand-accent)]/50 dark:border-slate-700 dark:bg-slate-800"
            >
              <Icon
                className="mb-6 size-10 text-[var(--brand-accent)]"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="mb-3 text-lg font-bold">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </CommunitiesShell>
    </section>
  );
}
