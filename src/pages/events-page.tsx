import { EventsSection } from '@/Components/Events/Events_section';
import { PAGE_MAIN_SHELL } from '@/lib/page-shell';

export function EventsPage() {
  return (
    <main className={PAGE_MAIN_SHELL}>
      <EventsSection />
    </main>
  );
}

export default EventsPage;
