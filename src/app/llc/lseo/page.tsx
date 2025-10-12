'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Search,
  CheckCircle,
  XCircle,
  Clock,
  MapPin,
  TrendingUp,
  Target,
  Star,
  ArrowRight,
  AlertTriangle,
  Users
} from 'lucide-react';
import ConsultationForm from '@/components/sections/ConsultationForm';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';

export default function LSEOPage() {
  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Google 3-Pack Domination',
      description: 'Get into the top 3 local results where 90% of clicks happen'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Maps Visibility',
      description: 'Show up when customers search for services near them'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Immediate Momentum',
      description: 'Start generating leads within weeks, not months'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Real Foot Traffic',
      description: 'Drive actual customers to your physical location'
    }
  ];

  const whatYouGet = [
    'Complete local keyword research and strategy',
    'Google Business Profile optimization',
    'NAP (Name, Address, Phone) consistency audit',
    'Local citation building and management',
    'Local content creation strategy',
    'Google Maps optimization',
    'Location page creation and optimization',
    'Service area targeting and expansion',
    'Local link building strategy',
    'Review generation and management system',
    'Competitor analysis and gap identification',
    'Monthly local SEO performance reports'
  ];

  const commonMistakes = [
    {
      mistake: 'Only focusing on organic SEO, ignoring local',
      why: 'Takes 6-12 months to rank organically while local SEO can generate leads in weeks'
    },
    {
      mistake: 'Inconsistent business information across platforms',
      why: 'Google doesn\'t trust conflicting data and won\'t rank you in the 3-Pack'
    },
    {
      mistake: 'No citation building or local directory presence',
      why: 'Missing signals Google uses to determine local authority and relevance'
    },
    {
      mistake: 'Not targeting nearby cities and service areas',
      why: 'Leaving massive opportunities on the table by only focusing on one location'
    }
  ];

  const timeline = [
    { phase: 'Local SEO Audit', duration: '3-5 days', description: 'Analyze current local presence and identify opportunities' },
    { phase: 'Foundation Building', duration: '7-10 days', description: 'NAP consistency, citation building, and GBP optimization' },
    { phase: 'Content Optimization', duration: '5-7 days', description: 'Location pages, service pages, and local content creation' },
    { phase: 'Link Building & Citations', duration: '10-14 days', description: 'Build local authority through strategic citations and links' },
    { phase: 'Ongoing Optimization', duration: 'Monthly', description: 'Continuous monitoring, reporting, and strategy refinement' }
  ];

  const whyLocalFirst = [
    {
      title: 'Faster Results',
      description: 'Local SEO generates leads in 3-6 weeks. Organic SEO takes 6-12 months.',
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: 'Lower Competition',
      description: 'You\'re competing with local businesses, not national brands with huge budgets.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Higher Intent',
      description: 'Local searchers are ready to buy now, not just researching.',
      icon: <Target className="w-6 h-6" />
    }
  ];

  return (
    <>
      <ComprehensiveSchema
        type="service"
        pageData={{
          title: "LSEO (Local SEO) - Business Starter Pack | True Rank Digital",
          description: "Get discovered in Maps, not lost in searches. LSEO pushes your business straight into the Google 3-Pack where real leads live.",
          url: "https://truerankdigital.com/llc/lseo",
          keywords: ["local SEO", "Google 3-Pack", "Google Maps SEO", "local business SEO", "local search optimization"],
          category: "Local SEO",
          offers: [{
            name: "LSEO - Local Search Engine Optimization",
            description: "Complete local SEO strategy for Google 3-Pack domination"
          }]
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Business Starter Pack", url: "https://truerankdigital.com/llc" },
          { name: "LSEO", url: "https://truerankdigital.com/llc/lseo" }
        ]}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 relative overflow-hidden">
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
                  <Search className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                  LSEO (Local Search Engine Optimization)
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Get discovered in Maps, not lost in searches. LSEO pushes your business straight into the 3-Pack — where real leads live.
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
                Local SEO creates immediate momentum. While organic SEO takes months, local SEO generates leads in weeks.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {whyLocalFirst.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 text-center"
                >
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-brand-primary">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-brand-dark/70">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6">
                  The Google 3-Pack is Where Leads Live
                </h3>
                <p className="text-lg text-brand-dark/70 mb-4">
                  When someone searches "plumber near me" or "lawyer in [city]", Google shows the 3-Pack: 
                  the top 3 local businesses with maps, reviews, and phone numbers.
                </p>
                <p className="text-lg text-brand-dark/70 mb-4">
                  These 3 spots get 93% of all clicks. If you're not in the 3-Pack, you might as well not exist.
                </p>
                <div className="glass-card p-6 bg-orange-50 border-l-4 border-orange-500">
                  <p className="text-lg text-brand-dark font-semibold mb-2">
                    The Numbers Don't Lie:
                  </p>
                  <ul className="space-y-2 text-brand-dark/70">
                    <li>• 3-Pack gets 93% of local search clicks</li>
                    <li>• Position #4-10 share the remaining 7%</li>
                    <li>• Page 2 gets less than 1%</li>
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
                  What Makes Local SEO Different
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-brand-dark">Proximity Matters</p>
                      <p className="text-sm text-brand-dark/70">Google prioritizes businesses near the searcher</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-brand-dark">Reviews Are Ranking Factors</p>
                      <p className="text-sm text-brand-dark/70">Quantity and quality of reviews directly impact rankings</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-brand-dark">Citations Build Authority</p>
                      <p className="text-sm text-brand-dark/70">Consistent mentions across directories increase trust</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-brand-dark">GBP is the Foundation</p>
                      <p className="text-sm text-brand-dark/70">Your Google Business Profile is the #1 ranking factor</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
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

        {/* What You Get Section */}
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
                What You Get
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Complete local SEO strategy designed to dominate your market.
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
        <section className="py-20 bg-white">
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
                These local SEO mistakes cost new businesses months of wasted time.
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

        {/* Timeline Section */}
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
                What to Expect: Our Process
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Start seeing results in 3-6 weeks with our proven local SEO strategy.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {timeline.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 flex items-start space-x-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-heading font-bold text-brand-dark">
                        {phase.phase}
                      </h3>
                      <div className="flex items-center space-x-2 text-brand-secondary">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-semibold">{phase.duration}</span>
                      </div>
                    </div>
                    <p className="text-brand-dark/70">
                      {phase.description}
                    </p>
                  </div>
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
                Ready to Dominate the 3-Pack?
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
                Get your business into Google's 3-Pack and start generating real leads.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ConsultationForm
                title="Schedule Your Local SEO Strategy Session"
                description="Let's map out your path to 3-Pack domination."
                subjectPrefix="LSEO"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

