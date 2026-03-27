export const aboutHero = {
  titleLine1: 'A Conscious Restart,',
  titleAccent: 'Not a Slowdown',
  lead: 'Life after 40 is often framed as a winding down—a slow fade into the background. We see it differently. It’s a powerful transition point for growth, depth, and new beginnings.',
  tagline: 'MyNext50 exists to support that shift.',
  imageAlt: 'People connecting outdoors',
} as const;

export const aboutGap = {
  heading: 'The Gap No One Was Addressing',
  intro:
    'As we cross the mid-life mark, we noticed three critical shifts that often go unaddressed by traditional social platforms and local communities.',
  cards: [
    {
      index: '01',
      title: 'Fewer Conversations',
      body: 'The quality of social interactions often drops as professional networks change and personal roles evolve.',
    },
    {
      index: '02',
      title: 'Limited Spaces',
      body: 'Most social infrastructure is designed for the young or the very old, leaving a void for those in their prime second half.',
    },
    {
      index: '03',
      title: 'Reduced Expertise',
      body: 'Access to specialized wisdom for mid-life transitions—physical, mental, and spiritual—is surprisingly scarce.',
    },
  ],
} as const;

export const aboutBeliefs = {
  heading: 'What We Believe',
  items: [
    'Age is not a deficit; it is a repository of experience that deserves a conscious platform.',
    'Community is the antidote to the isolation that modern lifestyles often impose after forty.',
    'Learning never plateaus; it only becomes deeper, more nuanced, and more rewarding.',
    'Digital connection is only a bridge; the true destination is meaningful offline interaction.',
    'Purpose is not found once; it is refactored and rediscovered in every new season of life.',
  ],
} as const;

export const aboutClarity = {
  isTitle: 'What it IS',
  isItems: [
    'A curated ecosystem for conscious growth.',
    'A peer-to-peer network of shared wisdom.',
    'A facilitator of real-world meetups.',
  ],
  isNotTitle: 'What it IS NOT',
  isNotItems: [
    'A typical social media scrolling app.',
    'A retirement planning service.',
    'A generic networking club.',
  ],
} as const;

export type AboutHowItWorksIconId = 'users' | 'lightbulb' | 'calendar' | 'shield';

export const aboutHowItWorks: {
  readonly heading: string;
  readonly pillars: readonly {
    readonly icon: AboutHowItWorksIconId;
    readonly title: string;
    readonly body: string;
  }[];
} = {
  heading: 'How It Works',
  pillars: [
    {
      icon: 'users',
      title: 'Communities',
      body: 'Niche groups focused on specific interests, from Zen philosophy to fitness.',
    },
    {
      icon: 'lightbulb',
      title: 'LifeCrafters',
      body: 'Experienced guides who facilitate sessions and lead deep-dive programs.',
    },
    {
      icon: 'calendar',
      title: 'Events',
      body: 'Local and global meetups that move connections from the screen to reality.',
    },
    {
      icon: 'shield',
      title: 'Governance',
      body: 'A community-driven system that ensures safety, quality, and mutual respect.',
    },
  ],
} as const;

export type AboutTrustIconId = 'badge-check' | 'lock';

export const aboutTrust: {
  readonly heading: string;
  readonly intro: string;
  readonly points: readonly {
    readonly icon: AboutTrustIconId;
    readonly title: string;
    readonly body: string;
  }[];
} = {
  heading: 'Built With Care',
  intro: 'Trust is our foundational currency. We don’t just open the doors; we curate the space.',
  points: [
    {
      icon: 'badge-check',
      title: 'Identity Verification',
      body: 'Every member is verified to ensure a community of real people, not profiles.',
    },
    {
      icon: 'lock',
      title: 'Safety First',
      body: 'Active moderation and clear conduct guidelines maintain a safe, respectful environment.',
    },
  ],
} as const;

export const aboutAudience = {
  forTitle: 'Who This Is For',
  forItems: [
    'Lifelong learners who believe their best work is still ahead.',
    'Professionals transitioning into a more purposeful chapter of life.',
    'Anyone seeking a tribe that values wisdom and authentic connection.',
  ],
  notTitle: 'Who This Is NOT For',
  notItems: [
    'Individuals looking for a passive entertainment platform.',
    'Those who are not comfortable with identity verification or safety rules.',
    'People seeking purely professional/LinkedIn-style networking.',
  ],
} as const;

export const aboutVision = {
  heading: 'Looking Ahead',
  body: 'We are building more than just a platform; we are nurturing an ecosystem where every person over 40 can find their next spark. Our vision includes physical hubs, specialized retreat programs, and a global repository of mid-life wisdom that helps millions move from “winding down” to “powering up”.',
} as const;

export const aboutCta = {
  heading: 'You don’t need to reinvent yourself. You just need to reconnect.',
  memberLabel: 'Join as a Member',
  memberTo: '/membership',
  lifeCrafterLabel: 'Apply as a LifeCrafter',
  lifeCrafterTo: '/lifecrafter-program',
  communitiesLabel: 'Explore Communities',
  communitiesTo: '/communities',
} as const;
