'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, Award, ArrowRight, Building2, ShoppingCart, MapPin } from 'lucide-react';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      icon: <Building2 className="w-8 h-8" />,
      industry: 'Local Business',
      title: 'Multi-Location Service Provider',
      description: 'Helped a growing service business improve their local search visibility across multiple locations.',
      challenge: 'Poor local search rankings and inconsistent online presence',
      solution: 'Custom Google Business Profile optimization and local SEO strategy',
      results: [
        'Improved local search visibility',
        'Enhanced online reputation management',
        'Streamlined multi-location presence'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      industry: 'E-commerce',
      title: 'Online Retail Growth',
      description: 'Optimized product visibility and search performance for an e-commerce business.',
      challenge: 'Low product visibility in search results and poor conversion rates',
      solution: 'Technical SEO audit, product optimization, and schema markup implementation',
      results: [
        'Enhanced product search visibility',
        'Improved site technical performance',
        'Better user experience and navigation'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      industry: 'Professional Services',
      title: 'Regional Service Expansion',
      description: 'Supported business growth into new regional markets through strategic SEO.',
      challenge: 'Limited visibility in target regional markets',
      solution: 'Regional SEO strategy and local content optimization',
      results: [
        'Successful market expansion',
        'Increased regional search presence',
        'Higher quality lead generation'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Professional Growth',
      description: 'Consistent improvement in search visibility and online presence'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Client Satisfaction',
      description: 'Dedicated service and long-term client relationships'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Strategic Focus',
      description: 'Customized approaches for each business and industry'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Quality Service',
      description: 'Professional implementation and ongoing support'
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
              Case Studies
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Real examples of how our custom solutions and strategic approach have helped businesses improve their digital presence.
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
              Our Approach
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Professional service focused on quality implementation and long-term success.
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
              Examples of how we've helped businesses across different industries achieve their digital marketing goals.
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how our custom solutions can help your business achieve its digital marketing goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/free-audit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-brand-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                <span>Get Free Audit</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-brand-primary transition-all duration-300"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
