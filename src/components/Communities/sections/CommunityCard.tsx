import type { CommunityCard as CommunityCardModel } from '@/data/communities-page-data';

export interface CommunityCardProps {
  community: CommunityCardModel;
}

export function CommunityCard({ community: c }: CommunityCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">
      <div className="h-48 overflow-hidden">
        <img
          src={c.imageSrc}
          alt={c.imageAlt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <div className="mb-4 flex items-start justify-between gap-3">
          <h3 className="text-2xl font-black">{c.name}</h3>
          <span className="shrink-0 rounded bg-[var(--brand-accent)]/10 px-2 py-1 text-[10px] font-bold tracking-tighter text-[var(--brand-accent)] uppercase">
            {c.category}
          </span>
        </div>
        <p className="mb-4 text-sm font-semibold text-[var(--brand-accent)]">{c.tagline}</p>
        <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {c.description}
        </p>
        <div className="mt-auto border-t border-slate-50 pt-6 dark:border-slate-700">
          <p className="mb-3 text-[10px] font-black tracking-widest text-slate-400 uppercase">
            You&apos;ll Find
          </p>
          <ul className="flex flex-wrap gap-2">
            {c.youllFind.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-700 dark:text-slate-200"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
