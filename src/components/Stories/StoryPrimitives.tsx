import type { ElementType, ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { story } from './stories-tokens';

export interface StoryArticleProps {
  className?: string;
  children: ReactNode;
}

/** Root wrapper: Public Sans + max width column. */
export function StoryArticle({ className, children }: StoryArticleProps) {
  return <div className={cn(story.fontBody, story.article, className)}>{children}</div>;
}

export interface StoryStackProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/** Vertical section with default bottom margin (rhythm). */
export function StoryStack({ as: Comp = 'section', className, children }: StoryStackProps) {
  return <Comp className={cn(story.stack, className)}>{children}</Comp>;
}
