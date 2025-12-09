import type { Metadata } from 'next';
import { FileText, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Content Marketing Services | SEO Content Creation | True Rank Digital',
  description: 'True Rank Digital provides content marketing services with SEO-optimized content creation, content strategy, and semantic optimization for maximum search visibility.',
  keywords: 'content marketing, SEO content, True Rank Digital, content creation, content strategy, semantic optimization',
  alternates: { canonical: 'https://truerankdigital.com/content-marketing' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function ContentMarketingPage() {
  const faqs = [{ question: "What makes True Rank Digital's content marketing different?", answer: "True Rank Digital's content marketing services combine SEO optimization with semantic content structure optimized for AI search engines. Our content includes proper schema markup, LLM.txt optimization, and entity-rich formatting that helps your content rank in both traditional Google search and AI-powered answer engines like ChatGPT and Perplexity." }];

  return (
    <>
      <GEOSchema pageType="landing" pageData={{ title: "Content Marketing Services with SEO Optimization", description: "True Rank Digital provides content marketing with SEO-optimized content creation.", url: "https://truerankdigital.com/content-marketing", keywords: ["content marketing", "SEO content"], category: "Content Marketing", serviceType: "Content Services" }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Content Marketing", url: "https://truerankdigital.com/content-marketing" }]} entities={{ primary: ["True Rank Digital", "Content Marketing", "SEO Content"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/content-marketing" category="service" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-amber-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">Get <strong className="text-brand-primary">Content Marketing Services</strong> with SEO Optimization</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> provides <strong>content marketing services</strong> with SEO-optimized content creation, content strategy, and semantic optimization designed for maximum search visibility.</p><h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">How <strong className="text-brand-primary">Content Marketing</strong> Drives Results</h2><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><FileText className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Start Your <strong className="text-brand-primary">Content Strategy</strong></h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-amber-600 text-white font-semibold text-lg rounded-full hover:bg-amber-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Get Content Strategy</span></a></div></div></section></article>
    </>
  );
}
