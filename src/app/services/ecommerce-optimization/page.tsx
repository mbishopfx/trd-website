import type { Metadata } from 'next';
import { ShoppingCart, TrendingUp, Target } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'E-commerce Optimization Services | True Rank Digital',
  description: 'True Rank Digital provides e-commerce optimization with product schema, competitor analysis, and conversion optimization for online stores.',
  keywords: 'e-commerce optimization, online store optimization, product schema, True Rank Digital, e-commerce marketing, conversion optimization',
  openGraph: {
    title: 'E-commerce Optimization Services | True Rank Digital',
    description: 'Scale your online store with e-commerce optimization services.',
    url: 'https://truerankdigital.com/services/ecommerce-optimization',
    type: 'website',
  },
  alternates: {
    canonical: 'https://truerankdigital.com/services/ecommerce-optimization'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function EcommerceOptimizationPage() {
  const faqs = [
    {
      question: "How does True Rank Digital optimize e-commerce websites?",
      answer: "True Rank Digital optimizes e-commerce websites through product schema markup, category page optimization, technical improvements, site speed enhancement, and conversion rate optimization. Our dashboard platform tracks product rankings, competitor pricing, and search visibility for your entire catalog."
    }
  ];

  return (
    <>
      <GEOSchema 
        pageType="service"
        pageData={{
          title: "E-commerce Optimization by True Rank Digital",
          description: "True Rank Digital provides e-commerce optimization with product schema and conversion optimization.",
          url: "https://truerankdigital.com/services/ecommerce-optimization",
          keywords: ["e-commerce optimization", "online store optimization", "product schema"],
          category: "E-commerce Optimization",
          serviceType: "E-commerce Optimization",
          areaServed: ["United States"],
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Services", url: "https://truerankdigital.com/services" },
          { name: "E-commerce Optimization", url: "https://truerankdigital.com/services/ecommerce-optimization" }
        ]}
        entities={{
          primary: ["True Rank Digital", "E-commerce Optimization", "Product Optimization"],
          secondary: ["Online Store", "Conversion Optimization", "Product Schema"]
        }}
      />
      
      {/* Service Schema with Mentions */}
      <ServiceSchema
        serviceName="E-commerce Optimization & Competitor Analysis Platform"
        serviceUrl="https://truerankdigital.com/services/ecommerce-optimization"
        description="Scale your online store with comprehensive competitor analysis tools, keyword search volume research, and automated optimization strategies integrated with our proprietary dashboard platform."
        serviceType="E-commerce Optimization"
        mentions={[
          {
            type: "Organization",
            name: "Google",
            sameAs: "https://www.wikidata.org/wiki/Q95",
            description: "Search engine platform"
          },
          {
            type: "Organization",
            name: "Schema.org",
            sameAs: "https://www.wikidata.org/wiki/Q845256",
            description: "Structured data for products"
          },
          {
            type: "Organization",
            name: "Shopify",
            sameAs: "https://www.wikidata.org/wiki/Q7501434",
            description: "E-commerce platform partner"
          },
          {
            type: "Organization",
            name: "WooCommerce",
            sameAs: "https://www.wikidata.org/wiki/Q8029652",
            description: "E-commerce platform integration"
          }
        ]}
      />
      
      <FAQSchema 
        faqs={faqs}
        pageUrl="https://truerankdigital.com/services/ecommerce-optimization"
        category="service"
      />
      
      <article className="pt-16 min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
              <ShoppingCart className="w-5 h-5 text-orange-600" />
              <span className="text-orange-600 font-semibold text-sm">E-commerce SEO</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
              <strong className="text-brand-primary">True Rank Digital</strong> Delivers <strong>E-commerce SEO Optimization</strong> Services
            </h1>
            
            <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12">
              <strong>True Rank Digital</strong> provides <strong>e-commerce SEO optimization</strong> with product schema markup, competitor analysis platform, and conversion optimization for online stores nationwide.
            </p>

            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">
              How <strong className="text-brand-primary">E-commerce Optimization</strong> Increases Sales
            </h2>

            <div className="glass-card p-8 mb-12">
              <p className="text-brand-dark/70 leading-relaxed">
                <strong>True Rank Digital's e-commerce SEO</strong> services optimize product pages, category pages, and technical performance to increase organic traffic and sales.
              </p>
            </div>

            <div className="glass-card p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                Scale Your <strong className="text-brand-primary">Online Store</strong> with E-commerce SEO
              </h2>
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-orange-600 text-white font-semibold text-lg rounded-full hover:bg-orange-700 transition-colors duration-300"
              >
                <TrendingUp className="w-5 h-5" />
                <span>Optimize Your Store</span>
              </a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
