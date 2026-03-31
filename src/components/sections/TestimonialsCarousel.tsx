'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  source?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 3,
    quote: "Jose was great to work with! He really understood what my business needed and helped get it on the right track. Thanks to his expertise, our online presence improved, and we saw real results. I highly recommend him and his team!",
    author: "Estrella Rojas",
    source: "Client review"
  },
  {
    id: 4,
    quote: "I loved working with Jose he helped my business tremendously. He answered all my questions and walked me through every step.",
    author: "Yasmin Peralta",
    source: "Client review"
  },
  {
    id: 5,
    quote: "True Rank Digital helped my business by providing more calls and more leads with their services. I had to hire more people to handle the calls and leads. Jon went above and beyond, As a business owner I would highly recommend them to help your business.",
    author: "Frederick Picchiello",
    source: "Client review"
  },
  {
    id: 6,
    quote: "True rank digital isn't a company it's a family they got my business back on track. Constant follow ups they treated me like family god bless y'all",
    author: "Jessica Perez",
    source: "Client review"
  },
  {
    id: 9,
    quote: "True ranked helped me grow my business! Was able to generate more leads and more traffic. Can't thank them enough!",
    author: "Nato J",
    source: "Client review"
  },
  {
    id: 10,
    quote: "John, I cannot sing enough praises. He revolutionized my marketing strategy for my company. As long as I am in business True Rank has a client. Thank you!!",
    author: "Azam C",
    source: "Client review"
  },
  {
    id: 12,
    quote: "Absolute best service around. I wish I had found this company sooner!",
    author: "Nick Kelley",
    source: "Client review"
  }
];

const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex-shrink-0 w-80 mx-4"
    >
      <div className="glass-card p-8 h-full relative overflow-hidden group hover:shadow-glow-blue transition-all duration-300">
        
        {/* Background Glow */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-blue/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative">
          {/* Quote Icon */}
          <div className="absolute -top-2 -left-2 text-brand-blue/20">
            <Quote className="w-12 h-12" />
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-gray-300 leading-relaxed mb-8 relative z-10 font-light italic">
            "{testimonial.quote}"
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center justify-between border-t border-white/5 pt-6">
            <div>
              <div className="font-bold text-white tracking-tight">{testimonial.author}</div>
            </div>
            
            {testimonial.source ? (
              <div className="text-[10px] px-2 py-1 bg-brand-blue/10 text-brand-blue rounded-full font-black uppercase tracking-widest">
                {testimonial.source}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-24 bg-brand-obsidian overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass-blue rounded-full mb-6">
            <Star className="w-4 h-4 text-brand-blue fill-brand-blue" />
            <span className="text-brand-blue font-black text-xs uppercase tracking-[0.2em]">Validated Authority</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-8">
            Network <span className="text-brand-blue italic">Feedback</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Direct evidence of brand dominance and entity consolidation across our client network.
          </p>
        </motion.div>

      </div>

      {/* Infinite Scrolling Testimonials */}
      <div className="relative">
        <motion.div
          className="flex"
          animate={{
            x: isPaused ? 0 : [0, -100 * testimonials.length]
          }}
          transition={{
            x: {
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              aria-hidden={index >= testimonials.length ? 'true' : undefined}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-brand-obsidian to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-brand-obsidian to-transparent pointer-events-none z-10"></div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-500 mb-8 font-medium tracking-wide uppercase text-xs">
            Join the elite 1% of brands dictating AI answers
          </p>
          <motion.a
            href="/case-studies"
            className="inline-flex items-center space-x-3 px-10 py-5 glass-button-blue rounded-full transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg">Review Deployment Logs</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
