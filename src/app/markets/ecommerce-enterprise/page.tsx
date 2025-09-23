'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Globe, TrendingUp, Zap, Database, BarChart3, Settings, Target } from 'lucide-react';

export default function EcommerceEnterprisePage() {
  const ecommerceFeatures = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Product Catalog Optimization',
      description: 'Technical optimization for large product catalogs with thousands of SKUs',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Scaling Solutions',
      description: 'International SEO strategies for multi-region e-commerce expansion',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Conversion Rate Optimization',
      description: 'Data-driven optimization to improve sales and reduce cart abandonment',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Site Speed Optimization',
      description: 'Performance optimization for fast-loading enterprise e-commerce sites',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Schema Markup Implementation',
      description: 'Advanced structured data for product rich snippets and enhanced visibility',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics setup and custom reporting dashboards',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const enterpriseServices = [
    {
      title: 'Technical SEO Auditing',
      description: 'Comprehensive technical analysis of site architecture, crawlability, and performance issues'
    },
    {
      title: 'Large-Scale Content Strategy',
      description: 'Content optimization strategies for thousands of product and category pages'
    },
    {
      title: 'Enterprise Analytics Setup',
      description: 'Advanced Google Analytics, Search Console, and custom tracking implementation'
    },
    {
      title: 'Automated SEO Solutions',
      description: 'Custom automation tools for managing SEO at enterprise scale'
    },
    {
      title: 'International SEO',
      description: 'Multi-language and multi-region optimization strategies'
    },
    {
      title: 'Custom Development',
      description: 'Proprietary tools and integrations for enterprise-level optimization'
    }
  ];

  const enterpriseStats = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Enterprise Focus',
      description: 'Specialized solutions for high-volume e-commerce operations'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Custom Solutions',
      description: 'Tailored strategies for complex technical requirements'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Scalable Systems',
      description: 'Optimization solutions that grow with your business'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Data-Driven Results',
      description: 'Performance tracking and continuous optimization'
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
              E-commerce Enterprise Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Advanced SEO and digital marketing solutions for large-scale e-commerce operations. Scale your online business with enterprise-grade optimization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Stats */}
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
              Enterprise-Grade Approach
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Professional solutions designed for complex e-commerce operations and high-volume requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseStats.map((stat, index) => (
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

      {/* E-commerce Features */}
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
              E-commerce Optimization Features
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Comprehensive optimization solutions designed specifically for enterprise e-commerce operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommerceFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center hover:shadow-glass-lg transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                  {feature.title}
                </h3>
                <p className="text-brand-dark/70 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Services */}
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
              Enterprise Services
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Specialized services for large-scale e-commerce operations requiring advanced technical solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Settings className="w-6 h-6 text-brand-primary mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-heading font-bold text-brand-dark">
                    {service.title}
                  </h3>
                </div>
                <p className="text-brand-dark/70">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Challenges */}
      <section className="py-20 bg-brand-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">
                Enterprise E-commerce Challenges
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Database className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-2">Large Product Catalogs</h3>
                    <p className="text-brand-dark/70">Managing SEO for thousands or millions of product pages requires specialized strategies and automation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-2">Global Scaling</h3>
                    <p className="text-brand-dark/70">Expanding to international markets requires complex multi-language and multi-region optimization.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Zap className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-2">Performance at Scale</h3>
                    <p className="text-brand-dark/70">Maintaining fast load times and optimal user experience across large, complex e-commerce platforms.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6">
                Our Enterprise Solutions
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-brand-dark/70">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  Custom automation tools for large-scale optimization
                </li>
                <li className="flex items-center text-brand-dark/70">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  Advanced technical SEO for complex architectures
                </li>
                <li className="flex items-center text-brand-dark/70">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  International SEO and multi-region strategies
                </li>
                <li className="flex items-center text-brand-dark/70">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  Performance optimization for high-traffic sites
                </li>
                <li className="flex items-center text-brand-dark/70">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  Custom analytics and reporting solutions
                </li>
              </ul>
            </motion.div>
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
              Scale Your E-commerce Success
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how our enterprise solutions can optimize your large-scale e-commerce operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/free-audit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-brand-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                <span>Get Enterprise Audit</span>
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-brand-primary transition-all duration-300"
              >
                <span>Schedule Consultation</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
