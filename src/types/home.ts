export interface HeroCollageImage {
  src: string;
  alt: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  primaryAction: string;
  secondaryAction: string;
  exploreLabel: string;
  collage: HeroCollageImage[];
  imageAlt: string;
}

export interface CommunitiesIntro {
  title: string;
  description: string;
}

export interface CommunityCardData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  accentClasses: string;
  cardBgClass: string;
  badgeBgClass: string;
}

export interface CommunityTeaser {
  title: string;
  description: string;
  cardBgClass: string;
}

export interface ProcessStep {
  title: string;
  icon: 'user-check' | 'users' | 'calendar';
}

export interface ValueColumn {
  title: string;
  bullets: string[];
  cta: string;
}

export interface HomePageData {
  hero: HeroContent;
  exists: CommunitiesIntro;
  communities: CommunityCardData[];
  communityTeasers: CommunityTeaser[];
  communitiesExploreCta: string;
  processSteps: ProcessStep[];
  trustItems: string[];
  valueColumns: ValueColumn[];
}
