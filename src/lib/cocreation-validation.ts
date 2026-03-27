const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export interface CoCreationValues {
  name: string;
  email: string;
  idea: string;
}

export interface CoCreationFieldErrors {
  name?: string;
  email?: string;
  idea?: string;
}

export function validateCoCreation(values: CoCreationValues): CoCreationFieldErrors {
  const errors: CoCreationFieldErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const idea = values.idea.trim();

  if (name.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  } else if (name.length > 80) {
    errors.name = 'Name is too long (max 80 characters).';
  } else if (!/[\p{L}]/u.test(name)) {
    errors.name = 'Name should include letters.';
  }

  if (!email) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_RE.test(email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (idea.length < 10) {
    errors.idea = 'Idea must be at least 10 characters.';
  } else if (idea.length > 2000) {
    errors.idea = 'Idea is too long (max 2000 characters).';
  }

  return errors;
}

export function hasFieldErrors(errors: CoCreationFieldErrors): boolean {
  return Object.keys(errors).length > 0;
}
