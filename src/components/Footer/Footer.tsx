import { Link } from 'react-router-dom';

import { cn } from '@/lib/utils';
import type { FooterColumn as FooterColumnData } from '@/types/layout';

interface FooterProps {
  column: FooterColumnData;
  pathname: string;
}

/** Maps footer column + link label → in-app path. */
const FOOTER_ROUTES: Partial<Record<string, Record<string, string>>> = {
  Company: {
    About: '/about',
    Team: '/team',
    Careers: '/careers',
    'Contact Us': '/contact',
  },
  Programs: {
    LifeCrafter: '/lifecrafter-program',
    Membership: '/membership',
  },
  Resources: {
    Blog: '/blogs',
    Guidelines: '/guidelines',
    Support: '/contact',
  },
  Legal: {
    'Privacy Policy': '/privacy-policy',
    'Terms of Use': '/terms',
    'Instructor Policy': '/instructor-policy',
  },
};

function footerLinkHref(columnTitle: string, link: string): string {
  return FOOTER_ROUTES[columnTitle]?.[link] ?? '#';
}

export function Footer({ column, pathname }: FooterProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-base font-semibold">{column.title}</h3>
      <ul className="space-y-1.5 text-sm text-white/90">
        {column.links.map((link) => {
          const href = footerLinkHref(column.title, link);
          const routed = href !== '#';
          const isActive = routed && pathname === href;

          const linkClass = cn(
            'transition-colors hover:text-white',
            isActive && 'font-semibold text-[var(--brand-accent)]'
          );

          if (routed) {
            return (
              <li key={link}>
                <Link to={href} className={linkClass} aria-current={isActive ? 'page' : undefined}>
                  {link}
                </Link>
              </li>
            );
          }

          return (
            <li key={link}>
              <a href={href} className={linkClass}>
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
