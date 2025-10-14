'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight, Sparkles } from 'lucide-react';

export default function StarterPackBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Animated Shimmer Effect */}
      <motion.div
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 2
        }}
        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Side - Message */}
          <div className="flex items-center space-x-3 text-white">
            <div className="flex-shrink-0">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
              >
                <Rocket className="w-5 h-5 text-white" />
              </motion.div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span className="font-bold text-lg">Entrepreneur Starter Pack - Work Directly with Jon</span>
              </div>
              <p className="text-white/90 text-sm">
                <motion.strong
                  animate={{
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="font-bold"
                >
                  Starting at $499
                </motion.strong>
                {' '}- Get everything your new LLC needs with personal guidance from Jon Korkowski
              </p>
            </div>
          </div>

          {/* Right Side - CTA */}
          <Link
            href="/llc"
            className="flex-shrink-0 inline-flex items-center space-x-2 px-6 py-3 bg-white text-brand-primary font-bold rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-xl group"
          >
            <span>Get Started Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

