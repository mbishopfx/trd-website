import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support Center - Get Help with SEO & Digital Marketing | True Rank Digital',
  description: 'Get support for your SEO and digital marketing needs. Contact True Rank Digital for phone support, email assistance, and personalized consultations. 24/7 available.',
  keywords: 'SEO support, digital marketing help, True Rank Digital support, customer service, SEO consultation',
  alternates: {
    canonical: 'https://truerankdigital.com/support',
  },
  openGraph: {
    title: 'Support Center - True Rank Digital',
    description: 'Get the help you need for your digital marketing success. Multiple support options available.',
    url: 'https://truerankdigital.com/support',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
