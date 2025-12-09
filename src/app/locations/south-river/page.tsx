import type { Metadata } from 'next';
import { MapPin, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'SEO Services in South River, NJ | Local SEO Company | True Rank Digital',
  description: 'Professional SEO services in South River, NJ by True Rank Digital. Local SEO experts serving South River businesses with local search strategies.',
  keywords: 'SEO South River NJ, South River SEO, True Rank Digital, local SEO South River',
  alternates: { canonical: 'https://truerankdigital.com/locations/south-river' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function SouthRiverPage() {
  const faqs = [{ question: "Does True Rank Digital serve South River, NJ?", answer: "Yes, True Rank Digital provides professional SEO services to businesses in South River, New Jersey. We help South River businesses improve local search visibility and get found on Google." }];

  return (
    <>
      <GEOSchema pageType="location" pageData={{ title: "Professional SEO Services in South River, NJ", description: "True Rank Digital provides local SEO services in South River, New Jersey.", url: "https://truerankdigital.com/locations/south-river", keywords: ["SEO South River", "South River NJ"], category: "Local Business", address: { streetAddress: "Serving South River", addressLocality: "South River", addressRegion: "NJ", postalCode: "08882", addressCountry: "US" }, geo: { latitude: "40.4462", longitude: "-74.3860" } }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Locations", url: "https://truerankdigital.com/locations" }, { name: "South River", url: "https://truerankdigital.com/locations/south-river" }]} entities={{ primary: ["True Rank Digital", "South River NJ", "Local SEO"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/locations/south-river" category="location" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-teal-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">Professional <strong className="text-brand-primary">SEO Services</strong> in South River, NJ</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> provides professional <strong>SEO services in South River, New Jersey</strong>.</p><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><MapPin className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Get Started in <strong className="text-brand-primary">South River</strong></h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-teal-600 text-white font-semibold text-lg rounded-full hover:bg-teal-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Contact Us</span></a></div></div></section></article>
    </>
  );
}
