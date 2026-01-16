import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, Share2, TrendingUp, MessageCircle, Heart, Target, ArrowRight, CheckCircle } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'Social Media Multi-Platform Management | High Authority Strategies | True Rank Digital',
  description: 'True Rank Digital uses high authority strategies to make your brand show ALIVE and trustworthy across all platforms. Google is strict - link your social presence back to your Knowledge Graph and website schema to prevent being counted as lesser than.',
  keywords: 'social media multi-platform management, high authority social media, Knowledge Graph alignment, schema-aligned content, social media authority, True Rank Digital, multi-platform social strategy',
  openGraph: {
    title: 'Social Marketing and Advertising | True Rank Digital',
    description: 'Organic social media management and advertising services to grow your brand.',
    url: 'https://truerankdigital.com/services/social-media',
    type: 'website',
  },
  alternates: {
    canonical: 'https://truerankdigital.com/services/social-media'
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

export default function SocialMediaPage() {
  const faqs = [
    {
      question: "What social media platforms does True Rank Digital manage?",
      answer: "True Rank Digital manages all major social platforms including Facebook, Instagram, LinkedIn, TikTok, Twitter/X, Pinterest, and YouTube. We create platform-specific strategies that maximize engagement and reach for each channel based on your target audience."
    },
    {
      question: "How does organic social media marketing differ from paid advertising?",
      answer: "Organic social media focuses on building authentic engagement through quality content, community interaction, and strategic posting. While paid advertising provides immediate reach, organic growth builds lasting relationships with your audience. True Rank Digital offers both services for comprehensive social presence."
    },
    {
      question: "How often will you post on my social media accounts?",
      answer: "True Rank Digital creates customized posting schedules based on your industry and audience. Typically, we recommend 3-5 posts per week on primary platforms, with daily engagement activities. Our content calendar ensures consistent, strategic posting that maximizes visibility."
    }
  ];

  const features = [
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'High Authority Content Strategy',
      description: 'Strategic content that demonstrates expertise, builds trust, and aligns with your Knowledge Graph for maximum Google authority.'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Multi-Platform Management',
      description: 'Consistent brand presence across all platforms - Facebook, Instagram, LinkedIn, Twitter/X, TikTok, YouTube - that links back to your schema.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Knowledge Graph Alignment',
      description: 'Schema-aligned content that strengthens your Google Knowledge Graph connection, ensuring Google recognizes your brand as a trusted entity.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Trustworthy Brand Presence',
      description: 'High authority strategies that make your brand show ALIVE and trustworthy, preventing Google from counting you as lesser than competitors.'
    }
  ];

  const relatedServices = [
    { name: 'Digital Marketing', href: '/services/digital-marketing', description: 'Comprehensive digital marketing strategies' },
    { name: 'Google Business Profile', href: '/services/google-business-profile', description: 'Optimize your local presence' },
    { name: 'PPC Campaigns', href: '/services/ppc-campaigns', description: 'Paid advertising for immediate results' },
    { name: 'Business Consulting', href: '/services/business-consulting', description: 'Strategic growth guidance' }
  ];

  return (
    <>
      <GEOSchema 
        pageType="service"
        pageData={{
          title: "Social Media Multi-Platform Management by True Rank Digital",
          description: "True Rank Digital uses high authority strategies to make your brand show ALIVE and trustworthy across all platforms. Strong presence that links back to Knowledge Graph and website schema.",
          url: "https://truerankdigital.com/services/social-media",
          keywords: ["social media multi-platform management", "high authority social media", "Knowledge Graph alignment", "schema-aligned content", "social media authority"],
          category: "Social Media Marketing Services",
          serviceType: "Social Media Multi-Platform Management",
          areaServed: ["United States"],
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Services", url: "https://truerankdigital.com/services" },
          { name: "Social Marketing", url: "https://truerankdigital.com/services/social-media" }
        ]}
        entities={{
          primary: ["True Rank Digital", "Social Media Marketing", "Content Strategy"],
          secondary: ["Community Management", "Brand Awareness", "Audience Growth"]
        }}
      />
      
      <ServiceSchema
        serviceName="Social Media Multi-Platform Management"
        serviceUrl="https://truerankdigital.com/services/social-media"
        description="True Rank Digital uses high authority strategies to make your brand show ALIVE and trustworthy across all platforms. Google is strict - link your social presence back to your Knowledge Graph and website schema to prevent being counted as lesser than."
        serviceType="Social Media Multi-Platform Management"
        mentions={[
          {
            type: "Organization",
            name: "Facebook",
            sameAs: "https://www.wikidata.org/wiki/Q355",
            description: "Social networking platform"
          },
          {
            type: "Organization",
            name: "Instagram",
            sameAs: "https://www.wikidata.org/wiki/Q209330",
            description: "Photo and video sharing platform"
          },
          {
            type: "Organization",
            name: "LinkedIn",
            sameAs: "https://www.wikidata.org/wiki/Q213660",
            description: "Professional networking platform"
          }
        ]}
      />
      
      <FAQSchema 
        faqs={faqs}
        pageUrl="https://truerankdigital.com/services/social-media"
        category="service"
      />
      
      <article className="pt-16 min-h-screen bg-gradient-to-b from-pink-50 to-white">
        {/* Breadcrumb Navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-brand-dark/60 hover:text-brand-primary transition-colors">Home</Link></li>
            <li className="text-brand-dark/40">/</li>
            <li><Link href="/services" className="text-brand-dark/60 hover:text-brand-primary transition-colors">Services</Link></li>
            <li className="text-brand-dark/40">/</li>
            <li className="text-brand-primary font-medium">Social Marketing</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-pink-100 rounded-full mb-6">
              <Users className="w-5 h-5 text-pink-600" />
              <span className="text-pink-600 font-semibold text-sm">Social Marketing</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
              <strong className="text-brand-primary">True Rank Digital</strong> Delivers <strong>Social Media Multi-Platform Management</strong> with High Authority Strategies
            </h1>
            
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto mb-12">
              We use <strong>high authority strategies</strong> to make sure your brand shows <strong>ALIVE and trustworthy</strong> throughout all platforms. <strong>Google is strict</strong> and the last thing you want is for them to count you off as lesser than - so having a <strong>strong presence that links back to your Knowledge Graph and website schema is key</strong>. Our multi-platform management ensures your brand maintains consistent authority across Facebook, Instagram, LinkedIn, Twitter/X, TikTok, and YouTube.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-brand-dark text-center mb-12">
              Our <strong className="text-brand-primary">Social Media</strong> Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
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
              How Our <strong className="text-brand-primary">High Authority Multi-Platform Management</strong> Works
            </h2>
            
            <div className="space-y-6">
              {[
                { step: '01', title: 'Authority Audit & Schema Alignment', desc: 'We analyze your current social presence, Knowledge Graph status, and website schema to identify gaps that could make Google count you as lesser than competitors. We develop a high authority strategy aligned with your business goals.' },
                { step: '02', title: 'Schema-Aligned Content Creation', desc: 'Our team creates engaging, trustworthy content that links back to your Knowledge Graph and website schema. Every post, graphic, and video reinforces your brand authority across all platforms.' },
                { step: '03', title: 'Multi-Platform Brand Consistency', desc: 'We actively manage your presence across Facebook, Instagram, LinkedIn, Twitter/X, TikTok, and YouTube, ensuring consistent messaging that makes your brand show ALIVE and trustworthy to Google.' },
                { step: '04', title: 'Knowledge Graph Optimization & Reporting', desc: 'Continuous monitoring of your cross-platform authority, Knowledge Graph signals, and schema alignment ensures Google recognizes your brand as a trusted entity. Monthly reporting tracks your authority growth.' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 glass-card p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
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

        {/* Google Authority Section */}
        <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-brand-dark text-center mb-6">
              Why <strong className="text-brand-primary">Google Authority</strong> Matters for Your Social Media
            </h2>
            <p className="text-xl text-brand-dark/70 text-center mb-12 max-w-3xl mx-auto">
              <strong>Google is strict</strong> - they evaluate your entire online presence to determine your brand authority. The last thing you want is for Google to count you off as lesser than your competitors.
            </p>
            
            <div className="glass-card p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                <strong className="text-brand-primary">High Authority Strategy:</strong> Making Your Brand Show ALIVE
              </h3>
              <p className="text-brand-dark/80 mb-6 leading-relaxed">
                True Rank Digital uses <strong>high authority strategies</strong> that make your brand appear <strong>ALIVE and trustworthy</strong> throughout all social platforms. We ensure every post, interaction, and piece of content reinforces your expertise and credibility in Google&apos;s eyes.
              </p>
              <ul className="space-y-3 text-brand-dark/70">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Consistent messaging</strong> across all platforms that aligns with your Knowledge Graph</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Schema-aligned content</strong> that links back to your website schema and strengthens your Google authority</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>E-E-A-T signals</strong> through authentic, expert content that demonstrates your brand&apos;s Experience, Expertise, Authoritativeness, and Trustworthiness</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Active engagement</strong> that shows your brand is alive, responsive, and trustworthy to both users and Google&apos;s algorithms</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8 bg-gradient-to-br from-brand-primary/10 to-pink-100/50">
              <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                <strong className="text-brand-primary">Knowledge Graph & Schema Alignment:</strong> The Key to Google Recognition
              </h3>
              <p className="text-brand-dark/80 mb-6 leading-relaxed">
                Having a <strong>strong presence that links back to your Knowledge Graph and website schema is key</strong> to preventing Google from counting you as lesser than your competitors. Our multi-platform management ensures:
              </p>
              <ul className="space-y-3 text-brand-dark/70">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>All social profiles use <strong>consistent NAP (Name, Address, Phone)</strong> information that matches your Knowledge Graph</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Content includes <strong>structured data markers</strong> that reinforce your website schema</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Social media profiles <strong>link back to your website</strong> with proper schema attribution</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Cross-platform consistency</strong> that strengthens your brand entity recognition in Google&apos;s Knowledge Graph</span>
                </li>
              </ul>
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
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                Ready to Build <strong className="text-brand-primary">High Authority</strong> Across All Platforms?
              </h2>
              <p className="text-brand-dark/70 mb-6">
                Don&apos;t let Google count you as lesser than. Let <strong>True Rank Digital</strong> create a <strong>strong social media presence that links back to your Knowledge Graph and website schema</strong>, making your brand show <strong>ALIVE and trustworthy</strong> throughout all platforms.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-pink-600 text-white font-semibold text-lg rounded-full hover:bg-pink-700 transition-colors duration-300"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Start Growing Today</span>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
