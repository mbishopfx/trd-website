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

export default function GridRankingPage() {
  const keyFeatures = [
    {
      icon: <Map className="w-6 h-6" />,
      title: 'Multi-Point Precision Analysis',
      description: 'Creates virtual grid network across thousands of geographic coordinates for comprehensive market intelligence.',
      benefit: '70% improvement in local search visibility through strategic geographic optimization'
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Heat Map Visualization Technology',
      description: 'Transforms raw ranking data into intuitive heat maps revealing competitive strengths and weaknesses by location.',
      benefit: '45% reduction in wasted marketing spend by focusing on high-opportunity areas'
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: 'Predictive Market Modeling',
      description: 'Identifies emerging opportunity zones before competitors discover them using proprietary algorithms.',
      benefit: '3x faster market expansion through data-driven territory selection'
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
            <Link href="/platform" className="text-brand-primary hover:text-brand-primary/80 flex items-center space-x-1">
              <ArrowLeft className="w-4 h-4" />
              <span>Platform</span>
            </Link>
            <span className="text-brand-dark/50">/</span>
            <span className="text-brand-dark">Grid Ranking System</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F7FFF' fill-opacity='0.3'%3E%3Cpath d='M30 30m-2 0a2 2 0 1 1 4 0a2 2 0 1 1-4 0'/%3E%3Cpath d='M30 10m-2 0a2 2 0 1 1 4 0a2 2 0 1 1-4 0'/%3E%3Cpath d='M30 50m-2 0a2 2 0 1 1 4 0a2 2 0 1 1-4 0'/%3E%3Cpath d='M10 30m-2 0a2 2 0 1 1 4 0a2 2 0 1 1-4 0'/%3E%3Cpath d='M50 30m-2 0a2 2 0 1 1 4 0a2 2 0 1 1-4 0'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 font-semibold text-sm">Core Platform System</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
                Grid Ranking System
              </h1>
              
              <p className="text-xl text-blue-600 font-semibold mb-4">
                Revolutionary Geographic Search Intelligence
              </p>
              
              <p className="text-lg text-brand-dark/70 mb-8 leading-relaxed">
                Transform your local search strategy from basic ranking checks to comprehensive geographic market intelligence. Our proprietary Grid Ranking System creates a virtual surveillance network across your entire service area, providing insights that were previously impossible to obtain.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/free-audit"
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300"
                  >
                    <Eye className="w-5 h-5" />
                    <span>See Grid Ranking Demo</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>Access Grid Intelligence</span>
                  </Link>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">70%</div>
                  <div className="text-brand-dark/70 text-sm">Local Search Visibility Improvement</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">45%</div>
                  <div className="text-brand-dark/70 text-sm">Marketing Spend Reduction</div>
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
                    src="/platform/gridmapdemo.png"
                    alt="Grid Ranking System Demo"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-2xl group-hover:shadow-glass-lg transition-all duration-500"
                    style={{
                      filter: 'brightness(1.05) contrast(1.05) saturate(1.1)',
                    }}
                  />
                  
                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Interactive Elements */}
                  <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold">
                    Live Grid Analysis
                  </div>
                  
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-blue-600 text-sm font-semibold">
                    Real-Time Data
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
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
              Revolutionary Grid Intelligence Features
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Advanced capabilities that redefine local SEO from guesswork to science through geographic search intelligence.
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
                className="glass-card p-8 hover:shadow-glass-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-brand-dark/70 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-blue-800 font-semibold text-sm">
                        <strong>Business Impact:</strong> {feature.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
              Strategic Competitive Advantages
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Technical capabilities that separate enterprise local SEO from basic ranking monitoring.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-2">
                      {advantage.feature}
                    </h3>
                    <p className="text-brand-dark/70 text-sm">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Scenarios */}
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
              Real-World Applications
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              How different business types leverage grid ranking intelligence for competitive advantage.
            </p>
          </motion.div>

          <div className="space-y-8">
            {applicationScenarios.map((scenario, index) => (
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
                      {scenario.title}
                    </h3>
                    <p className="text-brand-dark/70 leading-relaxed">
                      {scenario.description}
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-brand-dark mb-4">Key Applications:</h4>
                    <div className="space-y-3">
                      {scenario.applications.map((application, appIndex) => (
                        <div key={appIndex} className="flex items-start space-x-3">
                          <Target className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-brand-dark/80">{application}</span>
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

      {/* Visual Demo Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
                See Grid Ranking in Action
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Experience how our proprietary grid ranking system reveals geographic search patterns that traditional tools miss. This comprehensive intelligence transforms local SEO from reactive to predictive, from general to precise.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Layers className="w-5 h-5 text-cyan-400" />
                  <span>Heat map visualization of ranking patterns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Activity className="w-5 h-5 text-cyan-400" />
                  <span>Real-time competitive intelligence monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Compass className="w-5 h-5 text-cyan-400" />
                  <span>Predictive opportunity zone identification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Crosshair className="w-5 h-5 text-cyan-400" />
                  <span>Multi-device ranking analysis across locations</span>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/free-audit"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
                >
                  <BarChart3 className="w-5 h-5" />
                  <span>Request Grid Analysis Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 3,
                  rotateX: 3
                }}
                transition={{ duration: 0.5 }}
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/platform/gridmapsnap.png"
                    alt="Grid Ranking Analytics"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl"
                    style={{
                      filter: 'brightness(1.1) contrast(1.1)',
                    }}
                  />
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Live Data Indicators */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
              Ready to Dominate Your Local Market?
            </h2>
            <p className="text-xl text-brand-dark/70 mb-8 max-w-3xl mx-auto">
              Transform your local SEO strategy from reactive to predictive with comprehensive geographic search intelligence that reveals opportunities competitors can't see.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/free-audit"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300"
                >
                  <BarChart3 className="w-5 h-5" />
                  <span>Get Grid Ranking Analysis</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Discuss Implementation</span>
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
              <Target className="w-8 h-8 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold text-brand-dark mb-2 group-hover:text-purple-600 transition-colors duration-300">
                E-E-A-T Analysis Engine
              </h4>
              <p className="text-brand-dark/70 text-sm">Master Google's authority algorithm</p>
            </Link>
            <Link
              href="/platform/indexability"
              className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300 group"
            >
              <Search className="w-8 h-8 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold text-brand-dark mb-2 group-hover:text-green-600 transition-colors duration-300">
                Indexability Analysis
              </h4>
              <p className="text-brand-dark/70 text-sm">Unlock hidden SEO potential</p>
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
          title: "Grid Ranking System - Geographic Search Intelligence",
          description: "Revolutionary precision marketing through location intelligence with comprehensive geographic market analysis and heat map visualization for dominating local search results.",
          url: "https://truerankdigital.com/platform/grid-ranking",
          keywords: ["grid ranking", "geographic search", "local SEO", "heat map visualization", "location intelligence", "geo-targeting", "local search optimization"],
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
          { name: "Platform", url: "https://truerankdigital.com/platform" },
          { name: "Grid Ranking System", url: "https://truerankdigital.com/platform/grid-ranking" }
        ]}
      />
    </div>
  );
}
