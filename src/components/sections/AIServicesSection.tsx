'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Settings, 
  CheckCircle, 
  Bot, 
  Zap,
  Brain,
  Target,
  Cpu
} from 'lucide-react';

interface AIServiceFeature {
  icon: React.ReactNode;
  text: string;
}

interface AIService {
  title: string;
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
  iconBg: string;
  description: string;
  features: AIServiceFeature[];
}

const aiServices: AIService[] = [
  {
    title: 'Proprietary SEO Dashboard Platform',
    badge: 'Custom Software Solution',
    badgeColor: 'bg-brand-accent',
    icon: <Sparkles className="w-8 h-8 text-white" />,
    iconBg: 'bg-gradient-to-br from-brand-accent to-purple-600',
    description: 'Access our exclusive client dashboard platform featuring advanced grid map ranking verification, comprehensive keyword search volume analysis tools, and real-time competitor intelligence monitoring. Our proprietary software automatically tracks Google knowledge graph consistency and website optimization metrics, ensuring your local search engine optimization maintains peak performance across all digital marketing channels.',
    features: [
      {
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        text: 'Grid map ranking analysis dashboard'
      },
      {
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        text: 'Keyword search volume research tools'
      },
      {
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        text: 'Competitor analysis intelligence platform'
      },
      {
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        text: 'Google knowledge graph consistency monitoring'
      },
      {
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        text: 'Website optimization tracking automation'
      }
    ]
  },
  {
    title: 'Custom Algorithm Adaptation Scripts',
    badge: 'In-House Technology Framework',
    badgeColor: 'bg-brand-primary',
    icon: <Settings className="w-8 h-8 text-white" />,
    iconBg: 'bg-gradient-to-br from-brand-primary to-blue-600',
    description: 'Our expert-developed custom scripts and solution building frameworks keep you ahead of Google algorithm changes with proven digital marketing tactics mastered by SEO professionals. These proprietary automation tools work 24/7 to maintain your search engine result page positioning, especially when combined with our custom web builds that allow deeper search algorithm manipulation and advanced local search engine optimization strategies.',
    features: [
      {
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        text: 'Algorithm-proof SEO automation scripts'
      },
      {
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        text: 'Custom web build optimization advantages'
      },
      {
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        text: 'Professional Google tactics implementation'
      },
      {
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        text: 'Advanced local search positioning tools'
      },
      {
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        text: 'Solution framework technology advantage'
      }
    ]
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function AIServicesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-light/30 to-white"></div>
      
      {/* Animated Tech Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L90 50 L50 90 L10 50 Z' fill='none' stroke='%234F7FFF' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='3' fill='%234F7FFF'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - GEO Optimized Question-Based H2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-primary/10 rounded-full mb-4">
            <Bot className="w-5 h-5 text-brand-primary" />
            <span className="text-brand-primary font-semibold text-sm">Powered by AI Technology</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
            How <strong className="text-brand-primary">True Rank Digital's</strong> Proprietary SEO Dashboard Platform Works
          </h2>
          
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
            <strong>True Rank Digital</strong> transforms your organic search traffic generation with our exclusive client dashboard platform and in-house technology solutions. Our proven <strong>Google optimization</strong> tactics and <strong>algorithm-proof digital marketing strategies</strong> deliver faster search engine result page positioning through advanced <strong>local search engine optimization</strong> techniques mastered by industry professionals.
          </p>
        </motion.div>

        {/* AI Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {aiServices.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-card p-8 lg:p-10 h-full hover:shadow-glass-lg transition-all duration-300 relative overflow-hidden">
                
                {/* Background Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  {/* Service Badge */}
                  <div className={`inline-flex items-center px-4 py-2 ${service.badgeColor} text-white text-sm font-semibold rounded-full mb-6`}>
                    {service.badge}
                  </div>

                  {/* Service Icon */}
                  <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>

                  {/* Service Title - GEO Optimized H3 */}
                  <h3 className="text-2xl lg:text-3xl font-heading font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors duration-300">
                    <strong className="text-brand-primary">True Rank Digital's</strong> {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-brand-dark/70 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.2) + (featureIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        {feature.icon}
                        <span className="text-brand-dark/80 font-medium">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { icon: <Brain className="w-6 h-6" />, value: 'Custom', label: 'In-House Tech' },
            { icon: <Zap className="w-6 h-6" />, value: 'Schema', label: 'Markup Focus' },
            { icon: <Target className="w-6 h-6" />, value: 'LLM.txt', label: 'Creation' },
            { icon: <Cpu className="w-6 h-6" />, value: 'Solutions', label: 'We Build' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 glass-card hover:shadow-glass transition-all duration-300"
            >
              <div className="text-brand-primary mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-brand-dark mb-1">{stat.value}</div>
              <div className="text-brand-dark/60 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Platform Access Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8 lg:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-heading font-bold text-brand-dark mb-4">
              Why <strong className="text-brand-primary">True Rank Digital</strong> Clients Get Exclusive Platform Access
            </h3>
            <p className="text-lg text-brand-dark/70 max-w-4xl mx-auto leading-relaxed">
              Every <strong>True Rank Digital</strong> client receives access to our exclusive <strong>digital marketing platform</strong> featuring <strong>grid map ranking analysis</strong>, keyword search volume research tools, and <strong>competitor intelligence monitoring</strong>. While our dashboard platform works with any website, clients who choose our custom web builds unlock advanced algorithm manipulation capabilities and deeper <strong>local search engine optimization</strong> control through our proprietary script integration.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/free-audit"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-primary/90 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bot className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Access Free SEO Platform Demo</span>
            </motion.a>
            <motion.a
              href="/learn-aio"
              className="inline-flex items-center space-x-2 px-8 py-4 glass-button bg-brand-primary/10 hover:bg-brand-primary hover:text-white text-brand-primary font-semibold rounded-full transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Target className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Learn About Custom Web Builds</span>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
