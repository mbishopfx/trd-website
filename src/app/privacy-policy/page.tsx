import type { Metadata } from 'next';
import { Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - True Rank Digital',
  description: 'Read True Rank Digital\'s privacy policy to understand how we protect and handle your personal information.',
  keywords: 'privacy policy, data protection, True Rank Digital privacy',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-16 min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-primary/10 rounded-full mb-6">
              <Shield className="w-5 h-5 text-brand-primary" />
              <span className="text-brand-primary font-semibold text-sm">Privacy Policy</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
              Privacy Policy
            </h1>
            
            <p className="text-lg text-brand-dark/70">
              Last updated: September 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              
              <section>
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Information We Collect</h2>
                <p className="text-brand-dark/70 leading-relaxed mb-4">
                  True Rank Digital collects information you provide directly to us, such as when you contact us, request services, or sign up for our communications.
                </p>
                <ul className="list-disc list-inside text-brand-dark/70 space-y-2">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Business information (company name, website, industry)</li>
                  <li>Communication preferences</li>
                  <li>Website analytics data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">How We Use Information</h2>
                <p className="text-brand-dark/70 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-brand-dark/70 space-y-2">
                  <li>Provide and improve our SEO and digital marketing services</li>
                  <li>Communicate with you about our services</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Analyze and improve our website performance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Data Protection</h2>
                <p className="text-brand-dark/70 leading-relaxed">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We use industry-standard encryption and secure storage practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Contact Us</h2>
                <p className="text-brand-dark/70 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-brand-light rounded-lg">
                  <p className="text-brand-dark"><strong>Email:</strong> privacy@truerankdigital.com</p>
                  <p className="text-brand-dark"><strong>Phone:</strong> (732) 475-0139</p>
                  <p className="text-brand-dark"><strong>Address:</strong> East Brunswick, NJ 08816</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
