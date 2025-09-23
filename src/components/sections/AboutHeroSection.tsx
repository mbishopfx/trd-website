'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Zap } from 'lucide-react';

export default function AboutHeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-light via-white to-brand-light/50 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F7FFF' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Content */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-primary/10 rounded-full mb-6">
              <Users className="w-5 h-5 text-brand-primary" />
              <span className="text-brand-primary font-semibold text-sm">About Our Company</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
              About True Rank Digital
            </h1>
            
            <p className="text-xl lg:text-2xl text-brand-dark/70 max-w-4xl mx-auto leading-relaxed">
              We are a team of digital marketing experts dedicated to helping businesses thrive in the online world 
              through enterprise-level solutions and proprietary technology.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
            {[
              {
                icon: <Award className="w-8 h-8" />,
                value: 'Professional',
                label: 'Service',
                description: 'Quality SEO and digital marketing'
              },
              {
                icon: <Users className="w-8 h-8" />,
                value: 'Dedicated',
                label: 'Team',
                description: 'Committed to client success'
              },
              {
                icon: <Target className="w-8 h-8" />,
                value: 'Strategic',
                label: 'Approach',
                description: 'Customized solutions'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                value: 'Responsive',
                label: 'Support',
                description: 'Available when you need us'
              }
            ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
              className="glass-card p-6 text-center hover:shadow-glass-lg transition-all duration-300"
            >
              <div className="text-brand-primary mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-brand-dark mb-2">{stat.value}</div>
              <div className="text-brand-dark font-semibold mb-1">{stat.label}</div>
              <div className="text-brand-dark/60 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
