import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { type AboutMaxWidth, about, aboutMaxW } from './about-classes';

export type AboutSectionVariant =
  | 'default'
  | 'cream'
  | 'navy'
  | 'accent'
  /** White / slate surface strip */
  | 'surface';

const sectionVariant: Record<AboutSectionVariant, string> = {
  default: '',
  cream: about.creamBg,
  navy: cn(about.brandNavyBg, 'text-white dark:bg-[#0A1D37]'),
  accent: 'bg-[var(--brand-accent)] text-white',
  surface: 'bg-white dark:bg-slate-900',
};

export interface AboutSectionProps {
  purpose: string;
  variant?: AboutSectionVariant;
  className?: string;
  children: ReactNode;
}

/** Vertical rhythm and optional background for all About `<section>`s. */
export function AboutSection({
  purpose,
  variant = 'default',
  className,
  children,
}: AboutSectionProps) {
  return (
    <section
      className={cn('relative', about.sectionY, sectionVariant[variant], className)}
      data-purpose={purpose}
    >
      {children}
    </section>
  );
}

export interface AboutContainerProps {
  maxWidth?: AboutMaxWidth;
  className?: string;
  children: ReactNode;
}

/** Centered horizontal padding + max width (content width). */
export function AboutContainer({ maxWidth = '7xl', className, children }: AboutContainerProps) {
  return <div className={cn(about.container, aboutMaxW[maxWidth], className)}>{children}</div>;
}
