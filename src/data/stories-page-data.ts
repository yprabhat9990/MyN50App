export const storiesHero = {
  titleBefore: 'The Story Behind ',
  titleAccent: 'MyNext50',
  subtitle: 'A personal reflection on why I built this living system for the second half of life.',
  heroImageAlt: 'A thoughtful person looking at a sunlit coastal horizon',
} as const;

export const storiesIntro = {
  heading: 'This Didn’t Start as a Startup Idea',
  paragraphs: [
    "It began not with a business plan, but with a realization. I found myself looking at the horizon of the next few decades, realizing that the tools we had weren't built for the depth of our experience.",
    'We are often told that after 40 or 50, we should begin to "wind down." But everything in my body and mind was telling me I was just reaching my stride. I had wisdom, I had resources, and more importantly, I had a hunger for meaning that I didn\'t have at 25.',
  ],
} as const;

export const storiesPattern = {
  heading: 'I Kept Seeing the Same Pattern',
  leadBefore:
    'In my conversations with peers, mentors, and friends, a gap became obvious. The world treats the over-40 demographic as a market to be sold to, or a demographic to be managed. There was no space designed for ',
  leadAccent: 'active participation',
  leadAfter: ', where lived experience was the currency.',
  quote:
    '"We were over-connected yet increasingly isolated. We had networks, but lacked a true system for meaningful engagement."',
} as const;

export const storiesDecline = {
  heading: 'The Second Half of Life Is Not a Decline',
  body: 'Society views aging as a slow exit. I view it as an intentional entrance into a more profound chapter. MyNext50 is built on the belief that these decades are for making our most intentional choices yet.',
} as const;

export type StoriesWhatWeBuildIconId = 'x' | 'network';

export const storiesWhatWeBuild = {
  heading: 'What I Wanted to Build (And What I Didn’t)',
  cards: [
    {
      tone: 'muted' as const,
      icon: 'x' satisfies StoriesWhatWeBuildIconId,
      title: "It's Not Another Social Network",
      body: 'No infinite scrolls, no dopamine-loop notifications, and no shallow validation. We don\'t need more "friends" we don\'t know.',
    },
    {
      tone: 'accent' as const,
      icon: 'network' satisfies StoriesWhatWeBuildIconId,
      title: 'It Is a Living System',
      body: 'A structured framework for participation, growth, and contribution. A system designed to facilitate real-world impact.',
    },
  ],
} as const;

export const storiesCommunity = {
  heading: 'Why Community Comes First',
  bodyBefore: "Community isn't just a feature; it's the infrastructure. We introduced ",
  bodyStrong: 'LifeCrafters',
  bodyAfter:
    '—members with deep lived wisdom who guide others, ensuring the system remains grounded in human value.',
  stats: [
    { value: '150+', label: 'Curated Events' },
    { value: '40+', label: 'Expert Guides' },
  ],
  imageAlt: 'A group of diverse mature professionals together at a workshop',
} as const;

export const storiesTrust = {
  heading: 'Trust Is Not Optional',
  body: "We've implemented strict verification, reviewed every hosted event, and established an intentional governance model. We are building a high-trust environment where privacy is sacred and authenticity is the baseline.",
} as const;

export const storiesEvolution = {
  heading: 'This Is Still Being Built — With You',
  body: "MyNext50 isn't a finished product; it's an evolving organism. We invite you to help us shape the governance, the events, and the future of how we live our next fifty years.",
  ctaLabel: 'Join the Evolution',
  ctaTo: '/membership',
} as const;

export const storiesPersonal = {
  heading: 'A Personal Note',
  quotes: [
    "\"Building MyNext50 has been the most challenging and rewarding work of my career. It's born from my own needs, my own fears, and my own profound hope. I want to live in a world where we don't just 'age,' we flourish—together, with purpose and without compromise.\"",
    '"Thank you for being part of this journey. Let\'s make the next fifty years our best yet."',
  ],
  signature: 'Julian Thorne',
  role: 'Founder, MyNext50',
  founderImageAlt: 'Portrait of the company founder',
} as const;
