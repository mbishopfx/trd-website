'use client';

import Script from 'next/script';

interface SchemaMarkupProps {
  type?: 'organization' | 'local-business' | 'website' | 'person' | 'service' | 'breadcrumb' | 'comprehensive';
  pageData?: Record<string, unknown>;
  breadcrumbs?: Array<{name: string; url: string}>;
  includeAllSchemas?: boolean;
}

export default function SchemaMarkup({ type = 'organization', breadcrumbs, includeAllSchemas = false }: SchemaMarkupProps) {
  // NAP Data (Name, Address, Phone) - consistent across all schemas
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
    telephone: [
      "+1-732-475-0139",
      "+1-732-215-6319"
    ],
    email: "jon@truerankdigital.com",
    url: "https://truerankdigital.com",
    logo: "https://truerankdigital.com/images/logos/trd-logo1.avif",
    image: "https://truerankdigital.com/images/logos/trdlogoblue.webp"
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": "https://truerankdigital.com/#organization",
    name: napData.name,
    legalName: napData.legalName,
    alternateName: "True Rank Digital",
    url: napData.url,
    logo: napData.logo,
    image: napData.image,
    description: "Professional SEO and digital marketing services with custom in-house technology. We build proprietary software solutions including schema markup engineering, LLM.txt optimization, and problem detection systems that competitors don't offer.",
    foundingDate: "2020",
    slogan: "Built by True Rank Digital - Custom Tech Solutions for SEO Success",
    keywords: "SEO, Digital Marketing, Schema Markup, LLM.txt, Local SEO, Google Business Profile, AI SEO, Custom Software Development",
    founder: {
      "@type": "Person",
      name: "Jon Karkowski",
      jobTitle: "Founder",
      description: "Founder of True Rank Digital, leading custom software development for SEO and digital marketing solutions."
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
    serviceArea: [
      {
        "@type": "Country",
        name: "United States"
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
      }
    ],
    hasOfferCatalog: {
      "@id": "https://truerankdigital.com/#service-catalog"
    },
    aggregateRating: {
      "@id": "https://truerankdigital.com/#aggregate-rating"
    },
    numberOfEmployees: "3-10",
    knowsAbout: [
      "Search Engine Optimization",
      "Local SEO",
      "Google Business Profile Optimization", 
      "Schema Markup Engineering",
      "LLM.txt Creation",
      "Technical SEO",
      "Digital Marketing",
      "Website Development",
      "Custom Software Development"
    ],
    areaServed: {
      "@type": "Country",
      name: "United States"
    }
  };

  // Local Business Schema with Real Data
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://truerankdigital.com/#localbusiness",
    name: napData.name,
    image: napData.image,
    telephone: napData.telephone,
    email: napData.email,
    url: napData.url,
    description: "Professional SEO and digital marketing services with custom in-house technology solutions.",
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
      closes: "23:59",
      description: "24/7 availability for digital services and support"
    },
    priceRange: "$$-$$$",
    paymentAccepted: ["Cash", "Credit Card", "Check", "Invoice"],
    currenciesAccepted: "USD",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "12"
    },
    review: {
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
      reviewBody: "True Rank Digital has been instrumental in boosting our lead generation and brand awareness. Their team, especially Jon Karkowski and Jose, are professional, knowledgeable, and always on top of things. Highly recommend for businesses looking to grow!"
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

  // Team Members Schema (Real Team)
  const teamMembersSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://truerankdigital.com/staff/jon-korkowski",
      name: "Jon J Korkowski",
      jobTitle: "CEO & Founder",
      worksFor: {
        "@id": "https://truerankdigital.com/#organization"
      },
      description: "Founder and CEO leading True Rank Digital's vision and strategy for digital marketing excellence and proprietary SEO technology development.",
      email: "jon@truerankdigital.com",
      url: "https://truerankdigital.com/staff",
      knowsAbout: [
        "Business Strategy",
        "Client Relations", 
        "SEO Leadership",
        "Digital Marketing Strategy"
      ],
      sameAs: [
        "https://www.linkedin.com/in/jon-korkowski"
      ]
    },
    {
      "@context": "https://schema.org", 
      "@type": "Person",
      "@id": "https://truerankdigital.com/staff/jesse-mathews",
      name: "Jesse Mathews",
      jobTitle: "President",
      worksFor: {
        "@id": "https://truerankdigital.com/#organization"
      },
      description: "President overseeing operations and ensuring quality service delivery for all True Rank Digital clients.",
      email: "jesse@truerankdigital.com",
      url: "https://truerankdigital.com/staff",
      knowsAbout: [
        "Operations",
        "Team Leadership",
        "Quality Management",
        "Client Services"
      ],
      sameAs: [
        "https://www.linkedin.com/in/jesse-mathews"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://truerankdigital.com/staff/jose-perdomo", 
      name: "Jose Perdomo",
      jobTitle: "Executive Vice President",
      worksFor: {
        "@id": "https://truerankdigital.com/#organization"
      },
      description: "Executive Vice President focused on strategic growth and business development for True Rank Digital's expansion.",
      email: "jose@truerankdigital.com",
      url: "https://truerankdigital.com/staff",
      knowsAbout: [
        "Strategic Planning",
        "Business Development",
        "Market Expansion",
        "Sales Strategy"
      ],
      sameAs: [
        "https://www.linkedin.com/in/jose-perdomo"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://truerankdigital.com/staff/matt-bishop",
      name: "Matt Bishop",
      jobTitle: "Tech Developer",
      worksFor: {
        "@id": "https://truerankdigital.com/#organization"
      },
      description: "Technical developer handling website development and technical implementation for client projects using True Rank Digital's proprietary technology stack.",
      email: "bishop@truerankdigital.com",
      url: "https://truerankdigital.com/staff",
      knowsAbout: [
        "Web Development",
        "Technical Implementation", 
        "Website Optimization",
        "Custom Software Development"
      ],
      sameAs: [
        "https://www.linkedin.com/in/matt-bishop"
      ]
    },
    {
      "@context": "https://schema.org", 
      "@type": "Person",
      "@id": "https://truerankdigital.com/staff/sean-oniel",
      name: "Sean O'Niel",
      jobTitle: "SEO Specialist",
      worksFor: {
        "@id": "https://truerankdigital.com/#organization"
      },
      description: "SEO specialist focused on optimization strategies and search engine performance for True Rank Digital's client campaigns.",
      email: "sean@truerankdigital.com",
      url: "https://truerankdigital.com/staff",
      knowsAbout: [
        "SEO Optimization",
        "Search Strategy",
        "Performance Analysis",
        "Local SEO"
      ],
      sameAs: [
        "https://www.linkedin.com/in/sean-oniel"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://truerankdigital.com/staff/sebastian-vargas", 
      name: "Sebastian Vargas",
      jobTitle: "SEO Specialist",
      worksFor: {
        "@id": "https://truerankdigital.com/#organization"
      },
      description: "SEO specialist working on search optimization and digital marketing campaigns with focus on technical SEO implementations.",
      email: "sebastian@truerankdigital.com",
      url: "https://truerankdigital.com/staff",
      knowsAbout: [
        "SEO Optimization",
        "Digital Marketing",
        "Search Analysis",
        "Technical SEO"
      ],
      sameAs: [
        "https://www.linkedin.com/in/sebastian-vargas"
      ]
    }
  ];

  // Reviews Schema with Authentic Google Reviews
  const reviewsSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "@id": "https://truerankdigital.com/reviews/sebastian-vargas",
      reviewBody: "True Rank Digital has been instrumental in boosting our lead generation and brand awareness. Their team, especially Jon Karkowski and Jose, are professional, knowledgeable, and always on top of things. Highly recommend for businesses looking to grow!",
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
      datePublished: "2024",
      itemReviewed: {
        "@id": "https://truerankdigital.com/#organization"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "@id": "https://truerankdigital.com/reviews/jeffrey-fraley",
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
      datePublished: "2024",
      itemReviewed: {
        "@id": "https://truerankdigital.com/#organization"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "@id": "https://truerankdigital.com/reviews/estrella-rojas",
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
      datePublished: "2024",
      itemReviewed: {
        "@id": "https://truerankdigital.com/#organization"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "@id": "https://truerankdigital.com/reviews/jessica-perez",
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
      datePublished: "2024",
      itemReviewed: {
        "@id": "https://truerankdigital.com/#organization"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "@id": "https://truerankdigital.com/reviews/jose-perdomo", 
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
      datePublished: "2024",
      itemReviewed: {
        "@id": "https://truerankdigital.com/#organization"
      }
    }
  ];

  // FAQ Schema with Real Service Information
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://truerankdigital.com/#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "What makes True Rank Digital different from other SEO companies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We build custom software solutions in-house. While other agencies use off-the-shelf tools, we create proprietary technology including custom schema markup engineering, LLM.txt optimization files, and problem detection systems that find SEO issues other companies completely miss."
        }
      },
      {
        "@type": "Question",
        name: "What is schema markup engineering?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Schema markup engineering is our process of creating custom structured data schemas for each business type. We hand-craft schema markup that helps search engines understand your content better than any competitor, leading to improved search visibility and rich snippets."
        }
      },
      {
        "@type": "Question",
        name: "What is LLM.txt and why do I need it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LLM.txt is a cutting-edge optimization technique we pioneered specifically for AI search engines like ChatGPT, Claude, and Perplexity. We create and optimize these files to help your content rank in AI-powered search results, giving you a competitive advantage that most businesses don't have."
        }
      },
      {
        "@type": "Question",
        name: "Do you provide 24/7 support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, True Rank Digital provides 24/7 availability for our services. We understand that digital marketing never sleeps, and our custom software solutions monitor and optimize your online presence around the clock."
        }
      },
      {
        "@type": "Question",
        name: "How do you find problems other SEO companies miss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our proprietary problem detection software scans websites at the code level to identify SEO issues that standard auditing tools overlook. When we find problems, we don't just report them – we build custom solutions to fix them permanently."
        }
      }
    ]
  };

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://truerankdigital.com/#breadcrumb",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  } : null;

  // HowTo Schema for SEO Process
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": "https://truerankdigital.com/#howto-seo-process",
    name: "How True Rank Digital Improves Your SEO Rankings",
    description: "Our proven process for improving search engine rankings using custom software and advanced SEO techniques.",
    totalTime: "PT90D",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "1000"
    },
    supply: [
      {
        "@type": "HowToSupply",
        name: "Website Access"
      },
      {
        "@type": "HowToSupply", 
        name: "Google Analytics Account"
      },
      {
        "@type": "HowToSupply",
        name: "Google Search Console Access"
      }
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "Custom Schema Markup Engineering Software"
      },
      {
        "@type": "HowToTool",
        name: "LLM.txt Optimization Tools"
      },
      {
        "@type": "HowToTool",
        name: "Proprietary Problem Detection System"
      }
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Technical SEO Audit",
        text: "We scan your website with our proprietary problem detection software to find issues other SEO companies miss at the code level.",
        image: "https://truerankdigital.com/images/process/technical-audit.jpg"
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Custom Schema Markup Engineering",
        text: "We create hand-crafted structured data schemas specifically for your business type to help search engines understand your content better than competitors.",
        image: "https://truerankdigital.com/images/process/schema-markup.jpg"
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "LLM.txt Creation & Optimization",
        text: "We develop and optimize LLM.txt files designed for AI search engines like ChatGPT, Claude, and Perplexity to improve your AI search visibility.",
        image: "https://truerankdigital.com/images/process/llm-optimization.jpg"
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Custom Solution Implementation",
        text: "We build and implement custom software solutions to fix identified problems and optimize your website's search engine performance.",
        image: "https://truerankdigital.com/images/process/custom-solutions.jpg"
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Ongoing Monitoring & Optimization",
        text: "Our custom software continuously monitors and optimizes your website's performance, making real-time adjustments for maximum search visibility.",
        image: "https://truerankdigital.com/images/process/ongoing-monitoring.jpg"
      }
    ]
  };

  // Professional Service Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://truerankdigital.com/#professional-service",
    name: napData.name,
    alternateName: "True Rank Digital",
    description: "Professional SEO and digital marketing services specializing in custom software development, schema markup engineering, and LLM.txt optimization for superior search engine visibility.",
    url: napData.url,
    telephone: napData.telephone,
    email: napData.email,
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
    priceRange: "$$-$$$",
    openingHours: "Mo-Su 00:00-23:59",
    areaOfExpertise: [
      "Search Engine Optimization",
      "Digital Marketing",
      "Schema Markup Engineering",
      "Custom Software Development",
      "Technical SEO"
    ],
    areaServed: {
      "@type": "Country",
      name: "United States"
    },
    providerMobility: "https://schema.org/StaticService",
    serviceOutput: "Improved search engine rankings and online visibility",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "12"
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://truerankdigital.com/#webpage"
    }
  };

  // Software Application Schema for Custom Tools
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://truerankdigital.com/#custom-seo-software",
    name: "True Rank Digital Custom SEO Software Suite",
    description: "Proprietary software suite including schema markup engineering tools, LLM.txt optimization systems, and problem detection software for advanced SEO implementations.",
    applicationCategory: "SEO Software",
    operatingSystem: "Web-based",
    offers: {
      "@type": "Offer",
      price: "Custom Pricing",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@id": "https://truerankdigital.com/#organization"
      }
    },
    creator: {
      "@id": "https://truerankdigital.com/#organization"
    },
    publisher: {
      "@id": "https://truerankdigital.com/#organization"
    },
    softwareHelp: {
      "@type": "CreativeWork",
      url: "https://truerankdigital.com/learn-aio"
    },
    featureList: [
      "Custom Schema Markup Engineering",
      "LLM.txt Creation and Optimization",
      "Proprietary Problem Detection",
      "AI Search Engine Optimization",
      "Technical SEO Automation",
      "Real-time Performance Monitoring"
    ]
  };

  // Enhanced Service Catalog with all services
  const enhancedServiceCatalog = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": "https://truerankdigital.com/#service-catalog",
    name: "Professional SEO & Digital Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        "@id": "https://truerankdigital.com/services/local-seo#offer",
        itemOffered: {
          "@type": "Service",
          "@id": "https://truerankdigital.com/services/local-seo",
          name: "Local SEO & Google Maps Optimization",
          description: "Comprehensive local search optimization including Google Maps optimization, local keyword targeting, citation building, review management, and local content strategy with grid map ranking analysis.",
          provider: {
            "@id": "https://truerankdigital.com/#organization"
          },
          serviceType: "Local SEO",
          category: "Search Engine Optimization",
          areaServed: [
            { "@type": "Country", name: "United States" },
            { "@type": "State", name: "New Jersey" },
            { "@type": "State", name: "New York" },
            { "@type": "State", name: "Pennsylvania" }
          ]
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "Custom Pricing",
          priceCurrency: "USD",
          valueAddedTaxIncluded: false
        },
        availability: "https://schema.org/InStock",
        seller: { "@id": "https://truerankdigital.com/#organization" }
      },
      {
        "@type": "Offer",
        "@id": "https://truerankdigital.com/services/google-business-profile#offer",
        itemOffered: {
          "@type": "Service",
          "@id": "https://truerankdigital.com/services/google-business-profile",
          name: "Google Business Profile Management",
          description: "Complete Google Business Profile optimization and management services including listing optimization, review management, local visibility enhancement, and automated consistency monitoring.",
          provider: {
            "@id": "https://truerankdigital.com/#organization"
          },
          serviceType: "Digital Marketing",
          category: "Google Business Profile"
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "Custom Pricing",
          priceCurrency: "USD"
        },
        availability: "https://schema.org/InStock",
        seller: { "@id": "https://truerankdigital.com/#organization" }
      },
      {
        "@type": "Offer",
        "@id": "https://truerankdigital.com/services/ai-seo#offer",
        itemOffered: {
          "@type": "Service",
          "@id": "https://truerankdigital.com/services/ai-seo",
          name: "AI-Enhanced SEO with Algorithm Adaptation Scripts",
          description: "Revolutionary custom algorithm adaptation scripts and proprietary solution building frameworks that automatically adjust to Google algorithm changes, maintaining peak search engine performance.",
          provider: {
            "@id": "https://truerankdigital.com/#organization"
          },
          serviceType: "Technical SEO",
          category: "AI SEO"
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "Custom Pricing",
          priceCurrency: "USD"
        },
        availability: "https://schema.org/InStock",
        seller: { "@id": "https://truerankdigital.com/#organization" }
      },
      {
        "@type": "Offer",
        "@id": "https://truerankdigital.com/services/website-development#offer",
        itemOffered: {
          "@type": "Service",
          "@id": "https://truerankdigital.com/services/website-development",
          name: "Custom Web Development with Enhanced Script Integration",
          description: "SEO-optimized websites designed for conversion with advanced proprietary script integration capabilities that unlock enhanced algorithm manipulation tools and deeper optimization control.",
          provider: {
            "@id": "https://truerankdigital.com/#organization"
          },
          serviceType: "Web Development",
          category: "Website Development"
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "Custom Pricing",
          priceCurrency: "USD"
        },
        availability: "https://schema.org/InStock",
        seller: { "@id": "https://truerankdigital.com/#organization" }
      },
      {
        "@type": "Offer",
        "@id": "https://truerankdigital.com/services/ecommerce-optimization#offer",
        itemOffered: {
          "@type": "Service",
          "@id": "https://truerankdigital.com/services/ecommerce-optimization",
          name: "E-commerce Optimization & Competitor Analysis Platform",
          description: "Scale your online store with comprehensive competitor analysis tools, keyword search volume research, and automated optimization strategies integrated with our proprietary dashboard platform.",
          provider: {
            "@id": "https://truerankdigital.com/#organization"
          },
          serviceType: "E-commerce SEO",
          category: "E-commerce"
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "Custom Pricing",
          priceCurrency: "USD"
        },
        availability: "https://schema.org/InStock",
        seller: { "@id": "https://truerankdigital.com/#organization" }
      },
      {
        "@type": "Offer",
        "@id": "https://truerankdigital.com/services/digital-marketing#offer",
        itemOffered: {
          "@type": "Service",
          "@id": "https://truerankdigital.com/services/digital-marketing",
          name: "Comprehensive Digital Marketing Campaign Management",
          description: "Strategic digital marketing campaigns powered by our SEO dashboard platform featuring real-time performance tracking, organic search traffic generation tools, and proven Google optimization tactics.",
          provider: {
            "@id": "https://truerankdigital.com/#organization"
          },
          serviceType: "Digital Marketing",
          category: "Marketing"
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "Custom Pricing",
          priceCurrency: "USD"
        },
        availability: "https://schema.org/InStock",
        seller: { "@id": "https://truerankdigital.com/#organization" }
      }
    ]
  };

  // Enhanced Reviews with more detailed structured data
  const enhancedReviewsSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "@id": "https://truerankdigital.com/reviews/sebastian-vargas",
      reviewBody: "True Rank Digital has been instrumental in boosting our lead generation and brand awareness. Their team, especially Jon Karkowski and Jose, are professional, knowledgeable, and always on top of things. Highly recommend for businesses looking to grow!",
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
        "@id": "https://truerankdigital.com/#organization"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "@id": "https://truerankdigital.com/reviews/jeffrey-fraley",
      reviewBody: "I've been in car sales for over 17 years. Had a lot of vendors. John and his team at truerank are one of the only seo and gbp vendors that actually showed progress and are on point with their work.",
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
        "@id": "https://truerankdigital.com/#organization"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "@id": "https://truerankdigital.com/reviews/estrella-rojas",
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
        "@id": "https://truerankdigital.com/#organization"
      }
    }
  ];

  // Enhanced Aggregate Rating
  const aggregateRating = {
    "@type": "AggregateRating",
    "@id": "https://truerankdigital.com/#aggregate-rating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "12",
    reviewCount: "12"
  };

  // Speakable markup for voice search optimization
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://truerankdigital.com/#speakable",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".hero-content h1", ".hero-content p", ".mission-section h2", ".mission-section p"]
    }
  };

  // Article schema for educational content
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://truerankdigital.com/#main-article",
    headline: "Professional SEO & Digital Marketing Services",
    description: "Get your business found on Google with True Rank Digital's custom SEO software, schema markup engineering, and LLM.txt optimization services.",
    articleSection: "Digital Marketing",
    keywords: "SEO, Local SEO, Digital Marketing, Google Business Profile, AI SEO, Schema Markup, LLM.txt",
    author: {
      "@id": "https://truerankdigital.com/#organization"
    },
    publisher: {
      "@id": "https://truerankdigital.com/#organization"
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split('T')[0],
    mainEntityOfPage: {
      "@id": "https://truerankdigital.com/#webpage"
    },
    about: [
      {
        "@type": "Thing",
        name: "Search Engine Optimization",
        description: "Professional SEO services to improve search rankings"
      },
      {
        "@type": "Thing",
        name: "Digital Marketing",
        description: "Comprehensive digital marketing strategies and solutions"
      }
    ]
  };

  // Video schema for promotional content (if applicable)
  const videoSchema = {
    "@type": "VideoObject",
    "@id": "https://truerankdigital.com/#promotional-video",
    name: "True Rank Digital - Professional SEO Services",
    description: "Learn how True Rank Digital helps businesses dominate local search results with proprietary SEO technology and custom software solutions.",
    thumbnailUrl: "https://truerankdigital.com/images/video-thumbnail.jpg",
    uploadDate: "2024-01-01",
    duration: "PT2M30S",
    contentUrl: "https://truerankdigital.com/videos/trd-services.mp4",
    embedUrl: "https://truerankdigital.com/videos/trd-services-embed",
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: "https://schema.org/WatchAction",
      userInteractionCount: "150"
    },
    author: {
      "@id": "https://truerankdigital.com/#organization"
    },
    publisher: {
      "@id": "https://truerankdigital.com/#organization"
    }
  };

  // Determine which schemas to include based on props
  const baseSchemas = [organizationSchema, websiteSchema];
  const allSchemas = includeAllSchemas ? [
    organizationSchema,
    localBusinessSchema,
    websiteSchema,
    enhancedServiceCatalog,
    faqSchema,
    howToSchema,
    professionalServiceSchema,
    softwareApplicationSchema,
    aggregateRating,
    speakableSchema,
    articleSchema,
    ...teamMembersSchema,
    ...enhancedReviewsSchema
  ] : baseSchemas;

  if (breadcrumbSchema) {
    allSchemas.push(breadcrumbSchema);
  }

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": allSchemas
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
