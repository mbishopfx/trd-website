import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Star,
  MessageSquare,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'Review & Reputation Management Services | True Rank Digital',
  description:
    'True Rank Digital provides review and reputation management services with response workflows, trust-signal optimization, and visibility-focused reporting.',
  keywords:
    'review management, reputation management, Google reviews, review response workflows, trust signals',
  alternates: { canonical: 'https://truerankdigital.com/services/review-management' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

const pillars = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Response Workflow',
    text: 'We establish response standards and SLAs so every review is acknowledged with brand-safe, conversion-aware messaging.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Reputation Protection',
    text: 'We identify risk patterns early and prevent unresolved feedback from damaging trust at key decision moments.',
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Trust Signal Growth',
    text: 'We improve quality and consistency of public sentiment signals that influence search visibility and buyer confidence.',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Performance Tracking',
    text: 'You get clear reporting on review velocity, response coverage, rating movement, and impact on lead quality.',
  },
];

const outcomes = [
  'Faster response coverage across major review platforms',
  'Higher trust and conversion confidence on profile views',
  'Cleaner escalation process for critical feedback',
  'Structured growth of high-quality review signals',
];

const faqs = [
  {
    question: 'What platforms do you cover for review management?',
    answer:
      'We cover the platforms that matter most to your buyers, including Google and other relevant review surfaces based on your industry and market.',
  },
  {
    question: 'Do you write responses for us?',
    answer:
      'Yes. We can provide managed response workflows, templates, escalation logic, and quality control so responses stay consistent and on-brand.',
  },
  {
    question: 'Can this service improve local visibility?',
    answer:
      'Yes. Strong, consistent review signals support trust and can improve discoverability alongside technical SEO and profile optimization.',
  },
  {
    question: 'How is success measured?',
    answer:
      'We track response speed, coverage rate, rating trends, sentiment distribution, and downstream conversion indicators.',
  },
];

export default function ReviewManagementPage() {
  return (
    <>
      <GEOSchema
        pageType="service"
        pageData={{
          title: 'Review & Reputation Management by True Rank Digital',
          description:
            'Review and reputation workflows that improve trust signals, response consistency, and conversion readiness.',
          url: 'https://truerankdigital.com/services/review-management',
          keywords: ['review management', 'reputation management', 'trust signals'],
          category: 'Reputation Management',
          serviceType: 'Review & Reputation Management',
          areaServed: ['United States'],
        }}
        breadcrumbs={[
          { name: 'Home', url: 'https://truerankdigital.com' },
          { name: 'Services', url: 'https://truerankdigital.com/services' },
          { name: 'Review Management', url: 'https://truerankdigital.com/services/review-management' },
        ]}
        entities={{
          primary: ['True Rank Digital', 'Review Management', 'Reputation Management'],
          secondary: ['Trust Signals', 'Response Workflows', 'Local Visibility'],
        }}
      />

      <ServiceSchema
        serviceName="Review & Reputation Management"
        serviceUrl="https://truerankdigital.com/services/review-management"
        description="Review management service with response workflows, trust-signal growth, and visibility-focused reporting."
        serviceType="Reputation Management"
      />

      <FAQSchema
        faqs={faqs}
        pageUrl="https://truerankdigital.com/services/review-management"
        category="service"
      />

      <article className="pt-16 min-h-screen bg-brand-obsidian text-white">
        <section className="py-16 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-400/10 rounded-full mb-6 border border-yellow-300/30">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <span className="text-yellow-300 font-semibold text-sm">Review & Reputation Management</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                  Build Stronger <span className="text-brand-primary">Trust Signals</span> Across Your Buying Journey
                </h1>
                <p className="text-xl text-gray-400 mb-8">
                  We turn fragmented review activity into a structured reputation system that supports
                  visibility, credibility, and conversion outcomes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-yellow-500 text-black font-semibold text-lg rounded-full hover:bg-yellow-400 transition-colors duration-300"
                  >
                    <TrendingUp className="w-5 h-5" />
                    <span>Start Review Strategy</span>
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
                <h2 className="text-2xl font-heading font-bold text-white mb-4">Expected Outcomes</h2>
                <ul className="space-y-3">
                  {outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start space-x-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                      <span>{outcome}</span>
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
              What We Execute For You
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="glass-card p-8">
                  <div className="text-yellow-300 mb-4">{pillar.icon}</div>
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
              Reputation Is Not A Side Task
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              It is a core performance input for local visibility, sales confidence, and conversion quality.
              We help you run it like a system.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-10 py-4 bg-yellow-500 text-black font-semibold text-lg rounded-full hover:bg-yellow-400 transition-colors duration-300"
            >
              <span>Book Reputation Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
