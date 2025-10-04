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
    
      {/* Enhanced Schema Markup for About Page */}
      <ComprehensiveSchema
        type="article"
        pageData={{
          title: "About True Rank Digital - Professional SEO & Digital Marketing Experts",
          description: "Learn about True Rank Digital's mission, values, and expert team providing professional SEO and digital marketing services with custom proprietary technology solutions.",
          url: "https://truerankdigital.com/about",
          keywords: ["True Rank Digital", "about us", "SEO experts", "digital marketing team", "company mission", "professional services", "proprietary technology", "Jon Korkowski", "Jesse Mathews", "Jose Perdomo"],
          category: "Company Information",
          datePublished: "2024-01-01",
          dateModified: new Date().toISOString().split('T')[0],
          contentSections: [
            {
              heading: "Our Mission",
              text: "True Rank Digital is dedicated to helping businesses succeed through innovative SEO and digital marketing solutions. We build custom technology that gives our clients a competitive advantage in search rankings."
            },
            {
              heading: "Our Team",
              text: "Led by industry experts including Jon Korkowski, Jesse Mathews, and Jose Perdomo, our team combines deep technical knowledge with proven marketing strategies to deliver exceptional results."
            },
            {
              heading: "Our Technology",
              text: "We develop proprietary software solutions including custom schema markup engineering, LLM.txt optimization, and advanced problem detection systems that competitors simply don't offer."
            }
          ]
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "About", url: "https://truerankdigital.com/about" }
        ]}
      />
    </div>
  );
}
