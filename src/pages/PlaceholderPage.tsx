interface PlaceholderPageProps {
  title: string;
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="min-h-[40vh] px-6 py-12">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">Content coming soon.</p>
    </div>
  );
}
