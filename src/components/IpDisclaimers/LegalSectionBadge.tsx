import type { ReactNode } from 'react';

import { Badge } from '@/Components/Ui/Badge';

export function LegalSectionBadge({ children }: { children: ReactNode }) {
  return (
    <Badge
      variant="secondary"
      className="h-auto min-h-0 rounded-lg border-0 bg-[var(--brand-accent)]/10 px-3 py-1 text-sm font-bold text-[var(--brand-accent)]"
    >
      {children}
    </Badge>
  );
}
