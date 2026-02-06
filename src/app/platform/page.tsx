'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Zap, 
  BarChart3, 
  Target, 
  Search, 
  Network, 
  Shield, 
  MessageSquare, 
  Users, 
  TrendingUp,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Monitor,
  Brain,
  Lock,
  Rocket,
  Clock,
  Database
} from 'lucide-react';

export default function PlatformPage() {
  const platformTools = [
    {
      id: 'grid-ranking',
      name: 'Grid Ranking System',
      tagline: 'Geographic Search Intelligence',
      description: 'Revolutionary precision marketing through location intelligence with comprehensive geographic market analysis.',
      features: [
        'Multi-point precision analysis across a broad set of coordinates',
        'Heat map visualization of competitive strengths by location', 
        'Real-time competitive intelligence monitoring',
        'Predictive market modeling for opportunity zones'
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      imageUrl: '/platform/gridmapdemo.png',
      videoUrl: null,
      href: '/platform/grid-ranking',
      badge: 'Core System'
    },
    {
      id: 'eeat-analysis',
      name: 'E-E-A-T Analysis Engine',
      tagline: 'Master Google\'s Authority Algorithm',
      description: 'Advanced AI system that reverse-engineers Google\'s most critical ranking factors for unshakeable authority.',
      features: [
        'Forensic analysis of Expertise, Experience, Authority & Trust',
        'Competitive authority benchmarking and gap analysis',
        'Strategic optimization for featured snippets and rankings',
        'Algorithm-resistant authority building strategies'
      ],
      icon: <Target className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      imageUrl: '/platform/eeat.png',
      videoUrl: '/platform/eeatvideo.mp4',
      href: '/platform/eeat-analysis',
      badge: 'AI Powered'
    },
    {
      id: 'indexability',
      name: 'Indexability Analysis Engine',
      tagline: 'Unlock Hidden SEO Potential',
      description: 'Sophisticated diagnostic platform ensuring Google discovers, crawls, and indexes every valuable page.',
      features: [
        'Comprehensive crawlability and infrastructure assessment',
        'Technical barrier identification and resolution',
        'Content accessibility optimization for search engines',
        'Index management strategy and performance enhancement'
      ],
      icon: <Search className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500',
      imageUrl: '/platform/websiteindex.png',
      videoUrl: null,
      href: '/platform/indexability',
      badge: 'Technical SEO'
    },
    {
      id: 'knowledge-graph',
      name: 'Knowledge Graph Optimization',
      tagline: 'Dominate Entity-Based Search',
      description: 'Transform your business into a recognized digital entity within Google\'s vast knowledge network.',
      features: [
        'Entity recognition and authority assessment systems',
        'Structured data intelligence and schema optimization',
        'Authority network building and citation development',
        'Knowledge panel optimization for branded searches'
      ],
      icon: <Network className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      imageUrl: '/platform/websitedna.png',
      videoUrl: null,
      href: '/platform/knowledge-graph',
      badge: 'Semantic SEO'
    },
    {
      id: 'overwatch',
      name: 'Digital Overwatch System',
      tagline: '24/7 Intelligent Protection',
      description: 'Comprehensive digital asset protection with predictive intelligence and automated threat response.',
      features: [
        'Comprehensive asset surveillance and monitoring',
        'Predictive intelligence engine for threat forecasting',
        'Automated response systems and self-healing protocols',
        'Strategic intelligence reporting and business insights'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      imageUrl: '/platform/verticlescroll.jpeg',
      videoUrl: null,
      href: '/platform/overwatch',
      badge: 'Security'
    },
    {
      id: 'competitor-analysis',
      name: 'Competitor Analysis Agent',
      tagline: 'Decode Your Competition\'s DNA',
      description: 'AI-powered competitive intelligence that reveals hidden strategies and identifies market opportunities.',
      features: [
        'Autonomous competitor discovery and threat identification',
        'Strategic forensic analysis of competitor methodologies',
        'Predictive competitive modeling and market forecasting',
        'Market gap identification and opportunity spotting'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'from-rose-500 to-pink-500',
      imageUrl: '/platform/maprankdash.png',
      videoUrl: null,
      href: '/platform/competitor-analysis',
      badge: 'Intelligence'
    },
    {
      id: 'lead-generation',
      name: 'Lead Generation Intelligence',
      tagline: 'Predict Markets Before They Emerge',
      description: 'Revolutionary lead generation that identifies businesses about to need your services.',
      features: [
        'Market prediction algorithms and opportunity identification',
        'Intent signal aggregation across multiple channels',
        'Business lifecycle analysis and predictive timing',
        'Organic opportunity discovery through proprietary methods'
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-emerald-500 to-teal-500',
      imageUrl: '/platform/gridmapsnap.png',
      videoUrl: null,
      href: '/platform/lead-generation',
      badge: 'Predictive'
    }
  ];

  const platformStats = [
    { value: 'Unified', label: 'Client Platform', icon: <Database className="w-6 h-6" /> },
    { value: 'Real-Time', label: 'Monitoring', icon: <Monitor className="w-6 h-6" /> },
    { value: 'AI-Assisted', label: 'Analysis', icon: <Brain className="w-6 h-6" /> },
    { value: '24/7', label: 'Availability', icon: <Lock className="w-6 h-6" /> }
  ];

  // Video auto-play with fade effect setup
  useEffect(() => {
    const videos = document.querySelectorAll('video[data-autoplay]');
    videos.forEach((video) => {
      const videoElement = video as HTMLVideoElement;
      videoElement.addEventListener('ended', () => {
        videoElement.currentTime = 0;
        videoElement.play();
      });
    });

    return () => {
      videos.forEach((video) => {
        const videoElement = video as HTMLVideoElement;
        videoElement.removeEventListener('ended', () => {});
      });
    };
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-accent text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-2xl blur-xl"
          />
          <motion.div
            animate={{ 
              y: [0, 40, 0],
              rotate: [0, -20, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              x: [0, 20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1.5
            }}
            className="absolute bottom-32 left-1/4 w-16 h-16 bg-white/20 rounded-xl blur-lg"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-full mb-6">
              <Zap className="w-5 h-5 text-white" />
              <span className="text-white font-semibold text-sm">Exclusive Client Platform</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              True Rank Digital Platform
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              The complete digital dominance ecosystem that transforms businesses into market leaders through unified intelligence systems, advanced AI technology, and proprietary solution building frameworks.
            </p>

            {/* Platform Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {platformStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"
                >
                  <div className="text-white mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/free-audit"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-brand-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl"
                >
                  <Rocket className="w-5 h-5" />
                  <span>Access Platform Demo</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-brand-primary transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Schedule Platform Tour</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Platform Overview */}
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
              Revolutionary AI-Powered Intelligence Platform
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto leading-relaxed">
              Beyond traditional digital marketing tools—our integrated ecosystem creates synergistic advantages where each component amplifies the effectiveness of others, resulting in exponential rather than incremental improvements. This ever-expanding platform continuously evolves with new features and capabilities.
            </p>
          </motion.div>

          <div className="glass-card p-8 lg:p-12 bg-gradient-to-br from-brand-light/30 to-white border-l-4 border-brand-primary mb-16">
            <div className="flex items-start space-x-4">
              <Sparkles className="w-8 h-8 text-brand-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                  Ever-Expanding Innovation Framework
                </h3>
                <p className="text-brand-dark/70 leading-relaxed mb-4">
                  Our platform represents a living, breathing technology ecosystem that continuously evolves. Unlike static tools, our solution building frameworks adapt and expand with emerging technologies, algorithm changes, and market evolution. New intelligent features, predictive capabilities, and automation tools are regularly integrated to maintain competitive advantages.
                </p>
                <div className="flex items-center space-x-2 text-brand-primary">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Continuous Updates & New Features Added Monthly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Tools Grid */}
      <section className="py-20 bg-brand-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
              Advanced Intelligence Systems
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Seven sophisticated AI-powered platforms working in perfect harmony to create unprecedented competitive advantages.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {platformTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`glass-card p-8 lg:p-12 hover:shadow-glass-lg transition-all duration-500 relative overflow-hidden ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex gap-12`}>
                  
                  {/* Background Gradient Effect */}
                  <div className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br ${tool.color} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                  
                  {/* Content Section */}
                  <div className="lg:w-1/2 relative z-10">
                    {/* Tool Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                        <div className="text-white">
                          {tool.icon}
                        </div>
                      </div>
                      <div>
                        <div className={`inline-block px-3 py-1 bg-gradient-to-r ${tool.color} text-white text-sm font-semibold rounded-full mb-2`}>
                          {tool.badge}
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-heading font-bold text-brand-dark group-hover:text-brand-primary transition-colors duration-300">
                          {tool.name}
                        </h3>
                        <p className="text-brand-primary font-semibold text-lg">
                          {tool.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Tool Description */}
                    <p className="text-brand-dark/70 leading-relaxed mb-6 text-lg">
                      {tool.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-brand-dark mb-4">Key Capabilities:</h4>
                      <ul className="space-y-3">
                        {tool.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <ChevronRight className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                            <span className="text-brand-dark/80 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link
                      href={tool.href}
                      className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-primary/80 font-semibold transition-colors duration-200 group-hover:translate-x-2 transition-transform"
                    >
                      <span>Explore {tool.name}</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>

                  {/* Visual Section */}
                  <div className="lg:w-1/2 relative">
                    <motion.div
                      className="relative group/image cursor-pointer"
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
                      {tool.videoUrl ? (
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <video
                            data-autoplay
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto rounded-2xl group-hover/image:shadow-glass-lg transition-all duration-500"
                            style={{
                              filter: 'brightness(1.1) contrast(1.1)',
                              animation: 'fadeInOut 0.5s ease-in-out'
                            }}
                          >
                            <source src={tool.videoUrl} type="video/mp4" />
                          </video>
                          
                          {/* Video Overlay Effects */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                          
                          {/* Play Indicator */}
                          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
                            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      ) : (
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <Image
                            src={tool.imageUrl}
                            alt={tool.name}
                            width={800}
                            height={600}
                            className="w-full h-auto rounded-2xl group-hover/image:shadow-glass-lg transition-all duration-500"
                            style={{
                              filter: 'brightness(1.05) contrast(1.05) saturate(1.1)',
                              transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
                            }}
                          />
                          
                          {/* Image Overlay Effects */}
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 via-transparent to-brand-accent/10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                          
                          {/* Perspective Grid Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                        </div>
                      )}
                      
                      {/* 3D Shadow Effect */}
                      <div 
                        className="absolute inset-0 bg-black/20 rounded-2xl blur-xl opacity-50 group-hover/image:opacity-70 transition-opacity duration-500"
                        style={{
                          transform: 'translateZ(-10px) translateY(10px)',
                          zIndex: -1
                        }}
                      ></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Integration Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
              Synergistic Platform Integration
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto">
              The true power emerges through unified intelligence systems where each component amplifies others, creating exponential improvements and sustainable competitive advantages.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                {[
                  {
                    icon: <Database className="w-6 h-6" />,
                    title: 'Unified Intelligence',
                    description: 'All systems share data and insights, creating comprehensive understanding of your market position and optimization opportunities.'
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: 'Compound Optimization',
                    description: 'Improvements in one system accelerate progress in others, creating exponential rather than linear growth patterns.'
                  },
                  {
                    icon: <Brain className="w-6 h-6" />,
                    title: 'Predictive Intelligence',
                    description: 'Combined AI systems predict market changes, algorithm updates, and competitive threats before they impact your business.'
                  },
                  {
                    icon: <Rocket className="w-6 h-6" />,
                    title: 'Continuous Evolution',
                    description: 'Platform continuously integrates new capabilities, ensuring you stay ahead of market changes and technological advances.'
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-accent rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-brand-dark/70 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Platform Integration Visualization */}
              <div className="relative">
                <div className="glass-card p-8 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10">
                  <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6 text-center">
                    Platform Ecosystem
                  </h3>
                  
                  {/* Central Hub */}
                  <div className="relative flex items-center justify-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full flex items-center justify-center text-white animate-pulse">
                      <Brain className="w-10 h-10" />
                    </div>
                    <div className="absolute inset-0 border-4 border-brand-primary/30 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
                  </div>

                  {/* Orbiting Elements */}
                  <div className="relative">
                    {[
                      { icon: <BarChart3 className="w-4 h-4" />, color: 'from-blue-500 to-cyan-500', delay: 0 },
                      { icon: <Target className="w-4 h-4" />, color: 'from-purple-500 to-pink-500', delay: 1 },
                      { icon: <Search className="w-4 h-4" />, color: 'from-green-500 to-teal-500', delay: 2 },
                      { icon: <Network className="w-4 h-4" />, color: 'from-orange-500 to-red-500', delay: 3 },
                      { icon: <Shield className="w-4 h-4" />, color: 'from-indigo-500 to-purple-500', delay: 4 },
                      { icon: <MessageSquare className="w-4 h-4" />, color: 'from-violet-500 to-purple-500', delay: 5 },
                      { icon: <Users className="w-4 h-4" />, color: 'from-rose-500 to-pink-500', delay: 6 },
                      { icon: <TrendingUp className="w-4 h-4" />, color: 'from-emerald-500 to-teal-500', delay: 7 }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className={`absolute w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center text-white`}
                        animate={{
                          x: [0, Math.cos(index * (360/8) * Math.PI/180) * 80],
                          y: [0, Math.sin(index * (360/8) * Math.PI/180) * 80],
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: 'linear',
                          delay: item.delay * 0.5
                        }}
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        {item.icon}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Access CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Ready to Access the Platform?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Transform your business from market participant to market leader. Experience the power of unified intelligence systems that create sustainable competitive advantages through ever-expanding technological innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/free-audit"
                  className="inline-flex items-center space-x-2 px-10 py-5 bg-white text-brand-primary font-semibold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl"
                >
                  <Rocket className="w-6 h-6" />
                  <span>Schedule Platform Demo</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-10 py-5 border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white hover:text-brand-primary transition-all duration-300"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span>Contact Platform Specialists</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom CSS for video fade effects */}
      <style jsx global>{`
        @keyframes fadeInOut {
          0% { opacity: 0.95; }
          50% { opacity: 1; }
          100% { opacity: 0.95; }
        }
        
        video[data-autoplay] {
          transition: opacity 0.5s ease-in-out;
        }
        
        video[data-autoplay]:hover {
          opacity: 1;
          filter: brightness(1.2) contrast(1.15) saturate(1.1);
        }
        
        .perspective-hover:hover {
          transform: perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.05);
        }
      `}</style>
    </div>
  );
}
