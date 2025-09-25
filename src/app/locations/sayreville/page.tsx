'use client';

import LocationHeroSection from '@/components/sections/LocationHeroSection';
import AIServicesSection from '@/components/sections/AIServicesSection';
import CTASection from '@/components/sections/CTASection';
import PageSpecificSchema from '@/components/seo/PageSpecificSchema';
import { motion } from 'framer-motion';
import { MapPin, Users, Building, TrendingUp, Target, Star, CheckCircle, Factory, Waves, Truck } from 'lucide-react';
import Link from 'next/link';

const sayrevilleServices = [
  {
    icon: <Factory className="w-8 h-8" />,
    title: 'Industrial Business SEO',
    description: 'Specialized SEO for manufacturing, logistics, and industrial companies along the Raritan River corridor.'
  },
  {
    icon: <Waves className="w-8 h-8" />,
    title: 'Waterfront Business SEO',
    description: 'Local SEO strategies for businesses serving the Raritan River area and waterfront communities.'
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Logistics & Distribution SEO',
    description: 'Target B2B customers with SEO strategies designed for transportation and logistics companies.'
  }
];

const sayrevilleStats = [
  { label: 'Population', value: '45,345', icon: <Users className="w-6 h-6" /> },
  { label: 'Median Income', value: '$78,890', icon: <TrendingUp className="w-6 h-6" /> },
  { label: 'Industrial Businesses', value: '750+', icon: <Factory className="w-6 h-6" /> },
  { label: 'B2B Lead Increase', value: '340%', icon: <Star className="w-6 h-6" /> }
];

const sayrevilleFeatures = [
  'Sayreville industrial market expertise',
  'Raritan River corridor specialists',
  'B2B SEO for manufacturing companies',
  'Local services optimization',
  'Transportation & logistics SEO',
  'Waterfront business strategies'
];

export default function SayrevillePage() {
  return (
    <>
      <PageSpecificSchema 
        pageType="location"
        pageTitle="SEO Services Sayreville NJ | Industrial & Local Business SEO"
        pageDescription="Professional SEO services in Sayreville, NJ. Specialized SEO for industrial businesses, local services, and Raritan River area companies."
        locationName="Sayreville"
        locationZipCode="08872"
        locationCounty="Middlesex County"
      />
      
      <div className="pt-20">
        <LocationHeroSection
          cityName="Sayreville"
          stateName="New Jersey"
          county="Middlesex County"
          population="45,345"
          description="Drive business growth in Sayreville with specialized SEO for industrial companies, local services, and Raritan River area businesses."
          zipCodes={['08872', '08879']}
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
                Sayreville Business Landscape
              </motion.h2>
              <p className="text-xl text-brand-dark/80 max-w-3xl mx-auto">
                A strategic location along the Raritan River with a strong industrial base and growing service sector.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {sayrevilleStats.map((stat, index) => (
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
                Sayreville SEO Specializations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {sayrevilleFeatures.map((feature, index) => (
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
                Specialized SEO for Sayreville Businesses
              </motion.h2>
              <p className="text-xl text-brand-dark/80 max-w-3xl mx-auto">
                From industrial manufacturers to local service providers, we create SEO strategies that work for Sayreville's diverse economy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sayrevilleServices.map((service, index) => (
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
                Expand Your Sayreville Business Reach
              </h2>
              
              <p className="text-xl text-brand-dark/80 mb-8">
                Whether you're in manufacturing, logistics, or local services, get SEO strategies that drive real business results in Sayreville.
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
