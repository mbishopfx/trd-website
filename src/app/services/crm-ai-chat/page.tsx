import type { Metadata } from 'next';
import Link from 'next/link';
import { Bot, MessageSquare, Calendar, Users, Zap, Clock, ArrowRight, CheckCircle, Phone, Shield, BarChart3, Settings, Brain, Workflow, Target, Award } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'CRM With AI Chat | AI-Powered Customer Management | True Rank Digital',
  description: 'True Rank Digital\'s AI-powered CRM streamlines customer interactions with an AI chatbot that sets appointments, handles follow-ups, and enhances customer engagement seamlessly.',
  keywords: 'AI CRM, AI chatbot, customer relationship management, automated appointments, follow-up automation, True Rank Digital, customer engagement, lead management',
  openGraph: {
    title: 'CRM With AI Chat | True Rank Digital',
    description: 'AI-powered CRM with automated appointments, intelligent follow-ups, and 24/7 customer engagement.',
    url: 'https://truerankdigital.com/services/crm-ai-chat',
    type: 'website',
  },
  alternates: {
    canonical: 'https://truerankdigital.com/services/crm-ai-chat'
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

export default function CRMAIChatPage() {
  const faqs = [
    {
      question: "How does the AI chatbot handle customer inquiries?",
      answer: "True Rank Digital's AI chatbot uses advanced natural language processing (NLP) powered by GPT technology to understand customer questions, provide accurate responses, and seamlessly hand off complex inquiries to human agents when needed. The AI learns from every interaction to continuously improve response quality and can handle multiple conversations simultaneously."
    },
    {
      question: "Can the AI CRM integrate with my existing systems?",
      answer: "Yes, our AI CRM integrates with popular business tools including Google Calendar, Outlook, Salesforce, HubSpot, Zoho, and most scheduling platforms. We also support custom API integrations for proprietary systems. True Rank Digital handles the entire integration process to ensure seamless operation with your existing workflow."
    },
    {
      question: "What types of businesses benefit most from AI CRM?",
      answer: "Service-based businesses, healthcare practices, law firms, real estate agencies, home service companies, and any business with high customer interaction volume benefit significantly from AI CRM. True Rank Digital customizes the system to match your specific industry needs, compliance requirements, and customer communication patterns."
    },
    {
      question: "How secure is customer data in the AI CRM?",
      answer: "Security is paramount. Our AI CRM uses enterprise-grade encryption, SOC 2 compliant hosting, and follows HIPAA guidelines for healthcare clients. All data is stored securely with regular backups, access controls, and audit logging. We never share or sell customer data."
    },
    {
      question: "What's the typical ROI from implementing AI CRM?",
      answer: "Most clients see positive ROI within 3-6 months. On average, our AI CRM reduces response time by 85%, increases lead conversion by 40%, and saves 15-20 hours per week in administrative tasks. The exact ROI depends on your current processes and lead volume."
    }
  ];

  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'AI Chatbot',
      description: 'Intelligent chatbot powered by GPT technology that handles customer inquiries 24/7 with natural, conversational responses.',
      details: ['Natural language processing', 'Multi-language support', 'Context awareness', 'Sentiment detection']
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Smart Scheduling',
      description: 'Automated appointment booking that syncs with your calendar, handles rescheduling, and sends reminders.',
      details: ['Calendar integration', 'Automated reminders', 'Time zone handling', 'Buffer time management']
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Follow-Up Automation',
      description: 'Intelligent follow-up sequences that nurture leads through SMS, email, and chat based on behavior.',
      details: ['Behavior triggers', 'Multi-channel outreach', 'Personalized messaging', 'A/B testing']
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: 'Lead Pipeline',
      description: 'Visual pipeline management with automated lead scoring and stage progression tracking.',
      details: ['Lead scoring', 'Pipeline stages', 'Task automation', 'Deal tracking']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analytics Dashboard',
      description: 'Real-time insights into customer interactions, conversion rates, and team performance.',
      details: ['Conversion tracking', 'Response analytics', 'ROI reporting', 'Custom reports']
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Custom Workflows',
      description: 'Build automated workflows that match your exact business processes without coding.',
      details: ['Visual workflow builder', 'Conditional logic', 'API webhooks', 'Custom triggers']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Setup',
      description: 'We analyze your current customer journey and configure the AI CRM to match your processes.',
      details: ['Process mapping', 'System integration', 'AI training', 'Team onboarding']
    },
    {
      step: '02',
      title: 'AI Training',
      description: 'We train the AI on your specific business, services, FAQs, and communication style.',
      details: ['Knowledge base creation', 'Response templates', 'Escalation rules', 'Brand voice setup']
    },
    {
      step: '03',
      title: 'Integration & Testing',
      description: 'Connect with your existing tools and thoroughly test all automations before going live.',
      details: ['System connections', 'Workflow testing', 'Edge case handling', 'Quality assurance']
    },
    {
      step: '04',
      title: 'Launch & Optimization',
      description: 'Go live with monitoring and continuous optimization based on real interaction data.',
      details: ['Soft launch', 'Performance monitoring', 'AI refinement', 'Ongoing support']
    }
  ];

  const results = [
    { metric: '85%', label: 'Faster Response', description: 'Average reduction in response time' },
    { metric: '40%', label: 'More Conversions', description: 'Increase in lead conversion' },
    { metric: '24/7', label: 'Availability', description: 'Round-the-clock engagement' },
    { metric: '15hrs', label: 'Weekly Saved', description: 'Average time savings' }
  ];

  const integrations = [
    'Google Calendar', 'Outlook', 'Salesforce', 'HubSpot', 'Zoho CRM', 'Calendly',
    'Stripe', 'QuickBooks', 'Slack', 'Teams', 'Zapier', 'Custom APIs'
  ];

  const relatedServices = [
    { name: 'Digital Marketing', href: '/services/digital-marketing', description: 'Drive leads to your CRM' },
    { name: 'Business Consulting', href: '/services/business-consulting', description: 'Strategic growth guidance' },
    { name: 'Website Engineering', href: '/services/website-development', description: 'Custom website with chat' },
    { name: 'Google Business Profile', href: '/services/google-business-profile', description: 'Local lead generation' }
  ];

  return (
    <>
      <GEOSchema 
        pageType="service"
        pageData={{
          title: "CRM With AI Chat by True Rank Digital",
          description: "AI-powered CRM that streamlines customer interactions with automated appointments, intelligent follow-ups, and 24/7 engagement.",
          url: "https://truerankdigital.com/services/crm-ai-chat",
          keywords: ["AI CRM", "AI chatbot", "appointment scheduling", "customer engagement", "lead management"],
          category: "CRM Software Services",
          serviceType: "CRM Software",
          areaServed: ["United States"],
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Services", url: "https://truerankdigital.com/services" },
          { name: "CRM With AI Chat", url: "https://truerankdigital.com/services/crm-ai-chat" }
        ]}
        entities={{
          primary: ["True Rank Digital", "AI CRM", "AI Chatbot"],
          secondary: ["Appointment Scheduling", "Customer Engagement", "Follow-Up Automation", "Lead Management"]
        }}
      />
      
      <ServiceSchema
        serviceName="CRM With AI Chat"
        serviceUrl="https://truerankdigital.com/services/crm-ai-chat"
        description="True Rank Digital's AI-powered CRM streamlines customer interactions with an AI chatbot that sets appointments, handles follow-ups, and enhances customer engagement seamlessly."
        serviceType="CRM Software"
        mentions={[
          {
            type: "Thing",
            name: "Artificial Intelligence",
            sameAs: "https://www.wikidata.org/wiki/Q11660",
            description: "AI technology powering the CRM"
          },
          {
            type: "Thing",
            name: "Customer Relationship Management",
            sameAs: "https://www.wikidata.org/wiki/Q2625603",
            description: "CRM software category"
          },
          {
            type: "Thing",
            name: "Chatbot",
            sameAs: "https://www.wikidata.org/wiki/Q1142726",
            description: "Automated conversation technology"
          },
          {
            type: "Thing",
            name: "Natural Language Processing",
            sameAs: "https://www.wikidata.org/wiki/Q30642",
            description: "AI language understanding technology"
          }
        ]}
      />
      
      <FAQSchema 
        faqs={faqs}
        pageUrl="https://truerankdigital.com/services/crm-ai-chat"
        category="service"
      />
      
      <article className="pt-16 min-h-screen bg-gradient-to-b from-indigo-50 to-white">
        {/* Breadcrumb Navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-brand-dark/60 hover:text-brand-primary transition-colors">Home</Link></li>
            <li className="text-brand-dark/40">/</li>
            <li><Link href="/services" className="text-brand-dark/60 hover:text-brand-primary transition-colors">Services</Link></li>
            <li className="text-brand-dark/40">/</li>
            <li className="text-brand-primary font-medium">CRM With AI Chat</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-100 rounded-full mb-6">
                  <Bot className="w-5 h-5 text-indigo-600" />
                  <span className="text-indigo-600 font-semibold text-sm">AI-Powered CRM</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
                  <strong className="text-brand-primary">CRM With AI Chat</strong> That Never Sleeps
                </h1>
                
                <p className="text-xl text-brand-dark/70 mb-8">
                  <strong>True Rank Digital&apos;s</strong> AI-powered <strong>CRM</strong> streamlines customer interactions with an intelligent <strong>AI chatbot</strong> that sets appointments, handles follow-ups, and enhances <strong>customer engagement</strong> 24/7.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center space-x-2 text-brand-dark/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>85% Faster Response</span>
                  </div>
                  <div className="flex items-center space-x-2 text-brand-dark/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>40% More Conversions</span>
                  </div>
                  <div className="flex items-center space-x-2 text-brand-dark/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>24/7 Availability</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-full hover:bg-indigo-700 transition-colors duration-300"
                  >
                    <Bot className="w-5 h-5" />
                    <span>Get AI CRM Demo</span>
                  </Link>
                  <a
                    href="tel:+17324750139"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-semibold text-lg rounded-full hover:bg-indigo-50 transition-colors duration-300"
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
                    <div className="text-3xl font-bold text-indigo-600 mb-2">{result.metric}</div>
                    <div className="text-lg font-semibold text-brand-dark mb-1">{result.label}</div>
                    <div className="text-sm text-brand-dark/60">{result.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why AI CRM Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Why <strong className="text-brand-primary">AI-Powered CRM</strong> Changes Everything
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Traditional CRMs require constant manual input. Our AI CRM works for you around the clock.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-8">
                <div className="text-4xl font-bold text-indigo-600 mb-4">78%</div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">Of Leads Go Cold</h3>
                <p className="text-brand-dark/70">When response time exceeds 5 minutes. AI responds instantly, capturing leads before competitors.</p>
              </div>
              <div className="glass-card p-8">
                <div className="text-4xl font-bold text-indigo-600 mb-4">67%</div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">Prefer Self-Service</h3>
                <p className="text-brand-dark/70">Customers want instant answers. AI chatbots provide 24/7 self-service without wait times.</p>
              </div>
              <div className="glass-card p-8">
                <div className="text-4xl font-bold text-indigo-600 mb-4">5x</div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">More Efficient</h3>
                <p className="text-brand-dark/70">AI handles routine inquiries, freeing your team to focus on high-value conversations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Powerful <strong className="text-brand-primary">AI CRM</strong> Features
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Everything you need to automate customer engagement and grow your business.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">{feature.title}</h3>
                  <p className="text-brand-dark/70 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.details.map((detail, idx) => (
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

        {/* Integrations Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Seamless <strong className="text-brand-primary">Integrations</strong>
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Connect with the tools you already use for a unified workflow.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {integrations.map((integration, index) => (
                <div key={index} className="px-6 py-3 bg-indigo-100 rounded-full text-indigo-700 font-medium">
                  {integration}
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
                Our <strong className="text-brand-primary">Implementation</strong> Process
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                We handle everything from setup to optimization so you can focus on your business.
              </p>
            </div>

            <div className="space-y-8">
              {process.map((item, index) => (
                <div key={index} className="glass-card p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
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

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">
                  Why Choose <strong className="text-brand-primary">True Rank Digital</strong> for AI CRM
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Brain className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Custom AI Training</h3>
                      <p className="text-brand-dark/70">We train the AI specifically on your business, services, and communication style for authentic interactions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Enterprise Security</h3>
                      <p className="text-brand-dark/70">SOC 2 compliant, HIPAA-ready infrastructure with encryption and access controls to protect customer data.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Results-Focused</h3>
                      <p className="text-brand-dark/70">We measure success by your business outcomes—more leads, faster response, higher conversions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Ongoing Optimization</h3>
                      <p className="text-brand-dark/70">We continuously improve AI responses based on interaction data and evolving business needs.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6 text-center">Industries We Serve</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Healthcare', 'Legal Services', 'Real Estate', 'Home Services',
                    'Financial Services', 'Professional Services', 'Dental Practices', 'Auto Dealers',
                    'Insurance', 'Education', 'Fitness Studios', 'Salons & Spas'
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
                Common questions about our AI CRM solution.
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
            <div className="glass-card p-8 bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Ready to <strong className="text-brand-primary">Transform Customer Engagement</strong>?
              </h2>
              <p className="text-xl text-brand-dark/70 mb-8 max-w-2xl mx-auto">
                Get a free demo and see how AI CRM can automate your customer interactions and grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-full hover:bg-indigo-700 transition-colors duration-300"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Get Free Demo</span>
                </Link>
                <a
                  href="tel:+17324750139"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-semibold text-lg rounded-full hover:bg-indigo-50 transition-colors duration-300"
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
