import type { Metadata } from 'next';
import Link from 'next/link';
import { Bot, MessageSquare, Calendar, Users, Zap, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'CRM With AI Chat | AI-Powered Customer Management | True Rank Digital',
  description: 'True Rank Digital\'s AI-powered CRM streamlines customer interactions with an AI chatbot that sets appointments, handles follow-ups, and enhances customer engagement seamlessly.',
  keywords: 'AI CRM, AI chatbot, customer relationship management, automated appointments, follow-up automation, True Rank Digital, customer engagement',
  openGraph: {
    title: 'CRM With AI Chat | True Rank Digital',
    description: 'AI-powered CRM with automated appointments and customer engagement.',
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
      answer: "True Rank Digital's AI chatbot uses advanced natural language processing to understand customer questions, provide accurate responses, and seamlessly hand off complex inquiries to human agents when needed. It learns from interactions to continuously improve response quality."
    },
    {
      question: "Can the AI CRM integrate with my existing systems?",
      answer: "Yes, our AI CRM integrates with popular business tools including Google Calendar, Outlook, Salesforce, HubSpot, and most scheduling platforms. True Rank Digital handles the entire integration process to ensure seamless operation with your existing workflow."
    },
    {
      question: "What types of businesses benefit most from AI CRM?",
      answer: "Service-based businesses, healthcare practices, law firms, real estate agencies, and any business with high customer interaction volume benefit significantly from AI CRM. True Rank Digital customizes the system to match your specific industry needs and customer communication patterns."
    }
  ];

  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'AI Chatbot',
      description: 'Intelligent chatbot that handles customer inquiries 24/7 with natural, conversational responses.'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Appointment Scheduling',
      description: 'Automated appointment booking integrated with your calendar for seamless scheduling.'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Follow-Up Automation',
      description: 'Automated follow-up sequences that nurture leads and keep customers engaged.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Availability',
      description: 'Never miss a lead with round-the-clock automated customer engagement.'
    }
  ];

  const relatedServices = [
    { name: 'Digital Marketing', href: '/services/digital-marketing', description: 'Comprehensive digital marketing strategies' },
    { name: 'Business Consulting', href: '/services/business-consulting', description: 'Strategic growth guidance' },
    { name: 'Website Engineering', href: '/services/website-development', description: 'Custom website development' },
    { name: 'Local SEO', href: '/services/local-seo', description: 'Dominate local search results' }
  ];

  return (
    <>
      <GEOSchema 
        pageType="service"
        pageData={{
          title: "CRM With AI Chat by True Rank Digital",
          description: "AI-powered CRM that streamlines customer interactions with automated appointments and follow-ups.",
          url: "https://truerankdigital.com/services/crm-ai-chat",
          keywords: ["AI CRM", "AI chatbot", "appointment scheduling", "customer engagement"],
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
          secondary: ["Appointment Scheduling", "Customer Engagement", "Follow-Up Automation"]
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-100 rounded-full mb-6">
              <Bot className="w-5 h-5 text-indigo-600" />
              <span className="text-indigo-600 font-semibold text-sm">AI-Powered CRM</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
              <strong className="text-brand-primary">True Rank Digital</strong> Delivers <strong>CRM With AI Chat</strong>
            </h1>
            
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto mb-12">
              <strong>True Rank Digital&apos;s</strong> AI-powered <strong>CRM</strong> streamlines customer interactions with an <strong>AI chatbot</strong> that sets appointments, handles follow-ups, and enhances <strong>customer engagement</strong> seamlessly.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-brand-dark text-center mb-12">
              <strong className="text-brand-primary">AI CRM</strong> Features
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">{feature.title}</h3>
                  <p className="text-brand-dark/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-brand-dark text-center mb-12">
              Why Choose <strong className="text-brand-primary">AI-Powered CRM</strong>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Never Miss a Lead', desc: 'AI responds instantly to inquiries, even outside business hours.' },
                { title: 'Save Time', desc: 'Automate repetitive tasks like scheduling and follow-ups.' },
                { title: 'Increase Conversions', desc: 'Faster response times lead to higher conversion rates.' },
                { title: 'Scale Efficiently', desc: 'Handle more customers without adding staff.' },
                { title: 'Consistent Experience', desc: 'Every customer receives the same high-quality service.' },
                { title: 'Data-Driven Insights', desc: 'Track customer interactions and optimize your approach.' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 glass-card p-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
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
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                Ready to Automate Your <strong className="text-brand-primary">Customer Engagement</strong>?
              </h2>
              <p className="text-brand-dark/70 mb-6">
                Let <strong>True Rank Digital</strong> implement AI-powered CRM to transform your customer interactions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-full hover:bg-indigo-700 transition-colors duration-300"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Get AI CRM Today</span>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
