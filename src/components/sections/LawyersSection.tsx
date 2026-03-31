'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Target, BarChart3, Shield, Zap, ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

export default function LawyersSection() {
  const features = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Local Pack Coverage',
      description: 'Increase visibility in Google local results when buyers search for services and solutions near them. Our grid ranking system tracks your footprint across your target territory.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Service & Intent Targeting',
      description: 'Win searches for your core services, products, and high-intent buyer phrases. We optimize for the terms that generate qualified pipeline, calls, and form submissions.',
      color: 'from-brand-cyan to-brand-blue'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Review & Reputation Momentum',
      description: 'Build trust with a structured review and reputation workflow. We help you generate more high-quality reviews and improve how your brand appears across local and AI-assisted search experiences.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Google Business Profile Optimization',
      description: 'Fully optimized Google Business Profile with service descriptions, categories, location data, hours, and posts. Essential for appearing in Maps and local results.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Competitive Analysis',
      description: 'Understand exactly where you rank versus competitors. Our dashboard maps competitor gaps by query and location so you know where to push next.',
      color: 'from-blue-600 to-blue-400'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Revenue Signal Tracking',
      description: 'Track which services and locations generate the best inbound demand. Make data-driven decisions on where to focus spend and execution for measurable growth.',
      color: 'from-brand-blue to-brand-cyan'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0f17] via-[#121722] to-[#0a0f17] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
            <Building2 className="w-5 h-5 text-brand-cyan" />
            <span className="text-brand-cyan font-semibold text-sm">Built for Growth-Focused Teams</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            <strong className="text-brand-primary">Google Business Optimization</strong> for <br />
            <strong className="text-brand-primary">Multi-Industry Brands</strong>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Dominate search and AI discovery when buyers look for the services you provide.
            <strong> True Rank Digital</strong> helps businesses improve visibility across modern search surfaces,
            so you capture more qualified demand across your core markets.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-8 h-full hover:shadow-glass-lg transition-all duration-300 relative overflow-hidden">
                
                {/* Background Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-white mb-4 group-hover:text-brand-primary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Teams Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-8 lg:p-12 mb-16 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
                Why <strong className="text-brand-primary">Growth Teams</strong> Choose True Rank Digital
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                Visibility is crowded, and showing up consistently in search and AI experiences can make or break customer acquisition.
                Unlike generic agencies, we focus on <strong>entity authority</strong>, <strong>technical discoverability</strong>, and <strong>conversion-ready presence</strong>
                tied to your business outcomes.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                Our proprietary grid map ranking system shows exactly where you rank across services and locations,
                giving you actionable insight into the terms that create the best inbound opportunities.
                Whether you are single-location, multi-location, or regional, we optimize for how buyers actually search.
              </p>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span className="text-lg">Track rankings across multiple services, categories, and locations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span className="text-lg">Prioritize high-intent queries that drive pipeline and revenue</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span className="text-lg">Scale multi-location optimization for brands with multiple offices or service zones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span className="text-lg">Strengthen trust with review generation and reputation workflows</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-700/65 to-zinc-800/80 rounded-2xl p-6 border border-white/10">
                <div className="text-xl font-bold text-brand-primary mb-2">Visibility</div>
                <div className="text-gray-300">Discovery coverage across search, maps, and AI answers drives more qualified opportunities.</div>
              </div>
              <div className="bg-gradient-to-br from-zinc-700/65 to-slate-800/80 rounded-2xl p-6 border border-white/10">
                <div className="text-xl font-bold text-brand-primary mb-2">Intent</div>
                <div className="text-gray-300">High-intent queries signal urgency and buying readiness across industries and service types.</div>
              </div>
              <div className="bg-gradient-to-br from-slate-800/80 to-zinc-700/65 rounded-2xl p-6 border border-white/10">
                <div className="text-xl font-bold text-brand-primary mb-2">Coverage</div>
                <div className="text-gray-300">We map visibility by market and topic to strengthen discoverability everywhere prospects search.</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-brand-primary text-white font-semibold text-lg rounded-full hover:bg-brand-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <TrendingUp className="w-5 h-5" />
              <span>Get Free Visibility Audit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+17324750139"
              className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-brand-primary text-brand-primary font-semibold text-lg rounded-full hover:bg-brand-primary/5 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>(732) 475-0139</span>
            </a>
          </div>
          <p className="text-gray-500 mt-4 text-sm">
            See exactly where you rank vs. competitors • No obligations • Fast turnaround
          </p>
        </motion.div>
      </div>
    </section>
  );
}
