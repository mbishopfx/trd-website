'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Our terms and conditions for digital marketing services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="glass-card p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">1. Services Agreement</h2>
                <p className="text-brand-dark/70 leading-relaxed">
                  True Rank Digital LLC provides digital marketing services including SEO, Google Business Profile management, 
                  website development, and related digital marketing solutions. Services are provided according to agreed-upon 
                  specifications and timelines outlined in individual service agreements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">2. Payment Terms</h2>
                <p className="text-brand-dark/70 leading-relaxed">
                  Payment terms are specified in individual service agreements. Generally, services require payment according 
                  to agreed schedules. Late payments may result in service suspension until accounts are current.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">3. Service Performance</h2>
                <p className="text-brand-dark/70 leading-relaxed">
                  While we strive for optimal results, digital marketing outcomes can vary based on numerous factors including 
                  market conditions, competition, and algorithm changes. We provide professional service and implement best 
                  practices, but cannot guarantee specific ranking positions or traffic numbers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">4. Client Responsibilities</h2>
                <p className="text-brand-dark/70 leading-relaxed">
                  Clients are responsible for providing accurate information, timely feedback, and access to necessary 
                  accounts and platforms. Clients must comply with all applicable laws and platform terms of service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">5. Intellectual Property</h2>
                <p className="text-brand-dark/70 leading-relaxed">
                  Custom work created specifically for clients becomes the property of the client upon full payment. 
                  True Rank Digital retains ownership of proprietary methodologies, tools, and general industry knowledge.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">6. Confidentiality</h2>
                <p className="text-brand-dark/70 leading-relaxed">
                  We maintain strict confidentiality regarding client information and business details. We will not 
                  share confidential client information with third parties without explicit permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">7. Service Termination</h2>
                <p className="text-brand-dark/70 leading-relaxed">
                  Either party may terminate services according to the terms outlined in individual service agreements. 
                  Generally, services may be terminated with appropriate notice. Final payments for completed work remain due.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">8. Limitation of Liability</h2>
                <p className="text-brand-dark/70 leading-relaxed">
                  True Rank Digital&apos;s liability is limited to the amount paid for services. We are not liable for 
                  indirect, consequential, or punitive damages. Our maximum liability shall not exceed the total 
                  amount paid by the client for services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">9. SMS Messaging Terms</h2>
                <div className="text-brand-dark/70 leading-relaxed space-y-4">
                  <p>
                    By providing your phone number and opting in to receive SMS from True Rank Digital LLC, you agree to the following terms:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>SMS Use Cases:</strong> You may receive transactional messages (e.g., appointment reminders, project updates, and support) or marketing messages (e.g., promotional offers and industry news).</li>
                    <li><strong>Opt-Out Instructions:</strong> You can unsubscribe from SMS at any time by replying <strong>STOP</strong> to any message. You will receive one final message confirming your opt-out.</li>
                    <li><strong>Customer Support:</strong> Reply <strong>HELP</strong> for assistance or contact us directly at <a href="tel:7324750139" className="text-brand-primary hover:underline">(732) 475-0139</a>.</li>
                    <li><strong>Message and Data Rates:</strong> Message and data rates may apply from your wireless provider. Message frequency varies based on your interaction with us.</li>
                    <li><strong>Carrier Liability:</strong> Carriers are not responsible for delayed or undelivered messages.</li>
                    <li><strong>Age Restriction:</strong> By opting in, you verify that you are 18 years of age or older.</li>
                    <li><strong>Privacy:</strong> Use of your information is governed by our <a href="/privacy-policy" className="text-brand-primary hover:underline">Privacy Policy</a>. No mobile information will be shared with third parties/affiliates for marketing/promotional purposes.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">10. Changes to Terms</h2>
                <p className="text-brand-dark/70 leading-relaxed">
                  These terms may be updated periodically. Material changes will be communicated to active clients. 
                  Continued use of services after changes constitutes acceptance of updated terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">10. Contact Information</h2>
                <p className="text-brand-dark/70 leading-relaxed">
                  For questions about these terms or our services, contact us at:
                </p>
                <div className="mt-4 p-4 bg-brand-light/30 rounded-lg">
                  <p className="text-brand-dark font-semibold">True Rank Digital LLC</p>
                  <p className="text-brand-dark/70">288 Summerhill Rd, suite 3, East Brunswick, NJ 08816</p>
                  <p className="text-brand-dark/70">Phone: (732) 475-0139</p>
                  <p className="text-brand-dark/70">Email: jon@truerankdigital.com</p>
                </div>
              </div>

              <div className="border-t border-brand-dark/10 pt-6">
                <p className="text-brand-dark/60 text-sm">
                  Last updated: January 2026<br />
                  These terms are effective for all services provided by True Rank Digital LLC.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
