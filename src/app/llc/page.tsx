'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Rocket,
  Globe,
  MapPin,
  Bot,
  Search,
  Shield,
  Target,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Zap,
  TrendingUp,
  Award,
  Users,
  Phone,
  Mail
} from 'lucide-react';
import ConsultationForm from '@/components/sections/ConsultationForm';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';

export default function BusinessStarterPackPage() {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Website Build',
      description: 'A high-performance, SEO-optimized site that speaks Google\'s language — built to convert, rank, and grow with your brand.',
      href: '/llc/website-build',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Google Business Profile Creation',
      description: 'We don\'t just set it up — we engineer it for dominance. Every tag, service, and city is mapped for visibility from the start.',
      href: '/llc/gbp-creation',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'AIO (Artificial Intelligence Optimization)',
      description: 'Our proprietary fast-start system injects your brand into Google\'s AI ecosystem. Be seen by AI Overviews before your competitors even know what hit them.',
      href: '/llc/aio',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'LSEO (Local Search Engine Optimization)',
      description: 'Get discovered in Maps, not lost in searches. LSEO pushes your business straight into the 3-Pack — where real leads live.',
      href: '/llc/lseo',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'GBP Watchtower + Defense System',
      description: 'Monitor, defend, and expand your Google presence 24/7. Our tools flag negative shifts, competitor threats, and keyword movement in real time.',
      href: '/llc/gbp-watchtower',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Custom Go-To-Market Playbook',
      description: 'Personally written by Jon Korkowski, this custom strategy outlines exactly how to scale your visibility, build local trust, and dominate your niche.',
      href: '/llc/go-to-market-playbook',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Free Consultation with Jon Korkowski',
      description: 'You\'ll sit down (virtually) with Jon himself — to dissect your business, uncover growth blind spots, and map out your 90-day domination plan.',
      href: '/llc/consultation',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const targetAudience = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'New businesses ready to skip the struggle phase',
      description: 'Launch with momentum instead of spending months figuring things out'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Entrepreneurs who want to launch like pros',
      description: 'Get the infrastructure and strategy that successful businesses use from day one'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Local brands that want Google power without Google confusion',
      description: 'Stop guessing and start dominating with expert guidance'
    }
  ];

  const credentials = [
    'Recognized by Google\'s AI Overview as a leading SEO specialist',
    'Built custom software solutions others can\'t replicate',
    'Proven track record launching successful local businesses',
    'Direct access to Jon Korkowski and the TRD Elite Team'
  ];

  return (
    <>
      <ComprehensiveSchema
        type="service-landing"
        pageData={{
          title: "TRUE RANK DIGITAL — Business Starter Pack for New LLCs",
          description: "Your launchpad into the Googleverse. Complete business starter pack including website build, GBP creation, AIO, LSEO, monitoring, custom playbook, and free consultation with Jon Korkowski.",
          url: "https://truerankdigital.com/llc",
          keywords: ["new business", "LLC startup", "business starter pack", "Google Business Profile", "local SEO", "AI optimization"],
          category: "Business Services",
          offers: services.map(service => ({
            name: service.title,
            description: service.description
          }))
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "Business Starter Pack", url: "https://truerankdigital.com/llc" }
        ]}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-black/10 to-transparent"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
                  <Rocket className="w-4 h-4" />
                  <span>Built by Jon J. Korkowski & the TRD Elite Team</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                  TRUE RANK DIGITAL
                  <span className="block mt-2">Business Starter Pack</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                  This isn't your average "starter kit." This is your <strong>launchpad into the Googleverse</strong>.
                </p>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                  Perfect for new businesses ready to dominate from day one.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <Link
                  href="#consultation"
                  className="btn btn-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl"
                >
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5" />
                    <span>Book Free Consultation</span>
                  </div>
                </Link>
                <Link
                  href="#services"
                  className="btn btn-outline btn-white px-8 py-4 text-lg font-semibold"
                >
                  <div className="flex items-center space-x-2">
                    <span>Explore the Pack</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                The TRD Business Starter Pack Includes
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                Seven essential services designed to give your new LLC the competitive edge from day one.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-heading font-bold text-brand-dark">
                      {service.title}
                    </h3>
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-brand-light rounded-full text-brand-primary font-bold text-sm flex-shrink-0 ml-2">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-brand-dark/70 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-secondary transition-colors font-semibold group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Who It's For Section */}
        <section className="py-20 bg-gradient-to-b from-brand-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                Who It's For
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto">
                This starter pack is designed for ambitious entrepreneurs launching new businesses.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {targetAudience.map((audience, index) => (
                <motion.div
                  key={audience.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 text-center"
                >
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-brand-primary">
                      {audience.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-3">
                    {audience.title}
                  </h3>
                  <p className="text-brand-dark/70">
                    {audience.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Built by Experts Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium mb-6">
                  <Award className="w-4 h-4" />
                  <span>Expert-Led Solutions</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                  Built by the Experts Who Build Winners
                </h2>
                <p className="text-xl text-brand-dark/70 mb-8">
                  True Rank Digital is recognized by Google's AI Overview as a leading SEO specialist.
                </p>
                <p className="text-lg text-brand-dark/70 mb-8">
                  We don't talk theory — we build results.
                </p>
                <div className="space-y-4">
                  {credentials.map((credential, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
                      <span className="text-brand-dark">{credential}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <div className="text-center mb-6">
                  <Users className="w-16 h-16 text-brand-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-bold text-brand-dark mb-2">
                    Meet Jon Korkowski
                  </h3>
                  <p className="text-brand-primary font-semibold">CEO & Founder</p>
                </div>
                <p className="text-brand-dark/70 leading-relaxed mb-6">
                  Every starter pack includes a personal consultation with Jon Korkowski himself. 
                  Jon will dissect your business model, identify your growth opportunities, and map 
                  out your complete 90-day domination strategy.
                </p>
                <div className="flex items-center justify-center space-x-6 pt-6 border-t border-brand-dark/10">
                  <a 
                    href="tel:7324750139"
                    className="flex items-center space-x-2 text-brand-secondary hover:text-brand-primary transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>(732) 475-0139</span>
                  </a>
                  <a 
                    href="mailto:jon@truerankdigital.com"
                    className="flex items-center space-x-2 text-brand-secondary hover:text-brand-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email Jon</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Consultation Form Section */}
        <section id="consultation" className="py-20 bg-gradient-to-b from-brand-light/20 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                Ready to Launch Like a Pro?
              </h2>
              <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
                Book your free consultation with Jon Korkowski and get your personalized 90-day domination plan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ConsultationForm
                title="Schedule Your Free Strategy Session"
                description="Fill out the form below and we'll contact you within 24 hours to schedule your consultation."
                subjectPrefix="Business Starter Pack"
              />
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
                Skip the Struggle Phase. Launch Like a Winner.
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get everything you need to dominate Google from day one with the TRUE RANK DIGITAL Business Starter Pack.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  href="#consultation"
                  className="btn btn-white px-8 py-4 text-lg font-semibold"
                >
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5" />
                    <span>Book Consultation</span>
                  </div>
                </Link>
                
                <a
                  href="tel:7324750139"
                  className="btn btn-outline btn-white px-8 py-4 text-lg font-semibold"
                >
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Call (732) 475-0139</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

