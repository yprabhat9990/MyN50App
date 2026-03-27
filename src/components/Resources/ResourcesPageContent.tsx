import { Link } from 'react-router-dom';

import { ArrowRight, BookOpen } from 'lucide-react';

import { Button } from '@/Components/Ui/Button';
import { resourcesPageImages } from '@/assets/resources-page/images';
import {
  resourcesCategories,
  resourcesContributor,
  resourcesDisclaimer,
  resourcesEditorialPoints,
  resourcesHero,
  resourcesThemes,
} from '@/data/resources-page-data';

import { ResourceCategoryCard } from './ResourceCategoryCard';
import { ResourceEditorialPointItem } from './ResourceEditorialPointItem';
import { ResourceThemeCard } from './ResourceThemeCard';
import { ResourcesAccentLink } from './ResourcesAccentLink';
import { ResourcesContributorSection } from './ResourcesContributorSection';
import { ResourcesDisclaimerCallout } from './ResourcesDisclaimerCallout';
import { ResourcesSectionHeadingCentered } from './ResourcesSectionHeadingCentered';

export function ResourcesPageContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-50 py-12 md:py-12 dark:bg-slate-900/50">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded bg-[var(--brand-accent)]/10 px-3 py-1 text-xs font-bold tracking-widest text-[var(--brand-accent)] uppercase">
                {resourcesHero.kicker}
              </span>
              <h1 className="mb-6 text-4xl leading-[1.1] font-black tracking-tight text-slate-900 lg:text-5xl xl:text-6xl dark:text-slate-100">
                {resourcesHero.titleBefore}
                <span className="text-[var(--brand-accent)]">{resourcesHero.titleAccent}</span>
              </h1>
              <p className="max-w-xl text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                {resourcesHero.description}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  asChild
                  variant="brandAccent"
                  size="lg"
                  className="h-auto rounded-xl px-8 py-4 text-base font-bold"
                >
                  <Link
                    to="/resources/library#what-youll-find"
                    className="inline-flex items-center gap-2"
                  >
                    Explore Library
                    <ArrowRight className="size-5" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={resourcesPageImages.hero}
                  alt="Desk with notebook and fountain pen"
                  className="h-full w-full object-cover"
                  width={800}
                  height={600}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-white p-6 shadow-xl sm:block dark:bg-slate-800">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[var(--brand-accent)]/10 p-3">
                    <BookOpen className="size-7 text-[var(--brand-accent)]" aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {resourcesHero.badgeTitle}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {resourcesHero.badgeSubtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="what-youll-find"
        className="scroll-mt-28 bg-white py-12 md:py-12 dark:bg-slate-900"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ResourcesSectionHeadingCentered title="What You’ll Find Here" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {resourcesCategories.map((cat) => (
              <ResourceCategoryCard
                key={cat.title}
                icon={cat.icon}
                title={cat.title}
                description={cat.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="themes" className="scroll-mt-28 bg-slate-50 py-12 md:py-12 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="mb-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                Explore by Theme
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Our library is organized to support your specific life goals and interests.
              </p>
            </div>
            <ResourcesAccentLink to="/resources/library#themes">
              View All Themes
            </ResourcesAccentLink>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {resourcesThemes.map(({ imageSrc, title, subtitle }) => (
              <ResourceThemeCard
                key={title}
                imageSrc={imageSrc}
                title={title}
                subtitle={subtitle}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-12 md:py-12 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={resourcesPageImages.editorialWriting}
                  alt="Person writing on paper"
                  className="h-64 w-full rounded-2xl object-cover"
                  width={400}
                  height={256}
                />
                <img
                  src={resourcesPageImages.editorialMeeting}
                  alt="Editorial space"
                  className="mt-8 h-64 w-full rounded-2xl object-cover"
                  width={400}
                  height={256}
                />
              </div>
              <div className="absolute top-0 left-0 -z-10 h-64 w-64 rounded-full bg-[var(--brand-accent)]/5 blur-3xl" />
            </div>
            <div>
              <h2 className="mb-8 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                Our Editorial Approach
              </h2>
              <div className="space-y-8">
                {resourcesEditorialPoints.map((point, i) => (
                  <ResourceEditorialPointItem
                    key={point.title}
                    index={i}
                    title={point.title}
                    body={point.body}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ResourcesContributorSection copy={resourcesContributor} />
      <ResourcesDisclaimerCallout
        title={resourcesDisclaimer.title}
        body={resourcesDisclaimer.body}
      />
    </>
  );
}
