import type { Metadata } from 'next';
import { Users, TrendingUp, Target } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Competitor Analysis Platform | SEO Intelligence Tool | True Rank Digital',
  description: 'True Rank Digital provides advanced competitor analysis platform with SEO intelligence, ranking tracking, and competitive monitoring for businesses.',
  keywords: 'competitor analysis, SEO intelligence, True Rank Digital, competitive analysis, ranking monitoring, competitor tracking',
  alternates: { canonical: 'https://truerankdigital.com/platform/competitor-analysis' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function CompetitorAnalysisPage() {
  const faqs = [{ question: "What does the competitor analysis platform track?", answer: "True Rank Digital's competitor analysis platform tracks competitor keyword rankings, backlink profiles, content strategies, Google Business Profile performance, local search visibility, website changes, and technical SEO implementations. Our system provides real-time alerts when competitors make significant changes and identifies opportunities to outrank them." }];

  return (
    <>
      <GEOSchema pageType="software" pageData={{ title: "Competitor Analysis Platform - Advanced SEO Intelligence Tool", description: "True Rank Digital provides competitor analysis platform with SEO intelligence and ranking tracking.", url: "https://truerankdigital.com/platform/competitor-analysis", keywords: ["competitor analysis", "SEO intelligence"], category: "SEO Software", applicationCategory: "BusinessApplication", operatingSystem: "Web-based", featureList: ["Real-time competitor monitoring", "Keyword ranking tracking", "Backlink analysis", "Content gap analysis"] }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Platform", url: "https://truerankdigital.com/platform" }, { name: "Competitor Analysis", url: "https://truerankdigital.com/platform/competitor-analysis" }]} entities={{ primary: ["True Rank Digital", "Competitor Analysis", "SEO Intelligence"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/platform/competitor-analysis" category="service" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-red-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6"><strong className="text-brand-primary">Competitor Analysis Platform</strong> - Advanced SEO Intelligence by True Rank Digital</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> provides an advanced <strong>competitor analysis platform</strong> with SEO intelligence, ranking tracking, and competitive monitoring for businesses nationwide.</p><h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">How the <strong className="text-brand-primary">Competitor Analysis</strong> Platform Works</h2><div className="glass-card p-8 mb-12"><p className="text-brand-dark/70 leading-relaxed">Our <strong>competitor analysis platform</strong> tracks competitor rankings, backlinks, content strategies, and provides actionable insights to help you outrank competition.</p></div><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><Users className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Access <strong className="text-brand-primary">Competitor Intelligence</strong></h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-red-600 text-white font-semibold text-lg rounded-full hover:bg-red-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Get Platform Access</span></a></div></div></section></article>
    </>
  );
}
