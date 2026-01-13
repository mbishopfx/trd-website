'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

export default function ContactHeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary text-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <MessageSquare className="w-5 h-5 text-white" />
              <span className="text-white font-semibold text-sm">Get In Touch</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              Get in Touch With Us
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Ready to scale your business globally with our enterprise-level digital solutions? We&apos;d love to hear from you!
            </p>
          </motion.div>
        </div>

        {/* Quick Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: <Phone className="w-6 h-6" />,
              title: 'Call Us',
              primary: '(732) 475-0139',
              secondary: '(732) 215-6319',
              action: 'tel:+17324750139'
            },
            {
              icon: <Mail className="w-6 h-6" />,
              title: 'Email Us',
              primary: 'jon@truerankdigital.com',
              secondary: 'Get a response within hours',
              action: 'mailto:jon@truerankdigital.com'
            },
            {
              icon: <MapPin className="w-6 h-6" />,
              title: 'Visit Us',
              primary: '288 Summerhill Rd, suite 3',
              secondary: 'East Brunswick, NJ 08816',
              action: '#'
            },
            {
              icon: <Clock className="w-6 h-6" />,
              title: 'Availability',
              primary: '24/7 Support',
              secondary: 'Always here for you',
              action: '#'
            }
          ].map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
              className="glass p-6 text-center hover:bg-white/15 transition-all duration-300 group cursor-pointer"
              onClick={() => contact.action.startsWith('#') ? null : window.open(contact.action)}
            >
              <div className="text-white/80 group-hover:text-white mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {contact.icon}
              </div>
              <h3 className="font-semibold text-white mb-2">{contact.title}</h3>
              <div className="text-white/90 font-medium text-sm">{contact.primary}</div>
              <div className="text-white/70 text-xs mt-1">{contact.secondary}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
