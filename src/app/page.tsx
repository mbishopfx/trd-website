import HeroSection from '@/components/sections/HeroSection';
import AIServicesSection from '@/components/sections/AIServicesSection';
import TraditionalServicesSection from '@/components/sections/TraditionalServicesSection';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import CTASection from '@/components/sections/CTASection';
import StarterPackBanner from '@/components/sections/StarterPackBanner';
import PageSpecificSchema from '@/components/seo/PageSpecificSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

export default function Home() {
  return (
    <>
      {/* Enhanced Schema Markup for Homepage */}
      <PageSpecificSchema 
        pageType="homepage"
        pageTitle="True Rank Digital - Professional SEO & Digital Marketing Services"
        pageDescription="Get your business found on Google with custom SEO software, schema markup engineering, and LLM.txt optimization services."
      />
      <LocalBusinessSchema />
      
      <div className="pt-16">
        {/* Promotional Banner */}
        <StarterPackBanner />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* AI Services Section */}
        <AIServicesSection />
        
        {/* Traditional Services Section */}
        <TraditionalServicesSection />
        
        {/* Testimonials Carousel */}
        <TestimonialsCarousel />
        
        {/* Final CTA Section */}
        <CTASection />
      </div>
    </>
  );
}
