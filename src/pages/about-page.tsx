import { AboutPageContent } from '@/Components/About';
import { PAGE_MAIN_SHELL } from '@/lib/page-shell';

/** Marketing page shell: shared with other policy/marketing routes via `HomeLayout`. */
export function AboutPage() {
  return (
    <main className={PAGE_MAIN_SHELL}>
      <AboutPageContent />
    </main>
  );
}

export default AboutPage;
