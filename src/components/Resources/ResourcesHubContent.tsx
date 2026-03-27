import { Link } from 'react-router-dom';

import { PageBreadcrumb } from '@/Components/Ui/PageBreadcrumb';
import { resourcesHubCards, resourcesHubIntro } from '@/data/resources-hub-data';

import { ResourceHubCard } from './ResourceHubCard';

export function ResourcesHubContent() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 md:py-16 lg:px-8 lg:py-20">
      <PageBreadcrumb
        className="mb-8"
        items={[{ label: 'Home', to: '/' }, { label: 'Resources' }]}
      />

      <header className="mb-12 max-w-2xl">
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
          {resourcesHubIntro.title}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">{resourcesHubIntro.subtitle}</p>
      </header>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {resourcesHubCards.map((card) => (
          <li key={card.to}>
            <ResourceHubCard {...card} />
          </li>
        ))}
      </ul>

      <p className="mt-12 text-sm text-slate-600 dark:text-slate-400">
        Looking for legal documents? See{' '}
        <Link to="/policies" className="font-medium text-[var(--brand-accent)] hover:underline">
          Policies
        </Link>
        .
      </p>
    </div>
  );
}
