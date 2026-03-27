import { Link } from 'react-router-dom';

import mainLogo from '@/assets/BrandLogo/mainLogo.png';

interface BrandLockupProps {
  brandLabel: string;
}

export function BrandLockup({ brandLabel }: BrandLockupProps) {
  return (
    <Link
      to="/"
      className="flex shrink-0 items-center rounded-md text-inherit no-underline outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2"
      aria-label={`${brandLabel} — home`}
    >
      <img
        src={mainLogo}
        alt=""
        className="h-14 w-auto max-w-[min(100%,16rem)] object-contain object-left sm:h-16"
        decoding="async"
      />
    </Link>
  );
}
