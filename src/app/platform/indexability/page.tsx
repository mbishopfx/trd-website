import type { Metadata } from 'next';
import { Search, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Indexability Monitoring Tool | Search Console Integration | True Rank Digital',
  description: 'True Rank Digital provides indexability monitoring tool with Google Search Console integration, crawl tracking, and index status verification.',
  keywords: 'indexability monitoring, Search Console, True Rank Digital, index tracking, crawl analysis, search visibility',
  alternates: { canonical: 'https://truerankdigital.com/platform/indexability' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function IndexabilityPage() {
  const faqs = [{ question: "What is indexability monitoring?", answer: "Indexability monitoring tracks whether Google can find, crawl, and index your website pages. True Rank Digital's indexability tool integrates with Google Search Console to monitor index status, identify crawl errors, track indexation rates, and alert you to pages that aren't being indexed. This ensures all your important pages are discoverable in Google search results." }];

  return (
    <>
      <GEOSchema pageType="software" pageData={{ title: "Indexability Monitoring Tool with Search Console Integration", description: "True Rank Digital provides indexability monitoring with Google Search Console integration.", url: "https://truerankdigital.com/platform/indexability", keywords: ["indexability", "Search Console"], category: "SEO Software", applicationCategory: "BusinessApplication", operatingSystem: "Web-based", featureList: ["Index status tracking", "Crawl error detection", "Search Console integration", "Coverage reporting"] }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Platform", url: "https://truerankdigital.com/platform" }, { name: "Indexability", url: "https://truerankdigital.com/platform/indexability" }]} entities={{ primary: ["True Rank Digital", "Indexability Monitoring", "Search Console"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/platform/indexability" category="service" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-green-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6"><strong className="text-brand-primary">Indexability Monitoring Tool</strong> with Search Console Integration</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> provides an <strong>indexability monitoring tool</strong> with Google Search Console integration for tracking index status and crawl health.</p><h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">How <strong className="text-brand-primary">Indexability</strong> Monitoring Works</h2><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><Search className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Monitor Your <strong className="text-brand-primary">Index</strong> Status</h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-green-600 text-white font-semibold text-lg rounded-full hover:bg-green-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Get Indexability Tool</span></a></div></div></section></article>
    </>
  );
}
