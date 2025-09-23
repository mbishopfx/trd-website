'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, BarChart3, Heart } from 'lucide-react';

export default function CoreValuesSection() {
  const coreValues = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client-Focused',
      description: 'Your success is our priority. We work closely with you to understand and achieve your goals.',
      color: 'from-brand-primary to-brand-secondary'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We stay ahead of digital trends to provide cutting-edge solutions for your business.',
      color: 'from-brand-secondary to-brand-accent'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Data-Driven',
      description: 'Our strategies are backed by analytics and real-world performance metrics.',
      color: 'from-brand-accent to-purple-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion',
      description: 'We are passionate about helping businesses grow through digital excellence.',
      color: 'from-pink-500 to-brand-primary'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-brand-light/20 via-white to-brand-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
            These fundamental principles guide everything we do and shape how we serve our clients.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card p-8 text-center h-full hover:shadow-glass-lg transition-all duration-300 relative overflow-hidden">
                
                {/* Background Glow */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors duration-300">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-brand-dark/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-brand-dark/70 mb-6">
            Ready to experience our values in action?
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 glass-button bg-brand-primary/10 hover:bg-brand-primary hover:text-white text-brand-primary font-semibold rounded-full transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Users className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Work With Our Team</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
