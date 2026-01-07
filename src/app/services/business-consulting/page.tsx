import type { Metadata } from 'next';
import Link from 'next/link';
import { Building, TrendingUp, Target, Users, BarChart3, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'Business Consulting Services | Strategic Growth Guidance | True Rank Digital',
  description: 'Achieve sustainable growth with True Rank Digital\'s business consulting. We offer strategic guidance on digital marketing, process optimization, and market expansion.',
  keywords: 'business consulting, strategic guidance, digital marketing consulting, process optimization, market expansion, True Rank Digital, growth strategy',
  openGraph: {
    title: 'Business Consulting Services | True Rank Digital',
    description: 'Strategic business consulting for digital marketing and growth.',
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
      answer: "True Rank Digital provides business consulting for small to mid-sized businesses across all industries. We specialize in helping service-based businesses, professional practices, retail operations, and local businesses optimize their digital presence and operational efficiency."
    },
    {
      question: "How is business consulting different from marketing services?",
      answer: "While marketing services focus on specific campaigns and tactics, business consulting takes a holistic view of your organization. True Rank Digital's consulting addresses overall strategy, process optimization, market positioning, and long-term growth planning alongside digital marketing recommendations."
    },
    {
      question: "What does a typical consulting engagement look like?",
      answer: "A True Rank Digital consulting engagement typically begins with a comprehensive business audit, followed by strategic planning sessions, implementation roadmap development, and ongoing advisory support. Engagements can range from one-time strategy sessions to ongoing monthly consulting relationships."
    }
  ];

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Strategic Planning',
      description: 'Develop clear business strategies aligned with your goals and market opportunities.'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Process Optimization',
      description: 'Streamline operations and improve efficiency across your organization.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Growth Strategy',
      description: 'Identify and execute expansion opportunities for sustainable business growth.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Digital Transformation',
      description: 'Modernize your business with technology and digital marketing integration.'
    }
  ];

  const relatedServices = [
    { name: 'Digital Marketing', href: '/services/digital-marketing', description: 'Comprehensive digital marketing strategies' },
    { name: 'Google Business Profile', href: '/services/google-business-profile', description: 'Optimize your local presence' },
    { name: 'CRM With AI Chat', href: '/services/crm-ai-chat', description: 'AI-powered customer management' },
    { name: 'Website Engineering', href: '/services/website-development', description: 'Custom website development' }
  ];

  return (
    <>
      <GEOSchema 
        pageType="service"
        pageData={{
          title: "Business Consulting by True Rank Digital",
          description: "Strategic business consulting for digital marketing, process optimization, and market expansion.",
          url: "https://truerankdigital.com/services/business-consulting",
          keywords: ["business consulting", "strategic guidance", "process optimization", "growth strategy"],
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
          secondary: ["Process Optimization", "Growth Strategy", "Digital Transformation"]
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
              <Building className="w-5 h-5 text-orange-600" />
              <span className="text-orange-600 font-semibold text-sm">Business Consulting</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
              <strong className="text-brand-primary">True Rank Digital</strong> Provides <strong>Business Consulting</strong> Services
            </h1>
            
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto mb-12">
              Achieve sustainable growth with <strong>True Rank Digital&apos;s</strong> <strong>business consulting</strong>. We offer <strong>strategic guidance</strong> on digital marketing, <strong>process optimization</strong>, and <strong>market expansion</strong>.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-brand-dark text-center mb-12">
              Our <strong className="text-brand-primary">Consulting</strong> Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
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
              Our <strong className="text-brand-primary">Consulting Process</strong>
            </h2>
            
            <div className="space-y-6">
              {[
                { step: '01', title: 'Discovery & Audit', desc: 'We conduct a comprehensive analysis of your current business operations, market position, and growth opportunities.' },
                { step: '02', title: 'Strategy Development', desc: 'Based on our findings, we develop a customized strategic plan aligned with your business goals and resources.' },
                { step: '03', title: 'Implementation Roadmap', desc: 'We create a detailed action plan with clear milestones, timelines, and success metrics.' },
                { step: '04', title: 'Ongoing Support', desc: 'We provide continuous guidance and optimization as you execute the strategy and adapt to market changes.' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 glass-card p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
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
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                Ready for <strong className="text-brand-primary">Strategic Growth</strong>?
              </h2>
              <p className="text-brand-dark/70 mb-6">
                Let <strong>True Rank Digital</strong> guide your business to sustainable success.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-orange-600 text-white font-semibold text-lg rounded-full hover:bg-orange-700 transition-colors duration-300"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Schedule Consultation</span>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
