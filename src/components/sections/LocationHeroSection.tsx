'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

interface LocationHeroSectionProps {
  cityName: string;
  stateName: string;
  county: string;
  population?: string;
  description: string;
  zipCodes?: string[];
  isMainLocation?: boolean;
}

export default function LocationHeroSection({
  cityName,
  stateName,
  county,
  population,
  description,
  zipCodes,
  isMainLocation = false
}: LocationHeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light via-white to-brand-light/50"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F7FFF' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0] 
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-brand-primary/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -15, 0] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2 
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-brand-accent/20 rounded-xl blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0] 
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1 
          }}
          className="absolute bottom-32 left-1/4 w-12 h-12 bg-brand-secondary/30 rounded-full blur-lg"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Location Badge */}
          {isMainLocation && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-primary/10 text-brand-primary font-semibold rounded-full border border-brand-primary/20">
                <MapPin className="w-4 h-4" />
                <span>Primary Service Area</span>
              </span>
            </motion.div>
          )}

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-brand-dark mb-6 leading-tight"
          >
            <span className="text-brand-primary">SEO Services in</span>
            <br />
            <span className="text-brand-dark">{cityName}, {stateName}</span>
          </motion.h1>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center space-x-6 mb-8 text-brand-dark/70"
          >
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-medium">{county}</span>
            </div>
            {population && (
              <>
                <div className="hidden sm:block w-px h-4 bg-brand-dark/20"></div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">Population: {population}</span>
                </div>
              </>
            )}
            {zipCodes && zipCodes.length > 0 && (
              <>
                <div className="hidden sm:block w-px h-4 bg-brand-dark/20"></div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">Zip: {zipCodes.join(', ')}</span>
                </div>
              </>
            )}
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl sm:text-2xl text-brand-dark/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center space-x-3 px-8 py-4 sm:px-10 sm:py-5 bg-brand-primary text-white font-semibold text-lg sm:text-xl rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:bg-brand-primary/90 group"
              >
                <MapPin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span>Get Local SEO Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-brand-dark/70"
          >
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-medium">Call Now:</span>
              <a 
                href="tel:+17324750139"
                className="text-brand-primary font-semibold hover:text-brand-primary/80 transition-colors duration-200"
              >
                (732) 475-0139
              </a>
            </div>
            
            <div className="hidden sm:block w-px h-4 bg-brand-dark/20"></div>
            
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-medium">24/7 Available</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
