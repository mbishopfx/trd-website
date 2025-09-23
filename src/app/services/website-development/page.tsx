import type { Metadata } from 'next';
import { Code, Smartphone, Zap, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Website Development Services - True Rank Digital',
  description: 'Fast-loading, SEO-optimized websites designed to convert visitors into customers.',
  keywords: 'website development, SEO websites, responsive design, fast loading',
};

export default function WebsiteDevelopmentPage() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
            <Code className="w-5 h-5 text-orange-600" />
            <span className="text-orange-600 font-semibold text-sm">Website Development</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
            Website Development
          </h1>
          
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto mb-12">
            Fast-loading, SEO-optimized websites designed to convert visitors into customers and rank high in search results.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6">
              <Zap className="w-8 h-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-brand-dark mb-2">Fast Loading</h3>
              <p className="text-brand-dark/70 text-sm">Optimized for speed and performance</p>
            </div>
            <div className="glass-card p-6">
              <Smartphone className="w-8 h-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-brand-dark mb-2">Mobile First</h3>
              <p className="text-brand-dark/70 text-sm">Responsive design for all devices</p>
            </div>
            <div className="glass-card p-6">
              <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-brand-dark mb-2">SEO Built-In</h3>
              <p className="text-brand-dark/70 text-sm">Optimized for search engines</p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">
              Need a High-Converting Website?
            </h2>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-orange-600 text-white font-semibold text-lg rounded-full hover:bg-orange-700 transition-colors duration-300"
            >
              <Code className="w-5 h-5" />
              <span>Start My Project</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
