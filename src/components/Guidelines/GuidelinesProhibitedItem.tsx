import { XCircle } from 'lucide-react';

export interface GuidelinesProhibitedItemProps {
  label: string;
  description: string;
}

export function GuidelinesProhibitedItem({ label, description }: GuidelinesProhibitedItemProps) {
  return (
    <li className="flex items-start gap-3">
      <XCircle className="size-5 shrink-0 text-red-500" aria-hidden />
      <p className="text-slate-600 dark:text-slate-400">
        <strong className="text-slate-900 dark:text-white">{label}:</strong> {description}
      </p>
    </li>
  );
}
