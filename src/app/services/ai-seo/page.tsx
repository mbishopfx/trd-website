import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Brain,
  Bot,
  FileSearch,
  Network,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema, { generateServiceFAQs } from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'AI Search Optimization Services | True Rank Digital',
  description:
    'AI Search Optimization services from True Rank Digital: entity architecture, structured data, LLM-ready content systems, and technical fixes that improve discoverability across answer engines.',
  keywords:
    'AI search optimization, AI SEO, answer engine optimization, entity SEO, structured data, LLM optimization, ChatGPT visibility, Perplexity visibility',
  openGraph: {
    title: 'AI Search Optimization Services | True Rank Digital',
    description:
      'Strengthen AI-era visibility with entity mapping, schema architecture, and machine-readable content systems from True Rank Digital.',
    url: 'https://truerankdigital.com/services/ai-seo',
    type: 'website',
  },
  alternates: {
    canonical: 'https://truerankdigital.com/services/ai-seo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const deliveryAreas = [
  {
    icon: <Network className="w-6 h-6" />,
    title: 'Entity Architecture',
    description:
      'We map your services, locations, and brand relationships so answer engines can identify your business as the authoritative source.',
    bullets: [
      'Service-to-location signal alignment',
      'Entity consistency across key pages',
      'Brand disambiguation for high-intent queries',
    ],
  },
  {
    icon: <FileSearch className="w-6 h-6" />,
    title: 'Schema & Structured Data',
    description:
      'We implement structured data frameworks that improve how crawlers and AI systems parse and cite your business content.',
    bullets: [
      'Organization, Service, FAQ, and Local schema coverage',
      'Schema validation and error remediation',
      'Priority implementation roadmap for high-impact pages',
    ],
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: 'AI Retrieval Readiness',
    description:
      'We shape your core pages so AI systems can consume, summarize, and reference your business accurately.',
    bullets: [
      'LLM-friendly content structure and formatting',
      'Internal linking and crawl-flow cleanup',
      'Page-level clarity improvements for answer extraction',
    ],
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Technical Foundations',
    description:
      'We remove blockers that suppress visibility and trust signals across both traditional and AI-assisted discovery.',
    bullets: [
      'Robots and indexability diagnostics',
      'Thin/duplicate content and intent mismatch cleanup',
      'Core trust signal reinforcement for conversion pages',
    ],
  },
];

const process = [
  {
    step: '01',
    title: 'Baseline Audit',
    text: 'We identify where your current site structure fails to communicate authority to search engines and AI systems.',
  },
  {
    step: '02',
    title: 'Signal Architecture',
    text: 'We redesign content, schema, and entity relationships so your service footprint is unambiguous and machine-readable.',
  },
  {
    step: '03',
    title: 'Implementation',
    text: 'We deploy prioritized technical and content fixes with execution-ready recommendations your team can run immediately.',
  },
  {
    step: '04',
    title: 'Visibility Iteration',
    text: 'We track outcomes, close remaining gaps, and continuously adapt as answer engine behavior evolves.',
  },
];

