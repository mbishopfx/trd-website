'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Building, 
  CheckCircle, 
  Search,
  Globe,
  Smartphone,
  BarChart3,
  Shield,
  Phone,
  Award
} from 'lucide-react';
import ComprehensiveSchema from '@/components/seo/ComprehensiveSchema';

export default function EastBrunswickServicesPage() {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Local SEO Optimization',
      description: 'Dominate East Brunswick local searches with advanced SEO strategies targeting Middlesex County customers.',
      features: [
        'Google My Business optimization',
        'Local keyword targeting',
        'Citation building and management',
        'Local schema markup implementation'
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Website Development & Optimization',
      description: 'Custom website design and development focused on converting East Brunswick visitors into customers.',
      features: [
        'Mobile-responsive design',
        'Fast loading optimization',
        'SEO-optimized architecture',
        'Local business integration'
      ]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Google Business Profile Management',
      description: 'Complete Google Business Profile optimization to capture "Near Me" searches in East Brunswick.',
      features: [
        'Profile setup and optimization',
        'Review management system',
        'Post scheduling and content',
        'Performance monitoring'
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Digital Marketing Campaigns',
      description: 'Targeted digital advertising campaigns to reach East Brunswick customers across all platforms.',
      features: [
        'Google Ads management',
        'Facebook & Instagram advertising',
        'Local audience targeting',
        'Conversion tracking setup'
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Social Media Management',
      description: 'Build your East Brunswick community presence with strategic social media marketing.',
      features: [
        'Content creation and scheduling',
        'Community engagement',
        'Local event promotion',
        'Brand reputation building'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Reputation Management',
      description: 'Protect and enhance your business reputation in the East Brunswick community.',
      features: [
        'Review monitoring and response',
        'Crisis management protocols',
        'Positive review generation',
        'Online reputation audits'
      ]
    }
  ];

  const whyChooseUs = [
    'Local East Brunswick team with community knowledge',
    'Custom schema markup and technical SEO execution',
    'Custom proprietary SEO software platform',
    'Same-day response and dedicated support',
    'Free comprehensive custom playbook included'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <MapPin className="w-6 h-6 text-brand-accent" />
              <span className="text-brand-accent font-semibold">East Brunswick, New Jersey</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              Professional SEO Services in <span className="text-brand-accent">East Brunswick</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Expert digital marketing solutions designed specifically for East Brunswick businesses. Local SEO, website development, and custom optimization strategies that deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/free-audit"
                  className="inline-flex items-center space-x-2 bg-white text-brand-primary px-8 py-4 rounded-full font-semibold hover:bg-brand-light transition-colors duration-300"
                >
                  <Search className="w-5 h-5" />
                  <span>Free East Brunswick Custom Playbook</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-brand-primary transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (732) 475-0139</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-brand-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
              Digital Marketing Services for East Brunswick Businesses
            </h2>
            <p className="text-xl text-brand-dark/70 max-w-4xl mx-auto leading-relaxed">
              Comprehensive digital marketing solutions tailored specifically for the East Brunswick market and Middlesex County business landscape.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 hover:shadow-glass-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                      {service.title}
                    </h3>
                    <p className="text-brand-dark/70 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-brand-dark/70">
                          <CheckCircle className="w-4 h-4 text-brand-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-end">
                      <Link
                        href="/contact"
                        className="text-brand-primary hover:text-brand-primary/80 font-semibold text-sm"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                Why East Brunswick Businesses Choose True Rank Digital
              </h2>
              <p className="text-xl text-brand-dark/70 mb-8 leading-relaxed">
                As your local digital marketing partner, we understand the unique challenges and opportunities in the East Brunswick market.
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0" />
                    <span className="text-brand-dark">{reason}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="text-center mb-8">
                <Award className="w-16 h-16 text-brand-primary mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-2">
                  Built for Local Search
                </h3>
                <p className="text-brand-dark/70">
                  A practical, execution-first approach to visibility and lead flow.
                </p>
              </div>
              <ul className="space-y-4 text-brand-dark/80">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span>Local intent mapping: service + neighborhood + proximity queries.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span>Google Business Profile workflows aligned to your real services and service areas.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span>Technical SEO execution with schema support and indexing hygiene.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span>Transparent next steps: audit → playbook → implementation.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              Ready to Dominate East Brunswick Search Results?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get your free custom playbook and discover how we can help your East Brunswick business outrank the competition and attract more local customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/free-audit"
                  className="inline-flex items-center space-x-2 bg-white text-brand-primary px-8 py-4 rounded-full font-semibold hover:bg-brand-light transition-colors duration-300"
                >
                  <Search className="w-5 h-5" />
                  <span>Get Free Custom Playbook</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-brand-primary transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Schedule Consultation</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schema Markup */}
      <ComprehensiveSchema
        type="location"
        pageData={{
          title: "Professional SEO Services in East Brunswick, NJ | True Rank Digital",
          description: "Expert SEO and digital marketing services for East Brunswick businesses. Local SEO, Google Business Profile optimization, website development, and custom digital solutions.",
          url: "https://truerankdigital.com/east-brunswick-services",
          keywords: ["East Brunswick SEO services", "East Brunswick digital marketing", "local SEO East Brunswick NJ", "Google Business Profile East Brunswick", "website development East Brunswick"],
          category: "Local SEO Services",
          locationData: {
            city: "East Brunswick",
            state: "New Jersey", 
            zipCode: "08816",
            coordinates: { lat: "40.4862", lng: "-74.4518" }
          }
        }}
        breadcrumbs={[
          { name: "Home", url: "https://truerankdigital.com" },
          { name: "East Brunswick Services", url: "https://truerankdigital.com/east-brunswick-services" }
        ]}
      />
    </div>
  );
}
