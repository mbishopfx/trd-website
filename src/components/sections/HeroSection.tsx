'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Bot, Zap } from 'lucide-react';

const supabaseBaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseVideoBase = supabaseBaseUrl
  ? `${supabaseBaseUrl}/storage/v1/object/public/truerankdigital/videos`
  : '';
const heroVideoMobileUrl = supabaseVideoBase
  ? `${supabaseVideoBase}/visualizing-abstract-final-mobile.mp4?v=20260327a`
  : '/videos/visualizing-abstract-final-mobile.mp4';
const heroVideoDesktopUrl = supabaseVideoBase
  ? `${supabaseVideoBase}/visualizing-abstract-final-optimized.mp4?v=20260327a`
  : '/videos/visualizing-abstract-final-optimized.mp4';
const heroVideoPosterUrl = supabaseVideoBase
  ? `${supabaseVideoBase}/visualizing-abstract-final-poster.jpg?v=20260327a`
  : '/videos/visualizing-abstract-final-poster.jpg';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[82svh] lg:min-h-[88svh] flex items-start lg:items-center justify-center overflow-hidden bg-brand-obsidian pt-28 sm:pt-24 lg:pt-20">
      {/* Ambient video background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          className="hero-video-loop h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroVideoPosterUrl}
          crossOrigin="anonymous"
          aria-hidden="true"
        >
          <source src={heroVideoMobileUrl} type="video/mp4" media="(max-width: 768px)" />
          <source src={heroVideoDesktopUrl} type="video/mp4" />
          <source src="/videos/visualizing-abstract-final-optimized.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-brand-obsidian/28" />
      </div>

      {/* 3D Wireframe Grid Background Effect */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-obsidian/22 to-brand-obsidian/72" />
      </div>

      {/* Animated Glowing Orbs */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-[360px] h-[360px] bg-brand-cyan/20 rounded-full blur-[95px]"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
            x: [0, -100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-[420px] h-[420px] bg-brand-blue/10 rounded-full blur-[110px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-cyan mb-8 border border-brand-cyan/30"
          >
            <Zap className="w-4 h-4 text-brand-cyan animate-pulse" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-cyan uppercase">
              AI SEARCH DOMINATION + AGENTIC ORCHESTRATION
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-[1.08] tracking-tight"
          >
            <span className="block text-white">Stop Chasing Clicks.</span>
            <span className="block bg-gradient-to-r from-brand-cyan via-white to-brand-blue bg-clip-text text-transparent text-glow-cyan">
              Start Dictating the AI&apos;s Answers.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
          >
            True Rank Digital turns your brand into the <span className="text-white font-medium italic">definitive entity</span> across every Answer Engine, LLM, and multi-agent workflow. We build the foundational AI signals, then amplify them with Paid Media, Geofencing, and Autonomous 24/7 Business Agents.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-brand-cyan text-brand-obsidian font-black text-base rounded-full shadow-[0_0_30px_rgba(0,245,255,0.4)] hover:shadow-[0_0_50px_rgba(0,245,255,0.6)] transition-all flex items-center justify-center space-x-3 group"
              >
                <Rocket className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span>Get Your Market Visibility Audit</span>
              </motion.button>
            </Link>

            <Link href="/ai-engine" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 glass-button-blue rounded-full text-base flex items-center justify-center space-x-3 group"
              >
                <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span>Explore AI Growth Systems</span>
              </motion.button>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Floating Network Visualization (Neural Network Mockup) */}
      <div className="absolute inset-0 z-[3] pointer-events-none opacity-30 hidden lg:block">
        <NeuralNetworkOverlay />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">Initiate Command</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-brand-cyan to-transparent"
        />
      </motion.div>
    </section>
  );
}

function NeuralNetworkOverlay() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
      <defs>
        <linearGradient id="cyan-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#4F7FFF" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {/* Simulation of a city grid / neural network */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={Math.random() * 1000}
          cy={Math.random() * 1000}
          r={Math.random() * 3 + 1}
          fill={i % 2 === 0 ? "#00F5FF" : "#4F7FFF"}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
      {/* Add some connection lines */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.line
          key={`line-${i}`}
          x1={Math.random() * 1000}
          y1={Math.random() * 1000}
          x2={Math.random() * 1000}
          y2={Math.random() * 1000}
          stroke="url(#cyan-blue)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.2, 0] }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </svg>
  );
}
