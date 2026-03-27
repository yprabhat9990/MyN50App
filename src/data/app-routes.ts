import { siteNav } from './site-layout';

/** Nav paths that render real page components (not placeholders). */
const IMPLEMENTED_ROUTE_SEGMENTS = new Set([
  'about',
  'stories',
  'communities',
  'lifecrafter-program',
  'terms',
  'privacy-policy',
  'instructor-policy',
  'contact',
  'events',
  'guidelines',
  'policies',
  'payment-refund-policy',
  'ip-disclaimers',
  'resources',
  'resources/library',
]);

/** Footer-only paths (not listed in `siteNav`). */
const EXTRA_PLACEHOLDER_SEGMENTS: { path: string; title: string }[] = [
  { path: 'login', title: 'Login' },
  { path: 'register', title: 'Register' },
  { path: 'team', title: 'Team' },
  { path: 'careers', title: 'Careers' },
  { path: 'membership', title: 'Membership' },
  { path: 'resources/gallery', title: 'Gallery' },
];

/** Derives `/…` placeholder routes from nav + extras; deduped by path. */
function buildPlaceholderRouteConfigs(): { path: string; title: string }[] {
  const out: { path: string; title: string }[] = [];
  const seen = new Set<string>();

  const push = (path: string, title: string) => {
    if (IMPLEMENTED_ROUTE_SEGMENTS.has(path)) return;
    if (seen.has(path)) return;
    seen.add(path);
    out.push({ path, title });
  };

  for (const item of siteNav) {
    if (item.href.startsWith('/') && item.href !== '/') {
      push(item.href.slice(1), item.label);
    }
    item.dropdown?.forEach((d) => {
      if (d.href.startsWith('/')) push(d.href.slice(1), d.label);
    });
  }
  for (const extra of EXTRA_PLACEHOLDER_SEGMENTS) {
    push(extra.path, extra.title);
  }
  return out;
}

export const placeholderRouteConfigs = buildPlaceholderRouteConfigs();
