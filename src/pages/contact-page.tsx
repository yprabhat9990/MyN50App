import { Link } from 'react-router-dom';

import {
  Brain,
  ChevronRight,
  Gavel,
  Handshake,
  Info,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Shield,
  ShieldCheck,
  Users,
} from 'lucide-react';

import { ContactHelpCard } from '@/Components/Contact/ContactHelpCard';
import { Button } from '@/Components/Ui/Button';
import { contactHeroImage, contactMapImage } from '@/assets/Contact_page/images';
import { PAGE_MAIN_SHELL } from '@/lib/page-shell';

const HELP_CARDS = [
  {
    title: 'General Enquiries',
    icon: Mail,
    response: '24 - 48 Hours',
  },
  {
    title: 'LifeCrafter Support',
    icon: Brain,
    response: '24 Hours',
  },
  {
    title: 'Event & Community',
    icon: Users,
    response: '48 Hours',
  },
  {
    title: 'Partnerships',
    icon: Handshake,
    response: '3 - 5 Business Days',
  },
  {
    title: 'Privacy & Legal',
    icon: Gavel,
    response: '48 Hours',
  },
] as const;

const COMMUNICATION_POINTS = [
  {
    title: 'Official Channels Only',
    body: 'All official emails will only come from the @mynext50.in domain. Please verify the sender.',
    icon: ShieldCheck,
  },
  {
    title: 'Data Privacy',
    body: 'We will never ask for your passwords, OTPs, or credit card details over email or chat.',
    icon: Lock,
  },
  {
    title: 'Report Suspicious Activity',
    body: 'If you receive any unusual requests claiming to be from us, please report them immediately.',
    icon: Shield,
  },
  {
    title: 'Thoughtful Responses',
    body: 'We aim for substance over speed. Every query is handled with the attention it deserves.',
    icon: MessageCircle,
  },
] as const;

const BEFORE_WRITE_LINKS: { label: string; to: string }[] = [
  { label: 'Learn About Our Mission', to: '/about' },
  { label: 'LifeCrafter Program Details', to: '/lifecrafter-program' },
  { label: 'Community Guidelines', to: '/guidelines' },
];

export function ContactPage() {
  return (
    <main className={PAGE_MAIN_SHELL}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        {/* Hero */}
        <section className="mb-16 sm:mb-20">
          <div className="grid grid-cols-1 items-center gap-10 rounded-3xl border border-slate-100 bg-white p-6 lg:grid-cols-2 lg:gap-12 lg:p-12 dark:border-slate-800 dark:bg-slate-900/50">
            <div className="flex flex-col gap-6">
              <span className="inline-block w-fit rounded-full bg-[var(--brand-accent)]/10 px-3 py-1 text-xs font-bold tracking-widest text-[var(--brand-accent)] uppercase">
                Get Support
              </span>
              <h1 className="text-4xl leading-tight font-black text-slate-900 lg:text-5xl xl:text-6xl dark:text-white">
                Contact Us
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                At MyNext50, we prioritize clarity, responsiveness, and accountability. Whether
                you&apos;re a member, a partner, or just curious, we&apos;re here to help you
                navigate your next fifty.
              </p>
              <div className="mt-2 flex flex-wrap gap-4">
                <Button
                  variant="brandAccent"
                  asChild
                  className="h-auto rounded-xl px-8 py-4 text-sm font-bold shadow-[var(--brand-accent)]/20 shadow-lg transition-transform hover:scale-[1.02] hover:bg-[var(--brand-accent-hover)]"
                >
                  <a href="mailto:info@mynext50.in">Get in Touch</a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="h-auto rounded-xl border-2 border-slate-200 px-8 py-4 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
                >
                  <Link to="/resources">Explore FAQ</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
              <div
                className="absolute inset-0 z-10 bg-[var(--brand-accent)]/10 mix-blend-multiply"
                aria-hidden
              />
              <img
                src={contactHeroImage}
                alt="Modern professional office space with warm lighting"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* How can we help */}
        <section id="contact-help" className="mb-16 scroll-mt-24 sm:mb-20">
          <div className="mb-10 flex flex-col items-center text-center sm:mb-12">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
              How can we help?
            </h2>
            <div className="h-1 w-20 rounded-full bg-[var(--brand-accent)]" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {HELP_CARDS.map(({ title, icon, response }) => (
              <ContactHelpCard key={title} title={title} icon={icon} response={response} />
            ))}
          </div>
        </section>

        {/* Location + Before you write */}
        <section className="mb-16 grid grid-cols-1 gap-12 sm:mb-20 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <MapPin className="size-7 shrink-0 text-[var(--brand-accent)]" aria-hidden />
              Our Location
            </h2>
            <div className="flex grow flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="relative h-64 bg-slate-200 dark:bg-slate-800">
                <img
                  src={contactMapImage}
                  alt="Map overview near our registered office"
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <span className="flex items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-2 text-sm font-bold shadow-lg dark:border-slate-800 dark:bg-slate-900">
                    <span className="size-2 animate-pulse rounded-full bg-[var(--brand-accent)]" />
                    MyNext50 Registered Office
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-bold text-slate-900 dark:text-white">Registered Office</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  A-152, Sector 63, Block A,
                  <br />
                  Noida, Uttar Pradesh 201301,
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <Info className="size-7 shrink-0 text-[var(--brand-accent)]" aria-hidden />
              Before You Write to Us
            </h2>
            <div className="grow rounded-2xl border border-slate-100 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">
                Many common questions are already answered across our platform. You might find what
                you&apos;re looking for immediately in these sections:
              </p>
              <ul className="space-y-4">
                {BEFORE_WRITE_LINKS.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="group flex items-center justify-between rounded-xl bg-slate-50 p-4 transition-colors hover:bg-[var(--brand-accent)]/5 dark:bg-slate-800/50"
                    >
                      <span className="font-semibold text-slate-900 transition-colors group-hover:text-[var(--brand-accent)] dark:text-white">
                        {label}
                      </span>
                      <ChevronRight className="size-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[var(--brand-accent)]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Communication note */}
        <section className="relative mb-16 overflow-hidden rounded-3xl bg-slate-900 p-8 text-white sm:mb-20 lg:p-12">
          <div
            className="absolute -top-32 -right-32 size-64 rounded-full bg-[var(--brand-accent)]/20 blur-3xl"
            aria-hidden
          />
          <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="mb-4 text-2xl font-black sm:text-3xl">A Note on Communication</h2>
              <p className="leading-relaxed text-slate-400">
                To maintain a safe and trustworthy environment, we follow strict protocols for all
                digital communications.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
              {COMMUNICATION_POINTS.map(({ title, body, icon: Icon }) => (
                <div key={title} className="flex gap-4">
                  <Icon
                    className="size-8 shrink-0 text-[var(--brand-accent)] sm:size-9"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <div>
                    <h3 className="mb-2 font-bold">{title}</h3>
                    <p className="text-sm text-slate-400">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="mx-auto max-w-2xl border-t border-slate-200 py-12 text-center dark:border-slate-800">
          <p className="text-lg font-medium text-slate-700 italic sm:text-xl dark:text-slate-300">
            &ldquo;MyNext50 is built on trust and thoughtful participation. If something matters to
            you, it matters to us too.&rdquo;
          </p>
        </section>
      </div>
    </main>
  );
}

export default ContactPage;
