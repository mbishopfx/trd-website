'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building, Globe, Users, Zap, CheckCircle, Star } from 'lucide-react';

export default function ContactInfoSection() {
  const businessDetails = [
    {
      icon: <Building className="w-8 h-8" />,
      title: 'True Rank Digital',
      subtitle: 'Enterprise Digital Marketing Solutions',
      color: 'from-brand-primary to-brand-secondary'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      subtitle: 'Serving clients worldwide with 24/7 support',
      color: 'from-brand-secondary to-brand-accent'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Team',
      subtitle: '15+ years combined experience',
      color: 'from-brand-accent to-purple-600'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast Results',
      subtitle: 'See improvements in 30-60 days',
      color: 'from-yellow-500 to-brand-primary'
    }
  ];

  const serviceHighlights = [
    'Free comprehensive SEO audit',
    'No long-term contracts required',
    'Responsive customer support available',
    'Dedicated to serving our clients',
    'AI-enhanced optimization technology',
    'Transparent monthly reporting'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Business Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-8">
              Why Choose True Rank Digital?
            </h2>

            {/* Business Details Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {businessDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 text-center hover:shadow-glass-lg transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${detail.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {detail.icon}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-brand-dark mb-2">{detail.title}</h3>
                  <p className="text-brand-dark/70 text-sm">{detail.subtitle}</p>
                </motion.div>
              ))}
            </div>

            {/* Service Highlights */}
            <div className="glass-card p-6">
              <h3 className="font-heading font-bold text-brand-dark mb-4 flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                What You Get
              </h3>
              <div className="space-y-3">
                {serviceHighlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-brand-dark/80">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-8">
              Contact Information
            </h2>

            {/* Primary Contact Card */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6">
                Get Your Free Consultation
              </h3>
              
              <div className="space-y-6">
                {/* Primary Phone */}
                <div className="flex items-center space-x-4 p-4 bg-brand-primary/5 rounded-xl hover:bg-brand-primary/10 transition-colors duration-200">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark">Primary Phone</div>
                    <a href="tel:+17324750139" className="text-brand-primary font-bold text-lg hover:text-brand-primary/80 transition-colors">
                      (732) 475-0139
                    </a>
                  </div>
                </div>

                {/* Emergency/Secondary Phone */}
                <div className="flex items-center space-x-4 p-4 bg-brand-secondary/5 rounded-xl hover:bg-brand-secondary/10 transition-colors duration-200">
                  <div className="w-12 h-12 bg-brand-secondary/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark">Emergency Support</div>
                    <a href="tel:+17322156319" className="text-brand-secondary font-bold text-lg hover:text-brand-secondary/80 transition-colors">
                      (732) 215-6319
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4 p-4 bg-brand-accent/5 rounded-xl hover:bg-brand-accent/10 transition-colors duration-200">
                  <div className="w-12 h-12 bg-brand-accent/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark">Email Us</div>
                    <a href="mailto:jon@truerankdigital.com" className="text-brand-accent font-bold text-lg hover:text-brand-accent/80 transition-colors">
                      jon@truerankdigital.com
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark">Business Hours</div>
                    <div className="text-green-600 font-bold">24/7 Available</div>
                    <div className="text-sm text-brand-dark/60">Digital services and support available around the clock</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                Our Location
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark mb-2">East Brunswick, NJ 08816</div>
                    <div className="text-brand-dark/70 text-sm leading-relaxed mb-3">
                      Located in the heart of the NY/NJ metropolitan area, serving clients worldwide with 
                      enterprise-level digital marketing solutions.
                    </div>
                    <a
                      href="https://www.google.com/maps?cid=4662204553635539796"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-primary text-white rounded-full hover:bg-brand-primary/90 transition-all text-sm font-semibold"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <span>View on Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
