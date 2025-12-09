import type { Metadata } from 'next';
import { MapPin, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'SEO Services in North Brunswick, NJ | Local SEO | True Rank Digital',
  description: 'Professional SEO services in North Brunswick, NJ by True Rank Digital. Local SEO experts serving North Brunswick with local search optimization.',
  keywords: 'SEO North Brunswick NJ, North Brunswick SEO, True Rank Digital, local SEO North Brunswick',
  alternates: { canonical: 'https://truerankdigital.com/locations/north-brunswick' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function NorthBrunswickPage() {
  const faqs = [{ question: "Does True Rank Digital serve North Brunswick, NJ?", answer: "Yes, True Rank Digital provides professional SEO services to businesses in North Brunswick, New Jersey. We help North Brunswick businesses improve local search visibility and Google Maps rankings." }];

  return (
    <>
      <GEOSchema pageType="location" pageData={{ title: "Professional SEO Services in North Brunswick, NJ", description: "True Rank Digital provides local SEO services in North Brunswick, New Jersey.", url: "https://truerankdigital.com/locations/north-brunswick", keywords: ["SEO North Brunswick", "North Brunswick NJ"], category: "Local Business", address: { streetAddress: "Serving North Brunswick", addressLocality: "North Brunswick", addressRegion: "NJ", postalCode: "08902", addressCountry: "US" }, geo: { latitude: "40.4517", longitude: "-74.4794" } }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Locations", url: "https://truerankdigital.com/locations" }, { name: "North Brunswick", url: "https://truerankdigital.com/locations/north-brunswick" }]} entities={{ primary: ["True Rank Digital", "North Brunswick NJ", "Local SEO"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/locations/north-brunswick" category="location" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-purple-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">Professional <strong className="text-brand-primary">SEO Services</strong> in North Brunswick, NJ</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> provides professional <strong>SEO services in North Brunswick, New Jersey</strong>.</p><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><MapPin className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Get Started in <strong className="text-brand-primary">North Brunswick</strong></h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-purple-600 text-white font-semibold text-lg rounded-full hover:bg-purple-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Contact Us</span></a></div></div></section></article>
    </>
  );
}
