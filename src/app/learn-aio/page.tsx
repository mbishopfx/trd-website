import type { Metadata } from 'next';
import AIOHeroSection from '@/components/sections/AIOHeroSection';
import AIOFeaturesSection from '@/components/sections/AIOFeaturesSection';
import AIOTechnologySection from '@/components/sections/AIOTechnologySection';
import AIOResultsSection from '@/components/sections/AIOResultsSection';

export const metadata: Metadata = {
  title: 'Learn About AIO - AI-Optimized SEO Technology | True Rank Digital',
  description: 'Discover True Rank Digital\'s revolutionary AIO (AI-Optimized) technology. Advanced semantic optimization, machine learning, and proprietary algorithms for superior SEO results.',
  keywords: 'AIO technology, AI-optimized SEO, artificial intelligence marketing, semantic optimization, machine learning SEO, True Rank Digital AI',
  openGraph: {
    title: 'Learn About AIO - Revolutionary AI-Optimized SEO Technology',
    description: 'Discover how True Rank Digital\'s AIO technology uses advanced AI to deliver unprecedented SEO results.',
    url: 'https://truerankdigital.com/learn-aio',
    type: 'website',
  },
};

export default function LearnAIOPage() {
  return (
    <div className="pt-16">
      {/* AIO Hero Section */}
      <AIOHeroSection />
      
      {/* AIO Features Section */}
      <AIOFeaturesSection />
      
      {/* AIO Technology Section */}
      <AIOTechnologySection />
      
      {/* AIO Results Section */}
      <AIOResultsSection />
    </div>
  );
}
