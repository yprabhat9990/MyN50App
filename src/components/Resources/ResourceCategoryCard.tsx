import type { LucideIcon } from 'lucide-react';

export function ResourceCategoryCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-all hover:border-[var(--brand-accent)]/30 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50">
      <div className="mb-6 origin-left text-[var(--brand-accent)] transition-transform group-hover:scale-110">
        <Icon className="size-10" strokeWidth={1.5} aria-hidden />
      </div>
      <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  );
}
