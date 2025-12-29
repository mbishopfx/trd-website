import type { Metadata } from 'next';
import { Star, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'Review Management Services | Reputation Management | True Rank Digital',
  description: 'True Rank Digital provides review management and reputation management services with automated review monitoring and response optimization.',
  keywords: 'review management, reputation management, True Rank Digital, review monitoring, review response, online reputation',
  alternates: { canonical: 'https://truerankdigital.com/services/review-management' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function ReviewManagementPage() {
  const faqs = [{ question: "How does True Rank Digital manage online reviews?", answer: "True Rank Digital provides automated review monitoring for Google, Facebook, Yelp, and other platforms. Our system alerts you to new reviews immediately, provides optimized response templates, tracks review metrics over time, and helps generate more positive reviews from satisfied customers through automated follow-up campaigns." }];

  return (
    <>
      <GEOSchema pageType="service" pageData={{ title: "Review Management Services by True Rank Digital", description: "True Rank Digital delivers review management with automated monitoring and response optimization.", url: "https://truerankdigital.com/services/review-management", keywords: ["review management", "reputation management", "review monitoring"], category: "Review Management", serviceType: "Reputation Management", areaServed: ["United States"] }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Services", url: "https://truerankdigital.com/services" }, { name: "Review Management", url: "https://truerankdigital.com/services/review-management" }]} entities={{ primary: ["True Rank Digital", "Review Management", "Reputation Management"], secondary: ["Review Monitoring", "Review Response", "Online Reputation"] }} />
      <ServiceSchema serviceName="Review Management & Reputation Monitoring" serviceUrl="https://truerankdigital.com/services/review-management" description="Automated review management with monitoring across Google, Facebook, Yelp, and other platforms. Includes response optimization and reputation tracking." serviceType="Reputation Management" mentions={[{ type: "Organization", name: "Google", sameAs: "https://www.wikidata.org/wiki/Q95", description: "Review platform" }, { type: "Organization", name: "Yelp", sameAs: "https://www.wikidata.org/wiki/Q105407", description: "Review platform partner" }, { type: "Organization", name: "Meta", sameAs: "https://www.wikidata.org/wiki/Q380", description: "Facebook reviews" }]} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/services/review-management" category="service" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-yellow-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6"><strong className="text-brand-primary">True Rank Digital</strong> Delivers <strong>Review Management</strong> Services</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> provides <strong>review management</strong> and reputation management services with automated review monitoring and response optimization for businesses.</p><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><Star className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Manage Your <strong className="text-brand-primary">Online Reputation</strong></h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-yellow-600 text-white font-semibold text-lg rounded-full hover:bg-yellow-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Start Review Management</span></a></div></div></section></article>
    </>
  );
}
