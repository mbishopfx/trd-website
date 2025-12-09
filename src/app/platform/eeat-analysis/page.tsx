import type { Metadata } from 'next';
import { Award, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'E-E-A-T Analysis Tool | Expertise Authority Trust Scoring | True Rank Digital',
  description: 'True Rank Digital provides E-E-A-T analysis tool measuring Experience, Expertise, Authoritativeness, and Trustworthiness for SEO content optimization.',
  keywords: 'E-E-A-T analysis, expertise scoring, True Rank Digital, authority analysis, trust signals, content quality',
  alternates: { canonical: 'https://truerankdigital.com/platform/eeat-analysis' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function EEATAnalysisPage() {
  const faqs = [{ question: "What is E-E-A-T and why does it matter?", answer: "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness - Google's quality rating system for content. True Rank Digital's E-E-A-T analysis tool measures these signals on your website and provides actionable recommendations to improve your content quality scores, which directly impacts search rankings, especially for YMYL (Your Money Your Life) topics." }];

  return (
    <>
      <GEOSchema pageType="software" pageData={{ title: "E-E-A-T Analysis Tool - Expertise Authority Trust Scoring", description: "True Rank Digital provides E-E-A-T analysis measuring expertise, authority, and trust signals.", url: "https://truerankdigital.com/platform/eeat-analysis", keywords: ["E-E-A-T", "expertise scoring"], category: "SEO Software", applicationCategory: "BusinessApplication", operatingSystem: "Web-based", featureList: ["Experience measurement", "Expertise scoring", "Authority signals", "Trust indicators"] }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Platform", url: "https://truerankdigital.com/platform" }, { name: "E-E-A-T Analysis", url: "https://truerankdigital.com/platform/eeat-analysis" }]} entities={{ primary: ["True Rank Digital", "E-E-A-T Analysis", "Expertise Scoring"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/platform/eeat-analysis" category="service" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-yellow-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6"><strong className="text-brand-primary">E-E-A-T Analysis Tool</strong> - Measure Expertise Authority Trust</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> provides an <strong>E-E-A-T analysis tool</strong> measuring Experience, Expertise, Authoritativeness, and Trustworthiness for SEO content optimization.</p><h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">How the <strong className="text-brand-primary">E-E-A-T</strong> Analysis Platform Works</h2><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><Award className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Analyze Your <strong className="text-brand-primary">E-E-A-T</strong> Signals</h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-yellow-600 text-white font-semibold text-lg rounded-full hover:bg-yellow-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Get E-E-A-T Analysis</span></a></div></div></section></article>
    </>
  );
}
