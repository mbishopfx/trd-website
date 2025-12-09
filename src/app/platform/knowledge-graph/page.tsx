import type { Metadata } from 'next';
import { Network, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Knowledge Graph Optimization Tool | Entity Recognition | True Rank Digital',
  description: 'True Rank Digital provides knowledge graph optimization tool with entity recognition, consistency monitoring, and Google Knowledge Panel optimization.',
  keywords: 'knowledge graph, entity optimization, True Rank Digital, Google Knowledge Panel, entity recognition, knowledge graph SEO',
  alternates: { canonical: 'https://truerankdigital.com/platform/knowledge-graph' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function KnowledgeGraphPage() {
  const faqs = [{ question: "What is knowledge graph optimization?", answer: "Knowledge graph optimization helps Google understand your business as a distinct entity and create a Knowledge Panel for your brand. True Rank Digital's knowledge graph tool monitors entity consistency across the web, optimizes structured data for entity recognition, tracks Knowledge Panel appearance, and ensures your business information is accurately represented in Google's Knowledge Graph." }];

  return (
    <>
      <GEOSchema pageType="software" pageData={{ title: "Knowledge Graph Optimization Tool with Entity Recognition", description: "True Rank Digital provides knowledge graph optimization with entity monitoring.", url: "https://truerankdigital.com/platform/knowledge-graph", keywords: ["knowledge graph", "entity optimization"], category: "SEO Software", applicationCategory: "BusinessApplication", operatingSystem: "Web-based", featureList: ["Entity recognition", "Consistency monitoring", "Knowledge Panel tracking", "Schema optimization"] }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Platform", url: "https://truerankdigital.com/platform" }, { name: "Knowledge Graph", url: "https://truerankdigital.com/platform/knowledge-graph" }]} entities={{ primary: ["True Rank Digital", "Knowledge Graph", "Entity Optimization"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/platform/knowledge-graph" category="service" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-purple-50 to-white"><section className="py-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6"><strong className="text-brand-primary">Knowledge Graph</strong> Optimization Tool with Entity Recognition</h1><p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12"><strong>True Rank Digital</strong> provides a <strong>knowledge graph optimization tool</strong> with entity recognition, consistency monitoring, and Google Knowledge Panel optimization.</p><h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">How <strong className="text-brand-primary">Knowledge Graph</strong> Optimization Works</h2><div className="glass-card p-8"><div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><Network className="w-10 h-10 text-white" /></div><h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Optimize Your <strong className="text-brand-primary">Knowledge</strong> Graph</h2><a href="/contact" className="inline-flex items-center space-x-2 px-8 py-4 bg-purple-600 text-white font-semibold text-lg rounded-full hover:bg-purple-700 transition-colors duration-300"><TrendingUp className="w-5 h-5" /><span>Get Graph Optimization</span></a></div></div></section></article>
    </>
  );
}
