import {
  ArrowRight,
  BadgeCheck,
  Calendar,
  CalendarCheck,
  LockKeyhole,
  Scale,
  Shield,
  Users,
} from 'lucide-react';

import { SectionHeading } from '@/Components/Home/Section_heading';
import type { ProcessStep } from '@/types/home';

interface HowItWorksProps {
  steps: ProcessStep[];
  trustItems: string[];
}

function getStepIcon(icon: ProcessStep['icon']) {
  if (icon === 'user-check') {
    return <LockKeyhole className="size-6 text-slate-700 dark:text-slate-300" />;
  }
  if (icon === 'users') {
    return <Users className="size-6 text-slate-700 dark:text-slate-300" />;
  }
  return <Calendar className="size-6 text-slate-700 dark:text-slate-300" />;
}

const trustIconClass = 'size-5 text-slate-800 dark:text-slate-200 sm:size-6';

function getTrustIcon(item: string) {
  if (item.includes('Verified')) {
    return <BadgeCheck className={trustIconClass} aria-hidden />;
  }
  if (item.includes('Approved')) {
    return <CalendarCheck className={trustIconClass} aria-hidden />;
  }
  if (item.includes('Safety')) {
    return <Shield className={trustIconClass} aria-hidden />;
  }
  if (item.includes('Moderation')) {
    return <Scale className={trustIconClass} aria-hidden />;
  }
  return <BadgeCheck className={trustIconClass} aria-hidden />;
}

export function HowItWorks({ steps, trustItems }: HowItWorksProps) {
  return (
    <section className="bg-[var(--brand-surface)] px-4 py-4 sm:px-5">
      <div className="mx-auto w-full max-w-6xl space-y-4">
        <SectionHeading title="How It Works" />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="flex items-center gap-2 sm:gap-4">
              <div className="flex min-w-[clamp(7.5rem,22vw,8.75rem)] flex-col items-center gap-2 text-center">
                <div className="flex size-14 items-center justify-center rounded-full border border-slate-200/80 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
                  {getStepIcon(step.icon)}
                </div>
                <p className="text-base font-semibold text-slate-800 sm:text-lg dark:text-slate-200">
                  {step.title}
                </p>
              </div>
              {index !== steps.length - 1 ? (
                <ArrowRight className="hidden size-5 text-slate-400 md:block dark:text-slate-500" />
              ) : null}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <SectionHeading title="Trust & Governance" />
          <div className="flex flex-wrap items-start justify-center gap-x-6 gap-y-8 sm:gap-x-10 md:gap-x-12">
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex w-[7.5rem] flex-col items-center justify-center gap-2.5 text-center sm:w-36"
              >
                <div className="flex shrink-0 items-center justify-center">
                  {getTrustIcon(item)}
                </div>
                <p className="m-0 text-sm leading-snug font-semibold text-slate-800 sm:text-base dark:text-slate-200">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
