import type { Metadata } from 'next';
import { Star, MessageCircle, TrendingUp, CheckCircle, Shield, Users } from 'lucide-react';
import PageSpecificSchema from '@/components/seo/PageSpecificSchema';

export const metadata: Metadata = {
  title: 'Review Management Services - True Rank Digital',
  description: 'Build trust and credibility with professional review management services. Monitor, respond to, and generate more positive reviews for your business.',
  keywords: 'review management, online reputation, Google reviews, customer feedback, reputation management',
};

export default function ReviewManagementPage() {
  const benefits = [
    'Automated review monitoring',
    'Professional review responses', 
    'Review generation campaigns',
    'Negative review mitigation',
    'Review platform optimization',
    'Reputation reporting & analytics'
  ];

  const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Review Monitoring",
      description: "Track reviews across Google, Facebook, Yelp, and other platforms in real-time."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Professional Responses",
      description: "Expert-crafted responses to all reviews that maintain your brand voice and professionalism."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Review Generation",
      description: "Strategic campaigns to encourage satisfied customers to leave positive reviews."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reputation Protection",
      description: "Proactive strategies to minimize the impact of negative reviews and protect your reputation."
    }
  ];

  return (
    <>
      {/* Enhanced Schema Markup for Review Management Service Page */}
      <PageSpecificSchema 
        pageType="service"
        pageTitle="Review Management Services"
        pageDescription="Professional review management services to build trust, monitor online reputation, and generate more positive reviews for your business."
        serviceName="Online Review Management"
        serviceDescription="Comprehensive reputation management including review monitoring, professional responses, review generation campaigns, and negative review mitigation across all major platforms."
        servicePrice="Contact for custom pricing"
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Services", url: "https://truerankdigital.com/services" },
          { name: "Review Management", url: "https://truerankdigital.com/services/review-management" }
        ]}
      />
      
      <div className="pt-16 min-h-screen bg-gradient-to-b from-yellow-50 to-white">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-100 rounded-full mb-6">
              <Star className="w-5 h-5 text-yellow-600" />
              <span className="text-yellow-600 font-semibold text-sm">Review Management</span>
            </div>
          
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
              Review Management Services
            </h1>
          
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto mb-12">
              Build trust, protect your reputation, and generate more positive reviews with our comprehensive review management services.
            </p>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 glass-card p-4">
                  <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-brand-dark font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Features Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-8 text-left">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
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

            {/* CTA Section */}
            <div className="glass-card p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                Ready to Boost Your Online Reputation?
              </h2>
              <p className="text-brand-dark/70 mb-6">
                Let us help you build trust with potential customers through strategic review management.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-yellow-600 text-white font-semibold text-lg rounded-full hover:bg-yellow-700 transition-colors duration-300"
              >
                <Star className="w-5 h-5" />
                <span>Get Started Today</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
