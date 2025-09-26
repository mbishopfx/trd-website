'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';
import { 
  Target, 
  ArrowLeft, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Award,
  Eye,
  Brain,
  BookOpen,
  Users,
  TrendingUp,
  Search,
  Zap,
  Star,
  Crown,
  Briefcase
} from 'lucide-react';

export default function EEATAnalysisPage() {
  const eeatComponents = [
    {
      letter: 'E',
      term: 'Expertise',
      description: 'Demonstrate subject matter authority through comprehensive content depth and technical accuracy.',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-500',
      analysis: [
        'Content depth scoring and comprehensive topic coverage',
        'Technical accuracy assessment and information quality evaluation', 
        'Author credential analysis and qualification identification',
        'Topic authority mapping across subject areas'
      ]
    },
    {
      letter: 'E',
      term: 'Experience',
      description: 'Showcase real-world knowledge and practical application through documented results.',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500',
      analysis: [
        'Case study identification and practical application evidence',
        'Timeline analysis measuring experience depth and duration',
        'Results documentation with quantifiable outcomes',
        'Client testimonial evaluation and experience validation'
      ]
    },
    {
      letter: 'A',
      term: 'Authoritativeness',
      description: 'Build external validation and industry recognition through authoritative sources.',
      icon: <Crown className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      analysis: [
        'Citation network analysis examining reference quality',
        'External mention tracking for industry recognition',
        'Link authority assessment evaluating backlink relevance',
        'Industry positioning analysis measuring competitive authority'
      ]
    },
    {
      letter: 'T',
      term: 'Trustworthiness',
      description: 'Establish credibility through security, transparency, and professional presentation.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-cyan-500 to-teal-500',
      analysis: [
        'Security implementation analysis and privacy compliance',
        'Contact information completeness and transparency verification',
        'Legal compliance assessment ensuring regulatory adherence',
        'User experience evaluation measuring site reliability'
      ]
    }
  ];

  const industryApplications = [
    {
      industry: 'Healthcare & Medical',
      icon: <Award className="w-6 h-6" />,
      requirements: [
        'Medical expertise verification and proper credentialing display',
        'Patient safety signals and trust indicators for medical content',
        'Clinical evidence integration with proper research citations',
        'Regulatory compliance meeting healthcare industry standards'
      ],
      impact: 'Critical for YMYL (Your Money Your Life) content compliance'
    },
    {
      industry: 'Financial Services',
      icon: <TrendingUp className="w-6 h-6" />,
      requirements: [
        'Financial expertise demonstration and track record evidence',
        'Security implementation meeting stringent trust requirements',
        'Regulatory compliance ensuring financial industry adherence',
        'Client success documentation proving expertise through results'
      ],
      impact: 'Essential for financial advice and service credibility'
    },
    {
      industry: 'Professional Services',
      icon: <Users className="w-6 h-6" />,
      requirements: [
        'Credential optimization ensuring qualifications are highlighted',
        'Case study enhancement developing compelling expertise evidence',
        'Authority content strategy demonstrating deep industry knowledge',
        'Trust signal implementation establishing client credibility'
      ],
      impact: 'Builds competitive advantage through demonstrated authority'
    },
    {
      industry: 'E-commerce & Retail',
      icon: <Star className="w-6 h-6" />,
      requirements: [
        'Product expertise display showing deep industry knowledge',
        'Customer trust signals including reviews and guarantees',
        'Business transparency with complete contact information',
        'Quality assurance demonstrating customer satisfaction commitment'
      ],
      impact: 'Increases conversion rates through enhanced credibility'
    }
  ];

  const optimizationBenefits = [
    { benefit: 'Algorithm-Resistant Authority', description: 'Built on genuine expertise rather than technical manipulation' },
    { benefit: 'Superior Search Visibility', description: 'Comprehensive E-E-A-T optimization for enhanced rankings' },
    { benefit: 'Enhanced Credibility', description: 'Trust building with both search engines and potential customers' },
    { benefit: 'Sustainable Competitive Moats', description: 'Authority signals difficult for competitors to replicate' },
    { benefit: 'Featured Snippet Eligibility', description: 'Higher likelihood of position zero placements' },
    { benefit: 'Voice Search Optimization', description: 'Preferred results for voice and AI-powered queries' }
  ];

  // Enhanced video auto-play with sophisticated fade effects
  useEffect(() => {
    const videos = document.querySelectorAll('video[data-eeat-autoplay]');
    
    videos.forEach((video) => {
      const videoElement = video as HTMLVideoElement;
      
      // Enhanced loop with fade effect
      videoElement.addEventListener('ended', () => {
        videoElement.style.opacity = '0.7';
        setTimeout(() => {
          videoElement.currentTime = 0;
          videoElement.play();
          videoElement.style.opacity = '1';
        }, 200);
      });

      // Smooth start
      videoElement.addEventListener('loadeddata', () => {
        videoElement.style.opacity = '0';
        videoElement.play();
        setTimeout(() => {
          videoElement.style.opacity = '1';
        }, 100);
      });
    });

    return () => {
      videos.forEach((video) => {
        const videoElement = video as HTMLVideoElement;
        videoElement.removeEventListener('ended', () => {});
        videoElement.removeEventListener('loadeddata', () => {});
      });
    };
  }, []);

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
            <span className="text-brand-dark">E-E-A-T Analysis Engine</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with Video */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                <Target className="w-5 h-5 text-purple-600" />
                <span className="text-purple-600 font-semibold text-sm">AI-Powered Analysis</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
                E-E-A-T Analysis Engine
              </h1>
              
              <p className="text-xl text-purple-600 font-semibold mb-4">
                Master Google's Authority Algorithm
              </p>
              
              <p className="text-lg text-brand-dark/70 mb-8 leading-relaxed">
                Advanced AI system that reverse-engineers Google's most critical ranking factors: Expertise, Experience, Authoritativeness, and Trustworthiness. Transform your website from another search result into a trusted industry authority.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/free-audit"
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-all duration-300"
                  >
                    <Eye className="w-5 h-5" />
                    <span>Get E-E-A-T Analysis</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300"
                  >
                    <Target className="w-5 h-5" />
                    <span>Start Authority Building</span>
                  </Link>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600">250%</div>
                  <div className="text-brand-dark/70 text-sm">Authority Recognition Improvement</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600">85%</div>
                  <div className="text-brand-dark/70 text-sm">Featured Snippet Success Rate</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Video with Enhanced Effects */}
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
                  <video
                    data-eeat-autoplay
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto rounded-2xl transition-all duration-500"
                    style={{
                      filter: 'brightness(1.1) contrast(1.1) saturate(1.05)',
                      transition: 'opacity 0.5s ease-in-out, filter 0.3s ease-in-out'
                    }}
                  >
                    <source src="/platform/eeatvideo.mp4" type="video/mp4" />
                    <Image
                      src="/platform/eeat.png"
                      alt="E-E-A-T Analysis Engine"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </video>
                  
                  {/* Video Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Live Analysis Indicator */}
                  <div className="absolute top-4 left-4 bg-purple-600/90 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Live E-E-A-T Analysis</span>
                  </div>
                  
                  {/* Authority Score Display */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                    <div className="text-purple-600 font-bold text-lg">Authority Score</div>
                    <div className="text-purple-800 text-sm">Calculating...</div>
                  </div>
                </div>
                
                {/* Enhanced 3D Shadow */}
                <div 
                  className="absolute inset-0 bg-purple-500/30 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  style={{
                    transform: 'translateZ(-15px) translateY(15px)',
                    zIndex: -1
                  }}
                ></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* E-E-A-T Components Breakdown */}
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
              Advanced E-E-A-T Component Analysis
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto">
              Our AI engine conducts forensic analysis of each E-E-A-T component, providing surgical precision recommendations for unshakeable authority building.
            </p>
          </motion.div>

          <div className="space-y-8">
            {eeatComponents.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`glass-card p-8 lg:p-12 hover:shadow-glass-lg transition-all duration-500 relative overflow-hidden ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex gap-12`}>
                  
                  {/* Background Effect */}
                  <div className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br ${component.color} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                  
                  {/* Content */}
                  <div className="lg:w-1/2 relative z-10">
                    <div className="flex items-center space-x-6 mb-8">
                      {/* Letter Badge */}
                      <div className={`w-20 h-20 bg-gradient-to-br ${component.color} rounded-2xl flex items-center justify-center text-white text-3xl font-bold group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                        {component.letter}
                      </div>
                      
                      {/* Component Info */}
                      <div>
                        <h3 className="text-3xl font-heading font-bold text-brand-dark group-hover:text-purple-600 transition-colors duration-300">
                          {component.term}
                        </h3>
                        <p className="text-purple-600 font-semibold text-lg">
                          {component.description}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-brand-dark mb-4">AI Analysis Capabilities:</h4>
                      <div className="space-y-3">
                        {component.analysis.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                            <span className="text-brand-dark/80 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Icon Visualization */}
                  <div className="lg:w-1/2 flex items-center justify-center">
                    <motion.div
                      className={`w-48 h-48 bg-gradient-to-br ${component.color} rounded-3xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500`}
                      whileHover={{ rotateY: 15, rotateX: 15 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {component.icon}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
              Industry-Specific E-E-A-T Applications
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Tailored authority building strategies for different industry requirements and compliance standards.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {industryApplications.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-brand-dark group-hover:text-purple-600 transition-colors duration-300">
                    {industry.industry}
                  </h3>
                </div>

                <div className="space-y-3 mb-6">
                  {industry.requirements.map((requirement, reqIndex) => (
                    <div key={reqIndex} className="flex items-start space-x-3">
                      <ArrowRight className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                      <span className="text-brand-dark/80 text-sm">{requirement}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-purple-100 rounded-lg p-4">
                  <div className="text-purple-800 font-semibold text-sm">
                    <strong>Strategic Impact:</strong> {industry.impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Benefits */}
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
              Strategic Authority Building Benefits
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Long-term competitive advantages through genuine authority development and algorithmic trust building.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {optimizationBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-2 group-hover:text-purple-600 transition-colors duration-300">
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

      {/* Visual Analysis Demo */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
                Advanced Authority Analysis in Action
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Watch our AI engine conduct forensic analysis of E-E-A-T signals, identifying exactly how Google perceives your authority and providing surgical precision recommendations for enhancement.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-pink-400" />
                  <span>Deep semantic analysis of content expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-pink-400" />
                  <span>External validation and authority signal detection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-pink-400" />
                  <span>Trust factor evaluation and security assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-pink-400" />
                  <span>Competitive authority benchmarking analysis</span>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/free-audit"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-purple-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
                >
                  <Target className="w-5 h-5" />
                  <span>Request E-E-A-T Analysis</span>
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
                    src="/platform/eeat.png"
                    alt="E-E-A-T Analysis Dashboard"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl"
                    style={{
                      filter: 'brightness(1.1) contrast(1.1)',
                    }}
                  />
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Analysis Score */}
                  <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm rounded-xl px-3 py-2 text-white text-sm font-semibold">
                    Authority Score: 87/100
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
              Ready to Build Unshakeable Authority?
            </h2>
            <p className="text-xl text-brand-dark/70 mb-8 max-w-3xl mx-auto">
              Transform your website from another search result into a trusted industry authority. Master Google's E-E-A-T algorithm with surgical precision optimization strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/free-audit"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-all duration-300"
                >
                  <Target className="w-5 h-5" />
                  <span>Get Authority Analysis</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  <Shield className="w-5 h-5" />
                  <span>Build Authority Strategy</span>
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
              <Brain className="w-8 h-8 text-brand-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors duration-300">
                View All Platform Tools
              </h4>
              <p className="text-brand-dark/70 text-sm">Complete platform overview</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Video Styles */}
      <style jsx global>{`
        video[data-eeat-autoplay] {
          transition: opacity 0.5s ease-in-out, filter 0.3s ease-in-out;
        }
        
        video[data-eeat-autoplay]:hover {
          filter: brightness(1.2) contrast(1.15) saturate(1.1) !important;
        }
        
        .video-fade-loop {
          animation: videoFadeLoop 0.5s ease-in-out;
        }
        
        @keyframes videoFadeLoop {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.9; }
        }
      `}</style>

      {/* Comprehensive Schema Markup */}
      <ComprehensiveSchema
        type="platform-tool"
        pageData={{
          title: "E-E-A-T Analysis Engine - Master Google's Authority Algorithm",
          description: "Advanced AI system that reverse-engineers Google's critical ranking factors: Expertise, Experience, Authoritativeness, and Trustworthiness for superior search authority.",
          url: "https://truerankdigital.com/platform/eeat-analysis",
          keywords: ["E-E-A-T analysis", "Google algorithm", "expertise analysis", "authoritativeness", "trustworthiness", "experience signals", "authority optimization"],
          category: "SEO Platform",
          toolFeatures: [
            "Expertise Signal Analysis",
            "Experience Verification", 
            "Authoritativeness Measurement",
            "Trustworthiness Assessment",
            "YMYL Content Analysis",
            "Authority Score Optimization",
            "Content Credibility Enhancement"
          ]
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Platform", url: "https://truerankdigital.com/platform" },
          { name: "E-E-A-T Analysis Engine", url: "https://truerankdigital.com/platform/eeat-analysis" }
        ]}
      />
    </div>
  );
}
