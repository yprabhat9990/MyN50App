import type { InputHTMLAttributes } from 'react';

import { Input } from '@/Components/Ui/Input';
import { Label } from '@/Components/Ui/Label';
import { cn } from '@/lib/utils';

const inputBaseClass =
  'h-11 rounded-xl border-slate-300 bg-white text-sm dark:border-slate-600 dark:bg-slate-900';

const inputErrorClass =
  'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/30 dark:border-red-500 dark:focus-visible:ring-red-500/40';

export interface CoCreationInviteFieldProps {
  id: string;
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  error?: string;
  errorId: string;
  containerClassName?: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  autoComplete?: string;
  inputMode?: InputHTMLAttributes<HTMLInputElement>['inputMode'];
}

export function CoCreationInviteField({
  id,
  label,
  value,
  onValueChange,
  placeholder,
  error,
  errorId,
  containerClassName,
  type = 'text',
  autoComplete,
  inputMode,
}: CoCreationInviteFieldProps) {
  const hasError = Boolean(error);

  return (
    <div className={cn('flex min-w-0 flex-col gap-1', containerClassName)}>
      <Label htmlFor={id} className="sr-only">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        inputMode={inputMode}
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={hasError}
        aria-describedby={hasError ? errorId : undefined}
        className={cn(inputBaseClass, hasError && inputErrorClass)}
      />
      {hasError ? (
        <p id={errorId} className="text-xs text-red-600 dark:text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}
