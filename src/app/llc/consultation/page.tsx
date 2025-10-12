'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  MessageSquare,
  CheckCircle,
  Users,
  Clock,
  TrendingUp,
  Target,
  Award,
  Phone,
  Mail,
  Calendar,
  Zap,
  Shield
} from 'lucide-react';
import ConsultationForm from '@/components/sections/ConsultationForm';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';

export default function ConsultationPage() {
  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Meet with Jon Korkowski',
      description: 'Personal consultation with the CEO and founder himself'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Custom 90-Day Plan',
      description: 'Walk away with a clear roadmap for your first quarter'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Identify Growth Opportunities',
      description: 'Uncover blind spots and quick wins specific to your business'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'No Pressure',
      description: 'Honest assessment with zero sales pressure or obligations'
    }
  ];

  const whatToExpect = [
    {
      phase: 'Business Deep Dive',
      duration: '15-20 min',
      description: 'Jon will ask questions about your business model, target market, current challenges, and goals'
    },
    {
      phase: 'Market Analysis',
      duration: '10-15 min',
      description: 'Quick assessment of your competitive landscape and market opportunities'
    },
    {
      phase: 'Gap Identification',
      duration: '10-15 min',
      description: 'Identify what\'s missing in your current strategy and where you\'re leaving money on the table'
    },
    {
      phase: '90-Day Roadmap',
      duration: '15-20 min',
      description: 'Jon outlines a clear, actionable plan for your first 90 days with specific milestones'
    },
    {
      phase: 'Q&A & Next Steps',
      duration: '10-15 min',
      description: 'Ask anything and discuss how True Rank Digital can support your launch'
    }
  ];

  const whoIsJon = [
    {
      credential: 'CEO & Founder of True Rank Digital',
      description: 'Built the company from the ground up with proprietary SEO technology'
    },
    {
      credential: 'Recognized by Google\'s AI Overview',
      description: 'Listed as a leading SEO specialist in Google\'s own AI search results'
    },
    {
      credential: '100+ Successful Business Launches',
      description: 'Personally guided over 100 new businesses through their first year'
    },
    {
      credential: 'Proprietary SEO Frameworks',
      description: 'Created custom systems and tools that competitors can\'t replicate'
    }
  ];

  const consultationTopics = [
    'Your specific business model and target audience',
    'Local market competition and opportunities',
    'Website and online presence assessment',
    'Google Business Profile optimization strategy',
    'Local SEO quick wins for immediate results',
    'Budget allocation and ROI optimization',
    'Content and marketing strategy priorities',
    'Timeline and realistic expectations',
    'Common pitfalls to avoid in your industry',
    'Tools and resources you\'ll need'
  ];

  return (
    <>
      <ComprehensiveSchema
        type="service"
        pageData={{
          title: "Free Consultation with Jon Korkowski - Business Starter Pack | True Rank Digital",
          description: "Meet with Jon Korkowski to dissect your business, uncover growth blind spots, and map out your 90-day domination plan. No pressure, pure value.",
          url: "https://truerankdigital.com/llc/consultation",
          keywords: ["business consultation", "SEO consultation", "marketing strategy session", "business advisor"],
          category: "Business Consulting",
          offers: [{
            name: "Free Consultation with Jon Korkowski",
            price: "0",
            priceCurrency: "USD",
            description: "Personal strategy session with CEO Jon Korkowski"
          }]
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Business Starter Pack", url: "https://truerankdigital.com/llc" },
          { name: "Free Consultation", url: "https://truerankdigital.com/llc/consultation" }
        ]}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-600 relative overflow-hidden">
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
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                  Free Consultation with Jon Korkowski
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-6">
                  You'll sit down (virtually) with Jon himself — to dissect your business, uncover growth blind spots, and map out your 90-day domination plan.
                </p>
                <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full">
                  <Zap className="w-5 h-5" />
                  <span className="font-semibold">Completely Free • No Obligations • Pure Value</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                What You Get from This Consultation
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                This isn't a sales call. It's a real strategy session where you'll leave with actionable insights.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

        {/* Who is Jon Section */}
        <section className="py-20 bg-gradient-to-b from-brand-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium mb-6">
                  <Award className="w-4 h-4" />
                  <span>Meet Your Strategist</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                  Who is Jon Korkowski?
                </h2>
                <p className="text-lg text-brand-dark/70 mb-6">
                  Jon isn't a sales rep or junior consultant. He's the CEO and founder of True Rank Digital, 
                  and he personally meets with every starter pack client.
                </p>
                <p className="text-lg text-brand-dark/70 mb-8">
                  With over a decade of experience and proprietary SEO technology that competitors can't replicate, 
                  Jon has guided hundreds of businesses from launch to market leadership.
                </p>
                <div className="space-y-4">
                  {whoIsJon.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-brand-dark">{item.credential}</p>
                        <p className="text-sm text-brand-dark/70">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6 text-center">
                  What We'll Cover
                </h3>
                <div className="space-y-3">
                  {consultationTopics.map((topic, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                      <span className="text-brand-dark">{topic}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
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
                What to Expect: Session Breakdown
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                60-75 minute strategy session structured for maximum value.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {whatToExpect.map((phase, index) => (
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
                Book Your Free Strategy Session
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto mb-8">
                Fill out the form below and we'll contact you within 24 hours to schedule your personal consultation with Jon.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <div className="flex items-center space-x-2 text-brand-dark">
                  <Calendar className="w-5 h-5 text-brand-primary" />
                  <span>60-75 minute session</span>
                </div>
                <div className="flex items-center space-x-2 text-brand-dark">
                  <MessageSquare className="w-5 h-5 text-brand-primary" />
                  <span>Virtual meeting</span>
                </div>
                <div className="flex items-center space-x-2 text-brand-dark">
                  <Zap className="w-5 h-5 text-brand-primary" />
                  <span>Completely free</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ConsultationForm
                title="Request Your Consultation"
                description="Tell us about your business and we'll schedule your session with Jon."
                subjectPrefix="Free Consultation"
                showTitle={false}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-brand-dark/70 mb-4">Prefer to call directly?</p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <a 
                  href="tel:7324750139"
                  className="flex items-center space-x-2 text-brand-primary hover:text-brand-secondary transition-colors font-semibold text-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>(732) 475-0139</span>
                </a>
                <a 
                  href="mailto:jon@truerankdigital.com"
                  className="flex items-center space-x-2 text-brand-primary hover:text-brand-secondary transition-colors font-semibold text-lg"
                >
                  <Mail className="w-5 h-5" />
                  <span>jon@truerankdigital.com</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
                Ready to Map Out Your 90-Day Domination Plan?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                No pressure. No sales pitch. Just honest strategy and actionable insights from Jon Korkowski himself.
              </p>
              
              <div className="flex items-center justify-center space-x-8 text-white/80">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">Zero Pressure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span className="text-sm">Pure Value</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span className="text-sm">Expert Guidance</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

