'use client';

import Script from 'next/script';

interface SchemaMarkupProps {
  type?: 'organization' | 'local-business' | 'website' | 'person' | 'service';
  pageData?: any;
}

export default function SchemaMarkup({ type = 'organization', pageData }: SchemaMarkupProps) {
  // NAP Data (Name, Address, Phone) - consistent across all schemas
  const napData = {
    name: "True Rank Digital",
    address: {
      streetAddress: "East Brunswick",
      addressLocality: "East Brunswick",
      addressRegion: "NJ",
      postalCode: "08816",
      addressCountry: "US"
    },
    telephone: [
      "+1-732-475-0139",
      "+1-732-215-6319"
    ],
    email: "jon@truerankdigital.com",
    url: "https://truerankdigital.com"
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://truerankdigital.com/#organization",
    name: napData.name,
    legalName: "True Rank Digital LLC",
    url: napData.url,
    logo: "https://truerankdigital.com/images/logo.png",
    description: "Enterprise digital marketing solutions and SEO services helping businesses dominate search rankings with proprietary AI technology and expert automation.",
    foundingDate: "2020",
    founder: {
      "@type": "Person",
      name: "Jon J Korkowski",
      jobTitle: "CEO & Founder",
      description: "Visionary leader driving True Rank Digital's innovation and growth strategy with a full-speed approach to digital marketing excellence."
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: napData.address.streetAddress,
      addressLocality: napData.address.addressLocality,
      addressRegion: napData.address.addressRegion,
      postalCode: napData.address.postalCode,
      addressCountry: napData.address.addressCountry
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: napData.telephone[0],
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English"
      },
      {
        "@type": "ContactPoint", 
        telephone: napData.telephone[1],
        contactType: "sales",
        areaServed: "US",
        availableLanguage: "English"
      }
    ],
    sameAs: [
      "https://www.linkedin.com/company/true-rank-digital",
      "https://www.facebook.com/truerankdigital",
      "https://www.instagram.com/truerankdigital",
      "https://www.youtube.com/c/truerankdigital",
      "https://www.tiktok.com/@truerankdigital",
      "https://www.pinterest.com/truerankdigital"
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "40.4862",
        longitude: "-74.4518"
      },
      geoRadius: "50000"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI-Enhanced Semantic Optimization",
            description: "Proprietary AI engine that creates semantic contextual data and processes it through expert-built indexing API for optimal Google algorithm readability."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service", 
            name: "Expert-Built Script Automation",
            description: "Proprietary scripts leverage AI to enhance and create semantic contextual data, running 24/7 through specialized indexing API."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Local SEO & Google Maps",
            description: "Appear in local searches and attract nearby customers with AI-powered local optimization."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Google Business Profile Management", 
            description: "Stand out with optimized business listings, automated review management, and enhanced local visibility."
          }
        }
      ]
    }
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://truerankdigital.com/#localbusiness",
    name: napData.name,
    image: "https://truerankdigital.com/images/true-rank-digital-office.jpg",
    telephone: napData.telephone[0],
    email: napData.email,
    url: napData.url,
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
      latitude: "40.4862",
      longitude: "-74.4518"
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      opens: "00:00",
      closes: "23:59"
    },
    priceRange: "$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "127"
    }
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://truerankdigital.com/#website",
    name: napData.name,
    url: napData.url,
    description: "Get Your Business Found on Google Fast with AI-enhanced SEO and digital marketing solutions.",
    publisher: {
      "@id": "https://truerankdigital.com/#organization"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://truerankdigital.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Team Members Schema
  const teamMembersSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://truerankdigital.com/team/jon-korkowski",
      name: "Jon J Korkowski",
      jobTitle: "CEO & Founder",
      worksFor: {
        "@id": "https://truerankdigital.com/#organization"
      },
      description: "Visionary leader driving True Rank Digital's innovation and growth strategy. 'This isn't just another agency—it's a full-speed freight train. There are no brakes here, no walls that can't be broken, no mountain too steep. We move fast, we move loud, and we move together.'",
      image: "https://truerankdigital.com/images/team/jon-korkowski.jpg",
      url: "https://truerankdigital.com/team/jon-korkowski"
    },
    {
      "@context": "https://schema.org", 
      "@type": "Person",
      "@id": "https://truerankdigital.com/team/jesse-mathews",
      name: "Jesse Mathews",
      jobTitle: "President",
      worksFor: {
        "@id": "https://truerankdigital.com/#organization"
      },
      description: "Overseeing company operations and strategic development initiatives at True Rank Digital.",
      image: "https://truerankdigital.com/images/team/jesse-mathews.jpg",
      url: "https://truerankdigital.com/team/jesse-mathews"
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://truerankdigital.com/team/jose-perdomo", 
      name: "Jose Perdomo",
      jobTitle: "Executive Vice President",
      worksFor: {
        "@id": "https://truerankdigital.com/#organization"
      },
      description: "Managing key client relationships and driving business growth at True Rank Digital.",
      image: "https://truerankdigital.com/images/team/jose-perdomo.jpg",
      url: "https://truerankdigital.com/team/jose-perdomo",
      sameAs: [
        "https://www.linkedin.com/in/jose-perdomo"
      ]
    }
  ];

  // Reviews Schema
  const reviewsSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Review",
      reviewBody: "True Rank Digital doubled our online leads in 60 days! Easy, straightforward, and effective.",
      author: {
        "@type": "Person",
        name: "Local Auto Shop Owner"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      itemReviewed: {
        "@id": "https://truerankdigital.com/#organization"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Review", 
      reviewBody: "Finally, digital marketing that makes sense for small business. Great results, fair pricing.",
      author: {
        "@type": "Person",
        name: "Restaurant Manager"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5", 
        bestRating: "5"
      },
      itemReviewed: {
        "@id": "https://truerankdigital.com/#organization"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      reviewBody: "They helped us show up on Google Maps. Now customers find us instead of our competitors.",
      author: {
        "@type": "Person",
        name: "Plumbing Contractor"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      itemReviewed: {
        "@id": "https://truerankdigital.com/#organization"
      }
    }
  ];

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What makes True Rank Digital's AI technology different?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our proprietary AI engine creates semantic contextual data and processes it through our expert-built indexing API, ensuring optimal readability and scraping by Google's algorithms for maximum search visibility."
        }
      },
      {
        "@type": "Question",
        name: "How quickly can I see results from your SEO services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many clients see initial improvements within 30-60 days, with significant ranking improvements typically occurring within 3-6 months of implementing our AI-enhanced optimization strategies."
        }
      },
      {
        "@type": "Question", 
        name: "Do you provide 24/7 support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, True Rank Digital provides 24/7 availability for digital services and support. Our expert-built automation scripts run continuously to maintain optimal Google performance standards."
        }
      }
    ]
  };

  // Combine all schemas into a graph
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      localBusinessSchema, 
      websiteSchema,
      faqSchema,
      ...teamMembersSchema,
      ...reviewsSchema
    ]
  };

  return (
    <>
      <Script
        id="schema-markup"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaGraph, null, 0)
        }}
      />
    </>
  );
}
