import { Info } from 'lucide-react';

export function ResourcesDisclaimerCallout({ title, body }: { title: string; body: string }) {
  return (
    <section className="border-t border-slate-200 bg-slate-100 py-12 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
          <Info className="size-6 shrink-0 text-[var(--brand-accent)]" aria-hidden />
          <div>
            <h4 className="mb-1 text-sm font-bold tracking-wider text-slate-900 uppercase dark:text-white">
              {title}
            </h4>
            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">{body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
