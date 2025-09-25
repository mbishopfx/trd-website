'use client';

import LocationHeroSection from '@/components/sections/LocationHeroSection';
import AIServicesSection from '@/components/sections/AIServicesSection';
import CTASection from '@/components/sections/CTASection';
import PageSpecificSchema from '@/components/seo/PageSpecificSchema';
import { motion } from 'framer-motion';
import { MapPin, Users, Building, TrendingUp, Target, Star, CheckCircle, Heart, Store, HandHeart } from 'lucide-react';
import Link from 'next/link';

const southRiverServices = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Community-First SEO',
    description: 'Build strong local connections with SEO strategies that emphasize South River\'s tight-knit community values.'
  },
  {
    icon: <Store className="w-8 h-8" />,
    title: 'Small Business SEO',
    description: 'Affordable, effective SEO solutions designed specifically for South River\'s small business community.'
  },
  {
    icon: <HandHeart className="w-8 h-8" />,
    title: 'Personal Service SEO',
    description: 'Highlight the personal touch that makes South River businesses special with customer-focused SEO strategies.'
  }
];

const southRiverStats = [
  { label: 'Population', value: '16,148', icon: <Users className="w-6 h-6" /> },
  { label: 'Median Income', value: '$75,123', icon: <TrendingUp className="w-6 h-6" /> },
  { label: 'Small Businesses', value: '450+', icon: <Building className="w-6 h-6" /> },
  { label: 'Local Engagement', value: '425%', icon: <Heart className="w-6 h-6" /> }
];

const southRiverFeatures = [
  'Small town business expertise',
  'Community-focused SEO strategies',
  'Personal service optimization',
  'Local event marketing integration',
  'Neighborhood targeting techniques',
  'Small budget, big results approach'
];

export default function SouthRiverPage() {
  return (
    <>
      <PageSpecificSchema 
        pageType="location"
        pageTitle="SEO Services South River NJ | Small Business Local SEO Experts"
        pageDescription="Professional SEO services in South River, NJ. Specialized local SEO for small businesses in this close-knit Middlesex County community."
        locationName="South River"
        locationZipCode="08882"
        locationCounty="Middlesex County"
      />
      
      <div className="pt-20">
        <LocationHeroSection
          cityName="South River"
          stateName="New Jersey"
          county="Middlesex County"
          population="16,148"
          description="Help your South River business thrive with personal, community-focused SEO strategies that connect you with local customers who value quality service."
          zipCodes={['08882']}
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
                South River Community Advantage
              </motion.h2>
              <p className="text-xl text-brand-dark/80 max-w-3xl mx-auto">
                A close-knit community where personal relationships and quality service matter most. Perfect for businesses that value community connection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {southRiverStats.map((stat, index) => (
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
                Our South River Small Business Focus
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {southRiverFeatures.map((feature, index) => (
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
                Community-Focused SEO for South River
              </motion.h2>
              <p className="text-xl text-brand-dark/80 max-w-3xl mx-auto">
                Personal service meets digital excellence. We create SEO strategies that reflect South River's community values and business culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {southRiverServices.map((service, index) => (
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
                Grow Your South River Business Community
              </h2>
              
              <p className="text-xl text-brand-dark/80 mb-8">
                Join South River businesses that have strengthened their community presence with our personal, results-driven SEO approach.
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
