import Script from 'next/script';

// GEO Schema Types
export type PageType = 'service' | 'article' | 'product' | 'howto' | 'faq' | 'landing' | 'location' | 'software' | 'webpage' | 'market';

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
    address?: {
      streetAddress?: string;
      addressLocality?: string;
      addressRegion?: string;
      postalCode?: string;
      addressCountry?: string;
    };
    geo?: {
      latitude?: string;
      longitude?: string;
    };
    // Product-specific
    price?: string;
    availability?: string;
    // Software-specific
    applicationCategory?: string;
    operatingSystem?: string;
    featureList?: string[];
    // Market-specific
    audienceType?: string;
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
  includeFAQ?: boolean;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export default function GEOSchema({ pageType, pageData, breadcrumbs, entities, includeFAQ = false, faqs = [] }: GEOSchemaProps) {
  const baseUrl = 'https://truerankdigital.com';
  const organizationId = `${baseUrl}/#organization`;
  const websiteId = `${baseUrl}/#website`;
  const pageId = `${pageData.url}#webpage`;
  
  // Generate @id for the main entity
  const mainEntityId = `${pageData.url}#${pageType}`;
  
  // Organization schema (full definition for graph)
  const buildOrganizationSchema = () => ({
    "@type": "Organization",
    "@id": organizationId,
    "name": "True Rank Digital",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "@id": `${baseUrl}/#logo`,
      "url": `${baseUrl}/images/logos/trdlogoblue.webp`,
      "contentUrl": `${baseUrl}/images/logos/trdlogoblue.webp`,
      "caption": "True Rank Digital Logo",
      "inLanguage": "en-US",
      "width": "1200",
      "height": "630"
    },
    "image": {
      "@id": `${baseUrl}/#logo`
    },
    "telephone": "+1-732-475-0139",
    "email": "jon@truerankdigital.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Serving East Brunswick",
      "addressLocality": "East Brunswick",
      "addressRegion": "NJ",
      "postalCode": "08816",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.4281",
      "longitude": "-74.4157"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "New Jersey"
      },
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/truerankdigital",
      "https://www.linkedin.com/company/true-rank-digital",
      "https://twitter.com/truerankdigital"
    ],
    "founder": {
      "@type": "Person",
      "name": "Jon Korkowski",
      "jobTitle": "Founder & CEO"
    },
    "foundingDate": "2020",
    "knowsAbout": entities?.primary || ["SEO", "Digital Marketing", "AI Optimization"],
    "slogan": "Get Your Business Found on Google—Fast!"
  });

  // Website schema (full definition for graph)
  const buildWebsiteSchema = () => ({
    "@type": "WebSite",
    "@id": websiteId,
    "url": baseUrl,
    "name": "True Rank Digital",
    "description": "Professional SEO & Digital Marketing Services with AI-Enhanced Technology",
    "publisher": {
      "@id": organizationId
    },
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  });

  // Build page schema
  const buildPageSchema = () => {
    const baseSchema: any = {
      "@type": "WebPage",
      "@id": pageId,
      "url": pageData.url,
      "name": pageData.title,
      "description": pageData.description,
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": websiteId
      },
      "about": {
        "@id": mainEntityId
      },
      "mainEntity": {
        "@id": mainEntityId
      },
      "publisher": {
        "@id": organizationId
      },
      "potentialAction": {
        "@type": "ReadAction",
        "target": [pageData.url]
      }
    };

    // Add speakable specification for AI voice assistants
    baseSchema["speakable"] = {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".hero-content", "article p"]
    };

    // Add image if provided
    if (pageData.image) {
      baseSchema["primaryImageOfPage"] = {
        "@type": "ImageObject",
        "@id": `${pageData.url}#primaryimage`,
        "url": pageData.image,
        "contentUrl": pageData.image,
        "caption": pageData.title
      };
    }

    // Add breadcrumbs reference
    if (breadcrumbs && breadcrumbs.length > 0) {
      baseSchema["breadcrumb"] = {
        "@id": `${pageData.url}#breadcrumb`
      };
    }

    // Add datePublished/Modified for better freshness signals
    if (pageData.datePublished) {
      baseSchema["datePublished"] = pageData.datePublished;
    }
    if (pageData.dateModified) {
      baseSchema["dateModified"] = pageData.dateModified;
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
      case 'market':
        return buildMarketSchema();
      case 'webpage':
        return buildWebpageSchema();
      default:
        return null;
    }
  };

  const buildServiceSchema = () => ({
    "@type": "Service",
    "@id": mainEntityId,
    "name": pageData.title,
    "description": pageData.description,
    "provider": {
      "@id": organizationId
    },
    "serviceType": pageData.serviceType || pageData.category,
    "areaServed": pageData.areaServed ? (
      Array.isArray(pageData.areaServed) ? pageData.areaServed.map(area => ({
        "@type": "State",
        "name": area
      })) : {
        "@type": "Country",
        "name": pageData.areaServed
      }
    ) : [
      {
        "@type": "State",
        "name": "New Jersey"
      },
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${pageData.title} Services`,
      "itemListElement": [{
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": pageData.title,
          "provider": {
            "@id": organizationId
          }
        }
      }]
    },
    "url": pageData.url,
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": pageData.url,
      "availableLanguage": {
        "@type": "Language",
        "name": "English"
      }
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Business Owners"
    },
    "brand": {
      "@id": organizationId
    }
  });

  const buildArticleSchema = () => ({
    "@type": "Article",
    "@id": mainEntityId,
    "headline": pageData.title,
    "description": pageData.description,
    "url": pageData.url,
    "datePublished": pageData.datePublished || new Date().toISOString().split('T')[0],
    "dateModified": pageData.dateModified || new Date().toISOString().split('T')[0],
    "author": {
      "@id": organizationId
    },
    "publisher": {
      "@id": organizationId
    },
    "mainEntityOfPage": {
      "@id": pageId
    },
    "articleSection": pageData.category || "Digital Marketing Education",
    "keywords": pageData.keywords?.join(', ') || "",
    "about": entities?.primary.map(entity => ({
      "@type": "Thing",
      "name": entity
    })) || [],
    "mentions": entities?.mentions || [],
    "inLanguage": "en-US",
    "copyrightYear": new Date().getFullYear(),
    "copyrightHolder": {
      "@id": organizationId
    }
  });

  const buildProductSchema = () => ({
    "@type": "Product",
    "@id": mainEntityId,
    "name": pageData.title,
    "description": pageData.description,
    "brand": {
      "@id": organizationId
    },
    "url": pageData.url,
    "offers": {
      "@type": "Offer",
      "price": pageData.price || "Custom Pricing",
      "priceCurrency": "USD",
      "availability": pageData.availability || "https://schema.org/InStock",
      "url": pageData.url,
      "seller": {
        "@id": organizationId
      },
      "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
    },
    "category": pageData.category || "Digital Marketing Services"
  });

  const buildHowToSchema = () => ({
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
    })) || [],
    "creator": {
      "@id": organizationId
    }
  });

  const buildLandingSchema = () => ({
    "@type": ["WebPage", "Service"],
    "@id": mainEntityId,
    "name": pageData.title,
    "description": pageData.description,
    "url": pageData.url,
    "provider": {
      "@id": organizationId
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": "main"
    },
    "significantLink": pageData.url,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".hero-content"]
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Business Owners"
    }
  });

  const buildLocationSchema = () => ({
    "@type": "LocalBusiness",
    "@id": mainEntityId,
    "name": `True Rank Digital - ${pageData.address?.addressLocality || 'East Brunswick'}`,
    "description": pageData.description,
    "url": pageData.url,
    "telephone": "+1-732-475-0139",
    "email": "jon@truerankdigital.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": pageData.address?.streetAddress || "Serving East Brunswick",
      "addressLocality": pageData.address?.addressLocality || "East Brunswick",
      "addressRegion": pageData.address?.addressRegion || "NJ",
      "postalCode": pageData.address?.postalCode || "08816",
      "addressCountry": pageData.address?.addressCountry || "US"
    },
    "geo": pageData.geo?.latitude && pageData.geo?.longitude ? {
      "@type": "GeoCoordinates",
      "latitude": pageData.geo.latitude,
      "longitude": pageData.geo.longitude
    } : {
      "@type": "GeoCoordinates",
      "latitude": "40.4281",
      "longitude": "-74.4157"
    },
    "areaServed": {
      "@type": "City",
      "name": pageData.address?.addressLocality || "East Brunswick"
    },
    "parentOrganization": {
      "@id": organizationId
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  });

  const buildSoftwareSchema = () => ({
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
      "seller": {
        "@id": organizationId
      }
    },
    "creator": {
      "@id": organizationId
    },
    "publisher": {
      "@id": organizationId
    },
    "featureList": pageData.featureList || [],
    "softwareVersion": "2.0",
    "releaseNotes": "Advanced AI-powered SEO analytics and optimization platform"
  });

  const buildMarketSchema = () => ({
    "@type": "Service",
    "@id": mainEntityId,
    "name": pageData.title,
    "description": pageData.description,
    "url": pageData.url,
    "provider": {
      "@id": organizationId
    },
    "serviceType": pageData.serviceType || pageData.category,
    "audience": {
      "@type": "Audience",
      "audienceType": pageData.audienceType || "Business"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  });

  const buildWebpageSchema = () => ({
    "@type": "WebPage",
    "@id": mainEntityId,
    "name": pageData.title,
    "description": pageData.description,
    "url": pageData.url,
    "publisher": {
      "@id": organizationId
    },
    "about": entities?.primary.map(entity => ({
      "@type": "Thing",
      "name": entity
    })) || []
  });

  // Build breadcrumb schema
  const buildBreadcrumbSchema = () => {
    if (!breadcrumbs || breadcrumbs.length === 0) return null;
    
    return {
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

  // Build FAQ schema if included
  const buildFAQSchema = () => {
    if (!includeFAQ || !faqs || faqs.length === 0) return null;

    return {
      "@type": "FAQPage",
      "@id": `${pageData.url}#faq`,
      "mainEntity": faqs.map((faq, index) => ({
        "@type": "Question",
        "@id": `${pageData.url}#faq-${index}`,
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
          "author": {
            "@id": organizationId
          }
        }
      }))
    };
  };

  // Combine all schemas into a comprehensive @graph
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationSchema(),
      buildWebsiteSchema(),
      buildPageSchema(),
      buildMainEntitySchema(),
      buildBreadcrumbSchema(),
      buildFAQSchema()
    ].filter(Boolean) // Remove null values
  };

  return (
    <Script
      id="geo-schema-graph"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaGraph, null, 0)
      }}
    />
  );
}
