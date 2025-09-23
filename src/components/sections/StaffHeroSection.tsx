'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Star, TrendingUp } from 'lucide-react';

export default function StaffHeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary text-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Users className="w-5 h-5 text-white" />
              <span className="text-white font-semibold text-sm">Meet Our Team</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              Meet Our Expert Team
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              The talented professionals behind True Rank Digital's industry-leading AI-enhanced SEO solutions and exceptional client results.
            </p>
          </motion.div>
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-4 gap-6"
        >
          {[
            {
              icon: <Users className="w-6 h-6" />,
              title: 'Dedicated Team',
              subtitle: 'Professional team focused on your success'
            },
            {
              icon: <Award className="w-6 h-6" />,
              title: 'Quality Service',
              subtitle: 'Committed to delivering excellent work'
            },
            {
              icon: <Star className="w-6 h-6" />,
              title: 'Client Focus',
              subtitle: 'Your business goals are our priority'
            },
            {
              icon: <TrendingUp className="w-6 h-6" />,
              title: 'Responsive Support',
              subtitle: 'Available to help when you need us'
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
              className="glass p-6 text-center hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-white/80 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="font-semibold text-white mb-2">{stat.title}</h3>
              <p className="text-white/70 text-sm">{stat.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
