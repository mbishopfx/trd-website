'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  ExternalLink,
  TrendingUp,
  Zap,
  Bot,
  Network,
  Target,
  Shield,
  Activity,
  Globe,
  Cpu
} from 'lucide-react';

const TikTokIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.14.5C5.86.5 2.7 5 2.7 8.75c0 2.27.86 4.3 2.7 5.05.3.12.57 0 .66-.33l.27-1.06c.1-.32.06-.44-.2-.72-.6-.84-.98-1.94-.98-3.49 0-4.49 3.36-8.53 8.76-8.53 4.78 0 7.41 2.92 7.41 6.82 0 5.13-2.27 9.44-5.65 9.44-1.86 0-3.25-1.53-2.8-3.41.53-2.25 1.56-4.68 1.56-6.3 0-1.45-.78-2.67-2.39-2.67-1.9 0-3.42 1.96-3.42 4.58 0 1.67.57 2.8.57 2.8l-2.28 9.65c-.68 2.87-.1 6.38-.05 6.73.03.19.27.24.38.09.15-.2 2.07-2.56 2.84-5.34l1.05-4.1c.52.99 2.04 1.86 3.65 1.86 4.8 0 8.06-4.37 8.06-10.22C21.28 4.11 17.28.5 12.14.5z"/>
  </svg>
);

interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
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
    title: 'Company',
    links: [
      { name: 'About the Vision', href: '/about' },
      { name: 'Platform Audit', href: '/contact' },
      { name: 'Agentic Ecosystem', href: '/ai-engine' },
      { name: 'Command Center', href: '/contact' }
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
    icon: <Twitter className="w-5 h-5" />,
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
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-12 lg:gap-8">
          
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
                      className="text-gray-400 hover:text-brand-cyan transition-all duration-200 text-sm font-medium group flex items-center"
                    >
                      <div className="w-0 group-hover:w-2 h-px bg-brand-cyan mr-0 group-hover:mr-2 transition-all duration-300" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-white/10 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mr-4">Uplink Protocols:</span>
              {socialLinks.map((social, index) => (
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
