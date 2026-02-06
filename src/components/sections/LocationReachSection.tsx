'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, Building2, Users, ArrowRight } from 'lucide-react';

export default function LocationReachSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-secondary/10 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-brand-secondary" />
              <span className="text-brand-secondary font-semibold text-sm">Our Location & Reach</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
              Our Location & Reach
            </h2>
            
            <div className="space-y-4 text-brand-dark/70 text-lg leading-relaxed mb-8">
              <p>
                Based in the heart of the New Jersey/New York metropolitan area, True Rank Digital serves as your 
                premier digital marketing partner. Our strategic location in one of the world's most dynamic business 
                hubs allows us to stay at the forefront of digital innovation and industry trends.
              </p>
              <p>
                While we're proud of our roots in the NJ/NY metro area, our expertise and services extend far beyond 
                geographical boundaries. In today's digital age, effective digital marketing knows no borders. We 
                successfully serve clients across the United States and beyond, delivering the same level of 
                excellence and personalized attention regardless of location.
              </p>
              <p>
                Our team leverages modern technology and communication tools to provide seamless collaboration and 
                support to businesses everywhere. Whether you're a local startup in New Jersey or an established 
                company across the country, True Rank Digital has the expertise and capabilities to elevate your 
                digital presence and drive meaningful results.
              </p>
            </div>

            {/* CTA Button */}
            <motion.a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 glass-button bg-brand-secondary/10 hover:bg-brand-secondary hover:text-white text-brand-secondary font-semibold rounded-full transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Card */}
            <div className="glass-card p-8 relative overflow-hidden">
              
              {/* Background Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-brand-secondary/20 to-brand-primary/20 rounded-full blur-2xl"></div>
              
              <div className="relative">
                {/* Location Info */}
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-brand-dark mb-2">
                    East Brunswick, NJ
                  </h3>
                  <p className="text-brand-dark/60">
                    Heart of NY/NJ Metro Area
                  </p>
                </div>

                {/* Service Areas */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/50 rounded-xl">
                    <Building2 className="w-6 h-6 text-brand-primary mx-auto mb-2" />
                    <div className="text-sm font-semibold text-brand-dark">Local</div>
                    <div className="text-xs text-brand-dark/60">NJ/NY Metro</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-xl">
                    <Users className="w-6 h-6 text-brand-secondary mx-auto mb-2" />
                    <div className="text-sm font-semibold text-brand-dark">National</div>
                    <div className="text-xs text-brand-dark/60">Across USA</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-xl">
                    <Globe className="w-6 h-6 text-brand-accent mx-auto mb-2" />
                    <div className="text-sm font-semibold text-brand-dark">Global</div>
                    <div className="text-xs text-brand-dark/60">Worldwide</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-xl">
                    <MapPin className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-brand-dark">Remote</div>
                    <div className="text-xs text-brand-dark/60">Flexible support</div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-6 pt-6 border-t border-brand-dark/10">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-brand-primary">Nationwide</div>
                      <div className="text-xs text-brand-dark/60">Coverage</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-brand-secondary">International</div>
                      <div className="text-xs text-brand-dark/60">Support</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-brand-accent">Remote</div>
                      <div className="text-xs text-brand-dark/60">Friendly</div>
                    </div>
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
