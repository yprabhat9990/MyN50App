import { CheckCircle2 } from 'lucide-react';

import { Card } from '@/Components/Ui/Card';

export interface GuidelinesExpectedConductRowProps {
  title: string;
  body: string;
}

export function GuidelinesExpectedConductRow({ title, body }: GuidelinesExpectedConductRowProps) {
  return (
    <Card className="flex flex-row gap-4 gap-y-0 rounded-lg border-0 bg-slate-100 p-4 shadow-none ring-0 dark:bg-slate-900/50">
      <CheckCircle2
        className="mt-0.5 size-5 shrink-0 text-green-600 dark:text-green-500"
        aria-hidden
      />
      <div>
        <p className="mb-1 font-bold text-slate-900 dark:text-white">{title}</p>
        <p className="text-sm text-slate-600 dark:text-slate-400">{body}</p>
      </div>
    </Card>
  );
}
