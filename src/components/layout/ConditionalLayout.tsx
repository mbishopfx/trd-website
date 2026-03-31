'use client';

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import Footer from './Footer';
import SiteCommandAtmosphere from './SiteCommandAtmosphere';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');
  const isBlogRoute = pathname?.startsWith('/blog');
  const isHomeRoute = pathname === '/';

  return (
    <div className={!isAdminRoute ? 'command-theme relative min-h-screen flex flex-col' : 'relative min-h-screen flex flex-col'}>
      {!isAdminRoute && <SiteCommandAtmosphere disableMist={isHomeRoute} />}
      {!isAdminRoute && <Navigation />}
      <main className={`flex-grow relative z-10 ${!isAdminRoute ? 'pt-8' : ''}`}>
        {children}
      </main>
      {!isAdminRoute && !isBlogRoute && <Footer />}
    </div>
  );
}
