import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import LawyersSection from '@/components/sections/LawyersSection';
import AIServicesSection from '@/components/sections/AIServicesSection';
import TraditionalServicesSection from '@/components/sections/TraditionalServicesSection';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import CTASection from '@/components/sections/CTASection';
import StarterPackBanner from '@/components/sections/StarterPackBanner';
import HomepageSchema from '@/components/seo/HomepageSchema';
import GoogleMapComponent from '@/components/sections/GoogleMap';
import ContactFormSection from '@/components/sections/ContactFormSection';

// GEO-Optimized Metadata for Homepage
export const metadata: Metadata = {
  title: 'True Rank Digital | Google Business Optimization & Local Pack Domination',
  description: 'True Rank Digital delivers Google Business Optimization services with proprietary dashboard platform, grid map ranking analysis, and local pack domination strategies for businesses in East Brunswick, NJ and nationwide.',
  keywords: 'True Rank Digital, Google Business Optimization, East Brunswick, local pack domination, Google Business Profile, digital marketing, hyperlocal marketing, advertising agency, marketing agency, website design',
  authors: [{ name: 'True Rank Digital', url: 'https://truerankdigital.com' }],
  creator: 'True Rank Digital',
  publisher: 'True Rank Digital',
  openGraph: {
    title: 'True Rank Digital - Google Business Optimization & Local Pack Domination',
    description: 'Get your business found on Google with True Rank Digital\'s proprietary Google Business Optimization platform, grid map ranking analysis, and local pack domination strategies.',
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
    title: 'True Rank Digital - Google Business Optimization',
    description: 'Proprietary Google Business Optimization platform with grid map ranking and local pack domination',
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
    question: "What makes True Rank Digital different from other marketing agencies?",
    answer: "True Rank Digital builds custom software solutions in-house including proprietary Google Business Optimization technology, local pack domination strategies, and problem detection systems. Our clients gain access to an exclusive dashboard platform featuring grid map ranking verification, competitor analysis tools, and automated Google knowledge graph consistency monitoring that other agencies simply cannot provide."
  },
  {
    question: "What is Google Business Optimization and why does my business need it?",
    answer: "Google Business Optimization is True Rank Digital's comprehensive approach to dominating Google's local pack, Google Maps, and Google Business Profile listings. Our proprietary strategies help businesses appear in the top 3 local results when customers search, leading to increased visibility, more clicks, and enhanced presence in AI-powered search results from ChatGPT, Perplexity, and Google's AI Overview."
  },
  {
    question: "How long does it take to see results with True Rank Digital?",
    answer: "True Rank Digital clients typically see initial improvements in local pack rankings within 30-60 days, with significant local pack domination appearing within 3-6 months. Every client receives access to our proprietary dashboard platform for real-time tracking of grid map rankings, local pack positions, competitor analysis, and Google Business Profile performance metrics."
  },
  {
    question: "Does True Rank Digital work with businesses outside of New Jersey?",
    answer: "Yes, True Rank Digital provides Google Business Optimization services to businesses throughout the United States. While headquartered in East Brunswick, NJ, our proprietary dashboard platform and local pack domination tools work for businesses in any location. We specialize in hyperlocal marketing, multi-location business strategies, and digital marketing services nationwide."
  },
  {
    question: "What is local pack domination?",
    answer: "Local pack domination is True Rank Digital's strategy for consistently appearing in Google's top 3 local results (the local pack) that appears above organic search results. Our proprietary grid map ranking system tracks your position across multiple geographic locations, and our optimization strategies ensure maximum visibility in the local pack for your target service areas."
  },
  {
    question: "How much do True Rank Digital's Google Business Optimization services cost?",
    answer: "True Rank Digital offers custom pricing based on your business needs, market competition, and optimization goals. Services include Google Business Profile management, local pack domination, hyperlocal marketing, custom website development with proprietary script integration, and ongoing dashboard platform access. Contact us at (732) 475-0139 for a free consultation and personalized quote."
  }
];

export default function Home() {
  return (
    <>
      {/* Consolidated Homepage Schema - All entities in one @graph for maximum detection */}
      <HomepageSchema faqs={homepageFAQs} />
      
      <article className="pt-16">
        {/* Promotional Banner */}
        <StarterPackBanner />
        
        {/* Hero Section */}
        <section>
          <HeroSection />
        </section>
        
        {/* Lawyers Section */}
        <section>
          <LawyersSection />
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

        {/* Lead Capture Form */}
        <section>
          <ContactFormSection 
            title="Get Found on Google Local Pack"
            description="Enter your details below to receive a custom local domination strategy for your business."
          />
        </section>
        
        {/* Final CTA Section */}
        <section>
          <CTASection />
        </section>

        {/* Service Locations Map */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-4">
                Serving <span className="text-brand-primary">Middlesex County</span> & Beyond
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Based in East Brunswick, we provide SEO services to businesses throughout New Jersey and nationwide
              </p>
            </div>
            <GoogleMapComponent
              locations={[
                {
                  lat: 40.428100,
                  lng: -74.415700,
                  name: 'True Rank Digital - Headquarters',
                  address: '288 Summerhill Rd, suite 3, East Brunswick, NJ 08816',
                },
                {
                  lat: 40.518700,
                  lng: -74.412100,
                  name: 'Edison, NJ',
                  address: 'Edison, New Jersey',
                },
                {
                  lat: 40.486200,
                  lng: -74.451800,
                  name: 'New Brunswick, NJ',
                  address: 'New Brunswick, New Jersey',
                },
                {
                  lat: 40.451700,
                  lng: -74.479400,
                  name: 'North Brunswick, NJ',
                  address: 'North Brunswick, New Jersey',
                },
                {
                  lat: 40.459500,
                  lng: -74.361000,
                  name: 'Sayreville, NJ',
                  address: 'Sayreville, New Jersey',
                },
                {
                  lat: 40.446200,
                  lng: -74.386000,
                  name: 'South River, NJ',
                  address: 'South River, New Jersey',
                },
              ]}
              height="500px"
            />
          </div>
        </section>
      </article>
    </>
  );
}
