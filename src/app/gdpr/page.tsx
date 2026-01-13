'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, UserCheck, FileText, Mail } from 'lucide-react';

export default function GDPRPage() {
  const gdprPrinciples = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Data Protection',
      description: 'We implement appropriate technical and organizational measures to protect personal data',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Data Security',
      description: 'Personal data is secured using industry-standard encryption and access controls',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Transparency',
      description: 'We provide clear information about how we collect, use, and protect personal data',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: 'Individual Rights',
      description: 'We respect and facilitate the exercise of individual data protection rights',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const dataRights = [
    'Right to be informed about data collection and use',
    'Right of access to your personal data',
    'Right to rectification of inaccurate data',
    'Right to erasure (right to be forgotten)',
    'Right to restrict processing',
    'Right to data portability',
    'Right to object to processing',
    'Rights related to automated decision making'
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
              GDPR Compliance
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Our commitment to protecting your personal data and respecting your privacy rights
            </p>
          </motion.div>
        </div>
      </section>

      {/* GDPR Principles */}
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
              Our Data Protection Principles
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
              We are committed to protecting your personal data in accordance with GDPR requirements and best practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gdprPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 glass-card hover:shadow-glass transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${principle.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <div className="text-white">
                    {principle.icon}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                  {principle.title}
                </h3>
                <p className="text-brand-dark/70 text-sm">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="py-20 bg-brand-light/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">
              Data Collection and Use
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-brand-dark mb-3">What Data We Collect</h3>
                <ul className="space-y-2 text-brand-dark/70">
                  <li>• Contact information (name, email, phone number)</li>
                  <li>• Business information for service delivery</li>
                  <li>• Website analytics and performance data</li>
                  <li>• Communication records for service support</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-brand-dark mb-3">How We Use Data</h3>
                <ul className="space-y-2 text-brand-dark/70">
                  <li>• To provide and improve our digital marketing services</li>
                  <li>• To communicate about services and support</li>
                  <li>• To analyze and improve website performance</li>
                  <li>• To comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-brand-dark mb-3">Legal Basis for Processing</h3>
                <ul className="space-y-2 text-brand-dark/70">
                  <li>• Contract performance and service delivery</li>
                  <li>• Legitimate business interests</li>
                  <li>• Legal compliance requirements</li>
                  <li>• Consent where applicable</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">
              Your Data Protection Rights
            </h2>
            <p className="text-xl text-brand-dark/70">
              Under GDPR, you have several rights regarding your personal data
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <ul className="space-y-4">
              {dataRights.map((right, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center text-brand-dark/70"
                >
                  <UserCheck className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" />
                  {right}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Contact for Rights */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              Exercise Your Rights
            </h2>
            <p className="text-xl text-white/90 mb-8">
              To exercise any of your data protection rights or ask questions about our data practices, contact us:
            </p>
            
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>jon@truerankdigital.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <FileText className="w-5 h-5" />
                  <span>Include "GDPR Request" in your subject line</span>
                </div>
              </div>
              <p className="text-white/80 text-sm mt-4">
                We will respond to your request within 30 days as required by GDPR
              </p>
            </div>

            <div className="mt-8 text-sm text-white/70">
              <p>True Rank Digital LLC</p>
              <p>288 Summerhill Rd, suite 3, East Brunswick, NJ 08816</p>
              <p>Last updated: January 2026</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
