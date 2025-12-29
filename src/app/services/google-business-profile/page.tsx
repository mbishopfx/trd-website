import type { Metadata } from 'next';
import { Users, Star, MapPin, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema, { generateServiceFAQs } from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'Google Business Profile Management Services | True Rank Digital',
  description: 'True Rank Digital provides professional Google Business Profile management with optimization, review automation, and local visibility enhancement for businesses.',
  keywords: 'Google Business Profile, GBP management, Google My Business, review management, local listings, True Rank Digital, profile optimization',
  openGraph: {
    title: 'Google Business Profile Management | True Rank Digital',
    description: 'Professional GBP optimization and review management services.',
    url: 'https://truerankdigital.com/services/google-business-profile',
    type: 'website',
  },
  alternates: {
    canonical: 'https://truerankdigital.com/services/google-business-profile'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function GoogleBusinessProfilePage() {
  const faqs = generateServiceFAQs('googleBusinessProfile', [
    {
      question: "How often should I update my Google Business Profile?",
      answer: "True Rank Digital recommends updating your Google Business Profile at least weekly with new posts, photos, and offers. Our automated review management system monitors your profile daily, and we provide monthly optimization updates to ensure your listing maintains maximum visibility in local search results and Google Maps."
    }
  ]);

  return (
    <>
      <GEOSchema 
        pageType="service"
        pageData={{
          title: "Google Business Profile Management by True Rank Digital",
          description: "True Rank Digital delivers professional Google Business Profile management with optimization, review automation, and local visibility enhancement.",
          url: "https://truerankdigital.com/services/google-business-profile",
          keywords: ["Google Business Profile", "GBP management", "review management", "local listings"],
          category: "Google Business Profile Services",
          serviceType: "Business Listing Management",
          areaServed: ["United States"],
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Services", url: "https://truerankdigital.com/services" },
          { name: "Google Business Profile", url: "https://truerankdigital.com/services/google-business-profile" }
        ]}
        entities={{
          primary: ["True Rank Digital", "Google Business Profile", "GBP Management"],
          secondary: ["Review Management", "Local Listings", "Google Maps"]
        }}
      />
      
      {/* Service Schema with Mentions */}
      <ServiceSchema
        serviceName="Google Business Profile Management"
        serviceUrl="https://truerankdigital.com/services/google-business-profile"
        description="Complete Google Business Profile optimization and management services including listing optimization, review management, local visibility enhancement, and automated consistency monitoring."
        serviceType="Business Listing Management"
        mentions={[
          {
            type: "Organization",
            name: "Google",
            sameAs: "https://www.wikidata.org/wiki/Q95",
            description: "Primary search engine platform"
          },
          {
            type: "Product",
            name: "Google Business Profile",
            sameAs: "https://www.wikidata.org/wiki/Q17633166",
            description: "Business listing platform"
          },
          {
            type: "Product",
            name: "Google Maps",
            sameAs: "https://www.wikidata.org/wiki/Q12013",
            description: "Mapping and local search platform"
          }
        ]}
      />
      
      <FAQSchema 
        faqs={faqs}
        pageUrl="https://truerankdigital.com/services/google-business-profile"
        category="service"
      />
      
      <article className="pt-16 min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-semibold text-sm">GBP Management</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
              <strong className="text-brand-primary">True Rank Digital</strong> Provides Professional <strong>Google Business Profile</strong> Management
            </h1>
            
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto mb-12">
              <strong>True Rank Digital</strong> delivers professional <strong>Google Business Profile management</strong> with optimization, <strong>review automation</strong>, photo management, and enhanced <strong>local visibility</strong> for businesses nationwide.
            </p>

            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">
              How <strong className="text-brand-primary">Google Business Profile</strong> Optimization Works
            </h2>

            <div className="glass-card p-8 mb-12">
              <p className="text-brand-dark/70 leading-relaxed">
                Every <strong>Google Business Profile</strong> client receives complete optimization including business information accuracy, category selection, attribute optimization, photo management, and <strong>automated review monitoring</strong>. Our dashboard platform tracks your <strong>GBP performance</strong> metrics in real-time.
              </p>
            </div>

            <div className="glass-card p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                Why Choose <strong className="text-brand-primary">True Rank Digital</strong> for GBP Management
              </h2>
              <p className="text-brand-dark/70 mb-6">
                Maximize your <strong>local presence</strong> with professional <strong>Google Business Profile optimization</strong> and automated review management from <strong>True Rank Digital</strong>.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                <TrendingUp className="w-5 h-5" />
                <span>Optimize Your Profile Now</span>
              </a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
