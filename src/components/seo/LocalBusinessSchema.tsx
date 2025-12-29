'use client';

import Script from 'next/script';

export default function LocalBusinessSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://truerankdigital.com/#localbusiness-enhanced",
    name: "True Rank Digital LLC",
    alternateName: "True Rank Digital",
    description: "Professional SEO and digital marketing services specializing in custom software development, schema markup engineering, and LLM.txt optimization. We build solutions others can't.",
    url: "https://truerankdigital.com",
    telephone: "+1-732-475-0139",
    email: "jon@truerankdigital.com",
    foundingDate: "2020",
    
    // Address and Location (Exact NAP)
    address: {
      "@type": "PostalAddress",
      streetAddress: "East Brunswick",
      addressLocality: "East Brunswick",
      addressRegion: "NJ",
      postalCode: "08816",
      addressCountry: "US"
    },
    
    // Geo Coordinates (6 decimal places for precision)
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.428100",
      longitude: "-74.415700"
    },
    
    // Direct link to Google Maps listing via hasMap property
    hasMap: "https://www.google.com/maps?cid=4662204553635539796",
    
    // Business Details
    priceRange: "$$-$$$",
    paymentAccepted: ["Cash", "Credit Card", "Check", "Invoice", "Digital Payment"],
    currenciesAccepted: "USD",
    
    // Opening Hours - 24/7 Digital Services
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
        description: "24/7 digital services and support available"
      }
    ],
    
    // Service Areas with geoMidpoint for service radius
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: "40.428100",
          longitude: "-74.415700"
        },
        geoRadius: "80467.2",  // 50 miles in meters
        description: "Primary service area within 50 miles of East Brunswick, NJ"
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
    
    // Business Images
    logo: "https://truerankdigital.com/images/logos/trd-logo1.avif",
    image: [
      "https://truerankdigital.com/images/logos/trdlogoblue.webp",
      "https://truerankdigital.com/images/logos/trd-logo1.avif"
    ],
    
    // Reviews and Ratings
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "12",
      reviewCount: "12"
    },
    
    // Featured Review
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        author: {
          "@type": "Person",
          name: "Sebastian Vargas"
        },
        reviewBody: "True Rank Digital has been instrumental in boosting our lead generation and brand awareness. Their team, especially Jon Karkowski and Jose, are professional, knowledgeable, and always on top of things. Highly recommend for businesses looking to grow!",
        datePublished: "2024"
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        author: {
          "@type": "Person", 
          name: "Jeffrey Fraley"
        },
        reviewBody: "I've been in cars sales for over 17 years. Had a lot of vendors. John and his team at truerank are one of the only seo and gbp vendors that actually showed progress and are on point with there work.",
        datePublished: "2024"
      }
    ],
    
    // Services Offered
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SEO & Digital Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Local SEO Services",
            description: "Professional local search optimization to help businesses appear in local Google searches and Google Maps.",
            serviceType: "Local SEO"
          },
          price: "Contact for pricing",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Google Business Profile Management",
            description: "Complete Google Business Profile optimization including listing management, review management, and local visibility enhancement.",
            serviceType: "Google Business Profile"
          },
          price: "Contact for pricing", 
          priceCurrency: "USD",
          availability: "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Schema Markup Engineering",
            description: "Custom structured data implementation and schema markup engineering services for enhanced search visibility.",
            serviceType: "Technical SEO"
          },
          price: "Contact for pricing",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "LLM.txt Optimization",
            description: "Advanced LLM.txt file creation and optimization for AI search engines like ChatGPT, Claude, and Perplexity.",
            serviceType: "AI SEO"
          },
          price: "Contact for pricing",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock"
        }
      ]
    },
    
    // Contact Information
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-732-475-0139",
      email: "jon@truerankdigital.com",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59"
      }
    },
    
    // Social Media Profiles and Entity Links (sameAs for brand consolidation)
    sameAs: [
      "https://www.google.com/maps?cid=4662204553635539796",  // Google Business Profile
      "https://www.facebook.com/truerankdigital",  // Facebook
      "https://www.linkedin.com/company/true-rank-digital",  // LinkedIn
      "https://www.wikidata.org/wiki/Q130284854",  // Wikidata entry
      "https://www.instagram.com/truerankdigital_/?hl=en",
      "https://www.youtube.com/channel/UC9wb8G1oROv_iUIDRL7JIWA",
      "https://www.tiktok.com/@truerankdigital_",
      "https://www.pinterest.com/truerankdigital"
    ],
    
    // Business Specialties
    knowsAbout: [
      "Local SEO",
      "Google Business Profile Optimization",
      "Schema Markup Engineering", 
      "LLM.txt Creation",
      "Technical SEO",
      "Custom Software Development",
      "AI Search Optimization",
      "Digital Marketing Strategy",
      "Search Engine Optimization",
      "Website Development"
    ],
    
    // Industry Classifications
    naics: "541613", // Marketing Consulting Services
    isicV4: "7310", // Advertising activities
    
    // Business Actions
    potentialAction: [
      {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://truerankdigital.com/contact",
          actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"]
        },
        result: {
          "@type": "Reservation",
          name: "SEO Consultation"
        }
      },
      {
        "@type": "OrderAction",
        target: {
          "@type": "EntryPoint", 
          urlTemplate: "https://truerankdigital.com/free-audit",
          actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"]
        },
        result: {
          "@type": "Order",
          name: "Free SEO Audit"
        }
      }
    ]
  };

  return (
    <Script
      id="enhanced-local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema, null, 0)
      }}
    />
  );
}
