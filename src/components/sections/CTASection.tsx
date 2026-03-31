'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, Phone, ArrowRight, Bot, Zap } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-brand-obsidian relative overflow-hidden border-t border-white/5">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-cyan/10 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-blue/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          
          <h2 className="text-4xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight tracking-tight">
            Ready to Dominate the <span className="text-brand-cyan italic">Agentic Era?</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Secure your <span className="text-white font-medium">Entity Authority</span> today and ensure your brand is the definitive answer across every LLM and Answer Engine.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center space-x-3 px-10 py-5 bg-brand-cyan text-brand-obsidian font-black text-xl rounded-full shadow-[0_0_30px_rgba(0,245,255,0.3)] hover:shadow-[0_0_50px_rgba(0,245,255,0.5)] transition-all duration-300 group"
              >
                <Zap className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
                <span>Claim Your Entity Audit</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/ai-engine"
                className="inline-flex items-center space-x-3 px-10 py-5 glass-button-blue text-white font-bold text-xl rounded-full transition-all duration-300 group"
              >
                <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Deploy AI Agents</span>
              </Link>
            </motion.div>

          </div>

        </motion.div>

        {/* Bottom Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-white/10 flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12 text-gray-500"
        >
          
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-brand-cyan" />
            <span className="font-bold text-xs uppercase tracking-widest">Command Center:</span>
            <a 
              href="tel:+17324750139"
              className="text-white font-bold hover:text-brand-cyan transition-colors duration-200"
            >
              (732) 475-0139
            </a>
          </div>
          
          <div className="hidden lg:block w-px h-6 bg-brand-obsidian/10"></div>
          
          <div className="flex items-center space-x-3">
            <span className="font-bold text-xs uppercase tracking-widest">Direct Comms:</span>
            <a 
              href="mailto:info@truerankdigital.com"
              className="text-white font-bold hover:text-brand-cyan transition-colors duration-200"
            >
              info@truerankdigital.com
            </a>
          </div>

          <div className="hidden lg:block w-px h-6 bg-brand-obsidian/10"></div>

          <Link 
            href="/contact"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 font-bold text-xs uppercase tracking-widest"
          >
            <span>Strategic Support</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

        </motion.div>

      </div>
    </section>
  );
}
