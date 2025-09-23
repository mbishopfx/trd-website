'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Sparkles } from 'lucide-react';

export default function HeroSection() {
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
          
          {/* Company Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="relative inline-flex items-center justify-center w-40 h-40 mx-auto mb-6">
              {/* Floating Frame Effect */}
              <div className="absolute inset-0 glass-card rounded-3xl shadow-glow hover:shadow-glow-lg transition-all duration-300 bg-white/10 backdrop-blur-md border-2 border-white/30">
                <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/5"></div>
              </div>
              
              {/* Logo */}
              <div className="relative z-10 w-28 h-28">
                <Image
                  src="/images/logos/trdlogoblue.webp"
                  alt="True Rank Digital Logo"
                  width={112}
                  height={112}
                  className="w-full h-full object-contain drop-shadow-lg"
                  priority
                />
              </div>
              
              {/* Floating Animation Elements */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-2 -right-2 w-3 h-3 bg-brand-accent/80 rounded-full shadow-lg"
              />
              <motion.div
                animate={{
                  y: [0, 6, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-2 -left-2 w-2 h-2 bg-brand-primary/70 rounded-full shadow-lg"
              />
              <motion.div
                animate={{
                  y: [0, -4, 0],
                  x: [0, 2, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-4 -left-4 w-1.5 h-1.5 bg-brand-secondary/60 rounded-full shadow-md"
              />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-brand-dark mb-6 leading-tight"
          >
            <span className="text-brand-primary">Get Your Business</span>
            <br />
            <span className="text-brand-dark">Found on Google</span>
            <span className="text-brand-primary">—Fast!</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl sm:text-2xl text-brand-dark/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Simple, Powerful, Affordable SEO & Marketing to Grow Your Local Presence.
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
                href="/free-audit"
                className="inline-flex items-center space-x-3 px-8 py-4 sm:px-10 sm:py-5 bg-brand-primary text-white font-semibold text-lg sm:text-xl rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:bg-brand-primary/90 group"
              >
                <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Schedule Your Free SEO Audit</span>
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
              <span className="text-sm font-medium">Call Us:</span>
              <a 
                href="tel:+17324750139"
                className="text-brand-primary font-semibold hover:text-brand-primary/80 transition-colors duration-200"
              >
                (732) 475-0139
              </a>
            </div>
            
            <div className="hidden sm:block w-px h-4 bg-brand-dark/20"></div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Email:</span>
              <a 
                href="mailto:jon@truerankdigital.com"
                className="text-brand-primary font-semibold hover:text-brand-primary/80 transition-colors duration-200"
              >
                jon@truerankdigital.com
              </a>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-brand-dark/50"
            >
              <span className="text-xs font-medium mb-2 tracking-wider uppercase">Scroll to explore</span>
              <div className="w-px h-8 bg-brand-primary/30 relative">
                <motion.div
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-brand-primary to-transparent"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
