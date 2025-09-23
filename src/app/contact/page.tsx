import type { Metadata } from 'next';
import ContactHeroSection from '@/components/sections/ContactHeroSection';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import ContactFormSection from '@/components/sections/ContactFormSection';

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
    <div className="pt-20">
      {/* Contact Hero Section */}
      <ContactHeroSection />
      
      {/* Contact Info Section */}
      <ContactInfoSection />
      
      {/* Contact Form Section */}
      <ContactFormSection />
    </div>
  );
}
