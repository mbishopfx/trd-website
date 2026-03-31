import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Search,
  TrendingUp,
  CheckCircle2,
  Network,
  Bot,
  ShieldAlert,
  FileSearch,
  BarChart3,
  ArrowRight,
} from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Get Your Platform Audit | True Rank Digital',
  description:
    'Get a platform audit from True Rank Digital to uncover entity gaps, schema gaps, crawl blockers, and conversion friction limiting AI-era growth.',
  keywords:
    'platform audit, entity gap analysis, schema gap analysis, technical SEO audit, crawl blockers, AI search readiness',
  alternates: { canonical: 'https://truerankdigital.com/free-audit' },
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

const auditAreas = [
  {
    icon: <Network className="w-6 h-6" />,
    title: 'Entity Signal Gaps',
    description:
      'We map where your brand identity is fragmented across site architecture, listings, and platform profiles.',
    bullets: [
      'Entity consistency across priority pages',
      'Service/location relationship clarity',
      'Brand mention and authority alignment',
    ],
  },
  {
    icon: <FileSearch className="w-6 h-6" />,
    title: 'Schema Gap Analysis',
    description:
      'We audit your structured data coverage to find missing or weak schema connections that suppress discoverability.',
    bullets: [
      'Organization and service schema coverage',
      'FAQ, review, and local schema opportunities',
      'Validation and implementation priority map',
    ],
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: 'AI Crawl Readiness',
    description:
      'We check whether your site is consumable by modern answer engines and agent workflows.',
    bullets: [
      'Robots and crawl path restrictions',
      'Internal link flow and indexability health',
      'Content clarity for machine parsing',
    ],
  },
  {
    icon: <ShieldAlert className="w-6 h-6" />,
    title: 'Growth Blockers',
    description:
      'We isolate technical and content bottlenecks that are preventing qualified visibility and lead flow.',
    bullets: [
      'On-page intent mismatch and weak sections',
      'Missing trust and conversion signals',
      'Execution risks causing rank volatility',
    ],
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery Intake',
    text: 'We gather your core services, target markets, and revenue priorities so the audit maps to business outcomes, not vanity metrics.',
  },
  {
    step: '02',
    title: 'Signal & Structure Audit',
    text: 'We run a focused analysis across entity signals, schema architecture, crawl pathways, and service-page clarity.',
  },
  {
    step: '03',
    title: 'Gap Scoring',
    text: 'Every issue is scored by impact, effort, and urgency so your team can prioritize what moves rankings and pipeline fastest.',
  },
  {
    step: '04',
    title: 'Action Plan Delivery',
    text: 'You receive a prioritized roadmap with technical fixes, copy upgrades, and implementation sequencing for the next 30/60/90 days.',
  },
];

const fit = [
  'Local businesses that need stronger map + organic visibility',
  'Multi-location brands with inconsistent service/location signals',
  'Growth-stage companies migrating to AI-first search behavior',
  'Teams that need execution-ready priorities instead of generic reports',
];

const faqs = [
  {
    question: 'What is included in the platform audit?',
    answer:
      'The platform audit includes entity gap analysis, schema gap analysis, crawl and robots diagnostics, technical SEO risk review, and a prioritized implementation roadmap.',
  },
  {
    question: 'Do you only audit Google visibility?',
    answer:
      'No. The audit is built for modern discovery across search engines and AI answer environments, with Google visibility as one important layer.',
  },
  {
    question: 'Who should request this audit?',
    answer:
      'This is best for businesses with existing web presence that need higher-quality visibility, stronger conversion pathways, and clearer execution priorities.',
  },
  {
    question: 'How long does the audit take?',
    answer:
      'Timelines vary by site size and complexity, but most audits are delivered quickly with immediate high-impact recommendations.',
  },
  {
    question: 'Will we receive an implementation plan?',
    answer:
      'Yes. Every audit includes a practical plan sorted by impact and difficulty so your team can execute in the right order.',
  },
];

export default function FreeAuditPage() {
  return (
    <>
      <GEOSchema
        pageType="service"
        pageData={{
          title: 'Get Your Platform Audit from True Rank Digital',
          description:
            'Request a platform audit to uncover entity, schema, crawl, and conversion blockers limiting AI-era growth.',
          url: 'https://truerankdigital.com/free-audit',
          keywords: ['platform audit', 'entity gaps', 'schema gaps', 'crawl blockers'],
          category: 'Audit Services',
          serviceType: 'Platform Audit',
        }}
        breadcrumbs={[
          { name: 'Home', url: 'https://truerankdigital.com' },
          { name: 'Platform Audit', url: 'https://truerankdigital.com/free-audit' },
        ]}
        entities={{
          primary: ['True Rank Digital', 'Platform Audit', 'AI Search Readiness'],
          secondary: ['Entity Gaps', 'Schema Gaps', 'Technical SEO'],
        }}
      />

      <FAQSchema
        faqs={faqs}
        pageUrl="https://truerankdigital.com/free-audit"
        category="service"
      />

      <article className="pt-16 min-h-screen bg-brand-obsidian text-white">
        <section className="py-16 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 rounded-full mb-6 border border-cyan-400/30">
                  <Search className="w-5 h-5 text-cyan-300" />
                  <span className="text-cyan-300 font-semibold text-sm">Get Your Platform Audit</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                  Find What Is <span className="text-brand-primary">Blocking Your Growth</span> in Search and AI Discovery
                </h1>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  True Rank Digital audits your full visibility stack and identifies the exact entity,
                  schema, technical, and conversion gaps holding back qualified demand.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-cyan-500 text-black font-semibold text-lg rounded-full hover:bg-cyan-400 transition-colors duration-300"
                  >
                    <TrendingUp className="w-5 h-5" />
                    <span>Request Platform Audit</span>
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 border border-white/20 text-white font-semibold text-lg rounded-full hover:bg-white/5 transition-colors duration-300"
                  >
                    <span>View Services</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-6">What You Walk Away With</h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">A ranked list of the highest-impact growth blockers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Clear entity + schema remediation priorities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">A 30/60/90-day execution roadmap your team can run</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Recommendations grounded in revenue-focused outcomes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-10 text-center">
              Audit Coverage Areas
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {auditAreas.map((area) => (
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
              How The Platform Audit Works
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

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-8 lg:p-10">
              <div className="flex items-center space-x-3 mb-6">
                <BarChart3 className="w-6 h-6 text-cyan-300" />
                <h2 className="text-2xl lg:text-3xl font-heading font-bold text-white">
                  Best Fit For
                </h2>
              </div>
              <ul className="space-y-3">
                {fit.map((item) => (
                  <li key={item} className="text-gray-300 flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Ready for a Clear Growth Roadmap?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Request your platform audit and we will show you exactly what to fix first.
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
