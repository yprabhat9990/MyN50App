import { StoryStack } from '../StoryPrimitives';
import { story, storyHeading } from '../stories-tokens';
import { StoryEvolutionBackdrop } from '../story-parts';

import { memo } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/Components/Ui/Button';
import { storiesFounderImage } from '@/assets/stories-page/images';
import { storiesEvolution, storiesPersonal } from '@/data/stories-page-data';
import { cn } from '@/lib/utils';

export const StoryEvolutionBlock = memo(function StoryEvolutionBlock() {
  return (
    <StoryStack className="relative overflow-hidden rounded-3xl bg-[var(--brand-accent)] px-6 py-8 text-white md:px-8 md:py-8">
      <div className="relative z-10 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">{storiesEvolution.heading}</h2>
        <p className="mx-auto mb-8 max-w-xl text-lg opacity-90">{storiesEvolution.body}</p>
        <Button
          asChild
          variant="onAccentSolid"
          size="lg"
          className="h-auto rounded-full px-8 py-3 text-base font-bold text-[var(--brand-accent)]"
        >
          <Link to={storiesEvolution.ctaTo}>{storiesEvolution.ctaLabel}</Link>
        </Button>
      </div>
      <StoryEvolutionBackdrop />
    </StoryStack>
  );
});

export const StoryPersonalBlock = memo(function StoryPersonalBlock() {
  return (
    <StoryStack as="section" className="border-t border-slate-200 pt-12 dark:border-slate-800">
      <div className="mx-auto max-w-2xl">
        <h2 className={storyHeading.personal}>{storiesPersonal.heading}</h2>
        <div className="space-y-6 text-lg font-light text-slate-700 italic dark:text-slate-300">
          {storiesPersonal.quotes.map((q, i) => (
            <p key={i}>{q}</p>
          ))}
        </div>
        <div className="mt-12 flex items-center gap-6">
          <div className="size-20 shrink-0 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <img
              src={storiesFounderImage}
              alt={storiesPersonal.founderImageAlt}
              className="h-full w-full object-cover"
              width={80}
              height={80}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <p className={cn(story.fontSignature, 'text-4xl text-[var(--brand-accent)]')}>
              {storiesPersonal.signature}
            </p>
            <p className="text-sm font-bold tracking-widest text-slate-500 uppercase">
              {storiesPersonal.role}
            </p>
          </div>
        </div>
      </div>
    </StoryStack>
  );
});
