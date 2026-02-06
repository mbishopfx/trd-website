'use client';

import Script from 'next/script';
import { siteIdentity } from '@/lib/seo/siteIdentity';

interface HomepageSchemaProps {
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export default function HomepageSchema({ faqs = [] }: HomepageSchemaProps) {
  const baseUrl = siteIdentity.url;
  const organizationId = `${baseUrl}/#organization`;
  const websiteId = `${baseUrl}/#website`;
  const webpageId = `${baseUrl}/#webpage`;

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
  };

  const websiteSchema = {
    '@type': 'WebSite',
    '@id': websiteId,
    name: siteIdentity.brandName,
    url: baseUrl,
    publisher: { '@id': organizationId },
    inLanguage: 'en-US',
  };

  const webpageSchema = {
    '@type': 'WebPage',
    '@id': webpageId,
    name: 'True Rank Digital',
    url: baseUrl,
    isPartOf: { '@id': websiteId },
    about: { '@id': organizationId },
    publisher: { '@id': organizationId },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: siteIdentity.imageUrl,
    },
    inLanguage: 'en-US',
  };

  const faqSchema =
    faqs.length > 0
      ? {
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }
      : null;

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, websiteSchema, webpageSchema, ...(faqSchema ? [faqSchema] : [])],
  };

  return (
    <Script
      id="homepage-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}

