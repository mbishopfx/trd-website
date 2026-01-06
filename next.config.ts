import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legal pages - common variations
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/cookies',
        destination: '/privacy-policy',
        permanent: true,
      },
      
      // Old service pages → current services
      {
        source: '/services/social-media',
        destination: '/services/digital-marketing',
        permanent: true,
      },
      {
        source: '/services/ppc-management',
        destination: '/google-ads-management',
        permanent: true,
      },
      {
        source: '/services/website-design',
        destination: '/services/website-development',
        permanent: true,
      },
      {
        source: '/services/analytics-setup',
        destination: '/services/digital-marketing',
        permanent: true,
      },
      {
        source: '/services/certification-audit',
        destination: '/free-audit',
        permanent: true,
      },
      {
        source: '/services/gbp-optimization',
        destination: '/services/google-business-profile',
        permanent: true,
      },
      {
        source: '/services/gbp-domination',
        destination: '/services/local-seo',
        permanent: true,
      },
      {
        source: '/services/content-marketing',
        destination: '/content-marketing',
        permanent: true,
      },
      {
        source: '/services/picstacks-vstacks',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/social-spark-pro',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/cars-for-sale',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/service',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service',
        destination: '/services',
        permanent: true,
      },
      
      // Old staff/team pages → main staff page
      {
        source: '/staff/:path*',
        destination: '/staff',
        permanent: true,
      },
      {
        source: '/team/:path*',
        destination: '/staff',
        permanent: true,
      },
      
      // Old review pages → staff page (where reviews are shown)
      {
        source: '/reviews/:path*',
        destination: '/staff',
        permanent: true,
      },
      
      // Old tech-services pages → platform
      {
        source: '/tech-services',
        destination: '/platform',
        permanent: true,
      },
      {
        source: '/tech-services/:path*',
        destination: '/platform',
        permanent: true,
      },
      
      // Old business-types pages → services
      {
        source: '/business-types/:path*',
        destination: '/services',
        permanent: true,
      },
      
      // Old audit pages → free audit
      {
        source: '/online-reputation-audit',
        destination: '/free-audit',
        permanent: true,
      },
      {
        source: '/local-visibility-audit',
        destination: '/free-audit',
        permanent: true,
      },
      {
        source: '/trd-certification-audit',
        destination: '/free-audit',
        permanent: true,
      },
      {
        source: '/trd-certification-audit/',
        destination: '/free-audit',
        permanent: true,
      },
      
      // Old proposal pages → contact
      {
        source: '/proposal',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/proposal/:path*',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/june-proposal',
        destination: '/contact',
        permanent: true,
      },
      
      // Old GBP Pro pages → platform (except search-grid-ranking which exists)
      {
        source: '/gbp-pro/keyword-mapping',
        destination: '/platform/grid-ranking',
        permanent: true,
      },
      
      // Old referral program pages → current referral
      {
        source: '/referral-program-vip',
        destination: '/referral',
        permanent: true,
      },
      
      // Old AIO services page → learn-aio
      {
        source: '/aio-services',
        destination: '/learn-aio',
        permanent: true,
      },
      
      // Old inventory feed (not relevant anymore)
      {
        source: '/google-cars-for-sale-inventory-feed',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/google-cars-for-sale-inventory-feed/',
        destination: '/services',
        permanent: true,
      },
      
      // Search page (if not implemented)
      {
        source: '/search',
        destination: '/',
        permanent: false, // Temporary in case search is added later
      },
    ];
  },
};

export default nextConfig;
