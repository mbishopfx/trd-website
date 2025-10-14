'use client';

import Script from 'next/script';

interface ComprehensiveSchemaProps {
  type: 'platform-tool' | 'service' | 'education' | 'location' | 'about' | 'contact' | 'referral-program' | 'article' | 'howto' | 'video' | 'product' | 'service-landing';
  pageData: {
    title: string;
    description: string;
    url: string;
    keywords?: string[];
    category?: string;
    author?: string;
    datePublished?: string;
    dateModified?: string;
    toolFeatures?: string[];
    serviceType?: string;
    locationData?: {
      city: string;
      state: string;
      zipCode: string;
      coordinates?: { lat: string; lng: string };
    };
    offers?: Array<{
      name: string;
      description: string;
      price: string;
      currency?: string;
    }>;
    contentSections?: Array<{
      heading: string;
      text: string;
    }>;
    faq?: Array<{
      question: string;
      answer: string;
    }>;
  };
  breadcrumbs?: Array<{name: string; url: string}>;
}

export default function ComprehensiveSchema({ type, pageData, breadcrumbs }: ComprehensiveSchemaProps) {
  const baseUrl = "https://truerankdigital.com";
  
  // NAP Data
  const napData = {
    name: "True Rank Digital LLC",
    legalName: "True Rank Digital LLC",
    address: {
      streetAddress: "East Brunswick",
      addressLocality: "East Brunswick", 
      addressRegion: "NJ",
      postalCode: "08816",
      addressCountry: "US"
    },
    telephone: "+1-732-475-0139",
    email: "jon@truerankdigital.com",
    url: baseUrl,
    logo: `${baseUrl}/images/logos/trd-logo1.avif`
  };

  // Platform Tool Schema (SoftwareApplication)
  const platformToolSchema = type === 'platform-tool' ? {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${pageData.url}#software-application`,
    name: pageData.title,
    description: pageData.description,
    url: pageData.url,
    applicationCategory: "SEO Software",
    operatingSystem: "Web-based",
    softwareVersion: "2.0",
    creator: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: napData.name
    },
    publisher: {
      "@type": "Organization", 
      "@id": `${baseUrl}/#organization`,
      name: napData.name
    },
    offers: {
      "@type": "Offer",
      price: "Custom Pricing",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: napData.name
      }
    },
    featureList: pageData.toolFeatures || [],
    screenshot: `${pageData.url.replace(baseUrl, '')}.jpg`,
    softwareHelp: {
      "@type": "WebPage",
      url: `${baseUrl}/contact`
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1", 
      ratingCount: "15"
    },
    keywords: pageData.keywords?.join(", "),
    inLanguage: "en-US",
    isAccessibleForFree: false,
    hasPart: [
      {
        "@type": "WebPageElement",
        name: "Feature Documentation",
        description: "Comprehensive documentation and guides for platform features"
      }
    ]
  } : null;

  // Service Schema
  const serviceSchema = type === 'service' ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageData.url}#service`,
    name: pageData.title,
    description: pageData.description,
    url: pageData.url,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#organization`,
      name: napData.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: napData.address.streetAddress,
        addressLocality: napData.address.addressLocality,
        addressRegion: napData.address.addressRegion,
        postalCode: napData.address.postalCode,
        addressCountry: napData.address.addressCountry
      },
      telephone: napData.telephone,
      email: napData.email
    },
    serviceType: pageData.serviceType || "Digital Marketing",
    category: pageData.category || "SEO Services",
    areaServed: {
      "@type": "Country",
      name: "United States"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Small to Medium Businesses"
    },
    hasOfferCatalog: {
      "@id": `${baseUrl}/#service-catalog`
    },
    aggregateRating: {
      "@id": `${baseUrl}/#aggregate-rating`
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Jessica Perez"
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        reviewBody: "True rank digital isn't a company it's a family they got my business back on track. Constant follow ups they treated me like family god bless y'all"
      }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "12"
    },
    keywords: pageData.keywords?.join(", ")
  } : null;

  // Education/Article Schema
  const educationSchema = type === 'education' ? {
    "@context": "https://schema.org",
    "@type": ["Article", "LearningResource"],
    "@id": `${pageData.url}#article`,
    headline: pageData.title,
    description: pageData.description,
    url: pageData.url,
    author: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: napData.name,
      email: napData.email
    },
    publisher: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: napData.name,
      logo: {
        "@type": "ImageObject",
        url: napData.logo
      }
    },
    datePublished: pageData.datePublished || "2024-01-01",
    dateModified: pageData.dateModified || new Date().toISOString().split('T')[0],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageData.url
    },
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/education/${pageData.category || 'default'}.jpg`,
      width: "1200",
      height: "630"
    },
    articleSection: "SEO Education",
    keywords: pageData.keywords?.join(", "),
    about: {
      "@type": "Thing",
      name: "SEO Education",
      description: "Advanced SEO strategies and digital marketing education"
    },
    teaches: pageData.keywords?.map(keyword => ({
      "@type": "DefinedTerm",
      name: keyword
    })),
    educationalLevel: "Professional",
    inLanguage: "en-US",
    learningResourceType: "Article",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "Business Owner",
      audienceType: "Professional"
    },
    isAccessibleForFree: true,
    educationalUse: "Professional Development"
  } : null;

  // Location Schema
  const locationSchema = type === 'location' && pageData.locationData ? {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageData.url}#webpage`,
    name: pageData.title,
    description: pageData.description,
    url: pageData.url,
    about: {
      "@type": "Place",
      name: `${pageData.locationData.city}, ${pageData.locationData.state}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: pageData.locationData.city,
        addressRegion: pageData.locationData.state,
        postalCode: pageData.locationData.zipCode,
        addressCountry: "US"
      },
      geo: pageData.locationData.coordinates ? {
        "@type": "GeoCoordinates",
        latitude: pageData.locationData.coordinates.lat,
        longitude: pageData.locationData.coordinates.lng
      } : undefined
    },
    mainEntity: {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#organization`,
      name: napData.name,
      serviceArea: {
        "@type": "City",
        name: pageData.locationData.city,
        containedInPlace: {
          "@type": "State",
          name: pageData.locationData.state
        }
      }
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
  } : null;

  // About Page Schema
  const aboutSchema = type === 'about' ? {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${pageData.url}#about-page`,
    name: pageData.title,
    description: pageData.description,
    url: pageData.url,
    mainEntity: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`
    },
    about: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: napData.name,
      description: "Professional SEO and digital marketing company specializing in custom software development and proprietary optimization solutions.",
      foundingDate: "2020",
      founder: {
        "@type": "Person",
        name: "Jon J Korkowski",
        jobTitle: "CEO & Founder"
      },
      employee: [
        {
          "@type": "Person",
          name: "Jesse Mathews",
          jobTitle: "President"
        },
        {
          "@type": "Person", 
          name: "Jose Perdomo",
          jobTitle: "Executive Vice President"
        },
        {
          "@type": "Person",
          name: "Matt Bishop", 
          jobTitle: "Tech Developer"
        },
        {
          "@type": "Person",
          name: "Sean O'Niel",
          jobTitle: "SEO Specialist"
        },
        {
          "@type": "Person",
          name: "Sebastian Vargas",
          jobTitle: "SEO Specialist"
        },
        {
          "@type": "Person",
          name: "Eric Malheiro",
          jobTitle: "Business Acquisition Director"
        }
      ]
    }
  } : null;

  // Contact Page Schema
  const contactSchema = type === 'contact' ? {
    "@context": "https://schema.org",
    "@type": "ContactPage", 
    "@id": `${pageData.url}#contact-page`,
    name: pageData.title,
    description: pageData.description,
    url: pageData.url,
    mainEntity: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`
    },
    about: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: napData.telephone,
      email: napData.email,
      availableLanguage: "English",
      areaServed: "US"
    }
  } : null;

  // Article Schema
  const articleSchema = type === 'article' ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageData.url}#article`,
    headline: pageData.title,
    description: pageData.description,
    articleSection: pageData.category || "SEO Education",
    keywords: pageData.keywords?.join(", "),
    author: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: napData.name,
      email: napData.email
    },
    publisher: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: napData.name,
      logo: {
        "@type": "ImageObject",
        url: napData.logo
      }
    },
    datePublished: pageData.datePublished || "2024-01-01",
    dateModified: pageData.dateModified || new Date().toISOString().split('T')[0],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageData.url
    },
    about: pageData.keywords?.map(keyword => ({
      "@type": "Thing",
      name: keyword,
      description: `Information about ${keyword} in the context of SEO and digital marketing`
    })),
    speaksAbout: pageData.contentSections?.map(section => ({
      "@type": "DefinedTerm",
      name: section.heading,
      description: section.text.substring(0, 200) + "..."
    })),
    aggregateRating: {
      "@id": `${baseUrl}/#aggregate-rating`
    }
  } : null;

  // HowTo Schema
  const howToSchema = type === 'howto' ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${pageData.url}#howto`,
    name: pageData.title,
    description: pageData.description,
    totalTime: "PT2H",
    supply: [
      {
        "@type": "HowToSupply",
        name: "Website Access"
      },
      {
        "@type": "HowToSupply",
        name: "Google Analytics Account"
      }
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "True Rank Digital SEO Dashboard"
      },
      {
        "@type": "HowToTool",
        name: "Schema Markup Tools"
      }
    ],
    step: pageData.contentSections?.map((section, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: section.heading,
      text: section.text,
      image: `${baseUrl}/images/howto/step-${index + 1}.jpg`
    })) || [],
    aggregateRating: {
      "@id": `${baseUrl}/#aggregate-rating`
    }
  } : null;

  // Video Schema
  const videoSchema = type === 'video' ? {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${pageData.url}#video`,
    name: pageData.title,
    description: pageData.description,
    thumbnailUrl: `${baseUrl}/images/videos/${pageData.category || 'default'}-thumb.jpg`,
    uploadDate: pageData.datePublished || "2024-01-01",
    duration: "PT5M30S",
    contentUrl: `${baseUrl}/videos/${pageData.category || 'default'}.mp4`,
    embedUrl: `${baseUrl}/videos/embed/${pageData.category || 'default'}`,
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: "https://schema.org/WatchAction",
      userInteractionCount: "250"
    },
    author: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: napData.name
    },
    publisher: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: napData.name
    },
    aggregateRating: {
      "@id": `${baseUrl}/#aggregate-rating`
    }
  } : null;

  // Product Schema
  const productSchema = type === 'product' ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${pageData.url}#product`,
    name: pageData.title,
    description: pageData.description,
    category: pageData.category || "SEO Software",
    brand: {
      "@type": "Brand",
      name: "True Rank Digital",
      logo: napData.logo
    },
    manufacturer: {
      "@id": `${baseUrl}/#organization`
    },
    offers: pageData.offers?.map(offer => ({
      "@type": "Offer",
      name: offer.name,
      description: offer.description,
      price: offer.price,
      priceCurrency: offer.currency || "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@id": `${baseUrl}/#organization`
      }
    })) || [],
    aggregateRating: {
      "@id": `${baseUrl}/#aggregate-rating`
    },
    review: pageData.faq?.map((item, index) => ({
      "@type": "Review",
      "@id": `${pageData.url}#review-${index}`,
      reviewBody: item.answer,
      author: {
        "@type": "Person",
        name: "SEO Expert"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      }
    })) || []
  } : null;

  // Service Landing Page Schema (for special offers like Business Starter Pack)
  const serviceLandingSchema = type === 'service-landing' ? {
    "@context": "https://schema.org",
    "@type": ["Service", "Product"],
    "@id": `${pageData.url}#service-landing`,
    name: pageData.title,
    description: pageData.description,
    url: pageData.url,
    category: pageData.category || "Business Services",
    brand: {
      "@type": "Brand",
      name: "True Rank Digital",
      logo: napData.logo
    },
    provider: {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#organization`,
      name: napData.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: napData.address.streetAddress,
        addressLocality: napData.address.addressLocality,
        addressRegion: napData.address.addressRegion,
        postalCode: napData.address.postalCode,
        addressCountry: napData.address.addressCountry
      },
      telephone: napData.telephone,
      email: napData.email
    },
    offers: pageData.offers?.map((offer) => ({
      "@type": "Offer",
      name: offer.name,
      description: offer.description,
      price: offer.price,
      priceCurrency: offer.currency || "USD",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
      url: pageData.url,
      eligibleRegion: {
        "@type": "Country",
        name: "United States"
      },
      itemOffered: {
        "@type": "Service",
        name: offer.name,
        description: offer.description,
        serviceType: "Business Development Package"
      },
      seller: {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#organization`,
        name: napData.name
      }
    })) || [],
    serviceType: "Business Startup Package",
    areaServed: {
      "@type": "Country",
      name: "United States"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "New Business Owners"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "12"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Jessica Perez"
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        reviewBody: "True rank digital isn't a company it's a family they got my business back on track. Constant follow ups they treated me like family god bless y'all"
      }
    ],
    keywords: pageData.keywords?.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageData.url
    },
    potentialAction: [
      {
        "@type": "BuyAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${pageData.url}#get-started`,
          actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"]
        }
      },
      {
        "@type": "ContactAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "tel:+17324750139",
          actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"]
        }
      }
    ]
  } : null;

  // Referral Program Schema
  const referralSchema = type === 'referral-program' ? {
    "@context": "https://schema.org",
    "@type": ["WebPage", "Service"],
    "@id": `${pageData.url}#referral-program`,
    name: pageData.title,
    description: pageData.description,
    url: pageData.url,
    provider: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: napData.name
    },
    serviceType: "Referral Program",
    category: "Affiliate Marketing",
    areaServed: {
      "@type": "Country",
      name: "United States"
    },
    offers: pageData.offers?.map((offer) => ({
      "@type": "Offer",
      name: offer.name,
      description: offer.description,
      price: offer.price,
      priceCurrency: offer.currency || "USD",
      availability: "https://schema.org/InStock",
      validThrough: "2025-12-31",
      eligibleCustomerType: "Referral Partner",
      seller: {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: napData.name
      }
    })) || [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Referral Program Benefits",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Referral Bonus",
          description: "$500 bonus for each successful client referral",
          price: "500",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock"
        }
      ]
    },
    termsOfService: `${pageData.url}#terms`,
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Business Professionals"
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageData.url,
      name: pageData.title,
      description: pageData.description
    },
    potentialAction: {
      "@type": "ApplyAction",
      name: "Apply for Referral Program",
      target: `${pageData.url}#apply`
    }
  } : null;

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageData.url}#breadcrumb`,
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  } : null;

  // WebPage Schema (Universal)
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageData.url}#webpage`,
    name: pageData.title,
    description: pageData.description,
    url: pageData.url,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`
    },
    author: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`
    },
    publisher: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`
    },
    datePublished: pageData.datePublished || "2024-01-01",
    dateModified: pageData.dateModified || new Date().toISOString().split('T')[0],
    keywords: pageData.keywords?.join(", "),
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/pages/${pageData.category || 'default'}.jpg`
    }
  };

  // Combine all applicable schemas
  const schemas = [webPageSchema];

  if (platformToolSchema) schemas.push(platformToolSchema);
  if (serviceSchema) schemas.push(serviceSchema);
  if (serviceLandingSchema) schemas.push(serviceLandingSchema);
  if (educationSchema) schemas.push(educationSchema);
  if (locationSchema) schemas.push(locationSchema);
  if (aboutSchema) schemas.push(aboutSchema);
  if (contactSchema) schemas.push(contactSchema);
  if (referralSchema) schemas.push(referralSchema);
  if (articleSchema) schemas.push(articleSchema);
  if (howToSchema) schemas.push(howToSchema);
  if (videoSchema) schemas.push(videoSchema);
  if (productSchema) schemas.push(productSchema);
  if (breadcrumbSchema) schemas.push(breadcrumbSchema);

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": schemas
  };

  return (
    <Script
      id={`comprehensive-schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaGraph, null, 0)
      }}
    />
  );
}

