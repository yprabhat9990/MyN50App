import { useState } from 'react';
import type { FormEvent } from 'react';

import { CoCreationInviteForm } from '@/Components/Home/Co_creation_invite_form';
import { DualValuePropositionCard } from '@/Components/Home/Dual_value_proposition_card';
import { SectionHeading } from '@/Components/Home/Section_heading';
import {
  type CoCreationFieldErrors,
  type CoCreationValues,
  hasFieldErrors,
  validateCoCreation,
} from '@/lib/cocreation-validation';
import type { ValueColumn } from '@/types/home';

interface DualValueSectionProps {
  columns: ValueColumn[];
}

export function DualValueSection({ columns }: DualValueSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [idea, setIdea] = useState('');
  const [fieldErrors, setFieldErrors] = useState<CoCreationFieldErrors>({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const clearFieldError = (key: keyof CoCreationFieldErrors) => {
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitSuccess(false);

    const errors = validateCoCreation({ name, email, idea });
    setFieldErrors(errors);
    if (hasFieldErrors(errors)) return;

    const payload: CoCreationValues = {
      name: name.trim(),
      email: email.trim(),
      idea: idea.trim(),
    };
    console.info('[DualValueSection] Co-creation form submitted', payload);
    window.alert(`Name: ${payload.name}\nEmail: ${payload.email}\nIdea:\n${payload.idea}`);

    setSubmitSuccess(true);
    setName('');
    setEmail('');
    setIdea('');
    setFieldErrors({});
  };

  return (
    <section className="border-b border-slate-200 bg-[var(--brand-surface)] px-4 py-4 sm:px-5 dark:border-slate-700">
      <div className="mx-auto w-full max-w-6xl space-y-4">
        <SectionHeading title="Dual Value Proposition" />
        <div className="mx-auto grid w-full max-w-3xl gap-4 md:grid-cols-2">
          {columns.map((column, index) => (
            <DualValuePropositionCard
              key={column.title}
              column={column}
              variant={index === 0 ? 'accent' : 'sky'}
            />
          ))}
        </div>

        <CoCreationInviteForm
          name={name}
          email={email}
          idea={idea}
          fieldErrors={fieldErrors}
          submitSuccess={submitSuccess}
          onSubmit={onSubmit}
          onNameChange={(value) => {
            setName(value);
            setSubmitSuccess(false);
            clearFieldError('name');
          }}
          onEmailChange={(value) => {
            setEmail(value);
            setSubmitSuccess(false);
            clearFieldError('email');
          }}
          onIdeaChange={(value) => {
            setIdea(value);
            setSubmitSuccess(false);
            clearFieldError('idea');
          }}
        />
      </div>
    </section>
  );
}
