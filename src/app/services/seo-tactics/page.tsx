import type { Metadata } from 'next';
import Link from 'next/link';
import { Search, TrendingUp, FileText, Link2, Settings, BarChart3, ArrowRight, CheckCircle, Phone, Award, Shield, Zap, Globe, Code, Database, Users } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'SEO Tactics | Proven Search Optimization Strategies | True Rank Digital',
  description: 'Master proven SEO tactics with True Rank Digital. Our strategic approach combines technical optimization, content strategy, and link building to boost your Google rankings.',
  keywords: 'SEO tactics, search engine optimization, technical SEO, content strategy, link building, True Rank Digital, Google rankings, organic traffic',
  openGraph: {
    title: 'SEO Tactics | True Rank Digital',
    description: 'Proven SEO strategies combining technical SEO, content strategy, and link building.',
    url: 'https://truerankdigital.com/services/seo-tactics',
    type: 'website',
  },
  alternates: {
    canonical: 'https://truerankdigital.com/services/seo-tactics'
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

export default function SEOTacticsPage() {
  const faqs = [
    {
      question: "How long does it take to see SEO results?",
      answer: "SEO is a long-term strategy. Timelines vary based on your current website authority, competition level, content quality, and how quickly we can implement fixes. We provide consistent progress reporting and focus on measurable improvements over time."
    },
    {
      question: "What SEO tactics does True Rank Digital use?",
      answer: "True Rank Digital employs a comprehensive SEO approach including technical optimization (site speed, Core Web Vitals, schema markup, mobile-friendliness), on-page SEO (content optimization, keyword targeting, internal linking), off-page SEO (link building, brand mentions, digital PR), and local SEO for businesses targeting geographic areas."
    },
    {
      question: "Is SEO still effective in 2026?",
      answer: "Absolutely. SEO remains one of the most effective digital marketing channels with the highest ROI. While tactics evolve with Google's algorithms and AI integration, the fundamentals of quality content, technical excellence, and authoritative backlinks continue to drive organic search success. We stay ahead of algorithm updates and industry changes."
    },
    {
      question: "How do you measure SEO success?",
      answer: "We track multiple metrics including keyword rankings, organic traffic, click-through rates, bounce rates, time on site, and most importantly—conversions and revenue. Our proprietary dashboard provides real-time visibility into all metrics. We focus on business outcomes, not just vanity metrics like rankings alone."
    },
    {
      question: "What's the difference between SEO and PPC?",
      answer: "SEO (organic) builds long-term visibility through content and technical optimization—you don't pay per click. PPC (paid) provides immediate visibility but requires ongoing ad spend. True Rank Digital recommends both for maximum impact: PPC for immediate results while SEO builds sustainable organic traffic over time."
    }
  ];

  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Technical SEO',
      description: 'Optimize your website\'s technical foundation for search engine crawling, indexing, and ranking.',
      details: ['Core Web Vitals', 'Site speed optimization', 'Schema markup', 'XML sitemaps']
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Content Strategy',
      description: 'Create optimized content that ranks for target keywords and establishes topical authority.',
      details: ['Keyword research', 'Content planning', 'On-page optimization', 'Content clusters']
    },
    {
      icon: <Link2 className="w-8 h-8" />,
      title: 'Link Building',
      description: 'Build high-quality backlinks that increase your domain authority and search rankings.',
      details: ['Outreach campaigns', 'Guest posting', 'Digital PR', 'Broken link building']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'On-Page SEO',
      description: 'Optimize every page element for maximum search visibility and user engagement.',
      details: ['Title tags & meta', 'Header optimization', 'Internal linking', 'Image optimization']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Schema Markup',
      description: 'Implement structured data to enhance search listings and win rich snippets.',
      details: ['Organization schema', 'Product schema', 'FAQ schema', 'Review schema']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analytics & Reporting',
      description: 'Track rankings, traffic, and conversions with comprehensive monthly reporting.',
      details: ['Rank tracking', 'Traffic analysis', 'Conversion tracking', 'Competitor monitoring']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'SEO Audit & Analysis',
      description: 'We conduct a comprehensive audit of your current SEO status, identifying opportunities and issues.',
      details: ['Technical audit', 'Content analysis', 'Backlink profile', 'Competitor research']
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Based on audit findings, we develop a customized SEO strategy aligned with your business goals.',
      details: ['Keyword targeting', 'Content roadmap', 'Technical priorities', 'Link building plan']
    },
    {
      step: '03',
      title: 'Technical Foundation',
      description: 'We optimize your website\'s technical infrastructure for search engine success.',
      details: ['Site speed', 'Mobile optimization', 'Schema implementation', 'Crawl optimization']
    },
    {
      step: '04',
      title: 'Content Optimization',
      description: 'We optimize existing content and create new content targeting high-value keywords.',
      details: ['On-page optimization', 'Content creation', 'Internal linking', 'Content refresh']
    },
    {
      step: '05',
      title: 'Authority Building',
      description: 'We build your domain authority through strategic link building and digital PR.',
      details: ['Link outreach', 'Guest posting', 'Brand mentions', 'Citation building']
    },
    {
      step: '06',
      title: 'Monitor & Optimize',
      description: 'We continuously monitor performance and optimize strategies based on data.',
      details: ['Rank monitoring', 'Traffic analysis', 'Algorithm adaptation', 'Strategy refinement']
    }
  ];

  const results = [
    { title: 'Execution-First Strategy', description: 'Technical SEO, content, and authority-building built around your goals.' },
    { title: 'Transparent Reporting', description: 'Clear visibility into what we changed, what improved, and what we’re doing next.' },
    { title: 'Sustainable Practices', description: 'White-hat tactics designed to build durable, algorithm-resistant growth.' },
    { title: 'Conversion Focus', description: 'We optimize for business outcomes, not vanity metrics.' }
  ];

  const tactics = [
    'Keyword Research', 'Technical SEO', 'On-Page Optimization', 'Content Strategy',
    'Link Building', 'Local SEO', 'Schema Markup', 'Core Web Vitals',
    'Mobile Optimization', 'Site Architecture', 'Internal Linking', 'E-E-A-T Optimization'
  ];

  const relatedServices = [
    { name: 'Local SEO', href: '/services/local-seo', description: 'Dominate local search results' },
    { name: 'Google Business Profile', href: '/services/google-business-profile', description: 'Optimize your local presence' },
    { name: 'Digital Marketing', href: '/services/digital-marketing', description: 'Comprehensive marketing strategy' },
    { name: 'PPC Campaigns', href: '/services/ppc-campaigns', description: 'Immediate paid results' }
  ];

  return (
    <>
      <GEOSchema 
        pageType="service"
        pageData={{
          title: "SEO Tactics by True Rank Digital",
          description: "Proven SEO strategies combining technical optimization, content strategy, and link building to boost Google rankings.",
          url: "https://truerankdigital.com/services/seo-tactics",
          keywords: ["SEO tactics", "search engine optimization", "technical SEO", "content strategy", "link building"],
          category: "SEO Services",
          serviceType: "SEO Strategy",
          areaServed: ["United States"],
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Services", url: "https://truerankdigital.com/services" },
          { name: "SEO Tactics", url: "https://truerankdigital.com/services/seo-tactics" }
        ]}
        entities={{
          primary: ["True Rank Digital", "SEO Tactics", "Search Engine Optimization"],
          secondary: ["Technical SEO", "Content Strategy", "Link Building", "E-E-A-T"]
        }}
      />
      
      <ServiceSchema
        serviceName="SEO Tactics"
        serviceUrl="https://truerankdigital.com/services/seo-tactics"
        description="Master proven SEO tactics with True Rank Digital. Our strategic approach combines technical optimization, content strategy, and link building to boost your Google rankings."
        serviceType="SEO Strategy"
        mentions={[
          {
            type: "Thing",
            name: "Search Engine Optimization",
            sameAs: "https://www.wikidata.org/wiki/Q180711",
            description: "SEO practices and strategies"
          },
          {
            type: "Organization",
            name: "Google",
            sameAs: "https://www.wikidata.org/wiki/Q95",
            description: "Primary search engine"
          },
          {
            type: "Thing",
            name: "Backlink",
            sameAs: "https://www.wikidata.org/wiki/Q599299",
            description: "Link building strategy"
          },
          {
            type: "Thing",
            name: "Core Web Vitals",
            sameAs: "https://www.wikidata.org/wiki/Q97584411",
            description: "Google's page experience metrics"
          }
        ]}
      />
      
      <FAQSchema 
        faqs={faqs}
        pageUrl="https://truerankdigital.com/services/seo-tactics"
        category="service"
      />
      
      <article className="pt-16 min-h-screen bg-gradient-to-b from-emerald-50 to-white">
        {/* Breadcrumb Navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-brand-dark/60 hover:text-brand-primary transition-colors">Home</Link></li>
            <li className="text-brand-dark/40">/</li>
            <li><Link href="/services" className="text-brand-dark/60 hover:text-brand-primary transition-colors">Services</Link></li>
            <li className="text-brand-dark/40">/</li>
            <li className="text-brand-primary font-medium">SEO Tactics</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
                  <Search className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-600 font-semibold text-sm">SEO Strategy</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
                  Proven <strong className="text-brand-primary">SEO Tactics</strong> That Drive Organic Growth
                </h1>
                
                <p className="text-xl text-brand-dark/70 mb-8">
                  Master proven <strong>SEO tactics</strong> with <strong>True Rank Digital</strong>. Our strategic approach combines <strong>technical optimization</strong>, <strong>content strategy</strong>, and <strong>link building</strong> to boost your <strong>Google rankings</strong>.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center space-x-2 text-brand-dark/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Technical + Content + Authority</span>
                  </div>
                  <div className="flex items-center space-x-2 text-brand-dark/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Transparent Progress Reporting</span>
                  </div>
                  <div className="flex items-center space-x-2 text-brand-dark/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Built for Sustainable Growth</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-emerald-600 text-white font-semibold text-lg rounded-full hover:bg-emerald-700 transition-colors duration-300"
                  >
                    <Search className="w-5 h-5" />
                    <span>Get Free SEO Audit</span>
                  </Link>
                  <a
                    href="tel:+17324750139"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-emerald-600 text-emerald-700 font-semibold text-lg rounded-full hover:bg-emerald-50 transition-colors duration-300"
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

        {/* Why SEO Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Why <strong className="text-brand-primary">SEO</strong> Is Your Best Investment
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Organic search remains the highest-ROI marketing channel for sustainable growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-8">
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">Compounding Visibility</h3>
                <p className="text-brand-dark/70">Organic growth builds over time and can keep working even when you pause paid campaigns.</p>
              </div>
              <div className="glass-card p-8">
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">Cost Efficiency</h3>
                <p className="text-brand-dark/70">You&apos;re not paying per click, so strong organic performance can reduce reliance on ads over time.</p>
              </div>
              <div className="glass-card p-8">
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">High Intent Traffic</h3>
                <p className="text-brand-dark/70">Searchers are actively looking for answers and providers, which can translate to stronger lead quality.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Our <strong className="text-brand-primary">SEO</strong> Services
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Comprehensive SEO services covering every aspect of search optimization.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-4 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">{service.title}</h3>
                  <p className="text-brand-dark/70 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-brand-dark/70">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tactics Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                SEO <strong className="text-brand-primary">Tactics</strong> We Implement
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Proven tactics that deliver measurable results.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {tactics.map((tactic, index) => (
                <div key={index} className="px-6 py-3 bg-emerald-100 rounded-full text-emerald-700 font-medium">
                  {tactic}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Our <strong className="text-brand-primary">SEO Process</strong>
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                A systematic approach to building sustainable organic growth.
              </p>
            </div>

            <div className="space-y-8">
              {process.map((item, index) => (
                <div key={index} className="glass-card p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-heading font-bold text-brand-dark mb-3">{item.title}</h3>
                      <p className="text-brand-dark/70 mb-4">{item.description}</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {item.details.map((detail, idx) => (
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

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">
                  Why Choose <strong className="text-brand-primary">True Rank Digital</strong> for SEO
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Proven Results</h3>
                      <p className="text-brand-dark/70">Execution-first SEO focused on technical quality, strong content, and durable authority signals.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">White Hat Only</h3>
                      <p className="text-brand-dark/70">We only use ethical, Google-approved SEO tactics. No shortcuts that risk penalties.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Proprietary Tools</h3>
                      <p className="text-brand-dark/70">Our dashboard platform provides real-time tracking, competitor monitoring, and performance insights.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Transparent Reporting</h3>
                      <p className="text-brand-dark/70">Monthly reports with clear metrics, progress tracking, and strategic recommendations.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6 text-center">Industries We Serve</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Professional Services', 'Healthcare', 'Legal', 'Home Services',
                    'Real Estate', 'E-commerce', 'Restaurants', 'Financial Services',
                    'Manufacturing', 'Technology', 'Education', 'Local Services'
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
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-brand-dark/70">
                Common questions about our SEO services.
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
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Related <strong className="text-brand-primary">Services</strong>
              </h2>
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
            <div className="glass-card p-8 bg-gradient-to-br from-emerald-500/10 to-green-500/10">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Ready to <strong className="text-brand-primary">Boost Your Rankings</strong>?
              </h2>
              <p className="text-xl text-brand-dark/70 mb-8 max-w-2xl mx-auto">
                Get a free SEO audit and discover how proven SEO tactics can drive organic traffic and grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-emerald-600 text-white font-semibold text-lg rounded-full hover:bg-emerald-700 transition-colors duration-300"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Get Free SEO Audit</span>
                </Link>
                <a
                  href="tel:+17324750139"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-emerald-600 text-emerald-700 font-semibold text-lg rounded-full hover:bg-emerald-50 transition-colors duration-300"
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
