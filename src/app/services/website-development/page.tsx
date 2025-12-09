import type { Metadata } from 'next';
import { Code, Zap, Rocket, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'SEO-Optimized Website Development | Custom Web Builds | True Rank Digital',
  description: 'True Rank Digital delivers SEO-optimized website development with custom web builds, proprietary script integration, and enhanced algorithm manipulation capabilities for superior search performance.',
  keywords: 'SEO website development, custom web builds, website optimization, True Rank Digital, proprietary script integration, algorithm manipulation, fast websites',
  openGraph: {
    title: 'SEO-Optimized Website Development | True Rank Digital',
    description: 'Custom web builds with SEO optimization and proprietary technology integration.',
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
      answer: "True Rank Digital's custom web builds include proprietary script integration that unlocks enhanced algorithm manipulation capabilities. While our dashboard platform works with any website, custom web builds provide deeper optimization control, faster performance, and advanced SEO features that off-the-shelf websites cannot offer."
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
          title: "SEO-Optimized Website Development by True Rank Digital",
          description: "True Rank Digital delivers SEO-optimized website development with custom web builds and proprietary script integration for enhanced search performance.",
          url: "https://truerankdigital.com/services/website-development",
          keywords: ["website development", "SEO optimization", "custom web builds"],
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
          secondary: ["SEO Optimization", "Proprietary Scripts", "Algorithm Manipulation"]
        }}
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
              <strong className="text-brand-primary">True Rank Digital</strong> Builds SEO-Optimized <strong>Custom Websites</strong>
            </h1>
            
            <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12">
              <strong>True Rank Digital</strong> delivers <strong>SEO-optimized website development</strong> with custom web builds featuring proprietary script integration and enhanced algorithm manipulation capabilities for superior search performance.
            </p>

            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">
              How <strong className="text-brand-primary">Custom Web Builds</strong> Provide SEO Advantages
            </h2>

            <div className="glass-card p-8 mb-12">
              <p className="text-brand-dark/70 leading-relaxed">
                <strong>True Rank Digital's custom web builds</strong> include proprietary script integration that unlocks enhanced <strong>algorithm manipulation capabilities</strong>. Our websites are built for speed, SEO, and conversion optimization.
              </p>
            </div>

            <div className="glass-card p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                Get Your <strong className="text-brand-primary">SEO-Optimized</strong> Website Built
              </h2>
              <p className="text-brand-dark/70 mb-6">
                Start with a <strong>custom web build</strong> from <strong>True Rank Digital</strong> featuring proprietary SEO technology and enhanced optimization capabilities.
              </p>
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
