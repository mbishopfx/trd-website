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
    title: 'AI-Enhanced Semantic Optimization',
    badge: 'Advanced Optimization',
    badgeColor: 'bg-brand-accent',
    icon: <Sparkles className="w-8 h-8 text-white" />,
    iconBg: 'bg-gradient-to-br from-brand-accent to-purple-600',
    description: 'Our proprietary AI engine creates semantic contextual data and processes it through our expert-built indexing API, ensuring optimal readability and scraping by Google\'s algorithms.',
    features: [
      {
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        text: 'Semantic contextual data generation'
      },
      {
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        text: 'Proprietary indexing API processing'
      },
      {
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        text: 'Google algorithm optimization'
      },
      {
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        text: 'AI-enhanced content structuring'
      },
      {
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        text: 'Intelligent markup generation'
      }
    ]
  },
  {
    title: 'Expert-Built Script Automation',
    badge: 'Expert Automation',
    badgeColor: 'bg-brand-primary',
    icon: <Settings className="w-8 h-8 text-white" />,
    iconBg: 'bg-gradient-to-br from-brand-primary to-blue-600',
    description: 'Our proprietary scripts leverage AI to enhance and create semantic contextual data, running 24/7 through our specialized indexing API to maintain Google\'s peak readability standards.',
    features: [
      {
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        text: 'Expert-built automation scripts'
      },
      {
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        text: 'AI-enhanced data processing'
      },
      {
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        text: 'Proprietary indexing API integration'
      },
      {
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        text: 'Continuous Google optimization'
      },
      {
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        text: 'Fluid markup control'
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
        
        {/* Section Header */}
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
            Advanced AI-Powered Solutions
          </h2>
          
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
            Our cutting-edge artificial intelligence technology transforms how your business 
            appears in search results with unprecedented precision and automation.
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

                  {/* Service Title */}
                  <h3 className="text-2xl lg:text-3xl font-heading font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors duration-300">
                    {service.title}
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-brand-dark/70 mb-6">
            Ready to experience the power of AI-enhanced SEO optimization?
          </p>
          <motion.a
            href="/learn-aio"
            className="inline-flex items-center space-x-2 px-8 py-4 glass-button bg-brand-primary/10 hover:bg-brand-primary hover:text-white text-brand-primary font-semibold rounded-full transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bot className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Learn About Our AI Technology</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
