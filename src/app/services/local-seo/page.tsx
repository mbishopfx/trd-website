import type { Metadata } from 'next';
import { Search, MapPin, TrendingUp, CheckCircle } from 'lucide-react';
import PageSpecificSchema from '@/components/seo/PageSpecificSchema';

export const metadata: Metadata = {
  title: 'Professional Local Search Engine Optimization Services | Grid Map Ranking Analysis | True Rank Digital',
  description: 'Master local search engine optimization with our proprietary SEO dashboard platform. Advanced Google Maps optimization, grid map ranking verification, competitor analysis tools, and automated Google knowledge graph consistency monitoring for faster local search positioning.',
  keywords: 'local search engine optimization, Google Maps optimization services, grid map ranking analysis, local SEO dashboard platform, competitor analysis tools, Google knowledge graph optimization, local search positioning strategies, professional local SEO services, Google Business Profile optimization, local keyword research tools',
};

export default function LocalSEOPage() {
  const benefits = [
    'Grid map ranking verification dashboard access',
    'Advanced local keyword search volume analysis', 
    'Google knowledge graph consistency automation',
    'Competitor intelligence monitoring platform',
    'Local search engine result page positioning',
    'Professional Google Business Profile optimization',
    'Google Maps optimization with ranking tracking',
    'Local citation building and management automation',
    'Review response automation and monitoring',
    'Local content strategy with semantic optimization',
    'Algorithm-proof local SEO tactics implementation',
    'Custom script integration for enhanced performance'
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
            Professional Local Search Engine Optimization Services
          </h1>
          
          <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-8">
            Master local search engine optimization with our proven Google optimization tactics and proprietary SEO dashboard platform. Our in-house technology solutions deliver faster local search positioning through advanced grid map ranking analysis, competitor intelligence monitoring, and automated Google knowledge graph consistency tracking.
          </p>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="glass-card p-6 lg:p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                Our Local SEO Process: Getting Your Business Found on Google—Fast!
              </h2>
              <p className="text-brand-dark/70 leading-relaxed">
                Every local SEO client gains access to our exclusive digital marketing platform featuring real-time grid map ranking verification, comprehensive keyword search volume research tools, and automated competitor analysis monitoring. Our algorithm-proof strategies combine proven Google tactics mastered by professionals with custom solution building frameworks that keep you ahead of search algorithm changes. While our dashboard platform works with any website, clients choosing our custom web builds unlock enhanced algorithm manipulation capabilities through proprietary script integration.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 glass-card p-4">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-brand-dark font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="glass-card p-8 lg:p-10">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
              Access Your Proprietary Local SEO Dashboard Platform
            </h2>
            <p className="text-brand-dark/70 mb-6 leading-relaxed">
              Start dominating local search engine results with our proven Google optimization tactics and exclusive client dashboard featuring grid map ranking analysis, keyword search volume research tools, and automated Google knowledge graph consistency monitoring. Our professional local search positioning strategies are designed to get your business found on Google faster through advanced algorithm-proof digital marketing techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/free-audit"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-green-600 text-white font-semibold text-lg rounded-full hover:bg-green-700 transition-colors duration-300"
              >
                <TrendingUp className="w-5 h-5" />
                <span>Get Free Local SEO Dashboard Demo</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-green-600 text-green-600 font-semibold text-lg rounded-full hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                <MapPin className="w-5 h-5" />
                <span>Start Local SEO Strategy</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
