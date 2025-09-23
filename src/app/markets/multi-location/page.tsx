'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, Globe, Users, Star, Settings, Target, BarChart3 } from 'lucide-react';

export default function MultiLocationPage() {
  const multiLocationChallenges = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Consistent NAP Management',
      description: 'Managing consistent Name, Address, Phone across all locations and directories',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Individual Location Optimization',
      description: 'Optimizing each location for local search while maintaining brand consistency',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Centralized Management',
      description: 'Efficient management systems for multiple Google Business Profiles',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Review Management',
      description: 'Coordinated review generation and management across all locations',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Brand Consistency',
      description: 'Maintaining uniform brand messaging while allowing location-specific content',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Performance Tracking',
      description: 'Comprehensive analytics and reporting across multiple locations',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const multiLocationServices = [
    {
      title: 'Multi-Location SEO Strategy',
      description: 'Comprehensive strategy for optimizing multiple business locations simultaneously'
    },
    {
      title: 'Google Business Profile Management',
      description: 'Professional management of all your Google Business Profiles from a central system'
    },
    {
      title: 'Local Directory Optimization',
      description: 'Consistent business listings across all major local directories for each location'
    },
    {
      title: 'Location-Specific Content',
      description: 'Customized content strategies that maintain brand consistency across locations'
    },
    {
      title: 'Centralized Review Management',
      description: 'Systematic approach to generating and managing reviews for all locations'
    },
    {
      title: 'Performance Analytics',
      description: 'Detailed reporting and analytics for individual locations and overall performance'
    }
  ];

  const businessTypes = [
    {
      type: 'Retail Chains',
      description: 'Clothing stores, electronics, furniture, and other retail operations'
    },
    {
      type: 'Restaurant Groups',
      description: 'Restaurant chains, coffee shops, fast food, and food service businesses'
    },
    {
      type: 'Healthcare Systems',
      description: 'Medical practices, dental offices, urgent care, and healthcare networks'
    },
    {
      type: 'Service Franchises',
      description: 'Auto services, home services, fitness centers, and franchise operations'
    },
    {
      type: 'Financial Services',
      description: 'Banks, credit unions, insurance offices, and financial planning firms'
    },
    {
      type: 'Professional Services',
      description: 'Law firms, accounting practices, real estate offices, and consulting groups'
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
              Multi-Location Marketing
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Specialized digital marketing solutions for businesses with multiple locations. Coordinate your local SEO strategy across all your business locations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Multi-Location Stats */}
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
              Multi-Location Expertise
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Professional solutions designed for the unique challenges of managing multiple business locations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Building2 className="w-6 h-6" />, title: 'Multi-Location Focus', description: 'Specialized strategies for businesses with multiple locations' },
              { icon: <Settings className="w-6 h-6" />, title: 'Centralized Management', description: 'Efficient systems for managing all locations from one place' },
              { icon: <Target className="w-6 h-6" />, title: 'Local Optimization', description: 'Each location optimized for its specific local market' },
              { icon: <BarChart3 className="w-6 h-6" />, title: 'Comprehensive Reporting', description: 'Detailed analytics across all locations and overall performance' }
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 glass-card hover:shadow-glass transition-all duration-300"
              >
                <div className="text-brand-primary mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                  {stat.title}
                </h3>
                <p className="text-brand-dark/70 text-sm">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Location Challenges */}
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
              Multi-Location Challenges We Solve
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Complex challenges require specialized solutions designed for multi-location business operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {multiLocationChallenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center hover:shadow-glass-lg transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${challenge.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {challenge.icon}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                  {challenge.title}
                </h3>
                <p className="text-brand-dark/70 text-sm">
                  {challenge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types */}
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
              Business Types We Serve
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              We work with various types of multi-location businesses across different industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessTypes.map((business, index) => (
              <motion.div
                key={business.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Building2 className="w-6 h-6 text-brand-primary mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-heading font-bold text-brand-dark">
                    {business.type}
                  </h3>
                </div>
                <p className="text-brand-dark/70">
                  {business.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
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
              Multi-Location Services
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Comprehensive services designed specifically for multi-location business operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {multiLocationServices.map((service, index) => (
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

      {/* Benefits */}
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
                Multi-Location Benefits
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Settings className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-2">Centralized Management</h3>
                    <p className="text-brand-dark/70">Manage all your locations efficiently from one centralized system and dashboard.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Target className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-2">Consistent Brand Presence</h3>
                    <p className="text-brand-dark/70">Maintain brand consistency while optimizing each location for its local market.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <BarChart3 className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-2">Comprehensive Analytics</h3>
                    <p className="text-brand-dark/70">Track performance across all locations with detailed analytics and reporting.</p>
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
                Why Choose Our Multi-Location Services
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-brand-dark/70">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  Specialized expertise in multi-location SEO
                </li>
                <li className="flex items-center text-brand-dark/70">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  Efficient management systems and processes
                </li>
                <li className="flex items-center text-brand-dark/70">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  Consistent NAP management across all directories
                </li>
                <li className="flex items-center text-brand-dark/70">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  Coordinated review management strategies
                </li>
                <li className="flex items-center text-brand-dark/70">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  Detailed performance tracking and reporting
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
              Ready to Optimize All Your Locations?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create a comprehensive strategy that coordinates your local SEO across all business locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/free-audit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-brand-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                <span>Get Multi-Location Audit</span>
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-brand-primary transition-all duration-300"
              >
                <span>Schedule Consultation</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
