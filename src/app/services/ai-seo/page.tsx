import type { Metadata } from 'next';
import { Brain, Zap, Target, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema, { generateServiceFAQs } from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'AI Search Optimization Services | LLM.txt Optimization | True Rank Digital',
  description: 'True Rank Digital provides AI Search Optimization services with LLM.txt optimization, custom algorithm adaptation scripts, and AI search engine optimization for ChatGPT, Perplexity, and Google AI Overview.',
  keywords: 'AI Search Optimization, LLM.txt optimization, AI search optimization, ChatGPT optimization, Perplexity optimization, Google AI Overview, True Rank Digital, algorithm adaptation, AI-enhanced optimization',
  openGraph: {
    title: 'AI Search Optimization Services & LLM.txt Optimization | True Rank Digital',
    description: 'Optimize for AI search engines with True Rank Digital\'s AI Search Optimization services and LLM.txt creation.',
    url: 'https://truerankdigital.com/services/ai-seo',
    type: 'website',
  },
  alternates: {
    canonical: 'https://truerankdigital.com/services/ai-seo'
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

export default function AISEOPage() {
  const faqs = generateServiceFAQs('aiSEO', [
    {
      question: "What AI search engines does True Rank Digital optimize for?",
      answer: "True Rank Digital optimizes your content for all major AI search engines including ChatGPT, Perplexity, Claude, Google's AI Overview (SGE), Microsoft Copilot, and other LLM-powered search tools. Our LLM.txt files and structured data optimization ensure your business gets cited by AI systems when users ask relevant questions."
    },
    {
      question: "How does AI Search Optimization differ from Google Business Optimization?",
      answer: "Google Business Optimization focuses on ranking in Google's traditional search results and local pack, while AI Search Optimization optimizes for AI-powered answer engines. True Rank Digital provides both strategies - Google Business Optimization for Google rankings and AI Search Optimization for visibility in ChatGPT, Perplexity, and other AI tools. AI Search Optimization requires LLM.txt files, enhanced structured data, and content formatting that AI systems prefer."
    }
  ]);

  return (
    <>
      <GEOSchema 
        pageType="service"
        pageData={{
          title: "AI Search Optimization Services & LLM.txt Optimization by True Rank Digital",
          description: "True Rank Digital delivers AI Search Optimization services with LLM.txt optimization, custom algorithm adaptation scripts, and AI search engine optimization for ChatGPT, Perplexity, and Google AI Overview.",
          url: "https://truerankdigital.com/services/ai-seo",
          keywords: ["AI Search Optimization", "LLM.txt", "ChatGPT optimization", "Perplexity optimization", "AI search"],
          category: "AI Search Optimization Services",
          serviceType: "AI Search Optimization",
          areaServed: ["United States"],
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Services", url: "https://truerankdigital.com/services" },
          { name: "AI Search Optimization", url: "https://truerankdigital.com/services/ai-seo" }
        ]}
        entities={{
          primary: ["True Rank Digital", "AI Search Optimization", "LLM.txt Optimization"],
          secondary: ["ChatGPT", "Perplexity", "Google AI Overview", "Algorithm Adaptation"]
        }}
      />
      
      {/* Service Schema with Mentions */}
      <ServiceSchema
        serviceName="AI Search Optimization with Algorithm Adaptation Scripts"
        serviceUrl="https://truerankdigital.com/services/ai-seo"
        description="Revolutionary custom algorithm adaptation scripts and proprietary solution building frameworks that automatically adjust to Google algorithm changes, maintaining peak Google visibility. Includes LLM.txt optimization for AI search engines."
        serviceType="AI Search Optimization"
        mentions={[
          {
            type: "Organization",
            name: "OpenAI",
            sameAs: "https://www.wikidata.org/wiki/Q21708200",
            description: "Creator of ChatGPT"
          },
          {
            type: "SoftwareApplication",
            name: "ChatGPT",
            sameAs: "https://www.wikidata.org/wiki/Q115564437",
            description: "AI chatbot and search assistant"
          },
          {
            type: "Organization",
            name: "Anthropic",
            sameAs: "https://www.wikidata.org/wiki/Q104834799",
            description: "Creator of Claude AI"
          },
          {
            type: "SoftwareApplication",
            name: "Perplexity AI",
            sameAs: "https://www.wikidata.org/wiki/Q123885700",
            description: "AI-powered answer engine"
          },
          {
            type: "Organization",
            name: "Google",
            sameAs: "https://www.wikidata.org/wiki/Q95",
            description: "Search engine with AI Overview"
          },
          {
            type: "Organization",
            name: "Schema.org",
            sameAs: "https://www.wikidata.org/wiki/Q845256",
            description: "Structured data vocabulary"
          }
        ]}
      />
      
      <FAQSchema 
        faqs={faqs}
        pageUrl="https://truerankdigital.com/services/ai-seo"
        category="service"
      />
      
      <article className="pt-16 min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
              <Brain className="w-5 h-5 text-purple-600" />
              <span className="text-purple-600 font-semibold text-sm">AI Search Optimization</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
              <strong className="text-brand-primary">True Rank Digital</strong> Delivers AI Search Optimization Services with <strong>LLM.txt Optimization</strong>
            </h1>
            
            <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-8">
              <strong>True Rank Digital</strong> provides <strong>AI Search Optimization services</strong> featuring <strong>LLM.txt optimization</strong>, custom algorithm adaptation scripts, and <strong>AI search engine optimization</strong> for <strong>ChatGPT</strong>, <strong>Perplexity</strong>, and <strong>Google AI Overview</strong>. Our in-house technology ensures your business gets cited by AI-powered search engines.
            </p>

            <div className="max-w-4xl mx-auto mb-12">
              <div className="glass-card p-6 lg:p-8 mb-8">
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                  How <strong className="text-brand-primary">AI Search Optimization</strong> Works in 2026
                </h2>
                <p className="text-brand-dark/70 leading-relaxed">
                  <strong>True Rank Digital's AI Search Optimization services</strong> combine advanced <strong>LLM.txt file creation</strong> with our proprietary dashboard platform to optimize your content for <strong>AI search engines</strong>. Every client receives custom <strong>algorithm adaptation scripts</strong> that ensure your business appears in AI-generated answers from ChatGPT, Perplexity, Claude, and Google's AI Overview.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">
              What <strong className="text-brand-primary">AI Search Optimization Services</strong> Include
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300">
                <Brain className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-brand-dark mb-2">LLM.txt File Creation</h3>
                <p className="text-brand-dark/70 text-sm">Specialized files optimized for AI search engines like ChatGPT and Perplexity</p>
              </div>
              <div className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300">
                <Target className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-brand-dark mb-2">Custom Algorithm Scripts</h3>
                <p className="text-brand-dark/70 text-sm">Proprietary automation that adapts to AI search algorithm changes</p>
              </div>
              <div className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300">
                <Zap className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-brand-dark mb-2">AI Overview Optimization</h3>
                <p className="text-brand-dark/70 text-sm">Structured content for Google AI Overview and SGE visibility</p>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                Why Choose <strong className="text-brand-primary">True Rank Digital</strong> for AI Search Optimization
              </h2>
              <p className="text-brand-dark/70 mb-6">
                Get your business cited by <strong>AI search engines</strong> with our proven <strong>AI Search Optimization</strong> tactics and exclusive <strong>LLM.txt creation</strong> services. <strong>True Rank Digital</strong> delivers AI visibility for ChatGPT, Perplexity, and Google AI Overview.
              </p>
              <a
                href="/free-audit"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-purple-600 text-white font-semibold text-lg rounded-full hover:bg-purple-700 transition-colors duration-300"
              >
                <TrendingUp className="w-5 h-5" />
                <span>Get Free AI Search Optimization Consultation</span>
              </a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
