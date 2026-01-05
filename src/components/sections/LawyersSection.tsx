'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scale, TrendingUp, Target, BarChart3, Shield, Zap, ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

export default function LawyersSection() {
  const features = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: 'Local Pack Domination',
      description: 'Appear in the top 3 Google local results when potential clients search for "lawyer near me" or "attorney in [your city]". Our proprietary grid map ranking system tracks your position across multiple locations.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Practice Area Targeting',
      description: 'Dominate searches for your specific practice areas - personal injury, family law, criminal defense, DUI, bankruptcy, and more. We optimize for high-value keywords that drive qualified client inquiries.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Review Management & Generation',
      description: 'Build and manage your Google reviews to establish trust and credibility. Positive reviews are critical for law firms - we help you generate authentic reviews while managing your online reputation.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Google Business Profile Optimization',
      description: 'Fully optimized Google Business Profile with practice area descriptions, attorney credentials, office locations, hours, and posts. Essential for appearing in local search results and Google Maps.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Competitive Analysis',
      description: 'Understand exactly where you rank vs. competitors. Our dashboard shows your position across different practice areas and locations, identifying opportunities to outrank competing firms.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Case Study Tracking',
      description: 'Track which practice areas and locations generate the most client inquiries. Make data-driven decisions about where to focus your marketing efforts and which keywords drive the best leads.',
      color: 'from-pink-500 to-rose-500'
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
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
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
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Scale className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm">For Law Firms & Attorneys</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
            <strong className="text-brand-primary">Google Business Optimization</strong> for <br />
            <strong className="text-brand-primary">Law Firms & Attorneys</strong>
          </h2>
          
          <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto leading-relaxed">
            Dominate local search results and dominate the Google local pack when potential clients search for legal services. 
            <strong> True Rank Digital</strong> specializes in helping law firms and attorneys appear in the top 3 Google results 
            for high-value practice area keywords, driving more qualified client inquiries and cases.
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
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-brand-dark/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Lawyers Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card p-8 lg:p-12 mb-16 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                Why <strong className="text-brand-primary">Law Firms</strong> Choose True Rank Digital
              </h3>
              <p className="text-lg text-brand-dark/70 leading-relaxed mb-6">
                Legal marketing is highly competitive, and appearing in Google's local pack (the top 3 results) can make or break your 
                firm's ability to attract new clients. Unlike traditional SEO agencies, we focus specifically on <strong>local pack domination</strong> 
                and <strong>Google Business Profile optimization</strong> - the two most critical factors for law firm client acquisition.
              </p>
              <p className="text-lg text-brand-dark/70 leading-relaxed mb-6">
                Our proprietary grid map ranking system shows you exactly where you rank across different practice areas and locations, 
                giving you actionable insights into which keywords drive the best results. We understand the legal industry's unique needs 
                - from bar association compliance to practice area specialization - and optimize accordingly.
              </p>
              <ul className="space-y-4 text-brand-dark/70">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span className="text-lg">Track rankings for multiple practice areas (personal injury, family law, DUI, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span className="text-lg">Optimize for high-value keywords that drive case inquiries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span className="text-lg">Multi-location optimization for firms with multiple offices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span className="text-lg">Review generation and reputation management for trust building</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                <div className="text-4xl font-bold text-brand-primary mb-2">85%</div>
                <div className="text-brand-dark/70">of potential clients click on the top 3 local pack results</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <div className="text-4xl font-bold text-brand-primary mb-2">3x</div>
                <div className="text-brand-dark/70">more inquiries when appearing in local pack vs. organic results</div>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-6 border border-pink-100">
                <div className="text-4xl font-bold text-brand-primary mb-2">92%</div>
                <div className="text-brand-dark/70">of legal searches include location-based keywords ("near me", "[city] lawyer")</div>
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
              href="/free-audit"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-brand-primary text-white font-semibold text-lg rounded-full hover:bg-brand-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <TrendingUp className="w-5 h-5" />
              <span>Get Free Law Firm Audit</span>
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
          <p className="text-brand-dark/60 mt-4 text-sm">
            See exactly where you rank vs. competitors • No obligations • Results in 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
