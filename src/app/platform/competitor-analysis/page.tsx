'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';
import { 
  Users, 
  ArrowLeft, 
  CheckCircle, 
  ArrowRight,
  Eye,
  Search,
  Target,
  Brain,
  TrendingUp,
  Zap,
  Shield,
  Activity,
  BarChart3,
  Crosshair,
  Layers
} from 'lucide-react';

export default function CompetitorAnalysisPage() {
  const analysisCapabilities = [
    {
      category: 'Autonomous Competitor Discovery',
      icon: <Search className="w-6 h-6" />,
      color: 'from-rose-500 to-pink-500',
      features: [
        'AI-powered competitor identification across all digital channels',
        'Hidden threat detection including indirect and emerging competitors',
        'Market share analysis and competitive positioning assessment',
        'Industry trend correlation with competitor movement patterns'
      ],
      impact: 'Identify threats you never knew existed before they impact your market position'
    },
    {
      category: 'Strategic Forensic Analysis',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-purple-500 to-indigo-500',
      features: [
        'Reverse engineering of competitor SEO and marketing strategies',
        'Content strategy deconstruction and optimization pattern recognition',
        'Backlink network analysis and authority source identification',
        'Technical implementation analysis revealing competitive advantages'
      ],
      impact: 'Understand exactly how competitors succeed and replicate their best strategies'
    },
    {
      category: 'Predictive Competitive Modeling',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Machine learning algorithms predicting competitor moves and strategy changes',
        'Market opportunity forecasting based on competitor blind spots',
        'Resource allocation prediction analyzing competitor investment patterns',
        'Campaign effectiveness modeling using historical competitive data'
      ],
      impact: 'Stay ahead of competition by predicting their moves before they make them'
    },
    {
      category: 'Market Gap Intelligence',
      icon: <Target className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500',
      features: [
        'Automated identification of underserved market segments',
        'Keyword opportunity discovery through competitor content gaps',
        'Service and product offering analysis revealing market opportunities',
        'Geographic expansion opportunities based on competitor coverage analysis'
      ],
      impact: 'Discover profitable market opportunities competitors have overlooked'
    }
  ];

  const intelligenceFeatures = [
    {
      feature: 'Real-Time Monitoring',
      description: 'Continuous surveillance of competitor activities across all digital channels and platforms',
      benefit: '24/7 competitive intelligence gathering'
    },
    {
      feature: 'Strategic Pattern Recognition',
      description: 'Advanced AI algorithms identify patterns in competitor behavior and predict future strategies',
      benefit: 'Anticipate competitive moves before they happen'
    },
    {
      feature: 'Market Positioning Analysis',
      description: 'Comprehensive analysis of competitive positioning and market share dynamics',
      benefit: 'Understand your true competitive landscape'
    },
    {
      feature: 'Opportunity Identification',
      description: 'Automated discovery of market gaps and competitive vulnerabilities',
      benefit: 'Find untapped opportunities for growth'
    },
    {
      feature: 'Performance Benchmarking',
      description: 'Detailed comparison of your performance against competitors across all key metrics',
      benefit: 'Know exactly where you stand in the market'
    },
    {
      feature: 'Strategic Recommendations',
      description: 'AI-powered recommendations for competitive response strategies and market positioning',
      benefit: 'Actionable intelligence for strategic decisions'
    }
  ];

  const businessApplications = [
    {
      scenario: 'Market Entry Strategy',
      description: 'Planning entry into new markets or launching new products/services',
      applications: [
        'Competitive landscape analysis for new market assessment',
        'Pricing strategy development based on competitor analysis',
        'Market positioning optimization to avoid competitive conflicts',
        'Resource allocation planning using competitor intelligence'
      ]
    },
    {
      scenario: 'Strategic Planning',
      description: 'Long-term business strategy development and competitive positioning',
      applications: [
        'Annual competitive analysis for strategic planning cycles',
        'Market share growth strategy development',
        'Competitive threat assessment and response planning',
        'Innovation opportunity identification through competitor gap analysis'
      ]
    },
    {
      scenario: 'Marketing Optimization',
      description: 'Enhancing marketing effectiveness through competitive intelligence',
      applications: [
        'Campaign strategy optimization based on competitor analysis',
        'Content strategy development using competitive content gaps',
        'SEO strategy enhancement through competitor reverse engineering',
        'Advertising strategy optimization using competitor ad intelligence'
      ]
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
            <span className="text-brand-dark">Competitor Analysis Agent</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-rose-100 rounded-full mb-6">
                <Users className="w-5 h-5 text-rose-600" />
                <span className="text-rose-600 font-semibold text-sm">Intelligence Platform</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
                Competitor Analysis Agent
              </h1>
              
              <p className="text-xl text-rose-600 font-semibold mb-4">
                Decode Your Competition's DNA
              </p>
              
              <p className="text-lg text-brand-dark/70 mb-8 leading-relaxed">
                AI-powered competitive intelligence that doesn't just analyze competitors—it reverse-engineers their strategies, discovers hidden threats, and identifies market opportunities they've missed. Transform competitive research from periodic activity to continuous strategic advantage.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/free-audit"
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-rose-600 text-white font-semibold rounded-full hover:bg-rose-700 transition-all duration-300"
                  >
                    <Eye className="w-5 h-5" />
                    <span>Get Competitive Analysis</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-rose-600 text-rose-600 font-semibold rounded-full hover:bg-rose-600 hover:text-white transition-all duration-300"
                  >
                    <Users className="w-5 h-5" />
                    <span>Decode Competitors</span>
                  </Link>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-rose-200">
                  <div className="text-2xl font-bold text-rose-600">150%</div>
                  <div className="text-brand-dark/70 text-sm">Competitive Edge Improvement</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-rose-200">
                  <div className="text-2xl font-bold text-rose-600">24/7</div>
                  <div className="text-brand-dark/70 text-sm">Competitive Monitoring</div>
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
                    src="/platform/competitors.jpeg"
                    alt="Competitor Analysis Agent"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-2xl group-hover:shadow-glass-lg transition-all duration-500"
                    style={{
                      filter: 'brightness(1.05) contrast(1.05) saturate(1.1)',
                    }}
                  />
                  
                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-600/20 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Analysis Status */}
                  <div className="absolute top-4 left-4 bg-rose-600/90 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold flex items-center space-x-2">
                    <Activity className="w-3 h-3" />
                    <span>Analyzing 47 Competitors</span>
                  </div>
                  
                  {/* Intelligence Score */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                    <div className="text-rose-600 font-bold text-sm">Intelligence Score: 94/100</div>
                    <div className="text-rose-800 text-xs">Competitive advantage identified</div>
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

      {/* Analysis Capabilities */}
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
              Advanced Competitive Intelligence Capabilities
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto">
              Sophisticated AI systems that transform competitive research from basic monitoring to strategic advantage generation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {analysisCapabilities.map((capability, index) => (
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
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-2 group-hover:text-rose-600 transition-colors duration-300">
                      {capability.category}
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-rose-600 mt-0.5 flex-shrink-0" />
                      <span className="text-brand-dark/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-rose-50 rounded-lg p-4">
                  <p className="text-rose-800 font-semibold text-sm">
                    <strong>Strategic Value:</strong> {capability.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence Features */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
              Revolutionary Intelligence Features
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Advanced features that separate enterprise competitive intelligence from basic competitor monitoring.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {intelligenceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-rose-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-2 group-hover:text-rose-600 transition-colors duration-300">
                      {feature.feature}
                    </h3>
                    <p className="text-brand-dark/70 text-sm mb-3">
                      {feature.description}
                    </p>
                    <div className="text-rose-600 font-semibold text-xs">
                      {feature.benefit}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Applications */}
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
              Strategic Business Applications
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              How different business scenarios leverage competitive intelligence for strategic advantage.
            </p>
          </motion.div>

          <div className="space-y-8">
            {businessApplications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 lg:p-10"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                      {application.scenario}
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed">
                      {application.description}
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-brand-dark mb-4">Strategic Applications:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {application.applications.map((app, appIndex) => (
                        <div key={appIndex} className="flex items-start space-x-3">
                          <Crosshair className="w-4 h-4 text-rose-600 mt-0.5 flex-shrink-0" />
                          <span className="text-brand-dark/80 text-sm">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-rose-900 to-pink-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Ready to Decode Your Competition?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Transform competitive research from periodic activity to continuous strategic advantage. Discover hidden threats, reverse-engineer competitor strategies, and identify opportunities they've missed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/free-audit"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-rose-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
                >
                  <Users className="w-5 h-5" />
                  <span>Get Competitive Intelligence</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-rose-900 transition-all duration-300"
                >
                  <Brain className="w-5 h-5" />
                  <span>Start Competitive Analysis</span>
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
              href="/platform/grid-ranking"
              className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300 group"
            >
              <BarChart3 className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold text-brand-dark mb-2 group-hover:text-blue-600 transition-colors duration-300">
                Grid Ranking System
              </h4>
              <p className="text-brand-dark/70 text-sm">Geographic search intelligence</p>
            </Link>
            <Link
              href="/platform/overwatch"
              className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300 group"
            >
              <Shield className="w-8 h-8 text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold text-brand-dark mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                Digital Overwatch System
              </h4>
              <p className="text-brand-dark/70 text-sm">24/7 intelligent monitoring</p>
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
          title: "Competitor Analysis Agent - Decode Your Competition's DNA",
          description: "AI-powered competitive intelligence that reveals hidden strategies and identifies market opportunities through advanced competitor research.",
          url: "https://truerankdigital.com/platform/competitor-analysis",
          keywords: ["competitor analysis", "competitive intelligence", "market research", "competitor strategies", "competitive advantage", "market opportunities", "business intelligence"],
          category: "SEO Platform",
          toolFeatures: [
            "Autonomous Competitor Discovery",
            "Strategic Forensic Analysis",
            "Predictive Competitive Modeling",
            "Market Gap Intelligence",
            "Real-Time Competitive Monitoring",
            "Performance Benchmarking",
            "Strategic Recommendations"
          ]
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Platform", url: "https://truerankdigital.com/platform" },
          { name: "Competitor Analysis Agent", url: "https://truerankdigital.com/platform/competitor-analysis" }
        ]}
      />
    </div>
  );
}
