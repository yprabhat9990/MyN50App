import { GuidelinesSection } from '@/Components/Guidelines/Guidelines_section';
import { PAGE_MAIN_SHELL } from '@/lib/page-shell';

export function GuidelinesPage() {
  return (
    <main className={PAGE_MAIN_SHELL}>
      <GuidelinesSection />
    </main>
  );
}

export default GuidelinesPage;
