import { siteIdentity } from '@/lib/seo/siteIdentity';

interface SchemaMarkupProps {
  type?: 'organization' | 'local-business' | 'website' | 'person' | 'service' | 'breadcrumb' | 'comprehensive';
  pageData?: Record<string, unknown>;
  breadcrumbs?: Array<{ name: string; url: string }>;
  includeAllSchemas?: boolean;
}

export default function SchemaMarkup({ breadcrumbs }: SchemaMarkupProps) {
  const baseUrl = siteIdentity.url;
  const organizationId = `${baseUrl}/#organization`;
  const brandId = `${baseUrl}/#brand-trd-spatial-engine`;
  const localBusinessId = `${baseUrl}/#localbusiness`;
  const websiteId = `${baseUrl}/#website`;
  const contactPointId = `${baseUrl}/#contactpoint`;
  const offerCatalogId = `${baseUrl}/#offercatalog`;
  const founderId = `${baseUrl}/#founder`;

  const organizationSchema = {
    '@type': 'Organization',
    '@id': organizationId,
    name: siteIdentity.brandName,
    legalName: siteIdentity.legalName,
    alternateName: siteIdentity.alternateNames,
    url: baseUrl,
    logo: siteIdentity.logoUrl,
    image: siteIdentity.imageUrl,
    description: siteIdentity.description,
    disambiguatingDescription: siteIdentity.disambiguatingDescription,
    email: siteIdentity.email,
    telephone: siteIdentity.telephone,
    address: {
      '@type': 'PostalAddress',
      ...siteIdentity.address,
    },
    hasMap: siteIdentity.googleMapsCidUrl,
    sameAs: siteIdentity.sameAs,
    founder: { '@id': founderId },
    brand: { '@id': brandId },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteIdentity.telephone,
        email: siteIdentity.email,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: ['English'],
        url: `${baseUrl}/contact`,
      },
    ],
    areaServed: siteIdentity.areaServed,
    knowsAbout: siteIdentity.knowsAbout,
  };

  const brandSchema = {
    '@type': 'Brand',
    '@id': brandId,
    name: siteIdentity.proprietaryMethodologyNames[0],
    alternateName: siteIdentity.proprietaryMethodologyNames,
    url: `${baseUrl}/ai-engine`,
    description:
      'Proprietary entity and local visibility engineering framework from True Rank Digital.',
    disambiguatingDescription:
      'Brand framework operated by True Rank Digital and not affiliated with unrelated third-party software domains.',
    logo: siteIdentity.logoUrl,
  };

  const founderSchema = {
    '@type': 'Person',
    '@id': founderId,
    name: siteIdentity.founder.name,
    alternateName: siteIdentity.founder.alternateName,
    jobTitle: siteIdentity.founder.jobTitle,
    worksFor: { '@id': organizationId },
    url: siteIdentity.founder.url,
    sameAs: siteIdentity.founder.sameAs,
  };

  const contactPointSchema = {
    '@type': 'ContactPoint',
    '@id': contactPointId,
    telephone: siteIdentity.telephone,
    email: siteIdentity.email,
    contactType: 'customer service',
    areaServed: 'US',
    availableLanguage: ['English'],
    url: `${baseUrl}/contact`,
  };

  const localBusinessSchema = {
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': localBusinessId,
    name: siteIdentity.brandName,
    legalName: siteIdentity.legalName,
    url: baseUrl,
    image: siteIdentity.imageUrl,
    logo: siteIdentity.logoUrl,
    description: siteIdentity.description,
    disambiguatingDescription: siteIdentity.disambiguatingDescription,
    telephone: siteIdentity.telephone,
    email: siteIdentity.email,
    priceRange: '$$-$$$',
    parentOrganization: {
      '@type': 'Organization',
      name: siteIdentity.legalName,
      url: baseUrl,
    },
    address: {
      '@type': 'PostalAddress',
      ...siteIdentity.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.4281,
      longitude: -74.4157,
    },
    hasMap: siteIdentity.googleMapsCidUrl,
    sameAs: siteIdentity.sameAs,
    areaServed: siteIdentity.areaServed,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteIdentity.telephone,
        email: siteIdentity.email,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: ['English'],
        url: `${baseUrl}/contact`,
      },
    ],
    potentialAction: [
      {
        '@type': 'CommunicateAction',
        target: `${baseUrl}/contact`,
      },
      {
        '@type': 'CommunicateAction',
        target: `tel:${siteIdentity.telephone.replace(/[^\d+]/g, '')}`,
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 5.0,
      reviewCount: 30,
      bestRating: 5,
      worstRating: 1
    },
    brand: { '@id': brandId },
  };

  const websiteSchema = {
    '@type': 'WebSite',
    '@id': websiteId,
    name: siteIdentity.brandName,
    url: baseUrl,
    publisher: {
      '@type': 'Organization',
      name: siteIdentity.legalName,
      url: baseUrl,
    },
    about: `${siteIdentity.brandName} local SEO and digital marketing services`,
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'CommunicateAction',
      target: `${baseUrl}/contact`,
    },
  };

  const offerCatalogSchema = {
    '@type': 'OfferCatalog',
    '@id': offerCatalogId,
    name: `${siteIdentity.brandName} Service Catalog`,
    itemListElement: [
      {
        '@type': 'Service',
        name: 'AI Search Optimization',
        provider: { '@type': 'Organization', name: siteIdentity.brandName, url: baseUrl },
      },
      {
        '@type': 'Service',
        name: 'Digital Marketing and Advertising',
        provider: { '@type': 'Organization', name: siteIdentity.brandName, url: baseUrl },
      },
      {
        '@type': 'Service',
        name: 'Google Business Profile Optimization',
        provider: { '@type': 'Organization', name: siteIdentity.brandName, url: baseUrl },
      },
      {
        '@type': 'Service',
        name: 'Local SEO',
        provider: { '@type': 'Organization', name: siteIdentity.brandName, url: baseUrl },
      },
      {
        '@type': 'Service',
        name: 'PPC Campaigns',
        provider: { '@type': 'Organization', name: siteIdentity.brandName, url: baseUrl },
      },
      {
        '@type': 'Service',
        name: 'SEO Tactics',
        provider: { '@type': 'Organization', name: siteIdentity.brandName, url: baseUrl },
      },
      {
        '@type': 'Service',
        name: 'Website Engineering',
        provider: { '@type': 'Organization', name: siteIdentity.brandName, url: baseUrl },
      },
      {
        '@type': 'Service',
        name: 'Social Media Management',
        provider: { '@type': 'Organization', name: siteIdentity.brandName, url: baseUrl },
      },
      {
        '@type': 'Service',
        name: 'CRM With AI Chat',
        provider: { '@type': 'Organization', name: siteIdentity.brandName, url: baseUrl },
      },
      {
        '@type': 'Service',
        name: 'Business Consulting',
        provider: { '@type': 'Organization', name: siteIdentity.brandName, url: baseUrl },
      },
    ],
  };

  const breadcrumbSchema =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: crumb.url,
          })),
        }
      : null;

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema,
      brandSchema,
      founderSchema,
      contactPointSchema,
      localBusinessSchema,
      websiteSchema,
      offerCatalogSchema,
      ...(breadcrumbSchema ? [breadcrumbSchema] : []),
    ],
  };

  return (
    <script
      id="site-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
