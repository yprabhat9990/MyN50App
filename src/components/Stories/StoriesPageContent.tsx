import { StoryArticle } from './StoryPrimitives';
import {
  StoryCommunityBlock,
  StoryDeclineBlock,
  StoryEvolutionBlock,
  StoryHeroBlock,
  StoryHeroImageBlock,
  StoryIntroBlock,
  StoryPatternBlock,
  StoryPersonalBlock,
  StoryTrustBlock,
  StoryWhatWeBuildBlock,
} from './story-blocks';

/** Our Story page: composed from memoized blocks in `./story-blocks/`. */
export function StoriesPageContent() {
  return (
    <StoryArticle>
      <StoryHeroBlock />
      <StoryHeroImageBlock />
      <StoryIntroBlock />
      <StoryPatternBlock />
      <StoryDeclineBlock />
      <StoryWhatWeBuildBlock />
      <StoryCommunityBlock />
      <StoryTrustBlock />
      <StoryEvolutionBlock />
      <StoryPersonalBlock />
    </StoryArticle>
  );
}
