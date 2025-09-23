'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Star, Wrench, Utensils, Heart, Scale, Dumbbell } from 'lucide-react';

export default function LocalBusinessPage() {
  const localIndustries = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Home Services',
      description: 'Plumbing, HVAC, electrical, roofing, and general contractors',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Restaurants & Food',
      description: 'Restaurants, cafes, catering, food delivery services',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Healthcare & Wellness',
      description: 'Medical practices, dental offices, wellness centers, spas',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'Professional Services',
      description: 'Legal services, accounting, real estate, consulting',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: 'Fitness & Recreation',
      description: 'Gyms, fitness studios, sports facilities, recreation centers',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Personal Services',
      description: 'Salons, barbershops, pet services, cleaning services',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const localServices = [
    {
      title: 'Google Business Profile Optimization',
      description: 'Complete optimization of your Google Business Profile for maximum local visibility'
    },
    {
      title: 'Local SEO Strategy',
      description: 'Location-based keyword targeting and local search optimization'
    },
    {
      title: 'Citation Building',
      description: 'Consistent NAP (Name, Address, Phone) across all local directories'
    },
    {
      title: 'Review Management',
      description: 'Strategic approach to generating and managing customer reviews'
    },
    {
      title: 'Local Content Creation',
      description: 'Location-specific content that resonates with your community'
    },
    {
      title: 'Mobile Optimization',
      description: 'Ensuring your website works perfectly for mobile local searches'
    }
  ];

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
              Local Business Marketing
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Specialized digital marketing solutions for local businesses. Get found by customers in your area with our proven local SEO strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Local Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              We understand the unique challenges and opportunities facing different types of local businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localIndustries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center hover:shadow-glass-lg transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {industry.icon}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                  {industry.title}
                </h3>
                <p className="text-brand-dark/70 text-sm">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Services */}
      <section className="py-20 bg-brand-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
              Local SEO Services
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Comprehensive local marketing solutions designed to help your business dominate local search results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-brand-primary mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-heading font-bold text-brand-dark">
                    {service.title}
                  </h3>
                </div>
                <p className="text-brand-dark/70">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">
                Why Local SEO Matters
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Star className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-2">Local Search Dominance</h3>
                    <p className="text-brand-dark/70">Most customers search for local businesses online before making purchasing decisions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-2">Geographic Targeting</h3>
                    <p className="text-brand-dark/70">Reach customers exactly when they're looking for businesses in your area.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-2">Community Connection</h3>
                    <p className="text-brand-dark/70">Build stronger connections with your local community through targeted digital presence.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6">
                Local Business Benefits
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-brand-dark/70">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  Increased foot traffic to physical locations
                </li>
                <li className="flex items-center text-brand-dark/70">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  Higher conversion rates from local searches
                </li>
                <li className="flex items-center text-brand-dark/70">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  Better visibility in Google Maps results
                </li>
                <li className="flex items-center text-brand-dark/70">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  Improved online reputation management
                </li>
                <li className="flex items-center text-brand-dark/70">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  Competitive advantage over local competitors
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              Ready to Dominate Local Search?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create a local SEO strategy that gets your business found by customers in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/free-audit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-brand-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                <span>Get Free Local Audit</span>
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-brand-primary transition-all duration-300"
              >
                <span>Contact Us Today</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
