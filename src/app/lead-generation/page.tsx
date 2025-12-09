import type { Metadata } from 'next';
import { Users, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Lead Generation Services | Get More Qualified Leads | True Rank Digital',
  description: 'Get more qualified leads with True Rank Digital\'s lead generation services featuring SEO optimization, conversion optimization, and lead capture strategies.',
  keywords: 'lead generation, get more leads, True Rank Digital, qualified leads, lead capture, conversion optimization',
  alternates: { canonical: 'https://truerankdigital.com/lead-generation' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function LeadGenerationPage() {
  const faqs = [{ question: "How does True Rank Digital generate more leads?", answer: "True Rank Digital generates more leads through comprehensive SEO optimization to increase qualified traffic, conversion rate optimization to improve lead capture, landing page design and testing, form optimization, and lead tracking systems. Our dashboard platform monitors lead sources, tracks conversion rates, and provides insights to continuously improve lead generation performance." }];

  return (
    <>
      <GEOSchema pageType="landing" pageData={{ title: "Get More Qualified Leads with Lead Generation Services", description: "True Rank Digital helps businesses get more leads with SEO and conversion optimization.", url: "https://truerankdigital.com/lead-generation", keywords: ["lead generation", "get more leads"], category: "Lead Generation", serviceType: "Lead Generation Services" }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Lead Generation", url: "https://truerankdigital.com/lead-generation" }]} entities={{ primary: ["True Rank Digital", "Lead Generation", "Qualified Leads"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/lead-generation" category="service" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-blue-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">Get More <strong className="text-brand-primary">Qualified Leads</strong> with Lead Generation Services</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> provides <strong>lead generation services</strong> with SEO optimization, conversion optimization, and lead capture strategies designed to generate more qualified leads for your business.</p><h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">How <strong className="text-brand-primary">Lead Generation</strong> Services Work</h2><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><Users className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Start Generating More <strong className="text-brand-primary">Leads</strong></h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full hover:bg-blue-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Get Lead Generation Strategy</span></a></div></div></section></article>
    </>
  );
}
