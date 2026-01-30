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
              Last updated: January 2026
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
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-brand-dark/70 leading-relaxed mb-4">
                  True Rank Digital uses cookies, web beacons, and similar tracking technologies to collect information about your browsing activities over time and across different websites following your use of our services.
                </p>
                <ul className="list-disc list-inside text-brand-dark/70 space-y-2">
                  <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website (e.g., Google Analytics).</li>
                  <li><strong>Tracking Pixels:</strong> Used to measure the effectiveness of our advertising campaigns.</li>
                </ul>
                <p className="mt-4 text-brand-dark/70">You can control the use of cookies at the individual browser level, but if you choose to disable cookies, it may limit your use of certain features or functions on our website.</p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">SMS Messaging & A2P 10DLC Compliance</h2>
                <p className="text-brand-dark/70 leading-relaxed mb-4">
                  True Rank Digital offers SMS messaging for transactional and marketing purposes. By providing your phone number and opting in, you agree to receive text messages from us.
                </p>
                <div className="space-y-4 text-brand-dark/70">
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark">How Consent is Obtained</h3>
                    <p>Consent is obtained when you voluntarily provide your phone number on our website forms and check the opt-in box. Opt-in is not required to purchase any goods or services.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark">Types of Messages</h3>
                    <p>Users may receive transactional messages (appointment reminders, project updates, support) or marketing messages (promotional offers, industry news). Message frequency varies based on your interaction with us.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark">Unsubscribing and Opt-out</h3>
                    <p>You may opt-out of SMS communications at any time by replying <strong>STOP</strong> to any message you receive from us. You can also reply <strong>HELP</strong> for assistance.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark">Fees and Liability</h3>
                    <p>Message and data rates may apply from your carrier. Carriers are not responsible for delayed or undelivered messages.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark">Age Requirement</h3>
                    <p>By opting into SMS, you verify that you are 18 years of age or older.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Phone Number & Data Sharing</h2>
                <p className="text-brand-dark/70 leading-relaxed mb-4">
                  <strong>Mobile Information Sharing:</strong> No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Your Data Rights</h2>
                <p className="text-brand-dark/70 leading-relaxed mb-4">
                  You have the right to access, correct, or delete your personal data.
                </p>
                <ul className="list-disc list-inside text-brand-dark/70 space-y-2">
                  <li><strong>Access:</strong> You may request a copy of the data we hold about you.</li>
                  <li><strong>Deletion:</strong> You may request that we delete your personal information from our systems.</li>
                  <li><strong>Correction:</strong> You may request that we update or correct inaccurate information.</li>
                </ul>
                <p className="mt-4">To exercise these rights, please email us at <a href="mailto:privacy@truerankdigital.com" className="text-brand-primary hover:underline">privacy@truerankdigital.com</a>.</p>
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
                  <p className="text-brand-dark"><strong>Address:</strong> 288 Summerhill Rd, suite 3, East Brunswick, NJ 08816</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
