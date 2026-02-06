'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import PageSpecificSchema from '@/components/seo/PageSpecificSchema';

interface ServiceArea {
  name: string;
  slug: string;
  county: string;
  description: string;
  featured: boolean;
}

const serviceAreas: ServiceArea[] = [
  {
    name: 'East Brunswick',
    slug: 'east-brunswick',
    county: 'Middlesex County',
    description: 'Our home base and primary service area. Expert SEO services for local businesses in East Brunswick.',
    featured: true
  },
  {
    name: 'Edison',
    slug: 'edison',
    county: 'Middlesex County', 
    description: 'Comprehensive digital marketing solutions for Edison businesses and entrepreneurs.',
    featured: true
  },
  {
    name: 'New Brunswick',
    slug: 'new-brunswick',
    county: 'Middlesex County',
    description: 'SEO and local marketing services for New Brunswick\'s diverse business community.',
    featured: true
  },
  {
    name: 'North Brunswick',
    slug: 'north-brunswick', 
    county: 'Middlesex County',
    description: 'Professional SEO services helping North Brunswick businesses get found online.',
    featured: true
  },
  {
    name: 'Sayreville',
    slug: 'sayreville',
    county: 'Middlesex County',
    description: 'Local SEO expertise for Sayreville businesses looking to dominate their market.',
    featured: true
  },
  {
    name: 'South River',
    slug: 'south-river',
    county: 'Middlesex County',
    description: 'Tailored digital marketing strategies for South River\'s close-knit business community.',
    featured: true
  }
];

export default function ServiceAreasPage() {
  return (
    <>
      <PageSpecificSchema 
        pageType="service-areas"
        pageTitle="Service Areas - True Rank Digital | Local SEO Services in Central NJ"
        pageDescription="True Rank Digital provides expert SEO and digital marketing services across Central New Jersey including East Brunswick, Edison, New Brunswick, and surrounding areas."
      />
      
      <div className="pt-20 min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light/50">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F7FFF' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-brand-dark mb-6 leading-tight">
                <span className="text-brand-primary">Central New Jersey</span>
                <br />
                <span className="text-brand-dark">SEO Service Areas</span>
              </h1>
              
              <p className="text-xl text-brand-dark/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Professional SEO and digital marketing services across Middlesex County and surrounding areas. 
                Get your local business found on Google with our proven strategies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Service Areas Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={area.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`glass-card p-8 hover:shadow-glow transition-all duration-300 ${
                    area.featured ? 'ring-2 ring-brand-primary/20' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold text-brand-dark">
                          {area.name}
                        </h3>
                        <p className="text-sm text-brand-dark/60">{area.county}</p>
                      </div>
                    </div>
                    {area.featured && (
                      <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-brand-dark/80 mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <Link
                    href={`/locations/${area.slug}`}
                    className="inline-flex items-center space-x-2 text-brand-primary font-semibold hover:text-brand-primary/80 transition-colors duration-200 group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-dark/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-6">
                Ready to Dominate Your Local Market?
              </h2>
              
              <p className="text-xl text-brand-dark/80 mb-8">
                Don't see your city listed? We serve the entire Central New Jersey region. 
                Contact us to discuss how we can help your business get found on Google.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-brand-primary text-white font-semibold text-lg rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:bg-brand-primary/90"
                >
                  <span>Get Your Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
