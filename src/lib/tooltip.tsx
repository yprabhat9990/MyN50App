import type { ReactNode } from 'react';

import { Tooltip } from 'radix-ui';

import { cn } from '@/lib/utils';

export function AppTooltipProvider({ children }: { children: ReactNode }) {
  return (
    <Tooltip.Provider delayDuration={250} skipDelayDuration={150}>
      {children}
    </Tooltip.Provider>
  );
}

export interface HoverTooltipProps {
  /** Element that receives hover/focus; use a single child (Radix `asChild`). */
  children: ReactNode;
  /** Tooltip text (e.g. "More"). */
  label: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  contentClassName?: string;
}

/**
 * Hover/focus tooltip. Must be rendered inside {@link AppTooltipProvider}.
 */
export function HoverTooltip({
  children,
  label,
  side = 'top',
  contentClassName,
}: HoverTooltipProps) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          side={side}
          sideOffset={6}
          className={cn(
            'z-[200] max-w-xs rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 shadow-md',
            'dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100',
            contentClassName
          )}
        >
          {label}
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}
