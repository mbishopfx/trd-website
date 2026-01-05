import type { Metadata } from 'next';
import { Search, Globe, Code, Zap, TrendingUp, Users } from 'lucide-react';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Professional Digital Marketing Services | Proprietary Dashboard Platform | True Rank Digital',
  description: 'Access our exclusive digital marketing services featuring proprietary dashboard platform with grid map ranking analysis, competitor intelligence monitoring, automated Google knowledge graph consistency tools, and proven Google optimization tactics for faster local pack domination.',
  keywords: 'professional digital marketing services, proprietary dashboard platform, grid map ranking analysis, competitor intelligence monitoring, Google knowledge graph optimization, proven optimization strategies, local pack domination services, custom script integration, keyword search volume analysis tools, automated Google optimization tactics',
  openGraph: {
    title: 'Professional Digital Marketing Services | True Rank Digital',
    description: 'Comprehensive digital marketing services powered by proprietary SEO dashboard platform.',
    url: 'https://truerankdigital.com/services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://truerankdigital.com/services'
  },
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Local Pack Domination & Grid Map Rankings',
      description: 'Dominate the local pack with our proprietary dashboard featuring grid map ranking verification, competitor intelligence monitoring, and automated Google knowledge graph consistency tracking for faster local pack results.',
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
      title: 'AI Search Optimization with Algorithm Adaptation Scripts',
      description: 'Revolutionary custom algorithm adaptation scripts and proprietary solution building frameworks that automatically adjust to Google algorithm changes, maintaining peak Google visibility through our in-house technology solutions.',
      link: '/services/ai-seo',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Custom Web Development with Enhanced Script Integration',
      description: 'Google-optimized websites designed for conversion with advanced proprietary script integration capabilities that unlock enhanced optimization tools and deeper performance control.',
      link: '/services/website-development',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Comprehensive Digital Marketing Campaign Management',
      description: 'Strategic digital marketing campaigns powered by our SEO dashboard platform featuring real-time performance tracking, organic search traffic generation tools, and proven Google optimization tactics for sustainable growth.',
      link: '/services/digital-marketing',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  // Service Catalog Schema
  const serviceCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "True Rank Digital Services",
    "description": "Comprehensive digital marketing and SEO services catalog",
    "provider": {
      "@type": "Organization",
      "@id": "https://truerankdigital.com/#organization",
      "name": "True Rank Digital"
    },
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Local Pack Domination & Google Maps Optimization",
          "description": "Dominate local pack positioning with proprietary dashboard featuring grid map ranking verification",
          "url": "https://truerankdigital.com/services/local-seo",
          "provider": {
            "@id": "https://truerankdigital.com/#organization"
          },
          "areaServed": "United States",
          "serviceType": "Local Pack Domination"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Google Business Profile Management",
          "description": "Comprehensive GBP management with advanced optimization tools and automated consistency monitoring",
          "url": "https://truerankdigital.com/services/google-business-profile",
          "provider": {
            "@id": "https://truerankdigital.com/#organization"
          },
          "areaServed": "United States",
          "serviceType": "Business Listing Management"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Search Optimization",
          "description": "Revolutionary custom algorithm adaptation scripts that automatically adjust to Google algorithm changes",
          "url": "https://truerankdigital.com/services/ai-seo",
          "provider": {
            "@id": "https://truerankdigital.com/#organization"
          },
          "areaServed": "United States",
          "serviceType": "AI Search Optimization"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Web Development",
          "description": "Google-optimized websites with advanced proprietary script integration capabilities",
          "url": "https://truerankdigital.com/services/website-development",
          "provider": {
            "@id": "https://truerankdigital.com/#organization"
          },
          "areaServed": "United States",
          "serviceType": "Web Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Marketing Campaign Management",
          "description": "Strategic digital marketing campaigns powered by dashboard platform with real-time tracking",
          "url": "https://truerankdigital.com/services/digital-marketing",
          "provider": {
            "@id": "https://truerankdigital.com/#organization"
          },
          "areaServed": "United States",
          "serviceType": "Digital Marketing"
        }
      }
    ]
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://truerankdigital.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://truerankdigital.com/services"
      }
    ]
  };

  return (
    <>
      {/* Service Catalog Schema */}
      <Script
        id="service-catalog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceCatalogSchema)
        }}
      />
      
      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />

      <div className="pt-16 min-h-screen bg-gradient-to-b from-brand-light/20 to-white">
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-primary/10 rounded-full mb-6">
            <Search className="w-5 h-5 text-brand-primary" />
            <span className="text-brand-primary font-semibold text-sm">Our Services</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
            Professional Digital Marketing Services & Dashboard Platform
          </h1>
          
          <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-8">
            Access our comprehensive suite of digital marketing services powered by our proprietary dashboard platform. Every service includes grid map ranking analysis, competitor intelligence monitoring, and automated Google knowledge graph consistency tools designed to get your business found on Google faster through proven optimization tactics mastered by professionals.
          </p>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="glass-card p-6 lg:p-8">
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                Our Process: Proprietary Platform + Proven Strategies
              </h2>
              <p className="text-brand-dark/70 leading-relaxed">
                Every client receives access to our exclusive digital marketing platform featuring real-time performance tracking, keyword search volume analysis tools, and automated optimization scripts. Our in-house technology solutions and custom solution building frameworks deliver sustainable results that adapt to Google algorithm changes automatically. While our dashboard platform works with any website, clients choosing our custom web builds unlock enhanced capabilities through proprietary script integration.
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
    </>
  );
}
