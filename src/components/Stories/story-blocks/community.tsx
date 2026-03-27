import { StoryStack } from '../StoryPrimitives';
import { story, storyHeading } from '../stories-tokens';
import { StoryStatsRow } from '../story-parts';

import { memo } from 'react';

import { storiesCommunityImage } from '@/assets/stories-page/images';
import { storiesCommunity, storiesTrust } from '@/data/stories-page-data';
import { cn } from '@/lib/utils';

export const StoryCommunityBlock = memo(function StoryCommunityBlock() {
  return (
    <StoryStack>
      <div className="flex flex-col items-center gap-12 md:flex-row">
        <div className="order-2 flex-1 md:order-1">
          <img
            src={storiesCommunityImage}
            alt={storiesCommunity.imageAlt}
            className="rounded-3xl shadow-2xl"
            width={600}
            height={400}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="order-1 flex-1 md:order-2">
          <h2 className={storyHeading.section}>{storiesCommunity.heading}</h2>
          <p className={cn('mb-6 text-lg', story.prose)}>
            {storiesCommunity.bodyBefore}
            <strong>{storiesCommunity.bodyStrong}</strong>
            {storiesCommunity.bodyAfter}
          </p>
          <StoryStatsRow stats={storiesCommunity.stats} />
        </div>
      </div>
    </StoryStack>
  );
});

export const StoryTrustBlock = memo(function StoryTrustBlock() {
  return (
    <StoryStack className="text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className={storyHeading.section}>{storiesTrust.heading}</h2>
        <p className={story.prose}>{storiesTrust.body}</p>
      </div>
    </StoryStack>
  );
});
