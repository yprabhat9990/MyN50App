import { Link } from 'react-router-dom';

import { Button } from '@/Components/Ui/Button';

const navBtnClass = 'h-8 rounded-md px-2 text-[15px] font-semibold sm:px-2.5';

export interface HeaderAuthButtonsProps {
  loginTo?: string;
  joinTo?: string;
  loginLabel?: string;
  joinLabel?: string;
}

/**
 * Reusable Login + Join actions for the site header. Uses {@link Button} with
 * `brandAccent` for the primary CTA and `ghost` for secondary.
 */
export function HeaderAuthButtons({
  loginTo = '/login',
  joinTo = '/register',
  loginLabel = 'Login',
  joinLabel = 'Join',
}: HeaderAuthButtonsProps) {
  return (
    <div className="flex items-center gap-1.5">
      <Button
        variant="ghost"
        size="sm"
        className={`${navBtnClass} text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white`}
        asChild
      >
        <Link to={loginTo}>{loginLabel}</Link>
      </Button>
      <Button variant="brandAccent" size="sm" className={`${navBtnClass} rounded-lg px-3`} asChild>
        <Link to={joinTo}>{joinLabel}</Link>
      </Button>
    </div>
  );
}
