import { CommunitiesPageContent, type CommunitiesPageContentProps } from '@/Components/Communities';
import { usePageTitle } from '@/hooks/use-page-title';

export type CommunitiesPageProps = {
  /** Browser tab title while this route is mounted. */
  documentTitle?: string;
  /** Forwarded to {@link CommunitiesPageContent} (custom `data`, `className`, etc.). */
  contentProps?: CommunitiesPageContentProps;
};

/**
 * Route shell for `/communities`: document title + `<main>`. Presentation lives in
 * `CommunitiesPageContent` and `./sections/*` so layouts and copy can be reused or tested in isolation.
 */
export function CommunitiesPage({
  documentTitle = 'Communities | MyNext50',
  contentProps,
}: CommunitiesPageProps) {
  usePageTitle(documentTitle);

  return (
    <main className="w-full">
      <CommunitiesPageContent {...contentProps} />
    </main>
  );
}

export default CommunitiesPage;
