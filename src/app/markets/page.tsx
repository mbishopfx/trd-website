import type { Metadata } from 'next';
import { Building2, MapPin, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Markets - True Rank Digital Service Areas',
  description: 'Discover the markets and industries True Rank Digital serves. From local businesses to enterprise clients across multiple sectors.',
  keywords: 'True Rank Digital markets, service areas, industries served, local SEO markets',
};

export default function MarketsPage() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-brand-light/20 to-white">
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-primary/10 rounded-full mb-6">
            <Building2 className="w-5 h-5 text-brand-primary" />
            <span className="text-brand-primary font-semibold text-sm">Our Markets</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
            Markets We Serve
          </h1>
          
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto mb-12">
            True Rank Digital provides SEO and digital marketing services to help businesses improve their online presence and reach their goals.
          </p>

          {/* Market Stats */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="w-8 h-8" />,
                metric: 'Regional',
                label: 'Service Focus',
                color: 'from-brand-primary to-brand-secondary'
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                metric: 'Various',
                label: 'Industries',
                color: 'from-brand-secondary to-brand-accent'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                metric: 'Dedicated',
                label: 'Client Service',
                color: 'from-brand-accent to-purple-600'
              }
            ].map((stat, index) => (
              <div key={index} className="glass-card p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-brand-dark mb-2">{stat.metric}</div>
                <div className="text-brand-dark/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-primary/90 transition-colors duration-300"
            >
              <span>Discuss Your Market</span>
              <TrendingUp className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
