'use client';

import Script from 'next/script';
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
  const websiteId = `${baseUrl}/#website`;

  const organizationSchema = {
    '@type': ['Organization', 'LocalBusiness'],
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
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteIdentity.telephone,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
  };

  const websiteSchema = {
    '@type': 'WebSite',
    '@id': websiteId,
    name: siteIdentity.brandName,
    url: baseUrl,
    publisher: { '@id': organizationId },
    inLanguage: 'en-US',
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
    '@graph': [organizationSchema, websiteSchema, ...(breadcrumbSchema ? [breadcrumbSchema] : [])],
  };

  return (
    <Script
      id="site-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}

