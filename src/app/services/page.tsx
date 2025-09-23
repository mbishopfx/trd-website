import type { Metadata } from 'next';
import { Search, Globe, Code, Zap, TrendingUp, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services - AI-Enhanced SEO & Digital Marketing | True Rank Digital',
  description: 'Discover True Rank Digital\'s comprehensive SEO and digital marketing services powered by advanced AI technology.',
  keywords: 'SEO services, digital marketing, AI optimization, local SEO, website development',
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Local SEO & Google Maps',
      description: 'Dominate local search results and attract nearby customers with our advanced local SEO strategies.',
      link: '/services/local-seo',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Google Business Profile Management',
      description: 'Optimize and manage your Google Business Profile for maximum visibility and customer engagement.',
      link: '/services/google-business-profile',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI-Enhanced SEO',
      description: 'Revolutionary AI-powered optimization that adapts to search algorithm changes in real-time.',
      link: '/services/ai-seo',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Website Development',
      description: 'Fast-loading, SEO-optimized websites designed to convert visitors into customers.',
      link: '/services/website-development',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Ecommerce Optimization',
      description: 'Scale your online store with advanced optimization strategies for maximum ROI.',
      link: '/services/ecommerce-optimization',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing campaigns that drive traffic, leads, and sales.',
      link: '/services/digital-marketing',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-brand-light/20 to-white">
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-primary/10 rounded-full mb-6">
            <Search className="w-5 h-5 text-brand-primary" />
            <span className="text-brand-primary font-semibold text-sm">Our Services</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
            Our Services
          </h1>
          
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto mb-12">
            Comprehensive AI-enhanced SEO and digital marketing services designed to grow your business fast.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="glass-card p-8 hover:shadow-glass-lg transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-brand-dark/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                <a
                  href={service.link}
                  className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-primary/80 font-semibold transition-colors duration-200"
                >
                  <span>Learn More</span>
                  <TrendingUp className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
