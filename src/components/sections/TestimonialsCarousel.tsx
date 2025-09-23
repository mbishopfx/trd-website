'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
  rating: number;
  industry: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "True Rank Digital has been instrumental in boosting our lead generation and brand awareness. Their team, especially Jon Karkowski and Jose, are professional, knowledgeable, and always on top of things. Highly recommend for businesses looking to grow!",
    author: "Sebastian Vargas",
    company: "4 reviews",
    rating: 5,
    industry: "Google Review"
  },
  {
    id: 2,
    quote: "I've been in cars sales for over 17 years. Had a lot of vendors. John and his team at truerank are one of the only seo and gbp vendors that actually showed progress and are on point with there work.",
    author: "Jeffrey Fraley",
    company: "4 reviews",
    rating: 5,
    industry: "Google Review"
  },
  {
    id: 3,
    quote: "Jose was great to work with! He really understood what my business needed and helped get it on the right track. Thanks to his expertise, our online presence improved, and we saw real results. I highly recommend him and his team!",
    author: "Estrella Rojas",
    company: "7 reviews",
    rating: 5,
    industry: "Google Review"
  },
  {
    id: 4,
    quote: "I loved working with Jose he helped my business tremendously. He answered all my questions and walked me through every step.",
    author: "Yasmin Peralta",
    company: "11 reviews",
    rating: 5,
    industry: "Google Review"
  },
  {
    id: 5,
    quote: "True Rank Digital helped my business by providing more calls and more leads with their services. I had to hire more people to handle the calls and leads. Jon went above and beyond, As a business owner I would highly recommend them to help your business.",
    author: "Frederick Picchiello",
    company: "5 reviews",
    rating: 5,
    industry: "Google Review"
  },
  {
    id: 6,
    quote: "True rank digital isn't a company it's a family they got my business back on track. Constant follow ups they treated me like family god bless y'all",
    author: "Jessica Perez",
    company: "1 review",
    rating: 5,
    industry: "Google Review"
  },
  {
    id: 7,
    quote: "Feels like I have 24 hours service, I call them for advise on my marketing all the time. Definitely will continue to use them!",
    author: "Mohammed Elkholy",
    company: "Local Guide · 75 reviews",
    rating: 5,
    industry: "Google Review"
  },
  {
    id: 8,
    quote: "10/10 love the service from Jon and Tom they answered all my questions, got my website running in just a few days and just went above and beyond with everything I needed thank you!",
    author: "Jrs AutoSpa",
    company: "7 reviews",
    rating: 5,
    industry: "Google Review"
  },
  {
    id: 9,
    quote: "True ranked helped me grow my business! Was able to generate more leads and more traffic. Can't thank them enough!",
    author: "Nato J",
    company: "6 reviews",
    rating: 5,
    industry: "Google Review"
  },
  {
    id: 10,
    quote: "John, I cannot sing enough praises. He revolutionized my marketing strategy for my company. As long as I am in business True Rank has a client. Thank you!!",
    author: "Azam C",
    company: "2 reviews",
    rating: 5,
    industry: "Google Review"
  },
  {
    id: 11,
    quote: "They increased my business profit by increasing traffic and leads within 30 days @ half the price I was paying for before. Very knowledgeable people",
    author: "Jose Perdomo",
    company: "17 reviews",
    rating: 5,
    industry: "Google Review"
  },
  {
    id: 12,
    quote: "Absolute best service around. I wish I had found this company sooner!",
    author: "Nick Kelley",
    company: "Local Guide · 11 reviews",
    rating: 5,
    industry: "Google Review"
  }
];

// Duplicate testimonials for seamless infinite scroll
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
      <div className="glass-card p-6 h-full relative overflow-hidden group hover:shadow-glass-lg transition-all duration-300">
        
        {/* Background Glow */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative">
          {/* Rating Stars */}
          <div className="flex items-center space-x-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Quote Icon */}
          <div className="absolute -top-2 -left-2 text-brand-primary/20">
            <Quote className="w-12 h-12" />
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-brand-dark/80 leading-relaxed mb-6 relative z-10 italic">
            "{testimonial.quote}"
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-brand-dark">{testimonial.author}</div>
              <div className="text-sm text-brand-dark/60">{testimonial.company}</div>
            </div>
            
            <div className="text-xs px-2 py-1 bg-brand-primary/10 text-brand-primary rounded-full font-medium">
              {testimonial.industry}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-brand-light/30 via-white to-brand-light/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-100 rounded-full mb-4">
            <Star className="w-5 h-5 text-yellow-600 fill-current" />
            <span className="text-yellow-700 font-semibold text-sm">Client Success Stories</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6">
            What Our Clients Say
          </h2>
          
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
            Real testimonials from real small business owners who've experienced 
            transformative growth with our AI-powered SEO solutions.
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
            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-light/50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-light/50 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: 'Custom', label: 'Tech Solutions', icon: '⚙️' },
            { value: 'Schema', label: 'Markup Expert', icon: '📋' },
            { value: 'LLM.txt', label: 'Optimization', icon: '🤖' },
            { value: 'Problem', label: 'Solvers', icon: '🔧' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 glass-card hover:shadow-glass transition-all duration-300"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-brand-dark mb-1">{stat.value}</div>
              <div className="text-brand-dark/60 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-brand-dark/70 mb-6">
            Join hundreds of successful businesses that trust True Rank Digital
          </p>
          <motion.a
            href="/case-studies"
            className="inline-flex items-center space-x-2 px-8 py-4 glass-button bg-brand-primary/10 hover:bg-brand-primary hover:text-white text-brand-primary font-semibold rounded-full transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View More Success Stories</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
