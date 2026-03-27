import { Link } from 'react-router-dom';

import { Mail, MapPin } from 'lucide-react';

import { Button } from '@/Components/Ui/Button';
import { Card, CardContent } from '@/Components/Ui/Card';
import {
  type IpDisclaimersSection,
  ipDisclaimersCookieCards,
  ipDisclaimersGrievanceCta,
} from '@/data/ip-disclaimers-data';

import { LegalSectionBadge } from './LegalSectionBadge';

function SectionHeader({ badge, title }: { badge: string; title: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <LegalSectionBadge>{badge}</LegalSectionBadge>
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
    </div>
  );
}

function ParagraphBlock({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className="max-w-none leading-relaxed text-slate-600 dark:text-slate-300">
      {paragraphs.map((p, i) => (
        <p key={i} className={i < paragraphs.length - 1 ? 'mb-4' : undefined}>
          {p}
        </p>
      ))}
    </div>
  );
}

export function IpDisclaimersSections({ sections }: { sections: readonly IpDisclaimersSection[] }) {
  return (
    <div className="space-y-16">
      {sections.map((section) => {
        const { id, badge, title, body } = section;
        const sectionProps = { className: 'scroll-mt-28', ...(id ? { id } : {}) };

        switch (body.kind) {
          case 'paragraphs':
            return (
              <section key={`${badge}-${title}`} {...sectionProps}>
                <SectionHeader badge={badge} title={title} />
                {body.paragraphs.length === 1 ? (
                  <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                    {body.paragraphs[0]}
                  </p>
                ) : (
                  <ParagraphBlock paragraphs={body.paragraphs} />
                )}
              </section>
            );

          case 'quote':
            return (
              <section key={`${badge}-${title}`} {...sectionProps}>
                <SectionHeader badge={badge} title={title} />
                <div className="rounded-r-xl border-l-4 border-[var(--brand-accent)] bg-[var(--brand-accent)]/10 p-6 dark:bg-slate-800/60">
                  <p className="leading-relaxed text-slate-700 italic dark:text-slate-300">
                    &ldquo;{body.text}&rdquo;
                  </p>
                </div>
              </section>
            );

          case 'cookies':
            return (
              <section key={`${badge}-${title}`} {...sectionProps}>
                <SectionHeader badge={badge} title={title} />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {ipDisclaimersCookieCards.map(({ title: cardTitle, description }) => (
                    <Card
                      key={cardTitle}
                      className="gap-0 border border-slate-200 bg-white py-0 ring-0 dark:border-slate-700 dark:bg-slate-800/50"
                    >
                      <CardContent className="px-6 py-6">
                        <h3 className="mb-2 font-bold text-[var(--brand-accent)]">{cardTitle}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            );

          case 'grievance':
            return (
              <section key={`${badge}-${title}`} {...sectionProps}>
                <SectionHeader badge={badge} title={title} />
                <Card className="gap-0 border border-[var(--brand-accent)]/20 bg-[var(--brand-accent)]/5 py-0 ring-0">
                  <CardContent className="flex flex-col gap-8 p-8 md:flex-row md:items-center">
                    <div className="flex-1">
                      <p className="mb-4 text-slate-600 dark:text-slate-300">{body.intro}</p>
                      <div className="flex flex-col gap-2">
                        <span className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                          <Mail
                            className="size-[18px] shrink-0 text-[var(--brand-accent)]"
                            aria-hidden
                          />
                          {body.email}
                        </span>
                        <span className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                          <MapPin
                            className="size-[18px] shrink-0 text-[var(--brand-accent)]"
                            aria-hidden
                          />
                          {body.address}
                        </span>
                      </div>
                    </div>
                    <Button
                      asChild
                      variant="brandAccent"
                      size="lg"
                      className="h-auto min-h-11 w-full shrink-0 rounded-xl px-8 py-3 font-bold md:w-auto"
                    >
                      <Link to={ipDisclaimersGrievanceCta.href}>
                        {ipDisclaimersGrievanceCta.label}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </section>
            );

          case 'policy-updates':
            return (
              <section key={`${badge}-${title}`} {...sectionProps}>
                <SectionHeader badge={badge} title={title} />
                <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                  {body.paragraphs[0]}
                </p>
                <p className="mt-4 text-sm font-bold text-[var(--brand-accent)] italic">
                  {body.lastUpdated}
                </p>
              </section>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
