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
  legalName: 'True Rank Digital LLC',
  foundingYear: '2020',
  url: siteUrl,
  telephone: '+1-732-475-0139',
  email: 'jon@truerankdigital.com',
  address: {
    streetAddress: '288 Summerhill Rd, suite 3',
    addressLocality: 'East Brunswick',
    addressRegion: 'NJ',
    postalCode: '08816',
    addressCountry: 'US',
  } satisfies PostalAddress,
  logoUrl: `${siteUrl}/images/logos/trd-logo1.avif`,
  imageUrl: `${siteUrl}/images/logos/trdlogoblue.webp`,
  googleMapsCidUrl: 'https://www.google.com/maps?cid=4662204553635539796',
  sameAs: [
    'https://www.google.com/maps?cid=4662204553635539796',
    'https://www.facebook.com/truerankdigital',
    'https://www.linkedin.com/company/true-rank-digital',
    'https://www.wikidata.org/wiki/Q130284854',
    'https://twitter.com/truerankdigital',
    'https://www.instagram.com/truerankdigital_/?hl=en',
    'https://www.youtube.com/channel/UC9wb8G1oROv_iUIDRL7JIWA',
    'https://www.tiktok.com/@truerankdigital_',
    'https://www.pinterest.com/truerankdigital',
  ],
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
