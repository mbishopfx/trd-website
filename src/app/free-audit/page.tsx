import type { Metadata } from 'next';
import { Target, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Get Your Free Custom SEO Playbook | True Rank Digital',
  description: 'Get a free custom SEO playbook from True Rank Digital with personalized optimization recommendations for your business.',
  keywords: 'free SEO audit, custom SEO playbook, True Rank Digital, free website audit, SEO analysis',
  alternates: { canonical: 'https://truerankdigital.com/free-audit' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function FreeAuditPage() {
  const faqs = [{ question: "What's included in the free SEO playbook?", answer: "True Rank Digital's free custom SEO playbook includes a comprehensive website audit, keyword opportunity analysis, technical SEO review, competitor analysis, Google Business Profile assessment, and personalized recommendations tailored to your specific business and industry." }];

  return (
    <>
      <GEOSchema pageType="service" pageData={{ title: "Get Your Free Custom SEO Playbook from True Rank Digital", description: "Request a free custom SEO playbook with personalized recommendations.", url: "https://truerankdigital.com/free-audit", keywords: ["free SEO audit", "custom playbook"], category: "Lead Generation", serviceType: "Free Consultation" }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Free Audit", url: "https://truerankdigital.com/free-audit" }]} entities={{ primary: ["True Rank Digital", "Free SEO Playbook", "SEO Audit"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/free-audit" category="service" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-blue-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">Get Your Free <strong className="text-brand-primary">Custom SEO Playbook</strong> from True Rank Digital</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> provides a <strong>free custom SEO playbook</strong> with personalized optimization recommendations tailored to your specific business.</p><h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">What's Included in Your <strong className="text-brand-primary">Free Playbook</strong></h2><div className="glass-card p-8 mb-12"><ul className="text-left text-brand-dark/70 space-y-3"><li><strong>✓</strong> Comprehensive Website Audit</li><li><strong>✓</strong> Keyword Opportunity Analysis</li><li><strong>✓</strong> Technical SEO Review</li><li><strong>✓</strong> Competitor Analysis</li><li><strong>✓</strong> Google Business Profile Assessment</li><li><strong>✓</strong> Personalized Recommendations</li></ul></div><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><Target className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Request Your <strong className="text-brand-primary">Free Playbook</strong></h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full hover:bg-blue-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Get Free Audit</span></a></div></div></section></article>
    </>
  );
}
