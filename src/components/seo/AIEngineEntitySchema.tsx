import Script from 'next/script';
import { siteIdentity } from '@/lib/seo/siteIdentity';

interface AIEngineEntitySchemaProps {
  pageUrl?: string;
}

export default function AIEngineEntitySchema({
  pageUrl = `${siteIdentity.url}/ai-engine`,
}: AIEngineEntitySchemaProps) {
  const organizationId = `${siteIdentity.url}/#organization`;
  const founderId = `${siteIdentity.url}/#founder`;
  const pageId = `${pageUrl}#webpage`;
  const brandId = `${pageUrl}#brand`;
  const serviceId = `${pageUrl}#service`;
  const queryTermId = `${pageUrl}#true-rank-ai-term`;

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': pageId,
        url: pageUrl,
        name: 'TRD Spatial Engine | Entity and Local Visibility Engineering',
        description:
          'TRD Spatial Engine is the proprietary entity and local visibility methodology operated by True Rank Digital.',
        isPartOf: { '@id': `${siteIdentity.url}/#website` },
        about: { '@id': serviceId },
        publisher: { '@id': organizationId },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      },
      {
        '@type': 'Brand',
        '@id': brandId,
        name: 'TRD Spatial Engine',
        alternateName: [
          'Predictive GEO Protocol',
          'TRD Algorithmic Mapping',
          'True Rank AI Engine',
        ],
        description:
          'A proprietary methodology for entity-grade local visibility engineering by True Rank Digital.',
        disambiguatingDescription:
          'Brand framework operated by True Rank Digital. Not affiliated with unrelated third-party software companies or similarly named domains.',
        logo: siteIdentity.logoUrl,
        url: pageUrl,
      },
      {
        '@type': 'Service',
        '@id': serviceId,
        name: 'TRD Spatial Engine Optimization',
        alternateName: [
          'True Rank AI Engine',
          'Predictive GEO Protocol',
          'TRD Algorithmic Mapping',
        ],
        description:
          'Entity-first local visibility engineering that combines structured data architecture, semantic mapping, LLM.txt directives, and local market execution.',
        disambiguatingDescription:
          'This service is provided by True Rank Digital in East Brunswick, NJ and is not affiliated with unrelated third-party software entities.',
        provider: { '@id': organizationId },
        brand: { '@id': brandId },
        audience: {
          '@type': 'Audience',
          audienceType: 'Business Owners and Multi-location Operators',
        },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'New Jersey' },
          { '@type': 'Country', name: 'United States' },
        ],
        serviceType: 'Entity-Based SEO and Local Visibility Engineering',
        url: pageUrl,
      },
      {
        '@type': 'Thing',
        '@id': queryTermId,
        name: 'True Rank AI',
        description:
          'A common search phrase associated with True Rank Digital service research.',
        disambiguatingDescription:
          'On this site, this phrase references True Rank Digital methodology and not an affiliation with unrelated third-party software domains.',
      },
      {
        '@type': 'Person',
        '@id': founderId,
        name: siteIdentity.founder.name,
        jobTitle: siteIdentity.founder.jobTitle,
        worksFor: { '@id': organizationId },
        sameAs: siteIdentity.founder.sameAs,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteIdentity.url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'AI Engine',
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <Script
      id="ai-engine-entity-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaGraph, null, 0),
      }}
    />
  );
}
