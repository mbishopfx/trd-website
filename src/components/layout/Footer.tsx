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
  TrendingUp
} from 'lucide-react';

// Import TikTok and Pinterest icons (using external icons or custom SVGs)
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
    title: 'Services',
    links: [
      { name: 'Local SEO & Google Maps', href: '/services/local-seo' },
      { name: 'Google Business Profile', href: '/services/google-business-profile' },
      { name: 'AI-Enhanced SEO', href: '/services/ai-seo' },
      { name: 'Website Development', href: '/services/website-development' },
      { name: 'Ecommerce Optimization', href: '/services/ecommerce-optimization' }
    ]
  },
  {
    title: 'Service Areas',
    links: [
      { name: 'East Brunswick, NJ', href: '/locations/east-brunswick' },
      { name: 'Edison, NJ', href: '/locations/edison' },
      { name: 'New Brunswick, NJ', href: '/locations/new-brunswick' },
      { name: 'North Brunswick, NJ', href: '/locations/north-brunswick' },
      { name: 'Sayreville, NJ', href: '/locations/sayreville' },
      { name: 'South River, NJ', href: '/locations/south-river' },
      { name: 'View All Areas', href: '/locations' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/staff' },
      { name: 'Learn About AIO', href: '/learn-aio' },
      { name: 'SEO Platform', href: '/platform' },
      { name: 'Contact Us', href: '/contact' }
    ]
  },
  {
    title: 'Platform Tools',
    links: [
      { name: 'Grid Ranking System', href: '/platform/grid-ranking' },
      { name: 'E-E-A-T Analysis', href: '/platform/eeat-analysis' },
      { name: 'Indexability Analysis', href: '/platform/indexability' },
      { name: 'Knowledge Graph', href: '/platform/knowledge-graph' },
      { name: 'Overwatch System', href: '/platform/overwatch' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Free Custom Playbook', href: '/free-audit' },
      { name: 'AI Technology', href: '/learn-aio' },
      { name: 'Referral Program', href: '/referral' }
    ]
  },
  {
    title: 'Education',
    links: [
      { name: 'AI Search Preparation', href: '/education/ai-search-preparation' },
      { name: 'Algorithm Adaptation', href: '/education/algorithm-adaptation' },
      { name: 'Custom vs Cookie-Cutter', href: '/education/custom-vs-cookie-cutter' },
      { name: 'Future-Proofing SEO', href: '/education/future-proofing-seo' },
      { name: 'All Education Guides', href: '/education' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR Compliance', href: '/gdpr' }
    ]
  }
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/true-rank-digital',
    icon: <Linkedin className="w-5 h-5" />,
    color: 'hover:text-blue-600'
  },
  {
    name: 'Facebook', 
    href: 'https://www.facebook.com/truerankdigital',
    icon: <Facebook className="w-5 h-5" />,
    color: 'hover:text-blue-600'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/truerankdigital_/?hl=en', 
    icon: <Instagram className="w-5 h-5" />,
    color: 'hover:text-pink-500'
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
    color: 'hover:text-black'
  },
  {
    name: 'Pinterest',
    href: 'https://www.pinterest.com/truerankdigital',
    icon: <PinterestIcon />,
    color: 'hover:text-red-600'
  }
];

const contactInfo = {
  address: 'East Brunswick, NJ 08816',
  phone: '(732) 475-0139',
  email: 'jon@truerankdigital.com',
  hours: '24/7 Available'
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-dark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-8 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    src="/images/logos/trd-logo1.avif"
                    alt="True Rank Digital"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-heading font-bold">True Rank Digital</h3>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Professional digital marketing services featuring proprietary SEO dashboard platform with grid map ranking analysis, competitor intelligence monitoring, and algorithm-proof optimization strategies. Master proven Google tactics with our in-house technology solutions and advanced educational resources.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 flex-shrink-0 text-brand-primary" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 flex-shrink-0 text-brand-primary" />
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-sm hover:text-brand-primary transition-colors duration-200"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 flex-shrink-0 text-brand-primary" />
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm hover:text-brand-primary transition-colors duration-200"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Clock className="w-4 h-4 flex-shrink-0 text-brand-primary" />
                  <span className="text-sm">{contactInfo.hours}</span>
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
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold font-heading text-white">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-brand-primary transition-colors duration-200 text-sm flex items-center space-x-1 group"
                    >
                      <span>{link.name}</span>
                      {link.external && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            
            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-1"
            >
              <span className="text-gray-400 text-sm mr-4">Follow us:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-gray-800 text-gray-400 transition-all duration-200 ${social.color} hover:bg-gray-700 hover:scale-110`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  title={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-right"
            >
              <p>&copy; {currentYear} True Rank Digital. All rights reserved.</p>
              <p className="mt-1">
                Built by True Rank Digital
              </p>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 py-8"
        >
          <div className="text-center">
            <h4 className="text-xl font-heading font-semibold mb-2">
              Ready to Dominate Your Market?
            </h4>
            <p className="text-gray-400 mb-6">
              Get your free custom playbook and discover how our AI technology can transform your business.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/free-audit"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-primary/90 transition-all duration-300 shadow-glow hover:shadow-glow-lg"
              >
                <span>Get Your Free Custom Playbook</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
