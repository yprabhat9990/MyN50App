import type { FormEvent } from 'react';

import { CoCreationInviteField } from '@/Components/Home/Co_creation_invite_field';
import { SectionHeading } from '@/Components/Home/Section_heading';
import { Button } from '@/Components/Ui/Button';
import type { CoCreationFieldErrors } from '@/lib/cocreation-validation';

export interface CoCreationInviteFormProps {
  name: string;
  email: string;
  idea: string;
  fieldErrors: CoCreationFieldErrors;
  submitSuccess: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onIdeaChange: (value: string) => void;
}

export function CoCreationInviteForm({
  name,
  email,
  idea,
  fieldErrors,
  submitSuccess,
  onSubmit,
  onNameChange,
  onEmailChange,
  onIdeaChange,
}: CoCreationInviteFormProps) {
  return (
    <div className="space-y-4">
      <SectionHeading title="Co-creation Invite" />
      {submitSuccess ? (
        <p
          className="mx-auto max-w-4xl rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-center text-sm text-emerald-900 dark:border-emerald-900/40 dark:bg-emerald-950/35 dark:text-emerald-100"
          role="status"
        >
          Thanks - your idea was submitted. We will follow up using the email you provided.
        </p>
      ) : null}
      <form
        onSubmit={onSubmit}
        className="mx-auto flex w-full max-w-4xl flex-col gap-3 lg:flex-row lg:items-start"
        noValidate
      >
        <CoCreationInviteField
          id="cocreation-name"
          label="Name"
          value={name}
          onValueChange={onNameChange}
          placeholder="Name"
          error={fieldErrors.name}
          errorId="cocreation-name-error"
          containerClassName="min-w-0 flex-1"
          autoComplete="name"
        />
        <CoCreationInviteField
          id="cocreation-email"
          label="Email"
          value={email}
          onValueChange={onEmailChange}
          placeholder="Email"
          error={fieldErrors.email}
          errorId="cocreation-email-error"
          containerClassName="min-w-0 flex-1"
          type="email"
          inputMode="email"
          autoComplete="email"
        />
        <CoCreationInviteField
          id="cocreation-idea"
          label="Idea"
          value={idea}
          onValueChange={onIdeaChange}
          placeholder="Idea"
          error={fieldErrors.idea}
          errorId="cocreation-idea-error"
          containerClassName="min-w-0 flex-[1.2] lg:min-w-[12rem]"
        />
        <Button
          type="submit"
          className="h-11 shrink-0 rounded-xl bg-[var(--brand-primary)] px-6 text-sm font-semibold text-white hover:bg-[var(--brand-primary-hover)] lg:mt-0 lg:self-start dark:text-[var(--brand-accent)] dark:hover:text-[var(--brand-accent-hover)]"
        >
          Submit Idea
        </Button>
      </form>
    </div>
  );
}
