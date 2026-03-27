import { CommunitiesShell } from '../CommunitiesLayout';

import type { LucideIcon } from 'lucide-react';
import { ShieldCheck, UsersRound } from 'lucide-react';

import type { CommunitiesPageData } from '@/data/communities-page-data';

const defaultPointIcons: [LucideIcon, LucideIcon] = [ShieldCheck, UsersRound];

export interface CommunitiesIntentionalParticipationSectionProps {
  content: CommunitiesPageData['intentionalParticipation'];
  /** Icons aligned to `content.points` order (length 2). */
  pointIcons?: [LucideIcon, LucideIcon];
}

export function CommunitiesIntentionalParticipationSection({
  content,
  pointIcons = defaultPointIcons,
}: CommunitiesIntentionalParticipationSectionProps) {
  const [IconA, IconB] = pointIcons;
  const [p0, p1] = content.points;

  return (
    <section className="relative overflow-hidden bg-slate-900 py-12 text-white">
      <div
        className="pointer-events-none absolute top-0 right-0 h-full w-1/2 translate-x-1/2 -skew-x-12 bg-[var(--brand-accent)]/10"
        aria-hidden
      />
      <CommunitiesShell className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="mb-6 text-3xl leading-tight font-black md:text-4xl lg:text-5xl">
              {content.title}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-300">{content.body}</p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-fit rounded-lg bg-[var(--brand-accent)]/20 p-2">
                  <IconA className="size-6 text-[var(--brand-accent)]" aria-hidden />
                </div>
                <div>
                  <h4 className="mb-1 font-bold">{p0.title}</h4>
                  <p className="text-sm text-slate-400">{p0.description}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-fit rounded-lg bg-[var(--brand-accent)]/20 p-2">
                  <IconB className="size-6 text-[var(--brand-accent)]" aria-hidden />
                </div>
                <div>
                  <h4 className="mb-1 font-bold">{p1.title}</h4>
                  <p className="text-sm text-slate-400">{p1.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-slate-800 p-1">
            <img
              src={content.imageSrc}
              alt={content.imageAlt}
              className="h-[min(500px,70vh)] w-full rounded-[calc(1.5rem-4px)] object-cover"
            />
          </div>
        </div>
      </CommunitiesShell>
    </section>
  );
}
