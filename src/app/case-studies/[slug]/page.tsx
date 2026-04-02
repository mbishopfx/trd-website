import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { ArrowRight, BadgeCheck, Building2, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import { caseStudies, getCaseStudyBySlug } from '@/data/caseStudies';
import { siteIdentity } from '@/lib/seo/siteIdentity';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return { title: 'Case Study Not Found | True Rank Digital' };
  }

  const url = `https://truerankdigital.com/case-studies/${study.slug}`;

  return {
    title: `${study.title} | True Rank Digital Case Study`,
    description: study.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${study.title} | True Rank Digital`,
      description: study.description,
      url,
      type: 'article',
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
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const pageUrl = `https://truerankdigital.com/case-studies/${study.slug}`;
  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteIdentity.url}/#organization`,
        name: siteIdentity.brandName,
        url: siteIdentity.url,
        logo: {
          '@type': 'ImageObject',
          url: siteIdentity.logoUrl,
        },
        sameAs: siteIdentity.sameAs,
        knowsAbout: [
          'https://en.wikipedia.org/wiki/Search_engine_optimization',
          'https://en.wikipedia.org/wiki/Local_search_engine_optimization',
          'https://en.wikipedia.org/wiki/Google_Business_Profile',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          areaServed: 'US',
          contactType: 'customer service',
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${study.title} | Case Study`,
        isPartOf: {
          '@id': `${siteIdentity.url}/#website`,
        },
        about: [
          { '@type': 'Service', name: 'Local SEO' },
          {
            '@type': study.specialty || 'Thing',
            name: study.industry,
          },
        ],
        description: study.description,
      },
      {
        '@type': 'Article',
        headline: study.title,
        author: { '@id': `${siteIdentity.url}/#organization` },
        publisher: { '@id': `${siteIdentity.url}/#organization` },
        datePublished: study.publishedDate,
        mentions: study.metrics.map((metric) => ({
          '@type': 'Observation',
          description: `${metric.label}: ${metric.value} (${metric.context})`,
        })),
        mainEntityOfPage: { '@id': `${pageUrl}#webpage` },
      },
    ],
  };

  return (
    <>
      <Script
        id={`case-study-schema-${study.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <GEOSchema
        pageType="webpage"
        pageData={{
          title: `${study.title} | True Rank Digital Case Study`,
          description: study.description,
          url: pageUrl,
          keywords: [study.title, study.industry, 'case study', 'local SEO', 'AI search visibility'],
          category: 'Case Study',
        }}
        breadcrumbs={[
          { name: 'Home', url: 'https://truerankdigital.com' },
          { name: 'Case Studies', url: 'https://truerankdigital.com/case-studies' },
          { name: study.title, url: pageUrl },
        ]}
        entities={{
          primary: ['True Rank Digital', study.title, study.industry],
          secondary: ['Case Study', 'Search Visibility', 'Performance Marketing'],
        }}
      />

      <article className="min-h-screen bg-brand-obsidian pt-16 text-white">
        <section className="border-b border-white/5 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.26em] text-white/56 transition hover:text-brand-cyan"
                >
                  Case Studies <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-brand-cyan">
                  <Building2 className="h-4 w-4" />
                  {study.industry}
                </div>
                <h1 className="mt-5 max-w-4xl text-4xl font-heading font-bold leading-tight text-white lg:text-6xl">
                  {study.title}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                  {study.description}
                </p>
                <p className="mt-5 max-w-3xl text-base leading-8 text-[#ffcf99]">
                  {study.challenge}
                </p>
              </div>

              <div className={`glass-card rounded-[2rem] bg-gradient-to-br ${study.accent} p-8`}>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-white/55">
                  Q1 Snapshot
                </p>
                <p className="mt-4 text-base leading-8 text-white/78">{study.icp}</p>

                <div className="mt-8 grid gap-4">
                  {study.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-[1.25rem] border border-white/10 bg-black/20 p-4 text-sm font-medium text-white/82"
                    >
                      <div className="text-[10px] font-black uppercase tracking-[0.24em] text-brand-cyan/80">
                        {metric.label}
                      </div>
                      <div className="mt-2 text-2xl font-heading font-bold text-white">{metric.value}</div>
                      <div className="mt-1 text-sm text-white/62">{metric.context}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="glass-card p-8">
                <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.22em] text-brand-cyan">
                  <Sparkles className="h-4 w-4" />
                  Strategic Brief
                </div>
                <h2 className="mt-5 text-3xl font-heading font-bold text-white">
                  What we solved
                </h2>
                <p className="mt-4 text-base leading-8 text-gray-300">
                  {study.strategySummary}
                </p>
                <ul className="mt-6 space-y-3">
                  {study.solutionBullets.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-gray-300">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-brand-cyan" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 space-y-3">
                  {study.momentum.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 text-sm font-medium text-white/82"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8">
                <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.22em] text-[#ffcf99]">
                  <TrendingUp className="h-4 w-4" />
                  Business Impact
                </div>
                <h2 className="mt-5 text-3xl font-heading font-bold text-white">
                  What changed
                </h2>
                <div className="mt-6 space-y-4">
                  {study.outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 text-base leading-7 text-gray-300"
                    >
                      {outcome}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-10 text-center">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brand-cyan">
                <BadgeCheck className="h-4 w-4" />
                ICP-Specific Execution
              </div>
              <h2 className="mt-6 text-3xl font-heading font-bold text-white lg:text-5xl">
                Need this level of specificity for your market?
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-300">
                We build search visibility systems around the economics, buying behavior, and local
                pressure points of your category instead of forcing every business through the same
                generic SEO template.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-cyan px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-brand-obsidian transition hover:-translate-y-0.5"
                >
                  Get Your Platform Audit
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition hover:border-brand-cyan/40 hover:text-brand-cyan"
                >
                  View Case Study Index
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
