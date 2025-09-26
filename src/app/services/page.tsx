import type { Metadata } from 'next';
import { Search, Globe, Code, Zap, TrendingUp, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Professional Digital Marketing Services | Proprietary SEO Dashboard Platform | True Rank Digital',
  description: 'Access our exclusive digital marketing services featuring proprietary SEO dashboard platform with grid map ranking analysis, competitor intelligence monitoring, automated Google knowledge graph consistency tools, and proven Google optimization tactics for faster search engine result page positioning.',
  keywords: 'professional digital marketing services, proprietary SEO dashboard platform, grid map ranking analysis, competitor intelligence monitoring, Google knowledge graph optimization, algorithm-proof SEO strategies, local search engine optimization services, custom script integration, keyword search volume analysis tools, automated Google optimization tactics',
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Local Search Engine Optimization & Grid Map Rankings',
      description: 'Master local search positioning with our proprietary SEO dashboard featuring grid map ranking verification, competitor intelligence monitoring, and automated Google knowledge graph consistency tracking for faster local search results.',
      link: '/services/local-seo',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Professional Google Business Profile Optimization',
      description: 'Comprehensive Google Business Profile management using our advanced optimization tools and automated consistency monitoring systems to maximize local search visibility and customer engagement.',
      link: '/services/google-business-profile',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI-Enhanced SEO with Algorithm Adaptation Scripts',
      description: 'Revolutionary custom algorithm adaptation scripts and proprietary solution building frameworks that automatically adjust to Google algorithm changes, maintaining peak search engine performance through our in-house technology solutions.',
      link: '/services/ai-seo',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Custom Web Development with Enhanced Script Integration',
      description: 'SEO-optimized websites designed for conversion with advanced proprietary script integration capabilities that unlock enhanced algorithm manipulation tools and deeper optimization control.',
      link: '/services/website-development',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'E-commerce Optimization & Competitor Analysis Platform',
      description: 'Scale your online store with our comprehensive competitor analysis tools, keyword search volume research, and automated optimization strategies integrated with our proprietary dashboard platform for maximum ROI tracking.',
      link: '/services/ecommerce-optimization',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Comprehensive Digital Marketing Campaign Management',
      description: 'Strategic digital marketing campaigns powered by our SEO dashboard platform featuring real-time performance tracking, organic search traffic generation tools, and proven Google optimization tactics for sustainable growth.',
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
            Professional Digital Marketing Services & SEO Dashboard Platform
          </h1>
          
          <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-8">
            Access our comprehensive suite of digital marketing services powered by our proprietary SEO dashboard platform. Every service includes grid map ranking analysis, competitor intelligence monitoring, and automated Google knowledge graph consistency tools designed to get your business found on Google faster through proven optimization tactics mastered by professionals.
          </p>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="glass-card p-6 lg:p-8">
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                Our Process: Proprietary Platform + Algorithm-Proof Strategies
              </h2>
              <p className="text-brand-dark/70 leading-relaxed">
                Every client receives access to our exclusive digital marketing platform featuring real-time performance tracking, keyword search volume analysis tools, and automated optimization scripts. Our in-house technology solutions and custom solution building frameworks deliver sustainable results that adapt to search algorithm changes automatically. While our dashboard platform works with any website, clients choosing our custom web builds unlock enhanced capabilities through proprietary script integration.
              </p>
            </div>
          </div>
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
