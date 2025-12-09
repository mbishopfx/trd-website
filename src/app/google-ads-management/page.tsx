import type { Metadata } from 'next';
import { Target, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Google Ads Management Services | PPC Campaign Optimization | True Rank Digital',
  description: 'True Rank Digital provides Google Ads management services with PPC campaign optimization, conversion tracking, and ROI maximization strategies.',
  keywords: 'Google Ads management, PPC services, True Rank Digital, Google Ads optimization, PPC campaigns, conversion optimization',
  alternates: { canonical: 'https://truerankdigital.com/google-ads-management' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function GoogleAdsManagementPage() {
  const faqs = [{ question: "How does True Rank Digital manage Google Ads campaigns?", answer: "True Rank Digital manages Google Ads campaigns through comprehensive keyword research, ad copy optimization, landing page optimization, conversion tracking setup, bid management, and continuous performance monitoring. Our dashboard platform provides real-time campaign performance data, ROI tracking, and actionable insights to maximize your advertising budget effectiveness." }];

  return (
    <>
      <GEOSchema pageType="landing" pageData={{ title: "Google Ads Management Services with ROI Optimization", description: "True Rank Digital provides Google Ads management with PPC campaign optimization.", url: "https://truerankdigital.com/google-ads-management", keywords: ["Google Ads", "PPC management"], category: "Google Ads", serviceType: "PPC Management" }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Google Ads Management", url: "https://truerankdigital.com/google-ads-management" }]} entities={{ primary: ["True Rank Digital", "Google Ads Management", "PPC Services"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/google-ads-management" category="service" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-rose-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">Get <strong className="text-brand-primary">Google Ads Management Services</strong> with ROI Optimization</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> provides <strong>Google Ads management services</strong> with PPC campaign optimization, conversion tracking, and ROI maximization strategies.</p><h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">How <strong className="text-brand-primary">Google Ads Management</strong> Maximizes ROI</h2><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><Target className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Optimize Your <strong className="text-brand-primary">Google Ads</strong> Campaigns</h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-rose-600 text-white font-semibold text-lg rounded-full hover:bg-rose-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Start Google Ads</span></a></div></div></section></article>
    </>
  );
}
