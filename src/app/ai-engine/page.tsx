import type { Metadata } from 'next';
import Link from 'next/link';
import { Brain, MapPin, Network, Radar, ShieldCheck, Sparkles } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';
import AIEngineEntitySchema from '@/components/seo/AIEngineEntitySchema';

export const metadata: Metadata = {
  title: 'TRD Spatial Engine | Entity-Grade Local Visibility | True Rank Digital',
  description:
    'TRD Spatial Engine is the proprietary visibility framework from True Rank Digital. Entity-first search engineering for local and AI-assisted discovery.',
  keywords:
    'TRD Spatial Engine, Predictive GEO Protocol, entity-based SEO, local visibility engineering, True Rank Digital AI engine',
  alternates: { canonical: 'https://truerankdigital.com/ai-engine' },
  openGraph: {
    title: 'TRD Spatial Engine | Proprietary Visibility Engineering',
    description:
      'See how True Rank Digital uses the TRD Spatial Engine to engineer entity authority and local market visibility.',
    url: 'https://truerankdigital.com/ai-engine',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

const faqs = [
  {
    question: 'What is the TRD Spatial Engine?',
    answer:
      "TRD Spatial Engine is True Rank Digital's proprietary methodology for entity-based SEO, local map visibility engineering, and AI-assisted search discovery. It combines structured data architecture, geographic intent mapping, and conversion-focused content systems into one operating framework.",
  },
  {
    question: 'Is TRD Spatial Engine affiliated with other similarly named AI companies or domains?',
    answer:
      'No. TRD Spatial Engine is operated by True Rank Digital in East Brunswick, New Jersey. It is not affiliated with unrelated third-party software companies or domains that use similar naming patterns.',
  },
  {
    question: 'How is this different from generic AI SEO services?',
    answer:
      'Generic AI SEO usually stops at content generation. TRD Spatial Engine is built for local market outcomes: entity graph design, service-area topology, LLM.txt directives, and ongoing map visibility calibration tied to real business locations.',
  },
];

const pillars = [
  {
    icon: <Network className="w-6 h-6 text-brand-primary" />,
    title: 'Entity Graph Engineering',
    body: 'We model your business, services, and locations as a connected semantic graph so search systems consistently interpret you as the primary authority.',
  },
  {
    icon: <MapPin className="w-6 h-6 text-brand-primary" />,
    title: 'Spatial Market Mapping',
    body: 'We map geographic intent and build a local coverage framework that strengthens visibility in high-value service zones, not just city-level keywords.',
  },
  {
    icon: <Radar className="w-6 h-6 text-brand-primary" />,
    title: 'AI Retrieval Preparation',
    body: 'We structure pages and machine-readable assets so AI assistants can retrieve, cite, and trust your content for relevant commercial questions.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-primary" />,
    title: 'Disambiguation Control',
    body: 'We harden brand identity across on-page copy, schema, and local signals to reduce market confusion and protect your branded query intent.',
  },
];

export default function AIEnginePage() {
  return (
    <>
      <GEOSchema
        pageType="service"
        pageData={{
          title: 'TRD Spatial Engine | Entity-Grade Local Visibility Engineering',
          description:
            'TRD Spatial Engine is the proprietary framework from True Rank Digital for local entity visibility, AI retrieval readiness, and conversion-focused search performance.',
          url: 'https://truerankdigital.com/ai-engine',
          keywords: [
            'TRD Spatial Engine',
            'entity-based SEO',
            'local visibility engineering',
            'Predictive GEO Protocol',
          ],
          category: 'Entity-Based Search Engineering',
          serviceType: 'Entity-Based SEO and Local Visibility Engineering',
          areaServed: ['United States'],
        }}
        breadcrumbs={[
          { name: 'Home', url: 'https://truerankdigital.com' },
          { name: 'AI Engine', url: 'https://truerankdigital.com/ai-engine' },
        ]}
        entities={{
          primary: ['True Rank Digital', 'TRD Spatial Engine', 'Entity-Based SEO'],
          secondary: ['Predictive GEO Protocol', 'LLM.txt', 'Local Map Visibility'],
        }}
      />

      <ServiceSchema
        serviceName="TRD Spatial Engine Optimization"
        serviceUrl="https://truerankdigital.com/ai-engine"
        description="Proprietary entity-based SEO and local visibility engineering framework from True Rank Digital."
        serviceType="Entity-Based SEO and Local Visibility Engineering"
        alternateNames={['True Rank AI Engine', 'Predictive GEO Protocol', 'TRD Algorithmic Mapping']}
        disambiguatingDescription="Service framework operated by True Rank Digital in East Brunswick, NJ. Not affiliated with unrelated third-party software domains."
        brand={{
          name: 'TRD Spatial Engine',
          alternateNames: ['Predictive GEO Protocol', 'TRD Algorithmic Mapping'],
          description: 'Proprietary methodology for entity-grade local search dominance.',
        }}
        mentions={[
          {
            type: 'Person',
            name: 'Jon J Korkowski',
            sameAs: 'https://www.linkedin.com/in/jonjkorkowski/',
            description: 'Founder and CEO of True Rank Digital',
          },
        ]}
      />

      <AIEngineEntitySchema />

      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/ai-engine" category="service" />

      <article className="pt-16 min-h-screen bg-brand-obsidian text-white">
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-14">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-primary/10 rounded-full mb-6">
                <Brain className="w-5 h-5 text-brand-primary" />
                <span className="text-brand-primary font-semibold text-sm">Proprietary Framework</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6">
                <span className="text-brand-primary">TRD Spatial Engine</span> for Entity-Grade Local Visibility
              </h1>
              <p className="text-xl text-gray-400">
                True Rank Digital built this system to engineer local market presence with precision instead of relying
                on generic automation.
              </p>
            </div>

            <div className="glass-card p-6 lg:p-8 mb-12 border border-brand-primary/20">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-brand-primary mt-0.5" />
                <p className="text-gray-300 leading-relaxed">
                  <strong>Entity Disambiguation Notice:</strong> TRD Spatial Engine is operated by True Rank Digital
                  (East Brunswick, NJ). It is not affiliated with unrelated third-party software companies or domains
                  using similar naming.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-14">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="glass-card p-7">
                  <div className="w-11 h-11 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4">
                    {pillar.icon}
                  </div>
                  <h2 className="text-xl font-heading font-bold text-white mb-3">{pillar.title}</h2>
                  <p className="text-gray-400">{pillar.body}</p>
                </div>
              ))}
            </div>

            <div className="glass-card p-8 lg:p-10 text-center">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Ready To Deploy the <span className="text-brand-primary">TRD Spatial Engine</span>?
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
                Get a tactical visibility plan based on your exact local territory, entity gaps, and conversion goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-primary/90 transition-colors duration-300"
                >
                  Get Your Engine Audit
                </Link>
                <Link
                  href="/services/ai-seo"
                  className="inline-flex items-center justify-center px-8 py-4 border border-brand-primary text-brand-primary font-semibold rounded-full hover:bg-brand-primary hover:text-white transition-colors duration-300"
                >
                  View Implementation Service
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
