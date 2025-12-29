import type { Metadata } from 'next';
import { Search, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'Organic Search Optimization Services | True Rank Digital',
  description: 'True Rank Digital provides organic search optimization services with keyword research, content optimization, and search visibility enhancement.',
  keywords: 'organic search, search optimization, keyword research, True Rank Digital, content optimization, search visibility',
  alternates: { canonical: 'https://truerankdigital.com/services/organic-search' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function OrganicSearchPage() {
  const faqs = [{ question: "What is organic search optimization?", answer: "Organic search optimization is the process of improving your website's visibility in unpaid search engine results. True Rank Digital provides organic search services including keyword research, content optimization, technical SEO, and link building to increase your rankings and traffic from Google, Bing, and other search engines." }];

  return (
    <>
      <GEOSchema pageType="service" pageData={{ title: "Organic Search Optimization by True Rank Digital", description: "True Rank Digital delivers organic search optimization with keyword research and content optimization.", url: "https://truerankdigital.com/services/organic-search", keywords: ["organic search", "search optimization", "keyword research"], category: "Organic Search", serviceType: "Search Optimization", areaServed: ["United States"] }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Services", url: "https://truerankdigital.com/services" }, { name: "Organic Search", url: "https://truerankdigital.com/services/organic-search" }]} entities={{ primary: ["True Rank Digital", "Organic Search", "Search Optimization"], secondary: ["Keyword Research", "Content Optimization"] }} />
      <ServiceSchema serviceName="Organic Search Optimization" serviceUrl="https://truerankdigital.com/services/organic-search" description="Comprehensive organic search optimization with keyword research, content optimization, technical SEO, and link building to increase rankings in Google, Bing, and other search engines." serviceType="Search Optimization" mentions={[{ type: "Organization", name: "Google", sameAs: "https://www.wikidata.org/wiki/Q95", description: "Primary search engine" }, { type: "SoftwareApplication", name: "Google Search Console", sameAs: "https://www.wikidata.org/wiki/Q1503528", description: "Search optimization tool" }, { type: "Organization", name: "Schema.org", sameAs: "https://www.wikidata.org/wiki/Q845256", description: "Structured data vocabulary" }]} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/services/organic-search" category="service" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-teal-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6"><strong className="text-brand-primary">True Rank Digital</strong> Provides <strong>Organic Search Optimization</strong> Services</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> delivers <strong>organic search optimization</strong> with keyword research, content optimization, and search visibility enhancement for businesses nationwide.</p><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><Search className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Improve Your <strong className="text-brand-primary">Organic Search</strong> Rankings</h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-teal-600 text-white font-semibold text-lg rounded-full hover:bg-teal-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Start Optimization</span></a></div></div></section></article>
    </>
  );
}
