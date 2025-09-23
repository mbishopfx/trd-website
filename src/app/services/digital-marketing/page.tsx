import type { Metadata } from 'next';
import { TrendingUp, Target, BarChart3, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Marketing Services - True Rank Digital',
  description: 'Comprehensive digital marketing campaigns that drive traffic, leads, and sales with AI-powered optimization.',
  keywords: 'digital marketing, online marketing, lead generation, traffic growth',
};

export default function DigitalMarketingPage() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-100 rounded-full mb-6">
            <TrendingUp className="w-5 h-5 text-yellow-600" />
            <span className="text-yellow-600 font-semibold text-sm">Digital Marketing</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
            Digital Marketing Services
          </h1>
          
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto mb-12">
            Comprehensive digital marketing campaigns that drive traffic, leads, and sales with AI-powered optimization and automation.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6">
              <Target className="w-8 h-8 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-brand-dark mb-2">Targeted Campaigns</h3>
              <p className="text-brand-dark/70 text-sm">Precision marketing for your audience</p>
            </div>
            <div className="glass-card p-6">
              <BarChart3 className="w-8 h-8 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-brand-dark mb-2">Data-Driven</h3>
              <p className="text-brand-dark/70 text-sm">Analytics-based optimization</p>
            </div>
            <div className="glass-card p-6">
              <Users className="w-8 h-8 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-brand-dark mb-2">Lead Generation</h3>
              <p className="text-brand-dark/70 text-sm">Convert visitors into customers</p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
              Ready to Grow Your Business?
            </h2>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-yellow-600 text-white font-semibold text-lg rounded-full hover:bg-yellow-700 transition-colors duration-300"
            >
              <TrendingUp className="w-5 h-5" />
              <span>Start Growing</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
