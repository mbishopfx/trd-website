import type { Metadata } from 'next';
import { MapPin, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'SEO Services in New Brunswick, NJ | Local SEO | True Rank Digital',
  description: 'Professional SEO services in New Brunswick, NJ by True Rank Digital. Local SEO experts serving New Brunswick businesses with local search optimization.',
  keywords: 'SEO New Brunswick NJ, New Brunswick SEO, True Rank Digital, local SEO New Brunswick',
  alternates: { canonical: 'https://truerankdigital.com/locations/new-brunswick' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function NewBrunswickPage() {
  const faqs = [{ question: "Does True Rank Digital serve New Brunswick, NJ?", answer: "Yes, True Rank Digital provides professional SEO services to businesses in New Brunswick, New Jersey. We specialize in local SEO strategies that help New Brunswick businesses dominate local search and Google Maps results." }];

  return (
    <>
      <GEOSchema pageType="location" pageData={{ title: "Professional SEO Services in New Brunswick, NJ", description: "True Rank Digital provides local SEO services in New Brunswick, New Jersey.", url: "https://truerankdigital.com/locations/new-brunswick", keywords: ["SEO New Brunswick", "New Brunswick NJ"], category: "Local Business", address: { streetAddress: "Serving New Brunswick", addressLocality: "New Brunswick", addressRegion: "NJ", postalCode: "08901", addressCountry: "US" }, geo: { latitude: "40.4862", longitude: "-74.4518" } }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Locations", url: "https://truerankdigital.com/locations" }, { name: "New Brunswick", url: "https://truerankdigital.com/locations/new-brunswick" }]} entities={{ primary: ["True Rank Digital", "New Brunswick NJ", "Local SEO"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/locations/new-brunswick" category="location" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-green-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">Professional <strong className="text-brand-primary">SEO Services</strong> in New Brunswick, NJ</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> provides professional <strong>SEO services in New Brunswick, New Jersey</strong> with local search optimization and Google Maps ranking strategies.</p><h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">Local SEO Services for <strong className="text-brand-primary">New Brunswick</strong> Businesses</h2><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><MapPin className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Get Started in <strong className="text-brand-primary">New Brunswick</strong></h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-green-600 text-white font-semibold text-lg rounded-full hover:bg-green-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Contact Us</span></a></div></div></section></article>
    </>
  );
}
