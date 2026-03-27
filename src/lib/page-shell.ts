/**
 * Standard `<main>` wrapper for routes rendered inside `HomeLayout`’s content column.
 * Keeps light/dark surfaces aligned across marketing, resources, and policy pages.
 */
export const PAGE_MAIN_SHELL =
  'w-full border-x border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900';

/**
 * Shared warm / deep background for full-bleed marketing routes (Communities, LifeCrafter)
 * and matching section roots — keep in sync with `HomeLayout`’s full-bleed outlet.
 */
export const MARKETING_SURFACE_CLASS = 'bg-[#f8f6f6] dark:bg-[#221610]';

/** `HomeLayout` content column when route is full-bleed marketing (not `PAGE_MAIN_SHELL` width). */
export const HOME_LAYOUT_FULL_BLEED_CLASS = `max-w-none ${MARKETING_SURFACE_CLASS}`;
