import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "True Rank Digital - Get Your Business Found on Google Fast",
  description: "Simple, Powerful, Affordable SEO & Marketing to Grow Your Local Presence with AI-Enhanced Semantic Optimization and Expert-Built Script Automation.",
  keywords: "SEO, Local SEO, Digital Marketing, Google Business Profile, AI SEO, Semantic Optimization, New Jersey SEO",
  authors: [{ name: "Jon J Korkowski", url: "https://truerankdigital.com" }],
  creator: "True Rank Digital",
  publisher: "True Rank Digital",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo-vector.svg', type: 'image/svg+xml', sizes: '32x32' },
      { url: '/logo-checkmark.svg', type: 'image/svg+xml', sizes: '32x32' }
    ],
    shortcut: '/favicon.svg',
    apple: '/logo-vector.svg',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://truerankdigital.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "True Rank Digital - Get Your Business Found on Google Fast",
    description: "AI-Enhanced SEO & Digital Marketing Solutions for Local Business Growth",
    url: 'https://truerankdigital.com',
    siteName: 'True Rank Digital',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'True Rank Digital - AI-Enhanced SEO Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "True Rank Digital - AI-Enhanced SEO Solutions",
    description: "Get Your Business Found on Google Fast with Expert Automation",
    images: ['/images/twitter-image.jpg'],
    creator: '@truerankdigital',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <SchemaMarkup includeAllSchemas={false} />
      </head>
      <body className="font-sans">
        <div className="min-h-screen flex flex-col animated-bg">
          {/* Floating Background Elements */}
          <div className="floating-elements">
            <div className="floating-particle" style={{ left: '10%', animationDelay: '0s' }}></div>
            <div className="floating-particle" style={{ left: '20%', animationDelay: '1s' }}></div>
            <div className="floating-particle" style={{ left: '30%', animationDelay: '2s' }}></div>
            <div className="floating-particle" style={{ left: '40%', animationDelay: '3s' }}></div>
            <div className="floating-particle" style={{ left: '50%', animationDelay: '4s' }}></div>
            <div className="floating-particle" style={{ left: '60%', animationDelay: '5s' }}></div>
            <div className="floating-particle" style={{ left: '70%', animationDelay: '0.5s' }}></div>
            <div className="floating-particle" style={{ left: '80%', animationDelay: '1.5s' }}></div>
            <div className="floating-particle" style={{ left: '90%', animationDelay: '2.5s' }}></div>
          </div>
          
          <Navigation />
          
          <main className="flex-grow relative">
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}
