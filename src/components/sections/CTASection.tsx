'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, Phone, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Ready to Get Found on Google?
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Book your free 15-minute strategy call and discover how we can help your business grow online.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/free-audit"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-brand-primary font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Book Your Free 15-Minute Strategy Call Now</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="tel:+17324750139"
                className="inline-flex items-center space-x-3 px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white hover:text-brand-primary transition-all duration-300 group"
              >
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Call Us: (732) 475-0139</span>
              </a>
            </motion.div>

          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white/80"
          >
            {[
              { value: 'Schema', label: 'Markup Experts' },
              { value: 'Custom', label: 'Tech Solutions' },
              { value: 'LLM.txt', label: 'Optimization' },
              { value: 'Problem', label: 'Finders & Solvers' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl font-bold mb-1">{item.value}</div>
                <div className="text-sm">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>

        {/* Bottom Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/20 flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8 text-white/80"
        >
          
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5" />
            <span className="font-medium">Emergency Support:</span>
            <a 
              href="tel:+17322156319"
              className="text-white font-semibold hover:text-white/80 transition-colors duration-200"
            >
              (732) 215-6319
            </a>
          </div>
          
          <div className="hidden lg:block w-px h-4 bg-white/20"></div>
          
          <div className="flex items-center space-x-2">
            <span className="font-medium">Email:</span>
            <a 
              href="mailto:jon@truerankdigital.com"
              className="text-white font-semibold hover:text-white/80 transition-colors duration-200"
            >
              jon@truerankdigital.com
            </a>
          </div>

          <div className="hidden lg:block w-px h-4 bg-white/20"></div>

          <Link 
            href="/contact"
            className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors duration-200 font-medium"
          >
            <span>View All Contact Options</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

        </motion.div>

      </div>
    </section>
  );
}
