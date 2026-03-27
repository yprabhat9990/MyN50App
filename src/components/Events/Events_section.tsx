import { Calendar, MapPin, Sparkles, Users } from 'lucide-react';

import { EventsComingSoonCard } from '@/Components/Events/EventsComingSoonCard';
import { EventsHostTypeCard } from '@/Components/Events/EventsHostTypeCard';
import { eventsHeroImage } from '@/assets/Events_section/images';

const EVENT_TYPES = [
  {
    title: 'Workshops & Learning',
    description:
      'Skill-building sessions, expert-led talks, and hands-on experiences designed for your next chapter.',
    icon: Sparkles,
  },
  {
    title: 'Community Meetups',
    description:
      'Local and online gatherings to connect with peers who share your interests and values.',
    icon: Users,
  },
  {
    title: 'Regional & Special Events',
    description:
      'Seasonal celebrations, retreats, and partner-hosted experiences as our calendar grows.',
    icon: MapPin,
  },
] as const;

export function EventsSection() {
  return (
    <div className="bg-[var(--brand-surface)] dark:bg-slate-950/50">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
        <section className="mb-12 sm:mb-16">
          <div className="relative mb-8 h-64 w-full overflow-hidden rounded-xl shadow-lg">
            <div
              className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 to-transparent"
              aria-hidden
            />
            <img
              src={eventsHeroImage}
              alt="People gathering at a community event"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 z-20 p-6 sm:p-8">
              <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Events
              </h2>
              <p className="max-w-xl text-slate-200">
                Workshops, meetups, and experiences that bring the MyNext50 community
                together—online and in the real world.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
              Show up for your next chapter
            </h3>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Events are where our members turn connection into momentum. Whether you&apos;re
              exploring a new interest or deepening relationships, you&apos;ll find room to learn,
              share, and belong.
            </p>
          </div>
        </section>

        <section className="mb-10 sm:mb-12">
          <div className="mb-8 flex items-center gap-3">
            <Calendar
              className="size-8 shrink-0 text-[var(--brand-accent)] sm:size-9"
              strokeWidth={1.75}
              aria-hidden
            />
            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
              What we host
            </h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-1">
            {EVENT_TYPES.map(({ title, description, icon }) => (
              <EventsHostTypeCard key={title} title={title} description={description} icon={icon} />
            ))}
          </div>
        </section>

        <EventsComingSoonCard
          title="Calendar coming soon"
          description={
            "We're finalizing dates and registration for upcoming experiences. Want to suggest a topic, partner with us, or get notified first? Reach out—we read every message."
          }
          ctaLabel="Contact us"
          ctaTo="/contact"
        />
      </div>
    </div>
  );
}
