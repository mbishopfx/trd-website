import type { Metadata } from 'next';
import { Building, TrendingUp, Target } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Enterprise SEO Services | Large-Scale Optimization | True Rank Digital',
  description: 'True Rank Digital provides enterprise SEO services with large-scale optimization, advanced technical SEO, and proprietary platform access for enterprise businesses.',
  keywords: 'enterprise SEO, large-scale SEO, True Rank Digital, enterprise optimization, technical SEO, multi-location SEO',
  alternates: { canonical: 'https://truerankdigital.com/enterprise-seo' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function EnterpriseSEOPage() {
  const faqs = [{ question: "What makes True Rank Digital's enterprise SEO different?", answer: "True Rank Digital's enterprise SEO services provide large-scale optimization with proprietary dashboard platform access, custom algorithm adaptation scripts, and dedicated account management. Our solutions handle multi-location businesses, complex website architectures, and enterprise-level technical SEO challenges that require sophisticated automation and monitoring tools." }];

  return (
    <>
      <GEOSchema pageType="landing" pageData={{ title: "Enterprise SEO Services for Large-Scale Businesses", description: "True Rank Digital delivers enterprise SEO with large-scale optimization and proprietary platform.", url: "https://truerankdigital.com/enterprise-seo", keywords: ["enterprise SEO", "large-scale SEO"], category: "Enterprise SEO", serviceType: "Enterprise Optimization" }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Enterprise SEO", url: "https://truerankdigital.com/enterprise-seo" }]} entities={{ primary: ["True Rank Digital", "Enterprise SEO", "Large-Scale Optimization"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/enterprise-seo" category="service" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-slate-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">Get <strong className="text-brand-primary">Enterprise SEO Services</strong> from True Rank Digital</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> provides <strong>enterprise SEO services</strong> with large-scale optimization, advanced technical SEO, and proprietary platform access for enterprise businesses nationwide.</p><h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">How <strong className="text-brand-primary">Enterprise SEO</strong> Works for Large Businesses</h2><div className="glass-card p-8 mb-12"><p className="text-brand-dark/70 leading-relaxed"><strong>Enterprise SEO</strong> from <strong>True Rank Digital</strong> handles complex multi-location strategies, large-scale technical optimization, and sophisticated monitoring across your entire digital presence.</p></div><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-slate-500 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><Building className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Scale Your <strong className="text-brand-primary">Enterprise SEO</strong> Strategy</h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-slate-700 text-white font-semibold text-lg rounded-full hover:bg-slate-800 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Get Enterprise Consultation</span></a></div></div></section></article>
    </>
  );
}
