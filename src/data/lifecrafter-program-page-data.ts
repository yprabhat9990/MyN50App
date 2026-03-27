import {
  lifeCrafterNotForYouImage,
  lifeCrafterTrustCollageImages,
} from '@/assets/lifecrafter-program/images';

export const lifeCrafterHero = {
  badge: 'Now Accepting Applications',
  titleLine1: 'LifeCrafter Program —',
  titleAccent: 'For those who guide, not just teach.',
  description:
    'Focus on impact over scale. Empowering practitioners, guides, and facilitators to shape meaningful futures through intentional human connection.',
};

export const lifeCrafterWho = {
  title: 'Who Is a LifeCrafter?',
  cards: [
    {
      key: 'practitioners',
      title: 'Practitioners',
      description:
        'Experts with deep, hands-on experience in their fields who are ready to distill their years of practice into actionable wisdom.',
    },
    {
      key: 'guides',
      title: 'Guides',
      description:
        'Mentors who move beyond theory to provide personalized wisdom, direction, and support for those navigating complex life transitions.',
    },
    {
      key: 'facilitators',
      title: 'Facilitators',
      description:
        'Natural enablers who build safe, structured spaces for collective growth, peer learning, and meaningful group interaction.',
    },
  ],
};

export const lifeCrafterNotForYou = {
  title: 'This May Not Be for You If...',
  intro:
    'We prioritize integrity and depth. To maintain the quality of the MyNext50 ecosystem, the LifeCrafter program is not suited for everyone.',
  bullets: [
    'You are seeking “get rich quick” schemes or rapid monetization tools.',
    'You prefer mass-produced, low-engagement content over high-touch guidance.',
    'You are not willing to undergo our rigorous verification and peer-review process.',
    'You prioritize follower counts over the actual transformation of your members.',
  ],
  imageSrc: lifeCrafterNotForYouImage,
  imageAlt: 'Professional team discussing strategy in a modern office',
  imageCaption: 'Verified LifeCrafter Standards',
};

export const lifeCrafterCapabilities = {
  title: 'Capabilities & Opportunities',
  subtitle: 'Build a presence that matters and earn through meaningful work.',
  items: [
    {
      key: 'host',
      title: 'Host Events',
      description:
        'Organize paid or free workshops, webinars, and retreats directly within our platform.',
    },
    {
      key: 'presence',
      title: 'Build Presence',
      description:
        'Get featured in our directory and newsletters to reach an audience seeking real guidance.',
    },
    {
      key: 'earn',
      title: 'Earn Meaningfully',
      description:
        'Monetize your expertise through memberships, one-on-one sessions, and group coaching.',
    },
    {
      key: 'lead',
      title: 'Lead Communities',
      description:
        'Moderate exclusive niche groups and foster safe spaces for your followers to connect.',
    },
  ],
};

export const lifeCrafterMembership = {
  title: 'LifeCrafter Membership',
  subtitle: 'Choose the path that fits your current stage of impact.',
  blue: {
    tier: 'Blue Member',
    price: 'Free',
    blurb: 'For those starting their journey.',
    features: [
      { text: 'Verified Profile Badge', included: true },
      { text: 'List Public Events', included: true },
      { text: 'Join Peer Support Circles', included: true },
      { text: 'Advanced Analytics', included: false },
    ],
    cta: 'Start Free',
  },
  silver: {
    tier: 'Silver Member',
    price: '$49',
    priceSuffix: '/mo',
    blurb: 'For established guides scaling impact.',
    badge: 'MOST POPULAR',
    features: [
      { text: 'Everything in Blue, plus:', highlight: true },
      { text: 'Host Paid Events & Memberships' },
      { text: 'Full Analytics & CRM Dashboard' },
      { text: 'Featured Listing in Directory' },
      { text: 'Priority Support & Review' },
    ],
    cta: 'Go Professional',
  },
};

export const lifeCrafterTrust = {
  title: 'Trust, Verification & Governance',
  body: "Every LifeCrafter undergoes a thorough review process. We don't just check credentials; we review your approach, values, and past impact. Our admins personally approve every application to ensure a safe, high-integrity environment for our community.",
  pillars: [
    { key: 'identity', label: 'Vetted Identity' },
    { key: 'ethics', label: 'Ethics Code' },
    { key: 'audit', label: 'Human Audit' },
    { key: 'peer', label: 'Peer Review' },
  ],
  collageImages: lifeCrafterTrustCollageImages,
  collageAlts: [
    'Professional woman smiling confidently',
    'Corporate meeting in a bright workspace',
    'Colleagues collaborating on a laptop',
    'Detailed data charts on a screen',
  ] as const,
};

export const lifeCrafterJourney = {
  title: 'How the Journey Works',
  subtitle: 'Three simple steps to start your LifeCrafter legacy.',
  steps: [
    {
      n: 1 as const,
      title: 'Apply',
      description: 'Submit your portfolio, background, and vision for the community.',
    },
    {
      n: 2 as const,
      title: 'Get Verified',
      description: 'Our team reviews your submission and conducts a short interview.',
    },
    {
      n: 3 as const,
      title: 'Go Live',
      description: 'Launch your first community event and start your impact journey.',
    },
  ],
};

export const lifeCrafterInfoBlocks = {
  earnings: {
    title: 'Earnings & Payouts',
    body: 'Transparent financial ecosystem. We handle all billing, taxes, and security. Payouts are made monthly directly to your bank account with low, flat processing fees. No hidden costs, ever.',
    cta: 'View Fee Structure',
    href: '/payment-refund-policy',
  },
  support: {
    title: 'Community & Support',
    body: 'You are never alone. Join a private network of fellow LifeCrafters. Access weekly masterminds, resource libraries, and dedicated account managers to help you succeed in your mission.',
    cta: 'Explore Support Benefits',
    href: '/contact',
  },
};

export const lifeCrafterFinalCta = {
  title: 'Ready to craft your next 50 years?',
  joinLabel: 'Join as a LifeCrafter',
  exploreLabel: 'Explore Communities',
  footnote: 'Application review takes typically 3-5 business days.',
};

export const defaultLifeCrafterProgramPageData = {
  hero: lifeCrafterHero,
  who: lifeCrafterWho,
  notForYou: lifeCrafterNotForYou,
  capabilities: lifeCrafterCapabilities,
  membership: lifeCrafterMembership,
  trust: lifeCrafterTrust,
  journey: lifeCrafterJourney,
  infoBlocks: lifeCrafterInfoBlocks,
  finalCta: lifeCrafterFinalCta,
} as const;

export type LifeCrafterProgramPageData = typeof defaultLifeCrafterProgramPageData;
