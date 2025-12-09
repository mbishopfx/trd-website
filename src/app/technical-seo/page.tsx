import type { Metadata } from 'next';
import { Code, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Technical SEO Services | Website Performance Optimization | True Rank Digital',
  description: 'True Rank Digital provides technical SEO services with Core Web Vitals optimization, schema markup engineering, and website performance improvements.',
  keywords: 'technical SEO, Core Web Vitals, True Rank Digital, schema markup, website performance, site speed optimization',
  alternates: { canonical: 'https://truerankdigital.com/technical-seo' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function TechnicalSEOPage() {
  const faqs = [{ question: "What is technical SEO?", answer: "Technical SEO involves optimizing website infrastructure, performance, and code to help search engines crawl, index, and rank your site effectively. True Rank Digital's technical SEO services include Core Web Vitals optimization, schema markup engineering, site speed improvements, mobile optimization, crawl optimization, and technical problem detection using our proprietary software." }];

  return (
    <>
      <GEOSchema pageType="landing" pageData={{ title: "Technical SEO Services with Core Web Vitals Optimization", description: "True Rank Digital delivers technical SEO with website performance optimization and schema markup.", url: "https://truerankdigital.com/technical-seo", keywords: ["technical SEO", "Core Web Vitals"], category: "Technical SEO", serviceType: "Technical Optimization" }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Technical SEO", url: "https://truerankdigital.com/technical-seo" }]} entities={{ primary: ["True Rank Digital", "Technical SEO", "Core Web Vitals"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/technical-seo" category="service" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-indigo-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">Get <strong className="text-brand-primary">Technical SEO Services</strong> with Core Web Vitals Optimization</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> provides <strong>technical SEO services</strong> with Core Web Vitals optimization, schema markup engineering, and website performance improvements.</p><h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">How <strong className="text-brand-primary">Technical SEO</strong> Improves Rankings</h2><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><Code className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Optimize Your <strong className="text-brand-primary">Technical SEO</strong></h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-full hover:bg-indigo-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Get Technical Audit</span></a></div></div></section></article>
    </>
  );
}
