/** Shared visual tokens for About page sections — keep in sync across sections. */
export const about = {
  sectionY: 'py-12',
  brandNavy: 'text-[#0A1D37]',
  brandNavyBg: 'bg-[#0A1D37]',
  creamBg: 'bg-slate-50 dark:bg-slate-800/40',
  container: 'mx-auto w-full px-4 sm:px-6 lg:px-8',
  heading2: 'text-3xl font-bold text-slate-900 dark:text-slate-100',
  heading2Lg: 'text-4xl font-bold',
  bodyLead: 'text-xl leading-relaxed text-slate-600 dark:text-slate-400',
  cardBorder:
    'rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900',
  ctaButtonRow: 'flex flex-col items-center justify-center gap-4 md:flex-row',
  ctaButton: 'h-auto w-full rounded-xl px-8 py-4 text-base font-bold md:w-auto',
} as const;

export const aboutMaxW = {
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '7xl': 'max-w-7xl',
} as const;

export type AboutMaxWidth = keyof typeof aboutMaxW;
