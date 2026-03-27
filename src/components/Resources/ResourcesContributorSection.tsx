import { Link } from 'react-router-dom';

import { Edit3 } from 'lucide-react';

import { Button } from '@/Components/Ui/Button';

type ContributorCopy = {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
};

export function ResourcesContributorSection({ copy }: { copy: ContributorCopy }) {
  return (
    <section className="bg-[var(--brand-accent)] py-12 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Edit3 className="mx-auto mb-6 size-14 opacity-95 md:size-16" aria-hidden />
        <h2 className="mb-6 text-3xl font-black tracking-tight md:text-4xl">{copy.title}</h2>
        <p className="mb-10 text-xl leading-relaxed opacity-90">{copy.description}</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            asChild
            variant="onAccentSolid"
            size="lg"
            className="h-auto rounded-xl px-10 py-4 text-base font-bold"
          >
            <Link to="/contact">{copy.primaryCta}</Link>
          </Button>
          <Button
            asChild
            variant="outlineOnAccent"
            size="lg"
            className="h-auto rounded-xl px-10 py-4 text-base font-bold"
          >
            <Link to="/guidelines">{copy.secondaryCta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
