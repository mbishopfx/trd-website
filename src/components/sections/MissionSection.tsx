'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle } from 'lucide-react';

export default function MissionSection() {
  const whyChooseUs = [
    'Proven track record of success',
    'Customized strategies for your business', 
    'Transparent reporting and communication',
    'Dedicated support team'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Mission Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-primary/10 rounded-full mb-6">
              <Target className="w-5 h-5 text-brand-primary" />
              <span className="text-brand-primary font-semibold text-sm">Our Mission</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
              Our Mission
            </h2>
            
            <div className="space-y-4 text-brand-dark/70 text-lg leading-relaxed mb-8">
              <p>
                At True Rank Digital, our mission is to empower businesses with innovative digital solutions 
                that drive real growth. We combine industry expertise with cutting-edge technology to deliver 
                exceptional results.
              </p>
              <p>
                We believe in transparency, measurable results, and building long-term partnerships with our clients. 
                Our success is measured by your success.
              </p>
            </div>

            {/* Why Choose Us */}
            <div>
              <h3 className="text-2xl font-heading font-semibold text-brand-dark mb-6">
                Why Choose Us?
              </h3>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-brand-dark/80 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card p-8 relative overflow-hidden">
              
              {/* Background Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-full blur-2xl"></div>
              
              <div className="relative text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-12 h-12 text-white" />
                </div>
                
                <blockquote className="text-xl font-medium text-brand-dark/80 italic leading-relaxed">
                  "Our mission is to empower businesses with innovative digital solutions that drive real growth."
                </blockquote>
                
                <div className="mt-6 pt-6 border-t border-brand-dark/10">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-brand-primary">Quality</div>
                      <div className="text-sm text-brand-dark/60">Service Focus</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-brand-primary">Professional</div>
                      <div className="text-sm text-brand-dark/60">Approach</div>
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
