import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional SEO Services in East Brunswick, NJ | True Rank Digital',
  description: 'Expert SEO and digital marketing services for East Brunswick businesses. Local SEO, Google Business Profile optimization, website development, and custom digital solutions.',
  keywords: 'East Brunswick SEO services, East Brunswick digital marketing, local SEO East Brunswick NJ, Google Business Profile East Brunswick, website development East Brunswick',
  openGraph: {
    title: 'Professional SEO Services in East Brunswick, NJ | True Rank Digital',
    description: 'Expert SEO and digital marketing services for East Brunswick businesses. Local SEO, Google Business Profile optimization, and custom digital solutions.',
    url: 'https://truerankdigital.com/east-brunswick-services',
    type: 'website',
  },
};

export default function EastBrunswickServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

