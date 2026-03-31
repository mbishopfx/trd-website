'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown,
  Rocket,
  Users,
  Phone,
  MapPin,
  Search,
  Globe,
  Building,
  Settings,
  BarChart3,
  Database,
  Network,
  MessageSquare,
  Target,
  Zap,
  TrendingUp,
  Store,
  ShoppingBag,
  Wrench,
  Briefcase,
  UtensilsCrossed,
  Factory,
  Scale,
  Heart,
  Home,
  DollarSign,
  Hammer,
  Car,
  Bug,
  Activity,
  Binary,
  Cpu
} from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string;
  description?: string;
  items?: NavItem[];
}

const navigationItems: NavItem[] = [
  {
    name: 'About',
    href: '/about',
    icon: <Building className="w-4 h-4" />,
  },
  {
    name: 'Services',
    href: '/services',
    icon: <Cpu className="w-4 h-4" />,
    items: [
      {
        name: 'AI Search Optimization',
        href: '/services/ai-seo',
        icon: <Zap className="w-4 h-4" />,
        description: 'Improve visibility across AI-assisted and answer-driven discovery.'
      },
      {
        name: 'Digital Marketing & Advertising',
        href: '/services/digital-marketing',
        icon: <TrendingUp className="w-4 h-4" />,
        description: 'Full-funnel strategy to drive qualified traffic and conversions.'
      },
      {
        name: 'Google Business Profile Optimization',
        href: '/services/google-business-profile',
        icon: <MapPin className="w-4 h-4" />,
        description: 'Increase local map visibility, actions, and lead volume from GBP.'
      },
      {
        name: 'Local SEO',
        href: '/services/local-seo',
        icon: <Search className="w-4 h-4" />,
        description: 'Rank in the markets that matter with stronger local intent coverage.'
      },
      {
        name: 'PPC Campaigns',
        href: '/services/ppc-campaigns',
        icon: <Target className="w-4 h-4" />,
        description: 'Capture high-intent demand immediately with paid search campaigns.'
      },
      {
        name: 'SEO Tactics',
        href: '/services/seo-tactics',
        icon: <Activity className="w-4 h-4" />,
        description: 'Technical and on-page SEO execution tied to growth outcomes.'
      },
      {
        name: 'Website Engineering',
        href: '/services/website-development',
        icon: <Globe className="w-4 h-4" />,
        description: 'Build or rebuild your site for speed, clarity, and conversion.'
      },
      {
        name: 'Social Media Management',
        href: '/services/social-media',
        icon: <Users className="w-4 h-4" />,
        description: 'Strengthen your authority across channels with consistent messaging.'
      },
      {
        name: 'CRM With AI Chat',
        href: '/services/crm-ai-chat',
        icon: <MessageSquare className="w-4 h-4" />,
        description: 'Automate response and follow-up while improving lead handling.'
      },
      {
        name: 'Business Consulting',
        href: '/services/business-consulting',
        icon: <Briefcase className="w-4 h-4" />,
        description: 'Strategic guidance to align marketing execution with business goals.'
      },
    ]
  },
  {
    name: 'GET YOUR PLATFORM AUDIT',
    href: '/contact',
    icon: <Search className="w-4 h-4" />,
  },
  {
    name: 'EXECUTIVE TEAM',
    href: '/meet-the-staff',
    icon: <Users className="w-4 h-4" />,
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: <Phone className="w-4 h-4" />,
  }
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-8 left-0 right-0 z-50 bg-brand-obsidian/80 backdrop-blur-xl border-b border-white/5 py-2 transition-all duration-300"
    >
      <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-brand-cyan/20 blur-lg rounded-full group-hover:bg-brand-cyan/40 transition-all"></div>
                <Image
                  src="/images/logos/trd-logo1.avif"
                  alt="True Rank Digital"
                  width={48}
                  height={48}
                  className="relative z-10 w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-heading font-black text-white tracking-tighter uppercase italic">
                  True Rank Digital
                </h1>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-nowrap">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.items ? (
                  // Dropdown Menu Item
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1.5 px-2.5 xl:px-3 py-2 text-gray-300 hover:text-brand-cyan transition-all duration-200 font-bold text-[10px] xl:text-[11px] uppercase tracking-[0.16em] whitespace-nowrap">
                      {item.icon}
                      <span className="whitespace-nowrap leading-none">{item.name}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-brand-obsidian-light border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                        >
                          <div className="p-3">
                            <div className="grid grid-cols-1 gap-1">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="flex items-start space-x-3 p-3 rounded-xl hover:bg-brand-obsidian/5 transition-all duration-200 group/item"
                                >
                                  <div className="flex-shrink-0 mt-0.5 text-brand-cyan group-hover/item:scale-110 transition-transform duration-200">
                                    {subItem.icon}
                                  </div>
                                  <div className="flex-grow">
                                    <h4 className="font-bold text-sm text-white group-hover/item:text-brand-cyan transition-colors duration-200">
                                      {subItem.name}
                                    </h4>
                                  {subItem.description && (
                                    <p className="text-[11px] text-gray-500 mt-1 font-medium leading-relaxed">
                                      {subItem.description}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  // Regular Menu Item
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1.5 px-2.5 xl:px-3 py-2 text-gray-300 hover:text-brand-cyan transition-all duration-200 font-bold text-[10px] xl:text-[11px] uppercase tracking-[0.16em] whitespace-nowrap relative group"
                  >
                    {item.icon}
                    <span className="whitespace-nowrap leading-none">{item.name}</span>
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="px-5 xl:px-6 py-2.5 bg-brand-cyan text-brand-obsidian font-black rounded-full flex items-center space-x-2 shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all duration-300 text-[10px] xl:text-xs uppercase tracking-[0.16em] whitespace-nowrap"
              >
                <Zap className="w-3.5 h-3.5 animate-pulse" />
                <span className="whitespace-nowrap leading-none">Run Audit</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-xl glass-cyan text-brand-cyan"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-brand-obsidian border-b border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2 px-2">
                    {item.name}
                  </div>
                  {item.items ? (
                    <div className="grid grid-cols-1 gap-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center space-x-3 p-3 rounded-xl bg-brand-obsidian/5 text-white"
                        >
                          <div className="text-brand-cyan">{subItem.icon}</div>
                          <span className="font-bold text-sm">{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-3 p-3 rounded-xl bg-brand-obsidian/5 text-white"
                    >
                      <div className="text-brand-cyan">{item.icon}</div>
                      <span className="font-bold text-sm">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full px-6 py-4 bg-brand-cyan text-brand-obsidian font-black rounded-xl flex items-center justify-center space-x-2 text-sm uppercase tracking-widest"
                >
                  <Zap className="w-4 h-4" />
                  <span>Run Search Ability Audit</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
