'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Database, Network } from 'lucide-react';

export default function AIOTechnologySection() {
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
            Custom Software Development
          </h2>
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
            While other agencies use generic tools, we build custom software solutions. Our development team creates proprietary technology that gives our clients advantages no one else can offer.
          </p>
        </motion.div>

        {/* Technology Stack */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Brain className="w-8 h-8" />, title: "Schema Builder", desc: "Custom structured data" },
                  { icon: <Cpu className="w-8 h-8" />, title: "LLM.txt Generator", desc: "AI search optimization" },
                  { icon: <Database className="w-8 h-8" />, title: "Problem Scanner", desc: "Issue detection system" },
                  { icon: <Network className="w-8 h-8" />, title: "Solution Builder", desc: "Custom tech creation" }
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-white/50 rounded-xl"
                  >
                    <div className="text-brand-primary mb-2 flex justify-center">
                      {tech.icon}
                    </div>
                    <h4 className="font-bold text-brand-dark text-sm mb-1">{tech.title}</h4>
                    <p className="text-brand-dark/60 text-xs">{tech.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-heading font-bold text-brand-dark mb-6">
              We BUILD What Others Can&apos;t
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-brand-primary mb-3">Schema Markup Engineering</h4>
                <p className="text-brand-dark/70 leading-relaxed">
                  We create custom structured data schemas for each business type, helping search engines understand your content better than any competitor. Our schema markup is hand-crafted for maximum ranking impact.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-brand-primary mb-3">LLM.txt Creation & Optimization</h4>
                <p className="text-brand-dark/70 leading-relaxed">
                  We develop and optimize LLM.txt files specifically designed for AI search engines like ChatGPT, Claude, and Perplexity. This cutting-edge technique helps your content rank in AI-powered search results.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-brand-primary mb-3">Custom Problem Detection</h4>
                <p className="text-brand-dark/70 leading-relaxed">
                  Our proprietary software scans websites at the code level to find SEO issues other agencies completely miss. When we identify problems, we build custom solutions to fix them—not generic band-aids.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
