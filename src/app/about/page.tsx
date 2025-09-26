import type { Metadata } from 'next';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';
import AboutHeroSection from '@/components/sections/AboutHeroSection';
import MissionSection from '@/components/sections/MissionSection';
import CoreValuesSection from '@/components/sections/CoreValuesSection';
import LocationReachSection from '@/components/sections/LocationReachSection';

export const metadata: Metadata = {
  title: 'About True Rank Digital - AI-Enhanced Digital Marketing Experts',
  description: 'Meet the True Rank Digital team. We are digital marketing experts dedicated to helping businesses thrive through enterprise-level AI solutions and proprietary technology.',
  keywords: 'about true rank digital, digital marketing team, AI SEO experts, New Jersey digital marketing, enterprise solutions',
  openGraph: {
    title: 'About True Rank Digital - AI-Enhanced Digital Marketing Experts',
    description: 'Meet our team of digital marketing experts dedicated to helping businesses thrive through enterprise-level AI solutions.',
    url: 'https://truerankdigital.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* About Hero Section */}
      <AboutHeroSection />
      
      {/* Mission Section */}
      <MissionSection />
      
      {/* Core Values Section */}
      <CoreValuesSection />
      
      {/* Location & Reach Section */}
      <LocationReachSection />
    
      {/* Comprehensive Schema Markup */}
      <ComprehensiveSchema
        type="about"
        pageData={{
          title: "About True Rank Digital - Professional SEO & Digital Marketing Experts",
          description: "Learn about True Rank Digital's mission, values, and expert team providing professional SEO and digital marketing services with custom proprietary technology solutions.",
          url: "https://truerankdigital.com/about",
          keywords: ["True Rank Digital", "about us", "SEO experts", "digital marketing team", "company mission", "professional services", "proprietary technology"],
          category: "Company Information"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "About", url: "https://truerankdigital.com/about" }
        ]}
      />
    </div>
  );
}
