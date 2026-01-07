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
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Digital Marketing and Advertising',
      description: 'True Rank Digital is a leading digital marketing agency specializing in SEO, PPC, Google Business Profile Optimization and content strategy to boost your online presence and drive growth.',
      link: '/services/digital-marketing',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Google Business Profile Optimization',
      description: 'Maximize your visibility on Google with True Rank Digital\'s GBP Optimization services. We expertly fine-tune your profile to enhance local search rankings, attract more traffic, and increase engagement.',
      link: '/services/google-business-profile',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Website Engineering',
      description: 'True Rank Digital offers comprehensive website engineering, including custom design, development, and UX optimization to enhance your online presence and user engagement.',
      link: '/services/website-development',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Social Marketing and Advertising',
      description: 'Grow your brand naturally with True Rank Digital\'s organic social media services. We manage and enhance your social presence through strategic content and community engagement.',
      link: '/services/social-media',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'CRM With AI Chat',
      description: 'True Rank Digital\'s AI-powered CRM streamlines customer interactions with an AI chatbot that sets appointments, handles follow-ups, and enhances customer engagement seamlessly.',
      link: '/services/crm-ai-chat',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Business Consulting',
      description: 'Achieve sustainable growth with True Rank Digital\'s business consulting. We offer strategic guidance on digital marketing, process optimization, and market expansion.',
      link: '/services/business-consulting',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Local SEO',
      description: 'Dominate local search results with True Rank Digital\'s Local SEO services. We optimize your online presence to ensure customers in your area find you first on Google.',
      link: '/services/local-seo',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'PPC Campaigns',
      description: 'Drive immediate results with True Rank Digital\'s PPC campaigns. We create targeted Google Ads that generate quality leads and maximize your advertising ROI.',
      link: '/services/ppc-campaigns',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO Tactics',
      description: 'Master proven SEO tactics with True Rank Digital. Our strategic approach combines technical optimization, content strategy, and link building to boost your Google rankings.',
      link: '/services/seo-tactics',
      color: 'from-emerald-500 to-green-500'
    }
  ];

  // Service Catalog Schema - Matches GBP (9 services, no prices)
  const serviceCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "True Rank Digital Services",
    "description": "Comprehensive digital marketing services catalog",
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
          "name": "Digital Marketing and Advertising",
          "description": "True Rank Digital is a leading digital marketing agency specializing in SEO, PPC, Google Business Profile Optimization and content strategy to boost your online presence and drive growth.",
          "url": "https://truerankdigital.com/services/digital-marketing",
          "provider": {
            "@id": "https://truerankdigital.com/#organization"
          },
          "areaServed": "United States",
          "serviceType": "Digital Marketing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Google Business Profile Optimization",
          "description": "Maximize your visibility on Google with True Rank Digital's GBP Optimization services. We expertly fine-tune your profile to enhance local search rankings, attract more traffic, and increase engagement.",
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
          "name": "Website Engineering",
          "description": "True Rank Digital offers comprehensive website engineering, including custom design, development, and UX optimization to enhance your online presence and user engagement.",
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
          "name": "Social Marketing and Advertising",
          "description": "Grow your brand naturally with True Rank Digital's organic social media services. We manage and enhance your social presence through strategic content and community engagement.",
          "url": "https://truerankdigital.com/services/social-media",
          "provider": {
            "@id": "https://truerankdigital.com/#organization"
          },
          "areaServed": "United States",
          "serviceType": "Social Media Marketing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "CRM With AI Chat",
          "description": "True Rank Digital's AI-powered CRM streamlines customer interactions with an AI chatbot that sets appointments, handles follow-ups, and enhances customer engagement seamlessly.",
          "url": "https://truerankdigital.com/services/crm-ai-chat",
          "provider": {
            "@id": "https://truerankdigital.com/#organization"
          },
          "areaServed": "United States",
          "serviceType": "CRM Software"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Consulting",
          "description": "Achieve sustainable growth with True Rank Digital's business consulting. We offer strategic guidance on digital marketing, process optimization, and market expansion.",
          "url": "https://truerankdigital.com/services/business-consulting",
          "provider": {
            "@id": "https://truerankdigital.com/#organization"
          },
          "areaServed": "United States",
          "serviceType": "Business Consulting"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Local SEO",
          "description": "Dominate local search results with True Rank Digital's Local SEO services. We optimize your online presence to ensure customers in your area find you first on Google.",
          "url": "https://truerankdigital.com/services/local-seo",
          "provider": {
            "@id": "https://truerankdigital.com/#organization"
          },
          "areaServed": "United States",
          "serviceType": "Local SEO"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "PPC Campaigns",
          "description": "Drive immediate results with True Rank Digital's PPC campaigns. We create targeted Google Ads that generate quality leads and maximize your advertising ROI.",
          "url": "https://truerankdigital.com/services/ppc-campaigns",
          "provider": {
            "@id": "https://truerankdigital.com/#organization"
          },
          "areaServed": "United States",
          "serviceType": "PPC Advertising"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Tactics",
          "description": "Master proven SEO tactics with True Rank Digital. Our strategic approach combines technical optimization, content strategy, and link building to boost your Google rankings.",
          "url": "https://truerankdigital.com/services/seo-tactics",
          "provider": {
            "@id": "https://truerankdigital.com/#organization"
          },
          "areaServed": "United States",
          "serviceType": "SEO Strategy"
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
            Digital Marketing Services That Drive Growth
          </h1>
          
          <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-8">
            True Rank Digital delivers comprehensive digital marketing solutions including Google Business Profile optimization, website engineering, AI-powered CRM, social media marketing, business consulting, and proven SEO strategies to help your business dominate online.
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
