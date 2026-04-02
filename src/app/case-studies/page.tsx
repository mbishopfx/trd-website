import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Award, Building2 } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import { caseStudies } from '@/data/caseStudies';

export const metadata: Metadata = {
  title: 'Case Studies | True Rank Digital',
  description:
    'Explore a real True Rank Digital case study showing how Entity Signal Mapping and GBP optimization scaled patient lead volume for a local physical therapy practice.',
  alternates: { canonical: 'https://truerankdigital.com/case-studies' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function CaseStudiesPage() {
  const faqs = [
    {
      question: 'What does this case study show?',
      answer:
        'This case study shows how True Rank Digital used Entity Signal Mapping, GBP optimization, review momentum, and AI search positioning to grow local patient acquisition for a physical therapy practice.',
    },
  ];

  return (
    <>
      <GEOSchema
        pageType="webpage"
        pageData={{
          title: 'True Rank Digital Case Studies',
          description:
            'A real case study showing how True Rank Digital solves visibility, authority, and lead-flow problems for local healthcare providers.',
          url: 'https://truerankdigital.com/case-studies',
          keywords: ['case studies', 'SEO case studies', 'local SEO results', 'AI search visibility'],
          category: 'Case Studies',
        }}
        breadcrumbs={[
          { name: 'Home', url: 'https://truerankdigital.com' },
          { name: 'Case Studies', url: 'https://truerankdigital.com/case-studies' },
        ]}
        entities={{
          primary: ['True Rank Digital', 'Case Studies', 'Search Visibility'],
          secondary: ['ICP Strategy', 'Local Authority', 'Performance Marketing'],
        }}
      />

      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/case-studies" category="general" />

      <article className="min-h-screen bg-brand-obsidian pt-16 text-white">
        <section className="border-b border-white/5 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brand-cyan">
                  <Award className="h-4 w-4" />
                  Case Studies
                </div>
                <h1 className="mt-6 text-4xl font-heading font-bold leading-tight text-white lg:text-6xl">
                  A real local growth brief, built from actual performance data.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                  This case study breaks down how True Rank Digital used entity authority, GBP
                  optimization, and local-intent execution to turn a physical therapy clinic from
                  low visibility into a stronger patient-acquisition presence within a single quarter.
                </p>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-2xl font-heading font-bold text-white">
                  What this page demonstrates
                </h2>
                <ul className="mt-6 space-y-4 text-sm leading-7 text-gray-300">
                  <li>How Entity Signal Mapping improves local trust and discoverability</li>
                  <li>How GBP optimization can increase patient calls without increasing ad spend</li>
                  <li>How local search and AI-driven recommendation surfaces reinforce each other</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6">
              {caseStudies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/35 hover:bg-white/[0.05]"
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-brand-cyan">
                    <Building2 className="h-3.5 w-3.5" />
                    {study.industry}
                  </div>
                  <h2 className="mt-5 text-3xl font-heading font-bold text-white group-hover:text-brand-cyan transition-colors duration-200">
                    {study.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-gray-300">{study.description}</p>
                  <p className="mt-5 text-sm leading-7 text-[#ffcf99]">{study.challenge}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-brand-cyan">
                    View case study <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
