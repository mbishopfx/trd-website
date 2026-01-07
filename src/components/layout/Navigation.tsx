'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown,
  Rocket,
  Bot,
  TrendingUp,
  Users,
  Phone,
  MapPin,
  Search,
  Globe,
  Building,
  Settings,
  BarChart3,
  Shield,
  Database,
  Network,
  MessageSquare,
  Target,
  Zap,
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
  Bug
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
    name: 'Who We Serve',
    href: '/services',
    icon: <Target className="w-4 h-4" />,
    items: [
      {
        name: 'Lawyers & Legal Services',
        href: '/services?icp=lawyers',
        icon: <Scale className="w-4 h-4" />,
        description: 'Law firms and attorneys needing local pack domination and Google Business Profile optimization'
      },
      {
        name: 'Medical & Dental Practices',
        href: '/services?icp=medical',
        icon: <Heart className="w-4 h-4" />,
        description: 'Healthcare providers seeking Google visibility and patient acquisition through local search'
      },
      {
        name: 'Home Services Contractors',
        href: '/services?icp=home-services',
        icon: <Hammer className="w-4 h-4" />,
        description: 'Plumbing, HVAC, roofing, and home improvement contractors needing local pack results'
      },
      {
        name: 'Real Estate Agents',
        href: '/services?icp=real-estate',
        icon: <Home className="w-4 h-4" />,
        description: 'Real estate professionals requiring Google Business Profile optimization for listings visibility'
      },
      {
        name: 'Financial Advisors & Accountants',
        href: '/services?icp=financial',
        icon: <DollarSign className="w-4 h-4" />,
        description: 'Financial professionals needing local search optimization for client acquisition'
      },
      {
        name: 'Auto Repair & Dealerships',
        href: '/services?icp=automotive',
        icon: <Car className="w-4 h-4" />,
        description: 'Auto repair shops and dealerships seeking local pack domination'
      },
      {
        name: 'Pest Control & Lawn Care',
        href: '/services?icp=pest-control',
        icon: <Bug className="w-4 h-4" />,
        description: 'Service-based businesses needing hyperlocal Google optimization'
      }
    ]
  },
  {
    name: 'Services',
    href: '/services',
    icon: <Settings className="w-4 h-4" />,
    items: [
      {
        name: 'Digital Marketing',
        href: '/services/digital-marketing',
        icon: <TrendingUp className="w-4 h-4" />,
        description: 'Comprehensive digital marketing and advertising services'
      },
      {
        name: 'Google Business Profile',
        href: '/services/google-business-profile',
        icon: <Search className="w-4 h-4" />,
        description: 'Optimize your Google Business Profile for maximum visibility'
      },
      {
        name: 'Website Engineering',
        href: '/services/website-development',
        icon: <Globe className="w-4 h-4" />,
        description: 'Custom website design, development, and UX optimization'
      },
      {
        name: 'Social Marketing',
        href: '/services/social-media',
        icon: <Users className="w-4 h-4" />,
        description: 'Organic social media management and advertising'
      },
      {
        name: 'CRM With AI Chat',
        href: '/services/crm-ai-chat',
        icon: <Bot className="w-4 h-4" />,
        description: 'AI-powered CRM with automated customer interactions'
      },
      {
        name: 'Business Consulting',
        href: '/services/business-consulting',
        icon: <Building className="w-4 h-4" />,
        description: 'Strategic guidance for digital growth and optimization'
      },
      {
        name: 'Local SEO',
        href: '/services/local-seo',
        icon: <MapPin className="w-4 h-4" />,
        description: 'Dominate local search and Google Maps results'
      },
      {
        name: 'PPC Campaigns',
        href: '/services/ppc-campaigns',
        icon: <TrendingUp className="w-4 h-4" />,
        description: 'Targeted Google Ads campaigns for immediate results'
      },
      {
        name: 'SEO Tactics',
        href: '/services/seo-tactics',
        icon: <Search className="w-4 h-4" />,
        description: 'Proven SEO strategies to boost your Google rankings'
      },
    ]
  },
  {
    name: 'Staff',
    href: '/staff',
    icon: <Users className="w-4 h-4" />,
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: <Phone className="w-4 h-4" />,
  },
  {
    name: 'AIO',
    href: '/learn-aio',
    icon: <Bot className="w-4 h-4" />,
    badge: 'AI',
    description: 'Discover our AI-powered optimization technology'
  }
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-glass border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src="/images/logos/trd-logo1.avif"
                  alt="True Rank Digital"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-heading font-bold text-brand-dark">
                  True Rank Digital
                </h1>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.items ? (
                  // Dropdown Menu Item
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1.5 px-3 py-2 text-brand-dark hover:text-brand-primary transition-colors duration-200 font-medium text-sm">
                      {item.icon}
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="ml-1 px-2 py-0.5 text-xs font-semibold bg-brand-accent text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-96 bg-white/95 backdrop-blur-md border border-white/30 rounded-xl shadow-xl overflow-hidden"
                        >
                          <div className="p-2 max-h-[80vh] overflow-y-auto custom-scrollbar">
                            <div className="grid grid-cols-2 gap-1">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="flex items-start space-x-2 p-2 rounded-lg hover:bg-white/25 transition-colors duration-200 group/item"
                                >
                                  <div className="flex-shrink-0 mt-0.5 text-brand-primary group-hover/item:text-brand-accent transition-colors duration-200">
                                    {subItem.icon}
                                  </div>
                                  <div className="flex-grow">
                                    <h4 className="font-semibold text-brand-dark group-hover/item:text-brand-primary transition-colors duration-200">
                                      {subItem.name}
                                    </h4>
                                  {subItem.description && (
                                    <p className="text-sm text-brand-dark/70 mt-1">
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
                    className="flex items-center space-x-1.5 px-3 py-2 text-brand-dark hover:text-brand-primary transition-colors duration-200 font-medium text-sm relative group"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="ml-1 px-2 py-0.5 text-xs font-semibold bg-brand-accent text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
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
                href="/free-audit"
                className="glass-button px-4 py-2.5 bg-brand-primary text-white font-semibold rounded-full flex items-center space-x-1.5 hover:bg-brand-primary/90 transition-all duration-300 text-sm whitespace-nowrap"
              >
                <Rocket className="w-3.5 h-3.5" />
                <span>Custom Playbook</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg glass-button text-brand-dark hover:text-brand-primary transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/98 backdrop-blur-md border-t border-white/30 shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.items ? (
                    // Mobile Dropdown Item
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="w-full flex items-center justify-between p-3 text-left text-brand-dark hover:text-brand-primary transition-colors duration-200 font-medium rounded-lg hover:bg-white/20"
                      >
                        <div className="flex items-center space-x-2">
                          {item.icon}
                          <span>{item.name}</span>
                          {item.badge && (
                            <span className="ml-1 px-2 py-0.5 text-xs font-semibold bg-brand-accent text-white rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-6 mt-2 space-y-1"
                          >
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/25 transition-colors duration-200"
                              >
                                <div className="flex-shrink-0 mt-0.5 text-brand-primary">
                                  {subItem.icon}
                                </div>
                                <div>
                                  <h4 className="font-semibold text-brand-dark">{subItem.name}</h4>
                                  {subItem.description && (
                                    <p className="text-sm text-brand-dark/70 mt-1">{subItem.description}</p>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    // Mobile Regular Item
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-2 p-3 text-brand-dark hover:text-brand-primary transition-colors duration-200 font-medium rounded-lg hover:bg-white/20"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="ml-1 px-2 py-0.5 text-xs font-semibold bg-brand-accent text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-white/20">
                <Link
                  href="/free-audit"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full glass-button px-4 py-2.5 bg-brand-primary text-white font-semibold rounded-full flex items-center justify-center space-x-1.5 hover:bg-brand-primary/90 transition-all duration-300 text-sm"
                >
                  <Rocket className="w-3.5 h-3.5" />
                  <span>Custom Playbook</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
