'use client';

import Script from 'next/script';

interface PageSpecificSchemaProps {
  pageType: 'service' | 'about' | 'contact' | 'staff' | 'homepage';
  pageTitle?: string;
  pageDescription?: string;
  serviceName?: string;
  serviceDescription?: string;
  servicePrice?: string;
  breadcrumbs?: Array<{name: string; url: string}>;
}

export default function PageSpecificSchema({ 
  pageType, 
  pageTitle, 
  pageDescription, 
  serviceName, 
  serviceDescription, 
  servicePrice,
  breadcrumbs 
}: PageSpecificSchemaProps) {
  
  const baseUrl = "https://truerankdigital.com";
  
  // Service Page Schema
  const createServiceSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/${pageType}#service`,
    name: serviceName || pageTitle,
    description: serviceDescription || pageDescription,
    provider: {
      "@id": `${baseUrl}/#organization`
    },
    areaServed: {
      "@type": "Country",
      name: "United States"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: serviceName || pageTitle,
      itemListElement: [{
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: serviceName || pageTitle,
          description: serviceDescription || pageDescription
        },
        price: servicePrice || "Contact for pricing",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        seller: {
          "@id": `${baseUrl}/#organization`
        }
      }]
    },
    serviceType: "SEO and Digital Marketing",
    category: "Professional Services",
    url: `${baseUrl}/services/${pageType}`,
    potentialAction: {
      "@type": "ConsumeAction",
      target: `${baseUrl}/contact`,
      actionStatus: "https://schema.org/PotentialActionStatus"
    }
  });

  // About Page Schema
  const createAboutSchema = () => ({
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${baseUrl}/about#aboutpage`,
    name: "About True Rank Digital",
    description: "Learn about True Rank Digital's custom software approach to SEO and digital marketing services.",
    url: `${baseUrl}/about`,
    mainEntity: {
      "@id": `${baseUrl}/#organization`
    },
    breadcrumb: breadcrumbs ? {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.url
      }))
    } : undefined
  });

  // Contact Page Schema
  const createContactSchema = () => ({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${baseUrl}/contact#contactpage`,
    name: "Contact True Rank Digital",
    description: "Get in touch with True Rank Digital for professional SEO and digital marketing services.",
    url: `${baseUrl}/contact`,
    mainEntity: {
      "@id": `${baseUrl}/#organization`
    },
    potentialAction: [
      {
        "@type": "ContactAction",
        target: `${baseUrl}/contact`,
        actionStatus: "https://schema.org/PotentialActionStatus"
      },
      {
        "@type": "CommunicateAction",
        target: "tel:+17324750139",
        actionStatus: "https://schema.org/PotentialActionStatus"
      },
      {
        "@type": "CommunicateAction", 
        target: "mailto:jon@truerankdigital.com",
        actionStatus: "https://schema.org/PotentialActionStatus"
      }
    ]
  });

  // Staff/Team Page Schema
  const createStaffSchema = () => ({
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${baseUrl}/staff#profilepage`,
    name: "True Rank Digital Team",
    description: "Meet the professional team behind True Rank Digital's custom SEO and digital marketing solutions.",
    url: `${baseUrl}/staff`,
    mainEntity: {
      "@id": `${baseUrl}/#organization`
    },
    mentions: [
      {
        "@type": "Person",
        name: "Matt Bishop",
        jobTitle: "Tech Developer",
        worksFor: {
          "@id": `${baseUrl}/#organization`
        }
      },
      {
        "@type": "Person",
        name: "Sean O'Neil", 
        jobTitle: "SEO Specialist",
        worksFor: {
          "@id": `${baseUrl}/#organization`
        }
      },
      {
        "@type": "Person",
        name: "Sebastian Lopez",
        jobTitle: "SEO Specialist", 
        worksFor: {
          "@id": `${baseUrl}/#organization`
        }
      }
    ]
  });

  // Homepage Schema (additional to main schema)
  const createHomepageSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/#webpage`,
    name: "True Rank Digital - Professional SEO & Digital Marketing Services",
    description: "Get your business found on Google with True Rank Digital's custom SEO software, schema markup engineering, and LLM.txt optimization services.",
    url: baseUrl,
    isPartOf: {
      "@id": `${baseUrl}/#website`
    },
    about: {
      "@id": `${baseUrl}/#organization`
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/logos/trdlogoblue.webp`,
      width: 1200,
      height: 600
    },
    potentialAction: [
      {
        "@type": "ReadAction",
        target: `${baseUrl}/about`,
        actionStatus: "https://schema.org/PotentialActionStatus"
      },
      {
        "@type": "InteractAction",
        target: `${baseUrl}/contact`,
        actionStatus: "https://schema.org/PotentialActionStatus"
      },
      {
        "@type": "ConsumeAction",
        target: `${baseUrl}/free-audit`,
        actionStatus: "https://schema.org/PotentialActionStatus"
      }
    ],
    mainEntity: [
      {
        "@type": "Service",
        name: "Local SEO & Google Maps Optimization",
        description: "Professional local SEO services with custom schema markup engineering."
      },
      {
        "@type": "Service",
        name: "Schema Markup Engineering",
        description: "Hand-crafted structured data implementation for superior search visibility."
      },
      {
        "@type": "Service",
        name: "LLM.txt Creation & Optimization",
        description: "Advanced optimization for AI search engines like ChatGPT and Claude."
      }
    ]
  });

  // Select appropriate schema based on page type
  let pageSchema;
  switch (pageType) {
    case 'service':
      pageSchema = createServiceSchema();
      break;
    case 'about':
      pageSchema = createAboutSchema();
      break;
    case 'contact':
      pageSchema = createContactSchema();
      break;
    case 'staff':
      pageSchema = createStaffSchema();
      break;
    case 'homepage':
      pageSchema = createHomepageSchema();
      break;
    default:
      pageSchema = null;
  }

  if (!pageSchema) return null;

  return (
    <Script
      id={`page-specific-schema-${pageType}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(pageSchema, null, 0)
      }}
    />
  );
}
