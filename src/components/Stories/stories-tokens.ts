import { cn } from '@/lib/utils';

/** Typography + layout tokens for the Stories (“Our Story”) page only. */
export const story = {
  fontBody: "font-['Public_Sans',sans-serif]",
  fontSignature: "font-['Great_Vibes',cursive]",
  article:
    'mx-auto max-w-4xl px-4 py-12 text-slate-900 antialiased sm:px-6 lg:px-8 dark:text-slate-100',
  stack: 'mb-12',
  prose: 'text-lg leading-relaxed text-slate-700 dark:text-slate-300',
  headingLg: 'text-3xl font-bold text-slate-900 md:text-4xl dark:text-white',
  headingXl:
    'text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl lg:text-7xl dark:text-white',
} as const;

export const storyHeading = {
  section: 'mb-6 text-3xl font-bold text-slate-900 dark:text-white',
  sectionLg: cn('mb-8', story.headingLg),
  personal: 'mb-8 text-2xl font-bold text-slate-900 dark:text-white',
} as const;
