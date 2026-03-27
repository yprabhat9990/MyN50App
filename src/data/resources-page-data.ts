import type { LucideIcon } from 'lucide-react';
import { Calendar, FileText, Group, Mic, Verified } from 'lucide-react';

import { resourcesPageImages } from '@/assets/resources-page/images';

export const resourcesHero = {
  kicker: 'The Wisdom Library',
  titleBefore: 'Resources for Life’s ',
  titleAccent: 'Second Half.',
  description:
    'Not a content feed, but a curated library of insight. Thoughtful, experience-led, and relevant across time.',
  badgeTitle: '150+ Curated Essays',
  badgeSubtitle: 'Updated weekly with depth',
} as const;

export const resourcesCategories: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: FileText,
    title: 'Essays & Perspectives',
    description: 'Deep dives into the philosophical shifts of aging.',
  },
  {
    icon: Group,
    title: 'Community Stories',
    description: 'Real journeys and transformations from our members.',
  },
  {
    icon: Verified,
    title: 'Expert Insights',
    description: 'Evidence-based knowledge from leading industry experts.',
  },
  {
    icon: Calendar,
    title: 'Event Learnings',
    description: 'Key takeaways and summaries from our gatherings.',
  },
  {
    icon: Mic,
    title: 'Podcasts',
    description: 'Audio dialogues on meaningful aging and legacy.',
  },
];

export const resourcesThemes: { imageSrc: string; title: string; subtitle: string }[] = [
  {
    imageSrc: resourcesPageImages.themeWellness,
    title: 'Wellness',
    subtitle: 'Holistic health & mindful living',
  },
  {
    imageSrc: resourcesPageImages.themeFitness,
    title: 'Fitness',
    subtitle: 'Mobility & strength for longevity',
  },
  {
    imageSrc: resourcesPageImages.themeCreativity,
    title: 'Creativity',
    subtitle: 'Igniting passion and expression',
  },
  {
    imageSrc: resourcesPageImages.themeLegacy,
    title: 'Legacy',
    subtitle: 'Financial and social impact',
  },
];

export const resourcesEditorialPoints: { title: string; body: string }[] = [
  {
    title: 'Deliberate Selection',
    body: 'We prioritize depth over volume. Every piece is commissioned or selected to provide lasting value, not fleeting interest.',
  },
  {
    title: 'Expert & Peer Reviewed',
    body: 'Our content undergoes a rigorous review process to ensure accuracy, relevance, and alignment with the LifeCraft philosophy.',
  },
  {
    title: 'Value-Aligned',
    body: 'We only publish stories and insights that empower the individual and respect the journey of aging as a period of growth.',
  },
];

export const resourcesContributor = {
  title: 'Become a Contributor',
  description:
    'Are you a LifeCrafter or a member with a unique story to share? We invite you to contribute your perspectives and help shape the collective wisdom of our community.',
  primaryCta: 'Submit Your Pitch',
  secondaryCta: 'Guidelines for Authors',
} as const;

export const resourcesDisclaimer = {
  title: 'Medical & Legal Disclaimer',
  body: 'The information provided in the Resources section is for educational and informational purposes only. It is not intended as medical, legal, or financial advice. Always seek the advice of a qualified professional regarding your health, legal rights, or financial situation. MyNext50 does not endorse any specific products, procedures, or medical opinions mentioned by contributors.',
} as const;
