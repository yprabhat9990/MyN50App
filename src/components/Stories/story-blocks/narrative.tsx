import { StoryStack } from '../StoryPrimitives';
import { story, storyHeading } from '../stories-tokens';
import { StoryPatternQuoteCard, StoryWhatWeBuildCard } from '../story-parts';

import { memo } from 'react';

import {
  storiesDecline,
  storiesIntro,
  storiesPattern,
  storiesWhatWeBuild,
} from '@/data/stories-page-data';
import { cn } from '@/lib/utils';

export const StoryIntroBlock = memo(function StoryIntroBlock() {
  return (
    <StoryStack>
      <h2 className={storyHeading.sectionLg}>{storiesIntro.heading}</h2>
      <div className={cn('space-y-6', story.prose)}>
        {storiesIntro.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </StoryStack>
  );
});

export const StoryPatternBlock = memo(function StoryPatternBlock() {
  return (
    <StoryStack className="grid items-center gap-12 md:grid-cols-2">
      <div>
        <h2 className={storyHeading.section}>{storiesPattern.heading}</h2>
        <p className={story.prose}>
          {storiesPattern.leadBefore}
          <span className="font-semibold text-[var(--brand-accent)]">
            {storiesPattern.leadAccent}
          </span>
          {storiesPattern.leadAfter}
        </p>
      </div>
      <StoryPatternQuoteCard quote={storiesPattern.quote} />
    </StoryStack>
  );
});

export const StoryDeclineBlock = memo(function StoryDeclineBlock() {
  return (
    <StoryStack
      className={cn(
        'rounded-3xl bg-slate-900 px-6 py-12 text-white md:px-8 md:py-16 dark:bg-slate-800/80'
      )}
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">{storiesDecline.heading}</h2>
        <p className="mb-8 text-xl font-light text-slate-300">{storiesDecline.body}</p>
        <div className="mx-auto h-1 w-20 bg-[var(--brand-accent)]" />
      </div>
    </StoryStack>
  );
});

export const StoryWhatWeBuildBlock = memo(function StoryWhatWeBuildBlock() {
  return (
    <StoryStack>
      <h2 className={storyHeading.sectionLg}>{storiesWhatWeBuild.heading}</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {storiesWhatWeBuild.cards.map((card) => (
          <StoryWhatWeBuildCard key={card.title} card={card} />
        ))}
      </div>
    </StoryStack>
  );
});
