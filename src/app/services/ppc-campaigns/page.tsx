import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, Target, DollarSign, BarChart3, Zap, MousePointerClick, ArrowRight, CheckCircle } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'PPC Campaigns | Google Ads Management | True Rank Digital',
  description: 'Drive immediate results with True Rank Digital\'s PPC campaigns. We create targeted Google Ads that generate quality leads and maximize your advertising ROI.',
  keywords: 'PPC campaigns, Google Ads, pay per click, paid advertising, lead generation, True Rank Digital, advertising ROI',
  openGraph: {
    title: 'PPC Campaigns | True Rank Digital',
    description: 'Targeted Google Ads campaigns for immediate results and quality leads.',
    url: 'https://truerankdigital.com/services/ppc-campaigns',
    type: 'website',
  },
  alternates: {
    canonical: 'https://truerankdigital.com/services/ppc-campaigns'
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

export default function PPCCampaignsPage() {
  const faqs = [
    {
      question: "How much should I budget for PPC campaigns?",
      answer: "True Rank Digital recommends starting with a minimum budget of $1,000-$2,500 per month for effective PPC campaigns, depending on your industry and competition. We optimize your spend to maximize ROI, and many clients see positive returns within the first month of properly managed campaigns."
    },
    {
      question: "How quickly will I see results from PPC advertising?",
      answer: "Unlike organic SEO, PPC delivers immediate visibility. You can start receiving clicks and leads within hours of campaign launch. True Rank Digital typically achieves optimal campaign performance within 2-4 weeks as we gather data and optimize targeting, bidding, and ad copy."
    },
    {
      question: "What platforms does True Rank Digital manage for PPC?",
      answer: "True Rank Digital manages PPC campaigns across Google Ads (Search, Display, Shopping, YouTube), Microsoft Advertising (Bing), Facebook/Instagram Ads, and LinkedIn Ads. We recommend the best platform mix based on your target audience and business goals."
    }
  ];

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Targeted Campaigns',
      description: 'Precision targeting to reach your ideal customers at the right moment.'
    },
    {
      icon: <MousePointerClick className="w-8 h-8" />,
      title: 'Quality Leads',
      description: 'Generate high-intent leads ready to convert into customers.'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'ROI Optimization',
      description: 'Maximize your advertising spend with data-driven optimization.'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Detailed Reporting',
      description: 'Transparent reporting on campaign performance and conversions.'
    }
  ];

  const relatedServices = [
    { name: 'Digital Marketing', href: '/services/digital-marketing', description: 'Comprehensive digital marketing strategies' },
    { name: 'Local SEO', href: '/services/local-seo', description: 'Dominate local search results' },
    { name: 'SEO Tactics', href: '/services/seo-tactics', description: 'Organic search optimization' },
    { name: 'Google Business Profile', href: '/services/google-business-profile', description: 'Optimize your local presence' }
  ];

  return (
    <>
      <GEOSchema 
        pageType="service"
        pageData={{
          title: "PPC Campaigns by True Rank Digital",
          description: "Targeted Google Ads campaigns that generate quality leads and maximize advertising ROI.",
          url: "https://truerankdigital.com/services/ppc-campaigns",
          keywords: ["PPC campaigns", "Google Ads", "pay per click", "lead generation"],
          category: "PPC Advertising Services",
          serviceType: "PPC Advertising",
          areaServed: ["United States"],
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Services", url: "https://truerankdigital.com/services" },
          { name: "PPC Campaigns", url: "https://truerankdigital.com/services/ppc-campaigns" }
        ]}
        entities={{
          primary: ["True Rank Digital", "PPC Campaigns", "Google Ads"],
          secondary: ["Pay Per Click", "Lead Generation", "Advertising ROI"]
        }}
      />
      
      <ServiceSchema
        serviceName="PPC Campaigns"
        serviceUrl="https://truerankdigital.com/services/ppc-campaigns"
        description="Drive immediate results with True Rank Digital's PPC campaigns. We create targeted Google Ads that generate quality leads and maximize your advertising ROI."
        serviceType="PPC Advertising"
        mentions={[
          {
            type: "Product",
            name: "Google Ads",
            sameAs: "https://www.wikidata.org/wiki/Q4366731",
            description: "Google's advertising platform"
          },
          {
            type: "Thing",
            name: "Pay-per-click",
            sameAs: "https://www.wikidata.org/wiki/Q1137622",
            description: "Online advertising model"
          },
          {
            type: "Organization",
            name: "Google",
            sameAs: "https://www.wikidata.org/wiki/Q95",
            description: "Search and advertising platform"
          }
        ]}
      />
      
      <FAQSchema 
        faqs={faqs}
        pageUrl="https://truerankdigital.com/services/ppc-campaigns"
        category="service"
      />
      
      <article className="pt-16 min-h-screen bg-gradient-to-b from-yellow-50 to-white">
        {/* Breadcrumb Navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-brand-dark/60 hover:text-brand-primary transition-colors">Home</Link></li>
            <li className="text-brand-dark/40">/</li>
            <li><Link href="/services" className="text-brand-dark/60 hover:text-brand-primary transition-colors">Services</Link></li>
            <li className="text-brand-dark/40">/</li>
            <li className="text-brand-primary font-medium">PPC Campaigns</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-100 rounded-full mb-6">
              <TrendingUp className="w-5 h-5 text-yellow-600" />
              <span className="text-yellow-600 font-semibold text-sm">PPC Advertising</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
              <strong className="text-brand-primary">True Rank Digital</strong> Delivers <strong>PPC Campaigns</strong> That Convert
            </h1>
            
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto mb-12">
              Drive immediate results with <strong>True Rank Digital&apos;s</strong> <strong>PPC campaigns</strong>. We create targeted <strong>Google Ads</strong> that generate <strong>quality leads</strong> and maximize your <strong>advertising ROI</strong>.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-brand-dark text-center mb-12">
              Our <strong className="text-brand-primary">PPC</strong> Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">{feature.title}</h3>
                  <p className="text-brand-dark/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-brand-dark text-center mb-12">
              Our <strong className="text-brand-primary">PPC Campaign</strong> Process
            </h2>
            
            <div className="space-y-6">
              {[
                { step: '01', title: 'Research & Strategy', desc: 'We analyze your market, competitors, and target audience to develop a winning PPC strategy.' },
                { step: '02', title: 'Campaign Setup', desc: 'We build optimized campaigns with targeted keywords, compelling ad copy, and effective landing pages.' },
                { step: '03', title: 'Launch & Monitor', desc: 'We launch your campaigns and closely monitor performance, making real-time adjustments.' },
                { step: '04', title: 'Optimize & Scale', desc: 'We continuously optimize for better ROI and scale successful campaigns for growth.' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 glass-card p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
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

        {/* Benefits Section */}
        <section className="py-16 bg-white/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-brand-dark text-center mb-12">
              Why <strong className="text-brand-primary">PPC Advertising</strong> Works
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Immediate Results', desc: 'Start generating leads within hours of campaign launch.' },
                { title: 'Precise Targeting', desc: 'Reach exactly who you want, when they\'re searching.' },
                { title: 'Measurable ROI', desc: 'Track every click, conversion, and dollar spent.' },
                { title: 'Budget Control', desc: 'Set your budget and only pay when people click.' },
                { title: 'Competitive Advantage', desc: 'Appear above organic results for key searches.' },
                { title: 'Scalable Growth', desc: 'Easily scale successful campaigns for more leads.' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 glass-card p-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-brand-dark mb-1">{item.title}</h3>
                    <p className="text-brand-dark/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
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
        <section className="py-16 bg-white/50">
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
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                Ready for <strong className="text-brand-primary">Immediate Results</strong>?
              </h2>
              <p className="text-brand-dark/70 mb-6">
                Let <strong>True Rank Digital</strong> create PPC campaigns that deliver quality leads and maximize your ROI.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-yellow-600 text-white font-semibold text-lg rounded-full hover:bg-yellow-700 transition-colors duration-300"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Start PPC Campaign</span>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
