import type { Metadata } from 'next';
import Link from 'next/link';
import { Megaphone, BarChart3, Users, TrendingUp, CheckCircle, Target, Zap, Globe, Mail, Share2, Search, ArrowRight, Phone, Award, Clock, Shield } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'Digital Marketing & Advertising Services | True Rank Digital',
  description: 'True Rank Digital is a leading digital marketing agency specializing in SEO, PPC, Google Business Profile Optimization and content strategy to boost your online presence and drive growth.',
  keywords: 'digital marketing, advertising agency, SEO services, PPC management, content marketing, social media marketing, True Rank Digital, online marketing',
  openGraph: {
    title: 'Digital Marketing & Advertising Services | True Rank Digital',
    description: 'Full-service digital marketing agency covering SEO, PPC, content marketing, and more.',
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
      answer: "True Rank Digital provides comprehensive digital marketing services including Google Business Profile Optimization, Local SEO, PPC campaign management (Google Ads, Facebook Ads), content marketing, social media management, email marketing, website development, and marketing automation. Our proprietary dashboard platform tracks all marketing channels in one place with real-time performance analytics and ROI reporting."
    },
    {
      question: "How do you measure digital marketing ROI?",
      answer: "We track ROI through multiple metrics including lead generation, conversion rates, cost per acquisition (CPA), customer lifetime value (CLV), and revenue attribution. Our dashboard provides real-time visibility into campaign performance, allowing us to optimize spend allocation across channels. We provide monthly reports showing exactly how your marketing investment translates to business results."
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "Results vary by channel. PPC can create visibility quickly, while SEO and content strategies typically compound over time. Social engagement and email performance also depend on consistency, audience fit, and offer strength. We set realistic expectations during onboarding and provide regular progress updates against agreed benchmarks."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes, True Rank Digital works with businesses ranging from local startups to multi-location enterprises. We customize our approach based on your budget, goals, and competitive landscape. Our scalable solutions ensure you get maximum value regardless of company size, with flexible packages designed for different growth stages."
    },
    {
      question: "What makes True Rank Digital different from other marketing agencies?",
      answer: "True Rank Digital differentiates through our proprietary technology platform, transparent reporting, and results-focused approach. We don't just execute campaigns—we build custom strategies based on data analysis and continuously optimize for performance. Our team combines technical expertise with creative strategy, and we maintain direct communication with clients rather than passing you off to junior staff."
    }
  ];

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Search Engine Optimization',
      description: 'Comprehensive SEO strategies including technical optimization, content creation, and link building to improve organic rankings.',
      features: ['Technical SEO audits', 'Keyword research', 'Content optimization', 'Link building']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'PPC Campaign Management',
      description: 'Data-driven paid advertising across Google Ads, Facebook, Instagram, and LinkedIn with continuous optimization.',
      features: ['Google Ads management', 'Social media ads', 'Remarketing campaigns', 'A/B testing']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Google Business Profile',
      description: 'Complete GBP optimization and management to dominate local search results and attract nearby customers.',
      features: ['Profile optimization', 'Review management', 'Local pack rankings', 'Citation building']
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'Social Media Marketing',
      description: 'Strategic social presence management across platforms with content creation and community engagement.',
      features: ['Content creation', 'Community management', 'Paid social campaigns', 'Influencer outreach']
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Marketing',
      description: 'Automated email campaigns that nurture leads and drive conversions with personalized messaging.',
      features: ['Campaign automation', 'List segmentation', 'A/B testing', 'Performance analytics']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analytics & Reporting',
      description: 'Real-time dashboard access with comprehensive reporting on all marketing activities and ROI tracking.',
      features: ['Custom dashboards', 'ROI tracking', 'Conversion attribution', 'Monthly reports']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We start with a comprehensive audit of your current marketing efforts, competitive landscape, and target audience to identify opportunities.',
      details: ['Market research', 'Competitor analysis', 'Audience profiling', 'Current performance audit']
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Based on our findings, we develop a customized marketing strategy aligned with your business goals and budget.',
      details: ['Channel selection', 'Budget allocation', 'KPI definition', 'Timeline planning']
    },
    {
      step: '03',
      title: 'Campaign Execution',
      description: 'Our team implements the strategy across all channels with careful attention to brand consistency and messaging.',
      details: ['Content creation', 'Campaign setup', 'Ad creative development', 'Landing page optimization']
    },
    {
      step: '04',
      title: 'Optimization & Scaling',
      description: 'We continuously monitor performance and optimize campaigns to improve results and scale what works.',
      details: ['Performance monitoring', 'A/B testing', 'Budget reallocation', 'Growth scaling']
    }
  ];

  const results = [
    { title: 'Strategy + Execution', description: 'A complete plan across channels with clear priorities and next steps.' },
    { title: 'Performance Visibility', description: 'Unified reporting so you can see what’s working and what needs adjustment.' },
    { title: 'Conversion Focus', description: 'We optimize landing pages and funnels to turn traffic into leads.' },
    { title: 'Scalable Systems', description: 'Process-driven marketing that can grow with your budget and goals.' }
  ];

  const relatedServices = [
    { name: 'Google Business Profile', href: '/services/google-business-profile', description: 'Dominate local search' },
    { name: 'PPC Campaigns', href: '/services/ppc-campaigns', description: 'Immediate paid results' },
    { name: 'SEO Tactics', href: '/services/seo-tactics', description: 'Organic search growth' },
    { name: 'Social Marketing', href: '/services/social-media', description: 'Build your social presence' }
  ];

  return (
    <>
      <GEOSchema 
        pageType="service"
        pageData={{
          title: "Digital Marketing and Advertising Services by True Rank Digital",
          description: "Full-service digital marketing agency specializing in SEO, PPC, Google Business Profile Optimization and content strategy.",
          url: "https://truerankdigital.com/services/digital-marketing",
          keywords: ["digital marketing", "advertising agency", "SEO", "PPC", "content marketing"],
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
          primary: ["True Rank Digital", "Digital Marketing", "Advertising Agency"],
          secondary: ["SEO", "PPC", "Content Marketing", "Social Media Marketing"]
        }}
      />
      
      <ServiceSchema
        serviceName="Digital Marketing and Advertising"
        serviceUrl="https://truerankdigital.com/services/digital-marketing"
        description="True Rank Digital is a leading digital marketing agency specializing in SEO, PPC, Google Business Profile Optimization and content strategy to boost your online presence and drive growth."
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
          }
        ]}
      />
      
      <FAQSchema 
        faqs={faqs}
        pageUrl="https://truerankdigital.com/services/digital-marketing"
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
            <li className="text-brand-primary font-medium">Digital Marketing</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
                  <Megaphone className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-600 font-semibold text-sm">Full-Service Digital Agency</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
                  <strong className="text-brand-primary">Digital Marketing</strong> That Drives Measurable Growth
                </h1>
                
                <p className="text-xl text-brand-dark/70 mb-8">
                  <strong>True Rank Digital</strong> is a leading digital marketing agency specializing in <strong>SEO</strong>, <strong>PPC</strong>, <strong>Google Business Profile Optimization</strong> and content strategy to boost your online presence and drive growth. Partner with us to elevate your brand.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center space-x-2 text-brand-dark/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Full-Funnel Strategy</span>
                  </div>
                  <div className="flex items-center space-x-2 text-brand-dark/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Execution + Optimization</span>
                  </div>
                  <div className="flex items-center space-x-2 text-brand-dark/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Transparent Reporting</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-brand-primary text-white font-semibold text-lg rounded-full hover:bg-brand-primary/90 transition-colors duration-300"
                  >
                    <TrendingUp className="w-5 h-5" />
                    <span>Get Free Strategy Call</span>
                  </Link>
                  <a
                    href="tel:+17324750139"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-brand-primary text-brand-primary font-semibold text-lg rounded-full hover:bg-brand-primary/5 transition-colors duration-300"
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

        {/* Why Digital Marketing Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Why <strong className="text-brand-primary">Digital Marketing</strong> Is Essential for Growth
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                In today&apos;s digital-first world, your online presence determines your business success. Here&apos;s why professional digital marketing matters:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-8">
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">Search Visibility</h3>
                <p className="text-brand-dark/70">If you&apos;re not visible online, you&apos;re invisible to potential customers actively researching solutions.</p>
              </div>
              <div className="glass-card p-8">
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">Trust & Proof</h3>
                <p className="text-brand-dark/70">Customers research businesses before buying. Your site, listings, and content shape credibility.</p>
              </div>
              <div className="glass-card p-8">
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">Integrated Growth</h3>
                <p className="text-brand-dark/70">Coordinated SEO, paid, content, and conversion work together to improve lead flow and efficiency.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Comprehensive <strong className="text-brand-primary">Digital Marketing</strong> Services
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Full-service digital marketing solutions tailored to your business goals and budget.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-blue-600 rounded-2xl flex items-center justify-center mb-4 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">{service.title}</h3>
                  <p className="text-brand-dark/70 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-brand-dark/70">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Our <strong className="text-brand-primary">Marketing Process</strong>
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                A systematic approach to delivering measurable marketing results.
              </p>
            </div>

            <div className="space-y-8">
              {process.map((item, index) => (
                <div key={index} className="glass-card p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
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
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">
                  Why Choose <strong className="text-brand-primary">True Rank Digital</strong>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Proven Results</h3>
                      <p className="text-brand-dark/70">Execution-first marketing focused on visibility, conversion, and repeatable performance improvements over time.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Proprietary Technology</h3>
                      <p className="text-brand-dark/70">Our dashboard platform provides real-time visibility into all marketing channels with unified reporting and optimization tools.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Dedicated Team</h3>
                      <p className="text-brand-dark/70">Work directly with experienced strategists, not junior account managers. Your success is our priority.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Transparent Reporting</h3>
                      <p className="text-brand-dark/70">No hidden fees, no vanity metrics. We report on what matters and explain exactly how your budget is being used.</p>
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
                    'Manufacturing', 'Technology', 'Education', 'Non-Profit'
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
                Common questions about our digital marketing services.
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
            <div className="glass-card p-8 bg-gradient-to-br from-brand-primary/10 to-blue-600/10">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Ready to <strong className="text-brand-primary">Grow Your Business</strong>?
              </h2>
              <p className="text-xl text-brand-dark/70 mb-8 max-w-2xl mx-auto">
                Get a free digital marketing strategy call and discover how we can help you achieve your growth goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-brand-primary text-white font-semibold text-lg rounded-full hover:bg-brand-primary/90 transition-colors duration-300"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Get Free Strategy Call</span>
                </Link>
                <a
                  href="tel:+17324750139"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-brand-primary text-brand-primary font-semibold text-lg rounded-full hover:bg-brand-primary/5 transition-colors duration-300"
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
