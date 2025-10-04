'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';
import { 
  Network, 
  ArrowLeft, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Globe,
  Share2,
  Eye,
  Target,
  Zap,
  Database,
  Link2,
  Search,
  TrendingUp,
  Shield,
  Map,
  Activity,
  Settings,
  Users,
  BarChart3,
  Layers
} from 'lucide-react';

export default function KnowledgeGraphPage() {
  const graphCapabilities = [
    {
      category: 'Entity Recognition & Mapping',
      icon: <Map className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      features: [
        'Advanced AI algorithms identify and categorize business entities across all digital touchpoints',
        'Comprehensive mapping of business relationships, services, locations, and key personnel',
        'Semantic understanding of business context and industry-specific terminology',
        'Real-time entity validation ensuring accuracy across all platforms and mentions'
      ],
      impact: 'Transform your business into a recognized digital entity that search engines understand completely'
    },
    {
      category: 'Authority Architecture',
      icon: <Database className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Strategic content structuring that establishes topical authority and expertise',
        'Comprehensive schema markup implementation for enhanced search understanding',
        'Authority signal optimization across all digital properties and platforms',
        'Citation and mention optimization ensuring consistent NAP (Name, Address, Phone) data'
      ],
      impact: 'Build unassailable digital authority that competitors cannot replicate or undermine'
    },
    {
      category: 'Semantic Relationship Modeling',
      icon: <Network className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-500',
      features: [
        'Complex relationship mapping between business concepts, services, and market positioning',
        'Industry context integration connecting your business to broader market knowledge',
        'Competitive relationship analysis understanding your position within the knowledge ecosystem',
        'Dynamic relationship optimization as market conditions and business focus evolves'
      ],
      impact: 'Create semantic connections that establish market leadership and industry authority'
    },
    {
      category: 'Universal Knowledge Integration',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500',
      features: [
        'Integration with major knowledge bases including Google Knowledge Graph, Wikipedia, and industry databases',
        'Cross-platform consistency ensuring unified brand representation across all digital channels',
        'Real-time knowledge validation and updates maintaining accuracy and relevance',
        'Multi-language and multi-region optimization for global market reach and understanding'
      ],
      impact: 'Achieve universal recognition as the definitive source for your industry expertise'
    }
  ];

  const knowledgeFeatures = [
    {
      feature: 'Entity Optimization',
      description: 'Transform your business into a recognized entity that search engines understand and trust',
      icon: <Target className="w-5 h-5" />,
      benefit: 'Increased search visibility'
    },
    {
      feature: 'Semantic Connections',
      description: 'Create meaningful relationships between your content and broader industry knowledge',
      icon: <Link2 className="w-5 h-5" />,
      benefit: 'Enhanced topical authority'
    },
    {
      feature: 'Authority Signals',
      description: 'Strengthen all signals that establish your expertise and market position',
      icon: <Shield className="w-5 h-5" />,
      benefit: 'Improved trust metrics'
    },
    {
      feature: 'Cross-Platform Integration',
      description: 'Ensure consistent entity recognition across Google, social media, and industry platforms',
      icon: <Share2 className="w-5 h-5" />,
      benefit: 'Universal brand recognition'
    },
    {
      feature: 'Dynamic Updates',
      description: 'Continuous optimization as your business evolves and market conditions change',
      icon: <Activity className="w-5 h-5" />,
      benefit: 'Maintained market relevance'
    },
    {
      feature: 'Competitive Positioning',
      description: 'Strategic positioning within the knowledge ecosystem to outrank competitors',
      icon: <TrendingUp className="w-5 h-5" />,
      benefit: 'Market leadership establishment'
    }
  ];

  const implementationPhases = [
    {
      phase: 'Entity Analysis & Mapping',
      description: 'Comprehensive analysis of current entity recognition and identification of optimization opportunities',
      deliverables: [
        'Current knowledge graph assessment and competitive analysis',
        'Entity recognition analysis across all major search engines and platforms',
        'Strategic roadmap for knowledge graph optimization and authority building',
        'Priority implementation plan with expected impact timelines'
      ],
      duration: '2-3 weeks',
      outcome: 'Complete understanding of current entity status and optimization potential'
    },
    {
      phase: 'Authority Foundation Building',
      description: 'Establishment of core authority signals and semantic relationships',
      deliverables: [
        'Comprehensive schema markup implementation across all digital properties',
        'Strategic content optimization for entity recognition and topical authority',
        'Citation and mention optimization ensuring consistent NAP data',
        'Initial knowledge base integration and cross-platform consistency'
      ],
      duration: '4-6 weeks',
      outcome: 'Solid foundation for knowledge graph recognition and authority establishment'
    },
    {
      phase: 'Semantic Enhancement & Integration',
      description: 'Advanced relationship modeling and universal knowledge integration',
      deliverables: [
        'Complex semantic relationship development and optimization',
        'Integration with major knowledge bases and industry-specific databases',
        'Multi-platform entity verification and consistency maintenance',
        'Advanced competitive positioning within the knowledge ecosystem'
      ],
      duration: '6-8 weeks',
      outcome: 'Comprehensive knowledge graph optimization with measurable authority improvements'
    },
    {
      phase: 'Continuous Optimization & Monitoring',
      description: 'Ongoing maintenance and enhancement of knowledge graph presence',
      deliverables: [
        'Real-time monitoring of entity recognition and authority metrics',
        'Continuous optimization based on algorithm updates and market changes',
        'Regular competitive analysis and strategic positioning adjustments',
        'Detailed performance reporting with actionable insights and recommendations'
      ],
      duration: 'Ongoing',
      outcome: 'Sustained market leadership and continuous authority enhancement'
    }
  ];

  return (
    <div className="pt-20">
      {/* Navigation Breadcrumb */}
      <div className="bg-brand-light/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/platform" className="text-brand-primary hover:text-brand-primary/80 flex items-center space-x-1">
              <ArrowLeft className="w-4 h-4" />
              <span>Platform</span>
            </Link>
            <span className="text-brand-dark/50">/</span>
            <span className="text-brand-dark">Knowledge Graph Optimization</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
                <Network className="w-5 h-5 text-orange-600" />
                <span className="text-orange-600 font-semibold text-sm">Knowledge Platform</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
                Knowledge Graph Optimization
              </h1>
              
              <p className="text-xl text-orange-600 font-semibold mb-4">
                Transform Into A Recognized Digital Entity
              </p>
              
              <p className="text-lg text-brand-dark/70 mb-8 leading-relaxed">
                Advanced AI platform that transforms your business into a recognized digital entity within Google's Knowledge Graph and other major knowledge bases. This system creates semantic relationships, establishes topical authority, and ensures universal recognition of your expertise across all digital channels.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/free-audit"
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-all duration-300"
                  >
                    <Brain className="w-5 h-5" />
                    <span>Analyze Knowledge Graph</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-orange-600 text-orange-600 font-semibold rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300"
                  >
                    <Network className="w-5 h-5" />
                    <span>Build Digital Entity</span>
                  </Link>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-200">
                  <div className="text-2xl font-bold text-orange-600">300%</div>
                  <div className="text-brand-dark/70 text-sm">Entity Recognition Increase</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-orange-200">
                  <div className="text-2xl font-bold text-orange-600">85%</div>
                  <div className="text-brand-dark/70 text-sm">Authority Score Improvement</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
                transition={{ duration: 0.5 }}
                style={{
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center center'
                }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/platform/websitedna.png"
                    alt="Knowledge Graph Optimization"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-2xl group-hover:shadow-glass-lg transition-all duration-500"
                    style={{
                      filter: 'brightness(1.05) contrast(1.05) saturate(1.1)',
                    }}
                  />
                  
                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Entity Status */}
                  <div className="absolute top-4 left-4 bg-green-600/90 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Entity Verified</span>
                  </div>
                  
                  {/* Knowledge Score */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                    <div className="text-orange-600 font-bold text-sm">Knowledge Score: 96/100</div>
                    <div className="text-orange-800 text-xs">Universal recognition achieved</div>
                  </div>
                </div>
                
                {/* 3D Shadow Effect */}
                <div 
                  className="absolute inset-0 bg-black/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                  style={{
                    transform: 'translateZ(-10px) translateY(10px)',
                    zIndex: -1
                  }}
                ></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Graph Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
              Advanced Knowledge Graph Capabilities
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto">
              Sophisticated AI systems that transform your business into a universally recognized digital entity with unshakeable authority.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {graphCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 hover:shadow-glass-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${capability.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {capability.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-2 group-hover:text-orange-600 transition-colors duration-300">
                      {capability.category}
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-brand-dark/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="text-orange-800 font-semibold text-sm">
                    <strong>Authority Value:</strong> {capability.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Features */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
              Revolutionary Knowledge Features
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Advanced features that establish unassailable digital authority through universal entity recognition.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {knowledgeFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-2 group-hover:text-orange-600 transition-colors duration-300">
                      {feature.feature}
                    </h3>
                    <p className="text-brand-dark/70 text-sm mb-3">
                      {feature.description}
                    </p>
                    <div className="text-orange-600 font-semibold text-xs">
                      {feature.benefit}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
              Strategic Implementation Process
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Systematic approach to building unshakeable digital authority through comprehensive knowledge graph optimization.
            </p>
          </motion.div>

          <div className="space-y-8">
            {implementationPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 lg:p-10"
              >
                <div className="grid lg:grid-cols-4 gap-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-heading font-bold text-brand-dark">
                        {phase.phase}
                      </h3>
                    </div>
                    <p className="text-brand-dark/70 text-sm mb-4">
                      {phase.description}
                    </p>
                    <div className="text-orange-600 font-semibold text-sm mb-2">
                      Duration: {phase.duration}
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-brand-dark mb-4">Key Deliverables:</h4>
                    <div className="space-y-2">
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span className="text-brand-dark/80 text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <h4 className="font-semibold text-brand-dark mb-4">Expected Outcome:</h4>
                    <div className="bg-orange-50 rounded-lg p-4">
                      <p className="text-orange-800 text-sm leading-relaxed">
                        {phase.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-900 to-red-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Become The Definitive Authority
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Transform your business into a universally recognized digital entity. Build unshakeable authority that establishes market leadership and competitive advantage through strategic knowledge graph optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/free-audit"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-orange-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
                >
                  <Brain className="w-5 h-5" />
                  <span>Analyze Knowledge Graph</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-900 transition-all duration-300"
                >
                  <Network className="w-5 h-5" />
                  <span>Build Digital Entity</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Navigation */}
      <section className="py-16 bg-brand-light/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-heading font-bold text-brand-dark mb-8 text-center">
            Explore More Platform Tools
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/platform/eeat-analysis"
              className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300 group"
            >
              <Target className="w-8 h-8 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold text-brand-dark mb-2 group-hover:text-green-600 transition-colors duration-300">
                E-E-A-T Analysis Engine
              </h4>
              <p className="text-brand-dark/70 text-sm">Authority optimization system</p>
            </Link>
            <Link
              href="/platform/lead-generation"
              className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300 group"
            >
              <Users className="w-8 h-8 text-teal-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold text-brand-dark mb-2 group-hover:text-teal-600 transition-colors duration-300">
                Lead Generation Intelligence
              </h4>
              <p className="text-brand-dark/70 text-sm">Predictive market analysis</p>
            </Link>
            <Link
              href="/platform"
              className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300 group"
            >
              <Layers className="w-8 h-8 text-brand-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors duration-300">
                View All Platform Tools
              </h4>
              <p className="text-brand-dark/70 text-sm">Complete platform overview</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Comprehensive Schema Markup */}
      <ComprehensiveSchema
        type="platform-tool"
        pageData={{
          title: "Knowledge Graph Optimization - Transform Into A Recognized Digital Entity",
          description: "Advanced AI platform that transforms your business into a recognized digital entity within Google's Knowledge Graph and other major knowledge bases.",
          url: "https://truerankdigital.com/platform/knowledge-graph",
          keywords: ["knowledge graph", "entity optimization", "semantic SEO", "digital entity", "authority building", "knowledge base integration", "entity recognition"],
          category: "SEO Platform",
          toolFeatures: [
            "Entity Recognition & Mapping",
            "Authority Architecture",
            "Semantic Relationship Modeling",
            "Universal Knowledge Integration",
            "Entity Optimization",
            "Cross-Platform Integration",
            "Dynamic Updates"
          ]
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Platform", url: "https://truerankdigital.com/platform" },
          { name: "Knowledge Graph Optimization", url: "https://truerankdigital.com/platform/knowledge-graph" }
        ]}
      />
    </div>
  );
}
