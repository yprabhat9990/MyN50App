const socialLinks = [
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
] as const;

export function SiteFooter() {
  return (
    <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <p className="shrink-0">
        © {new Date().getFullYear()} MyNext50 Platform. All rights reserved.
      </p>
      <nav aria-label="Social" className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {socialLinks.map(({ label, href }) => (
          <a key={label} href={href} className="transition-colors hover:text-white/90">
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}
