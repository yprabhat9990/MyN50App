import { MARKETING_SURFACE_CLASS } from '@/lib/page-shell';

/** Shared layout tokens for the LifeCrafter Program marketing page. */
export const lifeCrafterProgram = {
  fontRoot: "font-['Public_Sans',sans-serif]",
  shell: 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
  sectionY: 'py-12',
  /** Page / strip background (same as HomeLayout full-bleed marketing). */
  surfacePage: MARKETING_SURFACE_CLASS,
  /** Rings on journey step circles so the timeline line does not show through. */
  journeyStepRing: 'ring-8 ring-[#f8f6f6] dark:ring-[#221610]',
} as const;
