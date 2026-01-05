'use client';

import Script from 'next/script';

export interface ServiceSchemaProps {
  serviceName: string;
  serviceUrl: string;
  description: string;
  serviceType: string;
  mentions?: Array<{
    type: 'Organization' | 'Product' | 'SoftwareApplication' | 'Brand';
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
  mentions = []
}: ServiceSchemaProps) {
  
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: serviceName,
    description: description,
    serviceType: serviceType,
    url: serviceUrl,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://truerankdigital.com/#organization",
      name: "True Rank Digital LLC",
      telephone: "+1-732-475-0139",
      email: "jon@truerankdigital.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "East Brunswick",
        addressLocality: "East Brunswick",
        addressRegion: "NJ",
        postalCode: "08816",
        addressCountry: "US"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "40.428100",
        longitude: "-74.415700"
      },
      hasMap: "https://www.google.com/maps?cid=4662204553635539796",
      sameAs: [
        "https://www.google.com/maps?cid=4662204553635539796",
        "https://www.facebook.com/truerankdigital",
        "https://www.linkedin.com/company/true-rank-digital",
        "https://www.wikidata.org/wiki/Q130284854",
        "https://twitter.com/truerankdigital",
        "https://www.instagram.com/truerankdigital_/?hl=en",
        "https://www.youtube.com/channel/UC9wb8G1oROv_iUIDRL7JIWA",
        "https://www.tiktok.com/@truerankdigital_",
        "https://www.pinterest.com/truerankdigital"
      ]
    },
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: "40.428100",
          longitude: "-74.415700"
        },
        geoRadius: "80467.2",
        description: "Primary service area within 50 miles of East Brunswick, NJ"
      },
      {
        "@type": "AdministrativeArea",
        name: "Middlesex County"
      },
      {
        "@type": "State",
        name: "New Jersey"
      },
      {
        "@type": "State",
        name: "New York"
      },
      {
        "@type": "State",
        name: "Pennsylvania"
      },
      {
        "@type": "Country",
        name: "United States"
      }
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: serviceUrl,
      servicePhone: "+1-732-475-0139",
      availableLanguage: {
        "@type": "Language",
        name: "English"
      }
    },
    termsOfService: "https://truerankdigital.com/terms",
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

