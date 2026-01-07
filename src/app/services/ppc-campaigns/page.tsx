import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, Target, DollarSign, BarChart3, Zap, MousePointerClick, ArrowRight, CheckCircle, Phone, Award, Search, Shield, Users, Settings, LineChart, Globe } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'PPC Campaigns | Google Ads Management | True Rank Digital',
  description: 'Drive immediate results with True Rank Digital\'s PPC campaigns. We create targeted Google Ads that generate quality leads and maximize your advertising ROI.',
  keywords: 'PPC campaigns, Google Ads management, pay per click, paid advertising, lead generation, True Rank Digital, advertising ROI, SEM',
  openGraph: {
    title: 'PPC Campaigns | True Rank Digital',
    description: 'Targeted Google Ads campaigns for immediate results and quality leads. $2.4M+ ad spend managed.',
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
      answer: "True Rank Digital recommends starting with a minimum budget of $1,500-$3,000 per month for effective PPC campaigns, depending on your industry and competition. We optimize your spend to maximize ROI, and many clients see positive returns within the first month. Our management fee is separate from ad spend, ensuring transparency in your investment."
    },
    {
      question: "How quickly will I see results from PPC advertising?",
      answer: "Unlike organic SEO, PPC delivers immediate visibility. You can start receiving clicks and leads within hours of campaign launch. True Rank Digital typically achieves optimal campaign performance within 2-4 weeks as we gather data and optimize targeting, bidding, and ad copy. We provide weekly performance reports from day one."
    },
    {
      question: "What platforms does True Rank Digital manage for PPC?",
      answer: "True Rank Digital manages PPC campaigns across Google Ads (Search, Display, Shopping, YouTube, Performance Max), Microsoft Advertising (Bing), Facebook/Instagram Ads, LinkedIn Ads, and TikTok Ads. We recommend the best platform mix based on your target audience, industry, and business goals."
    },
    {
      question: "How do you measure PPC campaign success?",
      answer: "We track multiple metrics including cost per click (CPC), click-through rate (CTR), conversion rate, cost per acquisition (CPA), return on ad spend (ROAS), and quality score. More importantly, we focus on business outcomes like qualified leads, phone calls, and revenue generated. Our dashboard provides real-time visibility into all metrics."
    },
    {
      question: "What makes True Rank Digital's PPC management different?",
      answer: "We combine data-driven optimization with creative strategy. Our team actively manages campaigns daily (not set-and-forget), conducts ongoing A/B testing, and provides transparent reporting. We also integrate PPC with your overall digital strategy including SEO and GBP optimization for maximum impact."
    }
  ];

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Google Search Ads',
      description: 'Appear at the top of Google search results when customers are actively searching for your services.',
      details: ['Keyword research', 'Ad copy optimization', 'Bid management', 'Quality score improvement']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Display Advertising',
      description: 'Reach potential customers across millions of websites with visually engaging display ads.',
      details: ['Audience targeting', 'Remarketing campaigns', 'Banner design', 'Placement optimization']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Social Media Ads',
      description: 'Target your ideal customers on Facebook, Instagram, LinkedIn, and other social platforms.',
      details: ['Audience building', 'Creative development', 'Conversion tracking', 'Lookalike audiences']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Remarketing',
      description: 'Re-engage website visitors who didn\'t convert with targeted follow-up ads.',
      details: ['Audience segmentation', 'Dynamic remarketing', 'Frequency capping', 'Cross-platform retargeting']
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: 'Performance Max',
      description: 'Leverage Google\'s AI-powered campaigns to reach customers across all Google properties.',
      details: ['Asset optimization', 'Audience signals', 'Conversion goals', 'Cross-channel reach']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analytics & Reporting',
      description: 'Real-time dashboard access with comprehensive reporting on all campaign metrics.',
      details: ['Conversion tracking', 'ROI analysis', 'Attribution modeling', 'Custom reports']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Research & Strategy',
      description: 'We analyze your market, competitors, and target audience to develop a winning PPC strategy with clear goals.',
      details: ['Competitor analysis', 'Keyword research', 'Audience profiling', 'Budget planning']
    },
    {
      step: '02',
      title: 'Campaign Setup',
      description: 'We build optimized campaigns with targeted keywords, compelling ad copy, and conversion tracking.',
      details: ['Account structure', 'Ad group creation', 'Ad copy writing', 'Tracking setup']
    },
    {
      step: '03',
      title: 'Landing Page Optimization',
      description: 'We ensure your landing pages are optimized for conversions to maximize campaign ROI.',
      details: ['Page analysis', 'Conversion optimization', 'A/B testing', 'Mobile optimization']
    },
    {
      step: '04',
      title: 'Launch & Monitor',
      description: 'We launch your campaigns and closely monitor performance, making real-time adjustments.',
      details: ['Campaign launch', 'Bid adjustments', 'Quality monitoring', 'Budget pacing']
    },
    {
      step: '05',
      title: 'Optimize & Scale',
      description: 'We continuously optimize for better ROI and scale successful campaigns for growth.',
      details: ['Performance analysis', 'Bid optimization', 'Ad testing', 'Campaign scaling']
    }
  ];

  const results = [
    { metric: '$2.4M+', label: 'Ad Spend Managed', description: 'Annually' },
    { metric: '4.2x', label: 'Average ROAS', description: 'Return on ad spend' },
    { metric: '47%', label: 'Lower CPA', description: 'vs. industry average' },
    { metric: '89%', label: 'Client Retention', description: 'Year over year' }
  ];

  const platforms = [
    'Google Search', 'Google Display', 'Google Shopping', 'YouTube Ads', 'Performance Max',
    'Microsoft/Bing Ads', 'Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'TikTok Ads'
  ];

  const relatedServices = [
    { name: 'Digital Marketing', href: '/services/digital-marketing', description: 'Comprehensive marketing strategy' },
    { name: 'Local SEO', href: '/services/local-seo', description: 'Organic local rankings' },
    { name: 'SEO Tactics', href: '/services/seo-tactics', description: 'Long-term organic growth' },
    { name: 'Google Business Profile', href: '/services/google-business-profile', description: 'Local search domination' }
  ];

  return (
    <>
      <GEOSchema 
        pageType="service"
        pageData={{
          title: "PPC Campaigns by True Rank Digital",
          description: "Targeted Google Ads campaigns that generate quality leads and maximize advertising ROI.",
          url: "https://truerankdigital.com/services/ppc-campaigns",
          keywords: ["PPC campaigns", "Google Ads", "pay per click", "lead generation", "SEM"],
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
          secondary: ["Pay Per Click", "Lead Generation", "Advertising ROI", "SEM"]
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
          },
          {
            type: "Organization",
            name: "Meta",
            sameAs: "https://www.wikidata.org/wiki/Q380",
            description: "Social media advertising platform"
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-100 rounded-full mb-6">
                  <TrendingUp className="w-5 h-5 text-yellow-600" />
                  <span className="text-yellow-600 font-semibold text-sm">PPC Advertising</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
                  <strong className="text-brand-primary">PPC Campaigns</strong> That Deliver Immediate Results
                </h1>
                
                <p className="text-xl text-brand-dark/70 mb-8">
                  Drive immediate results with <strong>True Rank Digital&apos;s</strong> <strong>PPC campaigns</strong>. We create targeted <strong>Google Ads</strong> that generate <strong>quality leads</strong> and maximize your <strong>advertising ROI</strong>.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center space-x-2 text-brand-dark/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>$2.4M+ Ad Spend Managed</span>
                  </div>
                  <div className="flex items-center space-x-2 text-brand-dark/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>4.2x Average ROAS</span>
                  </div>
                  <div className="flex items-center space-x-2 text-brand-dark/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>47% Lower CPA</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-yellow-600 text-white font-semibold text-lg rounded-full hover:bg-yellow-700 transition-colors duration-300"
                  >
                    <TrendingUp className="w-5 h-5" />
                    <span>Get Free PPC Audit</span>
                  </Link>
                  <a
                    href="tel:+17324750139"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-yellow-600 text-yellow-700 font-semibold text-lg rounded-full hover:bg-yellow-50 transition-colors duration-300"
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
                    <div className="text-3xl font-bold text-yellow-600 mb-2">{result.metric}</div>
                    <div className="text-lg font-semibold text-brand-dark mb-1">{result.label}</div>
                    <div className="text-sm text-brand-dark/60">{result.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why PPC Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Why <strong className="text-brand-primary">PPC Advertising</strong> Is Essential
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                PPC delivers what organic marketing can&apos;t: immediate visibility and predictable lead flow.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-8">
                <div className="text-4xl font-bold text-yellow-600 mb-4">65%</div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">Of High-Intent Clicks</h3>
                <p className="text-brand-dark/70">Go to paid ads for commercial searches. When customers are ready to buy, they click on ads.</p>
              </div>
              <div className="glass-card p-8">
                <div className="text-4xl font-bold text-yellow-600 mb-4">200%</div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">Average ROI</h3>
                <p className="text-brand-dark/70">Google reports that businesses make an average of $2 for every $1 spent on Google Ads.</p>
              </div>
              <div className="glass-card p-8">
                <div className="text-4xl font-bold text-yellow-600 mb-4">50%</div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">More Conversions</h3>
                <p className="text-brand-dark/70">PPC visitors are 50% more likely to make a purchase than organic visitors for commercial queries.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Our <strong className="text-brand-primary">PPC</strong> Services
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Comprehensive paid advertising management across all major platforms.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 text-white">
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

        {/* Platforms Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Platforms We <strong className="text-brand-primary">Manage</strong>
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Expert management across all major advertising platforms.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {platforms.map((platform, index) => (
                <div key={index} className="px-6 py-3 bg-yellow-100 rounded-full text-yellow-700 font-medium">
                  {platform}
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
                Our <strong className="text-brand-primary">PPC Campaign</strong> Process
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                A systematic approach to building and optimizing high-performing campaigns.
              </p>
            </div>

            <div className="space-y-8">
              {process.map((item, index) => (
                <div key={index} className="glass-card p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
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
                  Why Choose <strong className="text-brand-primary">True Rank Digital</strong> for PPC
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Proven Track Record</h3>
                      <p className="text-brand-dark/70">$2.4M+ in ad spend managed with an average 4.2x ROAS across diverse industries.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Settings className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Active Management</h3>
                      <p className="text-brand-dark/70">We actively manage campaigns daily, not set-and-forget. Continuous optimization drives better results.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Transparent Reporting</h3>
                      <p className="text-brand-dark/70">Real-time dashboard access with clear reporting on spend, results, and ROI. No hidden fees.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Integrated Strategy</h3>
                      <p className="text-brand-dark/70">PPC integrated with SEO, GBP, and website optimization for maximum impact across all channels.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6 text-center">Industries We Serve</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Home Services', 'Healthcare', 'Legal', 'Real Estate',
                    'E-commerce', 'Professional Services', 'Restaurants', 'Auto Dealers',
                    'Financial Services', 'Education', 'SaaS', 'Local Services'
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
                Common questions about our PPC management services.
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
            <div className="glass-card p-8 bg-gradient-to-br from-yellow-500/10 to-orange-500/10">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MousePointerClick className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Ready for <strong className="text-brand-primary">Immediate Results</strong>?
              </h2>
              <p className="text-xl text-brand-dark/70 mb-8 max-w-2xl mx-auto">
                Get a free PPC audit and discover how we can generate more leads and maximize your advertising ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-yellow-600 text-white font-semibold text-lg rounded-full hover:bg-yellow-700 transition-colors duration-300"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Get Free PPC Audit</span>
                </Link>
                <a
                  href="tel:+17324750139"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-yellow-600 text-yellow-700 font-semibold text-lg rounded-full hover:bg-yellow-50 transition-colors duration-300"
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
