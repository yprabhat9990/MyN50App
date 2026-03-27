import { StoriesPageContent } from '@/Components/Stories/StoriesPageContent';
import { PAGE_MAIN_SHELL } from '@/lib/page-shell';

export function StoriesPage() {
  return (
    <main className={PAGE_MAIN_SHELL}>
      <StoriesPageContent />
    </main>
  );
}

export default StoriesPage;
