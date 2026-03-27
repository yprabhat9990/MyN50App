import type { MouseEvent } from 'react';
import { Fragment, useEffect, useRef, useState } from 'react';

import { HoverTooltip } from '@/lib/tooltip';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/types/layout';

import { isNavDropdownChildActive, isNavItemActive } from './nav-active';

export type NavbarVariant = 'desktop' | 'mobile' | 'both';

export interface NavbarProps {
  items: NavItem[];
  pathname: string;
  onNavClick: (href: string) => void;
  variant?: NavbarVariant;
  ariaLabel?: string;
  desktopAriaLabel?: string;
  mobileAriaLabel?: string;
  className?: string;
  desktopClassName?: string;
  mobileClassName?: string;
  getItemKey?: (item: NavItem, index: number) => string;
}

function isExternalHref(href: string) {
  return href.startsWith('http://') || href.startsWith('https://');
}

function handleLinkClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  onNavClick: (href: string) => void
) {
  if (isExternalHref(href)) return;
  event.preventDefault();
  onNavClick(href);
}

const linkClass = (active: boolean) =>
  active
    ? 'border-b-2 border-[var(--brand-accent)] px-0 py-1 text-[15px] font-semibold text-[var(--brand-accent)] transition-colors'
    : 'border-b-2 border-transparent px-0 py-1 text-[15px] font-semibold text-slate-700 transition-colors hover:text-[var(--brand-accent)] dark:text-slate-300 dark:hover:text-[var(--brand-accent)]';

const mobilePillClass = (active: boolean) =>
  active
    ? 'rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white underline decoration-2 decoration-[var(--brand-accent)] underline-offset-4 dark:bg-slate-100 dark:text-slate-900'
    : 'rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200';

