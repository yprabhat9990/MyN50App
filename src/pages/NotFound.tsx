import { Link, useLocation } from 'react-router-dom';

import { FileQuestion } from 'lucide-react';

import { siteBrand } from '@/data/site-layout';
import { usePageTitle } from '@/hooks/use-page-title';
import { getNotFoundHints } from '@/lib/not-found-suggestions';

function truncatePath(path: string, max = 72) {
  if (path.length <= max) return path;
  return `${path.slice(0, max)}…`;
}

const NotFound = () => {
  const location = useLocation();

  const fullPath = `${location.pathname || '/'}${location.search}${location.hash}`;

  const { suggestions } = getNotFoundHints(location.pathname);

  usePageTitle(`Page not found — ${siteBrand}`);

  return (
    <div className="flex min-h-[50vh] flex-col items-center px-6 py-12 md:min-h-[60vh] md:py-16">
      <div className="w-full max-w-lg text-center">
        <div className="mb-6 flex justify-center" aria-hidden>
          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
            <FileQuestion
              className="h-20 w-20 text-slate-400 dark:text-slate-500"
              strokeWidth={1.25}
            />
          </div>
        </div>

        <p className="text-sm font-medium tracking-wide text-[var(--brand-accent)] uppercase">
          Error 404
        </p>
        <h1 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl dark:text-white">
          Page not found
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400">
          We don&apos;t have a page at this address. Check the URL for typos, or use the links
          below.
        </p>

        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-left dark:border-slate-600 dark:bg-slate-800/80">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Requested path</p>
          <p
            className="mt-1 font-mono text-sm break-all text-slate-800 dark:text-slate-200"
            title={fullPath}
          >
            {truncatePath(fullPath)}
          </p>
        </div>

        {suggestions.length > 0 && (
          <div className="mt-6 rounded-lg border border-[var(--brand-accent)]/25 bg-[var(--brand-accent)]/5 px-4 py-3 text-left dark:bg-[var(--brand-accent)]/10">
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Did you mean?
            </p>
            <ul className="mt-2 space-y-2">
              {suggestions.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="font-medium text-[var(--brand-accent)] underline-offset-2 hover:underline"
                  >
                    {label}
                  </Link>
                  <span className="ml-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                    {href}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex rounded-lg bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Back to home
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex rounded-lg border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100 dark:border-slate-500 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
