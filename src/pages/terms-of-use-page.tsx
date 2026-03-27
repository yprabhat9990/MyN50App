import { Link } from 'react-router-dom';

import { Calendar, CheckCircle2, ScrollText, Shield } from 'lucide-react';

import { TermsUserResponsibilityCard } from '@/Components/TermsOfUse/TermsUserResponsibilityCard';
import { PAGE_MAIN_SHELL } from '@/lib/page-shell';
import { cn } from '@/lib/utils';

const USER_RESPONSIBILITY_CARDS = [
  {
    title: 'Account Security',
    icon: Shield,
    description:
      'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
  },
  {
    title: 'Content Accuracy',
    icon: ScrollText,
    description:
      'You agree to provide accurate, current, and complete information and to update such information to keep it accurate and complete.',
  },
] as const;

export function TermsOfUsePage() {
  return (
    <main className={cn(PAGE_MAIN_SHELL, 'px-4 py-12 sm:px-5 md:py-16 lg:px-8 lg:py-24')}>
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 border-b border-[var(--brand-accent)]/20 pb-10 md:mb-16 md:pb-12">
          <div className="mb-4 flex items-center gap-2 text-xs font-bold tracking-widest text-[var(--brand-accent)] uppercase">
            <span className="h-0.5 w-8 bg-[var(--brand-accent)]" />
            Legal Documentation
          </div>
          <h1 className="mb-4 text-4xl leading-tight font-black text-slate-900 md:text-5xl lg:text-6xl dark:text-white">
            Terms of Use
          </h1>
          <p className="flex items-center gap-2 text-base text-slate-500 md:text-lg dark:text-slate-400">
            <Calendar className="size-4 shrink-0" aria-hidden />
            Last updated: October 2023
          </p>
        </div>

        <p className="mb-10 border-l-4 border-[var(--brand-accent)] pl-5 text-lg leading-relaxed text-slate-700 italic md:mb-12 md:pl-6 md:text-xl dark:text-slate-300">
          Please read these terms and conditions carefully before using MyNext50. By using this
          website, you agree to be bound by these terms.
        </p>

        <section className="mb-10 md:mb-12">
          <h2 className="mb-4 flex flex-wrap items-center gap-2 text-xl font-bold text-slate-900 md:text-2xl dark:text-white">
            <span className="font-mono text-[var(--brand-accent)]">01.</span>
            Acceptance of Terms
          </h2>
          <div className="space-y-4 leading-relaxed text-slate-700 dark:text-slate-300">
            <p>
              By accessing or using the MyNext50 platform, you agree to be bound by these Terms of
              Use and all applicable laws and regulations. If you do not agree with any of these
              terms, you are prohibited from using or accessing this site. The materials contained
              in this website are protected by applicable copyright and trademark law.
            </p>
            <p>
              We reserve the right to modify these terms at any time. Your continued use of the
              platform after changes have been posted will constitute your acceptance of those
              changes.
            </p>
          </div>
        </section>

        <section className="mb-10 md:mb-12">
          <h2 className="mb-4 flex flex-wrap items-center gap-2 text-xl font-bold text-slate-900 md:text-2xl dark:text-white">
            <span className="font-mono text-[var(--brand-accent)]">02.</span>
            Eligibility
          </h2>
          <div className="rounded-xl border border-[var(--brand-accent)]/20 bg-[var(--brand-accent)]/[0.06] p-6 md:p-8 dark:bg-[var(--brand-accent)]/10">
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              To use MyNext50, you must be at least 18 years of age and possess the legal authority
              to enter into these Terms. By using the platform, you represent and warrant that you
              meet all of these requirements. If you do not meet all of these requirements, you must
              not access or use the platform.
            </p>
          </div>
        </section>

        <section className="mb-10 md:mb-12">
          <h2 className="mb-4 flex flex-wrap items-center gap-2 text-xl font-bold text-slate-900 md:text-2xl dark:text-white">
            <span className="font-mono text-[var(--brand-accent)]">03.</span>
            Platform Role
          </h2>
          <div className="space-y-4 leading-relaxed text-slate-700 dark:text-slate-300">
            <p>
              MyNext50 provides a digital infrastructure designed to assist users in planning and
              managing their mid-to-late life transitions. We act solely as a technology service
              provider.
            </p>
            <ul className="list-none space-y-3">
              <li className="flex gap-2">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-[var(--brand-accent)]"
                  aria-hidden
                />
                <span>We do not provide professional legal, financial, or medical advice.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-[var(--brand-accent)]"
                  aria-hidden
                />
                <span>
                  Users should consult with qualified professionals for specific advisory needs.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10 md:mb-12">
          <h2 className="mb-4 flex flex-wrap items-center gap-2 text-xl font-bold text-slate-900 md:text-2xl dark:text-white">
            <span className="font-mono text-[var(--brand-accent)]">04.</span>
            User Responsibilities
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {USER_RESPONSIBILITY_CARDS.map(({ title, icon, description }) => (
              <TermsUserResponsibilityCard
                key={title}
                title={title}
                icon={icon}
                description={description}
              />
            ))}
          </div>
        </section>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl bg-slate-900 px-6 py-8 text-white md:mt-16 md:flex-row md:gap-8 md:px-8 dark:bg-slate-800">
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-lg font-bold md:text-xl">Questions about our Terms?</h3>
            <p className="text-sm text-slate-400 md:text-base">
              Our legal team is here to help you understand your rights.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[var(--brand-accent)] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-accent-hover)]"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}

export default TermsOfUsePage;
