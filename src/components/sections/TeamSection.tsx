'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Users, Award, Target } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  description: string;
  quote?: string;
  linkedin?: string;
  image?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Jon J Korkowski',
    title: 'CEO - Founder - President',
    description: 'Visionary leader driving True Rank Digital\'s innovation and growth strategy.',
    quote: 'This isn\'t just another agency—it\'s a full-speed freight train. There are no brakes here, no walls that can\'t be broken, no mountain too steep. We move fast, we move loud, and we move together. You\'re here because you\'re built for the climb. Bring energy. Be consistent. Stay persistent. This company only knows forward.',
    image: '/images/team/jon-korkowski.jpg'
  },
  {
    name: 'Jesse Mathews',
    title: 'EVP of Business Development & Sale',
    description: 'Leading business development initiatives and growth strategy execution.',
    image: '/images/team/jesse-mathews.jpg'
  },
  {
    name: 'Jose Perdomo',
    title: 'EVP of Sales & Client Success',
    description: 'Managing sales performance and client success outcomes across accounts.',
    linkedin: 'https://www.linkedin.com/in/jose-perdomo',
    image: '/images/team/jose-perdomo.jpg'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-brand-light/20 to-white relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236B9AFF' fill-opacity='0.1'%3E%3Cpath d='M60 60 L80 40 L100 60 L80 80 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-secondary/10 rounded-full mb-4">
            <Users className="w-5 h-5 text-brand-secondary" />
            <span className="text-brand-secondary font-semibold text-sm">Leadership Team</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
            Meet Our Leadership
          </h2>
          
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
            Our experienced leadership team drives innovation and delivers exceptional results 
            for businesses worldwide through strategic vision and hands-on expertise.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group ${index === 0 ? 'lg:col-span-3' : ''}`}
            >
              <div className={`glass-card p-8 h-full hover:shadow-glass-lg transition-all duration-300 relative overflow-hidden ${
                index === 0 ? 'lg:flex lg:items-center lg:space-x-12' : 'text-center'
              }`}>
                
                {/* Background Glow Effect */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-brand-secondary/10 to-brand-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`relative ${index === 0 ? 'lg:flex-shrink-0' : ''}`}>
                  {/* Profile Image Placeholder */}
                  <div className={`mx-auto mb-6 relative ${
                    index === 0 ? 'lg:mx-0 w-32 h-32 lg:w-40 lg:lg:h-40' : 'w-24 h-24'
                  }`}>
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-secondary/30 to-brand-primary/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      {/* Placeholder for actual profile photo */}
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-secondary to-brand-primary flex items-center justify-center">
                        <Users className={`text-white ${index === 0 ? 'w-12 h-12 lg:w-16 lg:h-16' : 'w-8 h-8'}`} />
                      </div>
                    </div>
                    
                    {/* Role Badge */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-brand-primary text-white text-xs font-semibold rounded-full whitespace-nowrap">
                      {member.title}
                    </div>
                  </div>
                </div>

                <div className={`relative ${index === 0 ? 'lg:flex-grow lg:text-left' : 'text-center'}`}>
                  {/* Name */}
                  <h3 className={`font-heading font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors duration-300 ${
                    index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'
                  }`}>
                    {member.name}
                  </h3>

                  {/* Title - shown separately for non-CEO members */}
                  {index !== 0 && (
                    <div className="text-brand-primary font-semibold text-lg mb-3">
                      {member.title}
                    </div>
                  )}

                  {/* Description */}
                  <p className={`text-brand-dark/70 leading-relaxed mb-4 ${
                    index === 0 ? 'text-base lg:text-lg' : 'text-sm lg:text-base'
                  }`}>
                    {member.description}
                  </p>

                  {/* Featured Quote for CEO */}
                  {member.quote && (
                    <motion.blockquote 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="relative p-6 bg-brand-primary/5 rounded-xl border-l-4 border-brand-primary mb-6 italic text-brand-dark/80"
                    >
                      <div className="absolute top-2 left-2 text-brand-primary/30">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14h-2c0-2.2 1.8-4 4-4V8zm12 0c-3.3 0-6 2.7-6 6v10h8V14h-2c0-2.2 1.8-4 4-4V8z"/>
                        </svg>
                      </div>
                      <p className="pl-6 leading-relaxed">
                        {member.quote}
                      </p>
                    </motion.blockquote>
                  )}

                  {/* LinkedIn Link */}
                  {member.linkedin && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4"
                    >
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 text-sm"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span>Connect on LinkedIn</span>
                      </a>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { 
              icon: <Award className="w-6 h-6" />, 
              value: 'Professional', 
              label: 'Service Focus',
              description: 'Committed to quality digital marketing'
            },
            { 
              icon: <Target className="w-6 h-6" />, 
              value: 'Strategic', 
              label: 'Approach',
              description: 'Customized solutions for your business'
            },
            { 
              icon: <Users className="w-6 h-6" />, 
              value: 'Dedicated', 
              label: 'Team Support',
              description: 'Available to help when you need us'
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index * 0.1) + 0.5 }}
              viewport={{ once: true }}
              className="text-center p-6 glass-card hover:shadow-glass transition-all duration-300"
            >
              <div className="text-brand-primary mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-brand-dark mb-2">{stat.value}</div>
              <div className="text-brand-dark font-semibold mb-2">{stat.label}</div>
              <div className="text-brand-dark/60 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leadership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-brand-dark/70 mb-6">
            Ready to work with a team that delivers real results?
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 glass-button bg-brand-secondary/10 hover:bg-brand-secondary hover:text-white text-brand-secondary font-semibold rounded-full transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Users className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Get in Touch with Our Team</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
