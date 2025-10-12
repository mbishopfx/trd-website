'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  MapPin,
  CheckCircle,
  XCircle,
  Clock,
  Target,
  TrendingUp,
  Search,
  Star,
  ArrowRight,
  AlertTriangle,
  Users
} from 'lucide-react';
import ConsultationForm from '@/components/sections/ConsultationForm';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';

export default function GBPCreationPage() {
  const benefits = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Prime Local Visibility',
      description: 'Appear in Google Maps and local searches where customers are actively looking'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Credibility from Day One',
      description: 'Professional profile that builds instant trust with potential customers'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Precision Targeting',
      description: 'Every service, category, and city optimized for maximum reach'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Foundation for Growth',
      description: 'The starting point for all your local marketing efforts'
    }
  ];

  const whatYouGet = [
    'Complete Google Business Profile setup and verification',
    'Strategic category selection for maximum visibility',
    'Service area mapping and city targeting',
    'Professional business description optimization',
    'Product/service listings with keywords',
    'Business hours and special hours configuration',
    'Photo and video optimization guidelines',
    'Initial review strategy and setup',
    'Google Posts content calendar template',
    'Q&A section optimization',
    'Attribute selection for enhanced visibility',
    'Monthly monitoring and optimization plan'
  ];

  const commonMistakes = [
    {
      mistake: 'Basic setup without strategic optimization',
      why: 'Wastes your #1 local visibility opportunity with generic, unoptimized information'
    },
    {
      mistake: 'Wrong category or service selections',
      why: 'You won\'t show up in searches that matter, losing customers to competitors'
    },
    {
      mistake: 'Incomplete or inconsistent NAP information',
      why: 'Confuses Google and tanks your local rankings before you even start'
    },
    {
      mistake: 'No review generation strategy from launch',
      why: 'Takes 6+ months to build credibility while competitors dominate'
    }
  ];

  const timeline = [
    { phase: 'Business Verification', duration: '3-7 days', description: 'Google verification process via postcard, phone, or email' },
    { phase: 'Profile Engineering', duration: '2-3 days', description: 'Strategic optimization of all profile elements and settings' },
    { phase: 'Content & Media Setup', duration: '1-2 days', description: 'Photos, services, products, and initial posts' },
    { phase: 'Launch & Indexing', duration: '1-2 days', description: 'Profile publication and search visibility confirmation' },
    { phase: 'Ongoing Optimization', duration: 'Monthly', description: 'Continuous monitoring, updates, and performance tracking' }
  ];

  const engineeringVsBasic = [
    { feature: 'Business category selection', basic: 'Pick one obvious category', engineered: 'Strategic primary + secondary categories for maximum coverage' },
    { feature: 'Service area setup', basic: 'Add your city', engineered: 'Precision mapping of all service cities with radius optimization' },
    { feature: 'Business description', basic: 'Basic what we do text', engineered: 'Keyword-optimized copy that ranks and converts' },
    { feature: 'Service listings', basic: 'List a few services', engineered: 'Complete service catalog with keyword-targeted descriptions' },
    { feature: 'Attribute selection', basic: 'Skip or guess', engineered: 'Strategic attribute selection based on search behavior' }
  ];

  return (
    <>
      <ComprehensiveSchema
        type="service"
        pageData={{
          title: "Google Business Profile Creation - Business Starter Pack | True Rank Digital",
          description: "We don't just set up your GBP — we engineer it for dominance. Every tag, service, and city mapped for visibility from day one.",
          url: "https://truerankdigital.com/llc/gbp-creation",
          keywords: ["Google Business Profile setup", "GBP optimization", "local business visibility", "Google Maps ranking"],
          category: "Local SEO",
          offers: [{
            name: "Google Business Profile Creation & Optimization",
            description: "Engineered GBP setup for local visibility from day one"
          }]
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Business Starter Pack", url: "https://truerankdigital.com/llc" },
          { name: "GBP Creation", url: "https://truerankdigital.com/llc/gbp-creation" }
        ]}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 relative overflow-hidden">
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
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                  Google Business Profile Creation
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  We don't just set it up — we engineer it for dominance. Every tag, service, and city is mapped for visibility from the start.
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
                Google Business Profile is the #1 local visibility tool. Getting it right from day one is crucial.
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
                  Your First Impression in Local Search
                </h3>
                <p className="text-lg text-brand-dark/70 mb-4">
                  When someone searches for your services locally, your Google Business Profile is what they see first. 
                  It appears above organic search results, in Google Maps, and on mobile devices.
                </p>
                <p className="text-lg text-brand-dark/70 mb-4">
                  For new businesses, this is your fastest path to visibility. A properly optimized GBP can start 
                  generating leads within days of launch — before your website even ranks.
                </p>
                <div className="glass-card p-6 bg-green-50 border-l-4 border-green-500">
                  <p className="text-lg text-brand-dark font-semibold mb-2">
                    The Reality:
                  </p>
                  <p className="text-brand-dark/70">
                    87% of consumers use Google to evaluate local businesses. If your GBP isn't optimized, 
                    you're invisible to most of your potential customers.
                  </p>
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
                  Engineering vs. Basic Setup
                </h4>
                <div className="space-y-4">
                  {engineeringVsBasic.slice(0, 3).map((item, index) => (
                    <div key={index} className="border-l-4 border-brand-primary pl-4">
                      <p className="font-semibold text-brand-dark mb-2">{item.feature}</p>
                      <div className="space-y-1">
                        <div className="flex items-start space-x-2">
                          <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                          <p className="text-sm text-brand-dark/60">Basic: {item.basic}</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                          <p className="text-sm text-brand-dark">Engineered: {item.engineered}</p>
                        </div>
                      </div>
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
                Complete GBP engineering for maximum local visibility and customer engagement.
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
                These errors cost new businesses thousands in lost opportunities.
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
                From verification to full optimization in 7-14 days.
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
                Ready to Dominate Local Search?
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
                Get your Google Business Profile engineered for maximum visibility from day one.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ConsultationForm
                title="Schedule Your GBP Strategy Session"
                description="Let's engineer your Google Business Profile for local dominance."
                subjectPrefix="GBP Creation"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

