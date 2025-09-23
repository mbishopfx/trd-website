'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Search, BarChart3, Zap, Globe, Target, Code, Shield } from 'lucide-react';

export default function AIOFeaturesSection() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Schema Markup Engineering',
      description: 'Custom structured data implementation for each business type. We build unique schema markup that helps search engines understand your content better than competitors.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'LLM.txt Optimization',
      description: 'We create and optimize LLM.txt files specifically for AI search engines. This cutting-edge technique helps your content rank in AI-powered search results.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Problem Detection System',
      description: 'Our proprietary software scans websites to find SEO issues other agencies miss. We identify problems at the code level that impact rankings.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Custom Solution Building',
      description: 'We don\'t use off-the-shelf tools. When we find a problem, we build custom software solutions to fix it. No other marketing team does this.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Technical SEO Auditing',
      description: 'Deep technical analysis of site structure, page speed, mobile optimization, and crawlability issues using our custom-built auditing tools.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Semantic HTML Optimization',
      description: 'We optimize HTML structure and semantic markup to help search engines better understand your content context and relevance.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Proprietary Script Development',
      description: 'Our development team creates custom scripts and tools for automation, monitoring, and optimization specific to your business needs.',
      color: 'from-gray-500 to-blue-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Advanced Crawl Optimization',
      description: 'We optimize robots.txt, XML sitemaps, and internal linking structure using technical analysis that goes beyond standard practices.',
      color: 'from-emerald-500 to-green-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
            In-House Technology Platform
          </h2>
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
            We don't just implement SEO strategies—we BUILD the technology that powers them. Our proprietary software finds problems other agencies miss and creates custom solutions that give you a competitive edge.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-lg font-heading font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-brand-dark/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
