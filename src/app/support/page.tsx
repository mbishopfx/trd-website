'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MessageCircle, HelpCircle, Settings, BookOpen, Users } from 'lucide-react';

export default function SupportPage() {
  const supportOptions = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone Support',
      description: 'Speak directly with our team for immediate assistance',
      contact: '(732) 475-0139',
      availability: '24/7 Available',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Support',
      description: 'Send us your questions and we\'ll respond promptly',
      contact: 'jon@truerankdigital.com',
      availability: 'Fast response',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Direct Consultation',
      description: 'Schedule a personalized consultation session',
      contact: 'Free 15-minute strategy call',
      availability: 'By appointment',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const faqItems = [
    {
      question: 'How quickly will I see SEO results?',
      answer: 'SEO is a long-term strategy and timelines vary by market, competition, and starting point. We focus on sustainable growth and provide consistent reporting so you can see progress over time.'
    },
    {
      question: 'Do you require long-term contracts?',
      answer: 'No, we don\'t require long-term contracts. We believe in earning your business through results and quality service, not binding agreements.'
    },
    {
      question: 'What makes your approach different?',
      answer: 'We build custom software solutions to find and fix problems that other agencies miss. Our in-house technology includes schema markup engineering and LLM.txt optimization.'
    },
    {
      question: 'Do you work with all business sizes?',
      answer: 'Yes, we work with businesses of all sizes, from local small businesses to large enterprises. Our strategies are customized for each client\'s specific needs and budget.'
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
              Support Center
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Get the help you need when you need it. Our team is here to support your digital marketing success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
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
              How We Can Help
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              Multiple ways to get the support and guidance you need for your digital marketing success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 text-center hover:shadow-glass-lg transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {option.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                  {option.title}
                </h3>
                <p className="text-brand-dark/70 mb-4">
                  {option.description}
                </p>
                <div className="space-y-2">
                  <p className="text-brand-primary font-semibold">
                    {option.contact}
                  </p>
                  <p className="text-brand-dark/60 text-sm">
                    {option.availability}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-brand-light/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-brand-dark/70">
              Common questions about our services and approach
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3 flex items-center">
                  <HelpCircle className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-brand-dark/70 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our team is ready to provide personalized support for your digital marketing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+17324750139"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-brand-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Call (732) 475-0139</span>
              </motion.a>
              <motion.a
                href="mailto:jon@truerankdigital.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-brand-primary transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
