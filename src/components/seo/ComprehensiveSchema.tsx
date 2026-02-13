import { siteIdentity } from '@/lib/seo/siteIdentity';

interface ComprehensiveSchemaProps {
  type:
    | 'platform-tool'
    | 'service'
    | 'education'
    | 'location'
    | 'about'
    | 'contact'
    | 'referral-program'
    | 'article'
    | 'howto'
    | 'video'
    | 'product'
    | 'service-landing';
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
      price?: string;
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
  breadcrumbs?: Array<{ name: string; url: string }>;
}

function cleanUrl(url: string) {
  return url.replace(/\/+$/, '');
}

export default function ComprehensiveSchema({ type, pageData, breadcrumbs }: ComprehensiveSchemaProps) {
  const baseUrl = siteIdentity.url;
  const organizationId = `${baseUrl}/#organization`;
  const localBusinessId = `${baseUrl}/#localbusiness`;
  const websiteId = `${baseUrl}/#website`;
  const contactPointId = `${baseUrl}/#contactpoint`;

  const pageUrl = cleanUrl(pageData.url);

  const breadcrumbSchema =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: crumb.url,
          })),
        }
      : null;

  const webPageType =
    type === 'contact' ? 'ContactPage' : type === 'about' ? 'AboutPage' : 'WebPage';

  const webPageSchema = {
    '@type': webPageType,
    '@id': `${pageUrl}#webpage`,
    name: pageData.title,
    description: pageData.description,
    url: pageUrl,
    isPartOf: { '@id': websiteId },
    about: { '@id': type === 'contact' ? localBusinessId : organizationId },
    publisher: { '@id': organizationId },
    inLanguage: 'en-US',
    ...(pageData.keywords?.length ? { keywords: pageData.keywords.join(', ') } : {}),
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: siteIdentity.imageUrl,
    },
    ...(type === 'contact'
      ? {
          mainEntity: { '@id': localBusinessId },
          potentialAction: [
            { '@type': 'CommunicateAction', target: `${baseUrl}/contact` },
            {
              '@type': 'CommunicateAction',
              target: `tel:${siteIdentity.telephone.replace(/[^\d+]/g, '')}`,
            },
            { '@type': 'CommunicateAction', target: `mailto:${siteIdentity.email}` },
          ],
        }
      : {}),
  };

  const contactPointSchema =
    type === 'contact'
      ? {
          '@type': 'ContactPoint',
          '@id': contactPointId,
          contactType: 'customer service',
          telephone: siteIdentity.telephone,
          email: siteIdentity.email,
          areaServed: 'US',
          availableLanguage: ['English'],
          url: `${baseUrl}/contact`,
        }
      : null;

  const localBusinessSchema =
    type === 'contact'
      ? {
          '@type': ['LocalBusiness', 'ProfessionalService'],
          '@id': localBusinessId,
          name: siteIdentity.brandName,
          legalName: siteIdentity.legalName,
          url: baseUrl,
          logo: siteIdentity.logoUrl,
          image: siteIdentity.imageUrl,
          email: siteIdentity.email,
          telephone: siteIdentity.telephone,
          priceRange: '$$-$$$',
          parentOrganization: { '@id': organizationId },
          address: {
            '@type': 'PostalAddress',
            ...siteIdentity.address,
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 40.4281,
            longitude: -74.4157,
          },
          hasMap: siteIdentity.googleMapsCidUrl,
          sameAs: siteIdentity.sameAs,
          areaServed: [
            { '@type': 'AdministrativeArea', name: 'New Jersey' },
            { '@type': 'Country', name: 'United States' },
          ],
          contactPoint: [{ '@id': contactPointId }],
          potentialAction: [
            { '@type': 'CommunicateAction', target: `${baseUrl}/contact` },
            {
              '@type': 'CommunicateAction',
              target: `tel:${siteIdentity.telephone.replace(/[^\d+]/g, '')}`,
            },
            { '@type': 'CommunicateAction', target: `mailto:${siteIdentity.email}` },
          ],
        }
      : null;

  const softwareApplicationSchema =
    type === 'platform-tool'
      ? {
          '@type': 'SoftwareApplication',
          '@id': `${pageUrl}#software-application`,
          name: pageData.title,
          description: pageData.description,
          url: pageUrl,
          applicationCategory: 'SEO Software',
          operatingSystem: 'Web',
          publisher: { '@id': organizationId },
          creator: { '@id': organizationId },
          ...(pageData.toolFeatures?.length ? { featureList: pageData.toolFeatures } : {}),
        }
      : null;

  const serviceSchema =
    type === 'service' || type === 'service-landing'
      ? {
          '@type': 'Service',
          '@id': `${pageUrl}#service`,
          name: pageData.title,
          description: pageData.description,
          url: pageUrl,
          provider: { '@id': organizationId },
          areaServed: { '@type': 'Country', name: 'United States' },
          ...(pageData.serviceType ? { serviceType: pageData.serviceType } : {}),
          ...(pageData.category ? { category: pageData.category } : {}),
        }
      : null;

  const locationSchema =
    type === 'location' && pageData.locationData
      ? {
          '@type': 'Service',
          '@id': `${pageUrl}#local-service`,
          name: pageData.title,
          description: pageData.description,
          url: pageUrl,
          provider: { '@id': organizationId },
          areaServed: {
            '@type': 'City',
            name: `${pageData.locationData.city}, ${pageData.locationData.state}`,
          },
        }
      : null;

  const offerCatalogSchema =
    pageData.offers && pageData.offers.length > 0
      ? {
          '@type': 'OfferCatalog',
          '@id': `${pageUrl}#offers`,
          name: `${pageData.title} Offers`,
          itemListElement: pageData.offers.map((offer) => ({
            '@type': 'Offer',
            name: offer.name,
            description: offer.description,
            ...(offer.price
              ? { price: offer.price, priceCurrency: offer.currency || 'USD' }
              : {}),
            seller: { '@id': organizationId },
            availability: 'https://schema.org/InStock',
          })),
        }
      : null;

  const faqSchema =
    pageData.faq && pageData.faq.length > 0
      ? {
          '@type': 'FAQPage',
          '@id': `${pageUrl}#faq`,
          mainEntity: pageData.faq.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }
      : null;

  const articleSchema =
    type === 'article'
      ? {
          '@type': 'Article',
          '@id': `${pageUrl}#article`,
          headline: pageData.title,
          description: pageData.description,
          url: pageUrl,
          author: {
            '@type': 'Organization',
            name: pageData.author || siteIdentity.brandName,
            url: baseUrl,
          },
          publisher: { '@id': organizationId },
          ...(pageData.datePublished ? { datePublished: pageData.datePublished } : {}),
          ...(pageData.dateModified ? { dateModified: pageData.dateModified } : {}),
        }
      : null;

  const productSchema =
    type === 'product'
      ? {
          '@type': 'Product',
          '@id': `${pageUrl}#product`,
          name: pageData.title,
          description: pageData.description,
          url: pageUrl,
          brand: { '@type': 'Brand', name: siteIdentity.brandName },
          ...(pageData.offers?.length
            ? {
                offers: pageData.offers.map((offer) => ({
                  '@type': 'Offer',
                  name: offer.name,
                  description: offer.description,
                  ...(offer.price
                    ? { price: offer.price, priceCurrency: offer.currency || 'USD' }
                    : {}),
                  availability: 'https://schema.org/InStock',
                  seller: { '@id': organizationId },
                })),
              }
            : {}),
        }
      : null;

  const videoSchema =
    type === 'video'
      ? {
          '@type': 'VideoObject',
          '@id': `${pageUrl}#video`,
          name: pageData.title,
          description: pageData.description,
          url: pageUrl,
          publisher: { '@id': organizationId },
        }
      : null;

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      ...(localBusinessSchema ? [localBusinessSchema] : []),
      ...(contactPointSchema ? [contactPointSchema] : []),
      webPageSchema,
      ...(softwareApplicationSchema ? [softwareApplicationSchema] : []),
      ...(serviceSchema ? [serviceSchema] : []),
      ...(locationSchema ? [locationSchema] : []),
      ...(offerCatalogSchema ? [offerCatalogSchema] : []),
      ...(faqSchema ? [faqSchema] : []),
      ...(articleSchema ? [articleSchema] : []),
      ...(productSchema ? [productSchema] : []),
      ...(videoSchema ? [videoSchema] : []),
      ...(breadcrumbSchema ? [breadcrumbSchema] : []),
    ],
  };

  return (
    <script
      id={`comprehensive-schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
