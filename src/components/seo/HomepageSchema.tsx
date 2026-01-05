'use client';

import Script from 'next/script';

interface HomepageSchemaProps {
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export default function HomepageSchema({ faqs = [] }: HomepageSchemaProps) {
  const baseUrl = 'https://truerankdigital.com';
  const organizationId = `${baseUrl}/#organization`;
  const websiteId = `${baseUrl}/#website`;
  const webpageId = `${baseUrl}#webpage`;
  
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
    logo: `${baseUrl}/images/logos/trd-logo1.avif`,
    image: `${baseUrl}/images/logos/trdlogoblue.webp`
  };

  // Organization Schema (Full Definition)
  const organizationSchema = {
    "@type": ["Organization", "LocalBusiness"],
    "@id": organizationId,
    name: napData.name,
    legalName: napData.legalName,
    alternateName: "True Rank Digital",
    url: napData.url,
    logo: {
      "@type": "ImageObject",
      "@id": `${baseUrl}/#logo`,
      url: napData.logo,
      contentUrl: napData.logo,
      caption: "True Rank Digital Logo",
      width: "1200",
      height: "630"
    },
    image: {
      "@id": `${baseUrl}/#logo`
    },
    description: "Professional Google Business Optimization and digital marketing services with custom in-house technology. We build proprietary software solutions including schema markup engineering, LLM.txt optimization, and problem detection systems that competitors don't offer.",
    foundingDate: "2020",
    slogan: "Get Your Business Found on Google—Fast!",
    founder: {
      "@type": "Person",
      name: "Jon Korkowski",
      jobTitle: "Founder & CEO",
      email: napData.email
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: napData.address.streetAddress,
      addressLocality: napData.address.addressLocality,
      addressRegion: napData.address.addressRegion,
      postalCode: napData.address.postalCode,
      addressCountry: napData.address.addressCountry
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.428100",
      longitude: "-74.415700"
    },
    hasMap: "https://www.google.com/maps?cid=4662204553635539796",
    telephone: napData.telephone,
    email: napData.email,
    priceRange: "$$-$$$",
    paymentAccepted: ["Cash", "Credit Card", "Check", "Invoice", "Digital Payment"],
    currenciesAccepted: "USD",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
      description: "24/7 digital services and support available"
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
    contactPoint: {
      "@type": "ContactPoint",
      telephone: napData.telephone,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English"
    },
    knowsAbout: [
      "Google Business Optimization",
      "Local Pack Domination",
      "Local SEO",
      "Google Business Profile Optimization",
      "Schema Markup Engineering",
      "LLM.txt Creation",
      "Technical SEO",
      "Digital Marketing",
      "Website Development",
      "Custom Software Development"
    ],
    numberOfEmployees: "3-10",
    naics: "541613",
    hasOfferCatalog: {
      "@id": `${baseUrl}/#service-catalog`
    },
    aggregateRating: {
      "@id": `${baseUrl}/#aggregate-rating`
    }
  };

