import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { ResourcesPageContent } from '@/Components/Resources/ResourcesPageContent';
import { PageBreadcrumb } from '@/Components/Ui/PageBreadcrumb';
import { PAGE_MAIN_SHELL } from '@/lib/page-shell';

export function ResourcesLibraryPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);

  return (
    <main className={PAGE_MAIN_SHELL}>
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <PageBreadcrumb
          className="mb-6"
          items={[
            { label: 'Home', to: '/' },
            { label: 'Resources', to: '/resources' },
            { label: 'Library' },
          ]}
        />
      </div>
      <ResourcesPageContent />
    </main>
  );
}

export default ResourcesLibraryPage;
