'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Target,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  TrendingUp,
  Users,
  BookOpen,
  Zap,
  Award,
  Rocket
} from 'lucide-react';
import ConsultationForm from '@/components/sections/ConsultationForm';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';

export default function GoToMarketPlaybookPage() {
  const benefits = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Personally Written by Jon',
      description: 'Custom strategy crafted by CEO Jon Korkowski specifically for your business'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Niche-Specific Strategy',
      description: 'Tailored tactics for your industry, market, and competitive landscape'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: '90-Day Roadmap',
      description: 'Clear, actionable plan for your first three months'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Scalable Framework',
      description: 'Strategies that grow with your business'
    }
  ];

  const playbookSections = [
    {
      section: 'Market Analysis',
      description: 'Deep dive into your competitive landscape, customer demographics, and market opportunities'
    },
    {
      section: 'Positioning Strategy',
      description: 'How to differentiate from competitors and establish your unique market position'
    },
    {
      section: '90-Day Action Plan',
      description: 'Week-by-week roadmap with specific tasks, milestones, and success metrics'
    },
    {
      section: 'Visibility Roadmap',
      description: 'Step-by-step plan to dominate local search, Google Maps, and your target keywords'
    },
    {
      section: 'Trust-Building Strategy',
      description: 'Review generation, reputation management, and community engagement tactics'
    },
    {
      section: 'Content Strategy',
      description: 'What content to create, when to publish, and how to maximize impact'
    },
    {
      section: 'Budget Allocation',
      description: 'Smart investment priorities and ROI optimization for limited startup budgets'
    },
    {
      section: 'Success Metrics',
      description: 'KPIs to track and benchmarks to hit at 30, 60, and 90 days'
    }
  ];

  const commonMistakes = [
    {
      mistake: 'Using generic marketing templates',
      why: 'Cookie-cutter strategies ignore your unique market, competitors, and advantages'
    },
    {
      mistake: 'No clear roadmap or milestones',
      why: 'You waste time figuring out what to do next instead of executing and growing'
    },
    {
      mistake: 'Copying what worked for other businesses',
      why: 'Different markets, timing, and resources require different strategies'
    },
    {
      mistake: 'No prioritization of marketing activities',
      why: 'Spreading resources thin across everything instead of focusing on high-impact tactics'
    }
  ];

  const customVsCookie = [
    {
      aspect: 'Market Research',
      cookie: 'Generic industry statistics',
      custom: 'Detailed analysis of YOUR local market and specific competitors'
    },
    {
      aspect: 'Strategy Development',
      cookie: 'One-size-fits-all template',
      custom: 'Custom tactics based on your budget, timeline, and goals'
    },
    {
      aspect: 'Action Steps',
      cookie: 'Vague recommendations',
      custom: 'Specific tasks with deadlines and expected outcomes'
    },
    {
      aspect: 'Success Metrics',
      cookie: 'Industry averages',
      custom: 'Realistic benchmarks for your specific situation'
    }
  ];

  const timeline = [
    { phase: 'Discovery Session', duration: '1-2 hours', description: 'Jon meets with you to understand your business, goals, and challenges' },
    { phase: 'Market Research', duration: '3-5 days', description: 'Deep analysis of your competitors, market, and opportunities' },
    { phase: 'Strategy Development', duration: '5-7 days', description: 'Jon crafts your custom 90-day go-to-market strategy' },
    { phase: 'Playbook Delivery', duration: '1-2 days', description: 'Comprehensive written playbook with detailed action plans' },
    { phase: 'Strategy Session', duration: '1-2 hours', description: 'Jon walks you through the playbook and answers all questions' }
  ];

  return (
    <>
      <ComprehensiveSchema
        type="service"
        pageData={{
          title: "Custom Go-To-Market Playbook - Business Starter Pack | True Rank Digital",
          description: "Personally written by Jon Korkowski, this custom strategy outlines exactly how to scale your visibility, build local trust, and dominate your niche.",
          url: "https://truerankdigital.com/llc/go-to-market-playbook",
          keywords: ["go-to-market strategy", "business playbook", "marketing strategy", "startup marketing plan"],
          category: "Business Strategy",
          offers: [{
            name: "Custom Go-To-Market Playbook",
            description: "Personalized 90-day strategy written by Jon Korkowski"
          }]
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Business Starter Pack", url: "https://truerankdigital.com/llc" },
          { name: "Go-To-Market Playbook", url: "https://truerankdigital.com/llc/go-to-market-playbook" }
        ]}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 relative overflow-hidden">
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
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                  Custom Go-To-Market Playbook
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Personally written by Jon Korkowski, this custom strategy outlines exactly how to scale your visibility, build local trust, and dominate your niche.
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
                Generic advice kills momentum. Custom strategy creates winners.
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
                  Your First 90 Days Make or Break You
                </h3>
                <p className="text-lg text-brand-dark/70 mb-4">
                  Most new businesses fail not because they're bad businesses, but because they waste their 
                  first 90 days on the wrong tactics.
                </p>
                <p className="text-lg text-brand-dark/70 mb-4">
                  Without a clear roadmap, you'll chase every shiny object, waste money on tactics that don't work 
                  for your specific situation, and lose the momentum that matters most.
                </p>
                <div className="glass-card p-6 bg-yellow-50 border-l-4 border-yellow-500">
                  <p className="text-lg text-brand-dark font-semibold mb-2">
                    Custom Strategy Advantage:
                  </p>
                  <p className="text-brand-dark/70">
                    Businesses with custom go-to-market strategies reach profitability 3x faster and with 
                    40% less wasted marketing spend than those using generic templates.
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
                  Jon Korkowski - Your Strategist
                </h4>
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-8 h-8 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-brand-dark mb-2">
                      Jon personally writes every playbook after deep research into your specific market, 
                      competitors, and opportunities.
                    </p>
                    <p className="text-sm text-brand-dark/70">
                      CEO & Founder of True Rank Digital, recognized by Google's AI Overview as a leading SEO specialist
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-brand-dark/70">100+ successful new business launches</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-brand-dark/70">Proprietary SEO and marketing frameworks</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-brand-dark/70">Direct access for questions and guidance</span>
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

        {/* What's Inside Section */}
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
                What's Inside Your Playbook
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Comprehensive 90-day strategy covering every aspect of your go-to-market plan.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {playbookSections.map((item, index) => (
                <motion.div
                  key={item.section}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-primary text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">
                        {item.section}
                      </h3>
                      <p className="text-brand-dark/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom vs Cookie-Cutter Section */}
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
                Custom vs. Cookie-Cutter
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                The difference between a template and a strategy built specifically for you.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-6">
              {customVsCookie.map((item, index) => (
                <motion.div
                  key={item.aspect}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6"
                >
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-4">
                    {item.aspect}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border-l-4 border-red-500 pl-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <XCircle className="w-5 h-5 text-red-500" />
                        <p className="font-semibold text-brand-dark">Cookie-Cutter</p>
                      </div>
                      <p className="text-sm text-brand-dark/70">{item.cookie}</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <p className="font-semibold text-brand-dark">Custom Strategy</p>
                      </div>
                      <p className="text-sm text-brand-dark">{item.custom}</p>
                    </div>
                  </div>
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
                These strategic failures waste months and thousands of dollars.
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
                What to Expect: Our Process
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                From discovery to delivery in 2-3 weeks.
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
        <section className="py-20 bg-gradient-to-b from-brand-light/20 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                Ready for Your Custom Strategy?
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
                Get your personalized 90-day go-to-market playbook written by Jon Korkowski.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ConsultationForm
                title="Schedule Your Strategy Discovery Session"
                description="Let's discuss your business and start building your custom playbook."
                subjectPrefix="Go-To-Market Playbook"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

