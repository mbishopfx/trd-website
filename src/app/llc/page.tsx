import type { Metadata } from 'next';
import { Briefcase, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Business Starter Pack | LLC Formation + SEO Services | True Rank Digital',
  description: 'Get your business started right with True Rank Digital\'s Business Starter Pack featuring LLC formation assistance and professional SEO services.',
  keywords: 'business starter pack, LLC formation, True Rank Digital, new business SEO, startup SEO',
  alternates: { canonical: 'https://truerankdigital.com/llc' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function LLCPage() {
  const faqs = [{ question: "What's included in the Business Starter Pack?", answer: "True Rank Digital's Business Starter Pack includes LLC formation assistance, professional website development, initial SEO setup, Google Business Profile creation, and local citation building. We help you establish your business presence both legally and online from day one." }];

  return (
    <>
      <GEOSchema pageType="service" pageData={{ title: "Business Starter Pack - LLC Formation + SEO Services", description: "True Rank Digital's Business Starter Pack helps new businesses get started with LLC formation and SEO.", url: "https://truerankdigital.com/llc", keywords: ["business starter pack", "LLC formation"], category: "Business Services", serviceType: "Startup Services" }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Business Starter Pack", url: "https://truerankdigital.com/llc" }]} entities={{ primary: ["True Rank Digital", "Business Starter Pack", "LLC Formation"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/llc" category="service" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-emerald-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6"><strong className="text-brand-primary">Business Starter Pack</strong> - LLC Formation + SEO Services from True Rank Digital</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> provides a complete <strong>Business Starter Pack</strong> with LLC formation assistance and professional SEO services to get your new business started right.</p><h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">What's Included in the <strong className="text-brand-primary">Starter Pack</strong></h2><div className="glass-card p-8 mb-12"><ul className="text-left text-brand-dark/70 space-y-3"><li><strong>✓</strong> LLC Formation Assistance</li><li><strong>✓</strong> Professional Website Development</li><li><strong>✓</strong> Initial SEO Setup</li><li><strong>✓</strong> Google Business Profile Creation</li><li><strong>✓</strong> Local Citation Building</li></ul></div><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><Briefcase className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Start Your <strong className="text-brand-primary">Business</strong> Today</h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-emerald-600 text-white font-semibold text-lg rounded-full hover:bg-emerald-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Get Starter Pack</span></a></div></div></section></article>
    </>
  );
}
