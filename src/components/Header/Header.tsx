import { Moon, Sun } from 'lucide-react';

import { HeaderAuthButtons } from '@/Components/Header/HeaderAuthButtons';
import type { Theme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

export interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
  className?: string;
}

export function Header({ theme, onToggleTheme, className }: HeaderProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <button
        type="button"
        onClick={onToggleTheme}
        role="switch"
        aria-checked={theme === 'dark'}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        className="relative h-6 w-11 rounded-full border border-slate-300 bg-slate-100 transition-colors hover:bg-slate-200 focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none dark:border-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:focus-visible:ring-slate-500"
      >
        <span className="pointer-events-none absolute top-1/2 left-1 -translate-y-1/2 text-amber-500">
          <Sun className="size-2.5" />
        </span>
        <span className="pointer-events-none absolute top-1/2 right-1 -translate-y-1/2 text-slate-500 dark:text-slate-300">
          <Moon className="size-2.5" />
        </span>
        <span
          className={`absolute top-0.5 flex size-5 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm transition-transform dark:bg-slate-900 dark:text-slate-100 ${
            theme === 'dark' ? 'translate-x-5' : 'translate-x-0.5'
          }`}
        >
          {theme === 'dark' ? <Moon className="size-2.5" /> : <Sun className="size-2.5" />}
        </span>
      </button>
      <HeaderAuthButtons />
    </div>
  );
}
