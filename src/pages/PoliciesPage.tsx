import { Link } from 'react-router-dom';

import { ChevronRight, Copyright, CreditCard, FileText, Scale, Shield } from 'lucide-react';

import { PageBreadcrumb } from '@/Components/Ui/PageBreadcrumb';
import { PAGE_MAIN_SHELL } from '@/lib/page-shell';
import { cn } from '@/lib/utils';

const POLICY_LINKS = [
  {
    to: '/terms',
    title: 'Terms of Use',
    description: 'Rules for using NEXT50 services and content.',
    icon: FileText,
  },
  {
    to: '/privacy-policy',
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your information.',
    icon: Shield,
  },
  {
    to: '/instructor-policy',
    title: 'Instructor Policy',
    description: 'Expectations and guidelines for instructors on the platform.',
    icon: Scale,
  },
  {
    to: '/payment-refund-policy',
    title: 'Payment & Refund Policy',
    description: 'How we handle payments, refunds, and billing disputes.',
    icon: CreditCard,
  },
  {
    to: '/ip-disclaimers',
    title: 'IP & Disclaimers',
    description: 'Intellectual property, brand use, and general disclaimers.',
    icon: Copyright,
  },
];

export default function PoliciesPage() {
  return (
    <main className={cn(PAGE_MAIN_SHELL, 'px-4 py-12 sm:px-5 md:py-16 lg:px-8 lg:py-20')}>
      <div className="mx-auto max-w-3xl">
        <PageBreadcrumb
          className="mb-8"
          items={[{ label: 'About', to: '/about' }, { label: 'Policies' }]}
        />

        <h1 className="mb-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
          Policies
        </h1>
        <p className="mb-10 max-w-2xl text-slate-600 dark:text-slate-400">
          Official legal and community policies for NEXT50. Choose a document below.
        </p>

        <ul className="flex flex-col gap-4">
          {POLICY_LINKS.map(({ to, title, description, icon: Icon }) => (
            <li key={to}>
              <Link
                to={to}
                className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-[var(--brand-accent)]/40 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800/80"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-accent)]/12 text-[var(--brand-accent)] dark:bg-[var(--brand-accent)]/18">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                    {title}
                    <ChevronRight
                      className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden
                    />
                  </span>
                  <span className="mt-1 block text-sm text-slate-600 dark:text-slate-400">
                    {description}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-slate-600 dark:text-slate-400">
          Questions?{' '}
          <Link to="/contact" className="font-medium text-[var(--brand-accent)] hover:underline">
            Contact us
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
