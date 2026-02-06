'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';
import { 
  BarChart3, 
  ArrowLeft, 
  MapPin, 
  Target, 
  TrendingUp, 
  Zap,
  CheckCircle,
  ArrowRight,
  Eye,
  Map,
  Layers,
  Activity,
  Compass,
  Crosshair,
  Search
} from 'lucide-react';

export default function GBPProGridRankingPage() {
  const keyFeatures = [
    {
      icon: <Map className="w-6 h-6" />,
      title: 'Multi-Point Precision Analysis',
      description: 'Creates a virtual grid network across a broad set of geographic coordinates for comprehensive market intelligence.',
      benefit: 'Improves local search visibility through strategic geographic optimization'
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Heat Map Visualization Technology',
      description: 'Transforms raw ranking data into intuitive heat maps revealing competitive strengths and weaknesses by location.',
      benefit: 'Helps reduce wasted marketing spend by focusing on high-opportunity areas'
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: 'Predictive Market Modeling',
      description: 'Identifies emerging opportunity zones before competitors discover them using proprietary algorithms.',
      benefit: 'Accelerates market expansion through data-driven territory selection'
    },
    {
      icon: <Crosshair className="w-6 h-6" />,
      title: 'Real-Time Competitive Intelligence',
      description: 'Continuously monitors market changes and competitor positioning across all geographic areas.',
      benefit: 'Sustainable competitive moats through superior market intelligence'
    }
  ];

  const applicationScenarios = [
    {
      title: 'Multi-Location Businesses',
      description: 'Ensure each location dominates its micro-market while preventing location cannibalization.',
      applications: ['Franchise optimization across territories', 'Territory management and performance benchmarking', 'Market penetration gap identification']
    },
    {
      title: 'Service Area Businesses', 
      description: 'Focus optimization efforts on areas with highest search volume and conversion potential.',
      applications: ['Route optimization for service efficiency', 'Market expansion into profitable territories', 'Local authority building in key neighborhoods']
    },
    {
      title: 'E-commerce with Local Presence',
      description: 'Combine online presence with geographic relevance for pickup locations and local demand.',
      applications: ['Pickup location visibility optimization', 'Local demand pattern analysis', 'Geographic market research integration']
    }
  ];

  const technicalAdvantages = [
    { feature: 'Geographic Precision', description: 'Know exactly where you rank in every neighborhood and district' },
    { feature: 'Competitive Intelligence', description: 'Understand competitor strategies and positioning by specific location' },
    { feature: 'Market Expansion', description: 'Identify untapped geographic opportunities for strategic growth' },
    { feature: 'ROI Optimization', description: 'Focus optimization efforts on areas with highest impact potential' },
    { feature: 'Data-Driven Decisions', description: 'Replace guesswork with comprehensive geographic search intelligence' },
    { feature: 'Performance Tracking', description: 'Monitor improvements with surgical precision across all locations' }
  ];

  return (
    <div className="pt-20">
      {/* Navigation Breadcrumb */}
      <div className="bg-brand-light/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-brand-primary hover:text-brand-primary/80 flex items-center space-x-1">
              <ArrowLeft className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <span className="text-brand-dark/50">/</span>
            <span className="text-brand-dark">GBP Pro Search Grid Ranking</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #3B82F6 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #06B6D4 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-2">
                    GBP Pro Search Grid Ranking System
                  </h1>
                  <p className="text-brand-primary font-semibold">Geographic Search Intelligence Platform</p>
                </div>
              </div>
              
              <p className="text-xl text-brand-dark/70 mb-8 leading-relaxed">
                Revolutionary precision marketing through location intelligence. Our proprietary grid system analyzes search rankings across a broad set of geographic coordinates, providing actionable insights into local market positioning and competitive dynamics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <Target className="w-5 h-5" />
                    <span>Request Demo</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/platform"
                    className="inline-flex items-center space-x-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
                  >
                    <Eye className="w-5 h-5" />
                    <span>View Platform</span>
                  </Link>
                </motion.div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">Broad</div>
                  <div className="text-sm text-brand-dark/60">Coverage</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">Frequent</div>
                  <div className="text-sm text-brand-dark/60">Updates</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">Actionable</div>
                  <div className="text-sm text-brand-dark/60">Insights</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                  <Image
                    src="/platform/gridmapsnap.png"
                    alt="Grid Ranking System Interface"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-2xl group-hover:shadow-glass-lg transition-all duration-500"
                    style={{
                      filter: 'brightness(1.05) contrast(1.05) saturate(1.1)',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
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
              Advanced Geographic Intelligence Features
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Our grid ranking system provides unprecedented visibility into local search performance across every geographic area that matters to your business.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 hover:shadow-glass-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-brand-dark/70 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-green-800 text-sm font-medium">{feature.benefit}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Scenarios */}
      <section className="py-20 bg-brand-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
              Strategic Applications Across Business Types
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Our grid ranking intelligence adapts to your specific business model and geographic requirements.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {applicationScenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 hover:shadow-glass-lg transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                    {scenario.title}
                  </h3>
                  <p className="text-brand-dark/70 leading-relaxed mb-6">
                    {scenario.description}
                  </p>
                </div>
                
                <ul className="space-y-3">
                  {scenario.applications.map((application, appIndex) => (
                    <li key={appIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-brand-dark/70 text-sm">{application}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                Why Grid-Based Intelligence Outperforms Traditional Methods
              </h2>
              <p className="text-xl text-brand-dark/70 mb-8 leading-relaxed">
                Most businesses rely on basic rank tracking that provides limited geographic insight. Our advanced grid system delivers comprehensive market intelligence that transforms how you approach local optimization.
              </p>
              
              <div className="space-y-4">
                {technicalAdvantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-brand-dark mb-1">{advantage.feature}</h4>
                      <p className="text-brand-dark/70 text-sm">{advantage.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                  <Image
                    src="/platform/gridmapdemo.png"
                    alt="Grid Ranking Demo Interface"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-2xl group-hover:shadow-glass-lg transition-all duration-500"
                    style={{
                      filter: 'brightness(1.05) contrast(1.05) saturate(1.1)',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              Ready to See Your Market Like Never Before?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Experience the power of grid-based geographic intelligence and transform how you dominate local search results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
                >
                  <Zap className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/platform"
                  className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                  <span>Explore Full Platform</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional CTA Cards */}
      <section className="py-16 bg-brand-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center hover:shadow-glass-lg transition-all duration-300"
            >
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                Free Platform Demo
              </h3>
              <p className="text-brand-dark/70 mb-6">
                See the grid ranking system in action with your business data
              </p>
              <Link href="/contact" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
                <span>Request Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center hover:shadow-glass-lg transition-all duration-300"
            >
              <Layers className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-heading font-bold text-brand-dark mb-4">
                Complete platform overview
              </h4>
              <p className="text-brand-dark/70 text-sm">
                Explore all seven AI-powered tools in our comprehensive platform
              </p>
              <Link href="/platform" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold text-sm mt-4">
                <span>View Platform</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comprehensive Schema Markup */}
      <ComprehensiveSchema
        type="platform-tool"
        pageData={{
          title: "GBP Pro Search Grid Ranking System - Geographic Search Intelligence",
          description: "Revolutionary precision marketing through location intelligence with comprehensive geographic market analysis and heat map visualization for dominating local search results.",
          url: "https://truerankdigital.com/gbp-pro/search-grid-ranking",
          keywords: ["grid ranking", "geographic search", "local SEO", "heat map visualization", "location intelligence", "geo-targeting", "local search optimization", "GBP Pro"],
          category: "SEO Platform",
          toolFeatures: [
            "Heat Map Visualization",
            "Multi-Point Geographic Analysis", 
            "Competitor Location Tracking",
            "Local Search Dominance Mapping",
            "Geographic Market Intelligence",
            "Location-Based Performance Metrics",
            "Territory Expansion Analysis"
          ]
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "GBP Pro Search Grid Ranking", url: "https://truerankdigital.com/gbp-pro/search-grid-ranking" }
        ]}
      />
    </div>
  );
}
