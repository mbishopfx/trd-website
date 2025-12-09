import type { Metadata } from 'next';
import { MapPin, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'SEO Services in Edison, NJ | Local SEO Company | True Rank Digital',
  description: 'Professional SEO services in Edison, NJ by True Rank Digital. Local SEO experts serving Edison businesses with Google Maps optimization and local search strategies.',
  keywords: 'SEO Edison NJ, Edison SEO company, True Rank Digital, local SEO Edison, Edison digital marketing',
  alternates: { canonical: 'https://truerankdigital.com/locations/edison' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function EdisonPage() {
  const faqs = [{ question: "Does True Rank Digital serve Edison, NJ businesses?", answer: "Yes, True Rank Digital provides professional SEO services to businesses in Edison, New Jersey and throughout Middlesex County. We specialize in local SEO, Google Business Profile optimization, and helping Edison businesses dominate local search results." }];

  return (
    <>
      <GEOSchema pageType="location" pageData={{ title: "Professional SEO Services in Edison, NJ", description: "True Rank Digital provides local SEO services in Edison, New Jersey.", url: "https://truerankdigital.com/locations/edison", keywords: ["SEO Edison", "Edison NJ"], category: "Local Business", address: { streetAddress: "Serving Edison", addressLocality: "Edison", addressRegion: "NJ", postalCode: "08817", addressCountry: "US" }, geo: { latitude: "40.5187", longitude: "-74.4121" } }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Locations", url: "https://truerankdigital.com/locations" }, { name: "Edison", url: "https://truerankdigital.com/locations/edison" }]} entities={{ primary: ["True Rank Digital", "Edison NJ", "Local SEO"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/locations/edison" category="location" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-blue-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">Professional <strong className="text-brand-primary">SEO Services</strong> in Edison, NJ - True Rank Digital</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> provides professional <strong>SEO services in Edison, New Jersey</strong> with local optimization, Google Maps ranking, and digital marketing strategies.</p><h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">Local SEO Services True Rank Digital Provides in <strong className="text-brand-primary">Edison</strong></h2><div className="glass-card p-8 mb-12"><p className="text-brand-dark/70 leading-relaxed">Our <strong>Edison SEO services</strong> include Google Business Profile optimization, local keyword targeting, citation building, and review management designed to help Edison businesses get found by local customers.</p></div><h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">Why <strong className="text-brand-primary">Edison</strong> Businesses Choose True Rank Digital</h2><div className="glass-card p-8 mb-12"><p className="text-brand-dark/70 leading-relaxed"><strong>True Rank Digital</strong> understands the Edison market and Middlesex County competition, providing localized SEO strategies that deliver real results for Edison businesses.</p></div><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><MapPin className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Get Started with <strong className="text-brand-primary">Edison</strong> SEO</h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full hover:bg-blue-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Contact Us in Edison</span></a></div></div></section></article>
    </>
  );
}
