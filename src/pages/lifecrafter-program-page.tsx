import {
  LifeCrafterProgramPageContent,
  type LifeCrafterProgramPageContentProps,
} from '@/Components/LifeCrafterProgram';
import { usePageTitle } from '@/hooks/use-page-title';

export type LifeCrafterProgramPageProps = {
  /** Browser tab title while this route is mounted. */
  documentTitle?: string;
  /** Forwarded to {@link LifeCrafterProgramPageContent} (`data`, `className`, `links`, etc.). */
  contentProps?: LifeCrafterProgramPageContentProps;
};

/**
 * Route shell for `/lifecrafter-program`: document title + `<main>`.
 * Marketing UI lives in `LifeCrafterProgramPageContent` and `./sections/*` so sections stay testable
 * and reusable outside this route.
 */
export function LifeCrafterProgramPage({
  documentTitle = 'LifeCrafter Program | MyNext50',
  contentProps,
}: LifeCrafterProgramPageProps) {
  usePageTitle(documentTitle);

  return (
    <main className="w-full">
      <LifeCrafterProgramPageContent {...contentProps} />
    </main>
  );
}

export default LifeCrafterProgramPage;
