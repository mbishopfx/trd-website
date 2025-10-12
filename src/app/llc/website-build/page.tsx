'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Globe,
  CheckCircle,
  XCircle,
  Clock,
  Rocket,
  TrendingUp,
  Search,
  Zap,
  ArrowRight,
  AlertTriangle
} from 'lucide-react';
import ConsultationForm from '@/components/sections/ConsultationForm';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';

export default function WebsiteBuildPage() {
  const benefits = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Built in Google\'s Language',
      description: 'Every line of code optimized for search engine crawlers and ranking algorithms'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Conversion-Optimized Design',
      description: 'Strategic layouts and CTAs that turn visitors into customers from day one'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning-Fast Performance',
      description: 'Speed optimization that Google rewards with higher rankings'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Scalable Architecture',
      description: 'Built to grow with your business without costly rebuilds'
    }
  ];

  const whatYouGet = [
    'Custom responsive design optimized for mobile and desktop',
    'SEO-optimized code structure and technical foundation',
    'Schema markup engineering for rich search results',
    'Performance optimization (speed, Core Web Vitals)',
    'Conversion-focused page layouts and user flows',
    'Google Analytics and Search Console integration',
    'SSL security and HTTPS implementation',
    'Content management system setup and training',
    'Initial on-page SEO optimization',
    ' 30 days of post-launch support and monitoring'
  ];

  const commonMistakes = [
    {
      mistake: 'Using DIY website builders like Wix or Squarespace',
      why: 'Limited SEO capabilities, slow loading times, cookie-cutter templates that don\'t rank'
    },
    {
      mistake: 'Cheap offshore development with no SEO knowledge',
      why: 'Pretty sites that Google can\'t understand or rank properly'
    },
    {
      mistake: 'Building for looks instead of performance',
      why: 'Heavy images and fancy effects that tank your page speed and rankings'
    },
    {
      mistake: 'Not planning for growth from the start',
      why: 'Requires complete rebuild within 6-12 months as business scales'
    }
  ];

  const timeline = [
    { phase: 'Discovery & Strategy', duration: '1-2 days', description: 'Brand analysis, competitor research, and site architecture planning' },
    { phase: 'Design & Development', duration: '7-10 days', description: 'Custom design creation and SEO-optimized development' },
    { phase: 'Content & Optimization', duration: '3-5 days', description: 'On-page SEO, schema markup, and content optimization' },
    { phase: 'Testing & Launch', duration: '2-3 days', description: 'Quality assurance, performance testing, and deployment' },
    { phase: 'Post-Launch Monitoring', duration: '30 days', description: 'Performance tracking, indexing verification, and optimization' }
  ];

  return (
    <>
      <ComprehensiveSchema
        type="service"
        pageData={{
          title: "Website Build - Business Starter Pack | True Rank Digital",
          description: "Get a high-performance, SEO-optimized website built in Google's language. Designed to rank, convert, and grow with your new LLC from day one.",
          url: "https://truerankdigital.com/llc/website-build",
          keywords: ["SEO website design", "new business website", "optimized website build", "Google-friendly website"],
          category: "Website Development",
          offers: [{
            name: "Professional Website Build",
            description: "High-performance, SEO-optimized website built for ranking and conversions"
          }]
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Business Starter Pack", url: "https://truerankdigital.com/llc" },
          { name: "Website Build", url: "https://truerankdigital.com/llc/website-build" }
        ]}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 relative overflow-hidden">
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
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                  Website Build
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  A high-performance, SEO-optimized site that speaks Google's language — built to convert, rank, and grow with your brand.
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
                Your website is your first impression, your 24/7 salesperson, and the foundation of all your digital marketing.
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
                  First Impressions Create Momentum
                </h3>
                <p className="text-lg text-brand-dark/70 mb-4">
                  You only get one chance to make a first impression. A professional, fast-loading website 
                  immediately establishes credibility and trust with potential customers.
                </p>
                <p className="text-lg text-brand-dark/70 mb-4">
                  When you launch, every visitor counts. A generic template or slow DIY site costs you 
                  customers before you even get started.
                </p>
                <p className="text-lg text-brand-dark/70">
                  <strong>The difference:</strong> Professional sites convert at 3-5x higher rates than 
                  DIY builders. That's the difference between struggling and thriving in your first 90 days.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <h4 className="text-xl font-heading font-bold text-brand-dark mb-6">
                  Google Ranks Sites That Speak Its Language
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-brand-dark">Proper Code Structure</p>
                      <p className="text-sm text-brand-dark/70">Search engines can crawl and understand your content</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-brand-dark">Schema Markup</p>
                      <p className="text-sm text-brand-dark/70">Rich results and enhanced search visibility</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-brand-dark">Speed Optimization</p>
                      <p className="text-sm text-brand-dark/70">Google rewards fast sites with higher rankings</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-brand-dark">Mobile-First Design</p>
                      <p className="text-sm text-brand-dark/70">Optimized for how Google actually indexes sites</p>
                    </div>
                  </div>
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
                A complete, enterprise-grade website solution designed for new business success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
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
                Avoid these costly errors that kill momentum before you even get started.
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
                From concept to launch in 2-3 weeks with full transparency and support.
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
                Ready to Build Your Foundation?
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
                Get a professional, SEO-optimized website that converts visitors into customers from day one.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ConsultationForm
                title="Schedule Your Website Consultation"
                description="Let's discuss your brand, goals, and how we'll build your perfect website."
                subjectPrefix="Website Build"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

