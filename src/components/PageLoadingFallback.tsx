export function PageLoadingFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center bg-white dark:bg-slate-900">
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-[var(--brand-accent)]"
        aria-hidden
      />
      <span className="sr-only">Loading page</span>
    </div>
  );
}
