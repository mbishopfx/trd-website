'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Target, TrendingUp } from 'lucide-react';

export default function AIOHeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-accent via-purple-600 to-brand-primary text-white relative overflow-hidden">
      
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
              <Brain className="w-5 h-5 text-white" />
              <span className="text-white font-semibold text-sm">AIO Technology</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              AI-Optimized SEO
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Revolutionary Technology
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Discover True Rank Digital&apos;s proprietary in-house technology platform. We don&apos;t just implement solutions—we FIND the problems and BUILD the custom tech to solve them. No other digital marketing team creates their own software.
            </p>
          </motion.div>
        </div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <Brain className="w-8 h-8" />,
              title: 'Schema Markup',
              subtitle: 'Custom structured data implementation'
            },
            {
              icon: <Target className="w-8 h-8" />,
              title: 'LLM.txt Creation',
              subtitle: 'AI-optimized content for search engines'
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: 'Problem Detection',
              subtitle: 'We find issues others miss and build solutions'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
              className="glass p-8 text-center hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="text-white/80 group-hover:text-white mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">{feature.title}</h3>
              <p className="text-white/80 text-sm">{feature.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-brand-primary font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-5 h-5" />
            <span>Experience AIO Technology</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
