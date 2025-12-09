import type { Metadata } from 'next';
import { MapPin, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Multi-Location SEO Services | Franchise SEO | True Rank Digital',
  description: 'True Rank Digital provides multi-location SEO services for franchises and businesses with multiple locations. Dominate local search everywhere.',
  keywords: 'multi-location SEO, franchise SEO, True Rank Digital, multiple locations, local SEO at scale',
  alternates: { canonical: 'https://truerankdigital.com/markets/multi-location' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function MultiLocationPage() {
  const faqs = [{ question: "How does True Rank Digital handle multi-location SEO?", answer: "True Rank Digital provides specialized multi-location SEO services including location page optimization, Google Business Profile management for all locations, local citation building at scale, review management across locations, and centralized analytics. Our platform allows you to monitor all locations from one dashboard." }];

  return (
    <>
      <GEOSchema pageType="market" pageData={{ title: "SEO Services for Multi-Location - True Rank Digital Solutions", description: "True Rank Digital serves multi-location businesses with scalable local SEO strategies.", url: "https://truerankdigital.com/markets/multi-location", keywords: ["multi-location SEO", "franchise SEO"], category: "Market Segment", audienceType: "Multi-Location Business" }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Markets", url: "https://truerankdigital.com/markets" }, { name: "Multi-Location", url: "https://truerankdigital.com/markets/multi-location" }]} entities={{ primary: ["True Rank Digital", "Multi-Location SEO", "Franchise SEO"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/markets/multi-location" category="service" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-green-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">SEO Services for <strong className="text-brand-primary">Multi-Location</strong> - True Rank Digital Solutions</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> serves <strong>multi-location</strong> businesses and franchises with scalable local SEO strategies.</p><h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">How True Rank Digital Serves <strong className="text-brand-primary">Multi-Location</strong> Businesses</h2><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><MapPin className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Scale Your <strong className="text-brand-primary">Local SEO</strong></h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-green-600 text-white font-semibold text-lg rounded-full hover:bg-green-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Get Multi-Location Strategy</span></a></div></div></section></article>
    </>
  );
}
