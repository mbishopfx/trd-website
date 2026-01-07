import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, Share2, TrendingUp, MessageCircle, Heart, Target, ArrowRight, CheckCircle } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'Social Marketing and Advertising Services | True Rank Digital',
  description: 'Grow your brand naturally with True Rank Digital\'s organic social media services. We manage and enhance your social presence through strategic content and community engagement.',
  keywords: 'social media marketing, organic social media, social media management, community engagement, content strategy, True Rank Digital, social advertising',
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
      title: 'Content Strategy',
      description: 'Strategic content planning and creation that resonates with your target audience and drives engagement.'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Community Management',
      description: 'Active community engagement, comment moderation, and relationship building with your followers.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Brand Awareness',
      description: 'Increase brand visibility and recognition through consistent, on-brand social presence.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Audience Growth',
      description: 'Targeted strategies to grow your follower base with engaged, relevant audiences.'
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
          title: "Social Marketing and Advertising by True Rank Digital",
          description: "Grow your brand naturally with True Rank Digital's organic social media services. Strategic content and community engagement.",
          url: "https://truerankdigital.com/services/social-media",
          keywords: ["social media marketing", "organic social media", "community engagement", "content strategy"],
          category: "Social Media Marketing Services",
          serviceType: "Social Media Marketing",
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
        serviceName="Social Marketing and Advertising"
        serviceUrl="https://truerankdigital.com/services/social-media"
        description="Grow your brand naturally with True Rank Digital's organic social media services. We manage and enhance your social presence through strategic content and community engagement."
        serviceType="Social Media Marketing"
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
              <strong className="text-brand-primary">True Rank Digital</strong> Delivers Professional <strong>Social Marketing and Advertising</strong>
            </h1>
            
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto mb-12">
              Grow your brand naturally with <strong>True Rank Digital&apos;s</strong> organic <strong>social media services</strong>. We manage and enhance your social presence through <strong>strategic content</strong> and <strong>community engagement</strong>.
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
              How <strong className="text-brand-primary">Social Media Marketing</strong> Works
            </h2>
            
            <div className="space-y-6">
              {[
                { step: '01', title: 'Audit & Strategy', desc: 'We analyze your current social presence and develop a customized strategy aligned with your business goals.' },
                { step: '02', title: 'Content Creation', desc: 'Our team creates engaging, on-brand content including graphics, videos, and copy that resonates with your audience.' },
                { step: '03', title: 'Community Engagement', desc: 'We actively engage with your community, respond to comments, and build relationships with followers.' },
                { step: '04', title: 'Analytics & Optimization', desc: 'Monthly reporting and continuous optimization ensure your social strategy delivers measurable results.' }
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
                Ready to Grow Your <strong className="text-brand-primary">Social Presence</strong>?
              </h2>
              <p className="text-brand-dark/70 mb-6">
                Let <strong>True Rank Digital</strong> transform your social media into a powerful brand-building tool.
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
