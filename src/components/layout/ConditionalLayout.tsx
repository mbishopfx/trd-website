'use client';

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import Footer from './Footer';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');
  const isBlogRoute = pathname?.startsWith('/blog');

  return (
    <>
      {!isAdminRoute && <Navigation />}
      <main className="flex-grow relative">
        {children}
      </main>
      {!isAdminRoute && !isBlogRoute && <Footer />}
    </>
  );
}

