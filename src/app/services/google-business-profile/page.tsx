import type { Metadata } from 'next';
import { Users, Star, MapPin, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Google Business Profile Management - True Rank Digital',
  description: 'Professional Google Business Profile management services to maximize your local visibility and customer engagement.',
  keywords: 'Google Business Profile, GBP management, local listings, review management',
};

export default function GoogleBusinessProfilePage() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm">GBP Management</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
            Google Business Profile Management
          </h1>
          
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto mb-12">
            Maximize your local presence with professional Google Business Profile optimization and management.
          </p>

          <div className="glass-card p-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
              Ready to Optimize Your Business Profile?
            </h2>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              <TrendingUp className="w-5 h-5" />
              <span>Get Started</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
