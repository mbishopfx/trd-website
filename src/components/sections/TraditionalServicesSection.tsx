'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Globe, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: 'Local SEO & Google Maps',
    description: 'Appear in local searches and attract nearby customers with AI-powered local optimization.',
    features: ['Google Maps optimization', 'Local keyword targeting', 'Citation building', 'Review management']
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Google Business Profile Management',
    description: 'Stand out with optimized business listings, automated review management, and enhanced local visibility.',
    features: ['Profile optimization', 'Review automation', 'Photo management', 'Local insights']
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'SEO-Optimized Websites',
    description: 'Fast-loading websites built for search engines with AI-enhanced semantic structure.',
    features: ['Mobile-responsive design', 'Core Web Vitals', 'Schema markup', 'Speed optimization']
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Performance Tracking',
    description: 'Real-time tracking and detailed monthly reports with advanced AI analytics.',
    features: ['Ranking monitoring', 'Traffic analysis', 'Conversion tracking', 'ROI reporting']
  }
];

export default function TraditionalServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - GEO Optimized Question-Based H2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
            How <strong className="text-brand-primary">True Rank Digital</strong> Helps Your Business Grow with SEO
          </h2>
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
            Our core <strong>SEO services</strong> are designed specifically for <strong>small businesses</strong> who want real results without the complexity. <strong>True Rank Digital</strong> delivers proven <strong>local SEO</strong>, <strong>Google Business Profile</strong> optimization, and <strong>website development</strong> services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center hover:shadow-glass-lg transition-all duration-300 group"
            >
              <div className="text-brand-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-brand-dark/70 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="text-sm text-brand-dark/60 space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
