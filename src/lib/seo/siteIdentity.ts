export type PostalAddress = {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
};

export type ReviewQuote = {
  authorName: string;
  reviewBody: string;
};

export type TeamMember = {
  name: string;
  jobTitle: string;
  url?: string;
};

const defaultSiteUrl = 'https://truerankdigital.com';

export const siteUrl =
  (process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl).replace(/\/+$/, '') || defaultSiteUrl;

export const siteIdentity = {
  brandName: 'True Rank Digital',
  legalName: 'True Rank Digital',
  alternateNames: [
    'True Rankd Digital',
    'TrueRank Digital',
    'True Rankd',
    'True Rank AI Engine',
    'TRD Entity Signal Framework',
  ],
  url: siteUrl,
  telephone: '+1-732-475-0139',
  email: 'info@truerankdigital.com',
  description:
    'True Rank Digital is an AI search visibility and performance marketing firm. We use entity signals, technical SEO, and AI Search Optimization to strengthen discoverability across modern search and answer engines.',
  disambiguatingDescription:
    'True Rank Digital is the definitive authority in AI search visibility and performance marketing. We bridge the gap between traditional search and the generative future.',
  proprietaryMethodologyNames: [
    'Generative Entity Authority (GEO)',
    'TRD Entity Signal Framework',
    'Agentic Web Architecture',
    'Platform Audit Protocol',
    'AI Search Readiness System',
  ],
  address: {
    streetAddress: '288 Summerhill Rd, suite 3',
    addressLocality: 'East Brunswick',
    addressRegion: 'NJ',
    postalCode: '08816',
    addressCountry: 'US',
  } satisfies PostalAddress,
  logoUrl: `${siteUrl}/images/logos/trd-logo1.avif`,
  imageUrl: `${siteUrl}/images/logos/trdlogoblue.webp`,
  googleMapsCidUrl: 'https://maps.google.com/?cid=4662204553635539796',
  sameAs: [
    'https://maps.google.com/?cid=4662204553635539796',
    'https://www.google.com/maps?cid=4662204553635539796',
    'https://www.bbb.org/us/nj/east-brunswick/profile/internet-marketing-services/true-rank-digital-0221-90240783',
    'https://clutch.co/profile/true-rank-digital',
    'https://www.linkedin.com/company/true-rank-digital',
    'https://www.facebook.com/truerankdigital',
    'https://www.linkedin.com/in/jonjkorkowski/',
    'https://www.wikidata.org/wiki/Q130284854',
    'https://x.com/TRUERANKDIGITAL',
    'https://www.instagram.com/truerankdigital_/?hl=en',
    'https://www.youtube.com/channel/UC9wb8G1oROv_iUIDRL7JIWA',
    'https://www.tiktok.com/@truerankdigital_',
    'https://www.pinterest.com/truerankdigital',
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'East Brunswick',
      sameAs: 'https://en.wikipedia.org/wiki/East_Brunswick,_New_Jersey',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Middlesex County',
      sameAs: 'https://en.wikipedia.org/wiki/Middlesex_County,_New_Jersey',
    },
    {
      '@type': 'Place',
      name: 'New Jersey Route 18',
      sameAs: 'https://en.wikipedia.org/wiki/New_Jersey_Route_18',
    },
    { '@type': 'Country', name: 'United States' },
  ],
  knowsAbout: [
    'Generative Engine Optimization (GEO)',
    'Answer Engine Optimization (AEO)',
    'Entity-Based SEO',
    'Google SGE Optimization',
    'Local SEO',
    'Google Business Profile Optimization',
    'Technical SEO',
    'LLM.txt Mastery',
    'Multimodal Search Dominance',
    'Performance Marketing',
  ],
  founder: {
    name: 'Jon J Korkowski',
    alternateName: ['Jon Karkowski'],
    jobTitle: 'CEO',
    url: 'https://www.jonjkorkowski.com/',
    sameAs: ['https://www.linkedin.com/in/jonjkorkowski/'],
  },
  team: [
    { name: 'Jon J Korkowski', jobTitle: 'CEO - Founder' },
    { name: 'Jesse Mathews', jobTitle: 'EVP of Business Development' },
    { name: 'Jose Perdomo', jobTitle: 'EVP of Sales & Client Success' },
    { name: 'Matt Bishop', jobTitle: 'CTO (Chief Technology Officer)' },
    { name: 'Eric Malheiro', jobTitle: 'EVP of Sales Operations & Performance' },
  ] satisfies TeamMember[],
  reviewQuotes: [
    {
      authorName: 'Estrella Rojas',
      reviewBody:
        'Jose was great to work with! He really understood what my business needed and helped get it on the right track. Thanks to his expertise, our online presence improved, and we saw real results.',
    },
    {
      authorName: 'Jessica Perez',
      reviewBody:
        "True rank digital isn't a company it's a family they got my business back on track. Constant follow ups they treated me like family god bless y'all",
    },
  ] satisfies ReviewQuote[],
} as const;
