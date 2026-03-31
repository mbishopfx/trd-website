import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  Search,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  FileSearch,
  Bot,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema, { generateServiceFAQs } from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'Local SEO Services | True Rank Digital',
  description:
    'Local SEO services from True Rank Digital to improve map visibility, local rankings, and qualified lead flow with AI-ready content and technical signals.',
  keywords:
    'local SEO services, Google Maps SEO, local search optimization, service area SEO, Google Business Profile, local rankings',
  openGraph: {
    title: 'Local SEO Services | True Rank Digital',
    description:
      'Increase local visibility with practical execution across GBP, local pages, entity signals, and technical SEO.',
    url: 'https://truerankdigital.com/services/local-seo',
    type: 'website',
  },
  alternates: {
    canonical: 'https://truerankdigital.com/services/local-seo',
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
    icon: <MapPin className="w-6 h-6" />,
    title: 'Local Visibility Architecture',
    description:
      'We align your service-area pages, GBP signals, and local intent targeting so your business is easier to discover in nearby markets.',
    bullets: [
      'Service-area keyword mapping',
      'Location page clarity and structure',
      'Entity consistency across local assets',
    ],
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Map & Ranking Intelligence',
    description:
      'We track local performance and identify coverage gaps so optimization decisions are based on real market data.',
    bullets: [
      'Local ranking visibility tracking',
      'Competitor coverage benchmarking',
      'Priority opportunity zones by intent',
    ],
  },
  {
    icon: <FileSearch className="w-6 h-6" />,
    title: 'On-Page + Schema Execution',
    description:
      'We implement on-page improvements and structured data that support both traditional search and AI-assisted discovery.',
    bullets: [
      'Local business schema alignment',
      'On-page content and conversion updates',
      'Internal linking for service + location pathways',
    ],
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: 'AI-Ready Local Signals',
    description:
      'We make local pages easier for answer engines to parse by improving structure, context, and machine readability.',
    bullets: [
      'LLM-readable formatting patterns',
      'Clear service-location relationships',
      'Trust signal reinforcement for citation readiness',
    ],
  },
];

const process = [
  {
    step: '01',
    title: 'Local Audit',
    text: 'We identify the technical, content, and entity gaps that are suppressing your local visibility.',
  },
  {
    step: '02',
    title: 'Priority Roadmap',
    text: 'You get an action plan ranked by impact so your team can execute high-value changes first.',
  },
  {
    step: '03',
    title: 'Implementation',
    text: 'We deploy page, schema, and GBP-related optimizations tied to ranking and lead quality improvements.',
  },
  {
    step: '04',
    title: 'Iteration',
    text: 'We monitor outcomes and continue tightening your local signal architecture as search behavior evolves.',
  },
];

export default function LocalSEOPage() {
  const faqs = generateServiceFAQs('localSEO', [
    {
      question: 'What does your Local SEO service include?',
      answer:
        'Our Local SEO service includes local visibility audits, service-area page optimization, GBP alignment, structured data implementation, and ongoing performance improvements tied to lead outcomes.',
    },
    {
      question: 'Can you support multi-location businesses?',
      answer:
        'Yes. We build location-specific frameworks that preserve brand consistency while improving local relevance for each market you serve.',
    },
    {
      question: 'How is this different from basic directory submissions?',
      answer:
        'Directory listings alone are not enough. We focus on entity consistency, technical clarity, and service-location architecture so search systems can interpret and trust your business signals.',
    },
    {
      question: 'Does Local SEO help with AI search visibility too?',
      answer:
        'Yes. The same local signal quality that supports map and organic rankings also improves how answer engines interpret your business context and recommend your services.',
    },
  ]);

  return (
    <>
      <GEOSchema
        pageType="service"
        pageData={{
          title: 'Local SEO Services by True Rank Digital',
          description:
            'Local SEO services focused on map visibility, local intent rankings, entity consistency, and AI-ready local search signals.',
          url: 'https://truerankdigital.com/services/local-seo',
          keywords: ['Local SEO', 'Google Maps SEO', 'Service Area SEO', 'Local Search Optimization'],
          category: 'Local SEO Services',
          serviceType: 'Local SEO',
          areaServed: ['United States'],
        }}
        breadcrumbs={[
          { name: 'Home', url: 'https://truerankdigital.com' },
          { name: 'Services', url: 'https://truerankdigital.com/services' },
          { name: 'Local SEO', url: 'https://truerankdigital.com/services/local-seo' },
        ]}
        entities={{
          primary: ['True Rank Digital', 'Local SEO', 'Google Business Profile'],
          secondary: ['Map Visibility', 'Service Area Rankings', 'Entity Signals'],
        }}
      />

      <ServiceSchema
        serviceName="Local SEO"
        serviceUrl="https://truerankdigital.com/services/local-seo"
        description="Local SEO service by True Rank Digital focused on local ranking growth, GBP alignment, structured data, and AI-ready service-area visibility signals."
        serviceType="Local SEO"
      />

      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/services/local-seo" category="service" />

      <article className="pt-16 min-h-screen bg-brand-obsidian text-white">
        <section className="py-16 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/10 rounded-full mb-6 border border-green-400/30">
                  <Search className="w-5 h-5 text-green-300" />
                  <span className="text-green-300 font-semibold text-sm">Local SEO</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                  Win More Local Demand with <span className="text-brand-primary">AI-Ready Visibility Signals</span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  We help your business show up where local buying decisions happen by improving map visibility,
                  local ranking coverage, and the technical trust signals behind your site.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-green-500 text-black font-semibold text-lg rounded-full hover:bg-green-400 transition-colors duration-300"
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
                <h2 className="text-2xl font-heading font-bold text-white mb-6">What This Solves</h2>
                <ul className="space-y-4">
                  {[
                    'Inconsistent visibility across key local markets',
                    'Low map engagement from high-intent local searches',
                    'Weak service-area page clarity and structure',
                    'Technical and entity gaps limiting trust and ranking stability',
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
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
                  <div className="text-green-300 mb-4">{area.icon}</div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-3">{area.title}</h3>
                  <p className="text-gray-400 mb-5">{area.description}</p>
                  <ul className="space-y-2">
                    {area.bullets.map((bullet) => (
                      <li key={bullet} className="text-gray-300 text-sm flex items-start space-x-2">
                        <span className="text-green-400 mt-0.5">•</span>
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
                  <div className="text-green-300 font-bold text-sm mb-2">STEP {item.step}</div>
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
              Need More Coverage in the Markets You Serve?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              We will show you exactly what is limiting local visibility and what to fix first.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-10 py-4 bg-green-500 text-black font-semibold text-lg rounded-full hover:bg-green-400 transition-colors duration-300"
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
