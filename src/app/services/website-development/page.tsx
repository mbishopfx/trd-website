import type { Metadata } from 'next';
import Link from 'next/link';
import { Code, Zap, Rocket, TrendingUp, CheckCircle, Shield, Award, Clock, Smartphone, Search, Gauge, Server, ArrowRight, Phone, Globe, Layout } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'Website Engineering & Development Services | True Rank Digital',
  description: 'True Rank Digital offers comprehensive website engineering, including custom design, development, and UX optimization to enhance your online presence and user engagement.',
  keywords: 'website development, website engineering, custom web design, UX optimization, Next.js development, React websites, Google-optimized websites, True Rank Digital',
  openGraph: {
    title: 'Website Engineering & Development | True Rank Digital',
    description: 'Custom website development with Google optimization and superior UX design.',
    url: 'https://truerankdigital.com/services/website-development',
    type: 'website',
  },
  alternates: {
    canonical: 'https://truerankdigital.com/services/website-development'
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

export default function WebsiteDevelopmentPage() {
  const faqs = [
    {
      question: "What makes True Rank Digital's website development different?",
      answer: "True Rank Digital builds websites with Google optimization as the foundation, not an afterthought. Our custom builds include proprietary script integration, advanced schema markup, Core Web Vitals optimization, and seamless integration with our SEO dashboard platform. We use modern frameworks like Next.js for superior performance and developer experience."
    },
    {
      question: "How long does it take to build a custom website?",
      answer: "Timeline varies based on project complexity. A standard business website takes 4-6 weeks, while more complex projects with custom functionality may take 8-12 weeks. We provide detailed timelines during discovery and maintain transparent communication throughout development. Rush projects are available for an additional fee."
    },
    {
      question: "Do you provide website hosting and maintenance?",
      answer: "Yes, True Rank Digital offers managed hosting on enterprise-grade infrastructure with 99.9% uptime guarantee. Our maintenance packages include security updates, performance monitoring, content updates, and technical support. Hosting is optimized for speed with CDN integration and automatic SSL certificates."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely. All True Rank Digital websites are built mobile-first, meaning we design for mobile devices first and scale up to desktop. This approach ensures optimal user experience across all devices and aligns with Google's mobile-first indexing, which is critical for search rankings."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes, we specialize in website redesigns that preserve your existing SEO equity while dramatically improving performance and user experience. Our redesign process includes thorough URL mapping, redirect implementation, and content migration to ensure you don't lose search rankings during the transition."
    }
  ];

  const services = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'Custom Website Design',
      description: 'Unique, brand-aligned designs that stand out from templates and communicate your value proposition effectively.',
      features: ['Custom UI/UX design', 'Brand integration', 'Conversion optimization', 'Responsive layouts']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Modern Development',
      description: 'Built with cutting-edge technologies like Next.js and React for superior performance and maintainability.',
      features: ['Next.js/React', 'TypeScript', 'Server-side rendering', 'API integration']
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Lightning-fast websites optimized for Core Web Vitals and superior user experience.',
      features: ['Core Web Vitals', 'Image optimization', 'Code splitting', 'CDN integration']
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO-First Architecture',
      description: 'Every website built with Google optimization as the foundation, not an afterthought.',
      features: ['Schema markup', 'Semantic HTML', 'Meta optimization', 'Sitemap generation']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile-First Design',
      description: 'Designed for mobile devices first, ensuring optimal experience across all screen sizes.',
      features: ['Responsive design', 'Touch optimization', 'Mobile performance', 'PWA capability']
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Managed Hosting',
      description: 'Enterprise-grade hosting with 99.9% uptime, automatic SSL, and CDN integration.',
      features: ['99.9% uptime', 'Automatic SSL', 'Daily backups', '24/7 monitoring']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We dive deep into your business goals, target audience, and competitive landscape to create a strategic blueprint.',
      details: ['Stakeholder interviews', 'Competitor analysis', 'User research', 'Technical requirements']
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our designers create wireframes and high-fidelity mockups that bring your vision to life.',
      details: ['Wireframe development', 'Visual design', 'Interactive prototypes', 'Design review cycles']
    },
    {
      step: '03',
      title: 'Development & Integration',
      description: 'Our engineers build your website using modern technologies with clean, maintainable code.',
      details: ['Frontend development', 'Backend integration', 'CMS setup', 'Third-party integrations']
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Rigorous testing across devices and browsers ensures flawless performance before launch.',
      details: ['Cross-browser testing', 'Performance optimization', 'SEO verification', 'Security audit']
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'We handle deployment and provide ongoing support to ensure continued success.',
      details: ['Deployment', 'DNS configuration', 'Performance monitoring', 'Ongoing maintenance']
    }
  ];

  const results = [
    { metric: '75+', label: 'Websites Built', description: 'Custom projects delivered' },
    { metric: '95+', label: 'PageSpeed Score', description: 'Average performance' },
    { metric: '2.1s', label: 'Avg. Load Time', description: 'Mobile performance' },
    { metric: '100%', label: 'Mobile Optimized', description: 'Responsive design' }
  ];

  const techStack = [
    'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL',
    'Vercel', 'Supabase', 'Sanity CMS', 'Stripe', 'Google Analytics', 'Schema.org'
  ];

  const relatedServices = [
    { name: 'Digital Marketing', href: '/services/digital-marketing', description: 'Drive traffic to your new site' },
    { name: 'Google Business Profile', href: '/services/google-business-profile', description: 'Local search optimization' },
    { name: 'SEO Tactics', href: '/services/seo-tactics', description: 'Organic search growth' },
    { name: 'CRM With AI Chat', href: '/services/crm-ai-chat', description: 'Convert more visitors' }
  ];

  return (
    <>
      <GEOSchema 
        pageType="service"
        pageData={{
          title: "Website Engineering by True Rank Digital",
          description: "Comprehensive website engineering including custom design, development, and UX optimization.",
          url: "https://truerankdigital.com/services/website-development",
          keywords: ["website development", "website engineering", "custom web design", "UX optimization"],
          category: "Website Development",
          serviceType: "Web Development",
          areaServed: ["United States"],
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Services", url: "https://truerankdigital.com/services" },
          { name: "Website Engineering", url: "https://truerankdigital.com/services/website-development" }
        ]}
        entities={{
          primary: ["True Rank Digital", "Website Engineering", "Web Development"],
          secondary: ["UX Design", "Next.js", "React", "Performance Optimization"]
        }}
      />
      
      <ServiceSchema
        serviceName="Website Engineering"
        serviceUrl="https://truerankdigital.com/services/website-development"
        description="True Rank Digital offers comprehensive website engineering, including custom design, development, and UX optimization to enhance your online presence and user engagement."
        serviceType="Web Development"
        mentions={[
          {
            type: "SoftwareApplication",
            name: "Next.js",
            sameAs: "https://www.wikidata.org/wiki/Q73359117",
            description: "React framework for web development"
          },
          {
            type: "Organization",
            name: "Vercel",
            sameAs: "https://www.wikidata.org/wiki/Q105906396",
            description: "Hosting and deployment platform"
          },
          {
            type: "Organization",
            name: "Google",
            sameAs: "https://www.wikidata.org/wiki/Q95",
            description: "Search engine optimization target"
          }
        ]}
      />
      
      <FAQSchema 
        faqs={faqs}
        pageUrl="https://truerankdigital.com/services/website-development"
        category="service"
      />
      
      <article className="pt-16 min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Breadcrumb Navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-brand-dark/60 hover:text-brand-primary transition-colors">Home</Link></li>
            <li className="text-brand-dark/40">/</li>
            <li><Link href="/services" className="text-brand-dark/60 hover:text-brand-primary transition-colors">Services</Link></li>
            <li className="text-brand-dark/40">/</li>
            <li className="text-brand-primary font-medium">Website Engineering</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                  <Code className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-600 font-semibold text-sm">Website Engineering</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
                  <strong className="text-brand-primary">Website Engineering</strong> That Drives Business Results
                </h1>
                
                <p className="text-xl text-brand-dark/70 mb-8">
                  <strong>True Rank Digital</strong> offers comprehensive <strong>website engineering</strong>, including custom design, development, and UX optimization to enhance your online presence and user engagement.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center space-x-2 text-brand-dark/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>75+ Websites Built</span>
                  </div>
                  <div className="flex items-center space-x-2 text-brand-dark/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>95+ PageSpeed Score</span>
                  </div>
                  <div className="flex items-center space-x-2 text-brand-dark/70">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>100% Mobile Optimized</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-purple-600 text-white font-semibold text-lg rounded-full hover:bg-purple-700 transition-colors duration-300"
                  >
                    <Rocket className="w-5 h-5" />
                    <span>Start Your Project</span>
                  </Link>
                  <a
                    href="tel:+17324750139"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold text-lg rounded-full hover:bg-purple-50 transition-colors duration-300"
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
                    <div className="text-3xl font-bold text-purple-600 mb-2">{result.metric}</div>
                    <div className="text-lg font-semibold text-brand-dark mb-1">{result.label}</div>
                    <div className="text-sm text-brand-dark/60">{result.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Custom Websites Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Why <strong className="text-brand-primary">Custom Website Development</strong> Matters
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Your website is your most important digital asset. Here&apos;s why custom development delivers superior results:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-8">
                <div className="text-4xl font-bold text-purple-600 mb-4">94%</div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">First Impressions</h3>
                <p className="text-brand-dark/70">Of first impressions are design-related. A professional, custom website builds immediate credibility with visitors.</p>
              </div>
              <div className="glass-card p-8">
                <div className="text-4xl font-bold text-purple-600 mb-4">53%</div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">Mobile Abandonment</h3>
                <p className="text-brand-dark/70">Of mobile users abandon sites that take over 3 seconds to load. Our sites load in under 2.5 seconds on average.</p>
              </div>
              <div className="glass-card p-8">
                <div className="text-4xl font-bold text-purple-600 mb-4">200%</div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">Conversion Increase</h3>
                <p className="text-brand-dark/70">Custom-designed websites can increase conversions by up to 200% compared to template-based alternatives.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Our <strong className="text-brand-primary">Website Engineering</strong> Services
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                End-to-end website development services from design to deployment and beyond.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 text-white">
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

        {/* Tech Stack Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Our <strong className="text-brand-primary">Technology Stack</strong>
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                We use modern, battle-tested technologies to build fast, secure, and scalable websites.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <div key={index} className="px-6 py-3 bg-purple-100 rounded-full text-purple-700 font-medium">
                  {tech}
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
                Our <strong className="text-brand-primary">Development Process</strong>
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                A systematic approach to delivering exceptional websites on time and on budget.
              </p>
            </div>

            <div className="space-y-8">
              {process.map((item, index) => (
                <div key={index} className="glass-card p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
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
                  Why Choose <strong className="text-brand-primary">True Rank Digital</strong>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Google-First Development</h3>
                      <p className="text-brand-dark/70">Every website is built with SEO as the foundation. Schema markup, semantic HTML, and performance optimization are standard.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Performance Obsessed</h3>
                      <p className="text-brand-dark/70">Our websites consistently score 95+ on PageSpeed Insights. Fast sites rank better and convert more visitors.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Enterprise Security</h3>
                      <p className="text-brand-dark/70">SSL certificates, security headers, and regular updates protect your site and your customers&apos; data.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">Ongoing Support</h3>
                      <p className="text-brand-dark/70">We don&apos;t disappear after launch. Maintenance packages ensure your site stays fast, secure, and up-to-date.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6 text-center">Website Types We Build</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Business Websites', 'E-commerce Stores', 'Landing Pages', 'Web Applications',
                    'Portfolio Sites', 'Membership Sites', 'Blogs & Publications', 'Multi-location Sites',
                    'Service Directories', 'Booking Systems', 'Client Portals', 'Custom Solutions'
                  ].map((type, index) => (
                    <div key={index} className="flex items-center space-x-2 text-brand-dark/70">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{type}</span>
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
                Common questions about our website development services.
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
            <div className="glass-card p-8 bg-gradient-to-br from-purple-500/10 to-indigo-500/10">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                Ready to Build Your <strong className="text-brand-primary">Dream Website</strong>?
              </h2>
              <p className="text-xl text-brand-dark/70 mb-8 max-w-2xl mx-auto">
                Get a free consultation and discover how a custom website can transform your online presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-purple-600 text-white font-semibold text-lg rounded-full hover:bg-purple-700 transition-colors duration-300"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Start Your Project</span>
                </Link>
                <a
                  href="tel:+17324750139"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold text-lg rounded-full hover:bg-purple-50 transition-colors duration-300"
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
