import type { LucideIcon } from 'lucide-react';
import { BookOpen, Calendar, MessageCircle, Sparkles, Target } from 'lucide-react';

import {
  communitiesCardImages,
  communitiesIntentionalParticipationImage,
} from '@/assets/communities-page/images';

export const communitiesHero = {
  badge: 'Explore our ecosystem',
  titleBefore: 'Communities at',
  titleAccent: 'MyNext50',
  description:
    'Interest-led spaces for conscious living. These are living spaces, not just feeds—involving members, LifeCrafters, and real-world events.',
};

export const communitiesPillarsIntro = {
  title: 'How Communities Work',
  description:
    'The 5 Pillars of Our Ecosystem are designed for intentionality and deep connection, bridging digital interaction with physical presence.',
};

export const communitiesPillars: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: MessageCircle,
    title: 'Community Feed',
    description: 'Real-time sharing, thoughtful discussions, and member-led sparks.',
  },
  {
    icon: Calendar,
    title: 'Events',
    description: 'Exclusive real-world and virtual gatherings that build lasting bonds.',
  },
  {
    icon: Sparkles,
    title: 'LifeCrafters',
    description: 'Expert guides leading the way through wisdom and curated experiences.',
  },
  {
    icon: Target,
    title: 'Community Circles',
    description: 'Intimate cohorts for deep dives into specific topics and practices.',
  },
  {
    icon: BookOpen,
    title: 'Resources',
    description: 'Curated content and podcasts for your continuous growth journey.',
  },
];

export const communitiesGridIntro = {
  title: 'The Communities',
  subtitle: 'Find the space where your purpose meets practice.',
};

export type CommunityCard = {
  name: string;
  category: string;
  tagline: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  youllFind: string[];
};

export const communitiesList: CommunityCard[] = [
  {
    name: 'Zen',
    category: 'Mindfulness',
    tagline: 'Yoga, Breath, Mindful Living',
    description:
      'A sanctuary for those seeking inner balance and clarity in an increasingly noisy world.',
    imageSrc: communitiesCardImages.zen,
    imageAlt: 'Zen morning fog over peaceful mountains',
    youllFind: ['Daily Meditations', 'Yoga Flows', 'Breathwork Sessions'],
  },
  {
    name: 'The Stage',
    category: 'Creative',
    tagline: 'Arts, Theatre, Expression',
    description:
      'Where storytelling and performance meet raw human expression. Discover your inner performer.',
    imageSrc: communitiesCardImages.theStage,
    imageAlt: 'Dramatic theater stage lighting and curtains',
    youllFind: ['Theatre Workshops', 'Storytelling Nights', 'Improv Circles'],
  },
  {
    name: 'Cosmos',
    category: 'Universal',
    tagline: 'Astrology, Patterns, Perspective',
    description:
      'Mapping the celestial patterns that influence our journey through time and space.',
    imageSrc: communitiesCardImages.cosmos,
    imageAlt: 'Nebula and stars in deep space',
    youllFind: ['Birth Chart Analysis', 'Moon Rituals', 'Cosmic Forecasts'],
  },
  {
    name: 'Forever Fit',
    category: 'Vitality',
    tagline: 'Fitness, Strength, Vitality',
    description: 'Designing a body that can sustain the life of your dreams for the long haul.',
    imageSrc: communitiesCardImages.foreverFit,
    imageAlt: 'Athletic person exercising in golden light',
    youllFind: ['Longevity Plans', 'Strength Training', 'Biohacking Talks'],
  },
  {
    name: 'Elsewhere',
    category: 'Adventure',
    tagline: 'Travel, Exploration, Shared Journeys',
    description:
      'For the nomadic souls and curious explorers looking for the next uncharted territory.',
    imageSrc: communitiesCardImages.elsewhere,
    imageAlt: 'Open road winding through desert landscape',
    youllFind: ['Curated Expeditions', 'Local Meetups', 'Travel Hacks'],
  },
  {
    name: 'LensCraft',
    category: 'Visual',
    tagline: 'Photography, Observation, Creativity',
    description:
      'Cultivating the art of seeing. Mastering the technical and spiritual aspects of photography.',
    imageSrc: communitiesCardImages.lenscraft,
    imageAlt: 'Close up of a vintage camera lens',
    youllFind: ['Photo Expeditions', 'Editing Masterclasses', 'Visual Critique'],
  },
  {
    name: 'Solo',
    category: 'Spirit',
    tagline: 'Spiritual Journeys, Inner Inquiry',
    description: 'A deep dive into the metaphysical questions that define our humanity.',
    imageSrc: communitiesCardImages.solo,
    imageAlt: 'Incense smoke in a dimly lit temple',
    youllFind: ['Philosophy Talks', 'Wisdom Circles', 'Soul Inquiry'],
  },
  {
    name: 'Evolve',
    category: 'Growth',
    tagline: 'Upskilling, Learning, New Directions',
    description:
      'Re-invent yourself through continuous learning and the acquisition of new skills.',
    imageSrc: communitiesCardImages.evolve,
    imageAlt: 'Old library books stacked tall',
    youllFind: ['Skills Labs', 'Mentorship', 'Career Pivot Hub'],
  },
  {
    name: 'Rhythm',
    category: 'Sonic',
    tagline: 'Music, Sound, Expression',
    description:
      'A vibrant home for sound-makers, listeners, and those who feel the world through vibration.',
    imageSrc: communitiesCardImages.rhythm,
    imageAlt: 'Musical instruments in a recording studio',
    youllFind: ['Jam Sessions', 'Sound Baths', 'Audiophile Clubs'],
  },
];

export const intentionalParticipation = {
  title: 'The Art of Intentional Participation',
  body: "Joining a MyNext50 community isn't just about clicking a button. It's an invitation to a shared philosophy. We believe that connection grows through active presence, not passive consumption.",
  points: [
    {
      title: 'Vetted Expertise',
      description:
        'Every community is anchored by LifeCrafters who are true masters of their craft.',
    },
    {
      title: 'High-Signal Connection',
      description:
        'Smaller circles and real-world events ensure you build friendships that last beyond the screen.',
    },
  ],
  imageSrc: communitiesIntentionalParticipationImage,
  imageAlt: 'A group of diverse people laughing together in a modern room',
};

export const requestCommunity = {
  title: "Can't Find What You're Looking For?",
  body: "Our ecosystem is always expanding. If you feel there's a specific niche missing that aligns with conscious living, tell us.",
  cta: 'Request a New Community',
};

export const closingCta = {
  lineBefore: 'Your Next 50 starts with a',
  lineAccent: 'single connection',
  lineAfter: '.',
};

/** Single object for `<CommunitiesPageContent data={…} />` — swap or spread to customize copy. */
export const defaultCommunitiesPageData = {
  hero: communitiesHero,
  pillarsIntro: communitiesPillarsIntro,
  pillars: communitiesPillars,
  gridIntro: communitiesGridIntro,
  communities: communitiesList,
  intentionalParticipation,
  requestCommunity,
  closingCta,
} as const;

export type CommunitiesPageData = typeof defaultCommunitiesPageData;
