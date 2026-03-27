import { Button } from '@/Components/Ui/Button';
import type { HeroContent } from '@/types/home';

interface HeroSectionProps {
  hero: HeroContent;
}

const collageLayout = [
  'right-[4%] top-[6%] w-[min(268px,34vw)] md:right-[6%] md:top-[10%] md:w-[min(300px,28vw)]',
  'right-[22%] top-[38%] w-[min(240px,30vw)] md:right-[26%] md:top-[42%] md:w-[min(260px,24vw)]',
  'bottom-[8%] right-[8%] w-[min(220px,28vw)] md:bottom-[12%] md:right-[10%] md:w-[min(248px,22vw)]',
] as const;

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section
      className="relative overflow-hidden border-b border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"
      aria-label={hero.imageAlt}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-[#faf9f7] to-[#f3f4f6] dark:from-slate-900 dark:via-slate-900 dark:to-slate-950"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[min(100%,520px)] bg-gradient-to-l from-white/20 to-transparent dark:from-slate-900/80"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
        {hero.collage.map((img, index) => (
          <div
            key={img.src}
            className={`absolute aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-[6px] ring-white/90 dark:ring-slate-900/90 ${collageLayout[index] ?? collageLayout[0]}`}
          >
            <img src={img.src} alt={img.alt} className="h-full w-full object-cover opacity-95" />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#faf9f7] via-transparent to-white/25 dark:from-slate-900 dark:to-slate-900/20"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#faf9f7] to-transparent dark:from-slate-900"
              aria-hidden
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-10 sm:px-5 md:min-h-[min(520px,78vh)] md:flex-row md:items-center md:gap-12 md:py-14 lg:py-16">
        <div className="max-w-xl shrink-0 space-y-5 md:w-[min(100%,440px)] lg:w-[min(100%,480px)]">
          <h1 className="text-[clamp(2rem,4.8vw,3.35rem)] leading-[1.08] font-extrabold tracking-[-0.02em] text-[var(--brand-primary)] dark:text-[var(--brand-wordmark)]">
            {hero.title}
          </h1>
          <p className="max-w-[36ch] text-[clamp(1.05rem,1.6vw,1.25rem)] leading-snug font-medium text-slate-700 dark:text-slate-300">
            {hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button className="h-11 rounded-xl bg-[var(--brand-primary)] px-6 text-sm font-semibold text-white shadow-sm hover:bg-[var(--brand-primary-hover)] dark:text-[var(--brand-accent)] dark:hover:text-[var(--brand-accent-hover)]">
              {hero.primaryAction}
            </Button>
            <Button
              variant="outline"
              className="h-11 rounded-xl border-2 border-[var(--brand-accent)] bg-white px-6 text-sm font-semibold text-[var(--brand-accent)] hover:bg-[var(--brand-accent-soft)] dark:border-[var(--brand-accent)] dark:bg-slate-900 dark:hover:bg-slate-800"
            >
              {hero.secondaryAction}
            </Button>
          </div>
          <p>
            <a
              href="#communities"
              className="text-[15px] font-semibold text-[var(--brand-primary)] underline-offset-4 transition-colors hover:underline dark:text-[var(--brand-tertiary)]"
            >
              {hero.exploreLabel}
            </a>
          </p>
        </div>

        <div className="relative mx-auto flex h-[200px] w-full max-w-md shrink-0 items-center justify-center gap-2 sm:h-[220px] md:hidden">
          {hero.collage.map((img) => (
            <div
              key={img.src}
              className="relative h-full min-h-0 flex-1 overflow-hidden rounded-2xl shadow-md ring-4 ring-white dark:ring-slate-800"
            >
              <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/50 to-transparent dark:from-slate-900/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
