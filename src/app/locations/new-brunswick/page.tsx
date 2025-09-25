'use client';

import LocationHeroSection from '@/components/sections/LocationHeroSection';
import AIServicesSection from '@/components/sections/AIServicesSection';
import CTASection from '@/components/sections/CTASection';
import PageSpecificSchema from '@/components/seo/PageSpecificSchema';
import { motion } from 'framer-motion';
import { MapPin, Users, Building, TrendingUp, Target, Star, CheckCircle, GraduationCap, MapIcon, Briefcase } from 'lucide-react';
import Link from 'next/link';

const newBrunswickServices = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'University Market SEO',
    description: 'Specialized strategies to reach Rutgers students, faculty, and families with targeted local search optimization.'
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: 'Downtown Business SEO',
    description: 'Help downtown New Brunswick businesses compete effectively with comprehensive local SEO strategies.'
  },
  {
    icon: <MapIcon className="w-8 h-8" />,
    title: 'Multi-Demographic Targeting',
    description: 'Reach New Brunswick\'s diverse population with culturally-aware SEO and multilingual optimization.'
  }
];

const newBrunswickStats = [
  { label: 'Population', value: '55,676', icon: <Users className="w-6 h-6" /> },
  { label: 'Rutgers Students', value: '50,000+', icon: <GraduationCap className="w-6 h-6" /> },
  { label: 'Local Businesses', value: '2,800+', icon: <Building className="w-6 h-6" /> },
  { label: 'Local Search Growth', value: '320%', icon: <Star className="w-6 h-6" /> }
];

const newBrunswickFeatures = [
  'Rutgers University area expertise',
  'Downtown New Brunswick specialists',
  'Student market targeting strategies',
  'Healthcare industry SEO (RWJ Medical)',
  'Cultural diversity optimization',
  'Transit-oriented business SEO'
];

export default function NewBrunswickPage() {
  return (
    <>
      <PageSpecificSchema 
        pageType="location"
        pageTitle="SEO Services New Brunswick NJ | University Area Digital Marketing"
        pageDescription="Professional SEO services in New Brunswick, NJ. Specialized strategies for businesses near Rutgers University and downtown New Brunswick area."
        locationName="New Brunswick"
        locationZipCode="08901"
        locationCounty="Middlesex County"
      />
      
      <div className="pt-20">
        <LocationHeroSection
          cityName="New Brunswick"
          stateName="New Jersey"
          county="Middlesex County"
          population="55,676"
          description="Reach New Brunswick's diverse community with expert SEO strategies. From Rutgers University to downtown businesses, we help you connect with your local audience."
          zipCodes={['08901', '08903', '08906']}
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
                New Brunswick Market Dynamics
              </motion.h2>
              <p className="text-xl text-brand-dark/80 max-w-3xl mx-auto">
                Home to Rutgers University and a thriving healthcare sector, New Brunswick offers unique opportunities for local businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {newBrunswickStats.map((stat, index) => (
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
                New Brunswick SEO Specializations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {newBrunswickFeatures.map((feature, index) => (
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
                SEO Services for New Brunswick Businesses
              </motion.h2>
              <p className="text-xl text-brand-dark/80 max-w-3xl mx-auto">
                From university-focused businesses to healthcare services, we create SEO strategies that work for New Brunswick's unique market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newBrunswickServices.map((service, index) => (
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
                Dominate New Brunswick's Competitive Market
              </h2>
              
              <p className="text-xl text-brand-dark/80 mb-8">
                Stand out in New Brunswick's diverse business landscape. Get expert SEO strategies that connect you with local customers.
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
