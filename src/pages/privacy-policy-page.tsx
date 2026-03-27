import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { CheckCircle2, Shield } from 'lucide-react';

import { PrivacyPolicyPurposeCard } from '@/Components/PrivacyPolicy/PrivacyPolicyPurposeCard';
import { PageBreadcrumb } from '@/Components/Ui/PageBreadcrumb';
import { PAGE_MAIN_SHELL } from '@/lib/page-shell';

const DATA_COLLECTION_PURPOSE_CARDS = [
  {
    title: 'Service Delivery',
    description: 'To provide, maintain, and improve our services and personalized experiences.',
  },
  {
    title: 'Communication',
    description: 'To send technical notices, updates, security alerts, and support messages.',
  },
] as const;

function SectionBlock({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-10">
      <div className="mb-4 flex items-center gap-3">
        <span className="privacy-policy-section-index">{number}</span>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
      </div>
      <div className="pl-[calc(2.5rem+0.75rem)]">{children}</div>
    </section>
  );
}

export function PrivacyPolicyPage() {
  return (
    <main className={PAGE_MAIN_SHELL}>
      {/* Hero — matches Stitch grey band */}
      <div className="bg-slate-100 py-16 dark:bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6">
          <PageBreadcrumb
            tone="muted"
            className="mb-6"
            items={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]}
          />
          <h1 className="mb-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Effective Date: October 24, 2023
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-12">
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            At MyNext50, we are committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, and safeguard your personal information when you use our services.
          </p>
        </div>

        <div className="max-w-none">
          <SectionBlock number="1" title="Information We Collect">
            <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300">
              We collect information that you provide directly to us when you register for an
              account, subscribe to our newsletter, or contact us for support. This may include:
            </p>
            <ul className="ml-5 list-disc space-y-2 text-slate-700 dark:text-slate-300">
              <li>Personal identifiers such as your full name and email address.</li>
              <li>Demographic information including age, gender, and professional interests.</li>
              <li>Account credentials and security information.</li>
            </ul>
          </SectionBlock>

          <SectionBlock number="2" title="Purpose of Data Collection">
            <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300">
              We process your personal data for the following legitimate business purposes:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {DATA_COLLECTION_PURPOSE_CARDS.map(({ title, description }) => (
                <PrivacyPolicyPurposeCard key={title} title={title} description={description} />
              ))}
            </div>
          </SectionBlock>

          <SectionBlock number="3" title="Payment Data">
            <div className="flex items-start gap-4 rounded-r-lg border-l-4 border-[var(--brand-accent)] bg-[var(--brand-accent-soft)] p-4 dark:bg-[var(--brand-accent-soft-strong)]">
              <Shield
                className="mt-1 size-6 shrink-0 text-[var(--brand-accent)]"
                strokeWidth={1.75}
                aria-hidden
              />
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                We do not store your credit card details on our servers. All payments are processed
                by secure third-party payment processors (e.g., Stripe, PayPal) compliant with
                PCI-DSS standards.
              </p>
            </div>
          </SectionBlock>

          <SectionBlock number="4" title="Data Security">
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              We implement industry-standard administrative, technical, and physical security
              measures designed to protect your personal information from unauthorized access,
              disclosure, or destruction. However, no method of transmission over the Internet is
              100% secure.
            </p>
          </SectionBlock>

          <SectionBlock number="5" title="User Rights">
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              Depending on your location, you may have the following rights regarding your personal
              data:
            </p>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="size-4 shrink-0 text-[var(--brand-accent)]" aria-hidden />
                <span>The right to access your data</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="size-4 shrink-0 text-[var(--brand-accent)]" aria-hidden />
                <span>The right to correct inaccurate information</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="size-4 shrink-0 text-[var(--brand-accent)]" aria-hidden />
                <span>The right to request deletion of your data</span>
              </div>
            </div>
          </SectionBlock>

          <SectionBlock number="6" title="Third-Party Disclosure">
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              We do not sell, trade, or otherwise transfer your personally identifiable information
              to outside parties except to provide the service requested, comply with the law, or
              protect our rights.
            </p>
          </SectionBlock>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl bg-slate-900 p-8 text-white md:flex-row dark:bg-slate-950">
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-xl font-bold">Have questions about our policy?</h3>
            <p className="text-slate-400">Our legal team is here to help clarify any points.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[var(--brand-accent)] px-8 py-3 text-sm font-bold whitespace-nowrap text-white transition-colors hover:bg-[var(--brand-accent-hover)]"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicyPage;
