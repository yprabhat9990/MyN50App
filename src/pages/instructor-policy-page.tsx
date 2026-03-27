import { Link } from 'react-router-dom';

import { CheckCircle2, Copyright, Gavel, IdCard, Mail, ShieldCheck } from 'lucide-react';

import { InstructorPolicyHighlightCard } from '@/Components/InstructorPolicy/InstructorPolicyHighlightCard';
import { PageBreadcrumb } from '@/Components/Ui/PageBreadcrumb';
import { PAGE_MAIN_SHELL } from '@/lib/page-shell';
import { cn } from '@/lib/utils';

const INSTRUCTOR_RESPONSIBILITY_CARDS = [
  {
    title: 'Authentic Content',
    description:
      'All course materials must be original or appropriately licensed, providing genuine value to our users.',
  },
  {
    title: 'Professional Conduct',
    description:
      'Maintain a professional demeanor in all interactions, including live sessions, forums, and private messaging.',
  },
  {
    title: 'Quality Delivery',
    description:
      'Ensure video, audio, and written materials meet MyNext50 technical and editorial quality standards.',
  },
] as const;

export function InstructorPolicyPage() {
  return (
    <main className={cn(PAGE_MAIN_SHELL, 'px-4 py-12 sm:px-5 md:py-16 lg:px-8 lg:py-24')}>
      <div className="mx-auto max-w-3xl">
        <PageBreadcrumb
          className="mb-8"
          items={[{ label: 'Legal', to: '/terms' }, { label: 'Instructor Policy' }]}
        />

        <div className="mb-12 border-b border-slate-200 pb-8 md:mb-16 dark:border-slate-800">
          <h1 className="mb-4 text-4xl font-black tracking-tight text-[var(--brand-primary)] md:text-5xl dark:text-white">
            Instructor &amp; Facilitator Policy
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Guidelines and standards for teaching on MyNext50. We are committed to providing the
            highest quality educational experience for our community members entering their next
            chapter.
          </p>
        </div>

        <div className="space-y-14 md:space-y-16">
          <section id="onboarding" className="scroll-mt-24">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-accent)]/10 text-[var(--brand-accent)]">
                <ShieldCheck className="size-5" strokeWidth={2} aria-hidden />
              </div>
              <h2 className="text-xl font-bold text-[var(--brand-primary)] md:text-2xl dark:text-slate-100">
                1. Instructor Onboarding
              </h2>
            </div>
            <div className="text-slate-700 dark:text-slate-300">
              <p className="mb-4 leading-relaxed">
                To maintain high educational standards, all facilitators must undergo an internal
                review and verification process. This ensures that our learners receive guidance
                from qualified and trustworthy individuals.
              </p>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed">
                <li>
                  <strong>Credentials Check:</strong> Verification of professional certifications,
                  academic degrees, and relevant industry experience.
                </li>
                <li>
                  <strong>Identity Verification:</strong> Submission of government-issued
                  identification to confirm the instructor&apos;s identity.
                </li>
                <li>
                  <strong>Interview Process:</strong> A structured conversation with our curriculum
                  team to assess communication skills and pedagogical approach.
                </li>
              </ul>
            </div>
          </section>

          <section id="responsibilities" className="scroll-mt-24">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-accent)]/10 text-[var(--brand-accent)]">
                <IdCard className="size-5" strokeWidth={2} aria-hidden />
              </div>
              <h2 className="text-xl font-bold text-[var(--brand-primary)] md:text-2xl dark:text-slate-100">
                2. Instructor Responsibilities
              </h2>
            </div>
            <div className="text-slate-700 dark:text-slate-300">
              <p className="mb-4 leading-relaxed">
                Instructors are the face of MyNext50. We expect a commitment to excellence in the
                following areas:
              </p>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {INSTRUCTOR_RESPONSIBILITY_CARDS.map(({ title, description }) => (
                  <InstructorPolicyHighlightCard
                    key={title}
                    title={title}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>

          <section id="ownership" className="scroll-mt-24">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-accent)]/10 text-[var(--brand-accent)]">
                <Copyright className="size-5" strokeWidth={2} aria-hidden />
              </div>
              <h2 className="text-xl font-bold text-[var(--brand-primary)] md:text-2xl dark:text-slate-100">
                3. Content Ownership
              </h2>
            </div>
            <div className="rounded-2xl border border-[var(--brand-accent)]/10 bg-[var(--brand-accent)]/[0.06] p-6 md:p-8 dark:bg-[var(--brand-accent)]/10">
              <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300">
                We value intellectual property. Our ownership model is designed to be fair to
                creators:
              </p>
              <ul className="list-none space-y-4 text-slate-700 dark:text-slate-300">
                <li className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-[var(--brand-accent)]"
                    aria-hidden
                  />
                  <span>
                    <strong>Instructor Ownership:</strong> You retain all ownership rights to the
                    content you create and upload to the platform.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-[var(--brand-accent)]"
                    aria-hidden
                  />
                  <span>
                    <strong>Usage License:</strong> By uploading content, you grant MyNext50 a
                    non-exclusive, worldwide, royalty-free license to host, display, and promote
                    your content.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-[var(--brand-accent)]"
                    aria-hidden
                  />
                  <span>
                    <strong>Marketing:</strong> We may use snippets of your content for promotional
                    purposes across our social media and marketing channels.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section id="enforcement" className="scroll-mt-24 pb-4 md:pb-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-accent)]/10 text-[var(--brand-accent)]">
                <Gavel className="size-5" strokeWidth={2} aria-hidden />
              </div>
              <h2 className="text-xl font-bold text-[var(--brand-primary)] md:text-2xl dark:text-slate-100">
                4. Policy Enforcement
              </h2>
            </div>
            <div className="leading-relaxed text-slate-700 dark:text-slate-300">
              <p>
                Failure to comply with these guidelines or the broader Terms of Service may result
                in administrative action. MyNext50 reserves the right to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>Issue formal warnings regarding minor policy infractions.</li>
                <li>Temporarily suspend course listings or instructor access.</li>
                <li>
                  Permanently remove instructors and their content for severe or repeated
                  violations.
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl bg-slate-900 p-8 text-center text-white md:mt-4 md:p-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            aria-hidden
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 50%, var(--brand-accent) 0%, transparent 50%)',
            }}
          />
          <h3 className="relative z-10 mb-4 text-xl font-bold md:text-2xl">
            Have questions about our instructor policies?
          </h3>
          <p className="relative z-10 mx-auto mb-8 max-w-xl text-slate-300">
            Our facilitator support team is available to help you understand your rights and
            responsibilities.
          </p>
          <Link
            to="/contact"
            className="relative z-10 inline-flex items-center gap-2 rounded-xl bg-[var(--brand-accent)] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-accent-hover)]"
          >
            Contact Support
            <Mail className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default InstructorPolicyPage;
