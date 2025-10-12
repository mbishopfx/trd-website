'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Bot,
  CheckCircle,
  XCircle,
  Clock,
  Zap,
  TrendingUp,
  Search,
  Brain,
  ArrowRight,
  AlertTriangle,
  Sparkles
} from 'lucide-react';
import ConsultationForm from '@/components/sections/ConsultationForm';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';

export default function AIOPage() {
  const benefits = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI Overview Visibility',
      description: 'Be featured in Google\'s AI-powered search results before competitors know they exist'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast-Start System',
      description: 'Proprietary injection process gets you into the AI ecosystem immediately'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Future-Proof Positioning',
      description: 'Optimized for where search is going, not where it\'s been'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Competitive Advantage',
      description: 'First-mover advantage while others figure out AI search'
    }
  ];

  const whatYouGet = [
    'LLM.txt file creation and optimization',
    'Schema markup for AI comprehension',
    'Entity establishment in Google Knowledge Graph',
    'Structured data optimization for AI parsing',
    'Content formatting for AI extraction',
    'AI Overview targeting and optimization',
    'Voice search optimization',
    'Featured snippet engineering',
    'ChatGPT, Claude, and Perplexity optimization',
    'AI search performance tracking',
    'Monthly AI visibility reports',
    'Continuous AI algorithm adaptation'
  ];

  const commonMistakes = [
    {
      mistake: 'Ignoring AI search optimization completely',
      why: 'By the time most businesses realize AI search matters, competitors already dominate'
    },
    {
      mistake: 'Treating AI search like traditional SEO',
      why: 'AI systems parse and understand content differently - old tactics don\'t work'
    },
    {
      mistake: 'Waiting for "AI SEO" to become mainstream',
      why: 'First movers get the visibility while late adopters fight for scraps'
    },
    {
      mistake: 'DIY AI optimization without technical expertise',
      why: 'Complex technical requirements and proprietary methods you can\'t replicate'
    }
  ];

  const timeline = [
    { phase: 'AI Audit & Analysis', duration: '2-3 days', description: 'Analyze your current AI visibility and identify optimization opportunities' },
    { phase: 'LLM.txt & Schema Creation', duration: '3-5 days', description: 'Build proprietary AI optimization files and structured data' },
    { phase: 'Implementation & Indexing', duration: '3-5 days', description: 'Deploy AI optimization and ensure proper indexing' },
    { phase: 'AI Overview Targeting', duration: '5-7 days', description: 'Optimize content for AI Overview inclusion' },
    { phase: 'Monitoring & Refinement', duration: 'Ongoing', description: 'Track AI visibility and adapt to algorithm changes' }
  ];

  const whyNowMatters = [
    {
      title: 'AI Search is Live Now',
      description: 'Google AI Overviews already show on millions of searches. ChatGPT Search, Perplexity, and others are growing fast.',
      stat: '60%'
    },
    {
      title: 'Traditional SEO is Evolving',
      description: 'What worked 2 years ago doesn\'t work today. AI systems need different optimization approaches.',
      stat: '10x'
    },
    {
      title: 'First-Mover Advantage is Real',
      description: 'Early adopters dominate AI search results because they\'re indexed first and optimized properly.',
      stat: '3-6 mo'
    }
  ];

  return (
    <>
      <ComprehensiveSchema
        type="service"
        pageData={{
          title: "AIO (AI Optimization) - Business Starter Pack | True Rank Digital",
          description: "Our proprietary fast-start system injects your brand into Google's AI ecosystem. Be seen by AI Overviews before competitors even know what hit them.",
          url: "https://truerankdigital.com/llc/aio",
          keywords: ["AI optimization", "AI search", "Google AI Overview", "LLM optimization", "AI SEO"],
          category: "AI Marketing",
          offers: [{
            name: "AIO - Artificial Intelligence Optimization",
            description: "Proprietary AI optimization system for Google's AI ecosystem"
          }]
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Business Starter Pack", url: "https://truerankdigital.com/llc" },
          { name: "AIO", url: "https://truerankdigital.com/llc/aio" }
        ]}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 relative overflow-hidden">
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
                  <Bot className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                  AIO (Artificial Intelligence Optimization)
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Our proprietary fast-start system injects your brand into Google's AI ecosystem. Be seen by AI Overviews before your competitors even know what hit them.
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
                AI search is the future, and it's happening right now. Get in early or get left behind.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {whyNowMatters.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 text-center"
                >
                  <div className="text-4xl font-bold text-brand-primary mb-4">
                    {item.stat}
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
                  The Window is Open Right Now
                </h3>
                <p className="text-lg text-brand-dark/70 mb-4">
                  Right now, most businesses have no idea how to optimize for AI search. That's your window.
                </p>
                <p className="text-lg text-brand-dark/70 mb-4">
                  By the time AI optimization becomes mainstream knowledge, the early movers will already 
                  dominate the AI search results. Those who wait will be fighting for visibility.
                </p>
                <div className="glass-card p-6 bg-purple-50 border-l-4 border-purple-500">
                  <p className="text-lg text-brand-dark font-semibold mb-2">
                    First-Mover Advantage:
                  </p>
                  <p className="text-brand-dark/70">
                    AI systems learn and reinforce existing patterns. Get indexed and optimized first, 
                    and you become the authority AI recommends. Wait, and you'll always be playing catch-up.
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
                  Where AI Search Shows Up
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-brand-dark">Google AI Overviews</p>
                      <p className="text-sm text-brand-dark/70">Featured at the top of search results</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-brand-dark">ChatGPT Search</p>
                      <p className="text-sm text-brand-dark/70">Direct AI-powered search engine</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-brand-dark">Perplexity AI</p>
                      <p className="text-sm text-brand-dark/70">Growing AI search platform</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-brand-dark">Voice Assistants</p>
                      <p className="text-sm text-brand-dark/70">Siri, Alexa, Google Assistant</p>
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
                Proprietary AI optimization tools and strategies that competitors can't replicate.
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
                Missing the AI window costs years of competitive advantage.
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
                Complete AI optimization in 2-3 weeks.
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
                Ready to Dominate AI Search?
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
                Get into Google's AI ecosystem before your competitors even know it exists.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ConsultationForm
                title="Schedule Your AIO Strategy Session"
                description="Let's discuss how AI optimization will give you a competitive edge."
                subjectPrefix="AIO"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

