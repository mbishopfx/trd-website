'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Shield,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  TrendingUp,
  Eye,
  Bell,
  Zap,
  Target,
  Users
} from 'lucide-react';
import ConsultationForm from '@/components/sections/ConsultationForm';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';

export default function GBPWatchtowerPage() {
  const benefits = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring of your Google presence and performance'
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: 'Instant Alerts',
      description: 'Immediate notification of negative changes or threats'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Competitor Tracking',
      description: 'Monitor competitor movements and market changes'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Rapid Response',
      description: 'Quick action to protect and defend your rankings'
    }
  ];

  const whatYouGet = [
    'Real-time ranking position monitoring',
    'Google Business Profile change alerts',
    'Review monitoring and response tracking',
    'Competitor ranking movement alerts',
    'Keyword performance tracking',
    'Citation consistency monitoring',
    'Website uptime and performance alerts',
    'Search Console error notifications',
    'Local search visibility reports',
    'Monthly threat assessment reports',
    'Proactive optimization recommendations',
    'Direct access to support team for urgent issues'
  ];

  const commonMistakes = [
    {
      mistake: 'No monitoring until rankings drop',
      why: 'By the time you notice problems, you\'ve already lost weeks of leads and revenue'
    },
    {
      mistake: 'Only checking rankings manually once a month',
      why: 'Competitors and algorithm changes happen daily - monthly checks miss critical shifts'
    },
    {
      mistake: 'Not monitoring competitor movements',
      why: 'You\'re blindsided when competitors outrank you with strategies you didn\'t see coming'
    },
    {
      mistake: 'Reacting to problems instead of preventing them',
      why: 'Defensive SEO costs more and takes longer than proactive monitoring and maintenance'
    }
  ];

  const threats = [
    {
      threat: 'Google Business Profile Suspension',
      impact: 'Complete loss of local visibility overnight',
      prevention: 'Continuous policy compliance monitoring'
    },
    {
      threat: 'Competitor Outranking',
      impact: 'Loss of 3-Pack position and lead flow',
      prevention: 'Real-time ranking tracking and competitive analysis'
    },
    {
      threat: 'Negative Review Attacks',
      impact: 'Damaged reputation and reduced conversion rates',
      prevention: 'Review monitoring and rapid response system'
    },
    {
      threat: 'Citation Inconsistencies',
      impact: 'Ranking drops due to conflicting business information',
      prevention: 'Automated citation monitoring across directories'
    }
  ];

  const monitoringFeatures = [
    {
      category: 'Performance Monitoring',
      features: ['Rankings (daily)', 'Traffic trends', 'Conversion tracking', 'Click-through rates']
    },
    {
      category: 'Threat Detection',
      features: ['GBP policy violations', 'Suspicious activity', 'Negative SEO attacks', 'Competitor strategies']
    },
    {
      category: 'Opportunity Identification',
      features: ['Keyword gaps', 'Content opportunities', 'Link building prospects', 'Market shifts']
    }
  ];

  return (
    <>
      <ComprehensiveSchema
        type="service"
        pageData={{
          title: "GBP Watchtower & Defense System - Business Starter Pack | True Rank Digital",
          description: "Monitor, defend, and expand your Google presence 24/7. Our tools flag negative shifts, competitor threats, and keyword movement in real time.",
          url: "https://truerankdigital.com/llc/gbp-watchtower",
          keywords: ["SEO monitoring", "Google Business Profile monitoring", "reputation management", "local SEO tracking"],
          category: "SEO Services",
          offers: [{
            name: "GBP Watchtower + Defense System",
            description: "24/7 monitoring and threat detection for your Google presence"
          }]
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Business Starter Pack", url: "https://truerankdigital.com/llc" },
          { name: "GBP Watchtower", url: "https://truerankdigital.com/llc/gbp-watchtower" }
        ]}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link 
                  href="/llc"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 hover:bg-white/30 transition-colors"
                >
                  <span>← Back to Business Starter Pack</span>
                </Link>
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                  GBP Watchtower + Defense System
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Monitor, defend, and expand your Google presence 24/7. Our tools flag negative shifts, competitor threats, and keyword movement in real time.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why This Matters Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                Why This Matters for New LLCs
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                You can't protect what you don't monitor. Threats happen fast - detection must be faster.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6">
                  Momentum Loss is Expensive
                </h3>
                <p className="text-lg text-brand-dark/70 mb-4">
                  When you're a new business, every lead matters. Losing your rankings for even a few days 
                  means lost revenue you can't get back.
                </p>
                <p className="text-lg text-brand-dark/70 mb-4">
                  Without monitoring, you won't know you have a problem until customers stop calling. 
                  By then, competitors have captured your momentum.
                </p>
                <div className="glass-card p-6 bg-cyan-50 border-l-4 border-cyan-500">
                  <p className="text-lg text-brand-dark font-semibold mb-2">
                    The Cost of Not Monitoring:
                  </p>
                  <ul className="space-y-2 text-brand-dark/70">
                    <li>• Average of 14 days to detect ranking drops manually</li>
                    <li>• 30-60 days to recover lost rankings</li>
                    <li>• 40-60% loss in lead flow during downtime</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <h4 className="text-xl font-heading font-bold text-brand-dark mb-6">
                  Threats Happen 24/7
                </h4>
                <div className="space-y-4">
                  {threats.slice(0, 3).map((item, index) => (
                    <div key={index} className="border-l-4 border-red-500 pl-4">
                      <p className="font-semibold text-brand-dark mb-1">{item.threat}</p>
                      <p className="text-sm text-red-600 mb-2">Impact: {item.impact}</p>
                      <p className="text-sm text-green-600">Prevention: {item.prevention}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 text-center"
                >
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-brand-primary">
                      {benefit.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-heading font-bold text-brand-dark mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-brand-dark/70">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Monitoring Features Section */}
        <section className="py-20 bg-gradient-to-b from-brand-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                What We Monitor
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Comprehensive monitoring across all critical SEO and local search metrics.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {monitoringFeatures.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6"
                >
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                        <span className="text-brand-dark/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                What You Get
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Complete protection and monitoring for your Google presence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {whatYouGet.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 rounded-lg hover:bg-brand-light/30 transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
                  <span className="text-brand-dark">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes Section */}
        <section className="py-20 bg-gradient-to-b from-brand-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                Common Mistakes New Businesses Make
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                These monitoring failures cost businesses thousands in lost leads.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {commonMistakes.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 border-l-4 border-red-500"
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-heading font-bold text-brand-dark">
                      {item.mistake}
                    </h3>
                  </div>
                  <p className="text-brand-dark/70 pl-9">
                    <strong>Why it fails:</strong> {item.why}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Form Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                Ready to Protect Your Rankings?
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
                Get 24/7 monitoring and protection for your Google presence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ConsultationForm
                title="Schedule Your Watchtower Setup Session"
                description="Let's set up your 24/7 monitoring and defense system."
                subjectPrefix="GBP Watchtower"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

