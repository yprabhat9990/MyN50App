import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/Components/Ui/Button';
import { cn } from '@/lib/utils';

import { communities } from './communities-classes';

const pill = communities.ctaPill;

export interface CommunitiesExploreButtonProps {
  href: string;
  children?: ReactNode;
  size?: 'md' | 'lg';
  className?: string;
}

/** “Explore Communities” — `Button` + anchor (in-page). */
export function CommunitiesExploreButton({
  href,
  children = 'Explore Communities',
  size = 'md',
  className,
}: CommunitiesExploreButtonProps) {
  return (
    <Button
      asChild
      variant="brandAccent"
      className={cn(pill, size === 'lg' ? communities.ctaPillLg : communities.ctaPillMd, className)}
    >
      <a href={href}>{children}</a>
    </Button>
  );
}

export interface CommunitiesJoinMemberButtonProps {
  to: string;
  children?: ReactNode;
  /** Hero: outline; closing CTA: filled dark / light in dark mode. */
  variant?: 'outline' | 'solid';
  size?: 'md' | 'lg';
  className?: string;
}

/** “Join as Member” — `Button` + `Link`. */
export function CommunitiesJoinMemberButton({
  to,
  children = 'Join as Member',
  variant = 'outline',
  size = 'md',
  className,
}: CommunitiesJoinMemberButtonProps) {
  const sizeClass = size === 'lg' ? communities.ctaPillLg : communities.ctaPillMd;

  if (variant === 'solid') {
    return (
      <Button
        asChild
        variant="secondary"
        className={cn(
          pill,
          sizeClass,
          '!bg-slate-900 !text-white hover:!bg-slate-800 hover:!shadow-xl dark:!bg-white dark:!text-slate-900 dark:hover:!bg-slate-100',
          className
        )}
      >
        <Link to={to}>{children}</Link>
      </Button>
    );
  }

  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        pill,
        sizeClass,
        'border-2 border-slate-200 bg-white font-bold text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
        className
      )}
    >
      <Link to={to}>{children}</Link>
    </Button>
  );
}

export interface CommunitiesLifeCrafterButtonProps {
  to: string;
  children?: ReactNode;
  /** Closing CTA uses large pill. */
  size?: 'md' | 'lg';
  className?: string;
}

/** “Apply as LifeCrafter” — bordered pill + `Link`. */
export function CommunitiesLifeCrafterButton({
  to,
  children = 'Apply as LifeCrafter',
  size = 'lg',
  className,
}: CommunitiesLifeCrafterButtonProps) {
  const sizeClass = size === 'lg' ? communities.ctaPillLg : communities.ctaPillMd;
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        pill,
        sizeClass,
        'border-2 border-slate-900 bg-transparent font-bold hover:bg-slate-900 hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-slate-900',
        className
      )}
    >
      <Link to={to}>{children}</Link>
    </Button>
  );
}

export interface CommunitiesExploreJoinPairProps {
  exploreHref?: string;
  joinMemberTo?: string;
  exploreLabel?: string;
  joinMemberLabel?: string;
  joinMemberVariant?: 'outline' | 'solid';
  size?: 'md' | 'lg';
  gapClassName?: string;
  className?: string;
}

/** Hero row: Explore + Join. */
export function CommunitiesExploreJoinPair({
  exploreHref = '#explore',
  joinMemberTo = '/contact',
  exploreLabel = 'Explore Communities',
  joinMemberLabel = 'Join as Member',
  joinMemberVariant = 'outline',
  size = 'md',
  gapClassName = 'gap-4',
  className,
}: CommunitiesExploreJoinPairProps) {
  return (
    <div className={cn('flex flex-wrap justify-center', gapClassName, className)}>
      <CommunitiesExploreButton href={exploreHref} size={size}>
        {exploreLabel}
      </CommunitiesExploreButton>
      <CommunitiesJoinMemberButton to={joinMemberTo} variant={joinMemberVariant} size={size}>
        {joinMemberLabel}
      </CommunitiesJoinMemberButton>
    </div>
  );
}
