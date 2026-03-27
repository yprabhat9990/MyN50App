import { MARKETING_SURFACE_CLASS } from '@/lib/page-shell';

/**
 * Shared layout and CTA tokens for Communities marketing sections.
 * Keeps spacing, shell width, and button chrome consistent when composing or reusing blocks.
 */
export const communities = {
  fontRoot: "font-['Public_Sans',sans-serif]",
  shell: 'mx-auto w-full max-w-7xl px-6',
  sectionY: 'py-12',
  surfaceWarm: MARKETING_SURFACE_CLASS,
  /**
   * Applied with `Button` + `asChild` so CTAs use the shared UI button (focus, disabled, variants).
   * Overrides fixed heights from default `Button` sizes.
   */
  ctaPill:
    'h-auto min-h-10 rounded-full px-12 text-base font-bold shadow-none hover:shadow-lg active:translate-y-0',
  ctaPillMd: 'py-4',
  ctaPillLg: 'py-5 text-lg',
} as const;
