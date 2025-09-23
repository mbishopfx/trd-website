'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coffee, Lightbulb, Trophy, Users, Zap } from 'lucide-react';

export default function TeamCultureSection() {
  const cultureValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client-First Mindset",
      description: "Every decision we make puts our clients' success at the center",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation & Learning",
      description: "We continuously evolve with the latest AI and SEO technologies",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Excellence",
      description: "Teamwork and knowledge sharing drive our exceptional results",
      color: "from-brand-primary to-brand-secondary"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Results-Driven",
      description: "We measure our success by the growth we create for our clients",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Work-Life Balance",
      description: "Happy team members create the best work for our clients",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast & Agile",
      description: "We adapt quickly to deliver solutions that exceed expectations",
      color: "from-blue-500 to-cyan-500"
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
            Our Team Culture
          </h2>
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
            The values and principles that guide our team in delivering exceptional results for every client.
          </p>
        </motion.div>

        {/* Culture Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cultureValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center hover:shadow-glass-lg transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {value.icon}
                </div>
              </div>

              <h3 className="text-xl font-heading font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors duration-300">
                {value.title}
              </h3>

              <p className="text-brand-dark/70 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 lg:p-12 max-w-4xl mx-auto">
            <blockquote className="text-2xl lg:text-3xl font-medium text-brand-dark/80 italic leading-relaxed mb-6">
              "We're not just a team—we're partners in your success. Every campaign we create, every strategy we implement, is built with the expertise and passion of professionals who genuinely care about your growth."
            </blockquote>
            <div className="text-brand-primary font-semibold text-lg">
              — The True Rank Digital Team
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
