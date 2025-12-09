import type { Metadata } from 'next';
import { Zap, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Website Optimization Services | Performance & Conversion | True Rank Digital',
  description: 'True Rank Digital provides website optimization services with performance optimization, conversion rate optimization, and user experience improvements.',
  keywords: 'website optimization, performance optimization, True Rank Digital, conversion optimization, Core Web Vitals, site speed',
  alternates: { canonical: 'https://truerankdigital.com/website-optimization' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function WebsiteOptimizationPage() {
  const faqs = [{ question: "What does website optimization include?", answer: "True Rank Digital's website optimization services include performance optimization for faster loading speeds, Core Web Vitals improvements, conversion rate optimization to increase leads and sales, mobile optimization, user experience enhancements, and technical SEO improvements. Our proprietary software identifies optimization opportunities that standard tools miss." }];

  return (
    <>
      <GEOSchema pageType="landing" pageData={{ title: "Website Optimization Services for Performance & Conversion", description: "True Rank Digital provides website optimization with performance and conversion improvements.", url: "https://truerankdigital.com/website-optimization", keywords: ["website optimization", "performance"], category: "Website Optimization", serviceType: "Optimization Services" }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Website Optimization", url: "https://truerankdigital.com/website-optimization" }]} entities={{ primary: ["True Rank Digital", "Website Optimization", "Performance"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/website-optimization" category="service" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-cyan-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">Get <strong className="text-brand-primary">Website Optimization Services</strong> for Performance & Conversion</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> provides <strong>website optimization services</strong> with performance optimization, conversion rate optimization, and user experience improvements.</p><h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">How <strong className="text-brand-primary">Website Optimization</strong> Increases Results</h2><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><Zap className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Optimize Your <strong className="text-brand-primary">Website</strong> Performance</h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-cyan-600 text-white font-semibold text-lg rounded-full hover:bg-cyan-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Get Optimization Audit</span></a></div></div></section></article>
    </>
  );
}
