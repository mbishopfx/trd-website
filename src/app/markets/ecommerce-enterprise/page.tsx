import type { Metadata } from 'next';
import { ShoppingCart, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'E-commerce Enterprise SEO | Online Store Optimization | True Rank Digital',
  description: 'True Rank Digital provides SEO services for e-commerce enterprises with product optimization, category page SEO, and conversion strategies.',
  keywords: 'e-commerce SEO, enterprise e-commerce, True Rank Digital, online store SEO, product optimization',
  alternates: { canonical: 'https://truerankdigital.com/markets/ecommerce-enterprise' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function EcommerceEnterprisePage() {
  const faqs = [{ question: "How does True Rank Digital help e-commerce enterprises?", answer: "True Rank Digital provides specialized SEO services for e-commerce enterprises including product page optimization, category hierarchy optimization, technical SEO for large product catalogs, conversion rate optimization, and comprehensive analytics. Our strategies are designed to increase organic traffic and online sales for e-commerce businesses." }];

  return (
    <>
      <GEOSchema pageType="market" pageData={{ title: "SEO Services for E-commerce Enterprise - True Rank Digital Solutions", description: "True Rank Digital serves e-commerce enterprises with specialized SEO strategies.", url: "https://truerankdigital.com/markets/ecommerce-enterprise", keywords: ["e-commerce SEO", "enterprise online store"], category: "Market Segment", audienceType: "E-commerce Enterprise" }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Markets", url: "https://truerankdigital.com/markets" }, { name: "E-commerce Enterprise", url: "https://truerankdigital.com/markets/ecommerce-enterprise" }]} entities={{ primary: ["True Rank Digital", "E-commerce Enterprise", "Online Store SEO"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/markets/ecommerce-enterprise" category="service" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-orange-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">SEO Services for <strong className="text-brand-primary">E-commerce Enterprise</strong> - True Rank Digital Solutions</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> serves <strong>e-commerce enterprise</strong> businesses with specialized SEO strategies for online stores and product catalogs.</p><h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">How True Rank Digital Serves <strong className="text-brand-primary">E-commerce Enterprise</strong> Businesses</h2><div className="glass-card p-8 mb-12"><p className="text-brand-dark/70 leading-relaxed">Our <strong>e-commerce SEO services</strong> include product page optimization, category page SEO, technical optimization for large catalogs, and conversion rate optimization designed to increase online sales.</p></div><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><ShoppingCart className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Grow Your <strong className="text-brand-primary">E-commerce</strong> Business</h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-orange-600 text-white font-semibold text-lg rounded-full hover:bg-orange-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Get E-commerce Strategy</span></a></div></div></section></article>
    </>
  );
}
