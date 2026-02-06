import type { Metadata } from 'next';
import { TrendingUp, MapPin, Star } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema, { generateServiceFAQs } from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Local SEO Growth Services | Get More Local Customers | True Rank Digital',
  description: 'Get more local customers with True Rank Digital\'s local SEO growth services featuring grid map ranking, Google Business Profile optimization, and local search dominance strategies.',
  keywords: 'local SEO growth, get more customers, True Rank Digital, local business growth, Google Maps ranking, local search, customer acquisition',
  openGraph: {
    title: 'Local SEO Growth | Get More Local Customers | True Rank Digital',
    description: 'Grow your local business with proven SEO strategies and proprietary technology.',
    url: 'https://truerankdigital.com/local-seo-growth',
    type: 'website',
  },
  alternates: { canonical: 'https://truerankdigital.com/local-seo-growth' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function LocalSEOGrowthPage() {
  const faqs = generateServiceFAQs('localSEO', [
    {
      question: "How quickly can I get more local customers with SEO?",
      answer: "Timelines vary based on your market, competition, and starting point. True Rank Digital's local SEO growth services focus on measurable visibility improvements over time using grid map ranking verification and Google Business Profile optimization strategies designed to help customers find you on Google and Google Maps."
    }
  ]);

  return (
    <>
      <GEOSchema pageType="landing" pageData={{ title: "Get More Local Customers with Local SEO Growth Services", description: "True Rank Digital helps local businesses get more customers with proven local SEO strategies, grid map ranking, and Google Business Profile optimization.", url: "https://truerankdigital.com/local-seo-growth", keywords: ["local SEO growth", "get more customers", "local business"], category: "Local SEO", serviceType: "Local Business Growth" }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Local SEO Growth", url: "https://truerankdigital.com/local-seo-growth" }]} entities={{ primary: ["True Rank Digital", "Local SEO Growth", "Local Customers"], secondary: ["Google Maps", "Google Business Profile", "Local Search"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/local-seo-growth" category="service" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-green-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">Get More <strong className="text-brand-primary">Local Customers</strong> with Local SEO Growth Services from <strong className="text-brand-primary">True Rank Digital</strong></h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> helps local businesses get more customers with proven <strong>local SEO strategies</strong>, proprietary grid map ranking verification, and <strong>Google Business Profile optimization</strong> designed for maximum local visibility.</p><h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">How <strong className="text-brand-primary">Local SEO Growth</strong> Services Work for Your Business</h2><div className="glass-card p-8 mb-12"><p className="text-brand-dark/70 leading-relaxed"><strong>True Rank Digital's local SEO growth services</strong> combine <strong>grid map ranking analysis</strong>, competitor intelligence monitoring, and <strong>Google Maps optimization</strong> to help your business dominate local search results and attract more nearby customers.</p></div><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><MapPin className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Start Getting More <strong className="text-brand-primary">Local Customers</strong> Today</h2><a href="/free-audit" className="inline-flex items-center space-x-2 px-8 py-4 bg-green-600 text-white font-semibold text-lg rounded-full hover:bg-green-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Get Free Local SEO Audit</span></a></div></div></section></article>
    </>
  );
}
