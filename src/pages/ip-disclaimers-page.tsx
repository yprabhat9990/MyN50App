import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { IpDisclaimersSections } from '@/Components/IpDisclaimers/IpDisclaimersSections';
import { LegalInfoTabBar } from '@/Components/IpDisclaimers/LegalInfoTabBar';
import { ipDisclaimersPageHero, ipDisclaimersSections } from '@/data/ip-disclaimers-data';
import { PAGE_MAIN_SHELL } from '@/lib/page-shell';
import { cn } from '@/lib/utils';

export function IpDisclaimersPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);

  return (
    <main className={cn('flex-1', PAGE_MAIN_SHELL)}>
      <div className="mx-auto w-full max-w-5xl px-6 py-12 md:px-10">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl dark:text-white">
            {ipDisclaimersPageHero.title}
          </h1>
          <p className="max-w-2xl text-lg text-slate-500 dark:text-slate-400">
            {ipDisclaimersPageHero.description}
          </p>
        </div>

        <LegalInfoTabBar />

        <IpDisclaimersSections sections={ipDisclaimersSections} />
      </div>
    </main>
  );
}

export default IpDisclaimersPage;
