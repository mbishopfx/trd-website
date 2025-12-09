import type { Metadata } from 'next';
import { ShoppingCart, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'E-commerce Growth Services | Scale Your Online Store | True Rank Digital',
  description: 'Scale your online store with True Rank Digital\'s e-commerce growth services featuring product optimization, conversion rate optimization, and e-commerce SEO strategies.',
  keywords: 'e-commerce growth, online store growth, True Rank Digital, e-commerce SEO, product optimization, conversion optimization',
  alternates: { canonical: 'https://truerankdigital.com/ecommerce-growth' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function EcommerceGrowthPage() {
  const faqs = [{ question: "How does True Rank Digital grow e-commerce sales?", answer: "True Rank Digital grows e-commerce sales through comprehensive product page optimization, category page SEO, technical performance improvements, conversion rate optimization, and competitor analysis. Our dashboard platform tracks product rankings, sales performance, and provides actionable insights to increase your online store revenue." }];

  return (
    <>
      <GEOSchema pageType="landing" pageData={{ title: "Scale Your Online Store with E-commerce Growth Services", description: "True Rank Digital helps e-commerce businesses grow with product optimization and conversion strategies.", url: "https://truerankdigital.com/ecommerce-growth", keywords: ["e-commerce growth", "online store"], category: "E-commerce", serviceType: "E-commerce Growth" }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "E-commerce Growth", url: "https://truerankdigital.com/ecommerce-growth" }]} entities={{ primary: ["True Rank Digital", "E-commerce Growth", "Online Store"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/ecommerce-growth" category="service" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-orange-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">Scale Your <strong className="text-brand-primary">Online Store</strong> with E-commerce Growth Services</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> provides <strong>e-commerce growth services</strong> with product optimization, conversion rate optimization, and e-commerce SEO strategies designed to increase online sales.</p><h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">How <strong className="text-brand-primary">E-commerce Growth</strong> Services Increase Sales</h2><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><ShoppingCart className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Grow Your <strong className="text-brand-primary">E-commerce</strong> Revenue</h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-orange-600 text-white font-semibold text-lg rounded-full hover:bg-orange-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Start E-commerce Growth</span></a></div></div></section></article>
    </>
  );
}
