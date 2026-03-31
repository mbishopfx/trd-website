'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Play, Calendar, Award, Mic2, Tv } from 'lucide-react';

export default function CEOProofSection() {
  const timeline = [
    {
      year: '2020',
      event: 'Entity-First SEO',
      description: 'Jon begins preaching the death of keywords and the rise of the Knowledge Graph.',
      icon: <Award className="w-5 h-5" />
    },
    {
      year: '2022',
      event: 'Pre-SGE Predictions',
      description: 'On the "Masters of Search" podcast, Jon predicts Google\'s shift to generative answers.',
      icon: <Mic2 className="w-5 h-5" />
    },
    {
      year: '2024',
      event: 'Agentic Era Launch',
      description: 'True Rank Digital deploys first autonomous agents for enterprise client acquisition.',
      icon: <Tv className="w-5 h-5" />
    },
    {
      year: '2026',
      event: 'AI Search Domination',
      description: 'Establishing the definitive protocol for GEO and multi-agent orchestration.',
      icon: <Play className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-brand-obsidian">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6"
          >
            Building the Future <span className="text-brand-blue italic">Before</span> the World Knew It Existed
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            True Rank Digital isn't chasing trends. We are the architects who saw the Agentic Era coming years ago.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Timeline UI */}
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-6 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full glass-blue flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-px h-16 bg-gradient-to-b from-brand-blue to-transparent mt-2" />
                  )}
                </div>
                <div className="pt-1">
                  <span className="text-brand-blue font-black text-xl mb-1 block tracking-tighter">{item.year}</span>
                  <h3 className="text-white font-bold text-lg mb-2">{item.event}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: CEO Profile & Quotes */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="glass-blue p-10 lg:p-14 relative overflow-hidden rounded-[2rem]"
            >
              {/* Decorative Accent */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/20 rounded-full blur-3xl" />
              
              <Quote className="w-16 h-16 text-brand-blue/20 absolute top-8 left-8" />
              
              <div className="relative z-10">
                <blockquote className="text-2xl lg:text-3xl text-white font-medium leading-tight mb-8 italic">
                  "AI doesn't guess; it <span className="text-brand-blue">calculates authority</span>. If you aren't feeding the model the right local entity signals today, you won't exist tomorrow."
                </blockquote>
                
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-blue to-blue-600 p-0.5">
                    <div className="w-full h-full bg-brand-obsidian rounded-[calc(1rem-0.5px)] overflow-hidden">
                      {/* CEO Image Placeholder */}
                      <div className="w-full h-full flex items-center justify-center text-brand-blue font-black text-2xl">
                        JK
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">Jon J. Korkowski</div>
                    <div className="text-brand-blue font-bold text-sm tracking-widest uppercase">CEO & Founder</div>
                  </div>
                </div>

                <div className="mt-12 flex flex-wrap gap-4">
                  <button className="flex items-center space-x-2 px-4 py-2 glass-blue rounded-lg text-xs font-bold text-white hover:bg-brand-blue/10 transition-colors">
                    <Mic2 className="w-4 h-4" />
                    <span>Listen on Masters of Search</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 glass-blue rounded-lg text-xs font-bold text-white hover:bg-brand-blue/10 transition-colors">
                    <Tv className="w-4 h-4" />
                    <span>Watch Work Cultured Feature</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Floating Proof Metric */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 lg:right-10 p-6 glass-cyan rounded-2xl border border-brand-cyan/30 shadow-[0_0_20px_rgba(0,245,255,0.2)]"
            >
              <div className="text-brand-cyan font-black text-3xl mb-1">6+ Years</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Predicting AI Search Shifts</div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