export default function AISEOPage() {
  const faqs = generateServiceFAQs('aiSEO', [
    {
      question: 'What does AI Search Optimization include?',
      answer:
        'AI Search Optimization includes entity mapping, structured data implementation, AI-readable page architecture, and technical remediation to improve discoverability in answer engines and modern search experiences.',
    },
    {
      question: 'Which platforms does this support?',
      answer:
        'This work supports discoverability across major AI-assisted and traditional search surfaces, including ChatGPT-driven browsing workflows, Perplexity, Google AI experiences, and standard organic search.',
    },
    {
      question: 'How is this different from standard SEO?',
      answer:
        'Standard SEO often emphasizes rankings only. AI Search Optimization also prioritizes entity clarity, machine readability, and citation readiness so your business is selected as a source in generated answers.',
    },
    {
      question: 'Who is this service best for?',
      answer:
        'This is best for businesses with strong offerings but fragmented site structure, weak schema, or inconsistent service and location signals that limit qualified visibility.',
    },
  ]);

  return (
    <>
      <GEOSchema
        pageType="service"
        pageData={{
          title: 'AI Search Optimization Services',
          description:
            'True Rank Digital delivers AI Search Optimization through entity mapping, schema architecture, technical SEO alignment, and LLM-ready content systems.',
          url: 'https://truerankdigital.com/services/ai-seo',
          keywords: ['AI Search Optimization', 'Entity SEO', 'Answer Engine Optimization', 'Structured Data'],
          category: 'AI Search Optimization Services',
          serviceType: 'AI Search Optimization',
          areaServed: ['United States'],
        }}
        breadcrumbs={[
          { name: 'Home', url: 'https://truerankdigital.com' },
          { name: 'Services', url: 'https://truerankdigital.com/services' },
          { name: 'AI Search Optimization', url: 'https://truerankdigital.com/services/ai-seo' },
        ]}
        entities={{
          primary: ['True Rank Digital', 'AI Search Optimization', 'Entity SEO'],
          secondary: ['Structured Data', 'Answer Engine Visibility', 'Technical SEO'],
        }}
      />

      <ServiceSchema
        serviceName="AI Search Optimization"
        serviceUrl="https://truerankdigital.com/services/ai-seo"
        description="AI Search Optimization service by True Rank Digital focused on entity architecture, schema implementation, technical SEO cleanup, and machine-readable content systems."
        serviceType="AI Search Optimization"
        alternateNames={['Answer Engine Optimization', 'AI Search Readiness']}
        disambiguatingDescription="Provided by True Rank Digital in East Brunswick, NJ. Not affiliated with unrelated third-party software entities."
        brand={{
          name: 'True Rank Digital AI Search Framework',
          alternateNames: ['AI Search Readiness System', 'TRD Entity Signal Framework'],
          description: 'Proprietary AI search visibility methodology by True Rank Digital.',
        }}
      />

      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/services/ai-seo" category="service" />

      <article className="pt-16 min-h-screen bg-brand-obsidian text-white">
        <section className="py-16 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 rounded-full mb-6 border border-cyan-400/30">
                  <Brain className="w-5 h-5 text-cyan-300" />
                  <span className="text-cyan-300 font-semibold text-sm">AI Search Optimization</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                  Build Authority Signals That <span className="text-brand-primary">AI Systems Can Trust</span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  We engineer the technical and content foundation that helps your brand surface in modern
                  answer-driven discovery, not just classic rankings.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-cyan-500 text-black font-semibold text-lg rounded-full hover:bg-cyan-400 transition-colors duration-300"
                  >
                    <TrendingUp className="w-5 h-5" />
                    <span>Get Your Platform Audit</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 border border-white/20 text-white font-semibold text-lg rounded-full hover:bg-white/5 transition-colors duration-300"
                  >
                    <span>Talk to the Team</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-6">What This Service Solves</h2>
                <ul className="space-y-4">
                  {[
                    'Low visibility in high-intent AI and search discovery paths',
                    'Fragmented entity signals across your service pages',
                    'Missing or weak schema support for key business information',
                    'Technical blockers that prevent clear crawl and indexing behavior',
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-10 text-center">
              Core Delivery Areas
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {deliveryAreas.map((area) => (
                <div key={area.title} className="glass-card p-8">
                  <div className="text-cyan-300 mb-4">{area.icon}</div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-3">{area.title}</h3>
                  <p className="text-gray-400 mb-5">{area.description}</p>
                  <ul className="space-y-2">
                    {area.bullets.map((bullet) => (
                      <li key={bullet} className="text-gray-300 text-sm flex items-start space-x-2">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-y border-white/5 bg-white/2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-10 text-center">
              Implementation Model
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {process.map((item) => (
                <div key={item.step} className="glass-card p-6">
                  <div className="text-cyan-300 font-bold text-sm mb-2">STEP {item.step}</div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Need Stronger Visibility Across Search and AI?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              We will show you the exact entity, schema, and technical priorities to execute first.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-10 py-4 bg-cyan-500 text-black font-semibold text-lg rounded-full hover:bg-cyan-400 transition-colors duration-300"
            >
              <span>Get Your Platform Audit</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
