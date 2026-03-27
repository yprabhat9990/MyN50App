interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({ title, description, className = '' }: SectionHeadingProps) {
  return (
    <div className={`space-y-2 text-center ${className}`}>
      <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] font-bold tracking-tight text-[var(--brand-primary)] dark:text-slate-100">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto max-w-3xl text-[clamp(0.9rem,1.8vw,1rem)] text-slate-600 dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}
