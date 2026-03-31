'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Zap,
  Cpu,
  Globe,
  Search,
  MapPin,
  MessageSquare,
  Target,
  Users,
  Briefcase,
  Settings,
  TrendingUp,
} from 'lucide-react';

interface Service {
  title: string;
  badge: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  color: 'cyan' | 'blue';
}

const services: Service[] = [
  {
    title: 'AI Search Optimization',
    badge: 'AI Visibility',
    icon: <Zap className="w-8 h-8" />,
    description:
      'We structure your content and technical signals so answer engines can understand, trust, and surface your brand.',
    features: ['Entity Signal Mapping', 'Schema + Content Alignment', 'AI Retrieval Readiness', 'Answer Engine Visibility'],
    color: 'cyan',
  },
  {
    title: 'Digital Marketing & Advertising',
    badge: 'Growth',
    icon: <TrendingUp className="w-8 h-8" />,
    description:
      'End-to-end campaign planning and execution to increase qualified traffic, leads, and measurable revenue outcomes.',
    features: ['Channel Strategy', 'Campaign Execution', 'Creative + Messaging Alignment', 'Performance Reporting'],
    color: 'blue',
  },
  {
    title: 'Google Business Profile Optimization',
    badge: 'Local Growth',
    icon: <MapPin className="w-8 h-8" />,
    description:
      'Hands-on profile management that improves map visibility, trust signals, and inbound actions from local prospects.',
    features: ['Profile Optimization', 'Post and Q&A Strategy', 'Category + Service Tuning', 'Local Action Optimization'],
    color: 'blue',
  },
  {
    title: 'Local SEO',
    badge: 'Organic Local',
    icon: <Search className="w-8 h-8" />,
    description:
      'Local intent strategy and technical execution built to improve rankings for your core markets and service areas.',
    features: ['Local Intent Mapping', 'On-Page Optimization', 'Location Signal Strengthening', 'Authority Building'],
    color: 'cyan',
  },
  {
    title: 'PPC Campaigns',
    badge: 'Paid Search',
    icon: <Target className="w-8 h-8" />,
    description:
      'Paid search campaigns designed for efficient spend, stronger lead quality, and fast demand capture.',
    features: ['Campaign Architecture', 'Ad + Landing Page Alignment', 'Bid + Budget Control', 'Conversion Optimization'],
    color: 'blue',
  },
  {
    title: 'SEO Tactics',
    badge: 'Technical',
    icon: <Settings className="w-8 h-8" />,
    description:
      'Technical and on-page SEO work focused on removing blockers and growing sustainable organic performance.',
    features: ['Schema Implementation', 'Indexability Audits', 'Internal Link Optimization', 'Technical Issue Remediation'],
    color: 'cyan',
  },
  {
    title: 'Website Engineering',
    badge: 'Web Build',
    icon: <Globe className="w-8 h-8" />,
    description:
      'Website design and development that balances performance, clarity, conversion flow, and search accessibility.',
    features: ['Custom Website Design', 'UX + Conversion Architecture', 'Technical Performance', 'SEO-Ready Structure'],
    color: 'blue',
  },
  {
    title: 'Social Media Management',
    badge: 'Brand Presence',
    icon: <Users className="w-8 h-8" />,
    description:
      'Content and platform management that keeps your brand active, consistent, and trusted across major channels.',
    features: ['Cross-Platform Publishing', 'Content Planning', 'Audience Engagement', 'Brand Consistency'],
    color: 'cyan',
  },
  {
    title: 'CRM With AI Chat',
    badge: 'Automation',
    icon: <MessageSquare className="w-8 h-8" />,
    description:
      'Conversation workflows that improve response speed, lead routing, follow-up, and pipeline management.',
    features: ['Lead Capture Automation', 'AI Chat Workflows', 'Follow-Up Sequences', 'Pipeline Visibility'],
    color: 'blue',
  },
  {
    title: 'Business Consulting',
    badge: 'Strategy',
    icon: <Briefcase className="w-8 h-8" />,
    description:
      'Strategic support to align your marketing systems, operations, and growth priorities into one execution plan.',
    features: ['Growth Planning', 'Operational Alignment', 'Market Positioning', 'Execution Roadmaps'],
    color: 'blue',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AIServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-obsidian">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 glass-cyan rounded-full mb-6 border border-brand-cyan/20"
          >
            <Cpu className="w-5 h-5 text-brand-cyan" />
            <span className="text-brand-cyan font-bold text-xs uppercase tracking-widest">Core Service Stack</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-heading font-bold mb-8 tracking-tight">
            Services Built for <span className="text-brand-cyan italic">AI-Era Visibility</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
            We combine technical execution, local authority systems, and performance marketing into one practical service stack built to grow qualified pipeline.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants} className="group">
              <div
                className={`h-full p-8 rounded-2xl glass transition-all duration-500 hover:-translate-y-2 border-l-4 ${
                  service.color === 'cyan'
                    ? 'border-brand-cyan hover:shadow-[0_0_30px_rgba(0,245,255,0.15)]'
                    : 'border-brand-blue hover:shadow-[0_0_30px_rgba(79,127,255,0.15)]'
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`p-3 rounded-xl ${
                      service.color === 'cyan' ? 'bg-brand-cyan/10 text-brand-cyan' : 'bg-brand-blue/10 text-brand-blue'
                    } group-hover:scale-110 transition-transform duration-500`}
                  >
                    {service.icon}
                  </div>
                  <span
                    className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                      service.color === 'cyan' ? 'bg-brand-cyan/10 text-brand-cyan' : 'bg-brand-blue/10 text-brand-blue'
                    }`}
                  >
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-heading font-bold text-white mb-4 leading-tight group-hover:text-brand-cyan transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-8 leading-relaxed font-light">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300 font-medium">
                      <div
                        className={`w-1.5 h-1.5 rounded-full mr-3 ${
                          service.color === 'cyan'
                            ? 'bg-brand-cyan shadow-[0_0_8px_#00F5FF]'
                            : 'bg-brand-blue shadow-[0_0_8px_#4F7FFF]'
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 p-1 bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-cyan rounded-3xl"
        >
          <div className="bg-brand-obsidian rounded-[calc(1.5rem-1px)] p-10 lg:p-16 text-center">
            <h3 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-8">
              Build the Signals That Make Your Brand <span className="text-brand-cyan italic">Unmissable</span>
            </h3>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-12 font-light">
              We align entity signals, technical architecture, and conversion strategy so your business gets discovered, trusted, and selected.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-brand-cyan text-brand-obsidian font-black text-xl rounded-full shadow-glow hover:shadow-glow-lg transition-all inline-flex items-center space-x-2"
              >
                <Target className="w-5 h-5" />
                <span>Get Your Platform Audit</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
