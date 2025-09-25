'use client';

import LocationHeroSection from '@/components/sections/LocationHeroSection';
import AIServicesSection from '@/components/sections/AIServicesSection';
import CTASection from '@/components/sections/CTASection';
import PageSpecificSchema from '@/components/seo/PageSpecificSchema';
import { motion } from 'framer-motion';
import { MapPin, Users, Building, TrendingUp, Target, Star, CheckCircle, Zap, Search, Globe } from 'lucide-react';
import Link from 'next/link';

const edisonServices = [
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Edison Local SEO',
    description: 'Target Edison customers with geo-specific SEO strategies that put your business at the top of local search results.'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Multi-Location SEO',
    description: 'Perfect for Edison businesses with multiple locations across Middlesex County and Central New Jersey.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Rapid Results SEO',
    description: 'Get fast SEO results for competitive Edison markets with our AI-enhanced optimization strategies.'
  }
];

const edisonStats = [
  { label: 'Population', value: '107,588', icon: <Users className="w-6 h-6" /> },
  { label: 'Median Income', value: '$91,734', icon: <TrendingUp className="w-6 h-6" /> },
  { label: 'Local Businesses', value: '4,200+', icon: <Building className="w-6 h-6" /> },
  { label: 'Search Volume Growth', value: '285%', icon: <Star className="w-6 h-6" /> }
];

const edisonFeatures = [
  'Edison market expertise since 2020',
  'Proven results for 75+ Edison businesses',
  'Route 1 & Route 27 corridor specialists',
  'Multilingual SEO for diverse Edison community',
  'E-commerce optimization for Edison retailers',
  'Fast turnaround for competitive markets'
];

export default function EdisonPage() {
  return (
    <>
      <PageSpecificSchema 
        pageType="location"
        pageTitle="SEO Services Edison NJ | Digital Marketing & Local SEO Experts"
        pageDescription="Professional SEO services in Edison, NJ. Get your business found on Google with expert local SEO, website optimization, and digital marketing strategies."
        locationName="Edison"
        locationZipCode="08817"
        locationCounty="Middlesex County"
      />
      
      <div className="pt-20">
        <LocationHeroSection
          cityName="Edison"
          stateName="New Jersey"
          county="Middlesex County"
          population="107,588"
          description="Dominate Edison's competitive market with expert SEO strategies. From Route 1 to Oak Tree Road, we help businesses across Edison get found by local customers."
          zipCodes={['08817', '08818', '08820', '08837']}
          isMainLocation={false}
        />

        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-6"
              >
                Edison Business Market Overview
              </motion.h2>
              <p className="text-xl text-brand-dark/80 max-w-3xl mx-auto">
                Edison's diverse business landscape requires specialized SEO strategies. Here's how we help Edison businesses succeed online.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {edisonStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 text-center hover:shadow-glow transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-brand-primary">{stat.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-2">{stat.value}</h3>
                  <p className="text-brand-dark/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-8 lg:p-12 text-center"
            >
              <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">
                Why Edison Businesses Choose True Rank Digital
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {edisonFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 text-left">
                    <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    <span className="text-brand-dark/80">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-6"
              >
                Specialized SEO Services for Edison
              </motion.h2>
              <p className="text-xl text-brand-dark/80 max-w-3xl mx-auto">
                Edison's competitive business environment demands advanced SEO strategies that deliver fast, measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {edisonServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 hover:shadow-glow transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-6">
                    <div className="text-brand-primary">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">
                    {service.title}
                  </h3>
                  <p className="text-brand-dark/80 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <AIServicesSection />

        <section className="py-20 bg-brand-dark/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-6">
                Ready to Dominate Edison Search Results?
              </h2>
              
              <p className="text-xl text-brand-dark/80 mb-8">
                Join the 75+ Edison businesses that have increased their online visibility with True Rank Digital. 
                Get your free local SEO consultation today.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/free-audit"
                    className="inline-flex items-center space-x-3 px-8 py-4 bg-brand-primary text-white font-semibold text-lg rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:bg-brand-primary/90"
                  >
                    <span>Get Your Free SEO Audit</span>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-3 px-8 py-4 bg-white/80 text-brand-dark font-semibold text-lg rounded-full border border-brand-primary/20 hover:bg-white transition-all duration-300"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>Schedule Consultation</span>
                  </Link>
                </motion.div>
              </div>
              
              <p className="text-brand-dark/60 mt-6">
                Call us now: <a href="tel:+17324750139" className="text-brand-primary font-semibold hover:text-brand-primary/80">(732) 475-0139</a>
              </p>
            </motion.div>
          </div>
        </section>

        <CTASection />
      </div>
    </>
  );
}
