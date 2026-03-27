import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  CreditCard,
  Gavel,
  Shield,
  UserCheck,
  Users,
  XCircle,
} from 'lucide-react';

import { EventParticipationTermCard } from '@/Components/PaymentRefundPolicy/EventParticipationTermCard';
import { PAGE_MAIN_SHELL } from '@/lib/page-shell';

const EVENT_PARTICIPATION_TERMS: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: UserCheck,
    title: 'Eligibility',
    description:
      'Participants must meet the specific age or professional requirements listed for each individual event. MyNext50 reserves the right to verify eligibility at registration.',
  },
  {
    icon: Gavel,
    title: 'Code of Conduct',
    description:
      'All participants are expected to behave professionally and respectfully. Harassment or disruptive behavior will not be tolerated and may lead to removal without refund.',
  },
  {
    icon: Camera,
    title: 'Media Release',
    description:
      'By attending, you consent to being photographed or recorded. These materials may be used for MyNext50 promotional purposes unless otherwise requested in writing.',
  },
  {
    icon: Shield,
    title: 'Liability',
    description:
      'MyNext50 is not responsible for any personal injury or loss/damage to personal property during the event. Participants attend at their own risk.',
  },
];

function PolicyTabBar() {
  const { pathname, hash } = useLocation();
  const onPaymentPage = pathname === '/payment-refund-policy';
  const isEventTab = onPaymentPage && hash === '#event-participation';
  const isPaymentTab = onPaymentPage && !isEventTab;

  const tabBase =
    'flex min-h-[3.25rem] min-w-0 items-center justify-center rounded-lg px-2 py-3 text-center text-sm font-bold leading-snug transition-colors sm:min-h-[3rem] sm:px-4';
  const tabInactive =
    'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800';
  const tabActive = 'bg-[var(--brand-accent)] text-white';

  return (
    <div className="relative z-10 mx-auto -mt-8 w-full max-w-4xl px-4">
      <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-800 dark:bg-slate-900">
        <div className="grid w-full grid-cols-3 gap-2" role="tablist" aria-label="Policy sections">
          <Link
            to="/payment-refund-policy"
            role="tab"
            aria-selected={isPaymentTab}
            className={`${tabBase} ${isPaymentTab ? tabActive : tabInactive}`}
            aria-current={isPaymentTab ? 'page' : undefined}
          >
            Payment &amp; Refund
          </Link>
          <Link
            to="/payment-refund-policy#event-participation"
            role="tab"
            aria-selected={isEventTab}
            className={`${tabBase} ${isEventTab ? tabActive : tabInactive}`}
            aria-current={isEventTab ? 'page' : undefined}
          >
            Event Terms
          </Link>
          <Link
            to="/privacy-policy"
            role="tab"
            aria-selected={false}
            className={`${tabBase} ${tabInactive}`}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

export function PaymentRefundPolicyPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#event-participation') {
      const el = document.getElementById('event-participation');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);

  return (
    <main className={PAGE_MAIN_SHELL}>
      {/* Hero — matches reference */}
      <section className="bg-[var(--brand-accent)]/5 py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl dark:text-white">
            Policies &amp; Terms
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Your commitment and participation details. Please read our payment, refund,
            cancellation, and event terms carefully.
          </p>
        </div>
      </section>

      <PolicyTabBar />

      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <article className="max-w-none">
          {/* Section 5 */}
          <section id="payment-refund" className="mb-16 scroll-mt-24">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-accent)]/20 text-[var(--brand-accent)]">
                <CreditCard className="size-5" aria-hidden />
              </div>
              <h2 className="m-0 text-2xl leading-none font-bold text-slate-900 md:text-3xl dark:text-white">
                5. Payment, Refund &amp; Cancellation Policy
              </h2>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900/50">
              <h3 className="mb-4 text-lg font-bold text-[var(--brand-accent)]">
                5.1 Payment Terms
              </h3>
              <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">
                All registration fees for MyNext50 events must be paid in full at the time of
                booking. We accept major credit cards, debit cards, and secure online payment
                gateways. Your place in an event is only confirmed once the payment has been
                processed successfully.
              </p>

              <h3 className="mb-4 text-lg font-bold text-[var(--brand-accent)]">
                5.2 Refund Policy
              </h3>
              <ul className="list-none space-y-4 p-0 text-slate-600 dark:text-slate-400">
                <li className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-[var(--brand-accent)]"
                    aria-hidden
                  />
                  <span>
                    <strong className="text-slate-800 dark:text-slate-200">Full Refund:</strong>{' '}
                    Cancellations made at least 30 days prior to the event date are eligible for a
                    100% refund, minus a small processing fee.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-[var(--brand-accent)]"
                    aria-hidden
                  />
                  <span>
                    <strong className="text-slate-800 dark:text-slate-200">Partial Refund:</strong>{' '}
                    Cancellations made between 15 and 29 days prior to the event will receive a 50%
                    refund.
                  </span>
                </li>
                <li className="flex gap-3">
                  <XCircle
                    className="mt-0.5 size-5 shrink-0 text-[var(--brand-accent)]"
                    aria-hidden
                  />
                  <span>
                    <strong className="text-slate-800 dark:text-slate-200">No Refund:</strong>{' '}
                    Cancellations made less than 15 days before the event date are not eligible for
                    a refund.
                  </span>
                </li>
              </ul>

              <h3 className="mt-8 mb-4 text-lg font-bold text-[var(--brand-accent)]">
                5.3 Event Cancellation by MyNext50
              </h3>
              <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                In the unlikely event that MyNext50 must cancel or postpone an event due to
                unforeseen circumstances, participants will be offered a choice of either a full
                refund or a credit to attend the rescheduled event or a future event of equivalent
                value.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="event-participation" className="mb-12 scroll-mt-24">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-accent)]/20 text-[var(--brand-accent)]">
                <Users className="size-5" aria-hidden />
              </div>
              <h2 className="m-0 text-2xl font-bold text-slate-900 md:text-3xl dark:text-white">
                6. Event Participation Terms
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {EVENT_PARTICIPATION_TERMS.map((item) => (
                <EventParticipationTermCard key={item.title} {...item} />
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="rounded-2xl bg-[var(--brand-accent)] p-8 text-center text-white">
            <h3 className="mb-2 text-xl font-bold text-white">Need Clarification?</h3>
            <p className="mb-6 opacity-90">
              Our support team is here to help you understand our terms.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 font-bold text-[var(--brand-accent)] transition-colors hover:bg-slate-100"
            >
              Contact Support
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}

export default PaymentRefundPolicyPage;
