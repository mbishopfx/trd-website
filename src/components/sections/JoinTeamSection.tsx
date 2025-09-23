'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Users, Star } from 'lucide-react';

export default function JoinTeamSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Users className="w-5 h-5 text-white" />
              <span className="text-white font-semibold text-sm">Join Our Team</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Ready to Shape the Future of SEO?
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              We're always looking for talented individuals who share our passion for innovation, 
              client success, and cutting-edge AI technology. Join our team and help businesses 
              around the world achieve unprecedented growth.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Work with industry-leading AI technology',
                'Competitive compensation and benefits',
                'Remote and hybrid work options available',
                'Professional development opportunities',
                'Collaborative and supportive environment'
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <Star className="w-5 h-5 text-white/80 flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="mailto:careers@truerankdigital.com"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-brand-primary font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Send Your Resume</span>
              </motion.a>

              <motion.a
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 glass border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass p-8 relative overflow-hidden">
              
              {/* Background Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Current Openings
                </h3>
                
                <div className="space-y-4">
                  {[
                    'Senior SEO Specialist',
                    'AI/ML Engineer',
                    'Full-Stack Developer',
                    'Content Strategist',
                    'Client Success Manager'
                  ].map((position, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      className="p-3 bg-white/10 rounded-lg text-white/90 font-medium hover:bg-white/20 transition-colors duration-200 cursor-pointer"
                    >
                      {position}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-white/80 text-sm">
                    Don't see your role? We're always open to exceptional talent.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
