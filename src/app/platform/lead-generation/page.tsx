import type { Metadata } from 'next';
import { Users, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Lead Generation Platform | Lead Capture & Tracking | True Rank Digital',
  description: 'True Rank Digital provides lead generation platform with lead capture tools, conversion tracking, and lead management automation.',
  keywords: 'lead generation platform, lead capture, True Rank Digital, lead tracking, conversion monitoring, lead management',
  alternates: { canonical: 'https://truerankdigital.com/platform/lead-generation' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function LeadGenerationPlatformPage() {
  const faqs = [{ question: "How does the lead generation platform work?", answer: "True Rank Digital's lead generation platform combines SEO optimization for qualified traffic, optimized landing pages for conversion, lead capture forms with smart fields, automated lead nurturing, conversion tracking across all channels, and comprehensive analytics. The platform integrates with your CRM and provides real-time alerts for new leads." }];

  return (
    <>
      <GEOSchema pageType="software" pageData={{ title: "Lead Generation Platform with Capture & Tracking Tools", description: "True Rank Digital provides lead generation platform with automation and tracking.", url: "https://truerankdigital.com/platform/lead-generation", keywords: ["lead generation", "lead capture"], category: "Marketing Software", applicationCategory: "BusinessApplication", operatingSystem: "Web-based", featureList: ["Lead capture forms", "Conversion tracking", "Lead management", "Analytics dashboard"] }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Platform", url: "https://truerankdigital.com/platform" }, { name: "Lead Generation", url: "https://truerankdigital.com/platform/lead-generation" }]} entities={{ primary: ["True Rank Digital", "Lead Generation Platform", "Lead Capture"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/platform/lead-generation" category="service" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-blue-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6"><strong className="text-brand-primary">Lead Generation Platform</strong> with Capture & Tracking Tools</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> provides a <strong>lead generation platform</strong> with lead capture tools, conversion tracking, and automated lead management.</p><h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">How the <strong className="text-brand-primary">Lead Generation</strong> Platform Works</h2><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><Users className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Start <strong className="text-brand-primary">Generating</strong> More Leads</h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full hover:bg-blue-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Get Platform Demo</span></a></div></div></section></article>
    </>
  );
}
