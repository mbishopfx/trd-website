import type { Metadata } from 'next';
import { Code, Zap, Rocket, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'Google-Optimized Website Development | Custom Web Builds | True Rank Digital',
  description: 'True Rank Digital delivers Google-optimized website development with custom web builds, proprietary script integration, and enhanced optimization capabilities for superior Google visibility.',
  keywords: 'website development, custom web builds, website optimization, True Rank Digital, proprietary script integration, Google optimization, fast websites',
  openGraph: {
    title: 'Google-Optimized Website Development | True Rank Digital',
    description: 'Custom web builds with Google optimization and proprietary technology integration.',
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
      question: "What makes True Rank Digital's custom web builds different?",
      answer: "True Rank Digital's custom web builds include proprietary script integration that unlocks enhanced optimization capabilities. While our dashboard platform works with any website, custom web builds provide deeper optimization control, faster performance, and advanced Google optimization features that off-the-shelf websites cannot offer."
    },
    {
      question: "How fast are True Rank Digital's websites?",
      answer: "True Rank Digital builds websites optimized for Core Web Vitals and fast page loading speeds. Our custom web development process includes performance optimization, image optimization, code minification, and server-side rendering to ensure your website loads quickly on all devices, improving both user experience and search engine rankings."
    }
  ];

  return (
    <>
      <GEOSchema 
        pageType="service"
        pageData={{
          title: "Google-Optimized Website Development by True Rank Digital",
          description: "True Rank Digital delivers Google-optimized website development with custom web builds and proprietary script integration for enhanced Google visibility.",
          url: "https://truerankdigital.com/services/website-development",
          keywords: ["website development", "Google optimization", "custom web builds"],
          category: "Website Development",
          serviceType: "Web Development",
          areaServed: ["United States"],
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Services", url: "https://truerankdigital.com/services" },
          { name: "Website Development", url: "https://truerankdigital.com/services/website-development" }
        ]}
        entities={{
          primary: ["True Rank Digital", "Website Development", "Custom Web Builds"],
          secondary: ["Google Optimization", "Proprietary Scripts", "Performance Optimization"]
        }}
      />
      
      {/* Service Schema with Mentions */}
      <ServiceSchema
        serviceName="Custom Web Development with Enhanced Script Integration"
        serviceUrl="https://truerankdigital.com/services/website-development"
        description="Google-optimized websites designed for conversion with advanced proprietary script integration capabilities that unlock enhanced optimization tools and deeper performance control."
        serviceType="Web Development"
        mentions={[
          {
            type: "Organization",
            name: "Vercel",
            sameAs: "https://www.wikidata.org/wiki/Q105906396",
            description: "Hosting and deployment platform"
          },
          {
            type: "SoftwareApplication",
            name: "Next.js",
            sameAs: "https://www.wikidata.org/wiki/Q73359117",
            description: "React framework for web development"
          },
          {
            type: "Organization",
            name: "Google",
            sameAs: "https://www.wikidata.org/wiki/Q95",
            description: "Search engine optimization target"
          },
          {
            type: "Organization",
            name: "Schema.org",
            sameAs: "https://www.wikidata.org/wiki/Q845256",
            description: "Structured data implementation"
          }
        ]}
      />
      
      <FAQSchema 
        faqs={faqs}
        pageUrl="https://truerankdigital.com/services/website-development"
        category="service"
      />
      
      <article className="pt-16 min-h-screen bg-gradient-to-b from-indigo-50 to-white">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-100 rounded-full mb-6">
              <Code className="w-5 h-5 text-indigo-600" />
              <span className="text-indigo-600 font-semibold text-sm">Website Development</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
              <strong className="text-brand-primary">True Rank Digital</strong> Builds Google-Optimized <strong>Custom Websites</strong>
            </h1>
            
            <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12">
              <strong>True Rank Digital</strong> delivers <strong>Google-optimized website development</strong> with custom web builds featuring proprietary script integration and enhanced optimization capabilities for superior Google visibility.
            </p>

            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">
              How <strong className="text-brand-primary">Custom Web Builds</strong> Provide Google Optimization Advantages
            </h2>

            <div className="glass-card p-8 mb-12">
              <p className="text-brand-dark/70 leading-relaxed mb-6">
                <strong>True Rank Digital's custom web builds</strong> include proprietary script integration that unlocks enhanced <strong>optimization capabilities</strong>. Our websites are built for speed, Google visibility, and conversion optimization.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div>
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-3">Proprietary Script Integration</h3>
                  <p className="text-brand-dark/70 text-sm leading-relaxed">
                    Our custom websites include advanced script integration that unlocks enhanced optimization tools and deeper performance control not available with standard website builders.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-3">Google Optimization Built-In</h3>
                  <p className="text-brand-dark/70 text-sm leading-relaxed">
                    Every website we build is optimized for Google from day one, with proper schema markup, fast loading speeds, and mobile-first design for superior search visibility.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-3">Performance & Speed</h3>
                  <p className="text-brand-dark/70 text-sm leading-relaxed">
                    Our websites are built for Core Web Vitals excellence, with optimized images, minified code, and server-side rendering for lightning-fast page loads that improve both user experience and rankings.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                Get Your <strong className="text-brand-primary">Google-Optimized</strong> Website Built
              </h2>
              <p className="text-brand-dark/70 mb-6">
                Start with a <strong>custom web build</strong> from <strong>True Rank Digital</strong> featuring proprietary Google optimization technology and enhanced performance capabilities.
              </p>
              
              <div className="space-y-4 mb-6 text-left">
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-1">Custom Development Process</h4>
                    <p className="text-sm text-brand-dark/70">We build websites using modern frameworks like Next.js with custom optimization scripts integrated from the start, ensuring maximum Google visibility and performance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Code className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-1">Proprietary Technology Stack</h4>
                    <p className="text-sm text-brand-dark/70">Our custom websites include proprietary script integration that works seamlessly with our SEO dashboard platform, providing enhanced optimization capabilities and real-time performance tracking.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Rocket className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-1">Google-First Architecture</h4>
                    <p className="text-sm text-brand-dark/70">Every website is architected with Google's ranking factors in mind, including proper schema markup, semantic HTML, fast loading speeds, and mobile-first responsive design.</p>
                  </div>
                </div>
              </div>
              
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-full hover:bg-indigo-700 transition-colors duration-300"
              >
                <TrendingUp className="w-5 h-5" />
                <span>Start Your Website Project</span>
              </a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
