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
    email: siteIdentity.email,
    telephone: siteIdentity.telephone,
    foundingDate: siteIdentity.foundingYear,
    address: {
      '@type': 'PostalAddress',
      ...siteIdentity.address,
    },
    hasMap: siteIdentity.googleMapsCidUrl,
    sameAs: siteIdentity.sameAs,
    founder: { '@id': founderId },
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
    name: `${siteIdentity.brandName} Services`,
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Local SEO & Google Maps Optimization',
        provider: { '@type': 'Organization', name: siteIdentity.brandName, url: baseUrl },
      },
      {
        '@type': 'Service',
        name: 'Google Business Profile Optimization',
        provider: { '@type': 'Organization', name: siteIdentity.brandName, url: baseUrl },
      },
      {
        '@type': 'Service',
        name: 'Technical SEO & Schema Markup',
        provider: { '@type': 'Organization', name: siteIdentity.brandName, url: baseUrl },
      },
      {
        '@type': 'Service',
        name: 'AI Search Optimization (AIO/LLM.txt)',
        provider: { '@type': 'Organization', name: siteIdentity.brandName, url: baseUrl },
      },
      {
        '@type': 'Service',
        name: 'Web Development & Conversion Optimization',
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
