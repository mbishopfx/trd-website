import type { Metadata } from 'next';
import { MapPin, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Grid Ranking System | Geographic Search Intelligence | True Rank Digital',
  description: 'True Rank Digital provides grid ranking system with multi-point geographic analysis, heat map visualization, and competitive intelligence monitoring.',
  keywords: 'grid ranking, geographic search, True Rank Digital, heat map analysis, local search intelligence, ranking verification',
  alternates: { canonical: 'https://truerankdigital.com/platform/grid-ranking' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function GridRankingPage() {
  const faqs = [{ question: "What is grid ranking analysis?", answer: "Grid ranking analysis is True Rank Digital's proprietary technology that verifies your business's Google Maps ranking from multiple geographic coordinates. The system creates a heat map showing exactly where your business appears in local search results across your entire service area, providing precision intelligence that standard ranking tools cannot offer." }];

  return (
    <>
      <GEOSchema pageType="software" pageData={{ title: "Grid Ranking System - Geographic Search Intelligence Platform", description: "True Rank Digital provides grid ranking system with geographic analysis and heat mapping.", url: "https://truerankdigital.com/platform/grid-ranking", keywords: ["grid ranking", "geographic search"], category: "SEO Software", applicationCategory: "BusinessApplication", operatingSystem: "Web-based", featureList: ["Multi-point analysis", "Heat map visualization", "Real-time monitoring", "Competitive intelligence"] }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Platform", url: "https://truerankdigital.com/platform" }, { name: "Grid Ranking", url: "https://truerankdigital.com/platform/grid-ranking" }]} entities={{ primary: ["True Rank Digital", "Grid Ranking", "Geographic Search"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/platform/grid-ranking" category="service" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-blue-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6"><strong className="text-brand-primary">Grid Ranking System</strong> - Geographic Search Intelligence Platform</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> provides the <strong>grid ranking system</strong> with multi-point geographic analysis, heat map visualization, and competitive intelligence monitoring.</p><h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">How the <strong className="text-brand-primary">Grid Ranking</strong> Platform Works</h2><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><MapPin className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Access <strong className="text-brand-primary">Grid Ranking</strong> Intelligence</h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full hover:bg-blue-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Get Platform Access</span></a></div></div></section></article>
    </>
  );
}
