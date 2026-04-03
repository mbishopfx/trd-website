'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { caseStudies } from '@/data/caseStudies';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';

const TikTokIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zm-1.291 19.49h2.039L6.486 3.24H4.298L17.61 20.643z" />
  </svg>
);

interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
  description?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Core Services',
    links: [
      { name: 'AI Search Optimization', href: '/services/ai-seo' },
      { name: 'Digital Marketing & Advertising', href: '/services/digital-marketing' },
      { name: 'Google Business Profile Optimization', href: '/services/google-business-profile' },
      { name: 'Local SEO', href: '/services/local-seo' },
      { name: 'PPC Campaigns', href: '/services/ppc-campaigns' },
      { name: 'SEO Tactics', href: '/services/seo-tactics' },
      { name: 'Website Engineering', href: '/services/website-development' },
      { name: 'Social Media Management', href: '/services/social-media' },
      { name: 'CRM With AI Chat', href: '/services/crm-ai-chat' },
      { name: 'Business Consulting', href: '/services/business-consulting' },
    ]
  },
  {
    title: 'Platform',
    links: [
      { name: 'Platform Audit', href: '/contact' },
      { name: 'Entity Gap Analysis', href: '/contact' },
      { name: 'Schema Gap Analysis', href: '/contact' },
      { name: 'Technical SEO Review', href: '/services/seo-tactics' },
      { name: 'AI Search Readiness Review', href: '/services/ai-seo' }
    ]
  },
  {
    title: 'Knowledge Base',
    links: [
      { name: 'LLM.txt Mastery', href: '/education/ai-search-preparation' },
      { name: 'Answer Engine Optimization', href: '/education/algorithm-adaptation' },
      { name: 'Agentic Commerce', href: '/education/future-proofing-seo' },
      { name: 'Zero-Click Conversion', href: '/education/custom-vs-cookie-cutter' },
      { name: 'View All Protocols', href: '/education' }
    ]
  }
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/true-rank-digital',
    icon: <Linkedin className="w-5 h-5" />,
    color: 'hover:text-brand-cyan'
  },
  {
    name: 'X',
    href: 'https://x.com/TRUERANKDIGITAL',
    icon: <XIcon />,
    color: 'hover:text-white'
  },
  {
    name: 'Facebook', 
    href: 'https://www.facebook.com/truerankdigital',
    icon: <Facebook className="w-5 h-5" />,
    color: 'hover:text-brand-cyan'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/truerankdigital_/?hl=en', 
    icon: <Instagram className="w-5 h-5" />,
    color: 'hover:text-brand-blue'
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UC9wb8G1oROv_iUIDRL7JIWA',
    icon: <Youtube className="w-5 h-5" />,
    color: 'hover:text-red-500'
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@truerankdigital_',
    icon: <TikTokIcon />,
    color: 'hover:text-brand-cyan'
  }
];

const contactInfo = {
  address: '288 Summerhill Rd, suite 3, East Brunswick, NJ 08816',
  phone: '(732) 475-0139',
  email: 'info@truerankdigital.com',
  hours: '24/7 Agentic Monitoring'
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-obsidian text-white overflow-hidden border-t border-white/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-brand-cyan/20 blur-lg rounded-full" />
                  <Image
                    src="/images/logos/trd-logo1.avif"
                    alt="True Rank Digital"
                    width={48}
                    height={48}
                    className="relative z-10 w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-heading font-black tracking-tighter uppercase italic">
                  True Rank <span className="text-brand-cyan">Digital</span>
                </h3>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light max-w-sm">
                The definitive authority in <span className="text-white font-medium">AI Search Visibility & Performance Marketing</span>. We engineer entity signals and growth systems that turn visibility into qualified demand.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4 flex-shrink-0 text-brand-cyan mt-1" />
                  <span className="text-sm font-medium leading-relaxed">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-4 h-4 flex-shrink-0 text-brand-cyan" />
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-sm font-bold text-white hover:text-brand-cyan transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4 flex-shrink-0 text-brand-cyan" />
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm font-bold text-white hover:text-brand-cyan transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Clock className="w-4 h-4 flex-shrink-0 text-brand-cyan" />
                  <span className="text-xs font-black uppercase tracking-widest">{contactInfo.hours}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-brand-cyan transition-all duration-200 text-sm font-medium group flex items-start"
                    >
                      <div className="w-0 group-hover:w-2 h-px bg-brand-cyan mr-0 group-hover:mr-2 mt-2 transition-all duration-300 flex-shrink-0" />
                      <div>
                        <span className="block">{link.name}</span>
                        {link.description ? (
                          <span className="mt-1 block text-[11px] leading-relaxed text-gray-500 group-hover:text-gray-400 transition-colors duration-200">
                            {link.description}
                          </span>
                        ) : null}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-white/10 py-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="max-w-3xl">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500">
                Case Studies
              </h4>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                Real performance briefs showing how we solve category-specific visibility problems when local operators need stronger authority, more qualified demand, and clearer market ownership.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="group block h-full rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/35 hover:bg-white/[0.05]"
                  >
                    <div className="text-[10px] font-black uppercase tracking-[0.24em] text-brand-cyan/80">
                      Case Study
                    </div>
                    <h5 className="mt-4 text-base font-bold leading-snug text-white group-hover:text-brand-cyan transition-colors duration-200">
                      {study.title}
                    </h5>
                    {study.footerDescription ? (
                      <p className="mt-3 text-[13px] leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                        {study.footerDescription}
                      </p>
                    ) : null}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-white/10 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mr-4">Uplink Protocols:</span>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl bg-brand-obsidian/5 text-gray-400 transition-all duration-300 ${social.color} hover:bg-brand-obsidian/10`}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* BBB Seal */}
            <div className="flex-shrink-0">
              <a
                href="https://www.bbb.org/us/nj/east-brunswick/profile/internet-marketing-services/true-rank-digital-0221-90240783/#sealclick"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="True Rank Digital BBB Business Review"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://seal-newjersey.bbb.org/seals/blue-seal-280-80-bbb-90240783.png"
                  alt="True Rank Digital BBB Business Review"
                  width={280}
                  height={80}
                  className="h-auto w-[220px] sm:w-[260px] border-0"
                />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-1">
                &copy; {currentYear} True Rank Digital &bull; East Brunswick, NJ
              </p>
              <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">
                Definitive AI Search Authority
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
