import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Search,
  FileText,
  Wrench,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'Organic Search Optimization Services | True Rank Digital',
  description:
    'True Rank Digital provides organic search optimization services with technical SEO, content strategy, and authority-building execution that drives qualified traffic.',
  keywords:
    'organic search optimization, technical SEO, content optimization, search visibility, qualified traffic growth',
  alternates: { canonical: 'https://truerankdigital.com/services/organic-search' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

const pillars = [
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Technical SEO Foundation',
    text: 'We fix crawl, index, and structural issues that suppress rankings and reduce search coverage.',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Content & Intent Alignment',
    text: 'We map search intent to service pages and supporting content so your site earns relevant, conversion-ready traffic.',
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Entity-Driven Optimization',
    text: 'We strengthen semantic clarity and service/topic relationships so engines can confidently rank and recommend your pages.',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Performance Monitoring',
    text: 'We track movement across rankings, indexed pages, and conversion-oriented organic entry points.',
  },
];

const deliverables = [
  'Priority technical issue list with implementation guidance',
  'Page-level optimization plan for core service URLs',
  'Content brief framework for expansion opportunities',
  'Internal linking and semantic relevance improvements',
];

const faqs = [
  {
    question: 'What does organic search optimization include?',
    answer:
      'It includes technical SEO, on-page optimization, intent-based content strategy, internal link architecture, and ongoing performance analysis.',
  },
  {
    question: 'How quickly can we expect movement?',
    answer:
      'Organic growth compounds over time. We prioritize quick technical wins first, then layer in content and authority improvements for sustained gains.',
  },
  {
    question: 'Do you optimize existing content or create new content too?',
    answer:
      'Both. We optimize high-potential existing pages and provide clear direction for new pages needed to capture additional demand.',
  },
  {
    question: 'How is this different from one-time SEO audits?',
    answer:
      'Our approach is execution-focused. You get prioritized actions tied to business outcomes, not just a diagnostic report.',
  },
];

export default function OrganicSearchPage() {
  return (
    <>
      <GEOSchema
        pageType="service"
        pageData={{
          title: 'Organic Search Optimization by True Rank Digital',
          description:
            'Organic search optimization with technical SEO, entity clarity, and content execution to increase qualified visibility.',
          url: 'https://truerankdigital.com/services/organic-search',
          keywords: ['organic search', 'technical SEO', 'content optimization'],
          category: 'Organic Search',
          serviceType: 'Organic Search Optimization',
          areaServed: ['United States'],
        }}
        breadcrumbs={[
          { name: 'Home', url: 'https://truerankdigital.com' },
          { name: 'Services', url: 'https://truerankdigital.com/services' },
          { name: 'Organic Search', url: 'https://truerankdigital.com/services/organic-search' },
        ]}
        entities={{
          primary: ['True Rank Digital', 'Organic Search', 'Technical SEO'],
          secondary: ['Content Optimization', 'Entity SEO', 'Search Visibility'],
        }}
      />

      <ServiceSchema
        serviceName="Organic Search Optimization"
        serviceUrl="https://truerankdigital.com/services/organic-search"
        description="Organic search optimization service with technical SEO, intent-aligned content, and ongoing search performance improvement."
        serviceType="Search Optimization"
      />

      <FAQSchema
        faqs={faqs}
        pageUrl="https://truerankdigital.com/services/organic-search"
        category="service"
      />

      <article className="pt-16 min-h-screen bg-brand-obsidian text-white">
        <section className="py-16 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-teal-400/10 rounded-full mb-6 border border-teal-300/30">
                  <Search className="w-5 h-5 text-teal-300" />
                  <span className="text-teal-300 font-semibold text-sm">Organic Search Optimization</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                  Build Sustainable <span className="text-brand-primary">Organic Visibility</span> That Converts
                </h1>
                <p className="text-xl text-gray-400 mb-8">
                  We combine technical SEO, content execution, and entity clarity to help your highest-value
                  pages earn stronger rankings and better inbound quality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-teal-500 text-black font-semibold text-lg rounded-full hover:bg-teal-400 transition-colors duration-300"
                  >
                    <TrendingUp className="w-5 h-5" />
                    <span>Start Organic Strategy</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 border border-white/20 text-white font-semibold text-lg rounded-full hover:bg-white/5 transition-colors duration-300"
                  >
                    <span>Get Platform Audit</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">Core Deliverables</h2>
                <ul className="space-y-3">
                  {deliverables.map((item) => (
                    <li key={item} className="flex items-start space-x-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-teal-300 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
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
              What We Optimize
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="glass-card p-8">
                  <div className="text-teal-300 mb-4">{pillar.icon}</div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-gray-400">{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-y border-white/5 bg-white/2">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
              Organic Search Is A Compounding Asset
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              When technical structure, semantic clarity, and content quality work together, rankings
              become more stable and lead quality improves over time.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-10 py-4 bg-teal-500 text-black font-semibold text-lg rounded-full hover:bg-teal-400 transition-colors duration-300"
            >
              <span>Book Organic Search Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
