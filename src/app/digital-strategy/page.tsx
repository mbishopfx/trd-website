import type { Metadata } from 'next';
import { Lightbulb, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Digital Strategy Services | Comprehensive Marketing Strategy | True Rank Digital',
  description: 'True Rank Digital provides digital strategy services with comprehensive marketing planning, SEO strategy, and business growth strategies.',
  keywords: 'digital strategy, marketing strategy, True Rank Digital, SEO strategy, business growth, digital planning',
  alternates: { canonical: 'https://truerankdigital.com/digital-strategy' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function DigitalStrategyPage() {
  const faqs = [{ question: "What does a digital strategy include?", answer: "True Rank Digital's digital strategy services include comprehensive marketing planning, competitive analysis, SEO strategy development, content strategy, social media planning, conversion optimization strategies, and performance tracking systems. We create customized strategies aligned with your business goals and provide implementation roadmaps with our proprietary dashboard platform for tracking progress." }];

  return (
    <>
      <GEOSchema pageType="landing" pageData={{ title: "Digital Strategy Services for Business Growth", description: "True Rank Digital provides digital strategy with comprehensive marketing planning.", url: "https://truerankdigital.com/digital-strategy", keywords: ["digital strategy", "marketing strategy"], category: "Digital Strategy", serviceType: "Strategy Services" }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Digital Strategy", url: "https://truerankdigital.com/digital-strategy" }]} entities={{ primary: ["True Rank Digital", "Digital Strategy", "Marketing Strategy"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/digital-strategy" category="service" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-emerald-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">Get <strong className="text-brand-primary">Digital Strategy Services</strong> for Business Growth</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> provides <strong>digital strategy services</strong> with comprehensive marketing planning, SEO strategy, and business growth strategies tailored to your goals.</p><h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">How <strong className="text-brand-primary">Digital Strategy</strong> Drives Growth</h2><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><Lightbulb className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Create Your <strong className="text-brand-primary">Digital Strategy</strong></h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-emerald-600 text-white font-semibold text-lg rounded-full hover:bg-emerald-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Get Strategy Consultation</span></a></div></div></section></article>
    </>
  );
}
