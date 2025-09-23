import type { Metadata } from 'next';
import { Globe, TrendingUp, ShoppingCart, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ecommerce Optimization Services - True Rank Digital',
  description: 'Scale your online store with advanced ecommerce optimization strategies. From $5M to $100M+ revenue growth.',
  keywords: 'ecommerce optimization, online store SEO, ecommerce marketing, revenue growth',
};

export default function EcommerceOptimizationPage() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
            <ShoppingCart className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-600 font-semibold text-sm">Ecommerce Optimization</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
            Ecommerce Optimization
          </h1>
          
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto mb-12">
            Scale your online business globally with our advanced ecommerce optimization strategies. From $5M to $100M+ revenue growth.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6">
              <Globe className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-brand-dark mb-2">Global Reach</h3>
              <p className="text-brand-dark/70 text-sm">Expand to international markets</p>
            </div>
            <div className="glass-card p-6">
              <TrendingUp className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-brand-dark mb-2">Revenue Growth</h3>
              <p className="text-brand-dark/70 text-sm">Proven strategies for scaling</p>
            </div>
            <div className="glass-card p-6">
              <DollarSign className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-brand-dark mb-2">ROI Focus</h3>
              <p className="text-brand-dark/70 text-sm">Maximize return on investment</p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
              Ready to Scale Your Ecommerce Business?
            </h2>
            <p className="text-brand-dark/70 mb-6">
              Let our experts help you achieve explosive growth with proven optimization strategies.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-emerald-600 text-white font-semibold text-lg rounded-full hover:bg-emerald-700 transition-colors duration-300"
            >
              <TrendingUp className="w-5 h-5" />
              <span>Scale My Business</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