export function Navbar({
  items,
  pathname,
  onNavClick,
  variant = 'both',
  ariaLabel = 'Main',
  desktopAriaLabel,
  mobileAriaLabel,
  className,
  desktopClassName,
  mobileClassName,
  getItemKey,
}: NavbarProps) {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (openDropdownIndex === null) return;
    const onPointerDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (desktopDropdownRef.current?.contains(t) || mobileDropdownRef.current?.contains(t)) {
        return;
      }
      setOpenDropdownIndex(null);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [openDropdownIndex]);

  const showDesktop = variant === 'desktop' || variant === 'both';
  const showMobile = variant === 'mobile' || variant === 'both';

  const desktopNav = showDesktop && (
    <nav
      className={cn(
        'hidden items-center justify-center gap-6 md:flex lg:gap-10',
        variant === 'desktop' && className,
        desktopClassName
      )}
      aria-label={desktopAriaLabel ?? ariaLabel}
      ref={desktopDropdownRef}
    >
      {items.map((item, index) => {
        const active = isNavItemActive(item, pathname);
        const key = getItemKey?.(item, index) ?? `${item.label}-${item.href}`;
        const external = isExternalHref(item.href);

        if (item.dropdown?.length) {
          const open = openDropdownIndex === index;
          const dropdownChildActive = isNavDropdownChildActive(item, pathname);
          return (
            <div key={key} className="relative flex items-center gap-6 lg:gap-10">
              <a
                href={item.href}
                aria-current={active ? 'page' : undefined}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                onClick={(event) => handleLinkClick(event, item.href, onNavClick)}
                className={linkClass(active)}
              >
                {item.label}
              </a>
              <HoverTooltip label="More">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-haspopup="true"
                  aria-label="More"
                  className={cn(
                    'min-w-[1.25rem] rounded px-0.5 pb-1 text-[15px] leading-none font-bold tracking-widest text-slate-700 transition-colors hover:bg-slate-100 hover:text-[var(--brand-accent)] dark:text-slate-300 dark:hover:bg-slate-800',
                    (dropdownChildActive || open) && 'text-[var(--brand-accent)]'
                  )}
                  onClick={() => setOpenDropdownIndex(open ? null : index)}
                >
                  ...
                </button>
              </HoverTooltip>
              {open && (
                <div
                  className="absolute top-full left-0 z-50 mt-1.5 min-w-[14rem] overflow-hidden rounded-lg border border-slate-200 bg-white py-1 shadow-xl ring-1 ring-black/5 dark:border-slate-600 dark:bg-slate-900 dark:ring-white/10"
                  role="menu"
                >
                  <ul className="flex flex-col divide-y divide-slate-200 dark:divide-slate-600">
                    {item.dropdown.map((sub) => {
                      const subExternal = isExternalHref(sub.href);
                      const subActive = sub.href.startsWith('/') && pathname === sub.href;
                      return (
                        <li key={sub.href}>
                          <a
                            href={sub.href}
                            role="menuitem"
                            aria-current={subActive ? 'page' : undefined}
                            className={cn(
                              'block px-4 py-2.5 text-left text-[15px] font-medium transition-colors',
                              'hover:bg-slate-50 dark:hover:bg-slate-800/80',
                              subActive
                                ? 'bg-[var(--brand-accent)]/12 font-semibold text-[var(--brand-accent)] dark:bg-[var(--brand-accent)]/18'
                                : 'text-slate-700 dark:text-slate-200'
                            )}
                            {...(subExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                            onClick={(event) => {
                              setOpenDropdownIndex(null);
                              handleLinkClick(event, sub.href, onNavClick);
                            }}
                          >
                            {sub.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          );
        }

        return (
          <a
            key={key}
            href={item.href}
            aria-current={active ? 'page' : undefined}
            {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
            onClick={(event) => handleLinkClick(event, item.href, onNavClick)}
            className={linkClass(active)}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );

  const mobileNav = showMobile && (
    <nav
      className={cn(
        'border-t border-slate-200 px-3 py-2 md:hidden dark:border-slate-700',
        variant === 'mobile' && className,
        mobileClassName
      )}
      aria-label={mobileAriaLabel ?? ariaLabel}
      ref={mobileDropdownRef}
    >
      <div className="mx-auto w-full max-w-6xl overflow-x-auto">
        <div className="flex min-w-max flex-wrap items-center gap-2">
          {items.map((item, index) => {
            const active = isNavItemActive(item, pathname);
            const key = getItemKey?.(item, index) ?? `mobile-${item.label}-${item.href}`;
            const external = isExternalHref(item.href);

            if (item.dropdown?.length) {
              const open = openDropdownIndex === index;
              const dropdownChildActive = isNavDropdownChildActive(item, pathname);
              return (
                <Fragment key={key}>
                  <span className="inline-flex items-center gap-2">
                    <a
                      href={item.href}
                      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      onClick={(event) => handleLinkClick(event, item.href, onNavClick)}
                      className={cn(mobilePillClass(active), 'inline-flex')}
                    >
                      {item.label}
                    </a>
                    <HoverTooltip label="More">
                      <button
                        type="button"
                        aria-expanded={open}
                        aria-label="More"
                        className={cn(
                          'inline-flex h-8 min-w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white px-1.5 pb-1 text-xs leading-none font-bold tracking-widest text-slate-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200',
                          (dropdownChildActive || open) &&
                            'border-[var(--brand-accent)] text-[var(--brand-accent)]'
                        )}
                        onClick={() => setOpenDropdownIndex(open ? null : index)}
                      >
                        ...
                      </button>
                    </HoverTooltip>
                  </span>
                  {open && (
                    <div
                      className="basis-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-md ring-1 ring-black/5 dark:border-slate-600 dark:bg-slate-900 dark:ring-white/10"
                      role="menu"
                    >
                      <ul className="flex flex-col divide-y divide-slate-200 dark:divide-slate-600">
                        {item.dropdown.map((sub) => {
                          const subActive = sub.href.startsWith('/') && pathname === sub.href;
                          return (
                            <li key={sub.href} className="flex">
                              <a
                                href={sub.href}
                                role="menuitem"
                                aria-current={subActive ? 'page' : undefined}
                                className={cn(
                                  'flex w-full items-center px-4 py-3 text-left text-xs font-medium transition-colors sm:text-sm',
                                  'active:bg-slate-100 dark:active:bg-slate-800',
                                  subActive
                                    ? 'bg-[var(--brand-accent)]/12 font-semibold text-[var(--brand-accent)] ring-1 ring-[var(--brand-accent)]/30 ring-inset dark:bg-[var(--brand-accent)]/18'
                                    : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800/80'
                                )}
                                onClick={(event) => {
                                  setOpenDropdownIndex(null);
                                  handleLinkClick(event, sub.href, onNavClick);
                                }}
                              >
                                {sub.label}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </Fragment>
              );
            }

            return (
              <a
                key={key}
                href={item.href}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                onClick={(event) => handleLinkClick(event, item.href, onNavClick)}
                className={mobilePillClass(active)}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );

  if (variant === 'both') {
    return (
      <Fragment>
        {desktopNav}
        {mobileNav}
      </Fragment>
    );
  }

  if (variant === 'desktop') {
    return desktopNav;
  }

  return mobileNav;
}
