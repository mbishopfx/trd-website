import type { Metadata } from 'next';
import { Search, MapPin, TrendingUp, CheckCircle } from 'lucide-react';
import PageSpecificSchema from '@/components/seo/PageSpecificSchema';

export const metadata: Metadata = {
  title: 'Local SEO Services - True Rank Digital',
  description: 'Dominate local search results with True Rank Digital\'s advanced local SEO strategies. Get found by nearby customers on Google Maps.',
  keywords: 'local SEO, Google Maps optimization, local search marketing, nearby customers',
};

export default function LocalSEOPage() {
  const benefits = [
    'Google Maps dominance',
    'Local keyword optimization', 
    'Citation building & management',
    'Review management system',
    'Local content strategy',
    'Competitor analysis'
  ];

  return (
    <>
      {/* Enhanced Schema Markup for Local SEO Service Page */}
      <PageSpecificSchema 
        pageType="service"
        pageTitle="Local SEO Services"
        pageDescription="Professional local SEO services to help your business dominate local search results and get found by nearby customers on Google Maps."
        serviceName="Local SEO & Google Maps Optimization"
        serviceDescription="Comprehensive local search optimization including Google Maps optimization, local keyword targeting, citation building, review management, and local content strategy."
        servicePrice="Contact for custom pricing"
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Services", url: "https://truerankdigital.com/services" },
          { name: "Local SEO", url: "https://truerankdigital.com/services/local-seo" }
        ]}
      />
      
      <div className="pt-16 min-h-screen bg-gradient-to-b from-green-50 to-white">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 rounded-full mb-6">
              <Search className="w-5 h-5 text-green-600" />
              <span className="text-green-600 font-semibold text-sm">Local SEO</span>
            </div>
          
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
            Local SEO Services
          </h1>
          
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto mb-12">
            Dominate local search results and attract nearby customers with our advanced local SEO strategies powered by AI technology.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 glass-card p-4">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-brand-dark font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="glass-card p-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
              Ready to Dominate Local Search?
            </h2>
            <p className="text-brand-dark/70 mb-6">
              Get found by customers in your area with our proven local SEO strategies.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-green-600 text-white font-semibold text-lg rounded-full hover:bg-green-700 transition-colors duration-300"
            >
              <TrendingUp className="w-5 h-5" />
              <span>Get Started Today</span>
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
