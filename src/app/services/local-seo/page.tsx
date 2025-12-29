import type { Metadata } from 'next';
import { Search, MapPin, TrendingUp, CheckCircle } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema, { generateServiceFAQs } from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

// GEO-Optimized Metadata
export const metadata: Metadata = {
  title: 'Local SEO Services | Grid Map Ranking Analysis | True Rank Digital',
  description: 'True Rank Digital provides professional local SEO services with proprietary grid map ranking verification, competitor analysis platform, and automated Google knowledge graph consistency monitoring.',
  keywords: 'local SEO services, True Rank Digital, grid map ranking, Google Maps optimization, local search engine optimization, Google Business Profile, East Brunswick NJ, competitor analysis tools',
  openGraph: {
    title: 'Professional Local SEO Services | True Rank Digital',
    description: 'Get found on Google with local SEO services featuring grid map ranking verification and competitor analysis.',
    url: 'https://truerankdigital.com/services/local-seo',
    type: 'website',
    images: [{
      url: 'https://truerankdigital.com/images/services/local-seo.jpg',
      width: 1200,
      height: 630,
      alt: 'True Rank Digital Local SEO Services'
    }]
  },
  alternates: {
    canonical: 'https://truerankdigital.com/services/local-seo'
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

  // Service-specific FAQs
  const faqs = generateServiceFAQs('localSEO', [
    {
      question: "What is grid map ranking analysis?",
      answer: "Grid map ranking analysis is True Rank Digital's proprietary technology that verifies your business's Google Maps ranking from multiple geographic locations. Our dashboard platform tracks your position in the local pack across a grid of coordinates around your service area, providing precise data on where customers can find your business on Google Maps."
    },
    {
      question: "Can True Rank Digital help my business rank for multiple locations?",
      answer: "Yes, True Rank Digital specializes in multi-location SEO strategies for businesses serving multiple cities or regions. Our grid map ranking verification works across all your service areas, and our proprietary platform monitors Google Business Profile performance for each location separately while maintaining brand consistency."
    }
  ]);

  return (
    <>
      {/* Advanced GEO Schema */}
      <GEOSchema 
        pageType="service"
        pageData={{
          title: "Professional Local SEO Services by True Rank Digital",
          description: "True Rank Digital delivers professional local SEO services with proprietary grid map ranking verification, competitor analysis platform, and automated Google knowledge graph consistency monitoring for businesses.",
          url: "https://truerankdigital.com/services/local-seo",
          keywords: ["local SEO", "Google Maps optimization", "grid map ranking", "Google Business Profile", "local search"],
          category: "Local SEO Services",
          serviceType: "Local Search Engine Optimization",
          areaServed: ["United States", "New Jersey", "New York", "Pennsylvania"],
          steps: [
            {
              name: "Technical SEO Audit",
              text: "True Rank Digital scans your website with proprietary problem detection software to find issues other SEO companies miss at the code level."
            },
            {
              name: "Custom Schema Markup Engineering",
              text: "We create hand-crafted structured data schemas specifically for your business type to help search engines understand your content better than competitors."
            },
            {
              name: "LLM.txt Creation & Optimization",
              text: "We develop and optimize LLM.txt files designed for AI search engines like ChatGPT, Claude, and Perplexity to improve your AI search visibility."
            },
            {
              name: "Custom Solution Implementation",
              text: "We build and implement custom software solutions to fix identified problems and optimize your website's search engine performance."
            },
            {
              name: "Ongoing Monitoring & Optimization",
              text: "Our custom software continuously monitors and optimizes your website's performance, making real-time adjustments for maximum search visibility."
            }
          ]
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Services", url: "https://truerankdigital.com/services" },
          { name: "Local SEO", url: "https://truerankdigital.com/services/local-seo" }
        ]}
        entities={{
          primary: ["True Rank Digital", "Local SEO Services", "Grid Map Ranking"],
          secondary: ["Google Maps Optimization", "Google Business Profile", "East Brunswick NJ"]
        }}
      />
      
      {/* Service Schema with Mentions */}
      <ServiceSchema
        serviceName="Local SEO & Google Maps Optimization"
        serviceUrl="https://truerankdigital.com/services/local-seo"
        description="Professional local search engine optimization services with grid map ranking verification, Google Business Profile optimization, and automated knowledge graph consistency monitoring for maximum local visibility."
        serviceType="Local SEO"
        mentions={[
          {
            type: "Organization",
            name: "Google",
            sameAs: "https://www.wikidata.org/wiki/Q95",
            description: "Primary search engine platform"
          },
          {
            type: "Product",
            name: "Google Business Profile",
            sameAs: "https://www.wikidata.org/wiki/Q17633166",
            description: "Business listing platform"
          },
          {
            type: "Product",
            name: "Google Maps",
            sameAs: "https://www.wikidata.org/wiki/Q12013",
            description: "Mapping and local search platform"
          },
          {
            type: "SoftwareApplication",
            name: "Google Search Console",
            sameAs: "https://www.wikidata.org/wiki/Q1503528",
            description: "Search performance monitoring tool"
          },
          {
            type: "Organization",
            name: "Schema.org",
            sameAs: "https://www.wikidata.org/wiki/Q845256",
            description: "Structured data vocabulary"
          }
        ]}
      />
      
      {/* FAQ Schema */}
      <FAQSchema 
        faqs={faqs}
        pageUrl="https://truerankdigital.com/services/local-seo"
        category="service"
      />
      
      <article className="pt-16 min-h-screen bg-gradient-to-b from-green-50 to-white">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 rounded-full mb-6">
              <Search className="w-5 h-5 text-green-600" />
              <span className="text-green-600 font-semibold text-sm">Local SEO</span>
            </div>
          
          {/* GEO-Optimized H1 with Subject-Predicate-Object */}
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
            <strong className="text-brand-primary">True Rank Digital</strong> Provides Professional <strong>Local SEO Services</strong> with Grid Map Ranking Analysis
          </h1>
          
          <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-8">
            <strong>True Rank Digital</strong> delivers <strong>local search engine optimization</strong> with proven Google optimization tactics and proprietary SEO dashboard platform. Our in-house technology solutions provide faster <strong>local search positioning</strong> through advanced <strong>grid map ranking analysis</strong>, competitor intelligence monitoring, and automated <strong>Google knowledge graph</strong> consistency tracking.
          </p>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="glass-card p-6 lg:p-8 mb-8">
              {/* Question-Based H2 */}
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                How <strong className="text-brand-primary">True Rank Digital's</strong> Local SEO Process Works
              </h2>
              <p className="text-brand-dark/70 leading-relaxed">
                Every <strong>local SEO</strong> client gains access to our exclusive <strong>digital marketing platform</strong> featuring real-time <strong>grid map ranking verification</strong>, comprehensive keyword search volume research tools, and automated <strong>competitor analysis monitoring</strong>. Our algorithm-proof strategies combine proven Google tactics mastered by professionals with custom solution building frameworks that keep you ahead of search algorithm changes.
              </p>
            </div>
          </div>

          {/* H2 for Benefits Section */}
          <h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">
            What <strong className="text-brand-primary">Results</strong> You Get from Local SEO Services
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 glass-card p-4">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-brand-dark font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* H2 for Process Steps */}
          <h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">
            Your <strong className="text-brand-primary">Local SEO</strong> Process in 5 Steps
          </h2>

          <div className="grid gap-6 mb-12 text-left">
            <div className="glass-card p-6">
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                Step 1: Technical SEO Audit with Proprietary Software
              </h3>
              <p className="text-brand-dark/70">
                <strong>True Rank Digital</strong> scans your website with proprietary problem detection software to find issues other SEO companies miss at the code level.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                Step 2: Custom Schema Markup Engineering
              </h3>
              <p className="text-brand-dark/70">
                We create hand-crafted <strong>structured data schemas</strong> specifically for your business type to help search engines understand your content better than competitors.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                Step 3: LLM.txt Creation & AI Optimization
              </h3>
              <p className="text-brand-dark/70">
                We develop and optimize <strong>LLM.txt files</strong> designed for AI search engines like ChatGPT, Claude, and Perplexity to improve your AI search visibility.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                Step 4: Custom Solution Implementation
              </h3>
              <p className="text-brand-dark/70">
                We build and implement custom software solutions to fix identified problems and optimize your website's <strong>search engine performance</strong>.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                Step 5: Ongoing Monitoring & Optimization
              </h3>
              <p className="text-brand-dark/70">
                Our custom software continuously monitors and optimizes your website's performance with real-time <strong>grid map ranking</strong> tracking and competitor analysis.
              </p>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="glass-card p-8 lg:p-10">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
              Why Businesses Choose <strong className="text-brand-primary">True Rank Digital</strong> for Local SEO
            </h2>
            <p className="text-brand-dark/70 mb-6 leading-relaxed">
              Start dominating <strong>local search engine results</strong> with our proven Google optimization tactics and exclusive client dashboard featuring <strong>grid map ranking analysis</strong>, keyword search volume research tools, and automated Google knowledge graph consistency monitoring. Our professional <strong>local search positioning strategies</strong> are designed to get your business found on Google faster.
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
      </article>
    </>
  );
}