  // Website Schema
  const websiteSchema = {
    "@type": "WebSite",
    "@id": websiteId,
    name: napData.name,
    url: napData.url,
    description: "Professional Google Business Optimization and digital marketing services with proprietary dashboard platform, grid map ranking analysis, and local pack domination strategies.",
    publisher: {
      "@id": organizationId
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // WebPage Schema (with proper publisher reference)
  const webpageSchema = {
    "@type": "WebPage",
    "@id": webpageId,
    name: "True Rank Digital - Google Business Optimization & Local Pack Domination",
    description: "True Rank Digital delivers Google Business Optimization services with proprietary dashboard platform, grid map ranking analysis, and local pack domination strategies for businesses in East Brunswick, NJ and nationwide.",
    url: baseUrl,
    inLanguage: "en-US",
    isPartOf: {
      "@id": websiteId
    },
    about: {
      "@id": organizationId
    },
    mainEntity: {
      "@id": organizationId
    },
    publisher: {
      "@id": organizationId
    },
    author: {
      "@id": organizationId
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: napData.image,
      contentUrl: napData.image
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split('T')[0],
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".hero-content", "article p"]
    }
  };

  // Service Catalog (OfferCatalog)
  const serviceCatalogSchema = {
    "@type": "OfferCatalog",
    "@id": `${baseUrl}/#service-catalog`,
    name: "Professional Google Business Optimization & Digital Marketing Services",
    description: "Comprehensive suite of Google Business Optimization services including local pack domination, Google Business Profile management, AI search optimization, and custom website development.",
    itemListElement: [
      {
        "@type": "Offer",
        "@id": `${baseUrl}/services/local-seo#offer`,
        itemOffered: {
          "@type": "Service",
          "@id": `${baseUrl}/services/local-seo`,
          name: "Local Pack Domination & Google Maps Optimization",
          description: "Dominate the local pack with proprietary dashboard featuring grid map ranking verification, competitor intelligence monitoring, and automated Google knowledge graph consistency tracking.",
          provider: {
            "@id": organizationId
          },
          serviceType: "Local Pack Domination",
          areaServed: {
            "@type": "Country",
            name: "United States"
          }
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "Custom Pricing",
          priceCurrency: "USD"
        },
        availability: "https://schema.org/InStock",
        seller: {
          "@id": organizationId
        }
      },
      {
        "@type": "Offer",
        "@id": `${baseUrl}/services/google-business-profile#offer`,
        itemOffered: {
          "@type": "Service",
          "@id": `${baseUrl}/services/google-business-profile`,
          name: "Google Business Profile Optimization",
          description: "Comprehensive Google Business Profile management with advanced optimization tools and automated consistency monitoring systems.",
          provider: {
            "@id": organizationId
          },
          serviceType: "Business Listing Management",
          areaServed: {
            "@type": "Country",
            name: "United States"
          }
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "Custom Pricing",
          priceCurrency: "USD"
        },
        availability: "https://schema.org/InStock",
        seller: {
          "@id": organizationId
        }
      },
      {
        "@type": "Offer",
        "@id": `${baseUrl}/services/ai-seo#offer`,
        itemOffered: {
          "@type": "Service",
          "@id": `${baseUrl}/services/ai-seo`,
          name: "AI Search Optimization",
          description: "Revolutionary custom algorithm adaptation scripts that automatically adjust to Google algorithm changes, maintaining peak Google visibility.",
          provider: {
            "@id": organizationId
          },
          serviceType: "AI Search Optimization",
          areaServed: {
            "@type": "Country",
            name: "United States"
          }
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "Custom Pricing",
          priceCurrency: "USD"
        },
        availability: "https://schema.org/InStock",
        seller: {
          "@id": organizationId
        }
      },
      {
        "@type": "Offer",
        "@id": `${baseUrl}/services/website-development#offer`,
        itemOffered: {
          "@type": "Service",
          "@id": `${baseUrl}/services/website-development`,
          name: "Custom Web Development",
          description: "Google-optimized websites with advanced proprietary script integration capabilities.",
          provider: {
            "@id": organizationId
          },
          serviceType: "Web Development",
          areaServed: {
            "@type": "Country",
            name: "United States"
          }
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "Custom Pricing",
          priceCurrency: "USD"
        },
        availability: "https://schema.org/InStock",
        seller: {
          "@id": organizationId
        }
      },
      {
        "@type": "Offer",
        "@id": `${baseUrl}/services/digital-marketing#offer`,
        itemOffered: {
          "@type": "Service",
          "@id": `${baseUrl}/services/digital-marketing`,
          name: "Digital Marketing Campaign Management",
          description: "Strategic digital marketing campaigns powered by dashboard platform with real-time tracking.",
          provider: {
            "@id": organizationId
          },
          serviceType: "Digital Marketing",
          areaServed: {
            "@type": "Country",
            name: "United States"
          }
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "Custom Pricing",
          priceCurrency: "USD"
        },
        availability: "https://schema.org/InStock",
        seller: {
          "@id": organizationId
        }
      }
    ]
  };

  // Aggregate Rating
  const aggregateRatingSchema = {
    "@type": "AggregateRating",
    "@id": `${baseUrl}/#aggregate-rating`,
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "12",
    reviewCount: "12"
  };

  // Reviews
  const reviewsSchema = [
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/sebastian-vargas`,
      reviewBody: "True Rank Digital has been instrumental in boosting our lead generation and brand awareness. Their team, especially Jon Korkowski and Jose, are professional, knowledgeable, and always on top of things. Highly recommend for businesses looking to grow!",
      author: {
        "@type": "Person",
        name: "Sebastian Vargas"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-01-15",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/jeffrey-fraley`,
      reviewBody: "I've been in cars sales for over 17 years. Had a lot of vendors. John and his team at truerank are one of the only seo and gbp vendors that actually showed progress and are on point with there work.",
      author: {
        "@type": "Person",
        name: "Jeffrey Fraley"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-02-20",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/estrella-rojas`,
      reviewBody: "Jose was great to work with! He really understood what my business needed and helped get it on the right track. Thanks to his expertise, our online presence improved, and we saw real results. I highly recommend him and his team!",
      author: {
        "@type": "Person",
        name: "Estrella Rojas"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-03-10",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/jessica-perez`,
      reviewBody: "True rank digital isn't a company it's a family they got my business back on track. Constant follow ups they treated me like family god bless y'all",
      author: {
        "@type": "Person",
        name: "Jessica Perez"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-04-05",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/jose-perdomo`,
      reviewBody: "They increased my business profit by increasing traffic and leads within 30 days @ half the price I was paying for before. Very knowledgeable people",
      author: {
        "@type": "Person",
        name: "Jose Perdomo"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-05-12",
      itemReviewed: {
        "@id": organizationId
      }
    }
  ];

  // Team Members
  const teamMembersSchema = [
    {
      "@type": "Person",
      "@id": `${baseUrl}/staff/jon-korkowski`,
      name: "Jon J Korkowski",
      jobTitle: "CEO & Founder",
      worksFor: {
        "@id": organizationId
      },
      email: napData.email,
      url: `${baseUrl}/staff`,
      sameAs: [
        "https://www.linkedin.com/in/jon-korkowski"
      ]
    },
    {
      "@type": "Person",
      "@id": `${baseUrl}/staff/jesse-mathews`,
      name: "Jesse Mathews",
      jobTitle: "Business Developer Director",
      worksFor: {
        "@id": organizationId
      },
      url: `${baseUrl}/staff`
    },
    {
      "@type": "Person",
      "@id": `${baseUrl}/staff/jose-perdomo`,
      name: "Jose Perdomo",
      jobTitle: "Executive Vice President",
      worksFor: {
        "@id": organizationId
      },
      url: `${baseUrl}/staff`
    },
    {
      "@type": "Person",
      "@id": `${baseUrl}/staff/matt-bishop`,
      name: "Matt Bishop",
      jobTitle: "Tech Developer",
      worksFor: {
        "@id": organizationId
      },
      url: `${baseUrl}/staff`
    },
    {
      "@type": "Person",
      "@id": `${baseUrl}/staff/sean-oneil`,
      name: "Sean O'Niel",
      jobTitle: "SEO Specialist",
      worksFor: {
        "@id": organizationId
      },
      url: `${baseUrl}/staff`
    },
    {
      "@type": "Person",
      "@id": `${baseUrl}/staff/sebastian-vargas`,
      name: "Sebastian Vargas",
      jobTitle: "Sales Director",
      worksFor: {
        "@id": organizationId
      },
      url: `${baseUrl}/staff`
    }
  ];

  // FAQ Schema (if provided) - Create separate Question entities for better detection
  const faqEntities = faqs.length > 0 ? faqs.flatMap((faq, index) => [
    {
      "@type": "Question",
      "@id": `${baseUrl}#faq-question-${index + 1}`,
      name: faq.question,
      text: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        "@id": `${baseUrl}#faq-answer-${index + 1}`,
        text: faq.answer,
        inLanguage: "en-US",
        author: {
          "@id": organizationId
        }
      },
      author: {
        "@id": organizationId
      }
    }
  ]) : [];

  const faqPageSchema = faqs.length > 0 ? {
    "@type": "FAQPage",
    "@id": `${baseUrl}#faqpage`,
    mainEntity: faqs.map((_, index) => ({
      "@id": `${baseUrl}#faq-question-${index + 1}`
    }))
  } : null;

  // Combine all schemas into one comprehensive @graph
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      webpageSchema,
      serviceCatalogSchema,
      aggregateRatingSchema,
      ...reviewsSchema,
      ...teamMembersSchema,
      ...faqEntities,
      ...(faqPageSchema ? [faqPageSchema] : [])
    ]
  };

  return (
    <Script
      id="homepage-schema-graph"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaGraph, null, 0)
      }}
    />
  );
}
