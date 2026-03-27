import type { LucideIcon } from 'lucide-react';
import { BookOpen, FileText, Mic, ScrollText } from 'lucide-react';

/** Hub tiles at `/resources` — gallery layout (unlike the vertical Policies index). */
export type ResourcesHubCard = {
  to: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Tailwind gradient for tile background */
  gradientClass: string;
};

export const resourcesHubCards: ResourcesHubCard[] = [
  {
    to: '/resources/library',
    title: 'Wisdom Library',
    description: 'Curated essays, perspectives, and the full Resources experience.',
    icon: BookOpen,
    gradientClass:
      'from-[var(--brand-accent)]/25 via-[var(--brand-accent)]/10 to-slate-50 dark:to-slate-900/80',
  },
  {
    to: '/blogs',
    title: 'Blog',
    description: 'Articles, updates, and stories from the NEXT50 community.',
    icon: ScrollText,
    gradientClass: 'from-sky-500/20 via-blue-500/10 to-slate-50 dark:to-slate-900/80',
  },
  {
    to: '/podcasts',
    title: 'Podcasts',
    description: 'Conversations on aging well, purpose, and life’s second half.',
    icon: Mic,
    gradientClass: 'from-violet-500/20 via-purple-500/10 to-slate-50 dark:to-slate-900/80',
  },
  {
    to: '/guidelines',
    title: 'Guidelines',
    description: 'Community standards and how we keep NEXT50 safe and welcoming.',
    icon: FileText,
    gradientClass: 'from-rose-500/15 via-orange-500/10 to-slate-50 dark:to-slate-900/80',
  },
];

export const resourcesHubIntro = {
  title: 'Resources',
  subtitle: 'Explore the library, stories, media, and community standards — all in one place.',
} as const;
