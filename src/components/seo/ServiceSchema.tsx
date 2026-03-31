'use client';

import Script from 'next/script';
import { siteIdentity } from '@/lib/seo/siteIdentity';

export interface ServiceSchemaProps {
  serviceName: string;
  serviceUrl: string;
  description: string;
  serviceType: string;
  alternateNames?: string[];
  disambiguatingDescription?: string;
  brand?: {
    name: string;
    alternateNames?: string[];
    description?: string;
  };
  mentions?: Array<{
    type: 'Organization' | 'Product' | 'SoftwareApplication' | 'Brand' | 'Thing' | 'Person';
    name: string;
    sameAs?: string;
    description?: string;
  }>;
}

export default function ServiceSchema({ 
  serviceName, 
  serviceUrl, 
  description, 
  serviceType,
  alternateNames = [],
  disambiguatingDescription,
  brand,
  mentions = []
}: ServiceSchemaProps) {
  
  const brandId = `${serviceUrl}#brand`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: serviceName,
    ...(alternateNames.length > 0 && { alternateName: alternateNames }),
    description: description,
    ...(disambiguatingDescription && {
      disambiguatingDescription
    }),
    serviceType: serviceType,
    url: serviceUrl,
    provider: {
      "@type": "Organization",
      "@id": `${siteIdentity.url}/#organization`,
      name: siteIdentity.legalName,
      url: siteIdentity.url,
      telephone: siteIdentity.telephone,
      email: siteIdentity.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteIdentity.address.streetAddress,
        addressLocality: siteIdentity.address.addressLocality,
        addressRegion: siteIdentity.address.addressRegion,
        postalCode: siteIdentity.address.postalCode,
        addressCountry: siteIdentity.address.addressCountry
      },
      hasMap: siteIdentity.googleMapsCidUrl,
      sameAs: siteIdentity.sameAs,
      disambiguatingDescription: siteIdentity.disambiguatingDescription
    },
    areaServed: { "@type": "Country", name: "United States" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: serviceUrl,
      servicePhone: siteIdentity.telephone,
      availableLanguage: {
        "@type": "Language",
        name: "English"
      }
    },
    ...(brand && {
      brand: {
        "@type": "Brand",
        "@id": brandId,
        name: brand.name,
        ...(brand.alternateNames && brand.alternateNames.length > 0 && {
          alternateName: brand.alternateNames
        }),
        ...(brand.description && { description: brand.description }),
        url: serviceUrl
      }
    }),
    ...(mentions.length > 0 && {
      mentions: mentions.map(mention => ({
        "@type": mention.type,
        name: mention.name,
        ...(mention.sameAs && { sameAs: mention.sameAs }),
        ...(mention.description && { description: mention.description })
      }))
    })
  };

  return (
    <Script
      id={`service-schema-${serviceType.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceSchema, null, 0)
      }}
    />
  );
}
