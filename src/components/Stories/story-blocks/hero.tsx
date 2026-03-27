import { StoryStack } from '../StoryPrimitives';
import { story } from '../stories-tokens';

import { memo } from 'react';

import { storiesHeroImage } from '@/assets/stories-page/images';
import { storiesHero } from '@/data/stories-page-data';
import { cn } from '@/lib/utils';

export const StoryHeroBlock = memo(function StoryHeroBlock() {
  return (
    <StoryStack className="text-center">
      <h1 className={cn('mb-6', story.headingXl)}>
        {storiesHero.titleBefore}
        <span className="text-[var(--brand-accent)]">{storiesHero.titleAccent}</span>
      </h1>
      <p className="mx-auto max-w-2xl text-xl leading-relaxed font-light text-slate-600 dark:text-slate-400">
        {storiesHero.subtitle}
      </p>
    </StoryStack>
  );
});

export const StoryHeroImageBlock = memo(function StoryHeroImageBlock() {
  return (
    <StoryStack as="div" className="overflow-hidden rounded-3xl bg-slate-200 dark:bg-slate-800">
      <img
        src={storiesHeroImage}
        alt={storiesHero.heroImageAlt}
        className="h-[min(500px,70vh)] w-full object-cover grayscale-[20%] transition-all duration-700 hover:grayscale-0"
        width={1200}
        height={500}
        loading="eager"
        decoding="async"
      />
    </StoryStack>
  );
});
