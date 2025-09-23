'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Clock, Award } from 'lucide-react';

export default function AIOResultsSection() {
  const results = [
    {
      metric: 'Professional',
      label: 'Service Approach',
      description: 'We focus on delivering quality SEO and digital marketing services',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      metric: 'Dedicated',
      label: 'Team Support',
      description: 'Our team works closely with clients to achieve their goals',
      icon: <Target className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      metric: 'Strategic',
      label: 'SEO Approach',
      description: 'We develop customized strategies for each client\'s unique needs',
      icon: <Clock className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      metric: 'Reliable',
      label: 'Service Delivery',
      description: 'Consistent communication and quality work for our clients',
      icon: <Award className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Our Service Values
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            The core principles that guide how we work with our clients to deliver quality SEO and digital marketing services.
          </p>
        </motion.div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 text-center hover:bg-white/15 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${result.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {result.icon}
                </div>
              </div>

              <div className="text-4xl font-bold mb-2">{result.metric}</div>
              <h3 className="text-lg font-semibold mb-3">{result.label}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{result.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-heading font-bold mb-6">
            Ready to Work with Us?
          </h3>
          <motion.a
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-brand-primary font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Contact Us Today</span>
            <TrendingUp className="w-5 h-5" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
