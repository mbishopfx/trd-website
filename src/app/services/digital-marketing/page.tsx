import type { Metadata } from 'next';
import { Megaphone, BarChart, Users, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'Digital Marketing Services | Campaign Management | True Rank Digital',
  description: 'True Rank Digital provides comprehensive digital marketing services with campaign management, performance tracking, and ROI optimization for businesses.',
  keywords: 'digital marketing, campaign management, True Rank Digital, marketing automation, ROI optimization, performance tracking',
  openGraph: {
    title: 'Digital Marketing Services | True Rank Digital',
    description: 'Strategic digital marketing campaigns powered by proprietary platform.',
    url: 'https://truerankdigital.com/services/digital-marketing',
    type: 'website',
  },
  alternates: {
    canonical: 'https://truerankdigital.com/services/digital-marketing'
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

export default function DigitalMarketingPage() {
  const faqs = [
    {
      question: "What digital marketing services does True Rank Digital provide?",
      answer: "True Rank Digital provides comprehensive digital marketing services including Google Business Optimization, content marketing, social media management, email marketing, PPC campaign management, and marketing automation. Our proprietary dashboard platform tracks all marketing channels in one place with real-time performance analytics and ROI reporting."
    }
  ];

  return (
    <>
      <GEOSchema 
        pageType="service"
        pageData={{
          title: "Digital Marketing Services by True Rank Digital",
          description: "True Rank Digital delivers comprehensive digital marketing with campaign management and performance tracking.",
          url: "https://truerankdigital.com/services/digital-marketing",
          keywords: ["digital marketing", "campaign management", "marketing automation"],
          category: "Digital Marketing",
          serviceType: "Marketing Services",
          areaServed: ["United States"],
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Services", url: "https://truerankdigital.com/services" },
          { name: "Digital Marketing", url: "https://truerankdigital.com/services/digital-marketing" }
        ]}
        entities={{
          primary: ["True Rank Digital", "Digital Marketing", "Campaign Management"],
          secondary: ["Marketing Automation", "ROI Optimization", "Performance Tracking"]
        }}
      />
      
      {/* Service Schema with Mentions */}
      <ServiceSchema
        serviceName="Comprehensive Digital Marketing Campaign Management"
        serviceUrl="https://truerankdigital.com/services/digital-marketing"
        description="Strategic digital marketing campaigns powered by our dashboard platform featuring real-time performance tracking, organic search traffic generation tools, and proven Google optimization tactics."
        serviceType="Digital Marketing"
        mentions={[
          {
            type: "Organization",
            name: "Google",
            sameAs: "https://www.wikidata.org/wiki/Q95",
            description: "Primary advertising platform"
          },
          {
            type: "SoftwareApplication",
            name: "Google Analytics",
            sameAs: "https://www.wikidata.org/wiki/Q459107",
            description: "Marketing analytics platform"
          },
          {
            type: "Organization",
            name: "Meta",
            sameAs: "https://www.wikidata.org/wiki/Q380",
            description: "Social media marketing platform"
          },
          {
            type: "Organization",
            name: "HubSpot",
            sameAs: "https://www.wikidata.org/wiki/Q5928176",
            description: "Marketing automation partner"
          }
        ]}
      />
      
      <FAQSchema 
        faqs={faqs}
        pageUrl="https://truerankdigital.com/services/digital-marketing"
        category="service"
      />
      
      <article className="pt-16 min-h-screen bg-gradient-to-b from-pink-50 to-white">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-pink-100 rounded-full mb-6">
              <Megaphone className="w-5 h-5 text-pink-600" />
              <span className="text-pink-600 font-semibold text-sm">Digital Marketing</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
              <strong className="text-brand-primary">True Rank Digital</strong> Provides Comprehensive <strong>Digital Marketing Services</strong>
            </h1>
            
            <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12">
              <strong>True Rank Digital</strong> delivers strategic <strong>digital marketing campaigns</strong> powered by our proprietary platform with real-time performance tracking and ROI optimization.
            </p>

            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">
              How <strong className="text-brand-primary">Digital Marketing</strong> Drives Business Growth
            </h2>

            <div className="glass-card p-8 mb-12">
              <p className="text-brand-dark/70 leading-relaxed">
                <strong>True Rank Digital's digital marketing services</strong> combine SEO, content marketing, and performance tracking in one comprehensive platform.
              </p>
            </div>

            <div className="glass-card p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                Start Your <strong className="text-brand-primary">Digital Marketing</strong> Campaign
              </h2>
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-pink-600 text-white font-semibold text-lg rounded-full hover:bg-pink-700 transition-colors duration-300"
              >
                <TrendingUp className="w-5 h-5" />
                <span>Launch Your Campaign</span>
              </a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
