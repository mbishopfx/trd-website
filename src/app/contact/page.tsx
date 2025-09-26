import type { Metadata } from 'next';
import ContactHeroSection from '@/components/sections/ContactHeroSection';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import ContactFormSection from '@/components/sections/ContactFormSection';
import PageSpecificSchema from '@/components/seo/PageSpecificSchema';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';

export const metadata: Metadata = {
  title: 'Contact True Rank Digital - Get Your Free SEO Audit Today',
  description: 'Ready to scale your business with AI-enhanced digital marketing? Contact True Rank Digital for enterprise-level SEO solutions. 24/7 support available.',
  keywords: 'contact true rank digital, free seo audit, digital marketing consultation, AI SEO services, New Jersey SEO company',
  openGraph: {
    title: 'Contact True Rank Digital - Get Your Free SEO Audit Today',
    description: 'Ready to scale your business with AI-enhanced digital marketing? Contact us for enterprise-level SEO solutions.',
    url: 'https://truerankdigital.com/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Enhanced Schema Markup for Contact Page */}
      <PageSpecificSchema 
        pageType="contact"
        pageTitle="Contact True Rank Digital"
        pageDescription="Get in touch with True Rank Digital for professional SEO and digital marketing services. Free consultations available."
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Contact", url: "https://truerankdigital.com/contact" }
        ]}
      />
      
      {/* Additional Comprehensive Schema */}
      <ComprehensiveSchema
        type="contact"
        pageData={{
          title: "Contact True Rank Digital - Get Professional SEO & Digital Marketing Help",
          description: "Contact True Rank Digital for professional SEO and digital marketing services. Get in touch with our expert team for custom solutions and strategic consultation.",
          url: "https://truerankdigital.com/contact",
          keywords: ["contact True Rank Digital", "SEO consultation", "digital marketing help", "professional SEO services", "get in touch", "SEO experts contact"],
          category: "Contact Information"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Contact", url: "https://truerankdigital.com/contact" }
        ]}
      />
      
      <div className="pt-20">
        {/* Contact Hero Section */}
        <ContactHeroSection />
        
        {/* Contact Info Section */}
        <ContactInfoSection />
        
        {/* Contact Form Section */}
        <ContactFormSection />
      </div>
    </>
  );
}
