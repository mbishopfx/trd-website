'use client';

import LocationHeroSection from '@/components/sections/LocationHeroSection';
import AIServicesSection from '@/components/sections/AIServicesSection';
import CTASection from '@/components/sections/CTASection';
import PageSpecificSchema from '@/components/seo/PageSpecificSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import { motion } from 'framer-motion';
import { MapPin, Users, Building, TrendingUp, Target, Star, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const localServices = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Local SEO Optimization',
    description: 'Dominate East Brunswick search results with targeted local SEO strategies designed for Middlesex County businesses.'
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: 'Google Business Profile',
    description: 'Optimize your Google Business Profile to appear in "Near Me" searches and Google Maps for East Brunswick customers.'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Local Reputation Management',
    description: 'Build trust in the East Brunswick community with strategic review management and online reputation building.'
  }
];

const localStats = [
  { label: 'Population', value: '48,739', icon: <Users className="w-6 h-6" /> },
  { label: 'Median Income', value: '$89,456', icon: <TrendingUp className="w-6 h-6" /> },
  { label: 'Local Businesses', value: '2,100+', icon: <Building className="w-6 h-6" /> },
  { label: 'Avg. Google Ranking Improvement', value: '350%', icon: <Star className="w-6 h-6" /> }
];

const whyChooseUs = [
  'Based in East Brunswick - We know the local market',
  'Proven results for 200+ New Jersey businesses',
  'Google-certified SEO specialists',
  'Same-day response guarantee',
  'Free SEO audit and consultation',
  '24/7 support and monitoring'
];

export default function EastBrunswickPage() {
  return (
    <>
      <PageSpecificSchema 
        pageType="location"
        pageTitle="SEO Services East Brunswick NJ | Local Digital Marketing Experts"
        pageDescription="Professional SEO services in East Brunswick, NJ. Get your business found on Google with expert local SEO, Google Business Profile optimization, and digital marketing."
        locationName="East Brunswick"
        locationZipCode="08816"
        locationCounty="Middlesex County"
      />
      <LocalBusinessSchema />
      
      <div className="pt-20">
        {/* Hero Section */}
        <LocationHeroSection
          cityName="East Brunswick"
          stateName="New Jersey"
          county="Middlesex County"
          population="48,739"
          description="Get your East Brunswick business found on Google with our proven local SEO strategies. We're based right here in East Brunswick and know what works for local businesses."
          zipCodes={['08816']}
          isMainLocation={true}
        />

        {/* Local Market Overview */}
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
                East Brunswick Market Insights
              </motion.h2>
              <p className="text-xl text-brand-dark/80 max-w-3xl mx-auto">
                Understanding your local market is key to SEO success. Here's what makes East Brunswick unique for local businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {localStats.map((stat, index) => (
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
                Why East Brunswick Businesses Choose Us
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-center space-x-3 text-left">
                    <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    <span className="text-brand-dark/80">{reason}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Services Section */}
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
                SEO Services Tailored for East Brunswick
              </motion.h2>
              <p className="text-xl text-brand-dark/80 max-w-3xl mx-auto">
                Our local expertise helps East Brunswick businesses dominate their market with proven SEO strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {localServices.map((service, index) => (
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

        {/* AI Services Section */}
        <AIServicesSection />

        {/* Local CTA Section */}
        <section className="py-20 bg-brand-dark/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-6">
                Ready to Dominate East Brunswick Search Results?
              </h2>
              
              <p className="text-xl text-brand-dark/80 mb-8">
                Join 200+ New Jersey businesses that trust True Rank Digital for their SEO success. 
                Get your free local SEO audit today.
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

        {/* Final CTA Section */}
        <CTASection />
      </div>
    </>
  );
}
