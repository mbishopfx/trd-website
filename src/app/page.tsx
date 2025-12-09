import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import AIServicesSection from '@/components/sections/AIServicesSection';
import TraditionalServicesSection from '@/components/sections/TraditionalServicesSection';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import CTASection from '@/components/sections/CTASection';
import StarterPackBanner from '@/components/sections/StarterPackBanner';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

// GEO-Optimized Metadata for Homepage
export const metadata: Metadata = {
  title: 'True Rank Digital | Professional SEO Services in East Brunswick, NJ',
  description: 'True Rank Digital delivers professional SEO services with proprietary dashboard platform, grid map ranking analysis, and custom algorithm adaptation scripts for businesses in East Brunswick, NJ.',
  keywords: 'True Rank Digital, SEO services, East Brunswick SEO, professional SEO, local SEO, Google Business Profile, schema markup, LLM.txt optimization, digital marketing, SEO company New Jersey',
  authors: [{ name: 'True Rank Digital', url: 'https://truerankdigital.com' }],
  creator: 'True Rank Digital',
  publisher: 'True Rank Digital',
  openGraph: {
    title: 'True Rank Digital - Professional SEO Services That Get Results',
    description: 'Get your business found on Google with True Rank Digital\'s proprietary SEO platform, grid map ranking analysis, and custom optimization scripts.',
    url: 'https://truerankdigital.com',
    siteName: 'True Rank Digital',
    type: 'website',
    locale: 'en_US',
    images: [{
      url: 'https://truerankdigital.com/images/logos/trdlogoblue.webp',
      width: 1200,
      height: 630,
      alt: 'True Rank Digital - Professional SEO Company',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'True Rank Digital - Professional SEO Services',
    description: 'Proprietary SEO platform with grid map ranking and algorithm adaptation',
    images: ['https://truerankdigital.com/images/logos/trdlogoblue.webp'],
    creator: '@truerankdigital',
  },
  alternates: {
    canonical: 'https://truerankdigital.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Homepage FAQs for GEO
const homepageFAQs = [
  {
    question: "What makes True Rank Digital different from other SEO companies?",
    answer: "True Rank Digital builds custom software solutions in-house including proprietary schema markup engineering, LLM.txt optimization files, and problem detection systems. Our clients gain access to an exclusive dashboard platform featuring grid map ranking verification, competitor analysis tools, and automated Google knowledge graph consistency monitoring that other SEO agencies simply cannot provide."
  },
  {
    question: "What is schema markup engineering and why does my business need it?",
    answer: "Schema markup engineering is True Rank Digital's process of creating custom structured data schemas specifically for each business type. Hand-crafted schema markup helps search engines understand your content better than any competitor, leading to improved search visibility, rich snippets, and enhanced presence in AI-powered search results from ChatGPT, Perplexity, and Google's AI Overview."
  },
  {
    question: "How long does it take to see SEO results with True Rank Digital?",
    answer: "True Rank Digital clients typically see initial improvements in search rankings within 30-60 days, with significant results appearing within 3-6 months. Every client receives access to our proprietary dashboard platform for real-time tracking of grid map rankings, keyword positions, competitor analysis, and Google Business Profile performance metrics."
  },
  {
    question: "Does True Rank Digital work with businesses outside of New Jersey?",
    answer: "Yes, True Rank Digital provides SEO services to businesses throughout the United States. While headquartered in East Brunswick, NJ, our proprietary dashboard platform and custom optimization tools work for businesses in any location. We specialize in local SEO, e-commerce optimization, enterprise SEO, and multi-location business strategies nationwide."
  },
  {
    question: "What is LLM.txt and how does it help my SEO?",
    answer: "LLM.txt is a specialized file that True Rank Digital creates to optimize your content for AI search engines like ChatGPT, Claude, Perplexity, and Google's AI Overview. This cutting-edge optimization gives businesses a competitive advantage in AI-powered search results by providing structured information that AI systems prefer, increasing the likelihood of being cited as a source."
  },
  {
    question: "How much do True Rank Digital's SEO services cost?",
    answer: "True Rank Digital offers custom pricing based on your business needs, market competition, and optimization goals. Services include local SEO, Google Business Profile management, custom website development with proprietary script integration, algorithm adaptation tools, and ongoing dashboard platform access. Contact us at (732) 475-0139 for a free consultation and personalized quote."
  }
];

export default function Home() {
  return (
    <>
      {/* Advanced GEO Schema Markup for Homepage */}
      <GEOSchema 
        pageType="service"
        pageData={{
          title: "True Rank Digital - Professional SEO Services",
          description: "True Rank Digital delivers professional SEO services with proprietary dashboard platform, grid map ranking analysis, custom algorithm adaptation scripts, and in-house technology solutions for businesses nationwide.",
          url: "https://truerankdigital.com",
          keywords: ["SEO services", "local SEO", "Google Business Profile", "schema markup engineering", "LLM.txt optimization", "digital marketing", "East Brunswick NJ"],
          category: "Professional SEO Services",
          image: "https://truerankdigital.com/images/logos/trdlogoblue.webp",
          serviceType: "Search Engine Optimization",
          areaServed: ["United States", "New Jersey", "New York", "Pennsylvania"],
          contentSections: [
            {
              heading: "Proprietary SEO Dashboard Platform",
              text: "Access our exclusive client dashboard platform featuring advanced grid map ranking verification, comprehensive keyword search volume analysis tools, and real-time competitor intelligence monitoring for superior local search engine optimization."
            },
            {
              heading: "Custom Algorithm Adaptation Scripts",
              text: "Our expert-developed custom scripts and solution building frameworks keep you ahead of Google algorithm changes with proven digital marketing tactics, especially when combined with our custom web builds for enhanced optimization capabilities."
            },
            {
              heading: "Schema Markup Engineering",
              text: "Hand-crafted structured data schemas specifically designed for your business type help search engines understand your content better than competitors, leading to improved visibility and rich search results."
            },
            {
              heading: "LLM.txt Creation & Optimization",
              text: "We develop and optimize LLM.txt files designed for AI search engines like ChatGPT, Claude, and Perplexity to improve your AI search visibility and give you a competitive advantage in AI-powered search results."
            }
          ]
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" }
        ]}
        entities={{
          primary: ["True Rank Digital", "SEO Services", "East Brunswick NJ"],
          secondary: ["Local SEO", "Google Business Profile", "Schema Markup", "Digital Marketing"],
          mentions: [
            { type: "SoftwareApplication", id: "https://truerankdigital.com/#custom-seo-software", name: "Proprietary SEO Dashboard Platform" },
            { type: "Service", id: "https://truerankdigital.com/services/local-seo", name: "Local SEO Services" },
            { type: "Service", id: "https://truerankdigital.com/services/ai-seo", name: "AI SEO Optimization" }
          ]
        }}
      />
      
      {/* FAQ Schema for Homepage */}
      <FAQSchema 
        faqs={homepageFAQs}
        pageUrl="https://truerankdigital.com"
        category="general"
      />
      
      {/* LocalBusiness Schema */}
      <LocalBusinessSchema />
      
      <article className="pt-16">
        {/* Promotional Banner */}
        <StarterPackBanner />
        
        {/* Hero Section */}
        <section>
          <HeroSection />
        </section>
        
        {/* AI Services Section */}
        <section>
          <AIServicesSection />
        </section>
        
        {/* Traditional Services Section */}
        <section>
          <TraditionalServicesSection />
        </section>
        
        {/* Testimonials Carousel */}
        <section>
          <TestimonialsCarousel />
        </section>
        
        {/* Final CTA Section */}
        <section>
          <CTASection />
        </section>
      </article>
    </>
  );
}
