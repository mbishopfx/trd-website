'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  AlertTriangle,
  Home,
  Search,
  ArrowRight,
  Zap,
  BookOpen,
  Users,
  Phone,
  Star,
  TrendingUp,
  Target,
  Map,
  Sparkles,
  RefreshCw
} from 'lucide-react';

export default function NotFound() {
  const popularPages = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Our Platform',
      description: 'Explore our 7 AI-powered SEO tools',
      href: '/platform',
      badge: 'New!'
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: 'Education Hub',
      description: 'Advanced SEO and AI search guides',
      href: '/education',
      badge: 'Updated'
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'SEO Services',
      description: 'Professional SEO and digital marketing',
      href: '/services',
      badge: 'Popular'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Meet Our Team',
      description: 'Get to know the experts behind True Rank',
      href: '/staff',
      badge: 'Team'
    }
  ];

  const quickLinks = [
    { name: 'Free SEO Audit', href: '/free-audit', icon: <Search className="w-4 h-4" /> },
    { name: 'Grid Ranking System', href: '/platform/grid-ranking', icon: <Map className="w-4 h-4" /> },
    { name: 'E-E-A-T Analysis', href: '/platform/eeat-analysis', icon: <Star className="w-4 h-4" /> },
    { name: 'AI Search Preparation', href: '/education/ai-search-preparation', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Contact Us', href: '/contact', icon: <Phone className="w-4 h-4" /> },
    { name: 'About True Rank', href: '/about', icon: <TrendingUp className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light/50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full">
        {/* Main Content */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-12 h-12 text-white" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -right-2"
                >
                  <Sparkles className="w-8 h-8 text-brand-accent" />
                </motion.div>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark mb-4">
              Oops! We've <span className="text-brand-primary">Updated!</span>
            </h1>
            <p className="text-xl lg:text-2xl text-brand-dark/70 mb-6 max-w-3xl mx-auto leading-relaxed">
              The page you're looking for might have moved to a new location. We've recently restructured our site with exciting new features and tools!
            </p>
            <div className="flex items-center justify-center space-x-2 text-brand-accent mb-8">
              <RefreshCw className="w-5 h-5" />
              <span className="font-semibold">Site recently updated with new platform tools and educational content</span>
            </div>
          </motion.div>

          {/* Main CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-primary to-brand-accent text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                <Home className="w-5 h-5" />
                <span>Go to Homepage</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/platform"
                className="inline-flex items-center space-x-2 border-2 border-brand-primary text-brand-primary px-8 py-4 rounded-full font-semibold hover:bg-brand-primary hover:text-white transition-all duration-300"
              >
                <Zap className="w-5 h-5" />
                <span>Explore New Platform</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Popular Pages Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-heading font-bold text-brand-dark text-center mb-8">
            Popular Destinations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPages.map((page, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300 group cursor-pointer"
              >
                <Link href={page.href} className="block">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-accent rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {page.icon}
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      page.badge === 'New!' ? 'bg-green-100 text-green-800' :
                      page.badge === 'Updated' ? 'bg-blue-100 text-blue-800' :
                      page.badge === 'Popular' ? 'bg-purple-100 text-purple-800' :
                      'bg-brand-light text-brand-dark'
                    }`}>
                      {page.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors duration-300">
                    {page.title}
                  </h3>
                  <p className="text-brand-dark/70 text-sm mb-3">
                    {page.description}
                  </p>
                  <div className="flex items-center text-brand-primary text-sm font-semibold">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card p-8"
        >
          <h3 className="text-xl font-heading font-bold text-brand-dark text-center mb-6">
            Quick Navigation
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-white/50 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-lg flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>
                  <span className="text-sm font-medium text-brand-dark text-center group-hover:text-brand-primary transition-colors duration-300">
                    {link.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-brand-primary/5 to-brand-accent/5 rounded-2xl p-8">
            <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
              Still can't find what you're looking for?
            </h3>
            <p className="text-brand-dark/70 mb-6 max-w-2xl mx-auto">
              Our team is here to help! Get in touch and we'll point you in the right direction or provide personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-brand-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-primary/90 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>Contact Support</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/free-audit"
                  className="inline-flex items-center space-x-2 border border-brand-primary text-brand-primary px-6 py-3 rounded-full font-semibold hover:bg-brand-primary hover:text-white transition-colors duration-300"
                >
                  <Search className="w-4 h-4" />
                  <span>Free SEO Audit</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-8 text-brand-dark/50 text-sm"
        >
          <p>
            True Rank Digital | Professional SEO & Digital Marketing Services
          </p>
        </motion.div>
      </div>
    </div>
  );
}
