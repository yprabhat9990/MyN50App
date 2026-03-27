import { AlertTriangle, Gavel, Info, Scale, ShieldCheck } from 'lucide-react';

import { GuidelinesExpectedConductRow } from '@/Components/Guidelines/GuidelinesExpectedConductRow';
import { GuidelinesProhibitedItem } from '@/Components/Guidelines/GuidelinesProhibitedItem';
import { GuidelinesSectionPanel } from '@/Components/Guidelines/GuidelinesSectionPanel';
import { Button } from '@/Components/Ui/Button';
import { guidelinesHeroImage } from '@/assets/Guidelines_section/images';

const EXPECTED_CONDUCT_ITEMS = [
  {
    title: 'Respect & Empathy',
    body: 'Treat all members with kindness, regardless of background, belief, or experience level.',
  },
  {
    title: 'Knowledge Sharing',
    body: "Contribute your wisdom and listen to others' experiences with an open mind.",
  },
  {
    title: 'Confidentiality',
    body: 'Respect the privacy of discussions shared within private groups and workshops.',
  },
] as const;

const PROHIBITED_ITEMS = [
  {
    label: 'Harassment',
    description:
      'Any form of bullying, hate speech, or targeted intimidation is strictly forbidden.',
  },
  {
    label: 'Spam & Solicitation',
    description: 'Unsolicited commercial promotions or excessive off-topic posts.',
  },
  {
    label: 'Misinformation',
    description: 'Sharing intentionally false or misleading information that could cause harm.',
  },
] as const;

export function GuidelinesSection() {
  return (
    <div className="bg-[var(--brand-surface)] dark:bg-slate-950/50">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
        {/* Hero */}
        <section className="mb-12 sm:mb-16">
          <div className="relative mb-8 h-64 w-full overflow-hidden rounded-xl shadow-lg">
            <div
              className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 to-transparent"
              aria-hidden
            />
            <img
              src={guidelinesHeroImage}
              alt="Diverse group of people collaborating in a modern space"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 z-20 p-6 sm:p-8">
              <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Community Guidelines
              </h2>
              <p className="max-w-xl text-slate-200">
                Building a safe, supportive, and empowering ecosystem for the second half of life.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
              Our Shared Standards
            </h3>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              At MyNext50, we believe the next fifty years are for growth, connection, and
              contribution. To ensure our space remains constructive, we ask all members to uphold
              these standards of conduct.
            </p>
          </div>
        </section>

        <GuidelinesSectionPanel
          icon={ShieldCheck}
          iconClassName="text-[var(--brand-accent)]"
          title="Expected Conduct"
        >
          <div className="grid gap-4">
            {EXPECTED_CONDUCT_ITEMS.map((item) => (
              <GuidelinesExpectedConductRow key={item.title} title={item.title} body={item.body} />
            ))}
          </div>
        </GuidelinesSectionPanel>

        <GuidelinesSectionPanel
          icon={AlertTriangle}
          iconClassName="text-red-500"
          title="Prohibited Conduct"
        >
          <ul className="space-y-4">
            {PROHIBITED_ITEMS.map((item) => (
              <GuidelinesProhibitedItem
                key={item.label}
                label={item.label}
                description={item.description}
              />
            ))}
          </ul>
        </GuidelinesSectionPanel>

        <GuidelinesSectionPanel
          icon={Gavel}
          iconClassName="text-[var(--brand-accent)]"
          tone="accent"
          title="Zero-Tolerance Abuse Policy"
        >
          <p className="mb-6 leading-relaxed text-slate-700 dark:text-slate-300">
            MyNext50 maintains a zero-tolerance policy regarding physical or verbal abuse, sexual
            harassment, and discriminatory behavior. Violation of these core rules will result in an{' '}
            <span className="font-bold text-[var(--brand-accent)]">
              immediate and permanent ban
            </span>{' '}
            from the platform without appeal.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[var(--brand-accent)]">
            <Info className="size-5 shrink-0" aria-hidden />
            <span>
              Report violations directly to{' '}
              <a href="mailto:support@mynext50.com" className="underline hover:opacity-90">
                support@mynext50.com
              </a>
            </span>
          </div>
        </GuidelinesSectionPanel>

        <GuidelinesSectionPanel
          icon={Scale}
          iconClassName="text-blue-600 dark:text-blue-400"
          title="Legal Compliance"
        >
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
            <p>
              All members must comply with applicable local, state, and international laws while
              using the platform. We reserve the right to cooperate with law enforcement authorities
              in cases of illegal activity.
            </p>
            <blockquote className="border-l-4 border-slate-300 p-4 italic dark:border-slate-600">
              By participating in the MyNext50 community, you acknowledge that you have read,
              understood, and agreed to these guidelines as an extension of our Terms of Service.
            </blockquote>
          </div>
        </GuidelinesSectionPanel>

        <section className="border-t border-slate-200 py-10 text-center sm:py-12 dark:border-slate-800">
          <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
            Ready to contribute to our community?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              type="button"
              variant="brandAccent"
              className="h-auto rounded-lg px-8 py-3 font-bold"
            >
              I Agree & Continue
            </Button>
            <Button
              variant="outline"
              asChild
              className="h-auto rounded-lg border-slate-300 bg-white px-8 py-3 font-bold text-slate-900 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              <a href="#">Download PDF</a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
