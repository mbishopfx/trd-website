import type { Metadata } from 'next';
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
    </div>
  );
}
