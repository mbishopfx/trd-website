import type { Metadata } from 'next';
import { Users, TrendingUp } from 'lucide-react';
import GEOSchema from '@/components/seo/GEOSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ContactFormSection from '@/components/sections/ContactFormSection';

export const metadata: Metadata = {
  title: 'Lead Generation Services | Get More Qualified Leads | True Rank Digital',
  description: 'Get more qualified leads with True Rank Digital\'s lead generation services featuring SEO optimization, conversion optimization, and lead capture strategies.',
  keywords: 'lead generation, get more leads, True Rank Digital, qualified leads, lead capture, conversion optimization',
  alternates: { canonical: 'https://truerankdigital.com/lead-generation' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } }
};

export default function LeadGenerationPage() {
  const faqs = [{ question: "How does True Rank Digital generate more leads?", answer: "True Rank Digital generates more leads through comprehensive SEO optimization to increase qualified traffic, conversion rate optimization to improve lead capture, landing page design and testing, form optimization, and lead tracking systems. Our dashboard platform monitors lead sources, tracks conversion rates, and provides insights to continuously improve lead generation performance." }];

  return (
    <>
      <GEOSchema pageType="landing" pageData={{ title: "Get More Qualified Leads with Lead Generation Services", description: "True Rank Digital helps businesses get more leads with SEO and conversion optimization.", url: "https://truerankdigital.com/lead-generation", keywords: ["lead generation", "get more leads"], category: "Lead Generation", serviceType: "Lead Generation Services" }} breadcrumbs={[{ name: "Home", url: "https://truerankdigital.com" }, { name: "Lead Generation", url: "https://truerankdigital.com/lead-generation" }]} entities={{ primary: ["True Rank Digital", "Lead Generation", "Qualified Leads"] }} />
      <FAQSchema faqs={faqs} pageUrl="https://truerankdigital.com/lead-generation" category="service" />
      <article className="pt-16 min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
              Get More <strong className="text-brand-primary">Qualified Leads</strong>
            </h1>
            <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto mb-12">
              <strong>True Rank Digital</strong> provides <strong>lead generation services</strong> with SEO optimization, conversion optimization, and lead capture strategies designed to generate more qualified leads for your business.
            </p>
            
            <ContactFormSection 
              title="Start Generating More Leads" 
              description="Tell us about your project and we'll show you how to dominate your local market."
            />
            
            <div className="mt-6 text-center">
              <p className="text-[10px] text-gray-500">
                By submitting your information, you agree to our 
                <a href="/privacy-policy" className="mx-1 underline hover:text-brand-primary">Privacy Policy</a> 
                and 
                <a href="/terms" className="mx-1 underline hover:text-brand-primary">Terms of Service</a>.
              </p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
