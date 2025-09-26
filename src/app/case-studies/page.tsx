'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, Award, ArrowRight, Building2, ShoppingCart, MapPin } from 'lucide-react';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      icon: <Building2 className="w-8 h-8" />,
      industry: 'Multi-Location HVAC Company',
      title: 'Regional HVAC Company CEO Success Story',
      description: 'A regional HVAC company CEO approached us with 12 locations struggling to compete against national chains in local search results. Our proprietary SEO dashboard platform and grid map ranking analysis transformed their digital marketing strategy.',
      challenge: 'Despite having established local presence, their Google Maps rankings averaged position 8-15 across all locations. Google knowledge graph information was inconsistent, and their competitors dominated "emergency HVAC" and "HVAC repair near me" searches. Local search engine optimization was fragmented with no centralized tracking system.',
      solution: 'Implemented our comprehensive local search engine optimization process: Provided dashboard platform access for real-time grid map ranking verification across all 12 locations. Deployed automated Google knowledge graph consistency monitoring. Used our keyword search volume analysis tools to identify high-converting local search terms. Applied algorithm-proof SEO tactics with custom script integration for enhanced performance tracking.',
      results: [
        'Average Google Maps ranking improved from position 12 to position 2 across all locations within 90 days',
        'Emergency service calls increased 340% during peak summer season',
        'Local search engine result page positioning secured top 3 for 89% of target keywords',
        'Google knowledge graph consistency achieved 100% accuracy across all locations',
        'Dashboard platform showed 67% increase in "near me" search visibility',
        'Customer acquisition cost decreased by 45% through improved organic search traffic generation'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      industry: 'E-commerce Automotive Parts',
      title: 'E-commerce Marketing Director Growth Strategy',
      description: 'An automotive parts e-commerce Marketing Director needed to compete against Amazon and major retailers. Our proprietary digital marketing platform and competitor analysis tools delivered exceptional results through proven Google optimization tactics.',
      challenge: 'Product pages buried on page 5+ of search results despite quality inventory. Amazon dominated 95% of automotive part searches. No visibility into competitor pricing strategies or search positioning. Website technical SEO issues caused poor crawling and indexing. Local mechanics couldn\'t find specialty parts through organic search.',
      solution: 'Deployed our comprehensive e-commerce optimization strategy: Granted access to our SEO dashboard platform with advanced competitor intelligence monitoring. Implemented technical SEO fixes using our algorithm-proof strategies. Applied semantic search optimization for automotive part categories. Used our keyword research tools to identify long-tail opportunities. Integrated custom scripts for enhanced product page optimization and real-time ranking tracking.',
      results: [
        'Organic search traffic generation increased 890% in first 6 months',
        'Product page rankings improved from average position 45 to position 4 for target keywords',
        'Competitor analysis platform identified 127 untapped keyword opportunities',
        'Local mechanic searches increased 450% through enhanced local SEO integration',
        'Dashboard platform tracked 67% improvement in search engine result page positioning',
        'Revenue from organic search grew from $12,000 to $156,000 monthly'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      industry: 'Professional Legal Services',
      title: 'Law Firm Managing Partner Expansion Success',
      description: 'A law firm Managing Partner wanted to expand from 2 counties to 8 counties across New Jersey. Our local search engine optimization expertise and proprietary dashboard platform enabled systematic geographic growth.',
      challenge: 'Strong presence in home counties but zero visibility in target expansion areas. Competing against established firms with 20+ year local presence. No system to track local search positioning across multiple markets. Google Business Profile management was inconsistent across locations. Local legal keywords dominated by competitor law firms.',
      solution: 'Executed our proven local expansion strategy: Provided comprehensive dashboard platform access for multi-market grid map ranking analysis. Implemented Google knowledge graph consistency automation across all target counties. Used our competitor intelligence monitoring to identify market gaps. Applied local search engine optimization tactics specifically designed for professional services. Deployed custom script integration for enhanced local authority building and tracking.',
      results: [
        'Successfully achieved top 3 local search positioning in 6 out of 8 target counties within 4 months',
        'Grid map ranking verification showed 78% improvement in "lawyer near me" searches',
        'New client inquiries from target markets increased 520% year-over-year',
        'Google knowledge graph consistency reached 100% across all locations',
        'Local keyword search volume analysis identified $280K in additional revenue opportunities',
        'Dashboard platform tracking confirmed 85% increase in local search engine result page visibility'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Dashboard Platform Results',
      description: 'Grid map ranking analysis and keyword research tools deliver measurable local search improvements'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Algorithm-Proof Strategies',
      description: 'Proven Google optimization tactics that adapt to search algorithm changes automatically'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Custom Script Integration',
      description: 'In-house technology solutions and solution building frameworks for competitive advantage'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Google Knowledge Graph',
      description: 'Automated consistency monitoring and local search engine optimization excellence'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              Digital Marketing Success Stories & Local SEO Case Studies
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Discover how our proprietary SEO dashboard platform, proven Google optimization tactics, and algorithm-proof digital marketing strategies have delivered exceptional results. These real client success stories showcase our grid map ranking analysis, competitor intelligence monitoring, and automated Google knowledge graph consistency tools helping businesses achieve faster local search engine optimization and improved search engine result page positioning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
              Our Proven Digital Marketing Process
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Every client receives access to our proprietary SEO dashboard platform and benefits from our proven Google optimization tactics. Our algorithm-proof strategies combine professional local search engine optimization with advanced competitor intelligence monitoring for sustainable long-term growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 glass-card hover:shadow-glass transition-all duration-300"
              >
                <div className="text-brand-primary mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                  {stat.title}
                </h3>
                <p className="text-brand-dark/70 text-sm">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
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
              Success Stories
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Examples of how we&apos;ve helped businesses across different industries achieve their digital marketing goals.
            </p>
          </motion.div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 hover:shadow-glass-lg transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Study Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${study.color} rounded-xl flex items-center justify-center`}>
                        <div className="text-white">
                          {study.icon}
                        </div>
                      </div>
                      <div>
                        <p className="text-brand-primary font-semibold text-sm">
                          {study.industry}
                        </p>
                        <h3 className="text-2xl font-heading font-bold text-brand-dark">
                          {study.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-brand-dark/70 mb-6 leading-relaxed">
                      {study.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-brand-dark mb-3">Challenge</h4>
                        <p className="text-brand-dark/70 text-sm">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-brand-dark mb-3">Solution</h4>
                        <p className="text-brand-dark/70 text-sm">
                          {study.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-brand-light/30 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-brand-dark mb-4 flex items-center">
                      <Award className="w-5 h-5 text-brand-primary mr-2" />
                      Key Outcomes
                    </h4>
                    <ul className="space-y-3">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-center text-brand-dark/70 text-sm">
                          <ArrowRight className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
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
              Ready to Access Our Proprietary SEO Dashboard Platform?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Experience the same proven Google optimization tactics and algorithm-proof digital marketing strategies that delivered these exceptional results. Get access to our exclusive client dashboard featuring grid map ranking analysis, competitor intelligence monitoring, and automated Google knowledge graph consistency tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/free-audit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-brand-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                <span>Get Free Dashboard Platform Demo</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-brand-primary transition-all duration-300"
              >
                <span>Start Your Success Story</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
