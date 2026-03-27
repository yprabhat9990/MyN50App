import { ResourcesHubContent } from '@/Components/Resources/ResourcesHubContent';
import { PAGE_MAIN_SHELL } from '@/lib/page-shell';

export function ResourcesHubPage() {
  return (
    <main className={PAGE_MAIN_SHELL}>
      <ResourcesHubContent />
    </main>
  );
}

export default ResourcesHubPage;
