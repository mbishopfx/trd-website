import type { Metadata } from 'next';
import { Search, Target, TrendingUp, CheckCircle, BarChart, Globe } from 'lucide-react';
import PageSpecificSchema from '@/components/seo/PageSpecificSchema';

export const metadata: Metadata = {
  title: 'Organic Search Optimization - True Rank Digital',
  description: 'Increase organic traffic and improve search rankings with our advanced organic search optimization strategies and AI-enhanced SEO techniques.',
  keywords: 'organic search, SEO optimization, search engine ranking, organic traffic, keyword optimization',
};

export default function OrganicSearchPage() {
  const benefits = [
    'Comprehensive keyword research',
    'On-page SEO optimization', 
    'Technical SEO improvements',
    'Content strategy & optimization',
    'Link building campaigns',
    'Performance tracking & reporting'
  ];

  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Advanced Keyword Research",
      description: "AI-powered keyword analysis to identify high-value opportunities and search intent."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "On-Page Optimization",
      description: "Complete optimization of meta tags, headers, content, and internal linking structure."
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Technical SEO Audit",
      description: "Comprehensive technical analysis including site speed, mobile optimization, and crawlability."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Content Strategy",
      description: "Strategic content creation and optimization to target valuable keywords and user intent."
    }
  ];

  return (
    <>
      {/* Enhanced Schema Markup for Organic Search Service Page */}
      <PageSpecificSchema 
        pageType="service"
        pageTitle="Organic Search Optimization Services"
        pageDescription="Advanced organic search optimization services to increase organic traffic, improve search rankings, and drive qualified leads to your website."
        serviceName="Organic Search SEO"
        serviceDescription="Comprehensive organic search optimization including keyword research, on-page SEO, technical SEO, content strategy, and link building to improve search engine rankings and organic traffic."
        servicePrice="Contact for custom pricing"
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Services", url: "https://truerankdigital.com/services" },
          { name: "Organic Search", url: "https://truerankdigital.com/services/organic-search" }
        ]}
      />
      
      <div className="pt-16 min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Search className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-semibold text-sm">Organic Search</span>
            </div>
          
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
              Organic Search Optimization
            </h1>
          
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto mb-12">
              Increase your organic traffic and search rankings with our advanced SEO strategies powered by AI technology and proven optimization techniques.
            </p>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 glass-card p-4">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-brand-dark font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Features Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-8 text-left">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-brand-dark/70">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Statistics Section */}
            <div className="glass-card p-8 mb-16">
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-8">
                Organic Search Results That Matter
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">450%</div>
                  <p className="text-brand-dark/70">Average Organic Traffic Increase</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                  <p className="text-brand-dark/70">of Keywords Reach Page 1</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3-6</div>
                  <p className="text-brand-dark/70">Months to See Results</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="glass-card p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                Ready to Increase Your Organic Traffic?
              </h2>
              <p className="text-brand-dark/70 mb-6">
                Get more qualified leads and customers through strategic organic search optimization.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                <Search className="w-5 h-5" />
                <span>Get Started Today</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
