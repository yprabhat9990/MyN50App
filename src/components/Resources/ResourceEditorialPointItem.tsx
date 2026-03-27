export function ResourceEditorialPointItem({
  index,
  title,
  body,
}: {
  index: number;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-accent)]/10 text-sm font-bold text-[var(--brand-accent)]">
        {index + 1}
      </span>
      <div>
        <h4 className="mb-1 text-lg font-bold text-slate-900 dark:text-white">{title}</h4>
        <p className="text-slate-600 dark:text-slate-400">{body}</p>
      </div>
    </div>
  );
}
