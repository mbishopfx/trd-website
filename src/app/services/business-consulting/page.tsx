import type { Metadata } from 'next';
import Link from 'next/link';
import { Building, TrendingUp, Target, Users, BarChart3, Lightbulb, ArrowRight, CheckCircle, Phone, Shield, Award, Clock, Compass, PieChart, Rocket, Briefcase } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'Business Consulting Services | Strategic Growth Guidance | True Rank Digital',
  description: 'Achieve sustainable growth with True Rank Digital\'s business consulting. We offer strategic guidance on digital marketing, process optimization, and market expansion.',
  keywords: 'business consulting, strategic guidance, digital marketing consulting, process optimization, market expansion, True Rank Digital, growth strategy, business advisor',
  openGraph: {
    title: 'Business Consulting Services | True Rank Digital',
    description: 'Strategic business consulting for sustainable growth, digital transformation, and market expansion.',
    url: 'https://truerankdigital.com/services/business-consulting',
    type: 'website',
  },
  alternates: {
    canonical: 'https://truerankdigital.com/services/business-consulting'
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

export default function BusinessConsultingPage() {
  const faqs = [
    {
      question: "What types of businesses does True Rank Digital consult?",
      answer: "True Rank Digital provides business consulting for small to mid-sized businesses across all industries. We specialize in helping service-based businesses, professional practices, retail operations, and local businesses optimize their digital presence and operational efficiency. Our clients range from startups to established companies with $1M-$50M in annual revenue."
    },
    {
      question: "How is business consulting different from marketing services?",
      answer: "While marketing services focus on specific campaigns and tactics, business consulting takes a holistic view of your organization. True Rank Digital's consulting addresses overall strategy, process optimization, market positioning, competitive analysis, and long-term growth planning. We look at your entire business ecosystem to identify opportunities and remove bottlenecks."
    },
    {
      question: "What does a typical consulting engagement look like?",
      answer: "A True Rank Digital consulting engagement typically begins with a comprehensive business audit (1-2 weeks), followed by strategic planning sessions, implementation roadmap development, and ongoing advisory support. Engagements can range from one-time strategy sessions ($2,500-$5,000) to ongoing monthly consulting relationships ($1,500-$5,000/month)."
    },
    {
      question: "How do you measure consulting success?",
      answer: "We establish clear KPIs at the start of each engagement aligned with your business goals. Common metrics include revenue growth, profit margin improvement, customer acquisition cost reduction, lead conversion rate, operational efficiency gains, and market share expansion. We provide regular progress reports and adjust strategies based on data."
    },
    {
      question: "Do you provide implementation support or just strategy?",
      answer: "True Rank Digital provides both strategy development and implementation support. Many clients engage us for strategy first, then continue with implementation assistance. We can work alongside your team, manage specific projects, or connect you with our network of specialists for execution. Our goal is sustainable results, not just plans."
    }
  ];

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Strategic Planning',
      description: 'Develop clear business strategies aligned with your goals, market opportunities, and competitive landscape.',
      details: ['Vision & mission development', 'Competitive analysis', 'Market positioning', 'Goal setting & OKRs']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Process Optimization',
      description: 'Streamline operations and improve efficiency across your organization to reduce costs and increase output.',
      details: ['Workflow analysis', 'Automation opportunities', 'Resource allocation', 'Performance metrics']
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Growth Strategy',
      description: 'Identify and execute expansion opportunities for sustainable business growth and market penetration.',
      details: ['Market expansion', 'Revenue diversification', 'Partnership development', 'Scaling roadmap']
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Digital Transformation',
      description: 'Modernize your business with technology integration and digital marketing strategies.',
      details: ['Technology assessment', 'Digital roadmap', 'Tool selection', 'Change management']
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: 'Financial Analysis',
      description: 'Data-driven insights into your business finances to optimize profitability and cash flow.',
      details: ['Profitability analysis', 'Cost optimization', 'Pricing strategy', 'Budget planning']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Development',
      description: 'Build high-performing teams with the right structure, skills, and culture for growth.',
      details: ['Org structure design', 'Role definition', 'Hiring strategy', 'Performance systems']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We conduct a comprehensive analysis of your current business operations, market position, financials, and growth opportunities.',
      details: ['Stakeholder interviews', 'Financial review', 'Process mapping', 'Market analysis']
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Based on our findings, we develop a customized strategic plan aligned with your business goals and available resources.',
      details: ['SWOT analysis', 'Strategic options', 'Risk assessment', 'Priority ranking']
    },
    {
      step: '03',
      title: 'Implementation Roadmap',
      description: 'We create a detailed action plan with clear milestones, timelines, responsibilities, and success metrics.',
      details: ['Project planning', 'Resource allocation', 'Timeline development', 'KPI definition']
    },
    {
      step: '04',
      title: 'Execution Support',
      description: 'We work alongside your team to implement the strategy, providing guidance and adjusting as needed.',
      details: ['Project management', 'Team coaching', 'Vendor coordination', 'Progress tracking']
    },
    {
      step: '05',
      title: 'Review & Optimization',
      description: 'Continuous monitoring and optimization to ensure strategies deliver results and adapt to market changes.',
      details: ['Performance review', 'Strategy refinement', 'Quarterly planning', 'Ongoing advisory']
    }
  ];

  const results = [
    { metric: '50+', label: 'Businesses Consulted', description: 'Across diverse industries' },
    { metric: '127%', label: 'Avg. Revenue Growth', description: 'For engaged clients' },
    { metric: '35%', label: 'Cost Reduction', description: 'Through optimization' },
    { metric: '92%', label: 'Client Satisfaction', description: 'Would recommend' }
  ];

  const relatedServices = [
    { name: 'Digital Marketing', href: '/services/digital-marketing', description: 'Execute your marketing strategy' },
    { name: 'Google Business Profile', href: '/services/google-business-profile', description: 'Optimize local presence' },
    { name: 'CRM With AI Chat', href: '/services/crm-ai-chat', description: 'Automate customer engagement' },
    { name: 'Website Engineering', href: '/services/website-development', description: 'Build your digital foundation' }
  ];

  return (
    <>
      <GEOSchema 
        pageType="service"
        pageData={{
          title: "Business Consulting by True Rank Digital",
          description: "Strategic business consulting for sustainable growth, digital transformation, process optimization, and market expansion.",
          url: "https://truerankdigital.com/services/business-consulting",
          keywords: ["business consulting", "strategic guidance", "process optimization", "growth strategy", "digital transformation"],
          category: "Business Consulting Services",
          serviceType: "Business Consulting",
          areaServed: ["United States"],
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Services", url: "https://truerankdigital.com/services" },
          { name: "Business Consulting", url: "https://truerankdigital.com/services/business-consulting" }
        ]}
        entities={{
          primary: ["True Rank Digital", "Business Consulting", "Strategic Planning"],
          secondary: ["Process Optimization", "Growth Strategy", "Digital Transformation", "Market Expansion"]
        }}
      />
      
      <ServiceSchema
        serviceName="Business Consulting"
        serviceUrl="https://truerankdigital.com/services/business-consulting"
        description="Achieve sustainable growth with True Rank Digital's business consulting. We offer strategic guidance on digital marketing, process optimization, and market expansion."
        serviceType="Business Consulting"
        mentions={[
          {
            type: "Thing",
            name: "Business Strategy",
            sameAs: "https://www.wikidata.org/wiki/Q4830453",
            description: "Strategic business planning"
          },
          {
            type: "Thing",
            name: "Digital Transformation",
            sameAs: "https://www.wikidata.org/wiki/Q28865",
            description: "Business modernization"
          },
          {
            type: "Thing",
            name: "Management Consulting",
            sameAs: "https://www.wikidata.org/wiki/Q1140755",
            description: "Professional advisory services"
          }
        ]}
      />
      
      <FAQSchema 
        faqs={faqs}
        pageUrl="https://truerankdigital.com/services/business-consulting"
        category="service"
      />
      
      <article className="pt-16 min-h-screen bg-gradient-to-b from-orange-50 to-white">
        {/* Breadcrumb Navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-brand-dark/60 hover:text-brand-primary transition-colors">Home</Link></li>
            <li className="text-brand-dark/40">/</li>
            <li><Link href="/services" className="text-brand-dark/60 hover:text-brand-primary transition-colors">Services</Link></li>
            <li className="text-brand-dark/40">/</li>
            <li className="text-brand-primary font-medium">Business Consulting</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
                  <Building className="w-5 h-5 text-orange-600" />
                  <span className="text-orange-600 font-semibold text-sm">Business Consulting</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
                  <strong className="text-brand-primary">Business Consulting</strong> for Sustainable Growth
                </h1>
                
                <p className="text-xl text-brand-dark/70 mb-8">
                  Achieve sustainable growth with <strong>True Rank Digital&apos;s</strong> <strong>business consulting</strong>. We offer <strong>strategic guidance</strong> on digital marketing, <strong>process optimization</strong>, and <strong>market expansion</strong>.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center space-x-2 text-brand-dark/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>50+ Businesses Consulted</span>
                  </div>
                  <div className="flex items-center space-x-2 text-brand-dark/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>127% Avg. Revenue Growth</span>
                  </div>
                  <div className="flex items-center space-x-2 text-brand-dark/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>92% Client Satisfaction</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-orange-600 text-white font-semibold text-lg rounded-full hover:bg-orange-700 transition-colors duration-300"
                  >
                    <Compass className="w-5 h-5" />
                    <span>Schedule Consultation</span>
                  </Link>
                  <a
                    href="tel:+17324750139"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-orange-600 text-orange-600 font-semibold text-lg rounded-full hover:bg-orange-50 transition-colors duration-300"
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
                    <div className="text-3xl font-bold text-orange-600 mb-2">{result.metric}</div>
                    <div className="text-lg font-semibold text-brand-dark mb-1">{result.label}</div>
                    <div className="text-sm text-brand-dark/60">{result.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Consulting Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Why <strong className="text-brand-primary">Business Consulting</strong> Accelerates Growth
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                An outside perspective combined with proven frameworks can transform your business trajectory.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-8">
                <div className="text-4xl font-bold text-orange-600 mb-4">70%</div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">Of Small Businesses</h3>
                <p className="text-brand-dark/70">Fail within 10 years due to poor planning and strategy. Professional consulting significantly improves success rates.</p>
              </div>
              <div className="glass-card p-8">
                <div className="text-4xl font-bold text-orange-600 mb-4">3x</div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">Faster Growth</h3>
                <p className="text-brand-dark/70">Businesses with strategic advisors grow 3x faster than those without, according to SBA research.</p>
              </div>
              <div className="glass-card p-8">
                <div className="text-4xl font-bold text-orange-600 mb-4">$7</div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">ROI Per $1 Spent</h3>
                <p className="text-brand-dark/70">Quality business consulting typically returns $7 for every $1 invested through improved efficiency and growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Our <strong className="text-brand-primary">Consulting</strong> Services
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Comprehensive business advisory services tailored to your specific challenges and goals.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 text-white">
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

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Our <strong className="text-brand-primary">Consulting Process</strong>
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                A systematic approach to understanding your business and delivering actionable strategies.
              </p>
            </div>

            <div className="space-y-8">
              {process.map((item, index) => (
                <div key={index} className="glass-card p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
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
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Practical Experience</h3>
                      <p className="text-brand-dark/70">Our consultants have real-world experience building and scaling businesses, not just academic knowledge.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Action-Oriented</h3>
                      <p className="text-brand-dark/70">We focus on actionable strategies that can be implemented immediately, not theoretical frameworks that gather dust.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Full-Service Support</h3>
                      <p className="text-brand-dark/70">Beyond strategy, we can help implement through our digital marketing, website, and technology services.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Flexible Engagement</h3>
                      <p className="text-brand-dark/70">From one-time strategy sessions to ongoing advisory relationships, we adapt to your needs and budget.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6 text-center">Industries We Serve</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Professional Services', 'Healthcare', 'Legal', 'Home Services',
                    'Real Estate', 'Retail', 'Restaurants', 'Financial Services',
                    'Manufacturing', 'Technology', 'Construction', 'Non-Profit'
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
                Common questions about our business consulting services.
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
            <div className="glass-card p-8 bg-gradient-to-br from-orange-500/10 to-red-500/10">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Ready for <strong className="text-brand-primary">Strategic Growth</strong>?
              </h2>
              <p className="text-xl text-brand-dark/70 mb-8 max-w-2xl mx-auto">
                Schedule a free consultation to discuss your business challenges and discover how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-orange-600 text-white font-semibold text-lg rounded-full hover:bg-orange-700 transition-colors duration-300"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Schedule Consultation</span>
                </Link>
                <a
                  href="tel:+17324750139"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-orange-600 text-orange-600 font-semibold text-lg rounded-full hover:bg-orange-50 transition-colors duration-300"
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
