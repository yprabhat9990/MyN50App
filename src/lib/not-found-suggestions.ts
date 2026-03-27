import { siteNav } from '@/data/site-layout';

function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
}

function collectPathsAndLabels(): { paths: string[]; labelByPath: Map<string, string> } {
  const pathSet = new Set<string>();
  const labelByPath = new Map<string, string>();

  for (const item of siteNav) {
    if (item.href.startsWith('/') && item.href !== '/') {
      pathSet.add(item.href);
      labelByPath.set(item.href, item.label);
    }
    item.dropdown?.forEach((d) => {
      if (d.href.startsWith('/')) {
        pathSet.add(d.href);
        labelByPath.set(d.href, d.label);
      }
    });
  }

  return { paths: [...pathSet], labelByPath };
}

/** Prefix matches for typo URLs (e.g. `/resou` → Resources). */
export function getNotFoundHints(pathname: string): {
  suggestions: { href: string; label: string }[];
} {
  const { paths, labelByPath } = collectPathsAndLabels();
  const normalized = normalizePathname(pathname);
  const raw = normalized.replace(/^\//, '').toLowerCase();
  if (raw.length < 2) return { suggestions: [] };

  const suggestions = paths
    .filter((p) => {
      const slug = p.replace(/^\//, '').toLowerCase();
      return slug.startsWith(raw) && slug !== raw;
    })
    .sort((a, b) => a.length - b.length)
    .slice(0, 5)
    .map((href) => ({ href, label: labelByPath.get(href) ?? href }));

  return { suggestions };
}
