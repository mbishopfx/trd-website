'use client';

import Script from 'next/script';

// GEO Schema Types
export type PageType = 'service' | 'article' | 'product' | 'howto' | 'faq' | 'landing' | 'location' | 'software';

export interface GEOSchemaProps {
  pageType: PageType;
  pageData: {
    title: string;
    description: string;
    url: string;
    keywords?: string[];
    category?: string;
    datePublished?: string;
    dateModified?: string;
    image?: string;
    video?: string;
    // Service-specific
    serviceType?: string;
    priceRange?: string;
    areaServed?: string | string[];
    // Location-specific
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    latitude?: string;
    longitude?: string;
    // Product-specific
    price?: string;
    availability?: string;
    // Software-specific
    applicationCategory?: string;
    operatingSystem?: string;
    featureList?: string[];
    // Content sections for HowTo/Article
    contentSections?: Array<{
      heading: string;
      text: string;
      image?: string;
    }>;
    steps?: Array<{
      name: string;
      text: string;
      image?: string;
    }>;
  };
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
  entities?: {
    primary: string[];
    secondary?: string[];
    mentions?: Array<{
      type: string;
      id: string;
      name: string;
    }>;
  };
}

export default function GEOSchema({ pageType, pageData, breadcrumbs, entities }: GEOSchemaProps) {
  const baseUrl = 'https://truerankdigital.com';
  const organizationId = `${baseUrl}/#organization`;
  const pageId = `${pageData.url}#webpage`;
  
  // Generate @id for the main entity
  const mainEntityId = `${pageData.url}#${pageType}`;
  
  // Organization reference (always include)
  const organizationRef = {
    "@id": organizationId
  };

  // Build schema based on page type
  const buildPageSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": pageId,
      "url": pageData.url,
      "name": pageData.title,
      "description": pageData.description,
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`
      },
      "about": {
        "@id": mainEntityId
      },
      "mainEntity": {
        "@id": mainEntityId
      }
    };

    // Add image if provided
    if (pageData.image) {
      baseSchema["primaryImageOfPage"] = {
        "@type": "ImageObject",
        "@id": `${pageData.url}#primaryimage`,
        "url": pageData.image,
        "contentUrl": pageData.image
      };
    }

    // Add breadcrumbs
    if (breadcrumbs && breadcrumbs.length > 0) {
      baseSchema["breadcrumb"] = {
        "@id": `${pageData.url}#breadcrumb`
      };
    }

    return baseSchema;
  };

  // Build main entity schema based on type
  const buildMainEntitySchema = () => {
    switch (pageType) {
      case 'service':
        return buildServiceSchema();
      case 'article':
        return buildArticleSchema();
      case 'product':
        return buildProductSchema();
      case 'howto':
        return buildHowToSchema();
      case 'landing':
        return buildLandingSchema();
      case 'location':
        return buildLocationSchema();
      case 'software':
        return buildSoftwareSchema();
      default:
        return null;
    }
  };

  const buildServiceSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": mainEntityId,
    "name": pageData.title,
    "description": pageData.description,
    "provider": organizationRef,
    "serviceType": pageData.serviceType || pageData.category,
    "areaServed": pageData.areaServed ? (
      Array.isArray(pageData.areaServed) ? pageData.areaServed.map(area => ({
        "@type": "State",
        "name": area
      })) : {
        "@type": "Country",
        "name": pageData.areaServed
      }
    ) : {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${pageData.title} Services`,
      "itemListElement": [{
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": pageData.title
        }
      }]
    },
    "url": pageData.url,
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": pageData.url
    }
  });

  const buildArticleSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": mainEntityId,
    "headline": pageData.title,
    "description": pageData.description,
    "url": pageData.url,
    "datePublished": pageData.datePublished || new Date().toISOString().split('T')[0],
    "dateModified": pageData.dateModified || new Date().toISOString().split('T')[0],
    "author": organizationRef,
    "publisher": organizationRef,
    "mainEntityOfPage": {
      "@id": pageId
    },
    "articleSection": pageData.category || "Digital Marketing",
    "keywords": pageData.keywords?.join(', ') || "",
    "about": entities?.primary.map(entity => ({
      "@type": "Thing",
      "name": entity
    })) || [],
    "mentions": entities?.mentions || []
  });

  const buildProductSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": mainEntityId,
    "name": pageData.title,
    "description": pageData.description,
    "brand": organizationRef,
    "url": pageData.url,
    "offers": {
      "@type": "Offer",
      "price": pageData.price || "Custom Pricing",
      "priceCurrency": "USD",
      "availability": pageData.availability || "https://schema.org/InStock",
      "url": pageData.url,
      "seller": organizationRef
    }
  });

  const buildHowToSchema = () => ({
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": mainEntityId,
    "name": pageData.title,
    "description": pageData.description,
    "url": pageData.url,
    "image": pageData.image,
    "totalTime": "PT90D",
    "step": pageData.steps?.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "image": step.image,
      "url": `${pageData.url}#step-${index + 1}`
    })) || pageData.contentSections?.map((section, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": section.heading,
      "text": section.text,
      "image": section.image
    })) || []
  });

  const buildLandingSchema = () => ({
    "@context": "https://schema.org",
    "@type": ["WebPage", "Service"],
    "@id": mainEntityId,
    "name": pageData.title,
    "description": pageData.description,
    "url": pageData.url,
    "provider": organizationRef,
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": "main"
    },
    "significantLink": pageData.url,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".hero-content"]
    }
  });

  const buildLocationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": mainEntityId,
    "name": `True Rank Digital - ${pageData.addressLocality}`,
    "description": pageData.description,
    "url": pageData.url,
    "telephone": "+1-732-475-0139",
    "email": "jon@truerankdigital.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": pageData.addressLocality || "East Brunswick",
      "addressRegion": pageData.addressRegion || "NJ",
      "postalCode": pageData.postalCode || "08816",
      "addressCountry": "US"
    },
    "geo": pageData.latitude && pageData.longitude ? {
      "@type": "GeoCoordinates",
      "latitude": pageData.latitude,
      "longitude": pageData.longitude
    } : undefined,
    "areaServed": {
      "@type": "City",
      "name": pageData.addressLocality
    },
    "parentOrganization": organizationRef
  });

  const buildSoftwareSchema = () => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": mainEntityId,
    "name": pageData.title,
    "description": pageData.description,
    "url": pageData.url,
    "applicationCategory": pageData.applicationCategory || "BusinessApplication",
    "operatingSystem": pageData.operatingSystem || "Web-based",
    "offers": {
      "@type": "Offer",
      "price": "Custom Pricing",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": organizationRef
    },
    "creator": organizationRef,
    "publisher": organizationRef,
    "featureList": pageData.featureList || []
  });

  // Build breadcrumb schema
  const buildBreadcrumbSchema = () => {
    if (!breadcrumbs || breadcrumbs.length === 0) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${pageData.url}#breadcrumb`,
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };
  };

  // Combine all schemas into a graph
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      buildPageSchema(),
      buildMainEntitySchema(),
      buildBreadcrumbSchema()
    ].filter(Boolean)
  };

  return (
    <Script
      id="geo-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaGraph, null, 0)
      }}
    />
  );
}

