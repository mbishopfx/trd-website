import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, Star, MapPin, TrendingUp, CheckCircle, Shield, Award, Clock, BarChart3, Camera, MessageSquare, Search, ArrowRight, Phone, Zap } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema, { generateServiceFAQs } from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'Google Business Profile Management & Optimization Services | True Rank Digital',
  description: 'Expert Google Business Profile management from True Rank Digital. GBP optimization, review management, and visibility enhancement for local businesses.',
  keywords: 'Google Business Profile optimization, GBP management, Google My Business, review management, local listings, local pack rankings, GBP expert, profile optimization, local SEO',
  openGraph: {
    title: 'Google Business Profile Management | True Rank Digital',
    description: 'Expert GBP optimization with proven strategies for local visibility, review management, and profile quality.',
    url: 'https://truerankdigital.com/services/google-business-profile',
    type: 'website',
  },
  alternates: {
    canonical: 'https://truerankdigital.com/services/google-business-profile'
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

export default function GoogleBusinessProfilePage() {
  const faqs = generateServiceFAQs('googleBusinessProfile', [
    {
      question: "How often should I update my Google Business Profile?",
      answer: "True Rank Digital recommends updating your Google Business Profile regularly with new posts, photos, and offers. Our review management system monitors activity and we provide ongoing optimization updates to help maintain visibility in local search results and Google Maps. Consistent activity signals to Google that your business is active and engaged."
    },
    {
      question: "What's included in True Rank Digital's GBP management service?",
      answer: "Our comprehensive GBP management includes: complete profile optimization (categories, attributes, services, products), Google Posts creation, photo optimization and geotagging, review monitoring and response management, Q&A management, citation consistency auditing, competitor analysis, performance reporting, and access to our proprietary dashboard for tracking."
    },
    {
      question: "How long does it take to see results from GBP optimization?",
      answer: "Timelines vary based on your current profile state, competition level, review velocity, and industry. We focus on measurable progress and provide consistent reporting on visibility, engagement, and key actions like calls and direction requests."
    },
    {
      question: "Can you help with negative reviews on my Google Business Profile?",
      answer: "Yes, True Rank Digital provides comprehensive review management including professional response strategies for negative reviews, review removal requests for policy violations, and proactive review generation campaigns to strengthen your overall reputation over time."
    },
    {
      question: "Do you manage Google Business Profiles for multi-location businesses?",
      answer: "Absolutely. True Rank Digital specializes in multi-location GBP management with centralized reporting, location-specific optimization strategies, and scalable processes. We help maintain brand consistency while optimizing for local relevance at each location."
    }
  ]);

  const optimizationProcess = [
    {
      step: '01',
      title: 'Comprehensive Audit',
      description: 'We analyze your current GBP status, competitor profiles, and local market opportunities using our proprietary audit framework.',
      details: ['Profile completeness score', 'Category optimization analysis', 'Competitor gap analysis', 'Citation consistency check']
    },
    {
      step: '02',
      title: 'Strategic Optimization',
      description: 'Our GBP specialists implement proven optimization strategies based on repeatable workflows and local intent best practices.',
      details: ['Primary & secondary categories', 'Service/product catalog setup', 'Attribute optimization', 'Business description enhancement']
    },
    {
      step: '03',
      title: 'Content & Media Strategy',
      description: 'We create and manage engaging content that drives visibility and customer engagement.',
      details: ['Google Posts', 'Geotagged photo optimization', 'Video content integration', 'Q&A management']
    },
    {
      step: '04',
      title: 'Review Management',
      description: 'Proactive review generation and professional response management to build trust and improve ratings.',
      details: ['Review generation campaigns', 'Response templates & management', 'Negative review mitigation', 'Rating improvement strategies']
    },
    {
      step: '05',
      title: 'Ongoing Monitoring',
      description: 'Continuous tracking and optimization through our proprietary dashboard platform.',
      details: ['Real-time performance tracking', 'Competitor monitoring', 'Algorithm update adaptation', 'Monthly strategy calls']
    }
  ];

  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Local Pack Optimization',
      description: 'Strategic optimization to improve your visibility in Google\'s local results and map-based searches.'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Review Management',
      description: 'Comprehensive review monitoring and response management with a focus on trust, relevance, and customer experience.'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Visual Content Strategy',
      description: 'Professional photo optimization with geotagging, virtual tours integration, and video content management.'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Google Posts Management',
      description: 'Weekly posts including offers, events, updates, and products to maintain profile activity and engagement.'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Performance Analytics',
      description: 'Real-time dashboard tracking impressions, clicks, calls, direction requests, and conversion metrics.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Profile Protection',
      description: 'Monitoring for unauthorized edits, spam, and competitor attacks with rapid response protocols.'
    }
  ];

  const results = [
    { title: 'Profile Quality', description: 'Complete, accurate listings aligned to your real services and service areas.' },
    { title: 'Local Visibility', description: 'Optimization that improves coverage across Google Maps and local intent searches.' },
    { title: 'Trust Signals', description: 'Review workflows and on-profile signals that support credibility and conversions.' },
    { title: 'Transparent Tracking', description: 'Clear reporting so you can see what changed and what improved over time.' }
  ];

  const relatedServices = [
    { name: 'Local SEO', href: '/services/local-seo', description: 'Comprehensive local search optimization' },
    { name: 'Digital Marketing', href: '/services/digital-marketing', description: 'Full-service digital marketing' },
    { name: 'Website Engineering', href: '/services/website-development', description: 'Google-optimized websites' },
    { name: 'Business Consulting', href: '/services/business-consulting', description: 'Strategic growth guidance' }
  ];

  return (
    <>
      <GEOSchema 
        pageType="service"
        pageData={{
          title: "Google Business Profile Management by True Rank Digital",
          description: "Expert Google Business Profile optimization and management services to improve local visibility, trust, and conversions.",
          url: "https://truerankdigital.com/services/google-business-profile",
          keywords: ["Google Business Profile", "GBP management", "review management", "local listings", "local pack optimization"],
          category: "Google Business Profile Services",
          serviceType: "Business Listing Management",
          areaServed: ["United States"],
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Services", url: "https://truerankdigital.com/services" },
          { name: "Google Business Profile", url: "https://truerankdigital.com/services/google-business-profile" }
        ]}
        entities={{
          primary: ["True Rank Digital", "Google Business Profile", "GBP Management"],
          secondary: ["Review Management", "Local Listings", "Google Maps", "Local Pack"]
        }}
      />
      
      <ServiceSchema
        serviceName="Google Business Profile Management"
        serviceUrl="https://truerankdigital.com/services/google-business-profile"
        description="Complete Google Business Profile optimization and management services including listing optimization, review management, local visibility enhancement, and automated consistency monitoring."
        serviceType="Business Listing Management"
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
          }
        ]}
      />
      
      <FAQSchema 
        faqs={faqs}
        pageUrl="https://truerankdigital.com/services/google-business-profile"
        category="service"
      />
      
      <article className="pt-16 min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Breadcrumb Navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-brand-dark/60 hover:text-brand-primary transition-colors">Home</Link></li>
            <li className="text-brand-dark/40">/</li>
            <li><Link href="/services" className="text-brand-dark/60 hover:text-brand-primary transition-colors">Services</Link></li>
            <li className="text-brand-dark/40">/</li>
            <li className="text-brand-primary font-medium">Google Business Profile</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-600 font-semibold text-sm">GBP Management Experts</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
                  <strong className="text-brand-primary">Google Business Profile</strong> Management That Drives Real Results
                </h1>
                
                <p className="text-xl text-brand-dark/70 mb-8">
                  <strong>True Rank Digital</strong> helps businesses strengthen their Google Business Profile presence with execution-first optimization, review workflows, and performance tracking designed to improve local visibility and conversions.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center space-x-2 text-brand-dark/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Execution-First Optimization</span>
                  </div>
                  <div className="flex items-center space-x-2 text-brand-dark/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Local Visibility Coverage</span>
                  </div>
                  <div className="flex items-center space-x-2 text-brand-dark/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Trust + Conversion Focus</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full hover:bg-blue-700 transition-colors duration-300"
                  >
                    <TrendingUp className="w-5 h-5" />
                    <span>Get Free GBP Audit</span>
                  </Link>
                  <a
                    href="tel:+17324750139"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold text-lg rounded-full hover:bg-blue-50 transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>(732) 475-0139</span>
                  </a>
                </div>
              </div>

              {/* Results Stats */}
              <div className="grid grid-cols-2 gap-6">
                {results.map((result, index) => (
                  <div key={index} className="glass-card p-6 text-center">
                    <div className="text-lg font-semibold text-brand-dark mb-2">{result.title}</div>
                    <div className="text-sm text-brand-dark/70">{result.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why GBP Matters Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Why <strong className="text-brand-primary">Google Business Profile</strong> Optimization Matters
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Your Google Business Profile is often the first impression customers have of your business. Here&apos;s why professional optimization is critical:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-8">
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">Local Intent Visibility</h3>
                <p className="text-brand-dark/70">Many searches are local and map-driven. A well-optimized GBP helps you show up when customers are looking nearby.</p>
              </div>
              <div className="glass-card p-8">
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">High-Intent Actions</h3>
                <p className="text-brand-dark/70">Your GBP is often the fastest path to calls, direction requests, and website visits from ready-to-buy searchers.</p>
              </div>
              <div className="glass-card p-8">
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">Complete Profiles Win</h3>
                <p className="text-brand-dark/70">Missing categories, services, photos, and responses can reduce visibility. We focus on completeness and consistency.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Comprehensive <strong className="text-brand-primary">GBP Management</strong> Services
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Our full-service Google Business Profile management covers every aspect of your local presence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">{feature.title}</h3>
                  <p className="text-brand-dark/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Our Proven <strong className="text-brand-primary">5-Step Optimization</strong> Process
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Our systematic approach is designed to improve profile quality, local visibility, and conversion signals over time.
              </p>
            </div>

            <div className="space-y-8">
              {optimizationProcess.map((process, index) => (
                <div key={index} className="glass-card p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {process.step}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-heading font-bold text-brand-dark mb-3">{process.title}</h3>
                      <p className="text-brand-dark/70 mb-4">{process.description}</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {process.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-brand-dark/70">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Expertise Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">
                  Why Choose <strong className="text-brand-primary">True Rank Digital</strong> for GBP Management
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Proven Track Record</h3>
                      <p className="text-brand-dark/70">Repeatable GBP workflows focused on profile quality, trust signals, and measurable local visibility improvements over time.</p>
                  </div>
                </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Proprietary Technology</h3>
                      <p className="text-brand-dark/70">Our dashboard platform provides real-time tracking, competitor monitoring, and automated optimization alerts.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Dedicated GBP Specialists</h3>
                      <p className="text-brand-dark/70">Our team focuses exclusively on local search optimization, staying current with every Google update and best practice.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Rapid Response</h3>
                      <p className="text-brand-dark/70">Fast response for profile issues, unauthorized edits, or negative reviews requiring immediate attention.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6 text-center">Industries We Serve</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Law Firms', 'Medical Practices', 'Dental Offices', 'Home Services',
                    'Real Estate', 'Restaurants', 'Auto Repair', 'Financial Services',
                    'Retail Stores', 'Professional Services', 'Healthcare', 'Multi-Location'
                  ].map((industry, index) => (
                    <div key={index} className="flex items-center space-x-2 text-brand-dark/70">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-brand-dark/70">
                Common questions about our Google Business Profile management services.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="glass-card p-6">
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-3">{faq.question}</h3>
                  <p className="text-brand-dark/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Related <strong className="text-brand-primary">Services</strong>
              </h2>
              <p className="text-xl text-brand-dark/70">
                Maximize your results with our complementary services.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((service, index) => (
                <Link key={index} href={service.href} className="glass-card p-6 hover:scale-105 transition-transform duration-300 group">
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">{service.name}</h3>
                  <p className="text-brand-dark/70 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center text-brand-primary font-medium text-sm">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Ready to Dominate <strong className="text-brand-primary">Local Search</strong>?
              </h2>
              <p className="text-xl text-brand-dark/70 mb-8 max-w-2xl mx-auto">
                Get a free Google Business Profile audit and discover how we can improve your local visibility. No obligation, just actionable insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Get Free GBP Audit</span>
                </Link>
                <a
                  href="tel:+17324750139"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold text-lg rounded-full hover:bg-blue-50 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (732) 475-0139</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
