'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';
import { 
  Shield, 
  ArrowLeft, 
  CheckCircle, 
  ArrowRight,
  Eye,
  Activity,
  AlertTriangle,
  Zap,
  Monitor,
  Database,
  Network,
  Lock,
  Clock,
  Bell,
  Settings,
  TrendingUp,
  BarChart3,
  Layers
} from 'lucide-react';

export default function OverwatchPage() {
  const monitoringCapabilities = [
    {
      category: 'Comprehensive Asset Surveillance',
      icon: <Monitor className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Real-time website performance monitoring across all pages and resources',
        'Security threat detection with automated vulnerability scanning',
        'SEO health monitoring including rankings, traffic, and technical issues',
        'Content integrity verification ensuring accuracy and accessibility'
      ],
      impact: 'Complete visibility into all digital assets with 24/7 automated monitoring'
    },
    {
      category: 'Predictive Intelligence Engine',
      icon: <Activity className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Pattern recognition algorithms identifying trends before they become problems',
        'Anomaly detection systems spotting unusual activity across all platforms',
        'Performance trend analysis predicting when systems may experience issues',
        'Market change correlation understanding external impacts on digital assets'
      ],
      impact: 'Proactive threat prevention through advanced predictive analytics'
    },
    {
      category: 'Automated Response Systems',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Self-healing protocols automatically resolving common technical issues',
        'Security response automation with immediate threat containment',
        'Performance optimization including automatic scaling and resource allocation',
        'Backup and recovery systems ensuring business continuity during emergencies'
      ],
      impact: 'Immediate automated resolution without human intervention required'
    },
    {
      category: 'Strategic Intelligence Reporting',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500',
      features: [
        'Threat landscape analysis providing comprehensive security environment overview',
        'Performance optimization recommendations based on data-driven insights',
        'Market opportunity identification through trend analysis and monitoring',
        'Risk assessment and mitigation strategies for potential business threats'
      ],
      impact: 'Transform monitoring data into actionable business intelligence'
    }
  ];

  const protectionFeatures = [
    {
      feature: '24/7 Threat Detection',
      description: 'Continuous monitoring ensures issues are identified immediately, before they impact customers',
      icon: <Eye className="w-5 h-5" />,
      benefit: 'Zero downtime protection'
    },
    {
      feature: 'Automated Resolution',
      description: 'Many problems are fixed automatically without human intervention using intelligent response systems',
      icon: <Settings className="w-5 h-5" />,
      benefit: 'Instant issue resolution'
    },
    {
      feature: 'Performance Optimization',
      description: 'Systems continuously optimized for maximum effectiveness through real-time adjustments',
      icon: <TrendingUp className="w-5 h-5" />,
      benefit: 'Peak performance maintenance'
    },
    {
      feature: 'Security Enhancement',
      description: 'Real-time threat detection and response protects valuable digital assets from attacks',
      icon: <Lock className="w-5 h-5" />,
      benefit: 'Advanced security protection'
    },
    {
      feature: 'Business Intelligence',
      description: 'Monitoring data transformed into strategic insights for informed decision making',
      icon: <Database className="w-5 h-5" />,
      benefit: 'Data-driven decisions'
    },
    {
      feature: 'Predictive Prevention',
      description: 'Advanced analytics identify and prevent issues before they impact business operations',
      icon: <AlertTriangle className="w-5 h-5" />,
      benefit: 'Proactive issue prevention'
    }
  ];

  const monitoringScopes = [
    {
      scope: 'Website Performance',
      description: 'Complete monitoring of website speed, uptime, and functionality across all pages',
      metrics: ['Page load times', 'Server response codes', 'Broken links', 'Form functionality', 'Mobile performance']
    },
    {
      scope: 'Security Monitoring',
      description: 'Advanced threat detection and vulnerability assessment for comprehensive protection',
      metrics: ['Malware scanning', 'SSL certificate monitoring', 'Login attempt tracking', 'File integrity checks', 'Firewall status']
    },
    {
      scope: 'SEO Health Tracking',
      description: 'Continuous monitoring of search engine optimization factors and performance metrics',
      metrics: ['Keyword rankings', 'Organic traffic', 'Crawl errors', 'Meta tag integrity', 'Schema markup validation']
    },
    {
      scope: 'Content Integrity',
      description: 'Automated verification ensuring all content remains accurate and accessible',
      metrics: ['Content changes', 'Image accessibility', 'Video functionality', 'Download links', 'Contact information accuracy']
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
            <span className="text-brand-dark">Digital Overwatch System</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-100 rounded-full mb-6">
                <Shield className="w-5 h-5 text-indigo-600" />
                <span className="text-indigo-600 font-semibold text-sm">Security Platform</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
                Digital Overwatch System
              </h1>
              
              <p className="text-xl text-indigo-600 font-semibold mb-4">
                24/7 Intelligent Protection
              </p>
              
              <p className="text-lg text-brand-dark/70 mb-8 leading-relaxed">
                Advanced AI platform that functions as your digital security command center, providing 24/7 surveillance, threat detection, and automated protection for all online assets. This system anticipates threats, prevents issues, and maintains optimal performance through continuous analysis.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/free-audit"
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all duration-300"
                  >
                    <Eye className="w-5 h-5" />
                    <span>Start Digital Protection</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300"
                  >
                    <Shield className="w-5 h-5" />
                    <span>Deploy Overwatch</span>
                  </Link>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-indigo-200">
                  <div className="text-2xl font-bold text-indigo-600">95%</div>
                  <div className="text-brand-dark/70 text-sm">Threat Prevention Rate</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-indigo-200">
                  <div className="text-2xl font-bold text-indigo-600">99.9%</div>
                  <div className="text-brand-dark/70 text-sm">System Uptime</div>
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
                    src="/platform/verticlescroll.jpeg"
                    alt="Digital Overwatch System"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-2xl group-hover:shadow-glass-lg transition-all duration-500"
                    style={{
                      filter: 'brightness(1.05) contrast(1.05) saturate(1.1)',
                    }}
                  />
                  
                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Monitoring Status */}
                  <div className="absolute top-4 left-4 bg-green-600/90 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>All Systems Protected</span>
                  </div>
                  
                  {/* Threat Status */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                    <div className="text-indigo-600 font-bold text-sm">Threats Blocked: 47</div>
                    <div className="text-indigo-800 text-xs">Last 24 hours</div>
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

      {/* Monitoring Capabilities */}
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
              Advanced Monitoring & Protection Capabilities
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto">
              Comprehensive digital asset protection with predictive intelligence and automated threat response systems.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {monitoringCapabilities.map((capability, index) => (
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
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                      {capability.category}
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span className="text-brand-dark/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-indigo-50 rounded-lg p-4">
                  <p className="text-indigo-800 font-semibold text-sm">
                    <strong>Protection Value:</strong> {capability.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Features */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
              Comprehensive Protection Benefits
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Advanced features that provide complete digital asset protection and business continuity assurance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {protectionFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                      {feature.feature}
                    </h3>
                    <p className="text-brand-dark/70 text-sm mb-3">
                      {feature.description}
                    </p>
                    <div className="text-indigo-600 font-semibold text-xs">
                      {feature.benefit}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Scopes */}
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
              Comprehensive Monitoring Scope
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Complete coverage across all digital asset categories with specialized monitoring for each area.
            </p>
          </motion.div>

          <div className="space-y-8">
            {monitoringScopes.map((scope, index) => (
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
                      {scope.scope}
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed">
                      {scope.description}
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-brand-dark mb-4">Monitoring Metrics:</h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {scope.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center space-x-2 bg-indigo-50 rounded-lg p-3">
                          <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                          <span className="text-brand-dark/80 text-sm">{metric}</span>
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
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Protect Your Digital Empire
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Transform reactive monitoring into predictive protection that prevents problems and optimizes performance around the clock. Ensure business continuity with intelligent surveillance systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/free-audit"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-indigo-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
                >
                  <Shield className="w-5 h-5" />
                  <span>Deploy Digital Protection</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-900 transition-all duration-300"
                >
                  <Monitor className="w-5 h-5" />
                  <span>Start Overwatch System</span>
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
              href="/platform/competitor-analysis"
              className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300 group"
            >
              <Activity className="w-8 h-8 text-rose-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold text-brand-dark mb-2 group-hover:text-rose-600 transition-colors duration-300">
                Competitor Analysis Agent
              </h4>
              <p className="text-brand-dark/70 text-sm">Decode competitor strategies</p>
            </Link>
            <Link
              href="/platform/knowledge-graph"
              className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300 group"
            >
              <Network className="w-8 h-8 text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold text-brand-dark mb-2 group-hover:text-orange-600 transition-colors duration-300">
                Knowledge Graph Optimization
              </h4>
              <p className="text-brand-dark/70 text-sm">Entity-based search dominance</p>
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
          title: "Digital Overwatch System - 24/7 Intelligent Protection",
          description: "Advanced AI platform that functions as your digital security command center, providing 24/7 surveillance, threat detection, and automated protection for all online assets.",
          url: "https://truerankdigital.com/platform/overwatch",
          keywords: ["digital overwatch", "24/7 monitoring", "threat detection", "security monitoring", "automated protection", "digital surveillance", "AI monitoring"],
          category: "SEO Platform",
          toolFeatures: [
            "Comprehensive Asset Surveillance",
            "Predictive Intelligence Engine",
            "Automated Response Systems",
            "Strategic Intelligence Reporting",
            "24/7 Threat Detection",
            "Performance Optimization",
            "Security Enhancement"
          ]
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Platform", url: "https://truerankdigital.com/platform" },
          { name: "Digital Overwatch System", url: "https://truerankdigital.com/platform/overwatch" }
        ]}
      />
    </div>
  );
}
