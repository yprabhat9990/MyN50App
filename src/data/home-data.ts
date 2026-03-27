import { communityImages } from '@/assets/Communities_preview_section/community-images';
import { heroCollageImages } from '@/assets/home/hero-collage';
import type { HomePageData } from '@/types/home';

export const homePageData: HomePageData = {
  hero: {
    title: 'Connect Online. Meet Offline. Live Fully.',
    subtitle: 'Not a rewind. A conscious restart.',
    primaryAction: 'Join as Member',
    secondaryAction: 'Join as LifeCrafter',
    exploreLabel: 'Explore before you join ↗',
    collage: [...heroCollageImages],
    imageAlt: 'Community lifestyle collage',
  },
  exists: {
    title: 'Why MyNext50 Exists',
    description:
      'Life expands after 40. We are here to facilitate meaningful connections and purpose-driven experiences.',
  },
  communities: [
    {
      id: 1,
      title: 'Zen',
      subtitle: 'Philosophy',
      description: 'Find your inner balance through mindfulness and practice.',
      imageUrl: communityImages.zen,
      accentClasses: 'bg-cyan-100',
      cardBgClass: 'bg-cyan-100',
      badgeBgClass: 'bg-cyan-200',
    },
    {
      id: 2,
      title: 'The Stage',
      subtitle: 'Philosophy',
      description: 'Unleash your creativity and perform with confidence.',
      imageUrl: communityImages.stage,
      accentClasses: 'bg-violet-200',
      cardBgClass: 'bg-violet-200',
      badgeBgClass: 'bg-violet-300',
    },
    {
      id: 3,
      title: 'Cosmos',
      subtitle: 'Philosophy',
      description: 'Explore the universe and gain cosmic insights.',
      imageUrl: communityImages.cosmos,
      accentClasses: 'bg-emerald-200',
      cardBgClass: 'bg-emerald-200',
      badgeBgClass: 'bg-emerald-300',
    },
    {
      id: 4,
      title: 'Forever Fit',
      subtitle: 'Philosophy',
      description: 'Maintain vitality and well-being through movement.',
      imageUrl: communityImages.foreverFit,
      accentClasses: 'bg-yellow-200',
      cardBgClass: 'bg-yellow-200',
      badgeBgClass: 'bg-yellow-300',
    },
  ],
  communityTeasers: [
    {
      title: 'Dint',
      description: 'Small rituals, steady presence, everyday depth.',
      cardBgClass: 'bg-brand-accent-tint',
    },
    {
      title: 'Trip',
      description: 'Shared journeys that turn miles into memories.',
      cardBgClass: 'bg-yellow-100',
    },
    {
      title: 'Sleep',
      description: 'Rest as renewal — nights that truly restore you.',
      cardBgClass: 'bg-green-100',
    },
    {
      title: 'Bealer',
      description: 'Gentle growth through conversation and care.',
      cardBgClass: 'bg-sky-100',
    },
    {
      title: 'Mastery',
      description: 'Level up skills with peers who cheer you on.',
      cardBgClass: 'bg-rose-100',
    },
  ],
  communitiesExploreCta: 'Explore All Communities',
  processSteps: [
    { title: 'Join & Verify', icon: 'user-check' },
    { title: 'Choose Communities', icon: 'users' },
    { title: 'Participate', icon: 'calendar' },
  ],
  trustItems: ['Verified Members', 'Approved Events', 'Safety', 'Moderation'],
  valueColumns: [
    {
      title: 'For Members',
      bullets: [
        'Pay-what-you-want Astrology',
        'Complimentary Yoga sessions',
        'Access to local Jamming Sessions',
        'Special community events',
      ],
      cta: 'Join as Member',
    },
    {
      title: 'For LifeCrafters',
      bullets: [
        '100% Free Onboarding',
        'Zero Platform Fees until launch',
        'Included in Marketing Program',
        'Stronger Digital Presence',
      ],
      cta: 'Join as LifeCrafter',
    },
  ],
};
