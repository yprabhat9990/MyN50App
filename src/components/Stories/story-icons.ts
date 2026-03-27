import type { LucideIcon } from 'lucide-react';
import { Network, XCircle } from 'lucide-react';

import type { StoriesWhatWeBuildIconId } from '@/data/stories-page-data';

export const STORY_WHAT_BUILD_ICONS: Record<StoriesWhatWeBuildIconId, LucideIcon> = {
  x: XCircle,
  network: Network,
};
