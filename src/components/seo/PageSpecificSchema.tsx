interface PageSpecificSchemaProps {
  pageType: 'service' | 'about' | 'contact' | 'staff' | 'homepage' | 'location' | 'service-areas';
  pageTitle?: string;
  pageDescription?: string;
  serviceName?: string;
  serviceDescription?: string;
  servicePrice?: string;
  locationName?: string;
  locationZipCode?: string;
  locationCounty?: string;
  breadcrumbs?: Array<{name: string; url: string}>;
}

export default function PageSpecificSchema({
  pageType, 
  pageTitle, 
  pageDescription, 
  serviceName, 
  serviceDescription, 
  servicePrice,
  locationName,
  locationZipCode,
  locationCounty,
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
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "True Rank Digital LLC",
        url: baseUrl,
        email: "jon@truerankdigital.com",
        telephone: "+1-732-475-0139",
        contactPoint: [{ "@id": `${baseUrl}/#contactpoint` }]
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${baseUrl}/#localbusiness`,
        name: "True Rank Digital",
        legalName: "True Rank Digital LLC",
        url: baseUrl,
        image: `${baseUrl}/images/logos/trdlogoblue.webp`,
        logo: `${baseUrl}/images/logos/trd-logo1.avif`,
        email: "jon@truerankdigital.com",
        telephone: "+1-732-475-0139",
        priceRange: "$$-$$$",
        parentOrganization: {
          "@id": `${baseUrl}/#organization`
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "288 Summerhill Rd, suite 3",
          addressLocality: "East Brunswick",
          addressRegion: "NJ",
          postalCode: "08816",
          addressCountry: "US"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 40.4281,
          longitude: -74.4157
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
        ],
        contactPoint: [{ "@id": `${baseUrl}/#contactpoint` }],
        potentialAction: [
          {
            "@type": "CommunicateAction",
            target: `${baseUrl}/contact`
          },
          {
            "@type": "CommunicateAction",
            target: "tel:+17324750139"
          },
          {
            "@type": "CommunicateAction",
            target: "mailto:jon@truerankdigital.com"
          }
        ]
      },
      {
        "@type": "ContactPoint",
        "@id": `${baseUrl}/#contactpoint`,
        contactType: "customer service",
        telephone: "+1-732-475-0139",
        email: "jon@truerankdigital.com",
        areaServed: "US",
        availableLanguage: ["English"],
        url: `${baseUrl}/contact`
      },
      {
        "@type": "ContactPage",
        "@id": `${baseUrl}/contact#contactpage`,
        name: "Contact True Rank Digital",
        description: "Get in touch with True Rank Digital for professional SEO and digital marketing services.",
        url: `${baseUrl}/contact`,
        mainEntity: {
          "@id": `${baseUrl}/#localbusiness`
        },
        potentialAction: [
          {
            "@type": "CommunicateAction",
            target: `${baseUrl}/contact`
          },
          {
            "@type": "CommunicateAction",
            target: "tel:+17324750139"
          },
          {
            "@type": "CommunicateAction",
            target: "mailto:jon@truerankdigital.com"
          }
        ]
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
        name: "Jon J Korkowski",
        jobTitle: "CEO - Founder",
        worksFor: {
          "@id": `${baseUrl}/#organization`
        }
      },
      {
        "@type": "Person",
        name: "Jose Perdomo",
        jobTitle: "EVP of Sales & Client Success",
        worksFor: {
          "@id": `${baseUrl}/#organization`
        }
      },
      {
        "@type": "Person",
        name: "Eric Malheiro",
        jobTitle: "EVP of Sales Operations & Performance", 
        worksFor: {
          "@id": `${baseUrl}/#organization`
        }
      },
      {
        "@type": "Person",
        name: "Jesse Mathews",
        jobTitle: "EVP of Business Development & Sale",
        worksFor: {
          "@id": `${baseUrl}/#organization`
        }
      },
      {
        "@type": "Person",
        name: "Matt Bishop",
        jobTitle: "CTO (Chief Technology Officer)",
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

  // Location Page Schema
  const createLocationSchema = () => ({
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${baseUrl}/locations/${locationName?.toLowerCase().replace(/\s+/g, '-')}#location`,
    name: `True Rank Digital - ${locationName}`,
    alternateName: `SEO Services ${locationName}`,
    description: pageDescription || `Professional SEO and digital marketing services in ${locationName}. Get your business found on Google with expert local SEO strategies.`,
    url: `${baseUrl}/locations/${locationName?.toLowerCase().replace(/\s+/g, '-')}`,
    
    // Parent Organization
    parentOrganization: {
      "@id": `${baseUrl}/#organization`
    },
    
    // Service Area
    areaServed: [
      {
        "@type": "City",
        name: locationName,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: locationCounty || "Middlesex County"
        }
      },
      {
        "@type": "PostalAddress",
        addressLocality: locationName,
        addressRegion: "NJ",
        postalCode: locationZipCode,
        addressCountry: "US"
      }
    ],
    
    // Services for this location
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `SEO Services in ${locationName}`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Local SEO ${locationName}`,
            description: `Professional local SEO services specifically for ${locationName} businesses.`,
            serviceType: "Local SEO"
          },
          areaServed: {
            "@type": "City",
            name: locationName
          },
          provider: {
            "@id": `${baseUrl}/#organization`
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Google Business Profile ${locationName}`,
            description: `Google Business Profile optimization for ${locationName} local businesses.`,
            serviceType: "Google Business Profile Management"
          },
          areaServed: {
            "@type": "City",
            name: locationName
          },
          provider: {
            "@id": `${baseUrl}/#organization`
          }
        }
      ]
    },
    
    // Contact Information
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-732-475-0139",
      contactType: "customer service",
      areaServed: locationName,
      availableLanguage: ["English"]
    },
    
    // Actions
    potentialAction: [
      {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${baseUrl}/contact`,
          actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"]
        },
        result: {
          "@type": "Reservation",
          name: `SEO Consultation - ${locationName}`
        }
      },
      {
        "@type": "OrderAction", 
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${baseUrl}/free-audit`,
          actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"]
        },
        result: {
          "@type": "Order",
          name: `Free SEO Audit - ${locationName}`
        }
      }
    ]
  });

  // Service Areas Overview Schema
  const createServiceAreasSchema = () => ({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${baseUrl}/locations#serviceareas`,
    name: pageTitle || "True Rank Digital Service Areas",
    description: pageDescription || "Professional SEO and digital marketing services across Central New Jersey",
    url: `${baseUrl}/locations`,
    
    mainEntity: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`
    },
    
    // Areas served
    about: [
      {
        "@type": "Place",
        name: "East Brunswick, NJ",
        url: `${baseUrl}/locations/east-brunswick`
      },
      {
        "@type": "Place", 
        name: "Edison, NJ",
        url: `${baseUrl}/locations/edison`
      },
      {
        "@type": "Place",
        name: "New Brunswick, NJ", 
        url: `${baseUrl}/locations/new-brunswick`
      },
      {
        "@type": "Place",
        name: "North Brunswick, NJ",
        url: `${baseUrl}/locations/north-brunswick`
      },
      {
        "@type": "Place",
        name: "Sayreville, NJ",
        url: `${baseUrl}/locations/sayreville`
      },
      {
        "@type": "Place",
        name: "South River, NJ",
        url: `${baseUrl}/locations/south-river`
      }
    ],
    
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl
        },
        {
          "@type": "ListItem", 
          position: 2,
          name: "Service Areas",
          item: `${baseUrl}/locations`
        }
      ]
    }
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
    case 'location':
      pageSchema = createLocationSchema();
      break;
    case 'service-areas':
      pageSchema = createServiceAreasSchema();
      break;
    default:
      pageSchema = null;
  }

  if (!pageSchema) return null;

  return (
    <script
      id={`page-specific-schema-${pageType}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(pageSchema, null, 0)
      }}
    />
  );
}
