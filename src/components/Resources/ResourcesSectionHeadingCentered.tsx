export function ResourcesSectionHeadingCentered({ title }: { title: string }) {
  return (
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      <div className="mx-auto h-1.5 w-20 rounded-full bg-[var(--brand-accent)]" />
    </div>
  );
}
