'use client';

import Link from 'next/link';
import Script from 'next/script';
import { motion } from 'framer-motion';
import { Brain, BookOpen, TrendingUp, Zap, Target, Code, Search, AlertTriangle, ArrowRight, Clock, Users } from 'lucide-react';

// Metadata is handled by the parent layout for client components

export default function EducationPage() {
  // Collection Page Schema for Education Hub
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "SEO Education & Learning Center | True Rank Digital",
    "description": "Advanced SEO education guides covering AI search preparation, algorithm adaptation, custom solutions, and future-proofing strategies from True Rank Digital experts.",
    "url": "https://truerankdigital.com/education",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://truerankdigital.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Education",
          "item": "https://truerankdigital.com/education"
        }
      ]
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Article",
            "name": "Preparing Your Business for AI Search & LLM Integration",
            "description": "Comprehensive guide to understanding how Large Language Models are transforming search behavior and ranking factors.",
            "url": "https://truerankdigital.com/education/ai-search-preparation"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Article",
            "name": "Algorithm Evolution & Real-Time Adaptation Strategies",
            "description": "Deep-dive into Google's algorithm update patterns, machine learning integration, and real-time SEO adaptation frameworks.",
            "url": "https://truerankdigital.com/education/algorithm-adaptation"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Article",
            "name": "Custom SEO Solutions vs Cookie-Cutter Platforms",
            "description": "Technical comparison revealing why enterprise SEO requires custom script integration and adaptive optimization frameworks.",
            "url": "https://truerankdigital.com/education/custom-vs-cookie-cutter"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Article",
            "name": "Future-Proofing SEO: Advanced Prediction & Adaptation Methodologies",
            "description": "Sophisticated prediction models and adaptation methodologies for maintaining search visibility through AI advancement.",
            "url": "https://truerankdigital.com/education/future-proofing-seo"
          }
        }
      ]
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://truerankdigital.com/#organization",
      "name": "True Rank Digital"
    }
  };

  const guides = [
    {
      icon: <Brain className="w-8 h-8" />,
      category: 'AI Search Evolution',
      title: 'Preparing Your Business for AI Search & LLM Integration',
      description: 'Comprehensive guide to understanding how Large Language Models are transforming search behavior, query processing, and ranking factors. Learn the advanced technical strategies required to optimize for ChatGPT, Perplexity, and AI Overview integration.',
      complexity: 'Advanced',
      readTime: '15 min',
      topics: ['LLM Query Processing', 'AI Overview Optimization', 'Semantic Search Evolution', 'Voice Search Integration'],
      link: '/education/ai-search-preparation',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      category: 'Algorithm Intelligence',
      title: 'Algorithm Evolution & Real-Time Adaptation Strategies',
      description: 'Deep-dive into Google\'s algorithm update patterns, machine learning integration, and the technical frameworks required for real-time SEO adaptation. Understand why static optimization approaches fail in the AI era.',
      complexity: 'Expert',
      readTime: '22 min',
      topics: ['RankBrain Evolution', 'BERT & MUM Integration', 'Core Web Vitals Progression', 'Predictive Algorithm Analysis'],
      link: '/education/algorithm-adaptation',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Code className="w-8 h-8" />,
      category: 'Technical Solutions',
      title: 'Custom SEO Solutions vs Cookie-Cutter Platforms: Technical Analysis',
      description: 'Detailed technical comparison revealing why enterprise SEO requires custom script integration, proprietary monitoring systems, and adaptive optimization frameworks that cookie-cutter solutions cannot provide.',
      complexity: 'Advanced',
      readTime: '18 min',
      topics: ['Script Integration Advantages', 'Real-Time Monitoring Systems', 'Custom Algorithm Tracking', 'Platform Limitation Analysis'],
      link: '/education/custom-vs-cookie-cutter',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Target className="w-8 h-8" />,
      category: 'Future Strategy',
      title: 'Future-Proofing SEO: Advanced Prediction & Adaptation Methodologies',
      description: 'Learn the sophisticated prediction models and adaptation methodologies required to maintain search visibility through rapid AI advancement. Discover the technical infrastructure needed for sustainable SEO performance.',
      complexity: 'Expert',
      readTime: '25 min',
      topics: ['Predictive SEO Modeling', 'Infrastructure Requirements', 'Adaptation Frameworks', 'Performance Sustainability'],
      link: '/education/future-proofing-seo',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    {
      icon: <Search className="w-6 h-6" />,
      value: '73%',
      label: 'Algorithm Changes Miss Traditional SEO'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      value: '89%',
      label: 'AI Queries Require Custom Optimization'
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      value: '94%',
      label: 'Cookie-Cutter Platforms Fail Algorithm Updates'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: '156%',
      label: 'Performance Gap with Custom Solutions'
    }
  ];

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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-full mb-6">
              <BookOpen className="w-5 h-5 text-white" />
              <span className="text-white font-semibold text-sm">Advanced SEO Education</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              Master AI Search Optimization
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Deep-dive into advanced SEO strategies for the AI era. Learn why algorithm adaptation requires custom solutions, how LLM evolution impacts search optimization, and the technical frameworks needed to maintain competitive search visibility in an increasingly complex digital landscape.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm"
                >
                  <div className="text-white mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                The Complexity of Modern SEO Requires Advanced Expertise
              </h2>
              <div className="prose prose-lg prose-brand max-w-none">
                <p className="text-brand-dark/70 leading-relaxed">
                  Search engine optimization has evolved far beyond basic keyword placement and meta tags. Today's SEO landscape demands sophisticated understanding of machine learning algorithms, natural language processing, and real-time adaptation capabilities that most businesses—and their current SEO providers—are unprepared to handle.
                </p>
                <p className="text-brand-dark/70 leading-relaxed">
                  The guides below reveal the technical depth required for sustainable search performance in the AI era. While we provide the foundational knowledge, implementing these advanced strategies requires specialized infrastructure, custom development capabilities, and continuous adaptation resources that go far beyond what standard SEO platforms can provide.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8 lg:p-10 bg-gradient-to-br from-brand-light/30 to-white border-l-4 border-brand-primary"
            >
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-8 h-8 text-brand-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                    Why This Education Matters
                  </h3>
                  <p className="text-brand-dark/70 leading-relaxed">
                    Understanding these concepts helps you evaluate whether your current SEO approach can adapt to rapid changes in search technology. Most businesses discover that the level of technical sophistication required for effective AI-era SEO optimization necessitates partnering with specialists who possess the custom development capabilities, proprietary monitoring systems, and advanced algorithm adaptation frameworks outlined in these guides.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Guides */}
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
              Advanced SEO Education Guides
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Comprehensive technical guides that reveal the complexity and sophistication required for sustainable search optimization in the AI era.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 lg:p-10 hover:shadow-glass-lg transition-all duration-300 group"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Guide Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${guide.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {guide.icon}
                        </div>
                      </div>
                      <div>
                        <p className="text-brand-primary font-semibold text-sm mb-1">
                          {guide.category}
                        </p>
                        <h3 className="text-xl lg:text-2xl font-heading font-bold text-brand-dark group-hover:text-brand-primary transition-colors duration-300">
                          {guide.title}
                        </h3>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center space-x-1 text-brand-dark/60 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{guide.readTime}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-brand-dark/60 text-sm">
                            <Target className="w-4 h-4" />
                            <span>{guide.complexity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-brand-dark/70 mb-6 leading-relaxed">
                      {guide.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {guide.topics.map((topic, i) => (
                        <span key={i} className="px-3 py-1 bg-brand-light/50 text-brand-dark/70 text-sm rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={guide.link}
                      className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-primary/80 font-semibold transition-colors duration-200 group-hover:translate-x-2 transition-transform"
                    >
                      <span>Read Complete Guide</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>

                  {/* Complexity Indicator */}
                  <div className="bg-brand-light/30 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-brand-dark mb-4 flex items-center">
                      <Users className="w-5 h-5 text-brand-primary mr-2" />
                      Technical Requirements
                    </h4>
                    <div className="space-y-3">
                      <div className="text-sm text-brand-dark/70">
                        <strong>Infrastructure:</strong> Custom monitoring systems, real-time data processing
                      </div>
                      <div className="text-sm text-brand-dark/70">
                        <strong>Development:</strong> Proprietary script integration, algorithm adaptation frameworks
                      </div>
                      <div className="text-sm text-brand-dark/70">
                        <strong>Expertise:</strong> Machine learning, predictive modeling, search algorithm analysis
                      </div>
                      <div className="text-sm text-brand-dark/70">
                        <strong>Resources:</strong> Continuous monitoring, rapid adaptation capabilities
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              Ready to Implement Advanced SEO Strategies?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              While understanding these concepts is valuable, implementing them requires specialized infrastructure, custom development capabilities, and continuous adaptation resources. Discover how our proprietary systems and advanced frameworks can handle the technical complexity for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/free-audit"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-brand-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
                >
                  <Search className="w-5 h-5" />
                  <span>Analyze Your Current SEO Readiness</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-brand-primary transition-all duration-300"
                >
                  <Brain className="w-5 h-5" />
                  <span>Discuss Advanced Implementation</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}
