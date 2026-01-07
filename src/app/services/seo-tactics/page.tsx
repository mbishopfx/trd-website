import type { Metadata } from 'next';
import Link from 'next/link';
import { Search, TrendingUp, FileText, Link2, Settings, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'SEO Tactics | Proven Search Optimization Strategies | True Rank Digital',
  description: 'Master proven SEO tactics with True Rank Digital. Our strategic approach combines technical optimization, content strategy, and link building to boost your Google rankings.',
  keywords: 'SEO tactics, search engine optimization, technical SEO, content strategy, link building, True Rank Digital, Google rankings',
  openGraph: {
    title: 'SEO Tactics | True Rank Digital',
    description: 'Proven SEO strategies to boost your Google rankings.',
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
      answer: "SEO is a long-term strategy. True Rank Digital typically sees initial improvements within 3-6 months, with significant results in 6-12 months. The timeline depends on your current website authority, competition level, and the aggressiveness of your SEO campaign."
    },
    {
      question: "What SEO tactics does True Rank Digital use?",
      answer: "True Rank Digital employs a comprehensive SEO approach including technical optimization (site speed, mobile-friendliness, schema markup), on-page SEO (content optimization, keyword targeting), off-page SEO (link building, brand mentions), and local SEO for businesses targeting geographic areas."
    },
    {
      question: "Is SEO still effective in 2026?",
      answer: "Absolutely. SEO remains one of the most effective digital marketing channels with the highest ROI. While tactics evolve with Google's algorithms, the fundamentals of quality content, technical excellence, and authoritative backlinks continue to drive organic search success."
    }
  ];

  const features = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Technical SEO',
      description: 'Optimize site speed, mobile experience, and technical infrastructure for search engines.'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Content Strategy',
      description: 'Create optimized content that ranks for target keywords and engages your audience.'
    },
    {
      icon: <Link2 className="w-8 h-8" />,
      title: 'Link Building',
      description: 'Build high-quality backlinks that increase your domain authority and rankings.'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analytics & Reporting',
      description: 'Track rankings, traffic, and conversions with detailed monthly reporting.'
    }
  ];

  const relatedServices = [
    { name: 'Local SEO', href: '/services/local-seo', description: 'Dominate local search results' },
    { name: 'Google Business Profile', href: '/services/google-business-profile', description: 'Optimize your local presence' },
    { name: 'Digital Marketing', href: '/services/digital-marketing', description: 'Comprehensive digital marketing strategies' },
    { name: 'PPC Campaigns', href: '/services/ppc-campaigns', description: 'Paid advertising for immediate results' }
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
          secondary: ["Technical SEO", "Content Strategy", "Link Building"]
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
              <Search className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-600 font-semibold text-sm">SEO Strategy</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
              <strong className="text-brand-primary">True Rank Digital</strong> Delivers Proven <strong>SEO Tactics</strong>
            </h1>
            
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto mb-12">
              Master proven <strong>SEO tactics</strong> with <strong>True Rank Digital</strong>. Our strategic approach combines <strong>technical optimization</strong>, <strong>content strategy</strong>, and <strong>link building</strong> to boost your <strong>Google rankings</strong>.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-brand-dark text-center mb-12">
              Our <strong className="text-brand-primary">SEO</strong> Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">{feature.title}</h3>
                  <p className="text-brand-dark/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Tactics Breakdown */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-brand-dark text-center mb-12">
              Key <strong className="text-brand-primary">SEO Tactics</strong> We Implement
            </h2>
            
            <div className="space-y-6">
              {[
                { 
                  step: '01', 
                  title: 'Technical Foundation', 
                  desc: 'We optimize your website\'s technical infrastructure including site speed, mobile responsiveness, schema markup, XML sitemaps, and crawlability.' 
                },
                { 
                  step: '02', 
                  title: 'Keyword Research & Targeting', 
                  desc: 'We identify high-value keywords your customers are searching for and develop a strategic targeting plan.' 
                },
                { 
                  step: '03', 
                  title: 'On-Page Optimization', 
                  desc: 'We optimize title tags, meta descriptions, headers, content, images, and internal linking for target keywords.' 
                },
                { 
                  step: '04', 
                  title: 'Content Development', 
                  desc: 'We create high-quality, optimized content that ranks for target keywords and establishes topical authority.' 
                },
                { 
                  step: '05', 
                  title: 'Link Building', 
                  desc: 'We build authoritative backlinks through outreach, content marketing, and strategic partnerships.' 
                },
                { 
                  step: '06', 
                  title: 'Monitoring & Optimization', 
                  desc: 'We continuously monitor rankings, traffic, and conversions, making data-driven optimizations.' 
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 glass-card p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">{item.title}</h3>
                    <p className="text-brand-dark/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-brand-dark text-center mb-12">
              Frequently Asked Questions
            </h2>
            
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
            <h2 className="text-3xl font-heading font-bold text-brand-dark text-center mb-12">
              Related <strong className="text-brand-primary">Services</strong>
            </h2>
            
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
            <div className="glass-card p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                Ready to <strong className="text-brand-primary">Boost Your Rankings</strong>?
              </h2>
              <p className="text-brand-dark/70 mb-6">
                Let <strong>True Rank Digital</strong> implement proven SEO tactics that drive organic traffic and grow your business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-emerald-600 text-white font-semibold text-lg rounded-full hover:bg-emerald-700 transition-colors duration-300"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Start SEO Campaign</span>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
