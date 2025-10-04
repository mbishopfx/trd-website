'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';
import { 
  Search, 
  ArrowLeft, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Zap,
  Eye,
  Settings,
  Database,
  Shield,
  TrendingUp,
  Target,
  Activity,
  Layers,
  Code,
  Server
} from 'lucide-react';

export default function IndexabilityAnalysisPage() {
  const analysisCapabilities = [
    {
      category: 'Crawlability Assessment',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500',
      features: [
        'Robots.txt analysis and crawl permission evaluation',
        'XML sitemap structure and accessibility verification',
        'Internal linking architecture and authority flow mapping',
        'Navigation structure analysis for optimal user experience'
      ],
      impact: 'Complete content discovery and efficient crawl budget usage'
    },
    {
      category: 'Technical Infrastructure Analysis',
      icon: <Server className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Server response analysis and HTTP status code evaluation',
        'HTTPS implementation and security redirect verification',
        'Mobile-first compatibility and responsive design assessment',
        'Core Web Vitals evaluation for performance optimization'
      ],
      impact: 'Enhanced search engine access and improved user experience'
    },
    {
      category: 'Content Accessibility Intelligence',
      icon: <Database className="w-6 h-6" />,
      color: 'from-purple-500 to-indigo-500',
      features: [
        'Meta directive analysis including noindex and canonical tags',
        'Content quality assessment and duplicate content detection',
        'Structured data evaluation and schema markup validation',
        'Image and multimedia optimization for search visibility'
      ],
      impact: 'Maximum content visibility and search result enhancement'
    },
    {
      category: 'Index Management Optimization',
      icon: <Settings className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      features: [
        'Canonical implementation and duplicate content prevention',
        'Pagination handling and series page management',
        'International SEO setup with hreflang optimization',
        'Archive and category page optimization strategies'
      ],
      impact: 'Strategic index control and enhanced search presence'
    }
  ];

  const implementationPhases = [
    {
      phase: 'Comprehensive Site Discovery',
      duration: '1-2 days',
      description: 'Complete mapping of website architecture and resource inventory',
      tasks: [
        'Automated crawling of all accessible pages and resources',
        'Sitemap analysis and intended site structure identification',
        'Link graph mapping for authority flow visualization',
        'Resource cataloging including CSS, JavaScript, and media files'
      ]
    },
    {
      phase: 'Technical Infrastructure Evaluation',
      duration: '2-3 days',
      description: 'Deep analysis of technical factors impacting search engine access',
      tasks: [
        'Server configuration analysis and response code verification',
        'Security implementation review and HTTPS compliance',
        'Mobile compatibility assessment and responsive design evaluation',
        'Performance metrics analysis including Core Web Vitals'
      ]
    },
    {
      phase: 'Content Quality Assessment',
      duration: '3-5 days',
      description: 'Sophisticated evaluation of content organization and quality',
      tasks: [
        'Content depth assessment and value measurement',
        'Duplicate content detection and cannibalization analysis',
        'Meta data optimization evaluation and header structure analysis',
        'Schema markup validation and structured data assessment'
      ]
    },
    {
      phase: 'Strategic Optimization Implementation',
      duration: 'Ongoing',
      description: 'Prioritized action plan deployment and continuous monitoring',
      tasks: [
        'Critical issue resolution for immediate indexability improvements',
        'Opportunity prioritization based on potential traffic impact',
        'Implementation guidance with specific technical solutions',
        'Monitoring system establishment for ongoing optimization'
      ]
    }
  ];

  const businessBenefits = [
    { benefit: '30-70% Traffic Recovery', description: 'By fixing hidden indexability issues that block search engines' },
    { benefit: 'Faster Content Discovery', description: 'New pages get found and ranked more quickly by search engines' },
    { benefit: 'Efficient Crawl Budget Usage', description: 'Search engines focus on your most important and valuable content' },
    { benefit: 'Complete Content Visibility', description: 'Every valuable page gets discovered and indexed for maximum visibility' },
    { benefit: 'Technical SEO Foundation', description: 'Solid infrastructure that supports all other SEO optimization efforts' },
    { benefit: 'Authority Distribution', description: 'Internal linking improvements spread ranking power effectively'  }
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
            <span className="text-brand-dark">Indexability Analysis Engine</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 rounded-full mb-6">
                <Search className="w-5 h-5 text-green-600" />
                <span className="text-green-600 font-semibold text-sm">Technical SEO Engine</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
                Indexability Analysis Engine
              </h1>
              
              <p className="text-xl text-green-600 font-semibold mb-4">
                Unlock Your Hidden SEO Potential
              </p>
              
              <p className="text-lg text-brand-dark/70 mb-8 leading-relaxed">
                Sophisticated diagnostic platform that ensures Google discovers, crawls, and indexes every valuable page on your website. This advanced system provides forensic-level analysis of your website's accessibility to search engines.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/free-audit"
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all duration-300"
                  >
                    <Eye className="w-5 h-5" />
                    <span>Get Indexability Analysis</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-full hover:bg-green-600 hover:text-white transition-all duration-300"
                  >
                    <Search className="w-5 h-5" />
                    <span>Fix Indexability Issues</span>
                  </Link>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-green-200">
                  <div className="text-2xl font-bold text-green-600">45%</div>
                  <div className="text-brand-dark/70 text-sm">Average Traffic Recovery</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-green-200">
                  <div className="text-2xl font-bold text-green-600">3x</div>
                  <div className="text-brand-dark/70 text-sm">Faster Content Discovery</div>
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
                    src="/platform/websiteindex.png"
                    alt="Indexability Analysis Engine"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-2xl group-hover:shadow-glass-lg transition-all duration-500"
                    style={{
                      filter: 'brightness(1.05) contrast(1.05) saturate(1.1)',
                    }}
                  />
                  
                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Analysis Status */}
                  <div className="absolute top-4 left-4 bg-green-600/90 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold flex items-center space-x-2">
                    <Activity className="w-3 h-3" />
                    <span>Analyzing 847 Pages</span>
                  </div>
                  
                  {/* Issues Found */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                    <div className="text-green-600 font-bold text-sm">Issues Found: 23</div>
                    <div className="text-green-800 text-xs">Priority fixes identified</div>
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
              Comprehensive Indexability Analysis Capabilities
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto">
              Advanced diagnostic systems that identify and resolve technical barriers preventing search engines from properly accessing your content.
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
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-2 group-hover:text-green-600 transition-colors duration-300">
                      {capability.category}
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-brand-dark/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-green-800 font-semibold text-sm">
                    <strong>Business Impact:</strong> {capability.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
              Advanced Analysis Implementation Process
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Systematic approach to identifying and resolving indexability issues for maximum search engine visibility.
            </p>
          </motion.div>

          <div className="space-y-8">
            {implementationPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 lg:p-10"
              >
                <div className="grid lg:grid-cols-4 gap-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">
                      {phase.phase}
                    </h3>
                    <div className="text-green-600 font-semibold text-sm mb-4">
                      Duration: {phase.duration}
                    </div>
                    <p className="text-brand-dark/70 text-sm">
                      {phase.description}
                    </p>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <h4 className="font-semibold text-brand-dark mb-4">Implementation Tasks:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {phase.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-start space-x-3">
                          <Target className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-brand-dark/80 text-sm">{task}</span>
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

      {/* Business Benefits */}
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
              Measurable Business Impact
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Quantifiable improvements that result from comprehensive indexability optimization and technical SEO excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-green-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-2 group-hover:text-green-600 transition-colors duration-300">
                      {benefit.benefit}
                    </h3>
                    <p className="text-brand-dark/70 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Unlock Your Website's Hidden Potential
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Ensure every valuable page gets discovered, crawled, and indexed for maximum organic visibility. Transform technical barriers into competitive advantages through comprehensive indexability optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/free-audit"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-green-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
                >
                  <Search className="w-5 h-5" />
                  <span>Get Indexability Analysis</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-green-900 transition-all duration-300"
                >
                  <Settings className="w-5 h-5" />
                  <span>Implement Technical Solutions</span>
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
              <Target className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold text-brand-dark mb-2 group-hover:text-blue-600 transition-colors duration-300">
                Grid Ranking System
              </h4>
              <p className="text-brand-dark/70 text-sm">Geographic search intelligence</p>
            </Link>
            <Link
              href="/platform/eeat-analysis"
              className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300 group"
            >
              <Shield className="w-8 h-8 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold text-brand-dark mb-2 group-hover:text-purple-600 transition-colors duration-300">
                E-E-A-T Analysis Engine
              </h4>
              <p className="text-brand-dark/70 text-sm">Authority algorithm mastery</p>
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
          title: "Indexability Analysis Engine - Unlock Hidden SEO Potential",
          description: "Sophisticated diagnostic platform that identifies and resolves technical barriers preventing search engines from properly accessing your content.",
          url: "https://truerankdigital.com/platform/indexability",
          keywords: ["indexability analysis", "technical SEO", "crawlability", "search engine access", "website indexing", "technical optimization", "SEO diagnostics"],
          category: "SEO Platform",
          toolFeatures: [
            "Crawlability Analysis",
            "Infrastructure Diagnostics",
            "Content Accessibility Assessment",
            "Technical SEO Optimization",
            "Index Status Monitoring",
            "Site Architecture Analysis",
            "Performance Optimization"
          ]
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Platform", url: "https://truerankdigital.com/platform" },
          { name: "Indexability Analysis Engine", url: "https://truerankdigital.com/platform/indexability" }
        ]}
      />
    </div>
  );
}
