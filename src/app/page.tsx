import HeroSection from '@/components/sections/HeroSection';
import AIServicesSection from '@/components/sections/AIServicesSection';
import TraditionalServicesSection from '@/components/sections/TraditionalServicesSection';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="pt-20">
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
  );
}
