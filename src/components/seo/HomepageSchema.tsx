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
    dateModified: new Date().toISOString().split('T')[0]
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

  // Aggregate Rating (updated to reflect 30 reviews in schema)
  const aggregateRatingSchema = {
    "@type": "AggregateRating",
    "@id": `${baseUrl}/#aggregate-rating`,
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "30",
    reviewCount: "30"
  };

  // Reviews - Selected most authoritative reviews from GBP (Local Guides, multiple reviews, detailed feedback)
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
      datePublished: "2024-09-15",
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
      datePublished: "2024-08-20",
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
      datePublished: "2024-07-21",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/yasmin-peralta`,
      reviewBody: "I loved working with Jose he helped my business tremendously. He answered all my questions and walked me through every step.",
      author: {
        "@type": "Person",
        name: "Yasmin Peralta"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-04-15",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/armas-kakar`,
      reviewBody: "True Rank Digital delivered outstanding results! Jon J Korkowski and his team helped us attract more quality leads and improve our brand image significantly.",
      author: {
        "@type": "Person",
        name: "Armas Kakar"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-03-15",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/mostafa-meshak`,
      reviewBody: "I highly recommend True Rank Digital! Jon J Korkowski's strategies helped us reach a wider audience and establish strong brand recognition.",
      author: {
        "@type": "Person",
        name: "Mostafa Meshak"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-03-15",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/mariann-koppenheffer`,
      reviewBody: "Really helped our family business in 2025 marketing approach. Thank you Jon and team.",
      author: {
        "@type": "Person",
        name: "Mariann Koppenheffer"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-02-15",
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
      datePublished: "2024-02-15",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/ale`,
      reviewBody: "Our business has flourished thanks to Jon J Korkowski and his team. Not only did they help us increase leads, but they also made our brand stand out in a crowded market, delivering results we could see right away.",
      author: {
        "@type": "Person",
        name: "Ale"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-02-15",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/selena-gallegos`,
      reviewBody: "Choosing Jon J Korkowski was the best decision. Our leads have increased, and our brand is now widely recognized",
      author: {
        "@type": "Person",
        name: "Selena Gallegos"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2025-01-06",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/jose-mata-vegas`,
      reviewBody: "Jon J Korkowski and his team delivered incredible results. Our leads skyrocketed and our brand is now well-recognized in the industry",
      author: {
        "@type": "Person",
        name: "Jose Mata Vegas"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2025-01-06",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/lupita-castellanos`,
      reviewBody: "Working with Jon J Korkowski has transformed our business. The increase in leads and brand recognition has been outstanding",
      author: {
        "@type": "Person",
        name: "Lupita Castellanos"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2025-01-06",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/julian-curatola`,
      reviewBody: "True Rank Digital provided exceptional service and helped grow our business significantly.",
      author: {
        "@type": "Person",
        name: "Julian Curatola"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-12-27",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/krishnamurthy-nemani`,
      reviewBody: "True Rank Digital delivered excellent results for our business. Highly professional team and outstanding service.",
      author: {
        "@type": "Person",
        name: "Krishnamurthy Nemani"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-12-24",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/rudy-espana`,
      reviewBody: "Top notch team of professionals that understand the needs of their business as it evolves daily! I would recommend True Rank Digital to anyone needing their services truly exceptional!",
      author: {
        "@type": "Person",
        name: "Rudy Espana"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-12-24",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/mohammed-elkholy`,
      reviewBody: "Feels like I have 24 hours service, I call them for advise on my marketing all the time. Definitely will continue to use them!",
      author: {
        "@type": "Person",
        name: "Mohammed Elkholy"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-12-24",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/jrs-autospa`,
      reviewBody: "10/10 love the service from Jon and Tom they answered all my questions, got my website running in just a few days and just went above and beyond with everything I needed thank you!",
      author: {
        "@type": "Person",
        name: "Jrs AutoSpa"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-12-24",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/frank-mannarino`,
      reviewBody: "True Rank Digital brought my nutrition consulting to the next level. Thank you",
      author: {
        "@type": "Person",
        name: "Frank Mannarino"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-12-16",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/duubalin-hard`,
      reviewBody: "With Jon J Korkowski's expertise, our leads increased and our brand recognition improved.",
      author: {
        "@type": "Person",
        name: "Duubalin Hard"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-12-13",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/juan-alcantara`,
      reviewBody: "If you're serious about enhancing your brand's image, Jon J Korkowski is your guy! Our lead generation has never been better",
      author: {
        "@type": "Person",
        name: "Juan Alcantara"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-11-05",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/kelvin-dellez`,
      reviewBody: "After partnering with Jon J Korkowski, we've experienced a phenomenal increase in leads and our overall brand image. I can't imagine working with anyone else!",
      author: {
        "@type": "Person",
        name: "Kelvin Dellez"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-11-05",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/humberto-garcia-camara`,
      reviewBody: "Jon's insights into digital marketing were invaluable. We've seen our leads triple and our brand's reputation greatly enhanced. Highly effective",
      author: {
        "@type": "Person",
        name: "Humberto Garcia Camara"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-11-05",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/ezequiel-panizo`,
      reviewBody: "Thanks to Jon's innovative marketing strategies, our brand is more recognized than ever, and leads are pouring in. Very impressed",
      author: {
        "@type": "Person",
        name: "Ezequiel Panizo"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-11-05",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/samantha-cabazos`,
      reviewBody: "Working with Jon was transformative for our business. Our lead generation improved dramatically, and our brand's reputation is now stellar",
      author: {
        "@type": "Person",
        name: "Samantha Cabazos"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-11-05",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/luise-tucuma`,
      reviewBody: "We owe our recent success to Jon J Korkowski! Our leads skyrocketed, and the positive buzz surrounding our brand is more than we could have hoped for.",
      author: {
        "@type": "Person",
        name: "Luise Tucuma"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-11-05",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/montze-maradiaga`,
      reviewBody: "Jon J Korkowski is an advertising genius! Our lead growth and the newfound respect for our brand is a testament to his skill",
      author: {
        "@type": "Person",
        name: "Montze Maradiaga"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-11-05",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/nick-kelley`,
      reviewBody: "Absolute best service around. I wish I had found this company sooner!",
      author: {
        "@type": "Person",
        name: "Nick Kelley"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-06-13",
      itemReviewed: {
        "@id": organizationId
      }
    },
    {
      "@type": "Review",
      "@id": `${baseUrl}/reviews/brandon-nelson`,
      reviewBody: "True Rank Digital helped me turn my business around. I really owe Jon for all the hard work and time he spent with us and saved me a small fortune. I highly recommend them to anyone.",
      author: {
        "@type": "Person",
        name: "Brandon Nelson"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1"
      },
      datePublished: "2024-06-13",
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
      datePublished: "2024-04-23",
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

  // Location-specific LocalBusiness schemas for Local Map Pack dominance
  const locationSchemas = [
    {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/locations/edison#localbusiness`,
      name: "True Rank Digital - Edison",
      description: "Professional Google Business Optimization services for Edison, NJ businesses. Serving Oak Tree Road, Menlo Park Mall area, and all Edison neighborhoods.",
      url: `${baseUrl}/locations/edison`,
      telephone: napData.telephone,
      email: napData.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Serving Edison",
        addressLocality: "Edison",
        addressRegion: "NJ",
        postalCode: "08817",
        addressCountry: "US"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "40.518700",
        longitude: "-74.412100"
      },
      areaServed: {
        "@type": "City",
        name: "Edison"
      },
      parentOrganization: {
        "@id": organizationId
      },
      priceRange: "$$-$$$",
      hasMap: "https://www.google.com/maps?cid=4662204553635539796"
    },
    {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/locations/east-brunswick#localbusiness`,
      name: "True Rank Digital - East Brunswick",
      description: "Professional Google Business Optimization services for East Brunswick, NJ businesses. Headquarters location serving Middlesex County.",
      url: `${baseUrl}/locations/east-brunswick`,
      telephone: napData.telephone,
      email: napData.email,
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
      areaServed: {
        "@type": "City",
        name: "East Brunswick"
      },
      parentOrganization: {
        "@id": organizationId
      },
      priceRange: "$$-$$$",
      hasMap: "https://www.google.com/maps?cid=4662204553635539796"
    },
    {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/locations/new-brunswick#localbusiness`,
      name: "True Rank Digital - New Brunswick",
      description: "Professional Google Business Optimization services for New Brunswick, NJ businesses. Serving Rutgers University area, Robert Wood Johnson medical district, and downtown George Street corridor.",
      url: `${baseUrl}/locations/new-brunswick`,
      telephone: napData.telephone,
      email: napData.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Serving New Brunswick",
        addressLocality: "New Brunswick",
        addressRegion: "NJ",
        postalCode: "08901",
        addressCountry: "US"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "40.486200",
        longitude: "-74.451800"
      },
      areaServed: {
        "@type": "City",
        name: "New Brunswick"
      },
      parentOrganization: {
        "@id": organizationId
      },
      priceRange: "$$-$$$",
      hasMap: "https://www.google.com/maps?cid=4662204553635539796"
    },
    {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/locations/north-brunswick#localbusiness`,
      name: "True Rank Digital - North Brunswick",
      description: "Professional Google Business Optimization services for North Brunswick, NJ businesses. Serving Route 27 corridor, Renaissance area, and Adams Lane district.",
      url: `${baseUrl}/locations/north-brunswick`,
      telephone: napData.telephone,
      email: napData.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Serving North Brunswick",
        addressLocality: "North Brunswick",
        addressRegion: "NJ",
        postalCode: "08902",
        addressCountry: "US"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "40.451700",
        longitude: "-74.479400"
      },
      areaServed: {
        "@type": "City",
        name: "North Brunswick"
      },
      parentOrganization: {
        "@id": organizationId
      },
      priceRange: "$$-$$$",
      hasMap: "https://www.google.com/maps?cid=4662204553635539796"
    },
    {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/locations/sayreville#localbusiness`,
      name: "True Rank Digital - Sayreville",
      description: "Professional Google Business Optimization services for Sayreville, NJ businesses. Serving Route 9 corridor, Parlin area, Morgan waterfront, and Garden State Parkway access.",
      url: `${baseUrl}/locations/sayreville`,
      telephone: napData.telephone,
      email: napData.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Serving Sayreville",
        addressLocality: "Sayreville",
        addressRegion: "NJ",
        postalCode: "08872",
        addressCountry: "US"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "40.459500",
        longitude: "-74.361000"
      },
      areaServed: {
        "@type": "City",
        name: "Sayreville"
      },
      parentOrganization: {
        "@id": organizationId
      },
      priceRange: "$$-$$$",
      hasMap: "https://www.google.com/maps?cid=4662204553635539796"
    },
    {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/locations/south-river#localbusiness`,
      name: "True Rank Digital - South River",
      description: "Professional Google Business Optimization services for South River, NJ businesses. Serving Main Street shops, home services, and small businesses in South River Borough.",
      url: `${baseUrl}/locations/south-river`,
      telephone: napData.telephone,
      email: napData.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Serving South River",
        addressLocality: "South River",
        addressRegion: "NJ",
        postalCode: "08882",
        addressCountry: "US"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "40.446200",
        longitude: "-74.386000"
      },
      areaServed: {
        "@type": "City",
        name: "South River"
      },
      parentOrganization: {
        "@id": organizationId
      },
      priceRange: "$$-$$$",
      hasMap: "https://www.google.com/maps?cid=4662204553635539796"
    }
  ];

  // Service schemas for each location (for Local Map Pack)
  const locationServiceSchemas = [
    {
      "@type": "Service",
      "@id": `${baseUrl}/locations/edison#service`,
      name: "Google Business Optimization Services in Edison, NJ",
      description: "Local pack domination and Google Business Profile optimization for Edison businesses",
      provider: {
        "@id": `${baseUrl}/locations/edison#localbusiness`
      },
      areaServed: {
        "@type": "City",
        name: "Edison"
      },
      serviceType: "Google Business Optimization"
    },
    {
      "@type": "Service",
      "@id": `${baseUrl}/locations/east-brunswick#service`,
      name: "Google Business Optimization Services in East Brunswick, NJ",
      description: "Local pack domination and Google Business Profile optimization for East Brunswick businesses",
      provider: {
        "@id": `${baseUrl}/locations/east-brunswick#localbusiness`
      },
      areaServed: {
        "@type": "City",
        name: "East Brunswick"
      },
      serviceType: "Google Business Optimization"
    },
    {
      "@type": "Service",
      "@id": `${baseUrl}/locations/new-brunswick#service`,
      name: "Google Business Optimization Services in New Brunswick, NJ",
      description: "Local pack domination and Google Business Profile optimization for New Brunswick businesses",
      provider: {
        "@id": `${baseUrl}/locations/new-brunswick#localbusiness`
      },
      areaServed: {
        "@type": "City",
        name: "New Brunswick"
      },
      serviceType: "Google Business Optimization"
    },
    {
      "@type": "Service",
      "@id": `${baseUrl}/locations/north-brunswick#service`,
      name: "Google Business Optimization Services in North Brunswick, NJ",
      description: "Local pack domination and Google Business Profile optimization for North Brunswick businesses",
      provider: {
        "@id": `${baseUrl}/locations/north-brunswick#localbusiness`
      },
      areaServed: {
        "@type": "City",
        name: "North Brunswick"
      },
      serviceType: "Google Business Optimization"
    },
    {
      "@type": "Service",
      "@id": `${baseUrl}/locations/sayreville#service`,
      name: "Google Business Optimization Services in Sayreville, NJ",
      description: "Local pack domination and Google Business Profile optimization for Sayreville businesses",
      provider: {
        "@id": `${baseUrl}/locations/sayreville#localbusiness`
      },
      areaServed: {
        "@type": "City",
        name: "Sayreville"
      },
      serviceType: "Google Business Optimization"
    },
    {
      "@type": "Service",
      "@id": `${baseUrl}/locations/south-river#service`,
      name: "Google Business Optimization Services in South River, NJ",
      description: "Local pack domination and Google Business Profile optimization for South River businesses",
      provider: {
        "@id": `${baseUrl}/locations/south-river#localbusiness`
      },
      areaServed: {
        "@type": "City",
        name: "South River"
      },
      serviceType: "Google Business Optimization"
    }
  ];

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
      ...(faqPageSchema ? [faqPageSchema] : []),
      ...locationSchemas,
      ...locationServiceSchemas
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
