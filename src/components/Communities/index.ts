export { defaultCommunitiesPageData, type CommunitiesPageData } from '@/data/communities-page-data';
export {
  CommunitiesExploreButton,
  CommunitiesExploreJoinPair,
  CommunitiesJoinMemberButton,
  CommunitiesLifeCrafterButton,
} from './CommunitiesCtaButtons';
export type {
  CommunitiesExploreButtonProps,
  CommunitiesExploreJoinPairProps,
  CommunitiesJoinMemberButtonProps,
  CommunitiesLifeCrafterButtonProps,
} from './CommunitiesCtaButtons';
export { communities } from './communities-classes';
export { CommunitiesRoot, CommunitiesShell } from './CommunitiesLayout';
export type { CommunitiesRootProps, CommunitiesShellProps } from './CommunitiesLayout';
export { CommunitiesPageContent } from './CommunitiesPageContent';
export type { CommunitiesPageContentProps } from './CommunitiesPageContent';
/** Granular sections for composition, Storybook, or embedding on other routes. */
export * from './sections';
