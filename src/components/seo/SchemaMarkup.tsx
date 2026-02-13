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

  const organizationSchema = {
    '@type': 'Organization',
    '@id': organizationId,
    name: siteIdentity.legalName,
    legalName: siteIdentity.legalName,
    alternateName: siteIdentity.brandName,
    url: baseUrl,
    logo: siteIdentity.logoUrl,
    image: siteIdentity.imageUrl,
    email: siteIdentity.email,
    telephone: siteIdentity.telephone,
    foundingDate: siteIdentity.foundingYear,
    address: {
      '@type': 'PostalAddress',
      ...siteIdentity.address,
    },
    hasMap: siteIdentity.googleMapsCidUrl,
    sameAs: siteIdentity.sameAs,
    contactPoint: [{ '@id': contactPointId }],
    areaServed: { '@type': 'Country', name: 'United States' },
    hasOfferCatalog: { '@id': offerCatalogId },
    knowsAbout: ['Local SEO', 'Digital Marketing', 'Google Business Profile', 'Schema Markup', 'AI SEO'],
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
    telephone: siteIdentity.telephone,
    email: siteIdentity.email,
    priceRange: '$$-$$$',
    parentOrganization: { '@id': organizationId },
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
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'New Jersey' },
      { '@type': 'Country', name: 'United States' },
    ],
    contactPoint: [{ '@id': contactPointId }],
    hasOfferCatalog: { '@id': offerCatalogId },
    potentialAction: [
      {
        '@type': 'ContactAction',
        target: `${baseUrl}/contact`,
      },
      {
        '@type': 'CommunicateAction',
        target: `tel:${siteIdentity.telephone.replace(/[^\d+]/g, '')}`,
      },
    ],
  };

  const websiteSchema = {
    '@type': 'WebSite',
    '@id': websiteId,
    name: siteIdentity.brandName,
    url: baseUrl,
    publisher: { '@id': organizationId },
    about: { '@id': localBusinessId },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'ContactAction',
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
        provider: { '@id': localBusinessId },
      },
      {
        '@type': 'Service',
        name: 'Google Business Profile Optimization',
        provider: { '@id': localBusinessId },
      },
      {
        '@type': 'Service',
        name: 'Technical SEO & Schema Markup',
        provider: { '@id': localBusinessId },
      },
      {
        '@type': 'Service',
        name: 'AI Search Optimization (AIO/LLM.txt)',
        provider: { '@id': localBusinessId },
      },
      {
        '@type': 'Service',
        name: 'Web Development & Conversion Optimization',
        provider: { '@id': localBusinessId },
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
